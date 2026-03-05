import Image from "next/image";

interface ActivityCardProps {
    id: string;
    judul: string;
    deskripsi: string;
    tanggal: string;
    status: 'Ongoing' | 'Completed' | 'Upcoming';
    gambar: string;
}

export const activities: ActivityCardProps[] = [
    {
        id: "1",
        judul: "Judul Kegiatan 1",
        deskripsi: "Deskripsi Kegiatan 1 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
        tanggal: "12 Desember 2024",
        status: "Ongoing",
        gambar: "/test-images/digital-photo-frames.jpg",
    },
    {
        id: "2",
        judul: "Judul Kegiatan 2",
        deskripsi: "Deskripsi Kegiatan 2 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
        tanggal: "12 Desember 2024",
        status: "Completed",
        gambar: "/test-images/test-photo.jpg",
    },
    {
        id: "3",
        judul: "Judul Kegiatan 3",
        deskripsi: "Deskripsi Kegiatan 3 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
        tanggal: "12 Desember 2024",
        status: "Upcoming",
        gambar: "/test-images/images.jpg",
    },
];

export default function ActivityCard({ judul, deskripsi, tanggal, status, gambar }: ActivityCardProps) {
    const statusColors = {
        Ongoing: 'bg-blue-500/45 border-3 border-blue-400/80 text-white group-hover:text-blue-300',
        Completed: 'bg-green-500/45 border-3 border-green-400/80 text-white group-hover:text-green-300',
        Upcoming: 'bg-gray-500/45 border-3 border-gray-300/80 text-white group-hover:text-gray-300',
    };

    return (
        <div className="relative align-middle transition-all duration-300 origin-center border-0 cursor-pointer group bg-text-black border-primary w-fit h-80 rounded-2xl overflow-clip hover:scale-102 hover:border hover:border-primary hover:border-t-0 hover:border-l-0 hover:border-r-5 hover:border-b-5">
            <Image
                width={100}
                height={100}
                className="object-cover transition-all duration-300 w-100 h-60 bg-amber-100 group-hover:brightness-50 group-hover:h-full"
                src={gambar}
                alt="Photo-Kegiatan"
            />
            <p className="absolute scale-80 top-2 font-medium left-0.5 bg-text-white text-center text-text-black rounded-4xl p-1.5 group-hover:bg-black/0 group-hover:text-white transition-all duration-300">
                {tanggal}
            </p>
            <p  className={`absolute origin-center scale-75 bottom-21 right-2 text-center font-bold rounded-4xl px-3 py-1 group-hover:bottom-67 transition-all duration-300 ${statusColors[status]}`}>
                {status}
            </p>
            <h2 className="absolute left-0 right-0 flex items-center justify-center text-4xl font-semibold transition-all duration-300 text-text-white group-hover:bottom-30 group-hover:text-4xl bottom-7">
                {judul}
            </h2>
            <p className="absolute left-0 right-0 flex items-center justify-center mx-5 text-center transition-all duration-300 text-text-white -bottom-50 group-hover:absolute group-hover:bottom-7">
                {deskripsi}
            </p>
        </div>
    );
}
