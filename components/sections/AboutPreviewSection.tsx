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

                        <p className="text-zinc-300 leading-[1.85] tracking-wide text-justify text-base md:text-lg max-w-2xl mx-auto md:mx-none">
                            Himpunan Mahasiswa Jurusan Bisnis dan Informatika Politeknik Negeri
                            Banyuwangi yang selanjutnya disingkat HMJBI POLIWANGI, adalah wadah
                            formal dan legal bagi seluruh Mahasiswa Jurusan Bisnis dan Informatika
                            Politeknik Negeri Banyuwangi.
                        </p>

                        <a href="/about">
                            <button className="px-8 py-3 bg-[#FFD700] hover:bg-yellow-500 text-black font-bold rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(255,215,0,0.2)] hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] active:scale-95">
                                Selengkapnya
                            </button>
                        </a>
                    </div>

                    {/* Placeholder Gambar (Kanan) */}
                    <div className="flex-1 w-full h-62.5 md:h-87.5">
                        <div className="w-full h-full bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/5 relative group flex items-center justify-center">
                            <svg
                                className="w-3/4 h-3/4 opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                                viewBox="0 0 400 300"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* Abstract geometric illustration */}
                                <rect
                                    x="50"
                                    y="80"
                                    width="120"
                                    height="140"
                                    rx="8"
                                    stroke="#FFD700"
                                    strokeWidth="2"
                                    fill="none"
                                />
                                <rect
                                    x="80"
                                    y="110"
                                    width="60"
                                    height="80"
                                    rx="4"
                                    fill="#FFD700"
                                    fillOpacity="0.15"
                                />
                                <circle
                                    cx="300"
                                    cy="120"
                                    r="60"
                                    stroke="#FFD700"
                                    strokeWidth="2"
                                    fill="none"
                                />
                                <circle
                                    cx="300"
                                    cy="120"
                                    r="25"
                                    fill="#FFD700"
                                    fillOpacity="0.15"
                                />
                                <path
                                    d="M170 220 L200 170 L230 220"
                                    stroke="#FFD700"
                                    strokeWidth="2"
                                    fill="none"
                                />
                                <path d="M185 220 L215 220" stroke="#FFD700" strokeWidth="2" />
                                <path
                                    d="M110 170 Q110 140 140 140"
                                    stroke="#FFD700"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeDasharray="4 3"
                                />
                                <circle cx="130" cy="220" r="6" fill="#FFD700" fillOpacity="0.3" />
                                <circle cx="160" cy="240" r="6" fill="#FFD700" fillOpacity="0.3" />
                                <circle cx="100" cy="240" r="6" fill="#FFD700" fillOpacity="0.3" />
                                <circle cx="300" cy="200" r="3" fill="#FFD700" fillOpacity="0.5" />
                                <circle cx="330" cy="180" r="3" fill="#FFD700" fillOpacity="0.5" />
                                <circle cx="280" cy="230" r="3" fill="#FFD700" fillOpacity="0.5" />
                                {/* Dots connecting lines */}
                                <line
                                    x1="130"
                                    y1="80"
                                    x2="130"
                                    y2="30"
                                    stroke="#FFD700"
                                    strokeWidth="1.5"
                                    strokeDasharray="3 3"
                                />
                                <line
                                    x1="300"
                                    y1="60"
                                    x2="300"
                                    y2="30"
                                    stroke="#FFD700"
                                    strokeWidth="1.5"
                                    strokeDasharray="3 3"
                                />
                                <circle cx="130" cy="25" r="4" fill="#FFD700" fillOpacity="0.4" />
                                <circle cx="300" cy="25" r="4" fill="#FFD700" fillOpacity="0.4" />
                                <rect
                                    x="15"
                                    y="95"
                                    width="20"
                                    height="6"
                                    rx="3"
                                    fill="#FFD700"
                                    fillOpacity="0.2"
                                />
                                <rect
                                    x="15"
                                    y="110"
                                    width="20"
                                    height="6"
                                    rx="3"
                                    fill="#FFD700"
                                    fillOpacity="0.2"
                                />
                            </svg>
                            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
