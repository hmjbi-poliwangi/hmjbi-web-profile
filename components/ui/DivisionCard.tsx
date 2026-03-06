import { Division } from "@/types/division";
import Image from "next/image";

export default function DivisionCard({ dataDivision }: { dataDivision: Division }) {
    return (
        <div className="mb-10 border-white flex flex-col items-center group cursor-pointer">
            {/* Container Gambar/Frame */}
            <div className="w-full aspect-4/3 bg-zinc-300 rounded-2xl overflow-hidden relative border border-white/5 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] group-hover:border-[#FFD700]/30">
                {dataDivision.imageUrl ? (
                    <Image
                        width={100}
                        height={100}
                        src={dataDivision.imageUrl}
                        alt={dataDivision.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                ) : (
                    /* Placeholder jika gambar tidak ada */
                    <div className="w-full h-full bg-zinc-400 flex items-center justify-center">
                        <span className="text-zinc-600 font-bold uppercase tracking-widest opacity-20 text-xs">
                            No Image
                        </span>
                    </div>
                )}

                {/* Overlay tipis saat hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
            </div>

            {/* Nama Divisi */}
            <h3 className="mt-4 text-white text-lg md:text-xl font-bold tracking-tight transition-colors group-hover:text-[#FFD700]">
                {dataDivision.name}
            </h3>
        </div>
    );
}
