interface MissionCardProps {
    content: string;
    isYellow?: boolean;
}
export const MissionCard: React.FC<MissionCardProps> = ({ content, isYellow = false }) => {
    return (
        <div
            className={`p-6 rounded-xl text-sm font-medium text-center flex items-center justify-center min-h-[120px] shadow-md
      ${isYellow ? "bg-yellow-400 text-black" : "bg-white text-black"}`}
        >
            <p>{content}</p>
        </div>
    );
};
