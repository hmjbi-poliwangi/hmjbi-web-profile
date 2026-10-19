import "./globals.css";
import { ReactNode } from "react";
import SiteChrome from "@/components/layout/SiteChrome";

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
                <SiteChrome>{children}</SiteChrome>
            </body>
        </html>
    );
}
