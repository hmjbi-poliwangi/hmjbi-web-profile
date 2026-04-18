import "./globals.css";
import { ReactNode } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export const metadata = {
    title: "HMJBI Web Profile",
    description: "Website Resmi Organisasi HMJBI",
    icons: {
        icon: "/logo-hmjbi.png",
        shortcut: "/logo-hmjbi.png",
        apple: "/logo-hmjbi.png",
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="id">
            <body className="bg-(--color-background) text-text-white font-sans">
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
