export const profile = {
  name: 'Muhammad Fahmi',
  firstName: 'Fahmi',
  role: 'Developer',
  location: 'Palopo, Indonesia',
  email: 'mfahmi20066@gmail.com',
  tagline:
    'Membangun produk web yang presisi — dari database hingga piksel terakhir.',
  bio: [
    'Developer dengan fokus pada arsitektur yang rapi, API yang stabil, dan antarmuka yang terasa hidup. Saya percaya produk hebat lahir dari detail kecil yang dikerjakan dengan teliti.',
    'Selama bertahun-tahun saya membantu startup dan tim produk merancang sistem yang bisa tumbuh tanpa menjadi rumit — dari skema database hingga pengalaman pengguna yang mulus.',
  ],
  stats: [
    { value: '4+', label: 'tahun pengalaman' },
    { value: '20+', label: 'proyek shipped' },
    { value: '12+', label: 'klien & startup' },
  ],
  socials: {
    github: 'https://github.com/mfahmi20066',
    linkedin: 'https://www.linkedin.com/in/',
    instagram: 'https://www.instagram.com/mfahmiii_22',
    email: 'mailto:mfahmi20066@gmail.com',
  },
}

export const contactForm = {
  accessKey: 'c5cd82d7-e6df-4bfc-8821-6b387fe0e8e2',
}

export const nav = [
  { id: 'about', label: 'Tentang', index: '01' },
  { id: 'projects', label: 'Karya', index: '02' },
  { id: 'skills', label: 'Skill', index: '03' },
  { id: 'testimonials', label: 'Testimoni', index: '04' },
  { id: 'contact', label: 'Kontak', index: '05' },
]

export const marquee = [
  'React',
  'Node.js',
  'PostgreSQL',
  'TypeScript',
  'Tailwind CSS',
  'Docker',
  'Redis',
  'NestJS',
  'AWS',
  'Framer Motion',
]

export const projects = [
  {
    title: 'SistemPengaduan',
    subtitle: 'Sistem Pengaduan Digital',
    description:
      'Sistem pengaduan terintegrasi untuk pelaporan masalah secara cepat dan transparan. Pelacakan status real-time, notifikasi otomatis ke penanggung jawab, dan dashboard eskalasi — dirancang untuk menangani ratusan tiket pengaduan tanpa ada yang terlewat.',
    tags: ['PHP', 'PHPMail', 'MySQL', 'Redis', 'Socket.IO'],
    year: '2026',
    link: '#',
    code: 'https://github.com/mfahmi20066/SIPM-PDAM-project',
  },
  {
    title: 'SistemInventori',
    subtitle: 'Sistem Inventory Barang',
    description:
      'Sistem manajemen inventory untuk kontrol stok multi-gudang secara akurat. Pemindaian barcode/QR, notifikasi stok menipis otomatis, dan laporan pergerakan barang real-time — dibangun untuk sinkronisasi ribuan SKU lintas lokasi tanpa selisih data.',
    tags: ['Laravel','PHP', 'Node.js', 'MySQL', 'Redis', 'Socket.IO'],
    year: '2026',
    link: '#',
    code: 'https://github.com/mfahmi20066/inventory-web',
  },
  {
    title: 'Siakad',
    subtitle: 'Sistem Informasi Akademik',
    description:
      'Platform sistem informasi akademik terpusat untuk digitalisasi manajemen data sekolah. Mencakup pencatatan nilai rapor digital, penjadwalan pelajaran otomatis, serta portal akses orang tua guna memantau progres siswa secara transparent. Dirancang menangani ribuan data siswa lintas jurusan dan angkatan dengan integritas data terjamin tanpa duplikasi.',
    tags: ['PHP', 'Laravel', 'MySQL', 'Redis'],
    year: '2026',
    link: '#',
    code: 'https://github.com/mfahmi20066/siakad',
  },
  {
    title: 'AbsensiDigital',
    subtitle: 'Sistem Absensi Digital',
    description:
      'Sistem absensi digital untuk Satuan Pelayanan Pemenuhan Gizi (SPPG) Kota Palopo. Absensi lewat barcode/QR unik per karyawan, verifikasi foto wajah via kamera, dan pelacakan lokasi wajib dalam radius kantor — lengkap dengan 3 role (admin, manajer, karyawan), pengajuan izin berjenjang, penentuan status otomatis (hadir/telat/izin/cuti/alpha), serta laporan harian, bulanan, dan tahunan yang bisa diekspor ke CSV.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'Vite', 'QR Code'],
    year: '2026',
    link: '#',
    code: 'https://github.com/mfahmi20066/absensi_digital',
  },
]

export const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'NestJS', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Infra & Tools',
    items: ['Docker', 'AWS', 'GitHub Actions', 'Figma', 'Linux'],
  },
]

export const testimonials = [
  {
    quote:
      'Sejak sistem berjalan, durasi penyelesaian pengaduan warga turun drastis. Alur eskalasinya jelas, jadi tak ada lagi tiket yang terbengkalai tanpa penanggung jawab.',
    name: 'Muhammad Fiqih',
    role: 'Client',
  },
  {
    quote:
      'Selisih stok yang dulu jadi masalah rutin kini praktis hilang. Laporan pergerakan barang secara real-time membuat proses audit jauh lebih cepat.',
    name: 'Renal Rais',
    role: 'Client',
  },
  {
    quote:
      'Dulu orang tua harus menghubungi wali kelas hanya untuk mengecek kehadiran anak. Sekarang, lewat aplikasi, nilai dan absensi langsung bisa dipantau kapan saja secara transparan, tanpa menunggu laporan manual yang sering tertunda.',
    name: 'Tedy Fahrezy',
    role: 'Client',
  },
  {
    quote:
      'Rekap kehadiran karyawan yang dulu manual dan rawan selisih sekarang otomatis dan akurat. Laporan jam kerja tersedia real-time, sehingga proses payroll setiap bulan jauh lebih lancar.',
    name: 'Yodi Yoinoxel',
    role: 'Client',
  },
]
