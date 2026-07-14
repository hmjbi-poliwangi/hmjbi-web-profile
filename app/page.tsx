"use client";

import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import HeroSection from "@/components/sections/HeroSection";
import AboutPreviewSection from "@/components/sections/AboutPreviewSection";
import ProkerCard from "@/components/ui/ProkerCard";
import CalenderSection from "@/components/sections/CalenderSection";
// import InstagramSection from "@/components/sections/InstagramSection";
import DivisionCard from "@/components/ui/DivisionCard";
import { dataProker } from "@/data/proker";
import { Event } from "@/types/event";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { dataDivisions } from "@/data/division";
import Link from "next/link";

const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
];

interface DateRange {
    start: Date;
    end: Date;
}

function parseTanggalRange(tanggal: string): DateRange {
    const crossMonth = tanggal.match(/(\d+)\s+(\w+)\s*[-–]\s*(\d+)\s+(\w+)\s+(\d{4})/);
    if (crossMonth) {
        const startMonth = monthNames.findIndex((n) =>
            n.toLowerCase().startsWith(crossMonth[2].toLowerCase())
        );
        const endMonth = monthNames.findIndex((n) =>
            n.toLowerCase().startsWith(crossMonth[4].toLowerCase())
        );
        const year = parseInt(crossMonth[5]);
        if (startMonth >= 0 && endMonth >= 0) {
            return {
                start: new Date(year, startMonth, parseInt(crossMonth[1])),
                end: new Date(year, endMonth, parseInt(crossMonth[3])),
            };
        }
    }
    const m = tanggal.match(/(\d+)[-\s](\d+)\s+(\w+)\s+(\d{4})/);
    if (m) {
        const month = monthNames.findIndex((n) => n.toLowerCase().startsWith(m[3].toLowerCase()));
        if (month >= 0) {
            const year = parseInt(m[4]);
            return {
                start: new Date(year, month, parseInt(m[1])),
                end: new Date(year, month, parseInt(m[2])),
            };
        }
    }
    const r = tanggal.match(/(\w+)\s*[-–]\s*(\w+)\s+(\d{4})/);
    if (r) {
        const startMonth = monthNames.findIndex((n) =>
            n.toLowerCase().startsWith(r[1].toLowerCase())
        );
        const endMonth = monthNames.findIndex((n) =>
            n.toLowerCase().startsWith(r[2].toLowerCase())
        );
        const year = parseInt(r[3]);
        if (startMonth >= 0 && endMonth >= 0) {
            return {
                start: new Date(year, startMonth, 1),
                end: new Date(year, endMonth, 28),
            };
        }
    }
    const now = new Date();
    return { start: now, end: now };
}

function parseTanggalSingle(tanggal: string): Date | undefined {
    const m = tanggal.match(/(\d+)\s+(\w+)\s+(\d{4})/);
    if (m) {
        const month = monthNames.findIndex((n) => n.toLowerCase().startsWith(m[2].toLowerCase()));
        if (month >= 0) return new Date(parseInt(m[3]), month, parseInt(m[1]));
    }
    return undefined;
}

const prokerEvents: Event[] = dataProker.map((p) => {
    const range = parseTanggalRange(p.tanggal);
    const regOpen = p.registration?.openDate
        ? parseTanggalSingle(p.registration.openDate)
        : undefined;
    return {
        id: p.id,
        date: range.start,
        endDate: range.end,
        title: p.name,
        description: p.description,
        image: p.image,
        status: "COMING SOON" as const,
        registrationDate: regOpen,
    };
});

export default function Home() {
    return (
        <>
            {/* Hero */}
            <HeroSection />

            {/* About Section */}
            <AboutPreviewSection />

            {/** Divisions Section */}
            <Section className="bg-(--color-secondary) text-text-white">
                <Container>
                    <h2 className="mb-10 text-3xl font-bold text-center text-white md:text-4xl">
                        Divisi <span className="text-[#FFD700]">HMJBI</span>
                    </h2>
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
                </Container>
            </Section>

            {/* Activities Section */}
            <Section className="bg-(--color-secondary) text-text-white">
                <Container>
                    <h2 className="mb-10 text-3xl font-bold text-center text-white md:text-4xl">
                        Proker <span className="text-[#FFD700]">HMJBI</span>
                    </h2>
                    <div className="grid justify-center grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 align-items-center">
                        {dataProker.slice(0, 4).map((proker) => (
                            <Link key={proker.id} href={`/activities/detail-proker/${proker.id}`}>
                                <ProkerCard proker={proker} />
                            </Link>
                        ))}
                    </div>
                    <div className="mt-5 text-center">
                        <Link href="/activities">
                            <button className="px-10 py-3 text-xs font-black tracking-widest text-black uppercase transition-all transform bg-yellow-400 rounded-full hover:bg-yellow-500 hover:scale-105">
                                Lihat Lainnya
                            </button>
                        </Link>
                    </div>
                </Container>
            </Section>

            {/** Calender Section */}
            <Section className="bg-(--color-secondary) text-text-white">
                <Container>
                    <CalenderSection dataKegiatan={prokerEvents} />
                </Container>
            </Section>

            {/** Instagram Section */}
            {/* <Section className="bg-(--color-secondary) text-text-white">
                <Container>
                    <InstagramSection />
                </Container>
            </Section> */}
        </>
    );
}
