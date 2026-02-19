import Section from "../components/layout/Section";
import Container from "../components/layout/Container";

export default function Home() {
    return (
        <>
            {/* Hero */}
            <Section className="bg-[var(--color-secondary)] flex items-center justify-center">
                <Container>
                    <h1 className="text-[var(--color-primary)] text-5xl font-heading">
                        Selamat Datang di HMJBI
                    </h1>
                    <p className="mt-4 text-[var(--color-text-white)]">
                        Website resmi Himpunan Mahasiswa Jurusan Bahasa Indonesia
                    </p>
                </Container>
            </Section>

            {/* About Section */}
            <Section className="bg-[var(--color-background)] text-[var(--color-text-white)]">
                <Container>
                    <h2 className="mb-4 text-3xl font-heading">Tentang HMJBI</h2>
                    <p>
                        HMJBI adalah organisasi mahasiswa yang aktif dalam kegiatan akademik dan
                        non-akademik.
                    </p>
                </Container>
            </Section>

            {/* Activities Section */}
            <Section className="bg-[var(--color-secondary)] text-[var(--color-text-white)]">
                <Container>
                    <h2 className="mb-4 text-3xl font-heading">Kegiatan Kami</h2>
                    <p>
                        Kami mengadakan workshop, seminar, dan berbagai kegiatan sosial untuk
                        mahasiswa.
                    </p>
                </Container>
            </Section>
        </>
    );
}
