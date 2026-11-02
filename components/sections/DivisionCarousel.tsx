"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";
import { dataDivisions } from "@/data/division";
import DivisionCard from "@/components/ui/DivisionCard";
import Link from "next/link";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function DivisionCarousel() {
    return (
        <div className="relative px-6 md:px-14">
            <Swiper
                slidesPerView={1.5}
                spaceBetween={12}
                freeMode={true}
                pagination={{ clickable: true }}
                navigation={{
                    prevEl: ".swiper-prev",
                    nextEl: ".swiper-next",
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                modules={[FreeMode, Pagination, Navigation, Autoplay]}
                breakpoints={{
                    640: {
                        slidesPerView: 2.5,
                        spaceBetween: 16,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 28,
                    },
                }}
                className="pb-16"
            >
                {dataDivisions.map((division) => (
                    <SwiperSlide key={division.name}>
                        <Link
                            href={`/division/detail-division/${division.slug || division.name}`}
                            prefetch
                        >
                            <DivisionCard variant="group" dataDivision={division} />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button className="swiper-prev absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-14 md:h-14 flex items-center justify-center bg-[#FFD700] text-black rounded-full shadow-2xl hover:bg-yellow-500 hover:scale-110 transition-all">
                <svg
                    className="w-4 h-4 md:w-6 md:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>
            <button className="swiper-next absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-14 md:h-14 flex items-center justify-center bg-[#FFD700] text-black rounded-full shadow-2xl hover:bg-yellow-500 hover:scale-110 transition-all">
                <svg
                    className="w-4 h-4 md:w-6 md:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>
        </div>
    );
}
