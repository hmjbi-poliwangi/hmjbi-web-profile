import { notFound } from "next/navigation";
import { dataDivisions } from "@/data/division"; // Sesuaikan path
import DivisionCard from "@/components/ui/DivisionCard"; // Sesuaikan path

// 1. Ubah tipe params menjadi Promise
interface DetailDivisionProps {
    params: Promise<{
        nameDivision: string;
    }>;
}

export default async function DetailDivisionPage({ params }: DetailDivisionProps) {
    const resolvedParams = await params;

    const decodedName = decodeURIComponent(resolvedParams.nameDivision);

    console.log("Nama di URL:", decodedName);
    console.log("Jumlah data divisi:", dataDivisions.length);

    const divisionData = dataDivisions.find(
        (div) => div.name.toLowerCase() === decodedName.toLowerCase()
    );

    if (!divisionData) {
        console.log("Divisi tidak ditemukan di data, melempar 404...");
        notFound();
    }

    const hasBiro = !!(divisionData.biro && divisionData.biro.length > 0);
    const isKetuaWakil = divisionData.name === "Ketua & Wakil";

    return (
        <main className="min-h-screen bg-[#111111] py-12 px-6 font-sans">
            <div className="max-w-5xl mx-auto">
                {/* --- HEADER SECTION --- */}
                <div className="mb-10 text-center">
                    <h1 className="text-3xl font-bold text-yellow-400 mb-4">{divisionData.name}</h1>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
                        {divisionData.description}
                    </p>
                </div>

                {/* --- KORDINATOR (skip for Ketua & Wakil) --- */}
                {!isKetuaWakil && divisionData.coordinator && (
                    <div className="mb-14 md:mb-10 pb-6 md:pb-0 border-b border-yellow-400/30 md:border-0">
                        <div className="flex justify-center">
                            <div className="w-full max-w-72">
                                <DivisionCard
                                    variant="person"
                                    dataDivision={{
                                        name: divisionData.coordinator.name,
                                        imageUrl: divisionData.coordinator.image || "",
                                        role: "Koordinator",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* --- BIRO SECTIONS (for divisions with biro) --- */}
                {hasBiro &&
                    divisionData.biro?.map((b, biroIdx) => (
                        <div
                            key={biroIdx}
                            className="mb-14 md:mb-10 pb-6 md:pb-0 border-b border-yellow-400/30 md:border-0"
                        >
                            <h2 className="text-2xl font-bold text-center mb-6">
                                <span className="text-white">Biro </span>
                                <span className="text-yellow-400">{b.name}</span>
                            </h2>
                            <div className="flex flex-wrap justify-center gap-5">
                                {b.members.map((member, mIdx) => {
                                    const memberName =
                                        member.name.trim() !== ""
                                            ? member.name
                                            : `${b.name} ${mIdx + 1}`;
                                    return (
                                        <div key={mIdx} className="w-full sm:w-60">
                                            <DivisionCard
                                                variant="person"
                                                dataDivision={{
                                                    name: memberName,
                                                    imageUrl: member.imageMember || "",
                                                    role: member.role || "",
                                                }}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}

                {/* --- ANGGOTA / MEMBERS FLAT (for divisions without biro) --- */}
                {!hasBiro && divisionData.members && divisionData.members.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold text-yellow-400 text-center mb-6">
                            {isKetuaWakil ? "Pengurus Inti" : "Anggota"}
                        </h2>
                        <div className="flex flex-wrap justify-center gap-5">
                            {divisionData.members.map((member, index) => {
                                const memberName =
                                    member.name.trim() !== ""
                                        ? member.name
                                        : `${divisionData.name} ${index + 1}`;
                                const isCoordinatorMember =
                                    !isKetuaWakil && divisionData.coordinator?.name === member.name;
                                if (isCoordinatorMember) return null;

                                return (
                                    <div key={index} className="w-full sm:w-60">
                                        <DivisionCard
                                            variant="person"
                                            dataDivision={{
                                                name: memberName,
                                                imageUrl: member.imageMember || "",
                                                role: member.role || "",
                                            }}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
