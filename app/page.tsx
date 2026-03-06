"use client"

import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import HeroSection from "@/components/sections/HeroSection";
import AboutPreviewSection from "@/components/sections/AboutPreviewSection";
import ActivityCard from "@/components/ui/ActivityCard";
import CalenderSection from "@/components/sections/CalenderSection";
import InstagramSection from "@/components/sections/InstagramSection";
import DivisionCard from "@/components/ui/DivisionCard";
import { Event } from "@/types/event";
import { Division } from "@/types/division";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { Activity } from "@/types/activity";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// DATA DUMMY
const activities: Activity[] = [
    {
        id: "1",
        judul: "Judul Kegiatan 1",
        deskripsi: "Deskripsi Kegiatan 1 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
        tanggal: "12 Desember 2024",
        status: "Ongoing",
        gambar: "/test-images/digital-photo-frames.jpg",
    },
    {
        id: "2",
        judul: "Judul Kegiatan 2",
        deskripsi: "Deskripsi Kegiatan 2 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
        tanggal: "12 Desember 2024",
        status: "Completed",
        gambar: "/test-images/test-photo.jpg",
    },
    {
        id: "3",
        judul: "Judul Kegiatan 3",
        deskripsi: "Deskripsi Kegiatan 3 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
        tanggal: "12 Desember 2024",
        status: "Upcoming",
        gambar: "/test-images/images.jpg",
    },
];

const dummyDataEvent: Event[] = [
    {
        date: new Date(2026, 2, 2),
        title: "Workshop Next.js",
        description: "Belajar membangun aplikasi modern dengan Next.js 14 dan Server Components.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    },
    {
        date: new Date(2026, 2, 7),
        title: "Gathering Komunitas",
        description: "Kumpul santai bareng developer lokal di Cafe Digital untuk networking.",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    },
    {
        date: new Date(2026, 2, 22),
        title: "Peluncuran Fitur",
        description: "Demonstrasi fitur terbaru kalender interaktif kepada seluruh tim.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
];

const dummyDataDivision: Division[] = [
    {
        name: "PH",
        imageUrl: "/logo-departemen/PH.png",
    },
    {
        name: "PSDM",
        imageUrl: "/logo-departemen/PSDM.png",
    },
    {
        name: "MEDKOM",
        imageUrl: "/logo-departemen/MEDKOMINFO.png",
    },
    {
        name: "KWU",
        imageUrl: "/logo-departemen/KWU.png",
    },
    {
        name: "HUMAS",
        imageUrl: "/logo-departemen/HUMAS.png",
    },
    {
        name: "PENGMAS",
        imageUrl: "/logo-departemen/PENGMAS.png",
    },
    {
        name: "RISTEK",
        imageUrl: "/logo-departemen/RISTEK.png",
    },
];

export default function Home() {
    return (
        <>
            {/* Hero */}
            <HeroSection />

            {/* About Section */}
            <AboutPreviewSection />

            {/* Activities Section */}
            <Section className="bg-(--color-secondary) text-text-white">
                <Container>
                    <h2 className="text-3xl text-center md:text-4xl mb-10 font-bold text-white">
                        Kegiatan <span className="text-[#FFD700]">HMJBI</span>
                    </h2>
                    <div className="grid justify-center grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 align-items-center">
                        {activities.map((aktifitas) => (
                            <ActivityCard
                                key={aktifitas.id}
                                id={aktifitas.id}
                                judul={aktifitas.judul}
                                deskripsi={aktifitas.deskripsi}
                                tanggal={aktifitas.tanggal}
                                status={aktifitas.status}
                                gambar={aktifitas.gambar}
                            />
                        ))}
                    </div>
                    <div className="mt-5 text-center">
                        <button className="px-10 py-3 text-xs font-black tracking-widest text-black uppercase transition-all transform bg-yellow-400 rounded-full hover:bg-yellow-500 hover:scale-105">
                            Lihat Lainnya
                        </button>
                    </div>
                </Container>
            </Section>

            {/** Divisions Section */}
            <Section className="bg-(--color-secondary) text-text-white">
                <Container>
                    <h2 className="text-3xl text-center md:text-4xl mb-10 font-bold text-white">
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
                        {dummyDataDivision.map((division) => (
                            <SwiperSlide key={division.name}>
                                <DivisionCard dataDivision={division} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Container>
            </Section>

            {/** Calender Section */}
            <Section className="bg-(--color-secondary) text-text-white">
                <Container>
                    <CalenderSection dataKegiatan={dummyDataEvent} />
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
