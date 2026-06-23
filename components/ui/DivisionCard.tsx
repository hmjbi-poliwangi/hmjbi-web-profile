import { Division } from "@/types/division";
import Image from "next/image";

export default function DivisionCard({
    dataDivision,
    variant = "logo",
}: {
    dataDivision: Division;
    variant?: "logo" | "person";
}) {
    const aspectClass = variant === "person" ? "aspect-[3/4]" : "aspect-4/3";
    const fitClass = variant === "person" ? "object-cover" : "object-contain p-4";
    return (
        <div className="flex flex-col items-center border-white cursor-pointer group">
            {/* Container Gambar/Frame */}
            <div
                className={`w-full ${aspectClass} bg-zinc-300 rounded-2xl overflow-hidden relative border border-white/5 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] group-hover:border-[#FFD700]/30`}
            >
                {dataDivision.imageUrl ? (
                    <Image
                        width={400}
                        height={300}
                        src={dataDivision.imageUrl}
                        alt={dataDivision.name}
                        className={`w-full h-full ${fitClass} transition-transform duration-500 group-hover:scale-110`}
                    />
                ) : (
                    /* Placeholder jika gambar tidak ada */
                    <div className="flex items-center justify-center w-full h-full bg-zinc-400">
                        <span className="text-xs font-bold tracking-widest uppercase opacity-20 text-zinc-600">
                            No Image
                        </span>
                    </div>
                )}

                {/* Overlay tipis saat hover */}
                <div className="absolute inset-0 transition-colors bg-black/0 group-hover:bg-black/10"></div>
            </div>

            {/* Nama */}
            <h3 className="mt-4 text-lg font-bold tracking-tight text-center text-white transition-colors md:text-xl group-hover:text-[#FFD700] text-balance leading-tight">
                {dataDivision.name}
            </h3>
            {dataDivision.role && (
                <p className="mt-1 text-sm text-gray-400 text-center">{dataDivision.role}</p>
            )}
        </div>
    );
}
