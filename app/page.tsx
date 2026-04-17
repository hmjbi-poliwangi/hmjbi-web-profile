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
import { FreeMode, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// Import Data
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
                    <Swiper
                        slidesPerView={1.5} // Terlihat sedikit card di samping untuk kesan slider
                        spaceBetween={20}
                        freeMode={true}
                        pagination={{ clickable: true }}
                        modules={[FreeMode, Pagination]}
                        breakpoints={{
                            // Ukuran layar tablet (md)
                            640: {
                                slidesPerView: 2.5,
                                spaceBetween: 30,
                            },
                            // Ukuran layar desktop (lg)
                            1024: {
                                slidesPerView: 3.5,
                                spaceBetween: 40,
                            },
                        }}
                        className="pb-12" // Padding bawah agar pagination titik-titik tidak tertutup
                    >
                        {dataDivisions.map((division) => (
                            <SwiperSlide key={division.name}>
                                <Link href={`/division/detail-division/${division.name}`}>
                                    <DivisionCard dataDivision={division} />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
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
