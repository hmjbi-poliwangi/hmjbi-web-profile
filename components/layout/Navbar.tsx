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
        { name: "Divisi", href: "/about" },
        { name: "Kegiatan", href: "/activities" },
    ];

    return (
        <nav className="relative z-50 px-4 py-4 bg-secondary md:px-10 lg:px-20 2xl:px-40">
            <div className="flex items-center justify-between container-main">
                {/* Logo */}
                <Link href="/" className="w-10 p-1 bg-white rounded-sm shrink-0">
                    <Image src={Logo} alt="Logo HMJBI" />
                </Link>

                {/* Hamburger Button (Mobile Only) */}
                <button
                    className="p-2 text-white lg:hidden"
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

                {/* Desktop Menu & Mobile Menu Wrapper */}
                <div className={`absolute lg:static top-full left-0 w-full lg:w-full bg-secondary lg:bg-transparent flex flex-col lg:flex-row items-center transition-all duration-30 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible lg:opacity-100 lg:visible"}`}>
                    {/* UL Menu - Diberi ml-auto lg:mr-auto agar berada di tengah layar desktop */}
                    <ul className="flex flex-col items-center w-full gap-4 p-6 lg:flex-row lg:w-auto lg:ml-auto lg:mr-auto lg:p-0">
                        {navLinks.map((link) => (
                            <li key={link.name} className="w-full text-center lg:w-auto">
                                <Link
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block border font-medium border-primary px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-primary hover:text-black hover:shadow-[0_0_10px_var(--color-primary)] text-white lg:text-current"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Tombol Aspirasi */}
                    <button
                        className="mb-6 lg:mb-0 w-[80%] lg:w-auto px-4 py-2 font-bold text-white border border-dashed rounded-lg lg:text-white bg-primary/20 lg:bg-transparent border-primary lg:border-none shrink-0"
                        onClick={() => {
                            setModalOpen(true);
                            setIsMenuOpen(false);
                        }}
                    >
                        Punya Aspirasi?
                    </button>
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                title={
                    <div className="flex flex-col items-center header-wrap">
                        <div className="group">
                            <div className="bg-black pl-12 pr-12 pt-1.5 pb-1.5 rounded-[60px] cursor-default transition-all duration-300 ease-in-out hover:shadow-[0_0_5px_var(--color-secondary)]">
                                <h1 className="text-4xl font-bold text-white">
                                    Aspi
                                    <span className="text-primary transition-all duration-300 ease-in-out group-hover:drop-shadow-[0_0_10px_var(--color-primary)]">
                                        Kot
                                    </span>
                                </h1>
                            </div>
                            <p className="mt-1 text-sm transition-all duration-300 ease-in-out text-secondary group-hover:underline underline-offset-6">
                                Kirim Aspirasimu Secara Anonim
                            </p>
                        </div>
                    </div>
                }
            >
                <form className="space-y-4">
                    <div>
                        <label className="block mb-1 text-sm font-semibold text-secondary">
                            Nama (Opsional) :
                        </label>
                        <input
                            type="text"
                            className="w-full bg-white border border-zinc-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary  focus:border-primary hover:border-primary hover:shadow-[0_0_5px_var(--color-primary)] shadow-inner"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-semibold text-secondary">
                            Nomor Telp (Opsional) :
                        </label>
                        <input
                            type="tel"
                            className="w-full bg-white border border-zinc-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary  focus:border-primary hover:border-primary hover:shadow-[0_0_5px_var(--color-primary)] shadow-inner"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-semibold text-secondary">
                            Isi Aspirasimu :
                        </label>
                        <textarea
                            rows={6}
                            className="w-full bg-white border border-zinc-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary  focus:border-primary hover:border-primary hover:shadow-[0_0_5px_var(--color-primary)] shadow-inner resize-none"
                        />
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full bg-primary transition-all duration-300 ease-in-out hover:bg-primary hover:text-gray-600 hover:shadow-[0_0_5px_var(--color-primary)] text-black font-bold py-3 rounded-full text-lg"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </Modal>
        </nav>
    );
}
