PROMPT

Buatkan saya website portofolio pribadi yang interaktif dan penuh animasi halus, dengan tampilan modern, premium, dan tidak terlihat seperti template generik. Berikut detailnya:

Tentang Saya
Nama: [Nama Kamu]
Profesi/role: [contoh: UI/UX Designer, Frontend Developer, Fotografer, dll]
Kesan yang ingin ditampilkan: [contoh: minimalis-elegan / bold-eksperimental / hangat-personal / teknikal-presisi]
2-3 kata sifat yang menggambarkan gaya visual yang saya suka: [contoh: clean, dark, editorial]
Konten yang Dibutuhkan
Hero section — nama, tagline singkat, dan CTA (contoh: "Lihat Karya" / "Hubungi Saya")
Tentang — foto/ilustrasi diri singkat + bio singkat (2-3 kalimat)
Proyek/Karya — grid atau list [jumlah] proyek, masing-masing dengan gambar, judul, deskripsi singkat, tag teknologi/skill, dan link
Skill/Tools — daftar keahlian atau tools yang dikuasai
Testimoni (opsional): [ya/tidak]
Kontak — form kontak atau link ke email/sosial media (LinkedIn, Instagram, GitHub, dll: [isi link])
Arahan Desain (PENTING — supaya tidak generik)
Jangan gunakan layout hero-centered-text-di-tengah-dengan-gradient-ungu-biru yang klise.
Pilih SATU sistem tipografi yang berani: kombinasikan font display yang punya karakter (bukan Inter/Roboto default) dengan font teks yang mudah dibaca. Contoh pasangan: Söhne/General Sans untuk display + font sistem untuk body.
Gunakan palet warna terbatas (2-3 warna inti + 1 aksen), bukan warna pelangi.
Beri "signature detail" — satu elemen visual unik yang jadi ciri khas (contoh: custom cursor, micro-interaction saat hover, garis pemisah tidak lurus, noise texture halus di background, atau tipografi besar yang overlap dengan gambar).
Gunakan whitespace secara sengaja — jangan penuh sesak.
Tambahkan micro-interactions halus: hover state pada kartu proyek, transisi scroll (fade-in/slide-up ringan), bukan animasi berlebihan yang mengganggu.
Pastikan fully responsive (mobile-first).
Prioritaskan kecepatan load — optimasi gambar, hindari library animasi berat jika tidak perlu.
Stack Teknis
Framework: React + Vite
Styling: Tailwind CSS (gunakan tailwind.config.js untuk custom color palette, font family, dan spacing — jangan hardcode warna di className)
Animasi/interaksi: gunakan Framer Motion untuk transisi halaman, scroll-reveal, dan hover states. Untuk efek yang lebih kompleks (parallax, canvas, particle) boleh tambahkan GSAP atau React Three Fiber jika relevan dengan gaya visual saya.
Deploy target: [contoh: Vercel, Netlify]
Perlu CMS/blog? [ya/tidak]
Detail Interaktivitas & Animasi (WAJIB)
Scroll animation: elemen muncul dengan fade-in + slide-up halus saat masuk viewport (gunakan whileInView dari Framer Motion), staggered untuk list/grid item.
Hover states: kartu proyek punya efek hover yang jelas (scale halus, overlay gambar, atau reveal detail tambahan) — bukan sekadar shadow default.
Custom cursor (opsional tapi disarankan): cursor kustom yang berubah bentuk/ukuran saat hover di atas link atau kartu proyek.
Page transition: transisi halus antar section atau antar halaman (jika multi-page), bukan cut instan.
Navbar interaktif: navbar yang berubah style saat scroll (contoh: transparan di hero, solid setelah scroll turun), dengan smooth-scroll ke section saat diklik.
Micro-interaction pada tombol/CTA: efek tap/click yang responsif (gunakan whileTap dan whileHover dari Framer Motion).
Loading state: jika ada preloader, buat singkat dan bermakna (contoh: animasi nama/logo), jangan lebih dari 1-2 detik.
Semua animasi harus tetap performant — hindari animasi berlebihan yang bikin scroll terasa berat, dan hormati prefers-reduced-motion untuk aksesibilitas.
Referensi Visual (jika ada)



Output yang Diharapkan
Struktur folder/file yang rapi
Kode bersih dan mudah dikustomisasi (gunakan variabel warna/font di satu tempat agar mudah diubah)
Berikan juga ringkasan singkat keputusan desain yang kamu ambil dan alasannya