"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function SiteChrome({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const isAdminRoute = pathname.startsWith("/admin");

    return (
        <>
            {!isAdminRoute && <Navbar />}
            <main className={isAdminRoute ? "" : "pt-24"}>{children}</main>
            {!isAdminRoute && <Footer />}
        </>
    );
}
