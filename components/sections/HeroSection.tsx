import Image from "next/image";
import Container from "../layout/Container";
import Section from "../layout/Section";

export default function HeroSection() {
    return (
        <Section className="bg-(--color-secondary) flex items-center justify-center pt-10 md:pt-16">
            <Container>
                <div className="z-10 flex flex-col items-center text-center px-4">
                    {/* Teks HMJBI Atas */}
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2">
                        <span className="text-white">HM</span>
                        <span className="text-[#FFD700]">JBI</span>
                    </h1>

                    {/* Logo Utama */}
                    <div className="w-36 h-36 md:w-48 md:h-48 my-4">
                        <Image
                            width={500}
                            height={436}
                            src="/logo-hmjbi.png"
                            alt="Logo HMJBI"
                            className="w-full h-full object-contain"
                            priority
                        />
                    </div>

                    {/* Teks Deskripsi Bawah */}
                    <div className="space-y-1">
                        <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
                            Himpunan Mahasiswa
                        </h2>
                        <h3 className="text-lg md:text-xl font-bold text-[#FFD700] uppercase tracking-[0.2em]">
                            Jurusan Bisnis dan Informatika
                        </h3>
                    </div>
                </div>

                {/* Dekorasi opsional: Vignette effect untuk kesan kedalaman */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/50 pointer-events-none"></div>
            </Container>
        </Section>
    );
}
