"use client";

import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import HeroSection from "@/components/sections/HeroSection";
import AboutPreviewSection from "@/components/sections/AboutPreviewSection";
import ActivityCard from "@/components/ui/ActivityCard";
import CalenderSection from "@/components/sections/CalenderSection";
import InstagramSection from "@/components/sections/InstagramSection";
import DivisionCard from "@/components/ui/DivisionCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { dataEvents } from "@/data/events";
import { dataDivisions } from "@/data/division";
import Link from "next/link";

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
                    <div className="relative px-8 md:px-10">
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={16}
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
                                    slidesPerView: 3,
                                    spaceBetween: 20,
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
                                    <Link href={`/division/detail-division/${division.name}`}>
                                        <DivisionCard variant="group" dataDivision={division} />
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <button className="swiper-prev absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-[#FFD700] text-black rounded-full shadow-2xl hover:bg-yellow-500 hover:scale-110 transition-all">
                            <svg
                                className="w-7 h-7 md:w-8 md:h-8"
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
                        <button className="swiper-next absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-[#FFD700] text-black rounded-full shadow-2xl hover:bg-yellow-500 hover:scale-110 transition-all">
                            <svg
                                className="w-7 h-7 md:w-8 md:h-8"
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
                        Kegiatan <span className="text-[#FFD700]">HMJBI</span>
                    </h2>
                    <div className="grid justify-center grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 align-items-center">
                        {dataEvents.slice(0, 3).map((event) => (
                            <Link key={event.id} href={`/activities/detail-activity/${event.id}`}>
                                <ActivityCard
                                    id={event.id}
                                    title={event.title}
                                    description={event.description}
                                    date={event.date}
                                    status={event.status}
                                    image={event.image}
                                />
                            </Link>
                        ))}
                    </div>
                    <div className="mt-5 text-center">
                        <button className="px-10 py-3 text-xs font-black tracking-widest text-black uppercase transition-all transform bg-yellow-400 rounded-full hover:bg-yellow-500 hover:scale-105">
                            Lihat Lainnya
                        </button>
                    </div>
                </Container>
            </Section>

            {/** Calender Section */}
            <Section className="bg-(--color-secondary) text-text-white">
                <Container>
                    <CalenderSection dataKegiatan={dataEvents} />
                </Container>
            </Section>

            {/** Instagram Section */}
            <Section className="bg-(--color-secondary) text-text-white">
                <Container>
                    <InstagramSection />
                </Container>
            </Section>
        </>
    );
}
