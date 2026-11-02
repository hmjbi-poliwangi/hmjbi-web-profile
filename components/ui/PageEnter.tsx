"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { animate, stagger, utils } from "animejs";
import { usePathname } from "next/navigation";
import { usePageLoading } from "./PageLoadingContext";

function collectTargets(root: HTMLElement): HTMLElement[] {
    return Array.from(root.querySelectorAll<HTMLElement>("section, h1, h2, h3, p, img, li"));
}

function prefersReducedMotion(): boolean {
    return (
        typeof window !== "undefined" &&
        typeof window.matchMedia === "function" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
}

export default function PageEnter({ children }: { children: ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const { isLoading } = usePageLoading();
    const pathname = usePathname();
    const seenLoading = useRef(false);

    // Track that the global loading spinner has actually started at least once.
    useEffect(() => {
        if (isLoading) seenLoading.current = true;
    }, [isLoading]);

    // Set up the page entrance: keep every piece hidden, then animate each
    // section / text / image / card one by one only once the user sees them
    // (i.e. when it scrolls into the viewport).
    useEffect(() => {
        if (isLoading) return;
        if (!seenLoading.current) return;
        if (prefersReducedMotion()) return;

        const el = ref.current;
        if (!el) return;

        const targets = collectTargets(el);
        if (targets.length === 0) return;

        utils.set(targets, { opacity: 0, translateY: 28 });

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((entry) => entry.isIntersecting);
                if (visible.length === 0) return;

                const targetsInView = visible.map((entry) => entry.target as HTMLElement);
                targetsInView.forEach((t) => observer.unobserve(t));

                animate(targetsInView, {
                    opacity: [0, 1],
                    translateY: [28, 0],
                    duration: 600,
                    delay: stagger(70, { start: 60 }),
                    ease: "out(3)",
                });
            },
            { threshold: 0, rootMargin: "0px 0px -20px 0px" }
        );

        targets.forEach((t) => observer.observe(t));
        return () => observer.disconnect();
    }, [isLoading, pathname]);

    return (
        <div ref={ref} style={{ visibility: isLoading ? "hidden" : "visible" }}>
            {children}
        </div>
    );
}
