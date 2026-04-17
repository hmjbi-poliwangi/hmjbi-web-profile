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

    return (
        <main className="min-h-screen bg-[#111111] py-16 px-6 font-sans">
            <div className="max-w-4xl mx-auto">
                {/* --- HEADER SECTION --- */}
                <div className="mb-16 text-center">
                    <h1 className="text-4xl font-bold text-yellow-400 mb-6">{divisionData.name}</h1>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
                      {divisionData.description}
                    </p>
                </div>

                {/* --- KORDINATOR / KETUA DIVISI SECTION --- */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">Anggota</h2>

                    {/* Satu Kartu Besar di Tengah untuk Koordinator/Ketua */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-sm">
                            <DivisionCard
                                dataDivision={{
                                    name: `${divisionData.name}`, 
                                    imageUrl: divisionData.imageCoordinator || "",
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* --- ANGGOTA DIVISI SECTION --- */}
                {divisionData.members && divisionData.members.length > 0 && (
                    <div>
                        {/* Grid responsif untuk anggota: 1 kolom (HP), 2 kolom (Tablet), 3 kolom (Desktop) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {divisionData.members.map((member, index) => {
                                // Jika nama anggota kosong (seperti di data dummy kamu), kita beri nama default
                                const memberName =
                                    member.name.trim() !== ""
                                        ? member.name
                                        : `${divisionData.name} ${index + 1}`;

                                return (
                                    <DivisionCard
                                        key={index}
                                        dataDivision={{
                                            name: memberName,
                                            imageUrl: member.imageMember || "", // Gunakan foto member jika ada
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
