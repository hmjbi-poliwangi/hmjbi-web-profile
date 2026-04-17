import Link from "next/link";
import { FaTiktok, FaInstagram } from "react-icons/fa"; // Pastikan sudah install react-icons

export default function Footer() {
  return (
      <footer className="bg-[#0a0a0a] text-white pt-16 pb-8 border-t border-zinc-800 px-4 md:px-10 lg:px-20 2xl:px-40">
          <div className="container-main mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24">
                  {/* Kolom 1: Profil Organisasi */}
                  <div className="space-y-6">
                      <h2 className="text-4xl font-bold text-primary">HMJBI</h2>
                      <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat.
                      </p>

                      {/* Sosmed Icons */}
                      <div className="flex gap-4 pt-2">
                          <a
                              href="https://www.tiktok.com/@hmjbi_poliwangi"
                              className="p-3 border border-zinc-700 rounded-xl transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-[0_0_10px_rgba(255,255,0,0.2)]"
                          >
                              <FaTiktok size={24} />
                          </a>
                          <a
                              href="https://www.instagram.com/tipoliwangi/"
                              className="p-3 border border-zinc-700 rounded-xl transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-[0_0_10px_rgba(255,255,0,0.2)]"
                          >
                              <FaInstagram size={24} />
                          </a>
                      </div>
                  </div>

                  {/* Kolom Kosong (Spacer untuk Laptop) */}
                  <div className="hidden lg:block"></div>

                  {/* Kolom 3: Discover Navigasi */}
                  <div className="space-y-6 text-center">
                      <div className="inline-block">
                          <h3 className="text-2xl font-semibold mb-1">Discover</h3>
                          <div className="h-0.5 w-full bg-zinc-700"></div>
                      </div>

                      <ul className="space-y-4">
                          <li>
                              <Link
                                  href="/about"
                                  className="text-gray-400 hover:text-primary transition-colors duration-300 underline underline-offset-8 decoration-zinc-700 hover:decoration-primary"
                              >
                                  Tentang HMJBI
                              </Link>
                          </li>
                          <li>
                              <Link
                                  href="/divisi"
                                  className="text-gray-400 hover:text-primary transition-colors duration-300 underline underline-offset-8 decoration-zinc-700 hover:decoration-primary"
                              >
                                  Divisi HMJBI
                              </Link>
                          </li>
                          <li>
                              <Link
                                  href="/proker"
                                  className="text-gray-400 hover:text-primary transition-colors duration-300 underline underline-offset-8 decoration-zinc-700 hover:decoration-primary"
                              >
                                  Proker HMJBI
                              </Link>
                          </li>
                          <li>
                              <Link
                                  href="/contact"
                                  className="text-gray-400 hover:text-primary transition-colors duration-300 underline underline-offset-8 decoration-zinc-700 hover:decoration-primary"
                              >
                                  Contact Us
                              </Link>
                          </li>
                      </ul>
                  </div>
              </div>

              {/* Copyright Section (Bawah) */}
              <div className="mt-16 pt-8 border-t border-zinc-900 text-center">
                  <p className="text-xs text-gray-500">© 2026 HMJBI. All rights reserved.</p>
              </div>
          </div>
      </footer>
  );
}
