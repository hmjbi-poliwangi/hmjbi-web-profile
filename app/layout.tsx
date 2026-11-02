import "./globals.css";
import { ReactNode } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageLoadingProvider from "../components/ui/PageLoadingProvider";
import PageEnter from "../components/ui/PageEnter";

export const metadata = {
    title: "HMJBI Web Profile",
    description: "Website Resmi Organisasi HMJBI",
    icons: {
        icon: "/logo-hmjbi.png",
        shortcut: "/logo-hmjbi.png",
        apple: "/logo-hmjbi.png",
    },
};

export const viewport = {
    themeColor: "#141311",
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="id">
            <body className="bg-(--color-background) text-text-white font-sans">
                <PageLoadingProvider>
                    <Navbar />
                    <PageEnter>
                        <main className="pt-24">{children}</main>
                    </PageEnter>
                    <Footer />
                </PageLoadingProvider>
            </body>
        </html>
    );
}
