"use client";

import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import HeroSection from "@/components/sections/HeroSection";
import AboutPreviewSection from "@/components/sections/AboutPreviewSection";
import ProkerCard from "@/components/ui/ProkerCard";
import CalenderSection from "@/components/sections/CalenderSection";
import { dataProker } from "@/data/proker";
import { Event } from "@/types/event";
import { dataDivisions } from "@/data/division";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/Skeleton";
import Reveal from "@/components/ui/Reveal";

const DivisionCarousel = dynamic(() => import("@/components/sections/DivisionCarousel"), {
    ssr: false,
    loading: () => (
        <div className="relative px-6 md:px-14">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {dataDivisions.slice(0, 3).map((d) => (
                    <Skeleton key={d.name} className="w-full aspect-video" />
                ))}
            </div>
        </div>
    ),
});

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
                    <Reveal>
                        <h2 className="mb-10 text-3xl font-bold text-center text-white md:text-4xl">
                            Divisi <span className="text-[#FFD700]">HMJBI</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={150}>
                        <DivisionCarousel />
                    </Reveal>
                </Container>
            </Section>

            {/* Activities Section */}
            <Section className="bg-(--color-secondary) text-text-white">
                <Container>
                    <Reveal>
                        <h2 className="mb-10 text-3xl font-bold text-center text-white md:text-4xl">
                            Proker <span className="text-[#FFD700]">HMJBI</span>
                        </h2>
                    </Reveal>
                    <div className="grid justify-center grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 align-items-center">
                        {dataProker.slice(0, 4).map((proker, i) => (
                            <Reveal key={proker.id} delay={i * 80}>
                                <Link href={`/activities/detail-proker/${proker.id}`}>
                                    <ProkerCard proker={proker} />
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                    <div className="mt-5 text-center">
                        <Reveal delay={200}>
                            <Link href="/activities">
                                <button className="px-10 py-3 text-xs font-black tracking-widest text-black uppercase transition-all transform bg-yellow-400 rounded-full hover:bg-yellow-500 hover:scale-105">
                                    Lihat Lainnya
                                </button>
                            </Link>
                        </Reveal>
                    </div>
                </Container>
            </Section>

            {/** Calender Section */}
            <Section className="bg-(--color-secondary) text-text-white">
                <Container>
                    <Reveal>
                        <CalenderSection dataKegiatan={prokerEvents} />
                    </Reveal>
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
