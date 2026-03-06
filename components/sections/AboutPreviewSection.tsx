import Image from "next/image";
import Container from "../layout/Container";
import Section from "../layout/Section";

export default function AboutPreviewSection() {
    return (
        <Section className="bg-(--color-background) text-text-white">
            <Container>
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">


                {/* Konten Teks (Kiri) */}
                <div className="flex-1 space-y-6">
                    <h2 className="text-3xl text-center md:text-4xl font-bold text-white">
                        Tentang <span className="text-[#FFD700]">HMJBI</span>
                    </h2>

                    <p className="text-zinc-400 leading-relaxed text-lg md:text-xl">
                        Himpunan Mahasiswa Jurusan Bisnis dan Informatika Politeknik Negeri
                        Banyuwangi yang selanjutnya disingkat HMJBI POLIWANGI, adalah wadah formal
                        dan legal bagi seluruh Mahasiswa Jurusan Bisnis dan Informatika Politeknik
                        Negeri Banyuwangi.
                    </p>

                    <button className="px-8 py-3 bg-[#FFD700] hover:bg-yellow-500 text-black font-bold rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(255,215,0,0.2)] hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] active:scale-95">
                        See More
                    </button>
                </div>

                {/* Placeholder Gambar (Kanan) */}
                <div className="flex-1 w-full h-62.5 md:h-87.5">
                    <div className="w-full h-full bg-zinc-800 rounded-3xl overflow-hidden border border-white/5 relative group">
                        {/* Menggunakan Unsplash untuk gambar random bertema teknologi/bisnis */}
                        <Image
                            width={100}
                            height={100}
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                            alt="Team Meeting"
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        {/* Overlay gradasi tipis */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                    </div>
                </div>
                </div>
            </Container>
        </Section>
    );
}
