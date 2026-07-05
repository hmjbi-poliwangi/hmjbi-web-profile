import Image from "next/image";
import { notFound } from "next/navigation";
import { dataDivisions } from "@/data/division";
import DivisionCard from "@/components/ui/DivisionCard";

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

                {/* --- FOTO BERSAMA + KORDINATOR --- */}
                {!isKetuaWakil && divisionData.coordinator && (
                    <div className="relative mb-14 md:mb-10 overflow-hidden rounded-3xl">
                        {/* Background group photo */}
                        <div className="absolute inset-0 w-full h-full">
                            <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 relative">
                                <Image
                                    width={800}
                                    height={450}
                                    src={divisionData.imageUrl || "/logo-hmjbi.png"}
                                    alt=""
                                    className="w-full h-full object-cover opacity-20"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/40 to-transparent"></div>
                            </div>
                        </div>
                        <div className="relative z-10 py-10 md:py-16">
                            <div className="flex justify-center">
                                <div className="w-full max-w-72">
                                    <DivisionCard
                                        variant="person"
                                        featured
                                        dataDivision={{
                                            name: divisionData.coordinator.name,
                                            imageUrl: divisionData.coordinator.image || "",
                                            role: "Koordinator",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- KETUA & WAKIL (keduanya featured) --- */}
                {isKetuaWakil && divisionData.members && (
                    <div className="mb-14 md:mb-10 pb-6 md:pb-0">
                        <div className="flex flex-wrap justify-center gap-8">
                            {divisionData.members.map((member, idx) => (
                                <div key={idx} className="w-full max-w-72">
                                    <DivisionCard
                                        variant="person"
                                        featured
                                        dataDivision={{
                                            name: member.name,
                                            imageUrl: member.imageMember || "",
                                            role: member.role || "",
                                        }}
                                    />
                                </div>
                            ))}
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
                            <div className="flex flex-wrap justify-center gap-5 max-w-3xl mx-auto stagger-fade-in">
                                {b.members.map((member, mIdx) => {
                                    const memberName =
                                        member.name.trim() !== ""
                                            ? member.name
                                            : `${b.name} ${mIdx + 1}`;
                                    return (
                                        <div key={mIdx} className="w-60">
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
                {!hasBiro &&
                    !isKetuaWakil &&
                    divisionData.members &&
                    divisionData.members.length > 0 && (
                        <div>
                            <h2 className="text-2xl font-bold text-yellow-400 text-center mb-6">
                                {isKetuaWakil ? "Pengurus Inti" : "Anggota"}
                            </h2>
                            <div className="flex flex-wrap justify-center gap-5 max-w-3xl mx-auto stagger-fade-in">
                                {divisionData.members.map((member, index) => {
                                    const memberName =
                                        member.name.trim() !== ""
                                            ? member.name
                                            : `${divisionData.name} ${index + 1}`;
                                    const isCoordinatorMember =
                                        !isKetuaWakil &&
                                        divisionData.coordinator?.name === member.name;
                                    if (isCoordinatorMember) return null;

                                    return (
                                        <div key={index} className="w-60">
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
