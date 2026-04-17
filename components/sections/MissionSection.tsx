import { MissionCard } from "@/components/ui/MissionCard";

interface MissionSectionProps {
    missions: { text: string; isYellow: boolean }[];
}

export const MissionSection = (missions: MissionSectionProps) => {
    return (
        <section className="max-w-4xl px-6 py-16 mx-auto">
            <h2 className="mb-10 text-3xl font-bold text-center text-white">
                Misi HM<span className="text-yellow-400">JBI</span>
            </h2>

            {/* Grid untuk 4 Misi pertama */}
            <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
                {missions.missions.map((mission, index) => (
                    <MissionCard key={index} content={mission.text} isYellow={mission.isYellow} />
                ))}
            </div>

            {/* Misi kelima di tengah bawah */}
            <div className="flex justify-center">
                <div className="w-full md:w-1/2">
                    <MissionCard
                        content="Meningkatkan budaya yang aktif dalam berorganisasi berpartisipasi dalam kegiatan yang bermanfaat serta mendorong optimalisasi dalam mencapai tujuan bersama."
                        isYellow={false}
                    />
                </div>
            </div>
        </section>
    );
};
