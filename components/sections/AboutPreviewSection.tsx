import Container from "../layout/Container";
import Section from "../layout/Section";
import Image from "next/image";

export default function AboutPreviewSection() {
    return (
        <Section className="bg-(--color-background) text-text-white">
            <Container>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10">
                    {/* Judul - mobile only */}
                    <h2 className="md:hidden text-3xl font-bold text-white text-center">
                        Tentang <span className="text-[#FFD700]">HMJBI</span>
                    </h2>

                    {/* Foto Fotbar */}
                    <div className="w-full md:w-1/2 md:flex-shrink-0">
                        <div className="relative w-full aspect-[4/3] bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/5 group">
                            <Image
                                src="/fotbar-hmjbi-24-25.jpeg"
                                alt="Fotbar HMJBI 2024/2025"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 active:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                        </div>
                    </div>

                    {/* Teks + Deskripsi + Tombol */}
                    <div className="flex-1 space-y-5 text-center md:text-left">
                        <h2 className="hidden md:block text-4xl font-bold text-white">
                            Tentang <span className="text-[#FFD700]">HMJBI</span>
                        </h2>

                        <p className="text-zinc-300 leading-[1.85] tracking-wide text-justify text-base md:text-lg max-w-2xl mx-auto md:mx-none">
                            Himpunan Mahasiswa Jurusan Bisnis dan Informatika Politeknik Negeri
                            Banyuwangi yang selanjutnya disingkat HMJBI POLIWANGI, adalah wadah
                            formal dan legal bagi seluruh Mahasiswa Jurusan Bisnis dan Informatika
                            Politeknik Negeri Banyuwangi.
                        </p>

                        <div className="flex md:block justify-center">
                            <a href="/about">
                                <button className="px-10 py-3 text-xs font-black tracking-widest text-black uppercase transition-all transform bg-yellow-400 rounded-full hover:bg-yellow-500 hover:scale-105 active:bg-yellow-500 active:scale-105">
                                    Selengkapnya
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
