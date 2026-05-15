// Navigasi Mobile (Hamburger Menu)
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Animasi icon hamburger menjadi X
    hamburger.classList.toggle('toggle');
});

// Tutup menu saat link diklik (untuk mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth Scroll (Scroll halus saat klik menu)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Penanganan gambar gagal muat
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.style.backgroundColor = '#ddd';
        this.alt = "Gambar belum tersedia";
    });
});

// Animasi muncul saat scroll (Sederhana)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 400;
        if (top >= offset) {
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";
        }
    });
});