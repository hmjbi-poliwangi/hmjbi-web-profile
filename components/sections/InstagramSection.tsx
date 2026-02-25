import Container from "../layout/Container";
import Section from "../layout/Section";

export default function InstagramSection() {
    return (
        <div className="">
            <Section className="bg-(--color-background) text-text-white">
                <Container>
                    <h2 className="mb-4 text-3xl font-heading">Instagram HMJBI</h2>
                    <p>
                        Berisi postingan Instagram HMJBI.
                    </p>
                </Container>
            </Section>
        </div>
    );
}
