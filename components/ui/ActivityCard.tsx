import { Event } from "@/types/event";
import Image from "next/image";

export default function ActivityCard({ date, title, description, image, status }: Event) {
    const statusColors = {
        "COMING SOON":
            "bg-gray-600 text-white border-gray-500 group-hover:text-gray-200 active:text-gray-200",
        "IN PROGRESS":
            "bg-blue-600 text-white border-blue-500 group-hover:text-blue-200 active:text-blue-200",
        "FINISHED":
            "bg-green-600 text-white border-green-500 group-hover:text-green-200 active:text-green-200",
        "CANCELLED": "bg-red-600 text-white border-red-500 group-hover:text-red-200 active:text-red-200",
    };

    return (
        <div className="relative align-middle transition-all duration-300 origin-center border-0 cursor-pointer group bg-text-black border-primary w-fit h-80 rounded-2xl overflow-clip hover:scale-102 hover:border hover:border-primary hover:border-t-0 hover:border-l-0 hover:border-r-5 hover:border-b-5 active:scale-102 active:border active:border-primary active:border-t-0 active:border-l-0 active:border-r-5 active:border-b-5">
            <Image
                width={100}
                height={100}
                className="object-cover transition-all duration-300 w-100 h-60 bg-amber-100 group-hover:brightness-50 group-hover:h-full active:brightness-50 active:h-full"
                src={image || "/placeholder-image.png"}
                alt="Photo-Kegiatan"
            />
            <p className="absolute scale-80 top-2 font-medium left-0.5 bg-text-white text-center text-text-black rounded-4xl p-1.5 group-hover:bg-black/0 group-hover:text-white active:bg-black/0 active:text-white transition-all duration-300">
                {date instanceof Date ? date.toLocaleDateString() : date}
            </p>
            <p
                className={`absolute origin-center scale-75 bottom-21 right-2 text-center font-bold rounded-4xl px-3 py-1 group-hover:bottom-67 active:bottom-67 transition-all duration-300 ${statusColors[status]}`}
            >
                {status}
            </p>
            <h2 className="absolute left-0 right-0 flex items-center justify-center text-4xl font-semibold transition-all duration-300 text-text-white group-hover:bottom-30 group-hover:text-4xl active:bottom-30 active:text-4xl bottom-7">
                {title}
            </h2>
            <p className="absolute left-0 right-0 flex items-center justify-center mx-5 text-center transition-all duration-300 text-text-white -bottom-50 group-hover:absolute group-hover:bottom-7 active:absolute active:bottom-7">
                {description}
            </p>
        </div>
    );
}
