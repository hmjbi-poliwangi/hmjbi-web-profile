"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo-hmjbi.png";
import Modal from "../ui/Modal";

export default function Navbar() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "Beranda", href: "/" },
        { name: "Divisi", href: "/division" },
        { name: "Kegiatan", href: "/activities" },
    ];

    return (
        <nav className="relative z-50 w-full px-6 py-6 bg-[#111111] md:px-10 lg:px-20">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                {/* Logo Pojok Kiri */}
                <Link href="/" className="w-12 transition-transform hover:scale-105">
                    <Image
                        src={Logo}
                        alt="Logo HMJBI"
                        priority
                        className="object-contain w-full h-auto"
                    />
                </Link>

                {/* Hamburger Mobile */}
                <button
                    className="text-white lg:hidden p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        )}
                    </svg>
                </button>

                {/* Menu Tengah (Floating di bawah HMJBI pada Desktop) */}
                <div
                    className={`
          absolute lg:absolute top-full lg:top-6 left-0 lg:left-1/2
          w-full lg:w-auto bg-[#111111] lg:bg-transparent
          flex flex-col lg:flex-row items-center
          lg:-translate-x-1/2 transition-all duration-500 ease-in-out z-60
          ${isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-5 lg:opacity-100 lg:visible lg:translate-y-0"}
        `}
                >
                    <ul className="flex flex-col items-center w-full gap-4 p-8 lg:flex-row lg:gap-6 lg:p-0">
                        {navLinks.map((link) => (
                            <li key={link.name} className="w-full lg:w-auto">
                                <Link
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block text-center border-2 border-[#FFD700]/40 text-white font-bold px-5 py-2 rounded-xl transition-all duration-300 hover:bg-[#FFD700] hover:text-black hover:border-[#FFD700] hover:shadow-[0_0_20px_rgba(255,215,0,0.4)]"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tombol Aspirasi */}
                <button
                    className="hidden lg:block px-6 py-2.5 font-bold text-black bg-[#FFD700] rounded-full transition-all hover:bg-yellow-500 hover:scale-105"
                    onClick={() => setModalOpen(true)}
                >
                    Punya Aspirasi?
                </button>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                // PERBAIKAN: Gunakan div/span agar tidak nested header error
                title={
                    <div className="text-2xl font-bold text-black text-center">
                        Aspi<span className="text-[#FFD700]">Kot</span>
                    </div>
                }
            >
                <form className="space-y-4">
                    <input type="text" placeholder="Nama" className="w-full p-2 border rounded" />
                    <textarea
                        placeholder="Aspirasi"
                        className="w-full p-2 border rounded"
                        rows={4}
                    ></textarea>
                    <button className="w-full py-2 bg-[#FFD700] font-bold rounded">Submit</button>
                </form>
            </Modal>
        </nav>
    );
}
