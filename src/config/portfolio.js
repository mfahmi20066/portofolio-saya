export const profile = {
  name: 'Muhammad Fahmi',
  firstName: 'Fahmi',
  role: 'Fullstack Developer',
  location: 'Palopo, Indonesia',
  email: 'mfahmi20066@gmail.com',
  tagline:
    'Membangun produk web yang presisi — dari database hingga piksel terakhir.',
  bio: [
    'Fullstack developer dengan fokus pada arsitektur yang rapi, API yang stabil, dan antarmuka yang terasa hidup. Saya percaya produk hebat lahir dari detail kecil yang dikerjakan dengan teliti.',
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
  // Dapatkan access key GRATIS di https://web3forms.com
  // (isi email penerima: mfahmi20066@gmail.com, konfirmasi, lalu salin kodenya)
  accessKey: 'GANTI_DENGAN_ACCESS_KEY_MU',
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
    subtitle: 'Sistem Inventory Barang Pada Hnd Komputer',
    description:
      'Sistem manajemen inventory untuk kontrol stok multi-gudang secara akurat. Pemindaian barcode/QR, notifikasi stok menipis otomatis, dan laporan pergerakan barang real-time — dibangun untuk sinkronisasi ribuan SKU lintas lokasi tanpa selisih data.',
    tags: ['Laravel','PHP', 'Node.js', 'MySQL', 'Redis', 'Socket.IO'],
    year: '2026',
    link: '#',
    code: 'https://github.com/mfahmi20066/inventory-web',
  },
  {
    title: 'Siakad',
    subtitle: 'Backend Track & Trace',
    description:
      'Sistem informasi akademik untuk pengelolaan data sekolah secara terpusat. Input nilai rapor digital, jadwal pelajaran otomatis, dan akses orang tua untuk memantau perkembangan siswa — dibangun untuk mengelola ribuan data siswa lintas jurusan dan angkatan tanpa duplikasi data.',
    tags: ['PHP', 'Laravel', 'MySQL', 'Redis'],
    year: '2026',
    link: '#',
    code: 'https://github.com/',
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
      'Waktu penyelesaian pengaduan warga turun drastis sejak sistemnya berjalan. Alur eskalasinya jelas, tidak ada lagi tiket yang menggantung tanpa penanggung jawab.',
    name: 'Muhammad Fiqih',
    role: 'Kepala Layanan Publik @ SistemPengaduan',
  },
  {
    quote:
      'Selisih stok yang dulu jadi masalah rutin sekarang nyaris nol. Laporan pergerakan barang real-time bikin audit jadi jauh lebih cepat.',
    name: 'Renal Rais',
    role: 'Manajer Gudang @ SistemInventory',
  },
  {
    quote:
      'Orang tua siswa kini bisa pantau nilai dan absensi langsung dari aplikasi. Beban administrasi guru pun berkurang signifikan sejak sistemnya digunakan.',
    name: 'Tedy Fahrezy',
    role: 'Wakil Kepala Sekolah @ SIAKAD Sekolah',
  },
]
