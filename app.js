const notice = document.getElementById("notice");
document.getElementById("create").addEventListener("click", () => {
  notice.textContent = "Demo: pembuatan server belum aktif. Panel perlu VPS, Pterodactyl API, dan akun dengan izin yang sesuai.";
});
document.getElementById("consoleBtn").addEventListener("click", () => {
  notice.textContent = "Demo: Console belum terhubung. Setelah Pterodactyl terpasang, gunakan console server dari Panel asli.";
});
