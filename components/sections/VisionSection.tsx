interface VisionSectionProps {
    vision: string;
}

export const VisionSection = (vision: VisionSectionProps) => (
    <section className="max-w-3xl px-6 py-16 mx-auto text-center">
        <h2 className="mb-6 text-3xl font-bold text-white">
            Visi HM<span className="text-yellow-400">JBI</span>
        </h2>
        <p className="text-sm leading-relaxed text-gray-300 md:text-base">{vision.vision}</p>
    </section>
);
