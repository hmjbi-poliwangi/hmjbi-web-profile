import Image from "next/image";
import { Event } from "@/types/event"; // Pastikan path ini sesuai dengan file type kamu

export default function EventCard({ data }: { data: Event }) {
    // Fungsi untuk memformat tanggal ke format DD-MM-YYYY
    const formatTanggal = (date: Date) => {
        const d = date.getDate().toString().padStart(2, "0");
        const m = (date.getMonth() + 1).toString().padStart(2, "0");
        const y = date.getFullYear();
        return `Tgl ${d}-${m}-${y}`;
    };

    return (
        <div className="flex flex-col overflow-hidden bg-black border border-yellow-400 rounded-2xl group cursor-pointer hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] transition-all duration-300">
            {/* Bagian Atas: Gambar dan Badge */}
            <div className="relative w-full aspect-4/3 overflow-hidden">
                <Image
                    src={data.image || "/test-images/images.jpg"}
                    alt={data.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Tanggal (Kiri Atas) */}
                <div className="absolute top-3 left-3 px-2 py-1 text-[10px] font-medium text-white bg-white/20 backdrop-blur-md rounded-md">
                    {formatTanggal(data.date)}
                </div>

                {/* Status (Kanan Bawah) */}
                <div className="absolute bottom-3 right-3 px-3 py-1 text-[10px] font-bold text-blue-200 bg-[#1E293B]/90 rounded-full border border-blue-500/30">
                    {data.status}
                </div>
            </div>

            {/* Bagian Bawah: Judul */}
            <div className="p-6 text-center bg-black">
                <h3 className="text-xl font-bold text-white transition-colors group-hover:text-yellow-400">
                    {data.title}
                </h3>
                {/* Deskripsi (Opsional, di desain aslinya tidak terlihat, tapi ada di data. Bisa dimunculkan jika mau) */}
                {/* <p className="mt-2 text-sm text-gray-400 line-clamp-2">{data.description}</p> */}
            </div>
        </div>
    );
}
