# Madan Hosting Panel — Android Starter

Ini adalah **starter UI statis** untuk proyek Madan Hosting Panel. Bisa diedit dari Android memakai Acode dan disimpan di GitHub.

## Isi
- `index.html` — halaman dashboard
- `style.css` — tema gelap biru Madan, responsif untuk layar HP
- `app.js` — tombol demo dengan penjelasan
- `README.md` — panduan

## Penting
Starter ini **bukan Pterodactyl Panel**, tidak menyediakan login sungguhan, tidak membuat server, dan tombolnya belum mengontrol bot. Jangan masukkan password, token, atau sesi WhatsApp ke repositori.

Untuk server sungguhan:
1. Sediakan VPS Linux yang mendukung Docker.
2. Pasang Pterodactyl Panel dan Wings mengikuti dokumentasi resmi untuk versi yang sama.
3. Buat node dan alokasi port.
4. Buat Egg Node.js dan server bot.
5. Hubungkan UI ini ke API melalui backend yang aman, atau gunakan Panel Pterodactyl asli.
6. Jangan pernah menyimpan API key admin di frontend atau repositori publik.

## Buka di Android
1. Unduh ZIP dan ekstrak dengan aplikasi Files / ZArchiver.
2. Buka folder hasil ekstrak di Acode.
3. Edit `index.html`, `style.css`, atau `app.js`.
4. Buka `index.html` di browser untuk melihat preview.

## Publikasikan demo statis
GitHub repository → Settings → Pages → deploy from branch → pilih branch `main` dan folder `/root`. Ini hanya menerbitkan UI statis; bukan backend server.

## Dokumentasi resmi
- https://pterodactyl.io/
- https://docs.pterodactyl.io/v1/panel/getting-started
- https://docs.pterodactyl.io/v1/wings/installing
