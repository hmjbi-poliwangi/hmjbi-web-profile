import { Division } from "@/types/division";
import Image from "next/image";

export default function DivisionCard({
    dataDivision,
    variant = "logo",
    featured,
    badgeText,
}: {
    dataDivision: Division;
    variant?: "logo" | "person" | "group";
    featured?: boolean;
    badgeText?: string;
}) {
    const aspectClass =
        variant === "person" ? "aspect-[3/4]" : variant === "group" ? "aspect-video" : "aspect-4/3";
    const fitClass = variant === "person" ? "object-cover" : "object-contain p-4";
    return (
        <div
            className={`flex flex-col items-center group ${featured ? "animate-float" : !featured && variant === "person" ? "hover:-translate-y-2 transition-transform duration-500" : ""}`}
        >
            <div
                className={`w-full ${aspectClass} bg-zinc-300 rounded-2xl overflow-hidden relative
                  ${
                      featured
                          ? "border-2 border-[#FFD700] glow-pulse group-hover:shadow-[0_0_50px_rgba(255,215,0,0.6)] group-hover:border-[#FFD700]"
                          : "border border-[#FFD700]/20 group-hover:shadow-[0_0_25px_rgba(255,215,0,0.25)] group-hover:border-[#FFD700]/70"
                  }
                  transition-shadow duration-500`}
            >
                {dataDivision.imageUrl ? (
                    <Image
                        width={400}
                        height={300}
                        src={dataDivision.imageUrl}
                        alt={dataDivision.name}
                        loading="lazy"
                        className={`w-full h-full ${fitClass} transition-transform duration-700 group-hover:scale-105`}
                    />
                ) : (
                    <div className="flex items-center justify-center w-full h-full bg-zinc-400">
                        <span className="text-xs font-bold tracking-widest uppercase opacity-20 text-zinc-600">
                            No Image
                        </span>
                    </div>
                )}

                {/* Koordinator badge */}
                {featured && (
                    <div className="absolute top-0 left-0 right-0 z-20 flex justify-center">
                        <div className="badge-slide-in bg-[#FFD700] text-black text-[10px] font-extrabold uppercase tracking-[0.15em] px-5 py-1.5 rounded-b-lg shadow-lg">
                            {badgeText || "Koordinator"}
                        </div>
                    </div>
                )}

                {/* Gold border line expand from center (person member only) */}
                {!featured && variant === "person" && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-0.5 bg-[#FFD700] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                )}

                {/* Hover overlay */}
                <div
                    className={`absolute inset-0 transition-all duration-500
                      ${
                          featured
                              ? "bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100"
                              : "bg-black/0 group-hover:bg-black/10"
                      }`}
                ></div>

                {/* Shine sweep on hover */}
                {featured && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden">
                        <div className="shine-sweep absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    </div>
                )}

                {/* Info slide-up untuk landing page (non-featured, logo/group) */}
                {!featured &&
                    (variant === "logo" || variant === "group") &&
                    dataDivision.description && (
                        <div className="absolute inset-x-0 bottom-0 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                            <div className="bg-gradient-to-t from-black/90 via-black/70 to-transparent pt-8 pb-3 px-3">
                                <p className="text-white text-xs md:text-sm leading-relaxed line-clamp-3">
                                    {dataDivision.description}
                                </p>
                            </div>
                        </div>
                    )}
            </div>

            <div
                className={`mt-4 text-center transition-all duration-500 ${featured ? "group-hover:-translate-y-1" : "group-hover:translate-y-0.5"}`}
            >
                <h3
                    className={`text-lg font-bold tracking-tight text-white transition-colors md:text-xl text-balance leading-tight group-hover:text-[#FFD700] ${featured ? "group-hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]" : ""}`}
                >
                    {dataDivision.name}
                </h3>
                {dataDivision.role && (
                    <p
                        className={`mt-1 text-sm text-center transition-all duration-300 ${featured ? "text-[#FFD700] font-semibold group-hover:text-yellow-300" : "text-gray-400"}`}
                    >
                        {dataDivision.role}
                    </p>
                )}
            </div>
        </div>
    );
}
