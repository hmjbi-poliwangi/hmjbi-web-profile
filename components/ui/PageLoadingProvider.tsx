"use client";

import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import PageLoadingIndicator from "./PageLoadingIndicator";
import { PageLoadingContext } from "./PageLoadingContext";

const MIN_VISIBLE_MS = 600;
const FADE_OUT_MS = 300;
const MAX_VISIBLE_MS = 4000;

function toPath(href: string): string {
    return href.split("?")[0].split("#")[0];
}

export default function PageLoadingProvider({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const startRef = useRef(0);
    const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

    const clearTimers = useCallback(() => {
        timersRef.current.forEach(clearTimeout);
        timersRef.current = [];
    }, []);

    const begin = useCallback(() => {
        clearTimers();
        startRef.current = Date.now();
        setIsLoading(true);
        setVisible(true);
    }, [clearTimers]);

    const finish = useCallback(() => {
        const elapsed = Date.now() - startRef.current;
        const delay = Math.max(0, MIN_VISIBLE_MS - elapsed);
        const hideTimer = setTimeout(() => {
            setVisible(false);
            timersRef.current.push(setTimeout(() => setIsLoading(false), FADE_OUT_MS));
        }, delay);
        timersRef.current.push(hideTimer);
    }, []);

    // Detect navigation start: internal <a> clicks (covers Link + plain anchors)
    // and browser back/forward (popstate).
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            if (e.button !== 0) return;
            if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

            const target = e.target as Element | null;
            const anchor = target?.closest?.("a[href]");
            if (!anchor) return;
            const href = anchor.getAttribute("href");
            if (!href || href.startsWith("#")) return;
            if (anchor.hasAttribute("download")) return;
            const tagTarget = (anchor.getAttribute("target") || "_self").trim();
            if (tagTarget !== "_self") return;
            if (/^(tel:|mailto:|javascript:)/i.test(href)) return;

            const isExternal =
                /^https?:\/\//i.test(href) && !href.startsWith(window.location.origin);
            if (isExternal) return;

            const path = isExternal
                ? ""
                : toPath(
                      href.startsWith(window.location.origin)
                          ? href.slice(window.location.origin.length)
                          : href
                  );

            if (path === toPath(pathname)) return;

            begin();
        };

        const onPopState = () => begin();

        document.addEventListener("click", onClick);
        window.addEventListener("popstate", onPopState);
        return () => {
            document.removeEventListener("click", onClick);
            window.removeEventListener("popstate", onPopState);
        };
    }, [begin, pathname]);

    // Route content committed -> hide the skeleton (with min display time + fade out).
    useEffect(() => {
        if (!isLoading) return;
        finish();
        const safety = setTimeout(finish, MAX_VISIBLE_MS);
        timersRef.current.push(safety);
        return () => clearTimeout(safety);
    }, [pathname, isLoading, finish]);

    // Unmount cleanup
    useEffect(() => () => clearTimers(), [clearTimers]);

    // Show the loading spinner on the very first page load too, so the
    // entrance animations always play after the global loading finishes.
    useEffect(() => {
        const t = setTimeout(begin, 0);
        return () => clearTimeout(t);
    }, [begin]);

    return (
        <PageLoadingContext.Provider value={{ isLoading }}>
            {children}
            {isLoading && <PageLoadingIndicator visible={visible} />}
        </PageLoadingContext.Provider>
    );
}
