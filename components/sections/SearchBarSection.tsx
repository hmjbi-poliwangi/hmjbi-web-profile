"use client";

import { useState, useRef, useEffect } from "react";

type StatusFilter = "Semua" | "Sedang Berlangsung" | "Akan Datang" | "Selesai";

interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    filterStatus: StatusFilter;
    setFilterStatus: (status: StatusFilter) => void;
}

const statusOptions: StatusFilter[] = ["Semua", "Sedang Berlangsung", "Akan Datang", "Selesai"];

export default function SearchBar({
    searchQuery,
    setSearchQuery,
    filterStatus,
    setFilterStatus,
}: SearchBarProps) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="flex flex-col gap-4 mt-10 md:flex-row md:items-center">
            {/* Input Search */}
            <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <svg
                        className="w-5 h-5 text-yellow-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>
                <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full py-3 pl-12 pr-4 text-sm text-yellow-400 bg-transparent border border-yellow-400 rounded-full focus:outline-none focus:ring-1 focus:ring-yellow-400 placeholder-yellow-400/50"
                    placeholder="Cari program kerja berdasarkan judul..."
                />
            </div>

            {/* Tombol Filter + Dropdown */}
            <div className="relative md:w-auto w-full" ref={dropdownRef}>
                <button
                    onClick={() => setOpen(!open)}
                    className={`w-full md:w-auto px-10 py-3 text-sm font-semibold transition-all duration-200 rounded-full border ${
                        filterStatus !== "Semua"
                            ? "bg-yellow-400 text-black border-yellow-400"
                            : "text-yellow-400 bg-transparent border-yellow-400 hover:bg-yellow-400 hover:text-black"
                    }`}
                >
                    {filterStatus !== "Semua" ? filterStatus : "Filter"}
                </button>

                {open && (
                    <div className="absolute right-0 z-30 w-56 mt-2 overflow-hidden border rounded-xl border-zinc-700 bg-zinc-900 shadow-xl shadow-black/40">
                        {statusOptions.map((option) => (
                            <button
                                key={option}
                                onClick={() => {
                                    setFilterStatus(option);
                                    setOpen(false);
                                }}
                                className={`w-full px-4 py-3 text-sm text-left transition-colors ${
                                    filterStatus === option
                                        ? "bg-yellow-400/15 text-yellow-400 font-semibold"
                                        : "text-gray-300 hover:bg-zinc-800 hover:text-white"
                                }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
