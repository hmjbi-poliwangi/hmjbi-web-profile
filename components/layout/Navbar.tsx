"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo-hmjbi.png";
import Modal from "../Modal";

export default function Navbar() {
    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <nav className="bg-secondary py-4">
            <div className="flex items-center justify-between container-main">
                <Link href="/" className="w-10 bg-white p-1 rounded-sm">
                    <Image src={Logo} alt="Picture of the author" />
                </Link>
                <ul className="flex gap-6">
                    <li>
                        <Link
                            href="/"
                            className="border font-medium border-primary pl-2.5 pr-2.5 pb-2 pt-2 rounded-[8px] hover:bg-primary hover:text-black"
                        >
                            Beranda
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="border font-medium border-primary pl-2.5 pr-2.5 pb-2 pt-2 rounded-[8px]  hover:bg-primary hover:text-black"
                        >
                            Divisi
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/activities"
                            className="border font-medium border-primary pl-2.5 pr-2.5 pb-2 pt-2 rounded-[8px]  hover:bg-primary hover:text-black transition-all duration-300 ease-in-out hover:pt-[9px]"
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
                        <div className="bg-black pl-12 pr-12 pt-1.5 pb-1.5 rounded-[60px]">
                            <h1 className="text-4xl font-bold">
                                Aspi<span className="text-primary">Kot</span>
                            </h1>
                        </div>
                        <p className="text-secondary text-sm mt-1">
                            Kirim Aspirasimu Secara Anonim
                        </p>
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
                            className="w-full bg-white border border-zinc-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1 text-secondary">
                            Nomor Telp (Opsional) :
                        </label>
                        <input
                            type="tel"
                            className="w-full bg-white border border-zinc-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1 text-secondary">
                            Isi Aspirasimu :
                        </label>
                        <textarea
                            rows={6}
                            className="w-full bg-white border border-zinc-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary shadow-inner resize-none"
                        />
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary text-black font-bold py-3 rounded-full shadow-md transition-colors text-lg"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </Modal>
        </nav>
    );
}
