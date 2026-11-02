"use client";

import { createContext, useContext } from "react";

interface PageLoadingState {
    isLoading: boolean;
}

export const PageLoadingContext = createContext<PageLoadingState>({
    isLoading: false,
});

export function usePageLoading() {
    return useContext(PageLoadingContext);
}
