export default function InstagramSection() {
    return (
        <div>
            <h2 className="text-3xl text-center md:text-4xl mb-10 font-bold text-white">
                Instagram <span className="text-[#FFD700]">HMJBI</span>
            </h2>
            <div className="w-full mx-auto overflow-hidden border shadow-lg rounded-2xl border-zinc-800">
                <div className="w-full">
                    <iframe
                        height="1000px"
                        src="https://rss.app/embed/v1/wall/mpgwzxgpfNqOvJlm"
                        className="w-full"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
