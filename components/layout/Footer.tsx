export default function Footer() {
    return (
        <footer className="bg-(--color-secondary) pb-8 mt-4">
            <div className="text-sm text-center container-main text-text-white">
                © {new Date().getFullYear()} HMJBI. All rights reserved.
            </div>
        </footer>
    );
}
