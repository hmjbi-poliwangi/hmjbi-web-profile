"use client";

import React, { useState } from "react";
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


const CalenderSection = ({ dataKegiatan }: { dataKegiatan: Event[] }) => {
    // Inisialisasi: langsung pilih hari ini
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today);
    const [selectedDate, setSelectedDate] = useState<Date>(today);

    // Helper untuk membandingkan tanggal tanpa jam (Sangat Penting!)
    const toDateString = (date: Date) => format(date, "yyyy-MM-dd");

    // Logika Kalender
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const calendarDays = eachDayOfInterval({ start: startDate, end: endDate });
    const dayNames = ["SENIN", "SELASA", "RABU", "KAMIS", "JUM'AT", "SABTU", "MINGGU"];

    // Ambil event berdasarkan tanggal yang dipilih (Comparison via String)
    const activeEvent = dataKegiatan.find(
        (ev) => toDateString(new Date(ev.date)) === toDateString(selectedDate)
    );

    // Navigasi
    const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
    const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

    const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentMonth(setMonth(currentMonth, parseInt(e.target.value)));
    };

    const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentMonth(setYear(currentMonth, parseInt(e.target.value)));
    };

    const years = Array.from({ length: 11 }, (_, i) => today.getFullYear() - 5 + i);

    return (
        <div className="max-w-6xl p-4 mx-auto md:p-8 font-sans bg-white border border-gray-100 shadow-2xl rounded-4xl md:rounded-[3rem]">
            {/* HEADER */}
            <div className="flex flex-col items-center justify-between gap-4 px-2 mb-8 md:flex-row">
                <div className="flex items-center gap-2">
                    <h2 className="text-3xl text-center md:text-4xl mb-10 font-bold text-black">
                        Kalender <span className="text-[#FFD700]">HMJBI</span>
                    </h2>
                </div>

                <div className="flex items-center gap-3 p-2 border border-gray-100 bg-gray-50 rounded-2xl">
                    <button
                        onClick={prevMonth}
                        className="p-2 text-xl font-black transition-colors hover:text-yellow-600"
                    >
                        {"<"}
                    </button>

                    <div className="flex gap-1">
                        <select
                            value={currentMonth.getMonth()}
                            onChange={handleMonthChange}
                            className="px-2 font-bold text-gray-800 bg-transparent cursor-pointer focus:outline-none"
                        >
                            {Array.from({ length: 12 }, (_, i) => (
                                <option key={i} value={i}>
                                    {format(new Date(0, i), "MMMM", { locale: id })}
                                </option>
                            ))}
                        </select>

                        <select
                            value={currentMonth.getFullYear()}
                            onChange={handleYearChange}
                            className="px-2 font-bold text-gray-800 bg-transparent cursor-pointer focus:outline-none"
                        >
                            {years.map((y) => (
                                <option key={y} value={y}>
                                    {y}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        onClick={nextMonth}
                        className="p-2 text-xl font-black transition-colors hover:text-yellow-600"
                    >
                        {">"}
                    </button>
                </div>
            </div>

            <div className="grid items-stretch grid-cols-1 gap-8 lg:grid-cols-2">
                {/* KIRI: Card Detail Event */}
                <div className="relative flex flex-col bg-zinc-900 rounded-[2.5rem] border-[3px] border-yellow-400 overflow-hidden shadow-xl min-h-112.5">
                    <div className="relative h-56 overflow-hidden bg-zinc-800">
                        {activeEvent?.image ? (
                            <Image
                                key={activeEvent.image} // Key memaksa re-render saat gambar berubah
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
                                <h3 className="mb-4 text-3xl italic font-black leading-tight tracking-tight uppercase">
                                    {activeEvent.title.split(" ")[0]}{" "}
                                    <span className="text-yellow-400">
                                        {activeEvent.title.split(" ").slice(1).join(" ")}
                                    </span>
                                </h3>
                                <p className="max-w-md mb-8 text-sm italic leading-relaxed text-gray-400">
                                    {activeEvent.description}
                                </p>
                                <button className="px-10 py-3 text-xs font-black tracking-widest text-black uppercase transition-all transform bg-yellow-400 rounded-full hover:bg-yellow-500 hover:scale-105">
                                    DETAIL INFO
                                </button>
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
                    <div className="grid grid-cols-7 pb-4 mb-6 border-b border-gray-100">
                        {dayNames.map((day) => (
                            <div
                                key={day}
                                className="text-[10px] md:text-xs font-black text-center text-gray-400 uppercase"
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

                            // Cek Event (Normalisasi string)
                            const hasEvent = dataKegiatan.some(
                                (ev) => toDateString(new Date(ev.date)) === dateStr
                            );

                            return (
                                <div
                                    key={idx}
                                    className="relative flex items-center justify-center"
                                >
                                    <button
                                        onClick={() => setSelectedDate(day)}
                                        className={`
                                            w-10 h-10 md:w-14 md:h-14 flex flex-col items-center justify-center rounded-full transition-all relative
                                            ${!isCurrentMonth ? "text-gray-200" : "text-zinc-800 font-bold"}
                                            ${isSelected ? "ring-2 ring-yellow-400 ring-offset-2 scale-110 shadow-lg bg-white z-10" : "hover:bg-gray-50"}
                                        `}
                                    >
                                        <span className="text-sm md:text-lg">
                                            {format(day, "dd")}
                                        </span>

                                        {/* TITIK INDIKATOR */}
                                        {hasEvent && isCurrentMonth && (
                                            <span
                                                className={`absolute bottom-2 w-2 h-2 rounded-full z-20 ${
                                                    isSelected
                                                        ? "bg-black"
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
