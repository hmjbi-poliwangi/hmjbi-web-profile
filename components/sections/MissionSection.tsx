import { MissionCard } from "@/components/ui/MissionCard";
import Reveal from "../ui/Reveal";

interface MissionSectionProps {
    missions: { text: string; isYellow: boolean }[];
}

export const MissionSection = ({ missions }: MissionSectionProps) => {
    return (
        <section className="max-w-4xl px-6 py-16 mx-auto">
            <Reveal>
                <h2 className="mb-10 text-3xl font-bold text-center text-white">
                    Misi HM<span className="text-yellow-400">JBI</span>
                </h2>
            </Reveal>

            {/* Grid untuk 4 Misi pertama */}
            <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
                {missions.map((mission, index) => (
                    <Reveal key={index} delay={(index % 2) * 120}>
                        <MissionCard content={mission.text} isYellow={mission.isYellow} />
                    </Reveal>
                ))}
            </div>

            {/* Misi kelima di tengah bawah */}
            <div className="flex justify-center">
                <Reveal>
                    <div className="mx-auto w-full md:w-2/3">
                        <MissionCard
                            content="Meningkatkan budaya yang aktif dalam berorganisasi berpartisipasi dalam kegiatan yang bermanfaat serta mendorong optimalisasi dalam mencapai tujuan bersama."
                            isYellow={false}
                        />
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
