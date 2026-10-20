export function SkeletonBlock({ className }: { className: string }) {
    return <div aria-hidden="true" className={`animate-pulse rounded bg-zinc-800 ${className}`} />;
}

export function CardGridSkeleton({
    count = 4,
    gridClassName = "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",
}: {
    count?: number;
    gridClassName?: string;
}) {
    return (
        <div role="status" aria-label="Memuat konten">
            <div className={gridClassName} aria-hidden="true">
                {Array.from({ length: count }, (_, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4"
                    >
                        <SkeletonBlock className="mb-4 h-40 w-full" />
                        <SkeletonBlock className="mb-3 h-5 w-3/4" />
                        <SkeletonBlock className="mb-2 h-3 w-full" />
                        <SkeletonBlock className="h-3 w-2/3" />
                    </div>
                ))}
            </div>
            <span className="sr-only">Memuat konten...</span>
        </div>
    );
}
