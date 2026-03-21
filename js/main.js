// ── Scroll header ──
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// ── Mobile nav ──
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');
hamburger?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const s = hamburger.querySelectorAll('span');
  const o = navLinks.classList.contains('open');
  s[0].style.transform = o ? 'translateY(6.5px) rotate(45deg)' : '';
  s[1].style.opacity   = o ? '0' : '1';
  s[2].style.transform = o ? 'translateY(-6.5px) rotate(-45deg)' : '';
});

// ── Fade-up observer ──
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 90);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
