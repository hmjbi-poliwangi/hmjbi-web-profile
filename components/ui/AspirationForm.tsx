"use client";

import { useState, useEffect, FormEvent } from "react";
import { submitAspiration, getRemainingCooldown, setLastSubmissionTime } from "@/lib/aspiration";

interface Props {
    onClose?: () => void;
}

export default function AspirationForm({ onClose }: Props) {
    const [name, setName] = useState("");
    const [aspiration, setAspiration] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");
    const [cooldown, setCooldown] = useState(() => {
        if (typeof window === "undefined") return 0;
        return getRemainingCooldown();
    });

    useEffect(() => {
        if (cooldown > 0) {
            const interval = setInterval(() => {
                setCooldown((prev) => {
                    const next = Math.max(0, prev - 1000);
                    if (next <= 0) clearInterval(interval);
                    return next;
                });
            }, 1000);
            return () => clearInterval(interval);
        }
    }, []);

    useEffect(() => {
        if (status === "success") {
            const timer = setTimeout(() => {
                setName("");
                setAspiration("");
                setStatus("idle");
                setMessage("");
                onClose?.();
            }, 2500);
            return () => clearTimeout(timer);
        }
    }, [status, onClose]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (cooldown > 0) return;

        const trimmedName = name.trim();
        const trimmedAspiration = aspiration.trim();

        if (!trimmedAspiration) {
            setStatus("error");
            setMessage("Aspirasi tidak boleh kosong");
            return;
        }

        if (trimmedAspiration.length > 300) {
            setStatus("error");
            setMessage("Aspirasi maksimal 300 karakter");
            return;
        }

        if (trimmedName.length > 50) {
            setStatus("error");
            setMessage("Nama maksimal 50 karakter");
            return;
        }

        setStatus("loading");
        setMessage("");

        try {
            const result = await submitAspiration({
                name: trimmedName || undefined,
                aspiration: trimmedAspiration,
            });
            setStatus("success");
            setMessage(result.message);
            setLastSubmissionTime();
        } catch (err) {
            setStatus("error");
            setMessage(err instanceof Error ? err.message : "Terjadi kesalahan");
        }
    };

    if (status === "success") {
        const finalName = name.trim() || "(anonim)";
        return (
            <div className="flex flex-col items-center justify-center py-8 space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-bounce-in">
                    <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>
                <p className="text-lg font-bold text-gray-800">Aspirasi Terkirim!</p>
                <p className="text-sm text-gray-500 text-center max-w-xs">
                    Terima kasih, <span className="font-semibold">{finalName}</span>. Aspirasi kamu
                    sudah kami terima.
                </p>
                <div className="w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full animate-shrink-width"></div>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <input
                    type="text"
                    placeholder="Nama (kosongkan untuk anonim)"
                    value={name}
                    onChange={(e) => {
                        if (e.target.value.length <= 50) setName(e.target.value);
                    }}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-black"
                />
                <p className="text-xs text-gray-400 text-right mt-1">{name.length}/50</p>
            </div>

            <div>
                <textarea
                    placeholder="Tulis aspirasi kamu di sini..."
                    value={aspiration}
                    onChange={(e) => {
                        if (e.target.value.length <= 300) setAspiration(e.target.value);
                    }}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-black resize-none"
                    rows={5}
                    required
                />
                <p className="text-xs text-gray-400 text-right mt-1">{aspiration.length}/300</p>
            </div>

            {message && (
                <p className={`text-sm ${status === "error" ? "text-red-500" : "text-green-500"}`}>
                    {message}
                </p>
            )}

            <button
                type="submit"
                disabled={status === "loading" || cooldown > 0}
                className="w-full py-3 font-bold text-black bg-[#FFD700] rounded-lg transition-all hover:bg-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {status === "loading" ? (
                    <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            />
                        </svg>
                        Mengirim...
                    </>
                ) : cooldown > 0 ? (
                    `Tunggu ${Math.ceil(cooldown / 1000)} detik`
                ) : (
                    "Kirim Aspirasi"
                )}
            </button>
        </form>
    );
}
