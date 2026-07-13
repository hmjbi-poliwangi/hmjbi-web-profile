"use client";

import { use, useRef, useEffect } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    MapPin,
    Calendar,
    Clock,
    Phone,
    ExternalLink,
    CreditCard,
    User,
    Instagram,
} from "lucide-react";
import { dataProker, dataIndikator } from "@/data/proker";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";

const months = [
    { label: "Feb", num: 1 },
    { label: "Mar", num: 2 },
    { label: "Apr", num: 3 },
    { label: "Mei", num: 4 },
    { label: "Jun", num: 5 },
    { label: "Jul", num: 6 },
    { label: "Agu", num: 7 },
    { label: "Sep", num: 8 },
    { label: "Okt", num: 9 },
    { label: "Nov", num: 10 },
];

const phaseConfig: Record<string, { label: string; bg: string; text: string; dot: string }> = {
    Persiapan: {
        label: "Persiapan",
        bg: "bg-blue-500/80",
        text: "text-blue-100",
        dot: "bg-blue-400",
    },
    Pelaksanaan: {
        label: "Pelaksanaan",
        bg: "bg-[#FFD700]/80",
        text: "text-black",
        dot: "bg-[#FFD700]",
    },
    Pelaporan: {
        label: "Pelaporan",
        bg: "bg-green-500/80",
        text: "text-green-100",
        dot: "bg-green-400",
    },
};

interface Props {
    params: Promise<{ id: string }>;
}

export default function DetailProkerPage({ params }: Props) {
    const { id } = use(params);
    const proker = dataProker.find((p) => p.id === Number(id));
    const indikator = dataIndikator.find((i) => i.prokerName === proker?.name);
    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!timelineRef.current || !proker) return;
        const pelaksanaan = proker.phases.find((p) => p.name === "Pelaksanaan");
        if (!pelaksanaan) return;
        const startMonth = pelaksanaan.startMonth;
        const containerWidth = timelineRef.current.scrollWidth - timelineRef.current.clientWidth;
        const monthWidth = containerWidth / (months.length - 1);
        const scrollTarget = monthWidth * (startMonth - 1);
        timelineRef.current.scrollLeft = Math.max(0, scrollTarget - 80);
    }, [proker]);

    if (!proker) {
        return (
            <main className="min-h-screen bg-[#111111] flex items-center justify-center">
                <div className="text-center">
                    <p className="text-gray-400 mb-4">Program kerja tidak ditemukan</p>
                    <Link href="/activities" className="text-[#FFD700] hover:underline">
                        Kembali
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#111111] font-sans pb-20">
            {/* Header */}
            <section className="py-16 md:py-20 bg-gradient-to-b from-zinc-900 to-[#111111]">
                <Container>
                    <Link
                        href="/activities"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-[#FFD700] transition-colors mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-sm">Kembali</span>
                    </Link>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            {proker.name}
                        </h1>
                        <p className="text-gray-400 text-lg mb-4">{proker.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center gap-2 text-gray-300 bg-zinc-800/50 px-3 py-1.5 rounded-lg">
                                <MapPin className="w-4 h-4 text-[#FFD700]" />
                                <span>{proker.tempat}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300 bg-zinc-800/50 px-3 py-1.5 rounded-lg">
                                <Calendar className="w-4 h-4 text-[#FFD700]" />
                                <span>{proker.tanggal}</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Timeline */}
            <Section className="bg-(--color-secondary) text-text-white">
                <Container>
                    <div className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            Timeline <span className="text-[#FFD700]">Pelaksanaan</span>
                        </h2>
                        <p className="text-gray-400">Jadwal pelaksanaan kegiatan {proker.name}</p>
                    </div>

                    <div
                        ref={timelineRef}
                        className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900/50"
                    >
                        <div className="min-w-[700px]">
                            <div className="flex border-b border-zinc-800">
                                <div className="w-32 shrink-0 p-4 text-sm font-semibold text-white border-r border-zinc-800 sticky left-0 bg-zinc-900 z-10">
                                    Fase
                                </div>
                                {months.map((m) => (
                                    <div
                                        key={m.num}
                                        className="flex-1 p-3 text-center text-xs font-semibold text-gray-400 border-r border-zinc-800 last:border-r-0"
                                    >
                                        {m.label}
                                    </div>
                                ))}
                            </div>
                            {["Persiapan", "Pelaksanaan", "Pelaporan"].map((phaseName) => {
                                const phase = proker.phases.find((p) => p.name === phaseName);
                                return (
                                    <div
                                        key={phaseName}
                                        className="flex border-b border-zinc-800 last:border-b-0"
                                    >
                                        <div className="w-32 shrink-0 p-4 text-sm font-medium text-gray-300 border-r border-zinc-800 flex items-center sticky left-0 bg-zinc-900 z-10">
                                            <div
                                                className={`w-2 h-2 rounded-full ${phaseConfig[phaseName]?.dot} mr-2`}
                                            />
                                            {phaseName}
                                        </div>
                                        <div className="flex flex-1">
                                            {months.map((m) => {
                                                const inRange =
                                                    phase &&
                                                    m.num >= phase.startMonth &&
                                                    m.num <= phase.endMonth;
                                                return (
                                                    <div
                                                        key={m.num}
                                                        className="flex-1 h-12 border-r border-zinc-800 last:border-r-0 relative"
                                                    >
                                                        {inRange && (
                                                            <div
                                                                className={`absolute inset-x-1 top-1/2 -translate-y-1/2 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${phaseConfig[phaseName]?.bg} ${phaseConfig[phaseName]?.text}`}
                                                            >
                                                                <span className="hidden sm:inline">
                                                                    {phaseName}
                                                                </span>
                                                                <span className="sm:hidden">
                                                                    {phaseName === "Persiapan"
                                                                        ? "P"
                                                                        : phaseName ===
                                                                            "Pelaksanaan"
                                                                          ? "Lks"
                                                                          : "Lpr"}
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-6 mt-5 text-sm">
                        {Object.values(phaseConfig).map((p) => (
                            <div key={p.label} className="flex items-center gap-2 text-gray-400">
                                <div className={`w-3 h-3 rounded-full ${p.dot}`} />
                                <span>{p.label}</span>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Jadwal Kegiatan */}
            {proker.schedule && proker.schedule.length > 0 && (
                <Section className="bg-(--color-secondary) text-text-white">
                    <Container>
                        <div className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                Jadwal <span className="text-[#FFD700]">Kegiatan</span>
                            </h2>
                            <p className="text-gray-400">Rincian jadwal {proker.name}</p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {proker.schedule.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="relative p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-yellow-400/30 transition-colors"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-14 h-14 rounded-xl bg-yellow-400/10 flex items-center justify-center shrink-0">
                                            <span className="text-xs font-bold text-yellow-400 text-center leading-tight">
                                                {item.day}
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white">
                                                {item.title}
                                            </h3>
                                            <div className="flex items-center gap-1.5 text-xs text-gray-400">
                                                <Clock className="w-3 h-3" />
                                                <span>{item.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Container>
                </Section>
            )}

            {/* Pendaftaran */}
            {proker.registration && (
                <Section className="bg-(--color-secondary) text-text-white">
                    <Container>
                        <div className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                Informasi <span className="text-[#FFD700]">Pendaftaran</span>
                            </h2>
                            <p className="text-gray-400">Detail pendaftaran {proker.name}</p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                                <div className="space-y-4">
                                    {proker.registration.quota && (
                                        <div>
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm text-gray-400">
                                                    Kuota Peserta
                                                </span>
                                                <span className="text-sm font-semibold text-white">
                                                    {proker.registration.registered || 0} /{" "}
                                                    {proker.registration.quota}
                                                </span>
                                            </div>
                                            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-yellow-400 rounded-full transition-all"
                                                    style={{
                                                        width: `${((proker.registration.registered || 0) / proker.registration.quota) * 100}%`,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {proker.registration.deadline && (
                                        <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-800/50">
                                            <Calendar className="w-5 h-5 text-yellow-400" />
                                            <div>
                                                <p className="text-xs text-gray-400">
                                                    Deadline Pendaftaran
                                                </p>
                                                <p className="text-sm font-semibold text-white">
                                                    {proker.registration.deadline}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {proker.registration.fee && (
                                        <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-800/50">
                                            <CreditCard className="w-5 h-5 text-yellow-400" />
                                            <div>
                                                <p className="text-xs text-gray-400">
                                                    Biaya Pendaftaran
                                                </p>
                                                <p className="text-sm font-semibold text-white">
                                                    {proker.registration.fee}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col items-center justify-center">
                                {proker.registration.link ? (
                                    <a
                                        href={proker.registration.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full"
                                    >
                                        <button className="w-full px-8 py-4 text-sm font-black tracking-widest text-black uppercase transition-all transform bg-yellow-400 rounded-xl hover:bg-yellow-500 hover:scale-105 flex items-center justify-center gap-2">
                                            <ExternalLink className="w-4 h-4" />
                                            Daftar Sekarang
                                        </button>
                                    </a>
                                ) : (
                                    <p className="text-gray-500 italic text-sm">
                                        Pendaftaran segera dibuka
                                    </p>
                                )}
                            </div>
                        </div>
                    </Container>
                </Section>
            )}

            {/* Kontak Panitia */}
            {proker.contacts && proker.contacts.length > 0 && (
                <Section className="bg-(--color-secondary) text-text-white">
                    <Container>
                        <div className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                Kontak <span className="text-[#FFD700]">Panitia</span>
                            </h2>
                            <p className="text-gray-400">
                                Hubungi panitia untuk informasi lebih lanjut
                            </p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            {proker.contacts.map((person, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-4 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800"
                                >
                                    <div className="w-14 h-14 rounded-full bg-yellow-400/10 flex items-center justify-center shrink-0">
                                        <User className="w-7 h-7 text-yellow-400" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="font-semibold text-white truncate">
                                            {person.name}
                                        </p>
                                        <div className="flex items-center gap-1.5 text-sm text-gray-400">
                                            <Phone className="w-3.5 h-3.5 shrink-0" />
                                            <a
                                                href={`tel:${person.phone}`}
                                                className="hover:text-yellow-400 transition-colors truncate"
                                            >
                                                {person.phone}
                                            </a>
                                        </div>
                                        {person.instagram && (
                                            <div className="flex items-center gap-1.5 text-sm text-gray-400">
                                                <Instagram className="w-3.5 h-3.5 shrink-0" />
                                                <a
                                                    href={`https://instagram.com/${person.instagram.replace("@", "")}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-yellow-400 transition-colors"
                                                >
                                                    {person.instagram}
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </Section>
            )}

            {/* Indikator */}
            {indikator && (
                <Section className="bg-(--color-secondary) text-text-white">
                    <Container>
                        <div className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                Indikator <span className="text-[#FFD700]">Kegiatan</span>
                            </h2>
                            <p className="text-gray-400">
                                Tolak ukur dan penjelasan kegiatan {proker.name}
                            </p>
                        </div>

                        <div className="space-y-3">
                            {indikator.items.map((item) => (
                                <div
                                    key={item.no}
                                    className="flex gap-4 p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-800/40 transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-[#FFD700]/20 flex items-center justify-center text-[#FFD700] text-sm font-bold shrink-0">
                                        {String(item.no).padStart(2, "0")}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-white mb-1.5 leading-relaxed">
                                            {item.indikator}
                                        </p>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            {item.penjelasan}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </Section>
            )}
        </main>
    );
}
