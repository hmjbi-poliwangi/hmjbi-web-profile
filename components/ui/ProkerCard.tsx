import { ProkerItem } from "@/data/proker";
import Image from "next/image";
import { MapPin, Users } from "lucide-react";

interface Props {
    proker: ProkerItem;
}

function getStatusProker(proker: ProkerItem): { label: string; color: string } {
    if (proker.status) {
        const statusMap: Record<string, { label: string; color: string }> = {
            COMING_SOON: { label: "COMING SOON", color: "bg-blue-600 text-white border-blue-500" },
            "IN PROGRESS": { label: "IN PROGRESS", color: "bg-yellow-400 text-black border-yellow-300" },
            FINISHED: { label: "FINISHED", color: "bg-green-600 text-white border-green-500" },
            CANCELLED: { label: "CANCELLED", color: "bg-red-600 text-white border-red-500" },
        };
        if (statusMap[proker.status]) return statusMap[proker.status];
    }

    const now = new Date();
    const bulanMap: Record<string, number> = {
        Januari: 0,
        Februari: 1,
        Maret: 2,
        April: 3,
        Mei: 4,
        Juni: 5,
        Juli: 6,
        Agustus: 7,
        September: 8,
        Oktober: 9,
        November: 10,
        Desember: 11,
    };

    const m = proker.tanggal.match(/(\d+)[-\s].*?(\w+)\s+(\d{4})/);
    if (m) {
        const bulan = Object.keys(bulanMap).find((b) =>
            b.toLowerCase().startsWith(m[2].toLowerCase())
        );
        if (bulan) {
            const tahun = parseInt(m[3]);
            const hari = parseInt(m[1]);
            const endMatch = proker.tanggal.match(/(\d+)[-\s](\d+)/);
            const endDay = endMatch ? parseInt(endMatch[2]) : hari;
            const startDate = new Date(tahun, bulanMap[bulan], hari);
            const endDate = new Date(tahun, bulanMap[bulan], endDay);

            if (now < startDate)
                return {
                    label: "COMING SOON",
                    color: "bg-blue-600 text-white border-blue-500",
                };
            if (now >= startDate && now <= endDate)
                return {
                    label: "IN PROGRESS",
                    color: "bg-yellow-400 text-black border-yellow-300",
                };
            return {
                label: "FINISHED",
                color: "bg-green-600 text-white border-green-500",
            };
        }
    }

    const r = proker.tanggal.match(/(\w+)\s*-\s*\w+\s+(\d{4})/);
    if (r) {
        const bulanMulai = Object.keys(bulanMap).find((b) =>
            b.toLowerCase().startsWith(r[1].toLowerCase())
        );
        if (bulanMulai) {
            const tahun = parseInt(r[2]);
            const startDate = new Date(tahun, bulanMap[bulanMulai], 1);
            const endBulan = proker.tanggal.match(/-\s*(\w+)\s+\d{4}/);
            if (endBulan) {
                const bulanAkhir = Object.keys(bulanMap).find((b) =>
                    b.toLowerCase().startsWith(endBulan[1].toLowerCase())
                );
                if (bulanAkhir) {
                    const endDate = new Date(tahun, bulanMap[bulanAkhir], 28);
                    if (now < startDate)
                        return {
                            label: "COMING SOON",
                            color: "bg-blue-600 text-white border-blue-500",
                        };
                    if (now >= startDate && now <= endDate)
                        return {
                            label: "IN PROGRESS",
                            color: "bg-yellow-400 text-black border-yellow-300",
                        };
                    return {
                        label: "FINISHED",
                        color: "bg-green-600 text-white border-green-500",
                    };
                }
            }
        }
    }

    return { label: "COMING SOON", color: "bg-blue-600 text-white border-blue-500" };
}

export default function ProkerCard({ proker }: Props) {
    const status = getStatusProker(proker);

    return (
        <div className="group relative bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.15)] hover:-translate-y-1 active:shadow-[0_0_30px_rgba(255,215,0,0.15)] active:-translate-y-1">
            <div className="h-40 bg-gradient-to-br from-zinc-800 to-zinc-900 relative overflow-hidden">
                {proker.image ? (
                    <Image
                        src={proker.image}
                        alt={proker.name}
                        fill
                        className="object-cover opacity-60 group-hover:opacity-80 active:opacity-80 transition-opacity duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl font-bold text-zinc-700">
                            {proker.name.charAt(0)}
                        </span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                <div className="absolute top-3 right-3">
                    <span
                        className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase border ${status.color}`}
                    >
                        {status.label}
                    </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-lg font-bold text-white">{proker.name}</h3>
                </div>
            </div>

            <div className="p-4 space-y-3">
                <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                    {proker.description}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 text-[10px] font-semibold">
                        {proker.tanggal}
                    </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <MapPin className="w-3.5 h-3.5 text-[#FFD700]" />
                    <span className="truncate">{proker.tempat}</span>
                </div>

                {proker.registration && proker.registration.quota && (
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Users className="w-3.5 h-3.5 text-[#FFD700]" />
                        <span>
                            {proker.registration.registered || 0}/{proker.registration.quota}{" "}
                            terdaftar
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}
