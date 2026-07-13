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
        (div) =>
            div.name.toLowerCase() === decodedName.toLowerCase() ||
            (div.slug && div.slug.toLowerCase() === decodedName.toLowerCase())
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
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-6">
                        {divisionData.description}
                    </p>
                </div>

                {/* --- FOTO BERSAMA + KORDINATOR (with biro cards around) --- */}
                {!isKetuaWakil && divisionData.coordinator && (
                    <div className="mb-14 md:mb-10">
                        {/* Mobile: coordinator above, biro cards below */}
                        <div className="md:hidden space-y-6">
                            <div className="relative overflow-hidden rounded-3xl">
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
                            {hasBiro && (
                                <div className="flex flex-wrap justify-center gap-3">
                                    {divisionData.biro?.map((b, i) => (
                                        <div
                                            key={i}
                                            className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-center w-60"
                                        >
                                            <h4 className="text-xs font-bold text-yellow-400 uppercase tracking-wide mb-1">
                                                Biro {b.name}
                                            </h4>
                                            <p className="text-gray-400 text-[11px] leading-relaxed">
                                                {b.tugas}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Desktop: biro cards inside coordinator image */}
                        <div className="hidden md:block">
                            {(() => {
                                const biro = divisionData.biro || [];
                                const biroCount = biro.length;
                                const showBiroCards = hasBiro && biroCount >= 2;

                                const biroPositions: { idx: number; className: string }[] = [];
                                if (biroCount === 2) {
                                    biroPositions.push(
                                        { idx: 0, className: "left-4 top-1/2 -translate-y-1/2" },
                                        { idx: 1, className: "right-4 top-1/2 -translate-y-1/2" }
                                    );
                                } else if (biroCount === 3) {
                                    biroPositions.push(
                                        { idx: 0, className: "left-4 top-1/2 -translate-y-1/2" },
                                        { idx: 1, className: "right-4 top-4" },
                                        { idx: 2, className: "right-4 bottom-4" }
                                    );
                                } else if (biroCount === 4) {
                                    biroPositions.push(
                                        { idx: 0, className: "left-4 top-4" },
                                        { idx: 1, className: "right-4 top-4" },
                                        { idx: 2, className: "left-4 bottom-4" },
                                        { idx: 3, className: "right-4 bottom-4" }
                                    );
                                }

                                return (
                                    <div className="relative overflow-hidden rounded-3xl">
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

                                        {showBiroCards &&
                                            biroPositions.map(({ idx, className }) => (
                                                <div
                                                    key={idx}
                                                    className={`absolute z-20 ${className} max-w-52 p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-700/60 text-center hover:border-yellow-400/60 hover:scale-105 transition-all duration-300`}
                                                >
                                                    <h4 className="text-xs font-bold text-yellow-400 uppercase tracking-wide mb-0.5">
                                                        Biro {biro[idx].name}
                                                    </h4>
                                                    <p className="text-gray-300 text-[10px] leading-relaxed">
                                                        {biro[idx].tugas}
                                                    </p>
                                                </div>
                                            ))}

                                        <div className="relative z-10 py-10 md:py-16">
                                            <div className="flex justify-center">
                                                <div className="w-full max-w-72">
                                                    <DivisionCard
                                                        variant="person"
                                                        featured
                                                        dataDivision={{
                                                            name: divisionData.coordinator.name,
                                                            imageUrl:
                                                                divisionData.coordinator.image ||
                                                                "",
                                                            role: "Koordinator",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })()}
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
                                        badgeText={member.role}
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

                {/* --- ANGGOTA / MEMBERS FLAT --- */}
                {!isKetuaWakil && divisionData.members && divisionData.members.length > 0 && (
                    <div className="mb-14">
                        <h2 className="text-2xl font-bold text-yellow-400 text-center mb-6">
                            Anggota
                        </h2>

                        {/* Members list (all screen sizes) */}
                        <div className="flex flex-wrap justify-center gap-5 max-w-3xl mx-auto stagger-fade-in">
                            {divisionData.members.map((member, index) => {
                                const memberName =
                                    member.name.trim() !== ""
                                        ? member.name
                                        : `${divisionData.name} ${index + 1}`;
                                const isCoordinatorMember =
                                    !isKetuaWakil && divisionData.coordinator?.name === member.name;
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
