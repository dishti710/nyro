
/* ── THEME TOGGLE (default: dark, icon = ☀️ to switch to light) ── */
const themeBtn = document.getElementById('themeBtn');
const html = document.documentElement;

themeBtn.addEventListener('click', () => {
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  themeBtn.textContent = isDark ? '🌙' : '☀️';
});

/* ── MOBILE MENU ── */
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
document.getElementById('closeMenu').addEventListener('click', toggleMenu);

/* ── NAVBAR SCROLL SHADOW ── */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.boxShadow =
    window.scrollY > 20 ? '0 4px 32px rgba(0,0,0,0.35)' : 'none';
});

/* ── SCROLL REVEAL ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 90);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));