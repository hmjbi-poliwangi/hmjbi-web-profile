import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import HeroSection from "@/components/sections/HeroSection";
import AboutPreviewSection from "@/components/sections/AboutPreviewSection";
import ActivityCard from "@/components/ui/ActivityCard";
import CalenderSection from "@/components/sections/CalenderSection";
import InstagramSection from "@/components/sections/InstagramSection";
import DivisionCard from "@/components/ui/DivisionCard";
import { Event } from "@/types/event";
import { activities } from "@/components/ui/ActivityCard";

// DATA DUMMY: Pastikan bulan Maret adalah angka 2 (Jan=0, Feb=1, Mar=2)
const dummyData: Event[] = [
    {
        date: new Date(2026, 2, 2),
        title: "Workshop Next.js",
        description: "Belajar membangun aplikasi modern dengan Next.js 14 dan Server Components.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    },
    {
        date: new Date(2026, 2, 7),
        title: "Gathering Komunitas",
        description: "Kumpul santai bareng developer lokal di Cafe Digital untuk networking.",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    },
    {
        date: new Date(2026, 2, 22),
        title: "Peluncuran Fitur",
        description: "Demonstrasi fitur terbaru kalender interaktif kepada seluruh tim.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
];

export default function Home() {
    return (
        <>
            {/* Hero */}
            <HeroSection />

            {/* About Section */}
            <AboutPreviewSection />

            {/* Activities Section */}
            <Section className="bg-(--color-secondary) text-text-white">
                <Container>
                    <h2 className="mb-4 text-3xl font-heading">Kegiatan Kami</h2>
                    <div className="grid justify-center grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 align-items-center">
                        {activities.map((aktifitas) => (
                            <ActivityCard
                                key={aktifitas.id}
                                id={aktifitas.id}
                                judul={aktifitas.judul}
                                deskripsi={aktifitas.deskripsi}
                                tanggal={aktifitas.tanggal}
                                status={aktifitas.status}
                                gambar={aktifitas.gambar}
                            />
                        ))}
                    </div>
                </Container>
            </Section>

            {/** Divisions Section */}
            <Section className="bg-(--color-secondary) text-text-white">
                <Container>
                    <h2 className="mb-4 text-3xl font-heading">Divisi Kami</h2>
                    <DivisionCard />
                </Container>
            </Section>

            {/** Calender Section */}
            <Section className="bg-(--color-secondary) text-text-white">
                <Container>
                    <CalenderSection dataKegiatan={dummyData} />
                </Container>
            </Section>

            {/** Instagram Section */}
            <Section className="bg-(--color-secondary) text-text-white">
                <Container>
                    <InstagramSection />
                </Container>
            </Section>
        </>
    );
}
