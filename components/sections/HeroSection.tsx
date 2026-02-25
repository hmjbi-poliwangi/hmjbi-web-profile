import Container from "../layout/Container";
import Section from "../layout/Section";

export default function HeroSection() {
    return (
        <Section className="bg-(--color-secondary) flex items-center justify-center">
            <Container>
                <h1 className="text-5xl text-primary font-heading">
                    Selamat Datang di HMJBI
                </h1>
                <p className="mt-4 text-text-white">
                    Website resmi Himpunan Mahasiswa Jurusan Bahasa Indonesia
                </p>
            </Container>
        </Section>
    );
}
