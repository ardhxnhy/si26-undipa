/* ==========================================
   SI '26 — DATA SOURCE
   Universitas Dipa Makassar
   
   PANDUAN UPDATE DATA (EDIT DATA, NOT DESIGN):
   1. Data Mahasiswa: Cukup edit field nickname, className, quote, atau instagram.
   2. Foto Mahasiswa: Cukup letakkan file foto di folder "assets/images/members/"
      dengan nama file [NIM].jpg (contoh: 261001.jpg). Website otomatis mendeteksi.
   3. Pengurus Angkatan: Masukkan nama pengurus pada section ORGANIZATION.
   4. Dokumentasi / Gallery: Tambahkan foto kegiatan di section GALLERY.
   5. Pengumuman: Tambahkan info baru di section ANNOUNCEMENTS.
   6. Quick Links: Tambahkan URL aktif di section QUICK_LINKS.
   ========================================== */

// ==========================================
// 1. PROGRAM INFO
// ==========================================
const SI26_PROGRAM = {
  code: "SI '26",
  name: "Sistem Informasi",
  cohort: "2026",
  institution: "Universitas Dipa Makassar",
  tagline: "One Cohort. One Story.",
  aboutTitle: "A year worth remembering.",
  aboutDescription:
    "Ruang arsip digital dan etalase resmi angkatan 2026 Program Studi Sistem Informasi, Universitas Dipa Makassar. Dibuat sebagai titik temu sederhana nan abadi untuk merawat setiap jejak langkah, kolaborasi, dan nama yang bertumbuh bersama.",
  statistics: {
    students: "112",
    cohort: "SI '26",
    program: "01"
  },
  logos: {
    undipa: "assets/images/logos/undipa.svg",
    sistemInformasi: "assets/images/logos/sistem_informasi.svg"
  }
};

// ==========================================
// 2. KETUA PROGRAM STUDI
// ==========================================
const SI26_KETUA_PRODI = {
  name: "Andi Irmayana, S.Kom., M.T.",
  role: "Ketua Program Studi",
  program: "Sistem Informasi",
  institution: "Universitas Dipa Makassar",
  photo: "assets/images/lecturers/placeholder.jpg"
};

// ==========================================
// 3. STRUKTUR PENGURUS ANGKATAN
// (Saat sudah ada nama pengurus, cukup ganti 'name', 'photo', dll di VS Code)
// ==========================================
const SI26_ORGANIZATION = [
  {
    position: "Ketua Angkatan",
    name: "Coming Soon",
    status: "Belum Ditentukan",
    photo: "assets/images/members/placeholder.jpg",
    instagram: ""
  },
  {
    position: "Wakil Ketua",
    name: "Coming Soon",
    status: "Belum Ditentukan",
    photo: "assets/images/members/placeholder.jpg",
    instagram: ""
  },
  {
    position: "Sekretaris",
    name: "Coming Soon",
    status: "Belum Ditentukan",
    photo: "assets/images/members/placeholder.jpg",
    instagram: ""
  },
  {
    position: "Bendahara",
    name: "Coming Soon",
    status: "Belum Ditentukan",
    photo: "assets/images/members/placeholder.jpg",
    instagram: ""
  }
];

// ==========================================
// 4. STUDENT DATA (112 MAHASISWA SI '26)
// NIM: 261001 – 261112
// Setiap mahasiswa dilengkapi kutipan (quote) & link Instagram
// ==========================================
const SI26_STUDENTS = [
  {
    nim: "261001",
    name: "FADHLUR ROHMAN DZAKI AKBAR",
    nickname: "Dzaki",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261001.jpg",
    quote: "Membangun sistem terbaik berawal dari kesabaran menata baris kode pertama.",
    instagram: "https://instagram.com/dzak.akbar"
  },
  {
    nim: "261002",
    name: "SHINTA",
    nickname: "Shinta",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261002.jpg",
    quote: "Tetap tenang dalam proses, biarkan hasil berbicara dengan anggun.",
    instagram: "https://instagram.com/shinta.id"
  },
  {
    nim: "261003",
    name: "JEOVANI EVANS SIAMPAL",
    nickname: "Evans",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261003.jpg",
    quote: "Teknologi adalah kanvas, dan logika adalah seninya.",
    instagram: "https://instagram.com/jeovani.evans"
  },
  {
    nim: "261004",
    name: "MUHAMMAD ARDHANI",
    nickname: "Ardhani",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261004.jpg",
    quote: "Fokus pada konsistensi harian, kesuksesan hanyalah akumulasi dari usaha kecil.",
    instagram: "https://instagram.com/ardhani.id"
  },
  {
    nim: "261005",
    name: "MONICA FEYLICIA PARIRAK",
    nickname: "Monica",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261005.jpg",
    quote: "Keberanian melangkah selalu membuka pintu-pintu penemuan baru.",
    instagram: "https://instagram.com/monicafey_"
  },
  {
    nim: "261006",
    name: "M. ERDYN AL IKHZAN",
    nickname: "Erdyn",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261006.jpg",
    quote: "Setiap eror adalah guru terbaik yang membimbing menuju solusi matang.",
    instagram: "https://instagram.com/erdyn.ikhzan"
  },
  {
    nim: "261007",
    name: "OLIVIA TEPPONG",
    nickname: "Olivia",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261007.jpg",
    quote: "Belajar memahami data, memahami manusia, dan merajut masa depan.",
    instagram: "https://instagram.com/olivia.tpp"
  },
  {
    nim: "261008",
    name: "ANDI RESKIDIAWATI",
    nickname: "Reski",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261008.jpg",
    quote: "Kerendahan hati dalam belajar adalah kunci ilmu yang berkah dan abadi.",
    instagram: "https://instagram.com/andireskidia"
  },
  {
    nim: "261009",
    name: "ANISA ANDINI NILANINGRUM",
    nickname: "Anisa",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261009.jpg",
    quote: "Jalani hari dengan rasa syukur, tuntaskan tugas dengan integritas.",
    instagram: "https://instagram.com/anisa.nilaningrum"
  },
  {
    nim: "261010",
    name: "SELLY BOLUNG",
    nickname: "Selly",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261010.jpg",
    quote: "Bercita-citalah setinggi langit, namun tetaplah membumi saat berpijak.",
    instagram: "https://instagram.com/selly.bolung"
  },
  {
    nim: "261011",
    name: "ANDI INRA ARIANTO",
    nickname: "Inra",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261011.jpg",
    quote: "Disiplin hari ini adalah kemudahan di masa depan.",
    instagram: "https://instagram.com/andi.inra"
  },
  {
    nim: "261012",
    name: "ELI SRIANI",
    nickname: "Eli",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261012.jpg",
    quote: "Kecerdasan tanpa ketekunan hanyalah potensi yang tertidur.",
    instagram: "https://instagram.com/eli.sriani"
  },
  {
    nim: "261013",
    name: "MELANI PUTRI",
    nickname: "Melani",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261013.jpg",
    quote: "Bekerja dalam hening, biarkan prestasi yang bergemuruh.",
    instagram: "https://instagram.com/melaniputri.id"
  },
  {
    nim: "261014",
    name: "WIDIA TAMBING",
    nickname: "Widia",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261014.jpg",
    quote: "Kebaikan kecil yang konsisten akan menciptakan dampak yang bermakna.",
    instagram: "https://instagram.com/widia.tambing"
  },
  {
    nim: "261015",
    name: "FANEZA NATASYA PASALLI",
    nickname: "Faneza",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261015.jpg",
    quote: "Jadikan setiap tantangan sebagai laboratorium pendewasaan diri.",
    instagram: "https://instagram.com/fanezapasalli"
  },
  {
    nim: "261016",
    name: "ELISYAH HANDAYANI",
    nickname: "Elis",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261016.jpg",
    quote: "Melangkah perlahan tidak masalah, yang penting tidak pernah berhenti.",
    instagram: "https://instagram.com/elisyah.hnd"
  },
  {
    nim: "261017",
    name: "DESWITA ESTEFANI RAMBA KAISA",
    nickname: "Deswita",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261017.jpg",
    quote: "Harmoni antara logika dan empati adalah seni sejati seorang inovator.",
    instagram: "https://instagram.com/deswita.estefani"
  },
  {
    nim: "261018",
    name: "MUHAMMAD SHAFWAN AGIL IBRAHIM",
    nickname: "Shafwan",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261018.jpg",
    quote: "Optimisme adalah bahan bakar utama untuk melewati masa-masa sulit.",
    instagram: "https://instagram.com/shafwan.agil"
  },
  {
    nim: "261019",
    name: "LIDYA DALLE RURU",
    nickname: "Lidya",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261019.jpg",
    quote: "Percayai prosesmu, setiap bunga mekar pada musimnya masing-masing.",
    instagram: "https://instagram.com/lidyadalle"
  },
  {
    nim: "261020",
    name: "DANIEL WARDANA PUTRA",
    nickname: "Daniel",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261020.jpg",
    quote: "Bermimpi besar, mengeksekusi dengan detail, dan pantang menyerah.",
    instagram: "https://instagram.com/danielwardana_"
  },
  {
    nim: "261021",
    name: "AYU ADELIA HANDAYANI",
    nickname: "Adelia",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261021.jpg",
    quote: "Ketekunan adalah jembatan emas antara cita-cita dan pencapaian nyata.",
    instagram: "https://instagram.com/ayu.adeliah"
  },
  {
    nim: "261022",
    name: "DHEA PUTRI PALANGAN",
    nickname: "Dhea",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261022.jpg",
    quote: "Selalu ada keindahan di balik perjuangan yang dilakukan dengan sungguh-sungguh.",
    instagram: "https://instagram.com/dheaputrip_"
  },
  {
    nim: "261023",
    name: "VIDELIA",
    nickname: "Videl",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261023.jpg",
    quote: "Waktu tidak akan menunggu, maka ciptakanlah nilai dalam setiap detik.",
    instagram: "https://instagram.com/videlia.id"
  },
  {
    nim: "261024",
    name: "MUH. BAHDAR",
    nickname: "Bahdar",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261024.jpg",
    quote: "Kekuatan sejati lahir dari keberanian menghadapi hal yang belum kita kuasai.",
    instagram: "https://instagram.com/muh.bahdar"
  },
  {
    nim: "261025",
    name: "RADEN CHELSEA",
    nickname: "Chelsea",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261025.jpg",
    quote: "Kecerdasan emosional dan logika analitis adalah kombinasi tak terkalahkan.",
    instagram: "https://instagram.com/radenchelsea"
  },
  {
    nim: "261026",
    name: "FITRI SYAHRANI RAMADHANA",
    nickname: "Fitri",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261026.jpg",
    quote: "Semangat belajar adalah investasi terbaik yang nilainya tak pernah terdepresiasi.",
    instagram: "https://instagram.com/fitrisyahrani.r"
  },
  {
    nim: "261027",
    name: "FADILA FIRADIANA SAPUTRI",
    nickname: "Fadila",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261027.jpg",
    quote: "Jadilah pribadi yang memberi solusi, bukan yang memperumit keadaan.",
    instagram: "https://instagram.com/fadilafiradiana"
  },
  {
    nim: "261028",
    name: "ABDILLAH ASRIL",
    nickname: "Asril",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261028.jpg",
    quote: "Kerja keras tak pernah mengkhianati siapa pun yang tulus menjalaninya.",
    instagram: "https://instagram.com/abdillah.asril"
  },
  {
    nim: "261029",
    name: "ARKAN MUBAROQ",
    nickname: "Arkan",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261029.jpg",
    quote: "Kreativitas dimulai saat kita berani berpikir di luar batasan standar.",
    instagram: "https://instagram.com/arkan.mubaroq"
  },
  {
    nim: "261030",
    name: "IZZAH AZ-ZAHRAH",
    nickname: "Izzah",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261030.jpg",
    quote: "Bercahaya dalam kebaikan, teguh dalam prinsip kejujuran.",
    instagram: "https://instagram.com/izzah.azzahrah"
  },
  {
    nim: "261031",
    name: "ANNISA SAID",
    nickname: "Annisa",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261031.jpg",
    quote: "Ketenangan batin adalah fondasi terkokoh untuk berpikir jernih.",
    instagram: "https://instagram.com/annisa.said_"
  },
  {
    nim: "261032",
    name: "SRI RAMADANI",
    nickname: "Sri",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261032.jpg",
    quote: "Langkah kecil yang konsisten akan membawa kita pada puncak yang tinggi.",
    instagram: "https://instagram.com/sri.ramadani26"
  },
  {
    nim: "261033",
    name: "AMRULLAH ARIF RAHIM",
    nickname: "Arif",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261033.jpg",
    quote: "Hidup adalah algoritma: input kebaikan, proses dengan ikhlas, hasilkan manfaat.",
    instagram: "https://instagram.com/amrullah.arif"
  },
  {
    nim: "261034",
    name: "BRYAN FREDERICO BIYANG BULO",
    nickname: "Bryan",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261034.jpg",
    quote: "Eksplorasi tanpa batas, belajar tanpa kenal rasa lelah.",
    instagram: "https://instagram.com/bryanfrederico_"
  },
  {
    nim: "261035",
    name: "YUDHA DWIARYA",
    nickname: "Yudha",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261035.jpg",
    quote: "Fokus pada apa yang bisa dikendalikan, abaikan kebisingan yang tak penting.",
    instagram: "https://instagram.com/yudhadwiarya"
  },
  {
    nim: "261036",
    name: "FAIQAH DWI KARTINI",
    nickname: "Faiqah",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261036.jpg",
    quote: "Jadilah perempuan yang mandiri dalam berkarya dan berdaya dalam pemikiran.",
    instagram: "https://instagram.com/faiqahdwik"
  },
  {
    nim: "261037",
    name: "MUH FACHRI AL AZHAR",
    nickname: "Fachri",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261037.jpg",
    quote: "Keberhasilan bukan tentang siapa yang tercepat, tapi siapa yang paling konsisten.",
    instagram: "https://instagram.com/fachri.alazhar"
  },
  {
    nim: "261038",
    name: "AISYAH NABILA",
    nickname: "Aisyah",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261038.jpg",
    quote: "Ketulusan hati akan selalu tercermin dalam setiap karya yang kita buat.",
    instagram: "https://instagram.com/aisyah.nabila.id"
  },
  {
    nim: "261039",
    name: "DIAN MUTIARANI",
    nickname: "Dian",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261039.jpg",
    quote: "Kilau sejati terbentuk dari tempaan tekanan dan tekad yang pantang padam.",
    instagram: "https://instagram.com/dianmutiarani"
  },
  {
    nim: "261040",
    name: "MUHAMMAD FAISAL ALI",
    nickname: "Faisal",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261040.jpg",
    quote: "Menemukan keindahan dalam keteraturan data dan arsitektur sistem.",
    instagram: "https://instagram.com/mfaisal.ali"
  },
  {
    nim: "261041",
    name: "MUHAMMAD NABIL DZAKI",
    nickname: "Nabil",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261041.jpg",
    quote: "Solusi cerdas lahir dari pemahaman mendalam tentang akar masalah.",
    instagram: "https://instagram.com/nabildzaki_"
  },
  {
    nim: "261042",
    name: "REZKIANA",
    nickname: "Rezki",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261042.jpg",
    quote: "Tetaplah tersenyum, badai sesulit apa pun pasti akan berlalu.",
    instagram: "https://instagram.com/rezkiana.id"
  },
  {
    nim: "261043",
    name: "ANASTASYA PUTRI",
    nickname: "Tasya",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261043.jpg",
    quote: "Keberhasilan dimulai dari keputusan sederhana untuk berani mencoba.",
    instagram: "https://instagram.com/anastasyaputri_"
  },
  {
    nim: "261044",
    name: "MUH. ANWAR WAHDA",
    nickname: "Anwar",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261044.jpg",
    quote: "Teguhkan tekad, luruskan niat, dan jangan pernah ragu pada potensi diri.",
    instagram: "https://instagram.com/anwar.wahda"
  },
  {
    nim: "261045",
    name: "FAREL HARI SAPUTRA",
    nickname: "Farel",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261045.jpg",
    quote: "Keberanian mengambil risiko terukur adalah awal dari inovasi hebat.",
    instagram: "https://instagram.com/farelhari_"
  },
  {
    nim: "261046",
    name: "NADHILA RAMADHANI",
    nickname: "Dhila",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261046.jpg",
    quote: "Jadikan setiap proses belajar sebagai sarana menebar kebaikan.",
    instagram: "https://instagram.com/nadhila.ramadhani"
  },
  {
    nim: "261047",
    name: "FIRKAM",
    nickname: "Firkam",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261047.jpg",
    quote: "Bekerja cerdas, berpikir kritis, dan tetap rendah hati dalam berteman.",
    instagram: "https://instagram.com/firkam.id"
  },
  {
    nim: "261048",
    name: "ALFA SEPTIAN KAYANGAN",
    nickname: "Alfa",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261048.jpg",
    quote: "Menjadi versi terbaik dari diri sendiri adalah kompetisi yang sesungguhnya.",
    instagram: "https://instagram.com/alfa.septian"
  },
  {
    nim: "261049",
    name: "PATRA PAMILIAN",
    nickname: "Patra",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261049.jpg",
    quote: "Jadilah penggerak perubahan positif di mana pun kita berada.",
    instagram: "https://instagram.com/patra.pamilian"
  },
  {
    nim: "261050",
    name: "M. ZIYMAN W.",
    nickname: "Ziyman",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261050.jpg",
    quote: "Ketenangan adalah senjata rahasia saat memecahkan teka-teki rumit.",
    instagram: "https://instagram.com/ziyman.w"
  },
  {
    nim: "261051",
    name: "RANGGI PUTRA BIMANTARA",
    nickname: "Ranggi",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261051.jpg",
    quote: "Kombinasi antara dedikasi dan rasa ingin tahu membuka cakrawala tak terbatas.",
    instagram: "https://instagram.com/ranggi.putra"
  },
  {
    nim: "261052",
    name: "RIANA RAMPAN",
    nickname: "Riana",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261052.jpg",
    quote: "Tumbuh dalam kebersamaan, saling menopang menuju garis akhir.",
    instagram: "https://instagram.com/riana.rampan"
  },
  {
    nim: "261053",
    name: "MUHAMMAD FAUZAN AL KAHFI",
    nickname: "Fauzan",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261053.jpg",
    quote: "Ilmu adalah lentera penuntun di tengah derasnya arus zaman modern.",
    instagram: "https://instagram.com/fauzan.alkahfi"
  },
  {
    nim: "261054",
    name: "FEBRIAN ALESSANDRO",
    nickname: "Sandro",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261054.jpg",
    quote: "Menempa diri bukan untuk dipuji, tapi untuk siap diandalkan.",
    instagram: "https://instagram.com/febrian.alessandro"
  },
  {
    nim: "261055",
    name: "WILLIAM NUGROHO",
    nickname: "William",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261055.jpg",
    quote: "Desain sistem yang efisien mencerminkan pikiran yang terstruktur rapi.",
    instagram: "https://instagram.com/william.nugroho"
  },
  {
    nim: "261056",
    name: "FEBRIANO MAKASSA SARUNGGU",
    nickname: "Febriano",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261056.jpg",
    quote: "Hormati asal usul, berkaryalah untuk memberi kebanggaan bagi orang tua.",
    instagram: "https://instagram.com/febrianomakassa"
  },
  {
    nim: "261057",
    name: "KHAERUNNISYA",
    nickname: "Nisya",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261057.jpg",
    quote: "Kelembutan budi pekerti adalah kekuatan yang melunakkan segala rintangan.",
    instagram: "https://instagram.com/khaerunnisya_"
  },
  {
    nim: "261058",
    name: "M. NUR SHOLEH",
    nickname: "Sholeh",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261058.jpg",
    quote: "Kebaikan yang kita tanam hari ini akan menjadi keteduhan esok hari.",
    instagram: "https://instagram.com/mnur.sholeh"
  },
  {
    nim: "261059",
    name: "FANNY UFAIRAH MALILAH FIRYAL",
    nickname: "Fanny",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261059.jpg",
    quote: "Percayai suara hatimu, ia tahu ke mana impianmu harus bermuara.",
    instagram: "https://instagram.com/fannyufairah"
  },
  {
    nim: "261060",
    name: "SHALOMO FERNANDO TANGKE",
    nickname: "Shalomo",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261060.jpg",
    quote: "Jadilah pribadi yang membawa damai dan energi positif bagi sekitar.",
    instagram: "https://instagram.com/shalomo.fernando"
  },
  {
    nim: "261061",
    name: "GRESTELINA JUNITA",
    nickname: "Grestel",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261061.jpg",
    quote: "Keanggunan intelektual lahir dari kehausan akan pengetahuan baru.",
    instagram: "https://instagram.com/grestelinajunita"
  },
  {
    nim: "261062",
    name: "ELIS NOVELLA TODING BUA",
    nickname: "Novella",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261062.jpg",
    quote: "Menemukan makna hidup dari kesederhanaan dan ketulusan berbagi.",
    instagram: "https://instagram.com/elis.novella"
  },
  {
    nim: "261063",
    name: "TRISTAN GRAF JOSEPH",
    nickname: "Tristan",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261063.jpg",
    quote: "Kekuatan analisis yang tajam akan mengungkap esensi di balik kompleksitas.",
    instagram: "https://instagram.com/tristangraf"
  },
  {
    nim: "261064",
    name: "NABIL AHMAD ZAKY",
    nickname: "Zaky",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261064.jpg",
    quote: "Keberhasilan sejati adalah saat karya kita dapat meringankan beban sesama.",
    instagram: "https://instagram.com/nabil.zaky_"
  },
  {
    nim: "261065",
    name: "AQILA ZAFIRA JAMALUDDIN",
    nickname: "Aqila",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261065.jpg",
    quote: "Kecerdasan sejati adalah kemampuan beradaptasi di tengah ketidakpastian.",
    instagram: "https://instagram.com/aqilazafira"
  },
  {
    nim: "261066",
    name: "ISABELA SANGGONA",
    nickname: "Isabela",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261066.jpg",
    quote: "Berani bersuara untuk kebenaran, berani berbuat untuk kemajuan.",
    instagram: "https://instagram.com/isabela.sanggona"
  },
  {
    nim: "261067",
    name: "ZAKIAH KHASANAH HERMAN",
    nickname: "Zakiah",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261067.jpg",
    quote: "Karakter mulia adalah mahkota terindah seorang penuntut ilmu.",
    instagram: "https://instagram.com/zakiah.herman"
  },
  {
    nim: "261068",
    name: "HARSEL TODINGAN",
    nickname: "Harsel",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261068.jpg",
    quote: "Tegak berdiri menatap masa depan dengan keyakinan yang tak tergoyahkan.",
    instagram: "https://instagram.com/harsel.todingan"
  },
  {
    nim: "261069",
    name: "MARLYN CHRISTIN PASAMBA",
    nickname: "Marlyn",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261069.jpg",
    quote: "Ketekunan adalah mata uang berharga yang laku di setiap pintu kesuksesan.",
    instagram: "https://instagram.com/marlynpasamba"
  },
  {
    nim: "261070",
    name: "KERENHAPUKH ITA",
    nickname: "Keren",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261070.jpg",
    quote: "Kebersamaan angkatan ini adalah memori indah yang akan abadi di hati.",
    instagram: "https://instagram.com/kerenhapukh.ita"
  },
  {
    nim: "261071",
    name: "LASMINI MAROTANG",
    nickname: "Lasmini",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261071.jpg",
    quote: "Sederhana dalam sikap, kaya dalam pemikiran dan kepedulian.",
    instagram: "https://instagram.com/lasmini.marotang"
  },
  {
    nim: "261072",
    name: "SHERIN MANI",
    nickname: "Sherin",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261072.jpg",
    quote: "Setiap langkah kecil membawaku lebih dekat ke versi diriku yang kuharapkan.",
    instagram: "https://instagram.com/sherin.mani"
  },
  {
    nim: "261073",
    name: "MANO MANGARRU",
    nickname: "Mano",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261073.jpg",
    quote: "Kejujuran dan integritas adalah harga mati dalam meniti karier profesional.",
    instagram: "https://instagram.com/mano.mangarru"
  },
  {
    nim: "261074",
    name: "ANDI MUHAMMAD RIFQY FAIZY RAMADHAN",
    nickname: "Rifqy",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261074.jpg",
    quote: "Menemukan ritme terbaik antara dedikasi akademik dan persahabatan sejati.",
    instagram: "https://instagram.com/rifqy.faizy"
  },
  {
    nim: "261075",
    name: "JENING MORASI",
    nickname: "Jening",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261075.jpg",
    quote: "Kekuatan tekad mampu menembus tembok keterbatasan apa pun.",
    instagram: "https://instagram.com/jening.morasi"
  },
  {
    nim: "261076",
    name: "NAILA AMANA RAHMAWATI MAULA",
    nickname: "Naila",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261076.jpg",
    quote: "Amanah dalam belajar, tulus dalam berteman, optimis dalam melangkah.",
    instagram: "https://instagram.com/naila.amana"
  },
  {
    nim: "261077",
    name: "MUHAMMAD FAIRI SUMBOWO",
    nickname: "Fairi",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261077.jpg",
    quote: "Fokus pada progres, bukan pada kesempurnaan semata.",
    instagram: "https://instagram.com/fairi.sumbowo"
  },
  {
    nim: "261078",
    name: "REZA MINTIN",
    nickname: "Reza",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261078.jpg",
    quote: "Masa depan milik mereka yang menyiapkan fondasinya sejak dini.",
    instagram: "https://instagram.com/reza.mintin"
  },
  {
    nim: "261079",
    name: "ARIEL JUAN PATINGGI",
    nickname: "Ariel",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261079.jpg",
    quote: "Belajar dari kemarin, hidup untuk hari ini, berharap untuk esok hari.",
    instagram: "https://instagram.com/arieljuan_"
  },
  {
    nim: "261080",
    name: "ALMYRA",
    nickname: "Almyra",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261080.jpg",
    quote: "Keberanian menjadi diri sendiri adalah awal dari pesona yang sejati.",
    instagram: "https://instagram.com/almyra.id"
  },
  {
    nim: "261081",
    name: "RESKI BAWAN",
    nickname: "Bawan",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261081.jpg",
    quote: "Rasa tanggung jawab adalah pembeda antara angan-angan dan realitas.",
    instagram: "https://instagram.com/reski.bawan"
  },
  {
    nim: "261082",
    name: "SISILIA GISKA RAHAYAAN",
    nickname: "Giska",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261082.jpg",
    quote: "Tersenyumlah saat menghadapi kesulitan, senyuman adalah separuh dari solusi.",
    instagram: "https://instagram.com/giskarahayaan"
  },
  {
    nim: "261083",
    name: "STARIFAH NADZIFAH ATSILAH",
    nickname: "Starifah",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261083.jpg",
    quote: "Menjaga kejernihan hati dan ketajaman pikiran di setiap langkah.",
    instagram: "https://instagram.com/starifahnadzifah"
  },
  {
    nim: "261084",
    name: "MUHAMMAD NAUFAL MUSYARY TANG",
    nickname: "Naufal",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261084.jpg",
    quote: "Kecepatan eksekusi yang diimbangi dengan ketelitian adalah keunggulan.",
    instagram: "https://instagram.com/naufalmusyary"
  },
  {
    nim: "261085",
    name: "BAHRUL ALAM",
    nickname: "Bahrul",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261085.jpg",
    quote: "Dunia teknologi luas laksana samudra, siapkan dirimu untuk berlayar jauh.",
    instagram: "https://instagram.com/bahrul.alam26"
  },
  {
    nim: "261086",
    name: "MUH. RIFKI AGUSTRIYANSAH",
    nickname: "Rifki",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261086.jpg",
    quote: "Disiplin mengalahkan bakat ketika bakat tidak diiringi dengan disiplin.",
    instagram: "https://instagram.com/rifkiagustriyansah"
  },
  {
    nim: "261087",
    name: "KRISTINA UJAN",
    nickname: "Kristina",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261087.jpg",
    quote: "Ketabahan dalam belajar akan membuahkan kemanisan di hari kelulusan.",
    instagram: "https://instagram.com/kristina.ujan"
  },
  {
    nim: "261088",
    name: "GIOVANI KRISTEVANO TIMANG",
    nickname: "Giovani",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261088.jpg",
    quote: "Jangan takut gagal, takutlah jika tidak pernah mencoba hal baru.",
    instagram: "https://instagram.com/giovani.timang"
  },
  {
    nim: "261089",
    name: "MUHAMMAD DAFFA PRATAMA PUTRA",
    nickname: "Daffa",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261089.jpg",
    quote: "Bangun reputasi lewat karya yang rapi dan dapat diandalkan.",
    instagram: "https://instagram.com/daffapratama.p"
  },
  {
    nim: "261090",
    name: "GABRIELA QUR'ANIQUE SIRAJ",
    nickname: "Gabriela",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261090.jpg",
    quote: "Menemukan harmoni antara seni desain dan logika algoritma.",
    instagram: "https://instagram.com/gabriela.siraj"
  },
  {
    nim: "261091",
    name: "M. FAREL H. MADONSA",
    nickname: "Farel M.",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261091.jpg",
    quote: "Setiap hari adalah lembaran baru untuk menjadi lebih tangguh.",
    instagram: "https://instagram.com/farel.madonsa"
  },
  {
    nim: "261092",
    name: "RIDHO ABDUL HAFIDZ TOLINGGI",
    nickname: "Ridho",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261092.jpg",
    quote: "Ikhlas dalam usaha, berserah dalam doa, bersyukur dalam hasil.",
    instagram: "https://instagram.com/ridho.tolinggi"
  },
  {
    nim: "261093",
    name: "KARUNIA JUNI LAPIK",
    nickname: "Karunia",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261093.jpg",
    quote: "Hidup adalah anugerah terindah untuk diisi dengan karya yang bermanfaat.",
    instagram: "https://instagram.com/karunia.lapik"
  },
  {
    nim: "261094",
    name: "JUIZHAR CHRISTIAN MARAYA",
    nickname: "Juizhar",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261094.jpg",
    quote: "Teruslah berinovasi dan jangan pernah berpuas diri pada pencapaian awal.",
    instagram: "https://instagram.com/juizhar.maraya"
  },
  {
    nim: "261095",
    name: "AUREL NGGASI SINAENG",
    nickname: "Aurel",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261095.jpg",
    quote: "Pancarkan energi positif, ia akan kembali padamu berlipat ganda.",
    instagram: "https://instagram.com/aurel.sinaeng"
  },
  {
    nim: "261096",
    name: "CIKA TIKUALLO",
    nickname: "Cika",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261096.jpg",
    quote: "Semangat pantang menyerah adalah kunci untuk membuka pintu keberhasilan.",
    instagram: "https://instagram.com/cika.tikuallo"
  },
  {
    nim: "261097",
    name: "NUR ARDIANSYAH",
    nickname: "Ardiansyah",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261097.jpg",
    quote: "Kembangkan potensi tanpa batas, buktikan kemampuan lewat tindakan.",
    instagram: "https://instagram.com/nur.ardiansyah26"
  },
  {
    nim: "261098",
    name: "MUH FAZHARI AGUS",
    nickname: "Fazhari",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261098.jpg",
    quote: "Ketelitian dalam detail adalah pembeda antara yang biasa dan yang luar biasa.",
    instagram: "https://instagram.com/fazhari.agus"
  },
  {
    nim: "261099",
    name: "GILBERT MICHELL MANNA",
    nickname: "Gilbert",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261099.jpg",
    quote: "Eksplorasi rasa ingin tahu, biarkan logika membimbing pada solusi brilian.",
    instagram: "https://instagram.com/gilbert.manna"
  },
  {
    nim: "261100",
    name: "AKSEL MANDA",
    nickname: "Aksel",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261100.jpg",
    quote: "Fokus pada tujuan akhir, nikmati setiap dinamika di sepanjang perjalanan.",
    instagram: "https://instagram.com/aksel.manda"
  },
  {
    nim: "261101",
    name: "ISRAELLA OBERTINA NIBAELY",
    nickname: "Israella",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261101.jpg",
    quote: "Keberanian bermimpi besar adalah langkah awal menuju kenyataan gemilang.",
    instagram: "https://instagram.com/israella.nibaely"
  },
  {
    nim: "261102",
    name: "ALDI DWI PUTRA",
    nickname: "Aldi",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261102.jpg",
    quote: "Kerja keras, loyalitas pada kawan, dan dedikasi pada profesi masa depan.",
    instagram: "https://instagram.com/aldi.dwiputra"
  },
  {
    nim: "261103",
    name: "RIZKY WIJAYA",
    nickname: "Rizky",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261103.jpg",
    quote: "Mengubah ide abstrak menjadi sistem fungsional adalah kebahagiaan terbesar.",
    instagram: "https://instagram.com/rizky.wijaya26"
  },
  {
    nim: "261104",
    name: "FATHAN KHAIRI",
    nickname: "Fathan",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261104.jpg",
    quote: "Kebaikan yang disebarkan tidak akan pernah mengurangi apa yang kita miliki.",
    instagram: "https://instagram.com/fathan.khairi"
  },
  {
    nim: "261105",
    name: "MUHAMMAD FARHAN",
    nickname: "Farhan",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261105.jpg",
    quote: "Selalu ada jalan keluar bagi mereka yang tidak pernah berhenti berusaha.",
    instagram: "https://instagram.com/mfarhan.id"
  },
  {
    nim: "261106",
    name: "FERDIANZA ANUGRA ARWIN",
    nickname: "Ferdianza",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261106.jpg",
    quote: "Inovasi sejati berakar dari kepekaan terhadap kebutuhan masyarakat di sekitar.",
    instagram: "https://instagram.com/ferdianza.arwin"
  },
  {
    nim: "261107",
    name: "RIZCHY TRY HARLAN",
    nickname: "Rizchy",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261107.jpg",
    quote: "Komitmen adalah janji pada diri sendiri untuk menuntaskan apa yang dimulai.",
    instagram: "https://instagram.com/rizchy.harlan"
  },
  {
    nim: "261108",
    name: "MUH RAIHAN ANDI FIRMAN",
    nickname: "Raihan",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261108.jpg",
    quote: "Kembangkan potensi terbaikmu dan jadilah inspirasi bagi sesama.",
    instagram: "https://instagram.com/raihan.andifirman"
  },
  {
    nim: "261109",
    name: "SAIFUL DZAKWAN ADIF",
    nickname: "Saiful",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261109.jpg",
    quote: "Sistem yang tangguh dibangun di atas fondasi kedisiplinan dan kejujuran.",
    instagram: "https://instagram.com/saiful.dzakwan"
  },
  {
    nim: "261110",
    name: "AHMAD RISALDI",
    nickname: "Risaldi",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261110.jpg",
    quote: "Jalani hari dengan rasa bangga sebagai bagian dari keluarga besar SI '26.",
    instagram: "https://instagram.com/ahmad.risaldi"
  },
  {
    nim: "261111",
    name: "CIPITA SIMON BARU",
    nickname: "Cipita",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261111.jpg",
    quote: "Melangkah bersama kawan seangkatan membuat beban berat terasa ringan.",
    instagram: "https://instagram.com/cipita.simon"
  },
  {
    nim: "261112",
    name: "FLORIA",
    nickname: "Floria",
    className: "Belum Ditentukan",
    photo: "assets/images/members/261112.jpg",
    quote: "Mekar dengan keunikan tersendiri dan sebarkan keharuman inspirasi.",
    instagram: "https://instagram.com/floria.id"
  }
];

// ==========================================
// 5. GALLERY DATA (PLACEHOLDER SEMENTARA)
// (Ganti foto, judul, dan tanggal saat foto kegiatan asli sudah ada)
// ==========================================
const SI26_GALLERY = [
  {
    photo: "assets/images/gallery/placeholder.jpg",
    title: "Momen Inisiasi & Pengenalan Kampus",
    date: "Semester Ganjil 2026",
    caption: "Langkah perdana angkatan SI '26 di Universitas Dipa Makassar."
  },
  {
    photo: "assets/images/gallery/placeholder.jpg",
    title: "Suasana Perkuliahan Perdana",
    date: "Coming Soon",
    caption: "Dokumentasi interaksi di ruang kelas dan laboratorium komputer."
  },
  {
    photo: "assets/images/gallery/placeholder.jpg",
    title: "Diskusi & Kerja Kelompok Angkatan",
    date: "Coming Soon",
    caption: "Kolaborasi menyelesaikan proyek algoritma dan sistem informasi."
  },
  {
    photo: "assets/images/gallery/placeholder.jpg",
    title: "Malam Keakraban & Temu Angkatan",
    date: "Coming Soon",
    caption: "Merajut solidaritas dan kebersamaan 112 mahasiswa SI '26."
  }
];

// ==========================================
// 6. ANNOUNCEMENTS / UPDATES (PLACEHOLDER SEMENTARA)
// ==========================================
const SI26_ANNOUNCEMENTS = [
  {
    title: "Musyawarah Pembentukan Struktur Pengurus Angkatan",
    date: "Segera Diumumkan",
    description: "Musyawarah terbuka seluruh mahasiswa SI '26 untuk memilih Ketua Angkatan, Wakil, Sekretaris, dan Bendahara."
  },
  {
    title: "Pengumpulan Foto & Kelengkapan Biodata Mahasiswa",
    date: "Tahap Berjalan",
    description: "Setiap mahasiswa diharapkan mengumpulkan foto portrait (format NIM.jpg) dan quote untuk melengkapi direktori yearbook."
  },
  {
    title: "Kanal Komunikasi & Grup Resmi Aktif",
    date: "Aktif",
    description: "Pastikan seluruh mahasiswa telah bergabung ke WhatsApp Group dan mengikuti akun Instagram resmi @si26undipa."
  }
];

// ==========================================
// 7. QUICK LINKS
// (Isi 'url' ketika link resmi sudah tersedia)
// ==========================================
const SI26_QUICK_LINKS = [
  {
    title: "Instagram Angkatan",
    subtitle: "@si26undipa",
    url: "https://www.instagram.com/si26undipa/?utm_source=ig_web_button_share_sheet",
    status: "Follow"
  },
  {
    title: "WhatsApp Group",
    subtitle: "Komunitas Mahasiswa SI '26",
    url: "https://chat.whatsapp.com/FOdYroWLYSIEndjERZOq99?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAac2sROvwj2NEFNZxo9dw_iIxKVpuP4wW4o6HOZxxyaJWs9B7E3GK7QlNEpKpw_aem_mgEwFmdwQ9GSO3iCzYYcOQ",
    status: "Gabung Grup"
  },
  {
    title: "Google Drive Angkatan",
    subtitle: "Arsip & Berkas Bersama (Placeholder)",
    url: "https://drive.google.com/",
    status: "Buka Drive ↗"
  },
  {
    title: "Pedoman & Dokumen Akademik",
    subtitle: "Sistem Informasi UNDIPA (Placeholder)",
    url: "https://undipa.ac.id/",
    status: "Buka Dokumen ↗"
  }
];

// ==========================================
// 8. INTERNATIONALIZATION (ID / EN DICTIONARY)
// ==========================================
const SI26_I18N = {
  id: {
    nav: {
      about: "About",
      structure: "Structure",
      people: "People",
      gallery: "Gallery",
      updates: "Updates",
      peopleSub: "112 Mahasiswa",
      waGroup: "WhatsApp Group SI '26",
      igAngkatan: "Instagram @si26undipa",
      themeTitle: "Mode Tampilan",
      langTitle: "Bahasa"
    },
    theme: {
      switchToLight: "Ganti ke mode terang",
      switchToDark: "Ganti ke mode gelap",
      light: "Mode Terang",
      dark: "Mode Gelap"
    },
    hero: {
      badge: "Sistem Informasi · Angkatan 2026",
      institutionTitle: "Universitas Dipa Makassar",
      institutionSub: "Kampus Teknologi",
      prodiTitle: "Program Studi Sistem Informasi",
      prodiSub: "Cohort 2026",
      title: "SI '26",
      subtitle: "One Cohort. One Story.",
      description: "Ruang arsip digital dan etalase resmi 112 mahasiswa Sistem Informasi angkatan 2026, Universitas Dipa Makassar.",
      exploreBtn: "Explore People (112)",
      waBtn: "WhatsApp Group",
      igBtn: "Instagram @si26undipa"
    },
    stats: {
      studentsLabel: "Students",
      cohortLabel: "Cohort",
      programLabel: "Program"
    },
    about: {
      kicker: "01 — ABOUT COHORT",
      title: "A year worth remembering.",
      p1: "Ruang arsip digital dan etalase resmi angkatan 2026 Program Studi Sistem Informasi, Universitas Dipa Makassar. Dibuat sebagai titik temu sederhana nan abadi untuk merawat setiap jejak langkah, kolaborasi, dan nama yang bertumbuh bersama.",
      p2: "Dari ruang kuliah hingga lorong kampus, 112 cerita berjalan beriringan menuju cita-cita di bidang teknologi dan sistem informasi.",
      prodiRole: "Ketua Program Studi"
    },
    leadership: {
      kicker: "02 — LEADERSHIP",
      title: "Struktur Angkatan",
      description: "Susunan kepengurusan angkatan SI '26 yang akan menaungi koordinasi, kegiatan, dan solidaritas bersama selama masa perkuliahan.",
      positions: {
        "Ketua Angkatan": "Ketua Angkatan",
        "Wakil Ketua": "Wakil Ketua",
        "Sekretaris": "Sekretaris",
        "Bendahara": "Bendahara"
      },
      status: "Belum Ditentukan"
    },
    directory: {
      kicker: "03 — PEOPLE",
      title: "The 112 Faces of SI '26",
      description: "Daftar lengkap seluruh mahasiswa Program Studi Sistem Informasi Angkatan 2026 Universitas Dipa Makassar.",
      searchPlaceholder: "Cari nama, NIM, atau panggilan...",
      clearSearchAria: "Hapus pencarian",
      filterAll: "Semua",
      defaultClass: "Belum Ditentukan",
      showingCount: "Menampilkan {count} dari {total} mahasiswa",
      showingAll: "Menampilkan seluruh {total} mahasiswa",
      emptyTitle: "No one found.",
      emptyText: "Tidak ditemukan mahasiswa dengan kata kunci \"{query}\". Silakan coba cari berdasarkan nama atau NIM.",
      resetBtn: "Tampilkan Semua Mahasiswa",
      viewProfileAria: "Lihat detail profil {name}"
    },
    modal: {
      prodiLabel: "Program Studi",
      prodiValue: "Sistem Informasi",
      cohortLabel: "Angkatan",
      classLabel: "Kelas",
      institutionLabel: "Institusi",
      institutionValue: "Universitas Dipa Makassar",
      igBtnText: "Instagram Profile",
      closeAria: "Tutup detail profil"
    },
    gallery: {
      kicker: "04 — VISUAL ARCHIVE",
      title: "Moments & Memories",
      description: "Dokumentasi visual perjalanan dan memori bersama selama menempuh perkuliahan di Universitas Dipa Makassar.",
      emptyTitle: "Visual Archive Coming Soon",
      emptyText: "Dokumentasi kegiatan dan momen kebersamaan angkatan SI '26 akan ditampilkan di sini."
    },
    updates: {
      kicker: "05 — NOTICE BOARD",
      title: "Announcements",
      description: "Kabar dan pemberitahuan penting untuk angkatan SI '26.",
      quickLinksKicker: "RESOURCES",
      quickLinksTitle: "Quick Links",
      quickLinksDesc: "Tautan direktori eksternal angkatan SI '26."
    },
    footer: {
      institution: "Sistem Informasi · Universitas Dipa Makassar",
      rights: "© 2026 SI '26. All rights reserved."
    }
  },
  en: {
    nav: {
      about: "About",
      structure: "Structure",
      people: "People",
      gallery: "Gallery",
      updates: "Updates",
      peopleSub: "112 Students",
      waGroup: "SI '26 WhatsApp Group",
      igAngkatan: "Instagram @si26undipa",
      themeTitle: "Appearance",
      langTitle: "Language"
    },
    theme: {
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode",
      light: "Light Mode",
      dark: "Dark Mode"
    },
    hero: {
      badge: "Information Systems · Class of 2026",
      institutionTitle: "Universitas Dipa Makassar",
      institutionSub: "Technology Campus",
      prodiTitle: "Information Systems Study Program",
      prodiSub: "Cohort 2026",
      title: "SI '26",
      subtitle: "One Cohort. One Story.",
      description: "Digital archive and official showcase of 112 Information Systems students, Class of 2026, Universitas Dipa Makassar.",
      exploreBtn: "Explore People (112)",
      waBtn: "WhatsApp Group",
      igBtn: "Instagram @si26undipa"
    },
    stats: {
      studentsLabel: "Students",
      cohortLabel: "Cohort",
      programLabel: "Program"
    },
    about: {
      kicker: "01 — ABOUT COHORT",
      title: "A year worth remembering.",
      p1: "The official digital yearbook and showcase of the 2026 Information Systems cohort at Universitas Dipa Makassar. Built as a timeless digital home to celebrate each milestone, collaboration, and individual journey.",
      p2: "From lecture halls to campus corridors, 112 stories move forward together toward innovation in technology and information systems.",
      prodiRole: "Head of Study Program"
    },
    leadership: {
      kicker: "02 — LEADERSHIP",
      title: "Cohort Structure",
      description: "Leadership structure of the SI '26 cohort overseeing student collaboration, coordination, and community solidarity.",
      positions: {
        "Ketua Angkatan": "Class President",
        "Wakil Ketua": "Vice President",
        "Sekretaris": "Secretary",
        "Bendahara": "Treasurer"
      },
      status: "Not Yet Assigned"
    },
    directory: {
      kicker: "03 — PEOPLE",
      title: "The 112 Faces of SI '26",
      description: "Complete roster of all 112 students in the 2026 Information Systems cohort, Universitas Dipa Makassar.",
      searchPlaceholder: "Search by name, student ID, or nickname...",
      clearSearchAria: "Clear search",
      filterAll: "All",
      defaultClass: "Not Yet Assigned",
      showingCount: "Showing {count} of {total} students",
      showingAll: "Showing all {total} students",
      emptyTitle: "No one found.",
      emptyText: "No students found matching \"{query}\". Try searching by name or student ID.",
      resetBtn: "Show All Students",
      viewProfileAria: "View profile details of {name}"
    },
    modal: {
      prodiLabel: "Study Program",
      prodiValue: "Information Systems",
      cohortLabel: "Cohort",
      classLabel: "Class",
      institutionLabel: "Institution",
      institutionValue: "Universitas Dipa Makassar",
      igBtnText: "Instagram Profile",
      closeAria: "Close profile details"
    },
    gallery: {
      kicker: "04 — VISUAL ARCHIVE",
      title: "Moments & Memories",
      description: "Visual documentation and shared memories across our academic journey at Universitas Dipa Makassar.",
      emptyTitle: "Visual Archive Coming Soon",
      emptyText: "Cohort activities and campus moments will be showcased here."
    },
    updates: {
      kicker: "05 — NOTICE BOARD",
      title: "Announcements",
      description: "Important notices and updates for the SI '26 cohort.",
      quickLinksKicker: "RESOURCES",
      quickLinksTitle: "Quick Links",
      quickLinksDesc: "Official external directory links for SI '26."
    },
    footer: {
      institution: "Information Systems · Universitas Dipa Makassar",
      rights: "© 2026 SI '26. All rights reserved."
    }
  }
};

// Export for module systems (and available as global variables for vanilla browser scripts)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    SI26_PROGRAM,
    SI26_KETUA_PRODI,
    SI26_ORGANIZATION,
    SI26_STUDENTS,
    SI26_GALLERY,
    SI26_ANNOUNCEMENTS,
    SI26_QUICK_LINKS,
    SI26_I18N
  };
}
