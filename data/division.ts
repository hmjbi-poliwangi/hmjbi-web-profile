import { Division } from "@/types/division";

export const dataDivisions: Division[] = [
    {
        name: "Ketua & Wakil",
        slug: "ketua-wakil",
        imageUrl: "/departement/ph.webp",
        description:
            "Memimpin dan mengkoordinasikan seluruh kegiatan organisasi, mengawasi jalannya program kerja, serta menjadi representasi HMJBI di internal dan eksternal.",
        members: [
            {
                name: "RM. Devan Mangkuwardhana",
                imageMember: "/people/ph/ph-kahim-devan-idcard.webp",
                role: "Ketua",
            },
            {
                name: "Doni Saputra",
                imageMember: "/people/ph/ph-wakahim-doni-idcard.webp",
                role: "Wakil Ketua",
            },
        ],
    },
    {
        name: "Sekretaris",
        slug: "sekretaris",
        imageUrl: "/departement/ph.webp",
        description:
            "Bertanggung jawab terhadap administrasi kegiatan HMJBI, pengelolaan dokumen, notulensi rapat, dan surat-menyurat organisasi.",
        coordinator: {
            name: "Yello Aurora Maulidie",
            image: "/people/ph/ph-sekretaris-umum-yello-idcard.webp",
        },
        members: [
            {
                name: "Yello Aurora Maulidie",
                imageMember: "/people/ph/ph-sekretaris-umum-yello-idcard.webp",
                role: "Koordinator",
            },
            {
                name: "Rasya Aprilia",
                imageMember: "/people/ph/ph-sekretaris2-rasya-idcard.webp",
                role: "Staff",
            },
            {
                name: "Try Amanda Helmi",
                imageMember: "/people/ph/ph-sekretaris3-helmi-idcard.webp",
                role: "Staff",
            },
        ],
    },
    {
        name: "Bendahara",
        slug: "bendahara",
        imageUrl: "/departement/ph.webp",
        description:
            "Bertanggung jawab terhadap pengelolaan keuangan HMJBI, penyusunan RAPB, dan pelaporan keuangan secara rutin.",
        coordinator: {
            name: "Muhammad Mufqi Fajar",
            image: "/people/ph/ph-bendahara-umum-fajar-idcard.webp",
        },
        members: [
            {
                name: "Muhammad Mufqi Fajar",
                imageMember: "/people/ph/ph-bendahara-umum-fajar-idcard.webp",
                role: "Koordinator",
            },
            {
                name: "Zhaara Fitrahayu",
                imageMember: "/people/ph/ph-bendahara2-zhaara-idcard.webp",
                role: "Staff",
            },
        ],
    },
    {
        name: "HUMAS",
        slug: "humas",
        imageUrl: "/departement/humas.webp",
        description:
            "Menjalin komunikasi dan relasi internal maupun eksternal, serta mewadahi aspirasi mahasiswa Jurusan Bisnis dan Informatika.",
        coordinator: {
            name: "Achmad Alfarizy Satriya Gautama",
            image: "/people/humas/humas-kor-fariz-idcard.webp",
        },
        biro: [
            {
                name: "Internal",
                tugas: "Menjalin hubungan kerja sama antar-departemen HMJBI dan dengan pihak jurusan, menjadi wadah aspirasi mahasiswa, serta bersinergi dengan Ketua Angkatan dalam menampung dan menyebarluaskan informasi jurusan.",
                members: [],
            },
            {
                name: "Eksternal",
                tugas: "Menangani kerjasama luar HMJBI pada forum nasional Himpunan Jurusan Bisnis dan Informatika, kerjasama dengan mitra sponsorship, dan kerjasama dengan organisasi mahasiswa internal kampus Poliwangi.",
                members: [],
            },
        ],
        members: [
            {
                name: "Achmad Alfarizy Satriya Gautama",
                imageMember: "/people/humas/humas-kor-fariz-idcard.webp",
                role: "Koordinator",
            },
            {
                name: "Yesika Dwi Pangestuti",
                imageMember: "/people/humas/humas-staf-yesika-idcard.webp",
                role: "Staff",
            },
            {
                name: "Steven Hengky Fernando",
                imageMember: "/people/humas/humas-staf-steven-idcard.webp",
                role: "Staff",
            },
            {
                name: "Triya",
                imageMember: "/people/humas/humas-staf-triya-idcard.webp",
                role: "Staff",
            },
            {
                name: "Mariza Adelia",
                imageMember: "/people/humas/humas-staf-mariza-idcard.webp",
                role: "Staff",
            },
            {
                name: "Andini Puspita Noviasari",
                imageMember: "/people/humas/humas-staff-andini-idcard.webp",
                role: "Staff",
            },
            {
                name: "Aisa Lestari",
                imageMember: "/people/humas/humas-staff-aisa-lestari.webp",
                role: "Staff",
            },
            {
                name: "Putri Rahayu",
                imageMember: "/people/humas/humas-staf-ayu-idcard.webp",
                role: "Staff",
            },
            {
                name: "Septian Asropik",
                imageMember: "/people/humas/humas-staf-septian-idcard.webp",
                role: "Staff",
            },
            {
                name: "Wildan Daffa Akmal Putra",
                imageMember: "/people/humas/humas-staf-wildan-idcard.webp",
                role: "Staff",
            },
        ],
    },
    {
        name: "RISTEK",
        slug: "ristek",
        imageUrl: "/departement/ristek.webp",
        description:
            "Menganalisa permasalahan dan potensi internal HMJBI, serta memberikan solusi teknologi melalui riset dan pengembangan perangkat lunak maupun keras.",
        coordinator: {
            name: "Muhamad Abdul Ghofur",
            image: "/people/ristek/ristek-co-ghofur-idcard.webp",
        },
        members: [
            {
                name: "Muhamad Abdul Ghofur",
                imageMember: "/people/ristek/ristek-co-ghofur-idcard.webp",
                role: "Koordinator",
            },
            {
                name: "Imam Hidayatulloh",
                imageMember: "/people/ristek/ristek-staf-imam-idcard.webp",
                role: "Staff",
            },
            {
                name: "Mohammad Badril Munir",
                imageMember: "/people/ristek/ristek-staf-badril-idcard.webp",
                role: "Staff",
            },
            {
                name: "Adrian Fachrizal",
                imageMember: "/people/ristek/ristek-staf-adrian-idcard.webp",
                role: "Staff",
            },
            {
                name: "Aldi Bayu Saputra",
                imageMember: "/people/ristek/ristek-staf-aldi-idcard.webp",
                role: "Staff",
            },
            {
                name: "Berliana Fitria Dewi",
                imageMember: "/people/ristek/ristek-staf-berliana-idcard.webp",
                role: "Staff",
            },
            {
                name: "Angger Ade Rian Dipa",
                imageMember: "/people/ristek/ristek-staf-angger-idcard.webp",
                role: "Staff",
            },
            {
                name: "Mohamad Sahla Saputra",
                imageMember: "/people/ristek/ristek-staf-sahla-idcard.webp",
                role: "Staff",
            },
            {
                name: "Kevin Maulana Atmaja",
                imageMember: "/people/ristek/ristek-staff-kevin-idcard.webp",
                role: "Staff",
            },
            {
                name: "Cristiano Ronaldo",
                imageMember: "/people/ristek/ristek-staff-cris-idcard.webp",
                role: "Staff",
            },
        ],
        biro: [
            {
                name: "Research",
                tugas: "Mendokumentasikan solusi digital yang dibuat Departemen RISTEK menjadi karya tulis ilmiah atau pelaporan yang mudah dipahami untuk pengembangan berikutnya.",
                members: [],
            },
            {
                name: "Software",
                tugas: "Menjadi agen perubahan dan memberi solusi sesuai ilmu teknologi pengembangan perangkat lunak bagi permasalahan internal HMJBI.",
                members: [],
            },
            {
                name: "Hardware",
                tugas: "Menjadi agen perubahan dan memberi solusi sesuai ilmu teknologi pengembangan perangkat keras bagi permasalahan internal HMJBI.",
                members: [],
            },
        ],
    },
    {
        name: "PENGMAS",
        slug: "pengmas",
        imageUrl: "/departement/pengmas.webp",
        description:
            "Mengorganisir dan melaksanakan kegiatan pengabdian kepada masyarakat di lingkungan dalam dan luar Poliwangi.",
        coordinator: {
            name: "Dino Febiyan",
            image: "/people/pengmas/pengmas-kor-dino-idcard.webp",
        },
        biro: [
            {
                name: "Sosial dan Kemanusiaan",
                tugas: "Mengelola dan menyalurkan bantuan sosial kepada mahasiswa jurusan bisnis dan informatika serta masyarakat sekitar kampus yang membutuhkan.",
                members: [],
            },
            {
                name: "Pemberdayaan Masyarakat",
                tugas: "Memberdayakan masyarakat luar kampus melalui sosialisasi, pelatihan, dan edukasi.",
                members: [],
            },
            {
                name: "Kebendaharaan",
                tugas: "Meninjau, mengelola, dan mengawasi seluruh aspek keuangan pada program kerja untuk disalurkan kepada biro program yang bersangkutan.",
                members: [],
            },
        ],
        members: [
            {
                name: "Dino Febiyan",
                imageMember: "/people/pengmas/pengmas-kor-dino-idcard.webp",
                role: "Koordinator",
            },
            {
                name: "Sri Wahyuni",
                imageMember: "/people/pengmas/pengmas-staf-yuni-idcard.webp",
                role: "Staff",
            },
            {
                name: "Dian Restu Khoirunnisa",
                imageMember: "/people/pengmas/pengmas-staf-dian-idcard.webp",
                role: "Staff",
            },
            {
                name: "Rosida Dewi",
                imageMember: "/people/pengmas/pengmas-staf-rosida-idcard.webp",
                role: "Staff",
            },
            {
                name: "Mohammad Tegas Dwinanda Kurniawan",
                imageMember: "/people/pengmas/pengmas-staf-tegas-idcard.webp",
                role: "Staff",
            },
            {
                name: "Tia Dwi Ayu Lestari",
                imageMember: "/people/pengmas/pengmas-staf-tia-idcard.webp",
                role: "Staff",
            },
            {
                name: "Al Barokah",
                imageMember: "/people/pengmas/pengmas-staf-ale-idcard.webp",
                role: "Staff",
            },
            {
                name: "Nova Erlina",
                imageMember: "/people/pengmas/pengmas-staf-nova-idcard.webp",
                role: "Staff",
            },
            {
                name: "Alvin Candra Winata",
                imageMember: "/people/pengmas/pengmas-staf-nata-idcard.webp",
                role: "Staff",
            },
            {
                name: "Krisna Andrian Wijaya",
                imageMember: "/people/pengmas/pengmas-staf-krisna-idcard.webp",
                role: "Staff",
            },
            {
                name: "Ignasius Alwin Jawa",
                imageMember: "/people/pengmas/pengmas-staf-alwin-idcard.webp",
                role: "Staff",
            },
        ],
    },
    {
        name: "PSDM",
        slug: "psdm",
        imageUrl: "/departement/psdm.webp",
        description:
            "Meningkatkan kualitas SDM mahasiswa melalui kaderisasi, kedisiplinan, serta informasi lomba dan pelatihan.",
        coordinator: {
            name: "Dico Maulana Akbar",
            image: "/people/psdm/psdm-kor-dico-idcard.webp",
        },
        biro: [
            {
                name: "Kaderisasi",
                tugas: "Melaksanakan kegiatan kaderisasi tingkat jurusan, PKJ, pembinaan mahasiswa baru, dan peningkatan kapasitas kepemimpinan calon pengurus.",
                members: [],
            },
            {
                name: "Kepengurusan",
                tugas: "Memastikan aturan dan tata tertib sesuai kebutuhan organisasi, mengawasi kepanitiaan, dan menjaga kedisiplinan pengurus HMJBI.",
                members: [],
            },
            {
                name: "Relasi dan Pemberdayaan Mahasiswa",
                tugas: "Mengoptimalkan potensi mahasiswa melalui pendataan dan informasi perlombaan, menjadi wadah aspirasi, serta mengadakan gathering dan pemberdayaan.",
                members: [],
            },
        ],
        members: [
            {
                name: "Dico Maulana Akbar",
                imageMember: "/people/psdm/psdm-kor-dico-idcard.webp",
                role: "Koordinator",
            },
            {
                name: "Vanessa Riaswati",
                imageMember: "/people/psdm/psdm-staf-nessa-idcard.webp",
                role: "Staff",
            },
            {
                name: "Moh. Syaifudin",
                imageMember: "/people/psdm/psdm-staf-syaif-idcard.webp",
                role: "Staff",
            },
            {
                name: "Alya Puspa Wardani",
                imageMember: "/people/psdm/psdm-staf-alya-idcard.webp",
                role: "Staff",
            },
            {
                name: "Muhammad Abi Hafidh",
                imageMember: "/people/psdm/psdm-staf-abi-idcard.webp",
                role: "Staff",
            },
            {
                name: "Lucky Dwi Darmawan",
                imageMember: "/people/psdm/psdm-staf-lucky-idcard.webp",
                role: "Staff",
            },
            {
                name: "Muhammad Yoga Permana Yudya",
                imageMember: "/people/psdm/psdm-staf-yoga-idcard.webp",
                role: "Staff",
            },
            {
                name: "Shofi Fitriany Hidayah",
                imageMember: "/people/psdm/psdm-staf-shofi-idcard.webp",
                role: "Staff",
            },
            {
                name: "Aprillia Devi Paramita",
                imageMember: "/people/psdm/psdm-staf-devi-idcard.webp",
                role: "Staff",
            },
            {
                name: "Imelda Meila Wardhani",
                imageMember: "/people/psdm/psdm-staf-imelda-idcard.webp",
                role: "Staff",
            },
        ],
    },
    {
        name: "KWU",
        slug: "kwu",
        imageUrl: "/departement/kwu.webp",
        description:
            "Mengelola KOKI (Kantin Operasional Kreatif Informatika) dan mengembangkan jiwa kewirausahaan mahasiswa JBI.",
        coordinator: {
            name: "Ressy Novia Arthaniza",
            image: "/people/kwu/kwu-kor-ressy-idcard.webp",
        },
        biro: [
            {
                name: "Pengembangan Usaha",
                tugas: "Mengembangkan ide kreatif, inovasi produk, serta strategi pemasaran guna menunjang skill berwirausaha anggota dan pengurus HMJBI.",
                members: [],
            },
            {
                name: "Dana Usaha",
                tugas: "Melakukan kegiatan wirausaha untuk memenuhi kebutuhan operasional HMJBI POLIWANGI.",
                members: [],
            },
        ],
        members: [
            {
                name: "Ressy Novia Arthaniza",
                imageMember: "/people/kwu/kwu-kor-ressy-idcard.webp",
                role: "Koordinator",
            },
            {
                name: "Moh. Hilmi Saputra",
                imageMember: "/people/kwu/kwu-staf-hilmi-idcard.webp",
                role: "Staff",
            },
            {
                name: "M Lutfi Darmawan",
                imageMember: "https://picsum.photos/seed/lutfi-darmawan/400/400",
                role: "Staff",
            },
            {
                name: "Sevila Virdasari",
                imageMember: "/people/kwu/kwu-staf-sevila-idcard.webp",
                role: "Staff",
            },
            {
                name: "Evan Ega Purnama",
                imageMember: "/people/kwu/kwu-staf-evan-idcard.webp",
                role: "Staff",
            },
            {
                name: "Jiyadia Namira Putri",
                imageMember: "/people/kwu/kwu-staf-miwaa-idcard.webp",
                role: "Staff",
            },
            {
                name: "Aurora Azizah Wahyurizki",
                imageMember: "/people/kwu/kwu-staf-aurora-idcard.webp",
                role: "Staff",
            },
            {
                name: "Ananda Syahfa Azzara",
                imageMember: "/people/kwu/kwu-staf-syahfa-idcard.webp",
                role: "Staff",
            },
            {
                name: "Hanif Fakhruddin Syihab",
                imageMember: "/people/kwu/kwu-staf-hanif-idcard.webp",
                role: "Staff",
            },
            {
                name: "Aulia Rahmawan",
                imageMember: "/people/kwu/kwu-staf-ray-idcard.webp",
                role: "Staff",
            },
            {
                name: "Mohammad Zepri",
                imageMember: "/people/kwu/kwu-staf-zepri-idcard.webp",
                role: "Staff",
            },
        ],
    },
    {
        name: "MEDKOM",
        slug: "medkom",
        imageUrl: "/departement/medkominfo.webp",
        description:
            "Mendukung pengurus harian di bidang multimedia dan menampung minat bakat mahasiswa di bidang desain, konten, dan dokumentasi.",
        coordinator: {
            name: "Dida Hanum Pradipta",
            image: "/people/medkom/medkom-staff-adid-idcard.webp",
        },
        members: [
            {
                name: "Dida Hanum Pradipta",
                imageMember: "/people/medkom/medkom-staff-adid-idcard.webp",
                role: "Koordinator",
            },
            {
                name: "Rizki Eka Febrian",
                imageMember: "/people/medkom/medkom-staff-febrian.webp",
                role: "Staff",
            },
            {
                name: "Salsabilla Rahmadina",
                imageMember: "/people/medkom/medkom-staff-salca-idcard.webp",
                role: "Staff",
            },
            {
                name: "Ahmad Syaihu Nabiel",
                imageMember: "/people/medkom/medkom-staf-blue-s-idcard.webp",
                role: "Staff",
            },
            {
                name: "Artani Muhammad Rizky",
                imageMember: "/people/medkom/medkom-staff-artani-idcard.webp",
                role: "Staff",
            },
            {
                name: "Taruna Isra",
                imageMember: "/people/medkom/medkom-staf-taruna-idcard.webp",
                role: "Staff",
            },
            {
                name: "Putri Fitriani",
                imageMember: "/people/medkom/medkom-staf-putrii-idcard.webp",
                role: "Staff",
            },
            {
                name: "Jesika Andini Devia Eka Putri",
                imageMember: "/people/medkom/medkom-staf-jesika-idcard.webp",
                role: "Staff",
            },
            {
                name: "Antoni Silha Indriyan Priyadi",
                imageMember: "/people/medkom/medkom-staf-antoni-idcard.webp",
                role: "Staff",
            },
        ],
        biro: [
            {
                name: "Graphic Designer",
                tugas: "Membuat kebutuhan desain berupa konten dan thumbnail informasi kegiatan jurusan di seluruh media sosial.",
                members: [],
            },
            {
                name: "Illustrator",
                tugas: "Membuat desain untuk hari-hari besar nasional dan konten lainnya yang disajikan berupa visual ilustrasi.",
                members: [],
            },
            {
                name: "Content Planner",
                tugas: "Membuat ide kreatif dan daftar konten mingguan, kontrol kualitas, serta membuat caption untuk seluruh media sosial HMJBI.",
                members: [],
            },
            {
                name: "Dokumentasi",
                tugas: "Fotografi bertugas mengabadikan momen kegiatan jurusan, videografi bertugas mengabadikan momen dan membuat konsep video untuk konten media sosial HMJBI.",
                members: [],
            },
        ],
    },
];
