// file: components/SearchBar.tsx
"use client"; // Wajib ditambahkan jika menggunakan interaksi (onChange)

interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export default function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
    return (
        <div className="flex flex-col gap-4 mt-10 md:flex-row md:items-center">
            {/* Input Search */}
            <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <svg
                        className="w-5 h-5 text-yellow-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>
                <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full py-3 pl-12 pr-4 text-sm text-yellow-400 bg-transparent border border-yellow-400 rounded-full focus:outline-none focus:ring-1 focus:ring-yellow-400 placeholder-yellow-400/50"
                    placeholder="Cari program kerja berdasarkan judul..."
                />
            </div>

            {/* Tombol Filter */}
            <button className="px-10 py-3 text-sm font-semibold text-yellow-400 transition-colors bg-transparent border border-yellow-400 rounded-full hover:bg-yellow-400/10 md:w-auto w-full">
                Filter
            </button>
        </div>
    );
}
