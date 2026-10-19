import { NextRequest, NextResponse } from "next/server";
import {
    ADMIN_COOKIE_NAME,
    adminSessionMaxAge,
    createAdminSessionToken,
    hasAdminSession,
    verifyAdminCredentials,
} from "@/lib/admin-auth";

export const runtime = "nodejs";

function cookieOptions() {
    return {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict" as const,
        path: "/",
        maxAge: adminSessionMaxAge,
    };
}

export async function GET() {
    return NextResponse.json(
        { authenticated: await hasAdminSession() },
        { headers: { "Cache-Control": "no-store" } }
    );
}

export async function POST(request: NextRequest) {
    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ message: "Permintaan login tidak valid" }, { status: 400 });
    }

    if (
        typeof body !== "object" ||
        body === null ||
        !("username" in body) ||
        !("password" in body) ||
        !verifyAdminCredentials(body.username, body.password)
    ) {
        return NextResponse.json({ message: "Username atau password salah" }, { status: 401 });
    }

    const response = NextResponse.json({ authenticated: true });
    response.cookies.set(ADMIN_COOKIE_NAME, createAdminSessionToken(), cookieOptions());
    return response;
}

export async function DELETE() {
    const response = NextResponse.json({ authenticated: false });
    response.cookies.set(ADMIN_COOKIE_NAME, "", { ...cookieOptions(), maxAge: 0 });
    return response;
}
