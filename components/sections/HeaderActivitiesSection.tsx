import Image from "next/image";

export default function HeaderProker() {
    return (
        <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:justify-between md:items-start">
            {/* Box Teks */}
            <div className="flex-1 p-6 border rounded-2xl border-yellow-400/80 md:p-8">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                    <span className="text-white">PRO</span>
                    <span className="text-yellow-400">KER</span>
                </h1>
                <p className="leading-relaxed text-gray-300 text-sm md:text-base">
                    Program kerja HMJBI merupakan sejumlah kegiatan dan inisiatif yang ditujukan
                    untuk meningkatkan kualitas pendidikan, pengembangan soft skill dan hard skill
                    mahasiswa, serta memperkuat hubungan antar-mahasiswa dan dengan pihak-pihak
                    terkait.
                </p>
            </div>

            {/* Logo Himpunan */}
            {/* Ganti src dengan path logo aslimu jika ada */}
            <div className="relative shrink-0 w-32 h-32 md:w-40 md:h-40">
                <div className="flex items-center justify-center w-full h-full bg-white border-4 border-yellow-400 rounded-full">
                    <Image src={"/logo-hmjbi.png"} alt="logo hmjbi" width={100} height={100}/>
                </div>
            </div>
        </div>
    );
}
