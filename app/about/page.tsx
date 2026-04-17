import { LeaderCard } from "@/components/ui/LeaderCard";
import { MissionSection } from "@/components/sections/MissionSection";
import { VisionSection } from "@/components/sections/VisionSection";
import Image from "next/image";

export default function HMJBIPage() {
    const vision =
        "Menjadi wadah yang unggul dalam mengembangkan karakter dan keterampilan mahasiswa serta menjadi tempat penyaluran aspirasi demi mewujudkan himpunan mahasiswa jurusan bisnis dan informatika yang aktif optimis dan solid.";
    const missions = [
        {
            text: "Menjalankan program yang terfokus pada peningkatan karakter mahasiswa termasuk kegiatan kepemimpinan, pengembangan soft skill, dan cara berpikir yang kritis.",
            isYellow: true,
        },
        {
            text: "Menjadi wadah komunikasi yang efektif bagi mahasiswa untuk menyampaikan aspirasi dan berdiskusi untuk kemajuan jurusan bisnis dan informatika.",
            isYellow: false,
        },
        {
            text: "Mengadakan evaluasi sistem kegiatan yang relevan dengan jurusan bisnis dan informatika.",
            isYellow: false,
        },
        {
            text: "Mendukung terciptanya kebersamaan yang kuat harmonis dan kolaboratif melalui kegiatan yang melibatkan seluruh anggota.",
            isYellow: true,
        },
    ];
    return (
        <main className="min-h-screen bg-[#111111] font-sans selection:bg-yellow-400 selection:text-black pb-20">
            {/* Leader Section */}
            <section className="flex flex-col items-center justify-center gap-8 py-10 md:flex-row">
                <LeaderCard title="Ketua Himpunan" imageSrc="/test-images/photographer.jpg" />
                <LeaderCard title="Wakil Kahim" imageSrc="/test-images/photographer.jpg" />
            </section>

            {/* Vision Section */}
            <VisionSection vision={vision} />

            {/* Mission Section */}
            <MissionSection missions={missions} />

            {/* Makna Logo Section */}
            <section className="max-w-4xl px-6 py-16 mx-auto">
                <h2 className="mb-8 text-2xl font-bold text-white">
                    Makna Logo HM<span className="text-yellow-400">JBI</span>
                </h2>
                <div className="flex items-start gap-4">
                    {/* Kotak Logo */}
                    <div className="relative z-10 flex items-center justify-center w-64 h-64 p-4 bg-white rounded-2xl">
                        {/* Ganti div ini dengan <Image src="..." /> dari Next/Image */}
                        <div className="flex items-center justify-center w-full h-full border-4 border-yellow-400 rounded-full">
                            <Image src={"/logo-hmjbi.png"} alt="" width={100} height={100} />
                        </div>
                    </div>

                    {/* Tab penjelas di sebelah kanan */}
                    <div className="relative z-0 flex flex-col gap-4 mt-8 -ml-8">
                        <div className="w-16 h-10 bg-white rounded-r-lg"></div>
                        <div className="w-16 h-10 bg-white rounded-r-lg"></div>
                        <div className="w-16 h-10 bg-white rounded-r-lg"></div>
                    </div>
                </div>
            </section>
        </main>
    );
}
