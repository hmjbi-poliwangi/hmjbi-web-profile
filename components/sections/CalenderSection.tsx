"use client";

import React, { useState, useRef, useEffect } from "react";
import {
    format,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    isSameMonth,
    addMonths,
    subMonths,
    setMonth,
    setYear,
} from "date-fns";
import { id } from "date-fns/locale";
import Image from "next/image";
import { Event } from "@/types/event";

function CustomDropdown({
    value,
    options,
    onChange,
}: {
    value: string;
    options: { label: string; value: number }[];
    onChange: (val: number) => void;
}) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    const selected = options.find((o) => o.value === parseInt(value));

    return (
        <div className="relative" ref={ref}>
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-1.5 px-3 py-1.5 font-bold text-sm text-white bg-zinc-700 rounded-lg cursor-pointer transition-colors hover:bg-zinc-600 focus:outline-none"
            >
                {selected?.label}
                <svg
                    className={`w-3 h-3 text-zinc-400 transition-transform ${open ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {open && (
                <div className="absolute top-full left-0 z-50 mt-1.5 w-40 max-h-56 overflow-y-auto rounded-xl bg-zinc-800 shadow-xl shadow-black/40 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {options.map((opt) => (
                        <button
                            key={opt.value}
                            onClick={() => {
                                onChange(opt.value);
                                setOpen(false);
                            }}
                            className={`w-full px-3 py-2 text-sm text-left transition-colors ${
                                parseInt(value) === opt.value
                                    ? "bg-yellow-400/15 text-yellow-400 font-semibold"
                                    : "text-gray-300 hover:bg-zinc-700 hover:text-white"
                            }`}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

const CalenderSection = ({ dataKegiatan }: { dataKegiatan: Event[] }) => {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today);
    const [selectedDate, setSelectedDate] = useState<Date>(today);

    const toDateString = (date: Date) => format(date, "yyyy-MM-dd");

    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const calendarDays = eachDayOfInterval({ start: startDate, end: endDate });
    const dayNames = ["SENIN", "SELASA", "RABU", "KAMIS", "JUM'AT", "SABTU", "MINGGU"];

    const activeEvent = dataKegiatan.find((ev) => {
        const evStart = new Date(ev.date);
        const regDate = ev.registrationDate ? new Date(ev.registrationDate) : undefined;
        return (
            toDateString(evStart) === toDateString(selectedDate) ||
            (regDate ? toDateString(regDate) === toDateString(selectedDate) : false)
        );
    });

    const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
    const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

    const handleMonthChange = (val: number) => {
        setCurrentMonth(setMonth(currentMonth, val));
    };

    const handleYearChange = (val: number) => {
        setCurrentMonth(setYear(currentMonth, val));
    };

    const years = Array.from({ length: 10 }, (_, i) => today.getFullYear() + i);

    const monthOptions = Array.from({ length: 12 }, (_, i) => ({
        label: format(new Date(0, i), "MMMM", { locale: id }),
        value: i,
    }));

    const yearOptions = years.map((y) => ({
        label: String(y),
        value: y,
    }));

    return (
        <div className="max-w-6xl p-4 mx-auto md:p-8 font-sans bg-[#1a1a1a] border border-zinc-700 shadow-2xl rounded-4xl md:rounded-[3rem]">
            {/* HEADER */}
            <div className="flex flex-col items-center justify-between gap-4 px-2 mb-8 md:flex-row">
                <div className="flex items-center gap-2">
                    <h2 className="mb-10 text-3xl font-bold text-center text-white md:text-4xl">
                        Kalender <span className="text-[#FFD700]">HMJBI</span>
                    </h2>
                </div>

                <div className="flex items-center gap-3 p-2 border border-zinc-600 bg-zinc-800 rounded-2xl">
                    <button
                        onClick={prevMonth}
                        className="p-2 text-xl font-black text-zinc-400 transition-colors hover:text-yellow-400"
                    >
                        {"<"}
                    </button>

                    <div className="flex gap-1.5">
                        <CustomDropdown
                            value={String(currentMonth.getMonth())}
                            options={monthOptions}
                            onChange={handleMonthChange}
                        />
                        <CustomDropdown
                            value={String(currentMonth.getFullYear())}
                            options={yearOptions}
                            onChange={handleYearChange}
                        />
                    </div>

                    <button
                        onClick={nextMonth}
                        className="p-2 text-xl font-black text-zinc-400 transition-colors hover:text-yellow-400"
                    >
                        {">"}
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center gap-6 mb-6 text-xs text-gray-400">
                <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>Pendaftaran Dibuka</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-yellow-500" />
                    <span>Pelaksanaan</span>
                </div>
            </div>
            <div className="grid items-stretch grid-cols-1 gap-8 lg:grid-cols-2">
                {/* KIRI: Card Detail Event */}
                <div className="relative flex flex-col bg-zinc-900 rounded-[2.5rem] border-[3px] border-yellow-400 overflow-hidden shadow-xl min-h-112.5">
                    <div className="relative h-56 overflow-hidden bg-zinc-800">
                        {activeEvent?.image ? (
                            <Image
                                key={activeEvent.image}
                                src={activeEvent.image}
                                alt="event"
                                fill
                                className="object-cover duration-500 opacity-70 animate-in fade-in"
                            />
                        ) : (
                            <div className="flex items-center justify-center w-full h-full italic text-zinc-600">
                                No Preview Image
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col justify-center flex-1 p-8 text-white">
                        {activeEvent ? (
                            <div
                                key={toDateString(selectedDate)}
                                className="duration-500 animate-in fade-in slide-in-from-bottom-4"
                            >
                                <h3 className="mb-2 text-3xl italic font-black leading-tight tracking-tight uppercase">
                                    {activeEvent.title.split(" ")[0]}{" "}
                                    <span className="text-yellow-400">
                                        {activeEvent.title.split(" ").slice(1).join(" ")}
                                    </span>
                                </h3>
                                <p className="mb-4 text-xs font-semibold text-yellow-400/80">
                                    {format(new Date(activeEvent.date), "dd MMMM yyyy", {
                                        locale: id,
                                    })}
                                </p>
                                <p className="max-w-md mb-8 text-sm italic leading-relaxed text-gray-400">
                                    {activeEvent.description}
                                </p>
                                <a href={`/activities/detail-proker/${activeEvent.id}`}>
                                    <button className="px-10 py-3 text-xs font-black tracking-widest text-black uppercase transition-all transform bg-yellow-400 rounded-full hover:bg-yellow-500 hover:scale-105">
                                        DETAIL INFO
                                    </button>
                                </a>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full opacity-50">
                                <p className="italic text-center text-gray-400">
                                    Tidak ada kegiatan pada
                                    <br />
                                    <span className="not-italic font-bold text-white">
                                        {format(selectedDate, "dd MMMM yyyy", { locale: id })}
                                    </span>
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* KANAN: Grid Kalender */}
                <div className="flex flex-col justify-center">
                    <div className="grid grid-cols-7 pb-4 mb-6 border-b border-zinc-700">
                        {dayNames.map((day) => (
                            <div
                                key={day}
                                className="text-[10px] md:text-xs font-black text-center text-zinc-500 uppercase"
                            >
                                {day}
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-7 gap-y-4 md:gap-y-6">
                        {calendarDays.map((day, idx) => {
                            const dateStr = toDateString(day);
                            const selectedStr = toDateString(selectedDate);
                            const isSelected = dateStr === selectedStr;
                            const isCurrentMonth = isSameMonth(day, monthStart);

                            const dotEvent = dataKegiatan.find((ev) => {
                                const evStart = new Date(ev.date);
                                const regDate = ev.registrationDate
                                    ? new Date(ev.registrationDate)
                                    : undefined;
                                return (
                                    toDateString(evStart) === dateStr ||
                                    (regDate ? toDateString(regDate) === dateStr : false)
                                );
                            });
                            const hasEvent = !!dotEvent;
                            const isRegDot = dotEvent?.registrationDate
                                ? toDateString(new Date(dotEvent.registrationDate)) === dateStr
                                : false;

                            return (
                                <div
                                    key={idx}
                                    className="relative flex items-center justify-center"
                                >
                                    <button
                                        onClick={() => setSelectedDate(day)}
                                        className={`
                                            w-10 h-10 md:w-14 md:h-14 flex flex-col items-center justify-center rounded-full transition-all relative
                                            ${!isCurrentMonth ? "text-zinc-700" : "text-zinc-300 font-bold"}
                                            ${isSelected ? "ring-2 ring-yellow-400 ring-offset-2 ring-offset-[#1a1a1a] scale-110 shadow-lg bg-zinc-700 z-10" : "hover:bg-zinc-800"}
                                        `}
                                    >
                                        <span className="text-sm md:text-lg">
                                            {format(day, "dd")}
                                        </span>

                                        {hasEvent && isCurrentMonth && (
                                            <span
                                                className={`absolute bottom-2 w-2 h-2 rounded-full z-20 ${
                                                    isRegDot
                                                        ? isSelected
                                                            ? "bg-blue-400"
                                                            : "bg-blue-500 animate-pulse"
                                                        : isSelected
                                                          ? "bg-yellow-400"
                                                          : "bg-yellow-500 animate-pulse"
                                                }`}
                                            />
                                        )}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalenderSection;
