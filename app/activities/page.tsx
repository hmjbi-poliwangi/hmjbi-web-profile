"use client";

import { useState } from "react";
import HeaderProker from "@/components/sections/HeaderActivitiesSection";
import SearchBar from "@/components/sections/SearchBarSection";
import EventCard from "@/components/ui/EventCard";
import { dataEvents } from "@/data/events";
import Link from "next/link";

export default function ProkerPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredEvents = dataEvents.filter((event) => {
        return event.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <main className="min-h-screen bg-[#111111] py-12 px-6 font-sans">
            <div className="max-w-6xl mx-auto space-y-12">
                <section>
                    <HeaderProker />
                    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                </section>

                <section>
                    {filteredEvents.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                            {filteredEvents.map((event) => (
                                <Link key={event.id} href={`/activities/detail-activity/${event.id}`}>
                                    <EventCard data={event} />
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center text-gray-500">
                            Tidak ada program kerja yang cocok dengan `{searchQuery}`
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}
