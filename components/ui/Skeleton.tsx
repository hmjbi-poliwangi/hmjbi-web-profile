export function Skeleton({ className = "" }: { className?: string }) {
    return <div aria-hidden className={`skeleton ${className}`} />;
}

export function SkeletonText({ className = "" }: { className?: string }) {
    return <Skeleton className={`h-3.5 rounded-md w-full ${className}`} />;
}

export function SkeletonTitle({ className = "" }: { className?: string }) {
    return <Skeleton className={`h-8 rounded-lg w-full ${className}`} />;
}
