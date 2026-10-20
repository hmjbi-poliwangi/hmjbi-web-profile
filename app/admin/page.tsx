"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import JsonEditor from "@/components/admin/JsonEditor";
import { SkeletonBlock } from "@/components/ui/ContentSkeleton";
import { DataCollection } from "@/types/data";

const collections: { id: DataCollection; label: string; filename: string }[] = [
    { id: "division", label: "Struktur Divisi", filename: "division.json" },
    { id: "events", label: "Kegiatan", filename: "events.json" },
    { id: "divisions-list", label: "Daftar Divisi", filename: "divisions-list.json" },
    { id: "proker", label: "Program Kerja & Indikator", filename: "proker.json" },
];

type AuthState = "checking" | "authorized" | "denied";

export default function AdminDashboardPage() {
    const router = useRouter();
    const [authState, setAuthState] = useState<AuthState>("checking");
    const [activeCollection, setActiveCollection] = useState<DataCollection>("division");
    const [loadedCollection, setLoadedCollection] = useState<DataCollection | null>(null);
    const [divisionOptions, setDivisionOptions] = useState<{ slug: string; name: string }[]>([]);
    const [data, setData] = useState<unknown>(null);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");
    const [errorCollection, setErrorCollection] = useState<DataCollection | null>(null);
    const [divisionOptionsError, setDivisionOptionsError] = useState("");
    const [notice, setNotice] = useState("");
    const loading = authState === "authorized" && loadedCollection !== activeCollection;

    useEffect(() => {
        fetch("/api/auth", { cache: "no-store" })
            .then(async (response) => {
                if (!response.ok) throw new Error("Status sesi admin tidak dapat diperiksa");
                return (await response.json()) as { authenticated?: boolean };
            })
            .then((result) => {
                if (result.authenticated) setAuthState("authorized");
                else {
                    setAuthState("denied");
                    router.replace("/admin/login");
                }
            })
            .catch((requestError: unknown) => {
                console.error("Gagal memeriksa sesi admin:", requestError);
                setError(
                    "Status login tidak dapat diperiksa. Muat ulang halaman atau login kembali."
                );
                setAuthState("denied");
                router.replace("/admin/login");
            });
    }, [router]);

    useEffect(() => {
        if (authState !== "authorized") return;
        const controller = new AbortController();
        let cancelled = false;
        fetch(`/api/data/${activeCollection}`, {
            cache: "no-store",
            signal: controller.signal,
        })
            .then(async (response) => {
                const result: unknown = await response.json();
                if (!response.ok) {
                    const message =
                        typeof result === "object" &&
                        result !== null &&
                        "message" in result &&
                        typeof result.message === "string"
                            ? result.message
                            : "Data tidak dapat dimuat";
                    throw new Error(message);
                }
                return result;
            })
            .then((result) => {
                if (cancelled) return;
                setData(result);
                setLoadedCollection(activeCollection);
                setError("");
                setErrorCollection(null);
                setNotice("");
            })
            .catch((requestError: unknown) => {
                if (
                    cancelled ||
                    (requestError instanceof DOMException && requestError.name === "AbortError")
                ) {
                    return;
                }
                console.error(`Gagal memuat kumpulan data "${activeCollection}":`, requestError);
                setData(null);
                setLoadedCollection(activeCollection);
                setError(
                    requestError instanceof Error ? requestError.message : "Data tidak dapat dimuat"
                );
                setErrorCollection(activeCollection);
            });
        return () => {
            cancelled = true;
            controller.abort();
        };
    }, [activeCollection, authState]);

    useEffect(() => {
        if (authState !== "authorized") return;
        const controller = new AbortController();
        fetch("/api/data/division", { cache: "no-store", signal: controller.signal })
            .then(async (response) => {
                if (!response.ok) throw new Error("Data divisi tidak dapat dimuat");
                return (await response.json()) as { name: string; slug?: string }[];
            })
            .then((divisions) => {
                setDivisionOptions(
                    divisions.map((division) => ({
                        name: division.name,
                        slug: division.slug || division.name,
                    }))
                );
                setDivisionOptionsError("");
            })
            .catch((requestError: unknown) => {
                if (requestError instanceof DOMException && requestError.name === "AbortError") {
                    return;
                }
                console.error("Gagal memuat pilihan divisi untuk relasi proker:", requestError);
                setDivisionOptionsError(
                    "Daftar divisi untuk menghubungkan program kerja tidak dapat dimuat."
                );
            });
        return () => controller.abort();
    }, [authState]);

    async function saveCollection() {
        if (data === null) return;
        setSaving(true);
        setError("");
        setNotice("");
        try {
            const response = await fetch(`/api/data/${activeCollection}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const result: {
                message?: string;
                issues?: { path: string; message: string }[];
            } = await response.json();
            if (!response.ok) {
                const details = result.issues
                    ?.map((issue) => `${issue.path}: ${issue.message}`)
                    .join("; ");
                throw new Error(details || result.message || "Data gagal disimpan");
            }
            setNotice(
                `${collections.find((item) => item.id === activeCollection)?.filename} berhasil disimpan.`
            );
            setErrorCollection(null);
        } catch (requestError) {
            console.error(`Gagal menyimpan kumpulan data "${activeCollection}":`, requestError);
            setError(requestError instanceof Error ? requestError.message : "Data gagal disimpan");
            setErrorCollection(activeCollection);
        } finally {
            setSaving(false);
        }
    }

    async function logout() {
        try {
            await fetch("/api/auth", { method: "DELETE" });
            router.replace("/admin/login");
        } catch (requestError) {
            console.error("Gagal mengakhiri sesi admin:", requestError);
            setError("Logout gagal. Coba muat ulang halaman.");
        }
    }

    if (authState !== "authorized") {
        return (
            <main
                className="flex min-h-screen items-center justify-center bg-[#111111] px-5 text-yellow-300"
                role="status"
            >
                Memeriksa sesi admin...
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#111111] px-4 py-8 text-white md:px-8">
            <div className="mx-auto max-w-7xl">
                <header className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 pb-6">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
                            HMJBI Admin
                        </p>
                        <h1 className="mt-1 text-3xl font-bold">Dashboard</h1>
                        <p className="mt-2 text-sm text-zinc-400">
                            Perubahan akan disimpan langsung ke berkas JSON server.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={logout}
                        className="rounded-xl border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-200 hover:border-red-400 hover:text-red-300"
                    >
                        Keluar
                    </button>
                </header>

                <div className="grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
                    <nav
                        aria-label="Menu pengelolaan data"
                        className="flex gap-2 overflow-x-auto lg:flex-col"
                    >
                        {collections.map((collection) => (
                            <button
                                key={collection.id}
                                type="button"
                                onClick={() => {
                                    setActiveCollection(collection.id);
                                    setNotice("");
                                }}
                                className={`shrink-0 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition ${
                                    activeCollection === collection.id
                                        ? "border-yellow-400 bg-yellow-400 text-black"
                                        : "border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-yellow-400/50"
                                }`}
                            >
                                {collection.label}
                            </button>
                        ))}
                    </nav>

                    <section className="min-w-0 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4 md:p-6">
                        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                            <div>
                                <h2 className="text-xl font-bold">
                                    {
                                        collections.find((item) => item.id === activeCollection)
                                            ?.label
                                    }
                                </h2>
                                <p className="mt-1 text-xs text-zinc-500">
                                    {
                                        collections.find((item) => item.id === activeCollection)
                                            ?.filename
                                    }
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => void saveCollection()}
                                disabled={saving || loading || data === null}
                                className="rounded-xl bg-yellow-400 px-5 py-2.5 font-bold text-black transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {saving ? "Menyimpan..." : "Simpan perubahan"}
                            </button>
                        </div>

                        {error && errorCollection === activeCollection && (
                            <p
                                role="alert"
                                className="mb-4 rounded-xl border border-red-500/30 bg-red-950/50 p-3 text-sm text-red-200"
                            >
                                {error}
                            </p>
                        )}
                        {activeCollection === "proker" && divisionOptionsError && (
                            <p
                                role="alert"
                                className="mb-4 rounded-xl border border-red-500/30 bg-red-950/50 p-3 text-sm text-red-200"
                            >
                                {divisionOptionsError}
                            </p>
                        )}
                        {notice && (
                            <p
                                role="status"
                                className="mb-4 rounded-xl border border-green-500/30 bg-green-950/40 p-3 text-sm text-green-200"
                            >
                                {notice}
                            </p>
                        )}
                        {loading && (
                            <div role="status" aria-label="Memuat formulir" className="space-y-4 py-4">
                                <SkeletonBlock className="h-20 w-full rounded-xl" />
                                <SkeletonBlock className="h-20 w-full rounded-xl" />
                                <SkeletonBlock className="h-20 w-full rounded-xl" />
                                <span className="sr-only">Memuat formulir...</span>
                            </div>
                        )}
                        {!loading && data !== null && (
                            <JsonEditor
                                key={activeCollection}
                                collection={activeCollection}
                                value={data}
                                divisionOptions={divisionOptions}
                                onChange={(nextValue) => {
                                    setData(nextValue);
                                    setNotice("");
                                }}
                            />
                        )}
                    </section>
                </div>
            </div>
        </main>
    );
}
