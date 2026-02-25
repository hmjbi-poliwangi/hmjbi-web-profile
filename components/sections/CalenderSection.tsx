import Container from "../layout/Container";
import Section from "../layout/Section";

export default function CalenderSection() {
    return <div className="">
      <Section className="bg-(--color-background) text-text-white">
                  <Container>
                      <h2 className="mb-4 text-3xl font-heading">Calender Kegiatan HMJBI</h2>
                      <p>
                          Berisi kalender yang menunjukkan kegiatan HMJBI baik yang sudah berjalan maupun akan berjalan.
                      </p>
                  </Container>
              </Section>
    </div>;
}
