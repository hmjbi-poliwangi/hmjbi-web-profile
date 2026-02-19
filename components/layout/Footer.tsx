export default function Footer() {
    return (
        <footer className="bg-[var(--color-secondary)] py-8 mt-16">
            <div className="container-main text-center text-[var(--color-text-white)] text-sm">
                © {new Date().getFullYear()} HMJBI. All rights reserved.
            </div>
        </footer>
    );
}
