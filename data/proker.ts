export interface ProkerPhase {
    name: string;
    startMonth: number;
    endMonth: number;
}

export interface DailySchedule {
    day: string;
    title: string;
    time: string;
    description: string;
}

export interface Registration {
    link?: string;
    quota?: number;
    registered?: number;
    deadline?: string;
    openDate?: string;
    fee?: string;
}

export interface Contact {
    name: string;
    phone: string;
    instagram?: string;
}

export interface ProkerItem {
    id: number;
    name: string;
    description: string;
    tempat: string;
    tanggal: string;
    image?: string;
    status?: string;
    phases: ProkerPhase[];
    schedule?: DailySchedule[];
    registration?: Registration;
    contacts?: Contact[];
}

export interface IndikatorItem {
    no: number;
    indikator: string;
    penjelasan: string;
}

export interface ProkerIndikator {
    prokerName: string;
    items: IndikatorItem[];
}

export const dataProker: ProkerItem[] = [
    {
        id: 1,
        name: "REGENERASI",
        description:
            "Kegiatan pemilihan ketua dan wakil ketua himpunan serta pelatihan dasar organisasi untuk anggota baru HMJBI",
        tempat: "Gedung Serbaguna Kampus Poliwangi",
        tanggal: "17-19 Februari 2026",
        image: "https://picsum.photos/seed/regenerasi/400/300",
        phases: [
            { name: "Persiapan", startMonth: 1, endMonth: 2 },
            { name: "Pelaksanaan", startMonth: 2, endMonth: 2 },
            { name: "Pelaporan", startMonth: 3, endMonth: 3 },
        ],
        schedule: [
            {
                day: "Pagi",
                title: "Pembukaan & Tech Talk",
                time: "08:00 - 10:00",
                description: "Registrasi ulang, pembukaan acara, dan sesi pengenalan organisasi",
            },
            {
                day: "Siang",
                title: "Pemilihan & Debates",
                time: "10:00 - 14:00",
                description:
                    "Presentasi visi-misi kandidat, debat terbuka, dan pemilihan ketua & wakil ketua",
            },
            {
                day: "Sore",
                title: "Pelantikan & Orientasi",
                time: "14:00 - 16:00",
                description: "Pelantikan pengurus baru dan orientasi kerja organisasi",
            },
        ],
        registration: {
            link: "https://forms.google.com/regenerasi-hmjbi",
            quota: 150,
            registered: 87,
            deadline: "14 Februari 2026",
            openDate: "1 Februari 2026",
            fee: "Gratis",
        },
        contacts: [
            {
                name: "Budi Santoso (Ketua Panitia)",
                phone: "081234567890",
                instagram: "@budi_santoso",
            },
            {
                name: "Lestari Wulan (Sekretaris)",
                phone: "081298765432",
                instagram: "@lestari_wulan",
            },
        ],
    },
    {
        id: 2,
        name: "SOW GOODNESS",
        description:
            "Kegiatan sosial berbagi kebaikan kepada masyarakat sekitar sebagai bentuk pengabdian HMJBI",
        tempat: "Desa Kemiren, Kec. Glagah, Banyuwangi",
        tanggal: "12-14 April 2026",
        image: "https://picsum.photos/seed/sosial/400/300",
        status: "IN PROGRESS",
        phases: [
            { name: "Persiapan", startMonth: 2, endMonth: 3 },
            { name: "Pelaksanaan", startMonth: 4, endMonth: 4 },
            { name: "Pelaporan", startMonth: 5, endMonth: 5 },
        ],
        schedule: [
            {
                day: "Pagi",
                title: "Persiapan Logistik",
                time: "07:00 - 09:00",
                description: "Pengemasan bantuan, koordinasi relawan, dan perjalanan ke lokasi",
            },
            {
                day: "Siang",
                title: "Bakti Sosial Utama",
                time: "09:00 - 14:00",
                description: "Pembagian sembako, edukasi kesehatan, dan renovasi fasilitas desa",
            },
            {
                day: "Sore",
                title: "Penutupan & Dokumentasi",
                time: "14:00 - 16:00",
                description:
                    "Serah terima simbolis, foto bersama masyarakat, dan perjalanan pulang",
            },
        ],
        registration: {
            link: "https://forms.google.com/sowgoodness-hmjbi",
            quota: 50,
            registered: 32,
            deadline: "8 April 2026",
            openDate: "25 Maret 2026",
            fee: "Rp 25.000 (konsumsi)",
        },
        contacts: [
            {
                name: "Siti Nurhaliza (Ketua Panitia)",
                phone: "081298765432",
                instagram: "@siti_nurhaliza",
            },
            { name: "Ahmad Fauzi (Bendahara)", phone: "085612345678", instagram: "@ahmad_fauzi" },
        ],
    },
    {
        id: 3,
        name: "BRONIS",
        description:
            "Program pembinaan dan pengembangan bakat mahasiswa di bidang bisnis dan informatika",
        tempat: "Aula Jurusan Bisnis dan Informatika",
        tanggal: "20-22 Mei 2026",
        image: "https://picsum.photos/seed/bronis/400/300",
        phases: [
            { name: "Persiapan", startMonth: 3, endMonth: 4 },
            { name: "Pelaksanaan", startMonth: 5, endMonth: 5 },
            { name: "Pelaporan", startMonth: 6, endMonth: 6 },
        ],
        schedule: [
            {
                day: "Pagi",
                title: "Pembukaan & Networking",
                time: "08:00 - 10:00",
                description: "Registrasi, ice breaking, dan pengenalan materi wirausaha",
            },
            {
                day: "Siang",
                title: "Workshop & Coaching",
                time: "10:00 - 14:00",
                description:
                    "Pelatihan bisnis plan, digital marketing, dan sesi coaching dari praktisi",
            },
            {
                day: "Sore",
                title: "Pitching & Penutupan",
                time: "14:00 - 16:00",
                description: "Presentasi bisnis plan peserta, penjurian, dan penutupan acara",
            },
        ],
        registration: {
            link: "https://forms.google.com/bronis-hmjbi",
            quota: 80,
            registered: 45,
            deadline: "17 Mei 2026",
            openDate: "5 Mei 2026",
            fee: "Rp 30.000 (konsumsi + materi)",
        },
        contacts: [
            {
                name: "Rina Hartati (Ketua Panitia)",
                phone: "085612345678",
                instagram: "@rina_hartati",
            },
            {
                name: "Yoga Pratama (Wakil Ketua)",
                phone: "087812345678",
                instagram: "@yoga_pratama",
            },
        ],
    },
    {
        id: 4,
        name: "DIGITAL EXPLORER",
        description:
            "Eksplorasi dan pengenalan teknologi digital terbaru untuk mahasiswa jurusan bisnis dan informatika",
        tempat: "Laboratorium Komputer Terpadu Poliwangi",
        tanggal: "15-17 Juni 2026",
        image: "https://picsum.photos/seed/digital/400/300",
        phases: [
            { name: "Persiapan", startMonth: 4, endMonth: 5 },
            { name: "Pelaksanaan", startMonth: 6, endMonth: 6 },
            { name: "Pelaporan", startMonth: 7, endMonth: 7 },
        ],
        schedule: [
            {
                day: "Pagi",
                title: "Opening & IoT Basics",
                time: "08:00 - 10:00",
                description: "Pembukaan, pengenalan konsep IoT, dan demo perangkat",
            },
            {
                day: "Siang",
                title: "Hands-on Workshop",
                time: "10:00 - 14:00",
                description: "Praktik langsung sensor, mikrokontroler, dan prototyping proyek IoT",
            },
            {
                day: "Sore",
                title: "Showcase & Closing",
                time: "14:00 - 16:00",
                description: "Presentasi proyek peserta, penilaian, dan penutupan",
            },
        ],
        registration: {
            link: "https://forms.google.com/digitalexplorer-hmjbi",
            quota: 60,
            registered: 28,
            deadline: "12 Juni 2026",
            openDate: "1 Juni 2026",
            fee: "Rp 20.000 (konsumsi)",
        },
        contacts: [
            {
                name: "Fajar Nugroho (Ketua Panitia)",
                phone: "087812345678",
                instagram: "@fajar_nugroho",
            },
            {
                name: "Dian Permata (Sekretaris)",
                phone: "083812345678",
                instagram: "@dian_permata",
            },
        ],
    },
    {
        id: 5,
        name: "AI STARTER CLASS",
        description:
            "Kelas pengenalan kecerdasan buatan (AI) untuk mahasiswa sebagai bekal menghadapi era industri 4.0",
        tempat: "Ruang Seminar Lt. 3 Gedung Pusat Poliwangi",
        tanggal: "10-12 Juli 2026",
        image: "https://picsum.photos/seed/aistarter/400/300",
        status: "CANCELLED",
        phases: [
            { name: "Persiapan", startMonth: 5, endMonth: 6 },
            { name: "Pelaksanaan", startMonth: 7, endMonth: 7 },
            { name: "Pelaporan", startMonth: 8, endMonth: 8 },
        ],
        schedule: [
            {
                day: "Pagi",
                title: "AI Fundamentals",
                time: "08:00 - 10:00",
                description: "Pengenalan konsep AI, machine learning, dan demo tools populer",
            },
            {
                day: "Siang",
                title: "Praktik Prompt Engineering",
                time: "10:00 - 14:00",
                description: "Workshop ChatGPT, Gemini, dan cara membuat prompt yang efektif",
            },
            {
                day: "Sore",
                title: "Project Showcase",
                time: "14:00 - 16:00",
                description: "Presentasi proyek AI peserta dan penutupan",
            },
        ],
        registration: {
            link: "https://forms.google.com/aistarter-hmjbi",
            quota: 100,
            registered: 63,
            deadline: "7 Juli 2026",
            openDate: "25 Juni 2026",
            fee: "Rp 15.000 (konsumsi)",
        },
        contacts: [
            {
                name: "Maya Anggraeni (Ketua Panitia)",
                phone: "083812345678",
                instagram: "@maya_anggraeni",
            },
            { name: "Rizky Aditya (Bendahara)", phone: "082112345678", instagram: "@rizky_aditya" },
        ],
    },
    {
        id: 6,
        name: "TECH BEE",
        description:
            "Kompetisi teknologi dan inovasi antar mahasiswa untuk mendorong kreativitas di bidang teknologi",
        tempat: "Gedung Olahraga (GOR) Poliwangi",
        tanggal: "5-7 September 2026",
        image: "https://picsum.photos/seed/techbee/400/300",
        phases: [
            { name: "Persiapan", startMonth: 6, endMonth: 7 },
            { name: "Pelaksanaan", startMonth: 9, endMonth: 9 },
            { name: "Pelaporan", startMonth: 10, endMonth: 10 },
        ],
        schedule: [
            {
                day: "Pagi",
                title: "Technical Meeting & Opening",
                time: "08:00 - 10:00",
                description: "Registrasi, technical meeting, dan pembukaan kompetisi",
            },
            {
                day: "Siang",
                title: "Kompetisi Utama",
                time: "10:00 - 15:00",
                description: "Tahap eliminasi, semifinal, dan final kompetisi teknologi",
            },
            {
                day: "Sore",
                title: "Awarding & Closing",
                time: "15:00 - 17:00",
                description: "Pengumuman juara, penyerahan hadiah, dan penutupan",
            },
        ],
        registration: {
            link: "https://forms.google.com/techbee-hmjbi",
            quota: 200,
            registered: 112,
            deadline: "1 September 2026",
            openDate: "20 Agustus 2026",
            fee: "Rp 50.000 per tim",
        },
        contacts: [
            {
                name: "Dimas Prayoga (Ketua Panitia)",
                phone: "082112345678",
                instagram: "@dimas_prayoga",
            },
            { name: "Nita Sari (Sekretaris)", phone: "089612345678", instagram: "@nita_sari" },
        ],
    },
    {
        id: 7,
        name: "PKJ",
        description:
            "Peningkatan kapasitas dan kompetensi mahasiswa melalui berbagai pelatihan dan workshop",
        tempat: "Aula HMJBI Lt. 2 Kampus Poliwangi",
        tanggal: "8-10 Oktober 2026",
        image: "https://picsum.photos/seed/pkj/400/300",
        phases: [
            { name: "Persiapan", startMonth: 7, endMonth: 8 },
            { name: "Pelaksanaan", startMonth: 10, endMonth: 10 },
            { name: "Pelaporan", startMonth: 11, endMonth: 11 },
        ],
        schedule: [
            {
                day: "Pagi",
                title: "Opening & Soft Skills",
                time: "08:00 - 10:00",
                description: "Pembukaan, sesi public speaking, dan manajemen waktu",
            },
            {
                day: "Siang",
                title: "Hard Skills Workshop",
                time: "10:00 - 14:00",
                description: "Pelatihan teknis sesuai bidang keahlian dan studi kasus",
            },
            {
                day: "Sore",
                title: "Test & Certification",
                time: "14:00 - 16:00",
                description: "Ujian kompetensi, penerbitan sertifikat, dan penutupan",
            },
        ],
        registration: {
            link: "https://forms.google.com/pkj-hmjbi",
            quota: 120,
            registered: 54,
            deadline: "5 Oktober 2026",
            openDate: "22 September 2026",
            fee: "Rp 25.000 (konsumsi + sertifikat)",
        },
        contacts: [
            {
                name: "Putri Wulandari (Ketua Panitia)",
                phone: "085712345678",
                instagram: "@putri_wulandari",
            },
            { name: "Ari Susanto (Wakil Ketua)", phone: "081234567890", instagram: "@ari_susanto" },
        ],
    },
    {
        id: 8,
        name: "CLUB ROBOTIKA",
        description: "Wadah pengembangan minat dan bakat mahasiswa di bidang robotika dan otomasi",
        tempat: "Lab. Robotika dan IoT Kampus Poliwangi",
        tanggal: "20 Agustus - 10 September 2026",
        image: "https://picsum.photos/seed/robotik/400/300",
        phases: [
            { name: "Persiapan", startMonth: 5, endMonth: 7 },
            { name: "Pelaksanaan", startMonth: 8, endMonth: 9 },
            { name: "Pelaporan", startMonth: 9, endMonth: 10 },
        ],
        schedule: [
            {
                day: "20 Agu",
                title: "Pengenalan Dasar Robotika & Sistem Embedded",
                time: "13:00 - 16:00",
                description: "Pengenalan komponen robotika, mikrokontroler, dan sistem embedded",
            },
            {
                day: "27 Agu",
                title: "Pemrograman Mikrokontroler & Sensor Aktuator",
                time: "13:00 - 16:00",
                description: "Pemrograman Arduino/ESP32, sensor aktuator, dan motor control",
            },
            {
                day: "3 Sep",
                title: "Integrasi Sistem Robot (Bagian 1)",
                time: "13:00 - 16:00",
                description:
                    "Integrasi mekanik, elektronik, dan pemrograman menjadi satu sistem robot",
            },
            {
                day: "10 Sep",
                title: "Integrasi Sistem Robot (Bagian 2)",
                time: "13:00 - 16:00",
                description: "Uji coba, debugging, dan presentasi hasil proyek robotika",
            },
        ],
        registration: {
            link: "https://forms.google.com/robotika-hmjbi",
            quota: 40,
            registered: 22,
            deadline: "15 Agustus 2026",
            openDate: "1 Agustus 2026",
            fee: "Gratis",
        },
        contacts: [
            {
                name: "Reza Pratama (Ketua Club)",
                phone: "089612345678",
                instagram: "@reza_pratama",
            },
            { name: "Sinta Rahma (Wakil Ketua)", phone: "085612345678", instagram: "@sinta_rahma" },
        ],
    },
];

export const dataIndikator: ProkerIndikator[] = [
    {
        prokerName: "REGENERASI",
        items: [
            {
                no: 1,
                indikator: "SEBAB-AKIBAT KEGIATAN DARI SUATU PERMASALAHAN",
                penjelasan:
                    "Regenerasi dilakukan bertujuan untuk mencari penerus atau generasi yang bertujuan untuk melanjutkan kehidupan di organisasi HMJBI",
            },
            {
                no: 2,
                indikator: "KETERKAITAN KEGIATAN DENGAN BIDANG ORMAWA (UKM/HIMA/BEM/MPM)",
                penjelasan:
                    "Kegiatan ini merupakan tanggung jawab Himpunan Mahasiswa Jurusan Bisnis dan Informatika untuk mencari mahasiswa jurusan bisnis dan informatika sebagai penerus himpunan",
            },
            {
                no: 3,
                indikator: "MANFAAT KEGIATAN BAGI PROGRAM STUDI/JURUSAN",
                penjelasan:
                    "Memberikan acuan operasional organisasi mahasiswa yang relevan dengan program studi atau jurusan terkait",
            },
            {
                no: 4,
                indikator: "MANFAAT KEGIATAN BAGI POLIWANGI",
                penjelasan:
                    "Meningkatkan tata kelola organisasi mahasiswa di tingkat institusi, mencerminkan nilai-nilai Poliwangi",
            },
            {
                no: 5,
                indikator: "MANFAAT KEGIATAN BAGI MASYARAKAT",
                penjelasan:
                    "Tidak ada, karena kegiatan regenerasi hanya bisa diubah dan ditetapkan serta dilaksanakan oleh pengurus dan anggota HMJBI",
            },
            {
                no: 6,
                indikator: "RENCANA SOFT SKILLS YANG AKAN DIDAPATKAN OLEH ANGGOTA ORMAWA",
                penjelasan:
                    "Rencana untuk pengurus baru nantinya akan mendapatkan ilmu berupa ilmu kepemimpinan, public speaking, manajemen waktu, kerja sama tim, dan problem solving",
            },
            {
                no: 7,
                indikator: "CAKUPAN KETERLIBATAN NON-ANGGOTA ORMAWA (MAHASISWA POLIWANGI)",
                penjelasan:
                    "Untuk Mahasiswa Poliwangi tentunya dapat terlibat dalam kegiatan ini terutama dalam memilih ketua himpunan dan wakil ketua himpunan",
            },
            {
                no: 8,
                indikator:
                    "RENCANA KERJASAMA DENGAN INDUSTRI DALAM KEGIATAN (SPONSORSHIP/KOLABORASI)",
                penjelasan:
                    "Dengan adanya kegiatan ini tentunya akan menguntungkan baik untuk penyelenggara maupun sponsor",
            },
            {
                no: 9,
                indikator: "RENCANA PUBLIKASI HASIL KEGIATAN",
                penjelasan:
                    "Hasil dari kegiatan regenerasi nantinya akan dipublikasikan melalui media sosial berupa Instagram, TikTok, dan media sosial lainnya",
            },
            {
                no: 10,
                indikator: "GAMBARAN KEBERLANJUTAN KEGIATAN",
                penjelasan:
                    "Dengan adanya kegiatan regenerasi ini diharapkan mendapatkan regenerasi yang baik dan unggul untuk melanjutkan kepengurusan HMJBI",
            },
        ],
    },
    {
        prokerName: "SOW GOODNESS",
        items: [
            {
                no: 1,
                indikator: "SEBAB-AKIBAT KEGIATAN DARI SUATU PERMASALAHAN",
                penjelasan:
                    "Keterbatasan proses produksi mendorong penerapan alat teknologi tepat guna sebagai solusi untuk meningkatkan efisiensi, kualitas, dan kemandirian usaha",
            },
            {
                no: 2,
                indikator: "KETERKAITAN KEGIATAN DENGAN BIDANG ORMAWA (UKM/HIMA/BEM/MPM)",
                penjelasan: "Berkaitan dengan bidang departemen pengabdian masyarakat",
            },
            {
                no: 3,
                indikator: "MANFAAT KEGIATAN BAGI PROGRAM STUDI/JURUSAN",
                penjelasan: "Membangun citra positif bagi jurusan dan program studi",
            },
            {
                no: 4,
                indikator: "MANFAAT KEGIATAN BAGI POLIWANGI",
                penjelasan:
                    "Memperkenalkan Poliwangi dan memperkuat hubungan antara Poliwangi dengan masyarakat sekitar",
            },
            {
                no: 5,
                indikator: "MANFAAT KEGIATAN BAGI MASYARAKAT",
                penjelasan:
                    "Kegiatan ini menghasilkan pemanfaatan alat secara optimal oleh pelaku industri, meningkatkan kemandirian dalam proses produksi",
            },
            {
                no: 6,
                indikator: "RENCANA SOFT SKILLS YANG AKAN DIDAPATKAN OLEH ANGGOTA ORMAWA",
                penjelasan:
                    "Kemampuan komunikasi, bekerjasama dalam tim dan kemampuan problem solving terkait isu-isu lingkungan",
            },
            {
                no: 7,
                indikator: "CAKUPAN KETERLIBATAN NON-ANGGOTA ORMAWA (MAHASISWA POLIWANGI)",
                penjelasan:
                    "Melibatkan mahasiswa Poliwangi sebagai relawan dalam kegiatan ini dan memberikan edukasi",
            },
            {
                no: 8,
                indikator:
                    "RENCANA KERJASAMA DENGAN INDUSTRI DALAM KEGIATAN (SPONSORSHIP/KOLABORASI)",
                penjelasan: "Kerja sama dengan pihak eksternal",
            },
            {
                no: 9,
                indikator: "RENCANA PUBLIKASI HASIL KEGIATAN",
                penjelasan:
                    "Hasil dokumentasi akan dipublikasikan melalui akun Instagram tipoliwangi",
            },
            {
                no: 10,
                indikator: "GAMBARAN KEBERLANJUTAN KEGIATAN",
                penjelasan:
                    "Monitoring penggunaan alat, pendampingan teknis secara berkala, serta koordinasi lanjutan dengan mitra",
            },
        ],
    },
    {
        prokerName: "BRONIS",
        items: [
            {
                no: 1,
                indikator: "SEBAB-AKIBAT KEGIATAN DARI SUATU PERMASALAHAN",
                penjelasan:
                    "Kurangnya minat dan kesadaran akan pentingnya memulai bisnis, sebagai solusi untuk memasifkan minat dalam berbisnis",
            },
            {
                no: 2,
                indikator: "KETERKAITAN KEGIATAN DENGAN BIDANG ORMAWA (UKM/HIMA/BEM/MPM)",
                penjelasan: "Berkaitan dengan bidang departemen Kewirausahaan",
            },
            {
                no: 3,
                indikator: "MANFAAT KEGIATAN BAGI PROGRAM STUDI/JURUSAN",
                penjelasan: "Membangun branding yang baik bagi jurusan karena relevan",
            },
            {
                no: 4,
                indikator: "MANFAAT KEGIATAN BAGI POLIWANGI",
                penjelasan:
                    "Meningkatkan branding dan memperkuat nama Poliwangi dengan masyarakat sekitar",
            },
            {
                no: 5,
                indikator: "MANFAAT KEGIATAN BAGI MASYARAKAT",
                penjelasan:
                    "Tidak ada, karena lingkup program kerja yang kami ajukan merupakan skala mahasiswa",
            },
            {
                no: 6,
                indikator: "RENCANA SOFT SKILLS YANG AKAN DIDAPATKAN OLEH ANGGOTA ORMAWA",
                penjelasan:
                    "Meningkatkan kemampuan public speaking, strategi berbisnis, dan muncul minat tinggi dalam meningkatkan wirausaha",
            },
            {
                no: 7,
                indikator: "CAKUPAN KETERLIBATAN NON-ANGGOTA ORMAWA (MAHASISWA POLIWANGI)",
                penjelasan: "Melibatkan demisioner sebagai pemateri",
            },
            {
                no: 8,
                indikator:
                    "RENCANA KERJASAMA DENGAN INDUSTRI DALAM KEGIATAN (SPONSORSHIP/KOLABORASI)",
                penjelasan: "Tidak ada",
            },
            {
                no: 9,
                indikator: "RENCANA PUBLIKASI HASIL KEGIATAN",
                penjelasan:
                    "Hasil dokumentasi akan dipublikasikan melalui akun Instagram tipoliwangi",
            },
            {
                no: 10,
                indikator: "GAMBARAN KEBERLANJUTAN KEGIATAN",
                penjelasan:
                    "Bertambahnya jumlah sumber daya manusia khususnya peminatan dalam berwirausaha",
            },
        ],
    },
    {
        prokerName: "DIGITAL EXPLORER",
        items: [
            {
                no: 1,
                indikator: "SEBAB-AKIBAT KEGIATAN DARI SUATU PERMASALAHAN",
                penjelasan:
                    "Perkembangan teknologi terus bertambah pesat dan minimnya pengetahuan pada perkembangan teknologi di bidang IoT dikalangan pelajar",
            },
            {
                no: 2,
                indikator: "KETERKAITAN KEGIATAN DENGAN BIDANG ORMAWA (UKM/HIMA/BEM/MPM)",
                penjelasan: "Berkaitan dengan bidang departemen pengabdian masyarakat",
            },
            {
                no: 3,
                indikator: "MANFAAT KEGIATAN BAGI PROGRAM STUDI/JURUSAN",
                penjelasan: "Mempromosikan jurusan Bisnis dan Informatika",
            },
            {
                no: 4,
                indikator: "MANFAAT KEGIATAN BAGI POLIWANGI",
                penjelasan: "Memperkenalkan dan mempromosikan Poliwangi",
            },
            {
                no: 5,
                indikator: "MANFAAT KEGIATAN BAGI MASYARAKAT",
                penjelasan:
                    "Menambah pengetahuan tentang perkembangan teknologi khususnya di bidang IoT sehingga dapat membuka peluang untuk menciptakan kreativitas dan inovasi",
            },
            {
                no: 6,
                indikator: "RENCANA SOFT SKILLS YANG AKAN DIDAPATKAN OLEH ANGGOTA ORMAWA",
                penjelasan: "Mengasah public speaking",
            },
            {
                no: 7,
                indikator: "CAKUPAN KETERLIBATAN NON-ANGGOTA ORMAWA (MAHASISWA POLIWANGI)",
                penjelasan: "Melibatkan demisioner sebagai pemateri",
            },
            {
                no: 8,
                indikator:
                    "RENCANA KERJASAMA DENGAN INDUSTRI DALAM KEGIATAN (SPONSORSHIP/KOLABORASI)",
                penjelasan: "Tidak ada",
            },
            {
                no: 9,
                indikator: "RENCANA PUBLIKASI HASIL KEGIATAN",
                penjelasan: "Dokumentasi akan dipublikasikan melalui akun Instagram tipoliwangi",
            },
            {
                no: 10,
                indikator: "GAMBARAN KEBERLANJUTAN KEGIATAN",
                penjelasan: "Bertambahnya jumlah sumber daya manusia yang khususnya di bidang IoT",
            },
        ],
    },
    {
        prokerName: "AI STARTER CLASS",
        items: [
            {
                no: 1,
                indikator: "SEBAB-AKIBAT KEGIATAN DARI SUATU PERMASALAHAN",
                penjelasan:
                    "Minoritasnya pemanfaatan penggunaan AI untuk bahan konten, edukasi dan masih banyak lainnya guna untuk mengatasi dari permasalahan diatas",
            },
            {
                no: 2,
                indikator: "KETERKAITAN KEGIATAN DENGAN BIDANG ORMAWA (UKM/HIMA/BEM/MPM)",
                penjelasan:
                    "Berkaitan dengan bidang departemen pengabdian masyarakat dan riset dan teknologi",
            },
            {
                no: 3,
                indikator: "MANFAAT KEGIATAN BAGI PROGRAM STUDI/JURUSAN",
                penjelasan:
                    "Membangun citra jurusan dan program studi khususnya Bisnis Digital dalam perkembangan teknologi",
            },
            {
                no: 4,
                indikator: "MANFAAT KEGIATAN BAGI POLIWANGI",
                penjelasan:
                    "Meningkatkan minat peserta didik dalam memilih program studi Bisnis Digital",
            },
            {
                no: 5,
                indikator: "MANFAAT KEGIATAN BAGI MASYARAKAT",
                penjelasan:
                    "Tidak ada, karena target program kerja yang akan dilaksanakan terkhusus pada mahasiswa Poliwangi",
            },
            {
                no: 6,
                indikator: "RENCANA SOFT SKILLS YANG AKAN DIDAPATKAN OLEH ANGGOTA ORMAWA",
                penjelasan:
                    "Meningkatkan kemampuan digitalisasi mahasiswa dalam berkembangnya teknologi AI",
            },
            {
                no: 7,
                indikator: "CAKUPAN KETERLIBATAN NON-ANGGOTA ORMAWA (MAHASISWA POLIWANGI)",
                penjelasan: "Melibatkan demisioner sebagai pemateri dan staff ahli",
            },
            {
                no: 8,
                indikator:
                    "RENCANA KERJASAMA DENGAN INDUSTRI DALAM KEGIATAN (SPONSORSHIP/KOLABORASI)",
                penjelasan: "Berkolaborasi dengan departemen riset dan teknologi",
            },
            {
                no: 9,
                indikator: "RENCANA PUBLIKASI HASIL KEGIATAN",
                penjelasan: "Dokumentasi akan dipublikasikan melalui akun Instagram tipoliwangi",
            },
            {
                no: 10,
                indikator: "GAMBARAN KEBERLANJUTAN KEGIATAN",
                penjelasan:
                    "Berkembangnya sumber daya manusia dalam minat mengembangkan skill penggunaan AI",
            },
        ],
    },
    {
        prokerName: "TECH BEE",
        items: [
            {
                no: 1,
                indikator: "SEBAB-AKIBAT KEGIATAN DARI SUATU PERMASALAHAN",
                penjelasan:
                    "Kurangnya wadah untuk mengetahui potensi siswa siswi dalam teknologi yang menyebabkan minoritas pengetahuan terkait potensi siswa siswi",
            },
            {
                no: 2,
                indikator: "KETERKAITAN KEGIATAN DENGAN BIDANG ORMAWA (UKM/HIMA/BEM/MPM)",
                penjelasan:
                    "Memperkenalkan lomba eksternal di bidang Informatika, serta berkaitan dengan departemen Riset dan Teknologi",
            },
            {
                no: 3,
                indikator: "MANFAAT KEGIATAN BAGI PROGRAM STUDI/JURUSAN",
                penjelasan: "Memberikan wadah ide dan karya mahasiswa Bisnis dan Informatika",
            },
            {
                no: 4,
                indikator: "MANFAAT KEGIATAN BAGI POLIWANGI",
                penjelasan:
                    "Mempersiapkan calon peserta untuk menjadi perwakilan Poliwangi dan meningkatkan branding Poliwangi",
            },
            {
                no: 5,
                indikator: "MANFAAT KEGIATAN BAGI MASYARAKAT",
                penjelasan: "Diharapkan dapat menyelesaikan permasalahan di masyarakat",
            },
            {
                no: 6,
                indikator: "RENCANA SOFT SKILLS YANG AKAN DIDAPATKAN OLEH ANGGOTA ORMAWA",
                penjelasan:
                    "Mampu berpikir kritis untuk memecahkan masalah dan berbicara di dalam forum",
            },
            {
                no: 7,
                indikator: "CAKUPAN KETERLIBATAN NON-ANGGOTA ORMAWA (MAHASISWA POLIWANGI)",
                penjelasan: "Tidak ada",
            },
            {
                no: 8,
                indikator:
                    "RENCANA KERJASAMA DENGAN INDUSTRI DALAM KEGIATAN (SPONSORSHIP/KOLABORASI)",
                penjelasan:
                    "Kerjasama dengan pihak-pihak sekolah meliputi siswa SMA/SMK yang ada di Banyuwangi",
            },
            {
                no: 9,
                indikator: "RENCANA PUBLIKASI HASIL KEGIATAN",
                penjelasan: "Dokumentasi akan dipublikasikan melalui akun Instagram tipoliwangi",
            },
            {
                no: 10,
                indikator: "GAMBARAN KEBERLANJUTAN KEGIATAN",
                penjelasan:
                    "Berkembangnya sumber daya manusia dalam menguasai skill khususnya dalam program kerja Tech Bee",
            },
        ],
    },
    {
        prokerName: "PKJ",
        items: [
            {
                no: 1,
                indikator: "SEBAB-AKIBAT KEGIATAN DARI SUATU PERMASALAHAN",
                penjelasan:
                    "Kegiatan PKJ dilakukan bertujuan untuk meningkatkan pemahaman dan budaya Jurusan Bisnis dan Informatika agar kedepannya mahasiswa dapat terbiasa dengan lingkungan organisasi",
            },
            {
                no: 2,
                indikator: "KETERKAITAN KEGIATAN DENGAN BIDANG ORMAWA (UKM/HIMA/BEM/MPM)",
                penjelasan:
                    "Kegiatan ini merupakan tanggung jawab HMJBI untuk meningkatkan peluang mahasiswa jurusan bisnis dan informatika dalam pengembangan diri",
            },
            {
                no: 3,
                indikator: "MANFAAT KEGIATAN BAGI PROGRAM STUDI/JURUSAN",
                penjelasan:
                    "Meningkatkan studi literatur, pemahaman dan wawasan tentang bagaimana budaya mahasiswa khususnya Jurusan Bisnis dan Informatika",
            },
            {
                no: 4,
                indikator: "MANFAAT KEGIATAN BAGI POLIWANGI",
                penjelasan:
                    "Meningkatkan tata kelola organisasi mahasiswa di tingkat institusi, mencerminkan nilai-nilai Poliwangi",
            },
            {
                no: 5,
                indikator: "MANFAAT KEGIATAN BAGI MASYARAKAT",
                penjelasan:
                    "Tidak ada, karena kegiatan PKJ hanya dikhususkan untuk mahasiswa dan anggota HMJBI",
            },
            {
                no: 6,
                indikator: "RENCANA SOFT SKILLS YANG AKAN DIDAPATKAN OLEH ANGGOTA ORMAWA",
                penjelasan:
                    "Mahasiswa akan mendapatkan ilmu berupa kepemimpinan, public speaking, manajemen waktu, kerja sama tim, dan problem solving",
            },
            {
                no: 7,
                indikator: "CAKUPAN KETERLIBATAN NON-ANGGOTA ORMAWA (MAHASISWA POLIWANGI)",
                penjelasan:
                    "Mahasiswa Poliwangi dapat terlibat sebagai peserta dan dalam memilih pemateri dan staff ahli",
            },
            {
                no: 8,
                indikator:
                    "RENCANA KERJASAMA DENGAN INDUSTRI DALAM KEGIATAN (SPONSORSHIP/KOLABORASI)",
                penjelasan:
                    "Dengan adanya kegiatan ini akan menguntungkan baik untuk penyelenggara maupun sponsor",
            },
            {
                no: 9,
                indikator: "RENCANA PUBLIKASI HASIL KEGIATAN",
                penjelasan: "Dokumentasi akan dipublikasikan melalui akun Instagram tipoliwangi",
            },
            {
                no: 10,
                indikator: "GAMBARAN KEBERLANJUTAN KEGIATAN",
                penjelasan:
                    "Berkembangnya sumber daya manusia dalam melatih hard skill dan soft skill",
            },
        ],
    },
    {
        prokerName: "CLUB ROBOTIKA",
        items: [
            {
                no: 1,
                indikator: "SEBAB-AKIBAT KEGIATAN DARI SUATU PERMASALAHAN",
                penjelasan:
                    "UKM Robotika sudah dibekukan sehingga mahasiswa JBI yang berminat pada bidang robotika belum punya wadah yang terstruktur untuk menuangkan kreativitas",
            },
            {
                no: 2,
                indikator: "KETERKAITAN KEGIATAN DENGAN BIDANG ORMAWA (UKM/HIMA/BEM/MPM)",
                penjelasan:
                    "HMJBI memiliki bidang untuk memberdayakan mahasiswa JBI dalam hal pengembangan bakat minat di bidang teknologi yang relevan dengan kurikulum kampus",
            },
            {
                no: 3,
                indikator: "MANFAAT KEGIATAN BAGI PROGRAM STUDI/JURUSAN",
                penjelasan:
                    "Membantu dalam menyaring serta memetakan mahasiswa JBI yang punya potensi kompetensi di bidang robotika untuk diikutsertakan dalam lomba",
            },
            {
                no: 4,
                indikator: "MANFAAT KEGIATAN BAGI POLIWANGI",
                penjelasan:
                    "Mengaktifkan kembali ekosistem belajar robotika di kampus dengan manajemen yang lebih terstruktur dan fokus pada keberlanjutan program",
            },
            {
                no: 5,
                indikator: "MANFAAT KEGIATAN BAGI MASYARAKAT",
                penjelasan:
                    "Melatih SDM yang mampu membantu HMJBI membuat program kerja pengabdian masyarakat berbasis teknologi tepat guna",
            },
            {
                no: 6,
                indikator: "RENCANA SOFT SKILLS YANG AKAN DIDAPATKAN OLEH ANGGOTA ORMAWA",
                penjelasan:
                    "Kemampuan mengajarkan kembali serta kerja sama tim dalam memecahkan masalah teknis saat praktikum atau pembuatan alat",
            },
            {
                no: 7,
                indikator: "CAKUPAN KETERLIBATAN NON-ANGGOTA ORMAWA (MAHASISWA POLIWANGI)",
                penjelasan:
                    "Program kerja ini terbuka bagi mahasiswa JBI yang memiliki minat pada robotika",
            },
            {
                no: 8,
                indikator:
                    "RENCANA KERJASAMA DENGAN INDUSTRI DALAM KEGIATAN (SPONSORSHIP/KOLABORASI)",
                penjelasan:
                    "Mencari sponsor untuk komponen tambahan maupun kolaborasi mentoring untuk mengajarkan bidang robotika",
            },
            {
                no: 9,
                indikator: "RENCANA PUBLIKASI HASIL KEGIATAN",
                penjelasan:
                    "Dokumentasi proses belajar mengajar dan hasil karya robotika dipublikasikan untuk keberlanjutan program",
            },
            {
                no: 10,
                indikator: "GAMBARAN KEBERLANJUTAN KEGIATAN",
                penjelasan:
                    "Menggunakan sistem 'Train the Trainer', di mana anggota yang sudah diajari akan menjadi mentor bagi adik tingkat pada periode berikutnya",
            },
        ],
    },
];
