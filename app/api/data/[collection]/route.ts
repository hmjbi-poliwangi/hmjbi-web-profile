import { NextRequest, NextResponse } from "next/server";
import { hasAdminSession } from "@/lib/admin-auth";
import { readCollection, safeParseCollection, writeCollection } from "@/lib/data-store";
import { DataCollection, DataCollectionMap } from "@/types/data";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const collections: DataCollection[] = ["division", "events", "divisions-list", "proker"];
const MAX_BODY_BYTES = 1_000_000;

async function getCollection(params: Promise<{ collection: string }>) {
    const { collection } = await params;
    return collections.find((item) => item === collection) || null;
}

export async function GET(
    _request: NextRequest,
    { params }: { params: Promise<{ collection: string }> }
) {
    const collection = await getCollection(params);
    if (!collection) {
        return NextResponse.json({ message: "Kumpulan data tidak ditemukan" }, { status: 404 });
    }

    try {
        const data = await readCollection(collection);
        return NextResponse.json(data, { headers: { "Cache-Control": "no-store" } });
    } catch (error) {
        console.error(`Gagal membaca data "${collection}":`, error);
        return NextResponse.json(
            { message: "Data tidak dapat dibaca dari penyimpanan server" },
            { status: 500 }
        );
    }
}

export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ collection: string }> }
) {
    const collection = await getCollection(params);
    if (!collection) {
        return NextResponse.json({ message: "Kumpulan data tidak ditemukan" }, { status: 404 });
    }
    if (!(await hasAdminSession())) {
        return NextResponse.json({ message: "Login admin diperlukan" }, { status: 401 });
    }

    const origin = request.headers.get("origin");
    if (origin && origin !== request.nextUrl.origin) {
        return NextResponse.json({ message: "Asal permintaan tidak diizinkan" }, { status: 403 });
    }

    const contentLength = Number(request.headers.get("content-length") || 0);
    if (contentLength > MAX_BODY_BYTES) {
        return NextResponse.json({ message: "Ukuran data melebihi batas" }, { status: 413 });
    }

    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ message: "Format JSON tidak valid" }, { status: 400 });
    }

    const parsed = safeParseCollection(collection, body);
    if (!parsed.success) {
        return NextResponse.json(
            {
                message: "Struktur data tidak sesuai",
                issues: parsed.error.issues.map((issue) => ({
                    path: issue.path.join("."),
                    message: issue.message,
                })),
            },
            { status: 400 }
        );
    }

    try {
        if (collection === "proker") {
            const prokerData = parsed.data as DataCollectionMap["proker"];
            const divisions = await readCollection("division");
            const divisionSlugs = new Set(
                divisions.map((division) => division.slug || division.name)
            );
            const brokenLinks = prokerData.dataProker.flatMap((proker, index) =>
                proker.divisionSlug && !divisionSlugs.has(proker.divisionSlug)
                    ? [`dataProker.${index}.divisionSlug: divisi tidak ditemukan`]
                    : []
            );
            if (brokenLinks.length > 0) {
                return NextResponse.json(
                    {
                        message: "Relasi program kerja dengan divisi tidak valid",
                        issues: brokenLinks.map((path) => ({
                            path,
                            message: "Pilih divisi yang tersedia",
                        })),
                    },
                    { status: 400 }
                );
            }
        }

        if (collection === "division") {
            const divisions = parsed.data as DataCollectionMap["division"];
            const divisionSlugs = new Set(
                divisions.map((division) => division.slug || division.name)
            );
            const prokerData = await readCollection("proker");
            const brokenLinks = prokerData.dataProker.flatMap((proker, index) =>
                proker.divisionSlug && !divisionSlugs.has(proker.divisionSlug)
                    ? [`Program kerja "${proker.name}" (dataProker.${index}.divisionSlug)`]
                    : []
            );
            if (brokenLinks.length > 0) {
                return NextResponse.json(
                    {
                        message: "Perubahan divisi akan memutus relasi program kerja",
                        issues: brokenLinks.map((path) => ({
                            path,
                            message:
                                "Hubungkan program kerja ke divisi lain sebelum menghapus atau mengubah slug",
                        })),
                    },
                    { status: 400 }
                );
            }
        }

        await writeCollection(collection, parsed.data);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(`Gagal menyimpan data "${collection}":`, error);
        return NextResponse.json(
            { message: "Data gagal disimpan. Periksa izin tulis penyimpanan server." },
            { status: 500 }
        );
    }
}
