// ===== HEADER: fundo ao rolar =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('rolado', window.scrollY > 40);
});

// ===== MENU MOBILE =====
const toggle = document.getElementById('menuToggle');
const links = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
  links.classList.toggle('aberto');
  toggle.textContent = links.classList.contains('aberto') ? '✕' : '☰';
});

document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => {
    links.classList.remove('aberto');
    toggle.textContent = '☰';
  })
);

// ===== FAQ (abre/fecha) =====
document.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.faq-q').addEventListener('click', () => {
    const aberto = item.classList.contains('ativo');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('ativo'));
    if (!aberto) item.classList.add('ativo');
  });
});

// ===== ANIMAÇÃO AO ROLAR =====
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('vis');
      obs.unobserve(e.target);
    }
  });
}, { threshold: .15 });

document.querySelectorAll('.reveal').forEach(el => obs.observe(el));