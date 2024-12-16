// Tentukan halaman yang ingin diterapkan fitur ini
const targetPage = '/music'; // Ganti dengan URL halaman yang diinginkan

// Periksa apakah halaman yang dimuat adalah halaman yang dimaksud
if (window.location.pathname === targetPage) {
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('scrollPosition', window.scrollY);
  });

  window.addEventListener('load', () => {
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
      window.scrollTo(0, scrollPosition);
    }
  });
}
