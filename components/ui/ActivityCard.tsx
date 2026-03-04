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

export default function ActivityCard({ judul, deskripsi, tanggal, status, gambar, id }: ActivityCardProps) {
    const statusColors = {
        Ongoing: 'bg-blue-500/45 border-3 border-blue-400/80 text-white group-hover:text-blue-300',
        Completed: 'bg-green-500/45 border-3 border-green-400/80 text-white group-hover:text-green-300',
        Upcoming: 'bg-gray-500/45 border-3 border-gray-300/80 text-white group-hover:text-gray-300',
    };

    return (
        <div className="group origin-center align-middle bg-(--color-text-black) relative border-(--color-primary) border-0 cursor-pointer w-fit h-80 rounded-2xl overflow-clip hover:scale-102 hover:border hover:border-(--color-primary) hover:border-t-0 hover:border-l-0 hover:border-r-5 hover:border-b-5 transition-all duration-300">
            <img
                className="w-100 h-60 object-cover bg-amber-100 group-hover:brightness-50 group-hover:h-full transition-all duration-300"
                src={gambar}
                alt="Photo-Kegiatan"
            />
            <p className="absolute scale-80 top-2 font-medium left-0.5 bg-(--color-text-white) text-center text-(--color-text-black) rounded-4xl p-1.5 group-hover:bg-black/0 group-hover:text-white transition-all duration-300">
                {tanggal}
            </p>
            <p  className={`absolute origin-center scale-75 bottom-21 right-2 text-center font-bold rounded-4xl px-3 py-1 group-hover:bottom-67 transition-all duration-300 ${statusColors[status]}`}>
                {status}
            </p>
            <h2 className="transition-all flex items-center justify-center text-(--color-text-white) font-semibold text-4xl group-hover:bottom-30 group-hover:text-4xl duration-300 absolute bottom-7 left-0 right-0">
                {judul}
            </h2>
            <p className="transition-all text-(--color-text-white) duration-300 absolute flex items-center justify-center mx-5 text-center -bottom-50 left-0 right-0 group-hover:absolute group-hover:bottom-7">
                {deskripsi}
            </p>
        </div>
    );
}
