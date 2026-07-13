"use client";

import { dataProker } from "@/data/proker";

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

export default function ProkerGanttChart() {
    return (
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden">
            <div className="p-5 border-b border-zinc-800">
                <h2 className="text-xl font-bold text-white">
                    Timeline <span className="text-[#FFD700]">Keseluruhan</span>
                </h2>
                <p className="text-sm text-gray-400 mt-1">
                    Jadwal pelaksanaan program kerja HMJBI 2026
                </p>
            </div>

            <div className="overflow-x-auto">
                <div className="min-w-[800px]">
                    {/* Header */}
                    <div className="flex border-b border-zinc-800">
                        <div className="w-36 shrink-0 p-3 text-sm font-semibold text-white border-r border-zinc-800">
                            Kegiatan
                        </div>
                        {months.map((m) => (
                            <div
                                key={m.num}
                                className="flex-1 p-2 text-center text-xs font-semibold text-gray-400 border-r border-zinc-800 last:border-r-0"
                            >
                                {m.label}
                            </div>
                        ))}
                    </div>

                    {/* Rows */}
                    {dataProker.map((proker, ri) => (
                        <div
                            key={proker.id}
                            className={`flex border-b border-zinc-800 last:border-b-0 ${
                                ri % 2 === 0 ? "bg-zinc-900/30" : ""
                            }`}
                        >
                            <div className="w-36 shrink-0 p-3 text-sm font-semibold text-white border-r border-zinc-800 flex items-center">
                                {proker.name}
                            </div>
                            <div className="flex flex-1">
                                {months.map((m) => {
                                    const phase = proker.phases.find(
                                        (p) => m.num >= p.startMonth && m.num <= p.endMonth
                                    );
                                    return (
                                        <div
                                            key={m.num}
                                            className="flex-1 h-12 border-r border-zinc-800 last:border-r-0 relative"
                                        >
                                            {phase && (
                                                <div
                                                    className={`absolute inset-x-1 top-1/2 -translate-y-1/2 h-7 rounded-lg flex items-center justify-center text-[10px] sm:text-xs font-bold ${phaseConfig[phase.name]?.bg} ${phaseConfig[phase.name]?.text} transition-all hover:scale-105 hover:shadow-lg cursor-default`}
                                                    title={`${phase.name}`}
                                                >
                                                    <span className="hidden sm:inline">
                                                        {phase.name}
                                                    </span>
                                                    <span className="sm:hidden">
                                                        {phase.name === "Persiapan"
                                                            ? "P"
                                                            : phase.name === "Pelaksanaan"
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
                    ))}
                </div>
            </div>

            {/* Legend */}
            <div className="p-4 border-t border-zinc-800 flex flex-wrap gap-5 text-sm">
                {Object.values(phaseConfig).map((p) => (
                    <div key={p.label} className="flex items-center gap-2 text-gray-400">
                        <div className={`w-3 h-3 rounded-full ${p.dot}`} />
                        <span>{p.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
