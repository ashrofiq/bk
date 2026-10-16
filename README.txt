APLIKASI LAYANAN BK — VERSI MULTI-HALAMAN

Cara menggunakan:
1. Ekstrak seluruh ZIP ke satu folder.
2. Jalankan melalui web server/hosting (disarankan), bukan memindahkan file satu per satu.
3. Buka index.html untuk halaman awal.
4. Setiap fungsi memiliki halaman masuk sendiri, misalnya perizinan.html, presensi.html, laporan.html.
5. File app.js dan app.css harus tetap berada satu folder dengan semua file HTML.

Catatan:
- Fungsi inti, login, koneksi Supabase, dan pembatasan akses berdasarkan peran dipertahankan dari file sumber.
- Tiap halaman memakai mesin aplikasi bersama (app.js) agar data dan perilaku tidak perlu diduplikasi.
- Navigasi di dalam aplikasi tetap dapat digunakan; halaman spesifik juga dapat dibuka langsung melalui file HTML masing-masing.
- Sebaiknya uji di staging sebelum dipakai produksi. Jangan bagikan kredensial akun.
