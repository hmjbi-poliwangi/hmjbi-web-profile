import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-[var(--color-secondary)] py-4">
            <div className="flex items-center justify-between container-main">
                <Link href="/" className="font-heading text-[var(--color-primary)] text-2xl">
                    HMJBI
                </Link>
                <ul className="flex gap-6">
                    <li>
                        <Link href="/" className="hover:text-[var(--color-accent)]">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-[var(--color-accent)]">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/activities" className="hover:text-[var(--color-accent)]">
                            Activities
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
