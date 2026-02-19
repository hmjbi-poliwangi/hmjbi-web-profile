import "./globals.css";
import { ReactNode } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export const metadata = {
    title: "HMJBI Web Profile",
    description: "Website Resmi Organisasi HMJBI",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="id">
            <body className="bg-[var(--color-background)] text-[var(--color-text-white)] font-sans">
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
