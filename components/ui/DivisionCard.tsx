import { Division } from "@/types/division";
import Image from "next/image";

export default function DivisionCard({ dataDivision }: { dataDivision: Division }) {
    return (
        <div className="flex flex-col items-center mb-10 border-white cursor-pointer group">
            {/* Container Gambar/Frame */}
            {/* Perbaikan: Menggunakan aspect-[4/3] agar Tailwind bisa membacanya dengan benar */}
            <div className="w-full aspect-4/3 bg-zinc-300 rounded-2xl overflow-hidden relative border border-white/5 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] group-hover:border-[#FFD700]/30">
                {dataDivision.imageUrl ? (
                    <Image
                        // Perbaikan: Naikkan resolusi bawaan agar gambar tidak blur di layar besar
                        width={400}
                        height={300}
                        src={dataDivision.imageUrl}
                        alt={dataDivision.name}
                        // PERUBAHAN UTAMA: object-cover diganti menjadi object-contain
                        // Tambahan p-4 agar gambar punya jarak dari tepi kotak
                        className="object-contain w-full h-full p-4 transition-transform duration-500 group-hover:scale-110"
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

            {/* Nama Divisi */}
            <h3 className="mt-4 text-lg font-bold tracking-tight text-white transition-colors md:text-xl group-hover:text-[#FFD700]">
                {dataDivision.name}
            </h3>
        </div>
    );
}
