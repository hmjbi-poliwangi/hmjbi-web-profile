"use client";

import { useEffect, useState } from "react";
import { DataCollection, DataCollectionMap } from "@/types/data";

interface RemoteData<T> {
    data: T;
    loading: boolean;
    error: string | null;
}

export function useData<K extends DataCollection>(
    collection: K,
    initialData: DataCollectionMap[K]
): RemoteData<DataCollectionMap[K]> {
    const [data, setData] = useState(initialData);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        fetch(`/api/data/${collection}`, {
            cache: "no-store",
            signal: controller.signal,
        })
            .then(async (response) => {
                const body: unknown = await response.json();
                if (!response.ok) {
                    const message =
                        typeof body === "object" &&
                        body !== null &&
                        "message" in body &&
                        typeof body.message === "string"
                            ? body.message
                            : "Data tidak dapat dimuat";
                    throw new Error(message);
                }
                return body as DataCollectionMap[K];
            })
            .then((freshData) => {
                setData(freshData);
                setError(null);
            })
            .catch((requestError: unknown) => {
                if (requestError instanceof DOMException && requestError.name === "AbortError") {
                    return;
                }
                const message =
                    requestError instanceof Error
                        ? requestError.message
                        : "Data tidak dapat dimuat";
                console.error(`Gagal memuat data "${collection}":`, requestError);
                setError(message);
            })
            .finally(() => setLoading(false));

        return () => controller.abort();
    }, [collection]);

    return { data, loading, error };
}
