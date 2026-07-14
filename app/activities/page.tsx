"use client";

import { useState } from "react";
import HeaderProker from "@/components/sections/HeaderActivitiesSection";
import SearchBar from "@/components/sections/SearchBarSection";
import ProkerGanttChart from "@/components/sections/ProkerGanttChart";
import ProkerCard from "@/components/ui/ProkerCard";
import { dataProker, ProkerItem } from "@/data/proker";
import Link from "next/link";

type StatusFilter = "Semua" | "Sedang Berlangsung" | "Akan Datang" | "Selesai";

const MONTH_LABELS = [
    { month: 1, label: "Feb" },
    { month: 2, label: "Mar" },
    { month: 3, label: "Apr" },
    { month: 4, label: "Mei" },
    { month: 5, label: "Jun" },
    { month: 6, label: "Jul" },
    { month: 7, label: "Agu" },
    { month: 8, label: "Sep" },
    { month: 9, label: "Okt" },
    { month: 10, label: "Nov" },
    { month: 11, label: "Des" },
];

function getProkerStatus(proker: ProkerItem, currentMonth: number): StatusFilter {
    const allDone = proker.phases.every((p) => p.endMonth < currentMonth);
    if (allDone) return "Selesai";

    const isActive = proker.phases.some(
        (p) => p.startMonth <= currentMonth && currentMonth <= p.endMonth
    );
    if (isActive) return "Sedang Berlangsung";

    return "Akan Datang";
}

const MONTH_OFFSET = 1;
const now = new Date();
const currentProkerMonth = now.getMonth() - 1 + MONTH_OFFSET;

export default function ProkerPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filterStatus, setFilterStatus] = useState<StatusFilter>("Semua");

    const filteredProker = dataProker.filter((proker) => {
        const matchSearch = proker.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchStatus =
            filterStatus === "Semua" ||
            getProkerStatus(proker, currentProkerMonth) === filterStatus;
        return matchSearch && matchStatus;
    });

    return (
        <main className="min-h-screen bg-[#111111] py-12 px-6 font-sans">
            <div className="max-w-6xl mx-auto space-y-12">
                <section>
                    <HeaderProker />
                    <SearchBar
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        filterStatus={filterStatus}
                        setFilterStatus={setFilterStatus}
                    />
                </section>

                {/* Timeline Masa Bakti */}
                <section>
                    <h2 className="text-xl font-bold text-white mb-2">
                        Masa Bakti <span className="text-[#FFD700]">2025/2026</span>
                    </h2>
                    <p className="text-sm text-gray-400 mb-6">Februari - Desember 2026</p>

                    {/* Desktop: horizontal scroll */}
                    <div className="hidden md:flex gap-2 overflow-x-auto pb-2">
                        {MONTH_LABELS.map(({ month, label }) => {
                            const prokersInMonth = dataProker.filter((p) =>
                                p.phases.some(
                                    (ph) =>
                                        ph.name === "Pelaksanaan" &&
                                        month >= ph.startMonth &&
                                        month <= ph.endMonth
                                )
                            );
                            return (
                                <div
                                    key={month}
                                    className="flex flex-col items-center min-w-[60px]"
                                >
                                    <span className="text-xs font-bold text-gray-400 mb-2">
                                        {label}
                                    </span>
                                    <div className="w-full flex flex-col gap-1">
                                        {prokersInMonth.length > 0 ? (
                                            prokersInMonth.map((p) => (
                                                <Link
                                                    key={p.id}
                                                    href={`/activities/detail-proker/${p.id}`}
                                                    className="px-2 py-1.5 bg-yellow-400/10 border border-yellow-400/20 rounded-lg text-[10px] font-semibold text-yellow-400 text-center hover:bg-yellow-400/20 transition-colors truncate"
                                                >
                                                    {p.name}
                                                </Link>
                                            ))
                                        ) : (
                                            <div className="w-full h-6 bg-zinc-800/50 rounded-lg" />
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Mobile: grid 2 kolom */}
                    <div className="md:hidden grid grid-cols-2 gap-3">
                        {MONTH_LABELS.map(({ month, label }) => {
                            const prokersInMonth = dataProker.filter((p) =>
                                p.phases.some(
                                    (ph) =>
                                        ph.name === "Pelaksanaan" &&
                                        month >= ph.startMonth &&
                                        month <= ph.endMonth
                                )
                            );
                            if (prokersInMonth.length === 0) return null;
                            return (
                                <div key={month}>
                                    <span className="text-xs font-bold text-gray-400 mb-1 block">
                                        {label}
                                    </span>
                                    <div className="flex flex-col gap-1">
                                        {prokersInMonth.map((p) => (
                                            <Link
                                                key={p.id}
                                                href={`/activities/detail-proker/${p.id}`}
                                                className="px-2 py-1.5 bg-yellow-400/10 border border-yellow-400/20 rounded-lg text-[10px] font-semibold text-yellow-400 hover:bg-yellow-400/20 transition-colors truncate"
                                            >
                                                {p.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Gantt Chart - Overview */}
                <section>
                    <ProkerGanttChart />
                </section>

                {/* Card Grid */}
                <section>
                    <h2 className="text-xl font-bold text-white mb-6">
                        Detail <span className="text-[#FFD700]">Program Kerja</span>
                    </h2>
                    {filteredProker.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                            {filteredProker.map((proker) => (
                                <Link
                                    key={proker.id}
                                    href={`/activities/detail-proker/${proker.id}`}
                                >
                                    <ProkerCard proker={proker} />
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center text-gray-500">
                            Tidak ada program kerja yang cocok
                            {searchQuery && <> dengan &quot;{searchQuery}&quot;</>}
                            {filterStatus !== "Semua" && (
                                <>
                                    {" "}
                                    berstatus{" "}
                                    <span className="text-yellow-400 font-semibold">
                                        {filterStatus}
                                    </span>
                                </>
                            )}
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}
