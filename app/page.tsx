import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import HeroSection from "@/components/sections/HeroSection";
import AboutPreviewSection from "@/components/sections/AboutPreviewSection";
import ActivityCard from "@/components/ui/ActivityCard";
import CalenderSection from "@/components/sections/CalenderSection";
import InstagramSection from "@/components/sections/InstagramSection";
import DivisionCard from "@/components/ui/DivisionCard";

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
                    <ActivityCard />
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
            <CalenderSection />

            {/** Instagram Section */}
            <InstagramSection />
        </>
    );
}
