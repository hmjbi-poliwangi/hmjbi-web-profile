import Container from "../layout/Container";
import Section from "../layout/Section";

export default function AboutPreviewSection() {
    return (
        <Section className="bg-(--color-background) text-text-white">
            <Container>
                <h2 className="mb-4 text-3xl font-heading">Tentang HMJBI</h2>
                <p>
                    HMJBI adalah organisasi mahasiswa yang aktif dalam kegiatan akademik dan
                    non-akademik.
                </p>
            </Container>
        </Section>
    );
}
