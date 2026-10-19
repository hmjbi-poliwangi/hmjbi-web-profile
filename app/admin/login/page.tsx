"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        fetch("/api/auth", { cache: "no-store" })
            .then((response) => response.json())
            .then((result: { authenticated?: boolean }) => {
                if (result.authenticated) router.replace("/admin");
            })
            .catch((requestError: unknown) => {
                console.error("Gagal memeriksa sesi admin:", requestError);
                setError("Status login tidak dapat diperiksa. Coba muat ulang halaman.");
            });
    }, [router]);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setSubmitting(true);
        setError("");
        try {
            const response = await fetch("/api/auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });
            const result: { message?: string } = await response.json();
            if (!response.ok) {
                setError(result.message || "Login gagal");
                return;
            }
            router.replace("/admin");
        } catch (requestError) {
            console.error("Gagal menghubungi layanan login:", requestError);
            setError("Server tidak dapat dihubungi. Coba lagi.");
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-[#111111] px-5 py-12">
            <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-2xl">
                <Link href="/" className="text-sm text-zinc-400 hover:text-yellow-300">
                    ← Kembali ke beranda
                </Link>
                <div className="mb-8 mt-7">
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
                        HMJBI
                    </p>
                    <h1 className="mt-2 text-3xl font-bold text-white">Login Admin</h1>
                    <p className="mt-2 text-sm text-zinc-400">Masuk untuk mengelola data situs.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <label className="block space-y-2 text-sm text-zinc-300">
                        Username
                        <input
                            required
                            autoComplete="username"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            className="w-full rounded-xl border border-zinc-700 bg-black/40 px-4 py-3 text-white outline-none focus:border-yellow-400"
                        />
                    </label>
                    <label className="block space-y-2 text-sm text-zinc-300">
                        Password
                        <input
                            required
                            type="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            className="w-full rounded-xl border border-zinc-700 bg-black/40 px-4 py-3 text-white outline-none focus:border-yellow-400"
                        />
                    </label>
                    {error && (
                        <p
                            role="alert"
                            className="rounded-lg bg-red-950/70 px-3 py-2 text-sm text-red-200"
                        >
                            {error}
                        </p>
                    )}
                    <button
                        type="submit"
                        disabled={submitting}
                        className="w-full rounded-xl bg-yellow-400 px-4 py-3 font-bold text-black transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {submitting ? "Memeriksa..." : "Masuk"}
                    </button>
                </form>
            </div>
        </main>
    );
}
