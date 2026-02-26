"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo-hmjbi.png";
import Modal from "../ui/Modal";

export default function Navbar() {
    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <nav className="bg-secondary py-4">
            <div className="flex items-center justify-between container-main">
                <Link href="/" className="w-10 bg-white p-1 rounded-sm">
                    <Image src={Logo} alt="Picture of the author" />
                </Link>
                <ul className="flex gap-4">
                    <li>
                        <Link
                            href="/"
                            className="border font-medium border-primary px-[10px] py-[8px] rounded-[8px] transition-all duration-300 ease-in-out hover:bg-primary hover:p-2.5 hover:text-black hover:shadow-[0_0_10px_var(--color-primary)]"
                        >
                            Beranda
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="border font-medium border-primary px-[10px] py-[8px] rounded-[8px] transition-all duration-300 ease-in-out hover:bg-primary hover:p-2.5 hover:text-black hover:shadow-[0_0_10px_var(--color-primary)]"
                        >
                            Divisi
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/activities"
                            className="border font-medium border-primary px-[10px] py-[8px] rounded-[8px] transition-all duration-300 ease-in-out hover:bg-primary hover:p-2.5 hover:text-black hover:shadow-[0_0_10px_var(--color-primary)]"
                        >
                            Kegiatan
                        </Link>
                    </li>
                </ul>
                <button
                    className="size-5 text-nowrap w-auto font-bold"
                    onClick={() => setModalOpen(true)}
                >
                    Punya Aspirasi ?
                </button>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                title={
                    <div className="header-wrap flex flex-col items-center">
                        <div className="group">
                            <div className="bg-black pl-12 pr-12 pt-1.5 pb-1.5 rounded-[60px] cursor-default transition-all duration-300 ease-in-out hover:shadow-[0_0_5px_var(--color-secondary)]">
                                <h1 className="text-4xl font-bold text-white">
                                    Aspi
                                    <span className="text-primary transition-all duration-300 ease-in-out group-hover:drop-shadow-[0_0_10px_var(--color-primary)]">
                                        Kot
                                    </span>
                                </h1>
                            </div>
                            <p className="text-secondary text-sm mt-1 transition-all duration-300 ease-in-out group-hover:underline underline-offset-6">
                                Kirim Aspirasimu Secara Anonim
                            </p>
                        </div>
                    </div>
                }
            >
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold mb-1 text-secondary">
                            Nama (Opsional) :
                        </label>
                        <input
                            type="text"
                            className="w-full bg-white border border-zinc-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary  focus:border-primary hover:border-primary hover:shadow-[0_0_5px_var(--color-primary)] shadow-inner"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1 text-secondary">
                            Nomor Telp (Opsional) :
                        </label>
                        <input
                            type="tel"
                            className="w-full bg-white border border-zinc-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary  focus:border-primary hover:border-primary hover:shadow-[0_0_5px_var(--color-primary)] shadow-inner"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1 text-secondary">
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
