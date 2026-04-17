import Image from "next/image";

interface LeaderCardProps {
    title: string;
    imageSrc: string;
}
export const LeaderCard: React.FC<LeaderCardProps> = ({ title, imageSrc }) => {
    return (
        <div className="relative flex items-end justify-center w-64 pb-6 overflow-hidden bg-gray-300 shadow-lg h-80 rounded-2xl">
            {/* Gambar yang akan memenuhi seluruh area kotak */}
            <Image src={imageSrc} alt={`Foto ${title}`} fill className="object-cover z-0" />

            {/* Overlay gradient gelap di bagian bawah agar teks tetap terbaca */}
            <div className="absolute inset-0 z-10 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

            {/* Teks jabatan */}
            <h3 className="relative z-20 text-lg font-bold text-white">{title}</h3>
        </div>
    );
};
