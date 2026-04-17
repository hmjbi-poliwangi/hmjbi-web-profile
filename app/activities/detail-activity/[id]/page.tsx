"use client";

import React, { useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { dataEvents } from "@/data/events";
import Link from "next/link";

interface DetailKegiatanProps {
    params: Promise<{
        id: string;
    }>;
}

export default function DetailKegiatanPage({ params }: DetailKegiatanProps) {
    const resolvedParams = React.use(params);
    const eventId = parseInt(resolvedParams.id);

    const [currentIndex, setCurrentIndex] = useState(0);

    const currentEvent = dataEvents.find((event) => event.id === eventId);

    if (!currentEvent) {
        return notFound();
    }

    const formatDate = (date: Date) => {
        const d = date.getDate().toString().padStart(2, "0");
        const m = (date.getMonth() + 1).toString().padStart(2, "0");
        const y = date.getFullYear();
        return `${d}/${m}/${y}`;
    };

    const galleryImages = dataEvents
        .filter((event) => event.id !== eventId && event.image)
        .map((event) => ({
            id: event.id,
            image: event.image as string,
        }));

    const nextSlide = () => {
        if (galleryImages.length === 0) return;
        setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    };

    const prevSlide = () => {
        if (galleryImages.length === 0) return;
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length
        );
    };

    const totalImages = galleryImages.length;
    const centerItem = galleryImages[currentIndex];
    const leftItem = totalImages > 0 ? galleryImages[(currentIndex - 1 + totalImages) % totalImages] : null;
    const rightItem = totalImages > 0 ? galleryImages[(currentIndex + 1) % totalImages] : null;

    return (
        <main className="min-h-screen bg-[#111111] py-16 px-6 font-sans">
            <section className="max-w-6xl mx-auto">
                {/* --- HEADER JUDUL --- */}
                <div className="mb-10 text-center">
                    <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                        <span className="text-yellow-400">Judul Kegiatan : </span>
                        <span className="text-white">{currentEvent.title}</span>
                    </h1>
                </div>

                {/* --- GAMBAR UTAMA HERO --- */}
                <div className="relative w-full max-w-4xl mx-auto overflow-hidden border-4 border-blue-400 rounded-2xl aspect-video md:aspect-21/9">
                    {currentEvent.image ? (
                        <Image
                            src={currentEvent.image}
                            alt={currentEvent.title}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="flex items-center justify-center w-full h-full bg-zinc-800">
                            <span className="text-zinc-500">Tidak ada gambar utama</span>
                        </div>
                    )}

                    <div className="absolute bottom-0 left-0 flex flex-col justify-between w-full gap-4 p-4 md:flex-row md:items-end">
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#111111] rounded-lg border border-white/10 shadow-lg">
                            <svg
                                className="w-5 h-5 text-yellow-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            <span className="text-sm font-semibold text-white">
                                {currentEvent.location || "Lokasi belum ditentukan"}
                            </span>
                        </div>

                        <div className="px-4 py-2 font-bold text-black bg-yellow-400 rounded-lg shadow-lg">
                            Tanggal {formatDate(currentEvent.date)}
                        </div>
                    </div>
                </div>

                {/* --- DESKRIPSI --- */}
                <div className="max-w-4xl mx-auto mt-8 mb-16">
                    <p className="text-sm leading-relaxed text-justify text-gray-300 md:text-base">
                        {currentEvent.description}
                    </p>
                </div>

                {/* --- GALLERY / DOKUMENTASI INTERAKTIF --- */}
                <div className="max-w-5xl mx-auto mt-16 mb-20">
                    <h2 className="mb-8 text-2xl font-bold text-white md:text-3xl">
                        Dokumentasi Event Lain
                    </h2>

                    {totalImages >= 3 ? (
                        <div className="flex items-center justify-center gap-4 md:gap-8">
                            {/* Tombol Kiri */}
                            <button
                                onClick={prevSlide}
                                className="flex items-center justify-center w-10 h-10 transition-transform bg-yellow-400 rounded-full shrink-0 hover:scale-110 active:scale-95"
                            >
                                <svg
                                    className="w-6 h-6 text-black"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>

                            {/* Area Carousel */}
                            <div className="flex items-center justify-center w-full max-w-3xl gap-2 md:gap-4">
                                {/* Gambar Kiri (Kecil) */}
                                {leftItem && (
                                    <Link
                                        href={`/activities/detail-activity/${leftItem.id}`}
                                        className="relative hidden w-1/4 overflow-hidden transition-all duration-500 rounded-xl bg-zinc-800 aspect-video md:block opacity-40 hover:opacity-100"
                                    >
                                        <Image
                                            src={leftItem.image}
                                            fill
                                            alt="Doc Left"
                                            className="object-cover"
                                        />
                                    </Link>
                                )}

                                {/* Gambar Tengah (Besar & Fokus) */}
                                {centerItem && (
                                    <Link
                                        href={`/activities/detail-activity/${centerItem.id}`}
                                        // Tambahan efek hover:scale-[1.02] agar membesar sedikit saat disentuh mouse
                                        className="relative block w-full md:w-1/2 aspect-4/3 rounded-2xl bg-zinc-800 overflow-hidden shadow-[0_0_30px_rgba(255,215,0,0.15)] z-10 border border-white/10 transition-all duration-500 hover:scale-[1.02] hover:border-yellow-400/50"
                                    >
                                        <Image
                                            src={centerItem.image}
                                            fill
                                            alt="Doc Center"
                                            className="object-cover"
                                        />
                                    </Link>
                                )}

                                {/* Gambar Kanan (Kecil) */}
                                {rightItem && (
                                    <Link
                                        href={`/activities/detail-activity/${rightItem.id}`}
                                        className="relative hidden w-1/4 overflow-hidden transition-all duration-500 rounded-xl bg-zinc-800 aspect-video md:block opacity-40 hover:opacity-100"
                                    >
                                        <Image
                                            src={rightItem.image}
                                            fill
                                            alt="Doc Right"
                                            className="object-cover"
                                        />
                                    </Link>
                                )}
                            </div>

                            {/* Tombol Kanan */}
                            <button
                                onClick={nextSlide}
                                className="flex items-center justify-center w-10 h-10 transition-transform bg-yellow-400 rounded-full shrink-0 hover:scale-110 active:scale-95"
                            >
                                <svg
                                    className="w-6 h-6 text-black"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                    ) : (
                        // Fallback jika gambar event lain kurang dari 3
                        <div className="py-10 text-center text-gray-500 border bg-white/5 rounded-xl border-white/10">
                            Belum ada cukup dokumentasi dari event lain untuk ditampilkan.
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
