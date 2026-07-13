import { NextRequest, NextResponse } from "next/server";
import { aspirationSchema } from "@/lib/aspiration";

const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_WINDOW = 60_000;

export async function POST(req: NextRequest) {
    try {
        const ip =
            req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
            req.headers.get("x-real-ip") ||
            "unknown";

        const now = Date.now();
        const lastSubmit = rateLimitMap.get(ip);

        if (lastSubmit && now - lastSubmit < RATE_LIMIT_WINDOW) {
            const remaining = Math.ceil((RATE_LIMIT_WINDOW - (now - lastSubmit)) / 1000);
            return NextResponse.json(
                {
                    success: false,
                    message: `Mohon tunggu ${remaining} detik sebelum mengirim lagi`,
                },
                { status: 429 }
            );
        }

        const body = await req.json();
        const parsed = aspirationSchema.safeParse(body);

        if (!parsed.success) {
            const firstError = parsed.error.issues[0]?.message || "Data tidak valid";
            return NextResponse.json({ success: false, message: firstError }, { status: 400 });
        }

        const { name, aspiration } = parsed.data;

        const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

        if (!scriptUrl || scriptUrl.includes("YOUR_SCRIPT_ID")) {
            return NextResponse.json(
                { success: false, message: "Google Apps Script belum dikonfigurasi" },
                { status: 500 }
            );
        }

        const nowDate = new Date();
        const formattedDate = nowDate.toLocaleDateString("id-ID", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
        const formattedTime = nowDate.toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        });

        const payload: Record<string, string> = {
            aspiration,
            ip,
            date: formattedDate,
            time: formattedTime,
        };
        if (name) payload.name = name;

        await fetch(scriptUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
            signal: AbortSignal.timeout(10000),
        });

        rateLimitMap.set(ip, now);

        return NextResponse.json({
            success: true,
            message: "Aspirasi berhasil dikirim!",
        });
    } catch {
        return NextResponse.json(
            { success: false, message: "Terjadi kesalahan server" },
            { status: 500 }
        );
    }
}
