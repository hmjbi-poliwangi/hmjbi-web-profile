import { MissionSection } from "@/components/sections/MissionSection";
import { VisionSection } from "@/components/sections/VisionSection";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { Antenna, CalendarDays, Cog, Flag, Users } from "lucide-react";

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
    const history = [
        {
            year: "11 Juni 2008",
            title: "Teknik Informatika berdiri",
            description:
                "Politeknik Banyuwangi menerima izin operasional untuk tiga program studi D-III, termasuk Teknik Informatika.",
            icon: CalendarDays,
        },
        {
            year: "21 Januari 2013",
            title: "HMTI disahkan",
            description:
                "Himpunan Mahasiswa Teknik Informatika (HMTI) resmi disahkan sebagai wadah mahasiswa Teknik Informatika.",
            icon: Flag,
            image: "/logo-hmjbi.png",
            imageAlt: "Logo HMJBI",
        },
        {
            year: "2013–2018",
            title: "Masa awal kepengurusan",
            description:
                "Kepemimpinan dilanjutkan oleh Mas Toni, Firdaus Eko Nuryanto, Mifta Ali, Mas Radi, Jihan Marendra, dan Nira Nur Azizah.",
            icon: Users,
        },
        {
            year: "2019–2023",
            title: "Regenerasi berlanjut",
            description:
                "Himpunan dipimpin Moch. Misbahur Rifqi, PLH Indah Rahmawati, Ahmad Taufiq Hidayat, Ade Lestiou, Arief Hidayatullah, dan Ken A. Syah. M.",
            icon: Users,
        },
        {
            year: "2024–2025",
            title: "Perjalanan menuju HMJBI",
            description:
                "Kepemimpinan Mohamad Joko dan Fauzan meneruskan perjalanan himpunan. Materi sejarah mencatat organisasi dengan nama HMJBI.",
            icon: Users,
        },
        {
            year: "2025/2026 · sekarang",
            title: "HMJBI Poliwangi",
            description:
                "HMJBI menjadi wadah formal mahasiswa Jurusan Bisnis dan Informatika. Kepengurusan 2025/2026 dipimpin RM. Devan Mangkuwardhana bersama Wakil Ketua Doni Saputra.",
            icon: Flag,
            image: "/fotbar-hmjbi-24-25.jpeg",
            imageAlt: "Foto bersama HMJBI 2024/2025",
        },
    ];
    return (
        <main className="min-h-screen bg-[#111111] font-sans pb-20">
            {/* Vision Section */}
            <VisionSection vision={vision} />

            {/* Mission Section */}
            <MissionSection missions={missions} />

            {/* Sejarah HMJBI */}
            <section className="max-w-4xl px-6 py-16 mx-auto">
                <Reveal>
                    <div className="mb-10 text-center">
                        <p className="mb-3 text-xs font-bold tracking-[0.25em] text-yellow-400 uppercase">
                            Dari HMTI ke HMJBI
                        </p>
                        <h2 className="text-3xl font-bold text-white md:text-4xl">
                            Jejak <span className="text-yellow-400">Sejarah</span>
                        </h2>
                        <p className="max-w-2xl mx-auto mt-4 leading-relaxed text-zinc-400">
                            Perjalanan himpunan tumbuh bersama perkembangan program studi dan
                            regenerasi mahasiswa.
                        </p>
                    </div>
                </Reveal>
                <div className="relative">
                    <div className="absolute top-5 bottom-5 left-5 w-px bg-gradient-to-b from-yellow-400 via-yellow-400/40 to-transparent md:left-1/2" />
                    <div className="space-y-6">
                        {history.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <Reveal
                                    key={item.year}
                                    delay={index * 70}
                                    className="grid grid-cols-[40px_minmax(0,1fr)] items-start gap-x-4 md:grid-cols-[minmax(0,1fr)_40px_minmax(0,1fr)] md:gap-x-6"
                                >
                                    <div className="relative z-10 col-start-1 row-start-1 mt-5 flex h-10 w-10 items-center justify-center rounded-full border border-yellow-400/50 bg-[#171717] text-yellow-400 md:col-start-2">
                                        <Icon size={17} aria-hidden="true" />
                                    </div>
                                    <article
                                        className={`col-start-2 row-start-1 min-w-0 ${index % 2 === 0 ? "md:col-start-1 md:row-start-1" : "md:col-start-3 md:row-start-1"}`}
                                    >
                                        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-yellow-400/40 md:p-6">
                                            <p className="mb-2 text-sm font-bold tracking-wide text-yellow-400">
                                                {item.year}
                                            </p>
                                            <h3 className="mb-2 text-lg font-bold text-white">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm leading-relaxed text-zinc-400">
                                                {item.description}
                                            </p>
                                            {"image" in item && item.image && (
                                                <div className="relative mt-4 h-36 overflow-hidden rounded-xl border border-white/10">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.imageAlt ?? ""}
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, 360px"
                                                        className="object-cover"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </article>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
                <p className="mt-6 text-xs leading-relaxed text-zinc-500">
                    Catatan: tahun 2008 adalah awal program studi Teknik Informatika, sedangkan HMTI
                    disahkan pada 2013. Materi yang tersedia belum mencantumkan tahun perubahan nama
                    HMTI menjadi HMJBI.
                </p>
            </section>

            {/* Logo dan Aspirasi Section */}
            <section className="max-w-4xl px-6 py-16 mx-auto">
                <Reveal>
                    <h2 className="mb-8 text-2xl font-bold text-white">
                        Makna Logo HM<span className="text-yellow-400">JBI</span>
                    </h2>
                    <div className="grid items-center gap-8 md:grid-cols-[256px_1fr]">
                        <div className="flex justify-center">
                            <div className="flex h-56 w-56 items-center justify-center rounded-2xl bg-white p-5 md:h-64 md:w-64">
                                <div className="flex h-full w-full items-center justify-center rounded-full border-4 border-yellow-400 p-3">
                                    <Image
                                        src="/logo-hmjbi.png"
                                        alt="Logo Himpunan Mahasiswa Jurusan Bisnis dan Informatika"
                                        width={160}
                                        height={160}
                                        sizes="160px"
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="divide-y divide-white/10">
                            <div className="flex gap-4 py-4">
                                <Cog
                                    size={20}
                                    className="mt-0.5 shrink-0 text-yellow-400"
                                    aria-hidden="true"
                                />
                                <p className="text-sm leading-relaxed text-zinc-300">
                                    <span className="font-semibold text-white">Roda gigi</span> —
                                    kerja sama dan peran setiap anggota.
                                </p>
                            </div>
                            <div className="flex gap-4 py-4">
                                <Antenna
                                    size={20}
                                    className="mt-0.5 shrink-0 text-yellow-400"
                                    aria-hidden="true"
                                />
                                <p className="text-sm leading-relaxed text-zinc-300">
                                    <span className="font-semibold text-white">Parabola</span> —
                                    bidang informatika dan komunikasi.
                                </p>
                            </div>
                            <div className="flex gap-4 py-4">
                                <Flag
                                    size={20}
                                    className="mt-0.5 shrink-0 text-yellow-400"
                                    aria-hidden="true"
                                />
                                <p className="text-sm leading-relaxed text-zinc-300">
                                    <span className="font-semibold text-white">Pita</span> —
                                    identitas Politeknik Negeri Banyuwangi.
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>
        </main>
    );
}
