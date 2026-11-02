import { dataDivisions } from "@/data/division"; // Sesuaikan path ini
import DivisionCard from "@/components/ui/DivisionCard"; // Sesuaikan path ini dengan lokasi komponen DivisionCard kamu
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function StrukturOrganisasiSection() {
    const urutanPengurus = ["Sekretaris", "Ketua & Wakil", "Bendahara"];
    const urutanDivisi = ["MEDKOM", "PSDM", "HUMAS", "RISTEK", "KWU", "PENGMAS"];

    const getData = (urutan: string[]) => {
        return urutan
            .map((nama) => dataDivisions.find((div) => div.name === nama))
            .filter(Boolean) as typeof dataDivisions;
    };

    const pengurusHarian = getData(urutanPengurus);
    const divisiList = getData(urutanDivisi);

    return (
        <section className="min-h-screen bg-[#111111] py-16 px-6 font-sans">
            <div className="max-w-5xl mx-auto space-y-16">
                {/* SECTION 1: Pengurus Harian */}
                <div>
                    <Reveal>
                        <h2 className="mb-12 text-2xl font-bold text-center text-white md:text-3xl">
                            Pengurus Harian HM<span className="text-yellow-400">JBI</span>
                        </h2>
                    </Reveal>

                    {/* Grid 3 Kolom */}
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                        {pengurusHarian.map((item, index) => {
                            const modifiedItem = {
                                ...item,
                                name: item.name,
                            };

                            return (
                                <Reveal key={index} delay={index * 100}>
                                    <Link
                                        href={`/division/detail-division/${item.slug || item.name}`}
                                    >
                                        <DivisionCard variant="group" dataDivision={modifiedItem} />
                                    </Link>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>

                {/* SECTION 2: Divisi */}
                <div>
                    <Reveal>
                        <h2 className="mb-12 text-2xl font-bold text-center text-white md:text-3xl">
                            Divisi HM<span className="text-yellow-400">JBI</span>
                        </h2>
                    </Reveal>

                    {/* Grid 3 Kolom */}
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {divisiList.map((item, index) => {
                            // Menyesuaikan kapitalisasi teks (Misal: "MEDKOM" -> "Medkom")
                            const modifiedItem = {
                                ...item,
                                name: item.name,
                            };

                            return (
                                <Reveal key={index} delay={(index % 3) * 100}>
                                    <Link
                                        href={`/division/detail-division/${item.slug || item.name}`}
                                    >
                                        <DivisionCard variant="group" dataDivision={modifiedItem} />
                                    </Link>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
