import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import ContactForm from "./ContactForm";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#111111] font-sans pb-20">
            <Section className="bg-(--color-secondary) text-text-white">
                <Container>
                    <div className="max-w-2xl mx-auto text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Hubungi <span className="text-[#FFD700]">Kami</span>
                        </h1>
                        <p className="text-gray-400 text-lg">
                            Punya saran, kritik, atau pertanyaan? Silakan kirim pesan melalui form
                            di bawah ini.
                        </p>
                    </div>

                    <div className="max-w-lg mx-auto">
                        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                            <ContactForm />
                        </div>
                    </div>

                    <div className="max-w-2xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="p-6 border border-zinc-800 rounded-xl">
                            <div className="w-12 h-12 bg-[#FFD700]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg
                                    className="w-6 h-6 text-[#FFD700]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-white font-semibold mb-1">Email</h3>
                            <p className="text-gray-400 text-sm">hmjbi@poliwangi.ac.id</p>
                        </div>

                        <div className="p-6 border border-zinc-800 rounded-xl">
                            <div className="w-12 h-12 bg-[#FFD700]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg
                                    className="w-6 h-6 text-[#FFD700]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-white font-semibold mb-1">Lokasi</h3>
                            <p className="text-gray-400 text-sm">Poliwangi, Banyuwangi</p>
                        </div>

                        <div className="p-6 border border-zinc-800 rounded-xl">
                            <div className="w-12 h-12 bg-[#FFD700]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg
                                    className="w-6 h-6 text-[#FFD700]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-white font-semibold mb-1">Jam Operasional</h3>
                            <p className="text-gray-400 text-sm">Senin - Jumat, 08:00 - 16:00</p>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
