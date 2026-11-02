"use client";

export default function PageLoadingIndicator({ visible }: { visible: boolean }) {
    return (
        <div
            aria-hidden
            className={`${
                visible ? "page-loading-in " : ""
            }fixed inset-0 z-[60] flex flex-col items-center justify-center gap-5 bg-black/60 backdrop-blur-md transition-opacity duration-300 pointer-events-none ${
                visible ? "opacity-100" : "opacity-0"
            }`}
        >
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-4 border-[#FFD700]/20 border-t-[#FFD700] animate-spin" />
                <div className="absolute inset-4 rounded-full bg-[#FFD700]/15 animate-pulse" />
            </div>
            <div className="text-center">
                <p className="text-sm font-semibold tracking-wide text-[#FFD700]">
                    Harap tunggu...
                </p>
            </div>
        </div>
    );
}
