// ===== Navbar scroll effect =====
const navbar = document.getElementById('navbar');
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      if (window.scrollY > 20) {
        navbar.classList.add('bg-bg-primary/90', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-border-color');
      } else {
        navbar.classList.remove('bg-bg-primary/90', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-border-color');
      }
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });

// ===== Mobile menu toggle (accesible) =====
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

function closeMobileMenu() {
  if (!mobileMenu) return;
  mobileMenu.classList.add('hidden');
  if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');
}
function openMobileMenu() {
  mobileMenu.classList.remove('hidden');
  if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'true');
}
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) openMobileMenu();
    else closeMobileMenu();
  });

  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  document.addEventListener('click', (e) => {
    if (!mobileMenu.classList.contains('hidden') && !mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      closeMobileMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) closeMobileMenu();
  });
}

// ===== Active nav link on scroll (preciso) =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
  let current = '';
  const offset = 180;
  sections.forEach(section => {
    const top = section.offsetTop - offset;
    if (window.scrollY >= top) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('text-white', 'bg-white/5', 'text-accent');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('text-white', 'bg-white/5');
    }
  });
}
window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink();

// ===== Scroll reveal animation (sin layout thrashing) =====
const revealElements = document.querySelectorAll('.tech-card, .project-card, .contact-link-card, #sobre-mi .bg-bg-secondary\\/60, #educacion .bg-bg-secondary\\/60');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.6s ease-out ${Math.min(index * 0.05, 0.4)}s, transform 0.6s ease-out ${Math.min(index * 0.05, 0.4)}s`;
    revealObserver.observe(el);
  });
}

// ===== Form handling (FormSubmit AJAX) =====
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    if (formMessage) formMessage.classList.add('hidden');

    const formData = new FormData(contactForm);

    try {
      const response = await fetch('https://formsubmit.co/ajax/fmolina.inf@gmail.com', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        if (formMessage) {
          formMessage.textContent = '¡Mensaje enviado! Te responderé pronto.';
          formMessage.className = 'text-center text-sm font-mono mt-2 text-accent';
          formMessage.classList.remove('hidden');
        }
        contactForm.reset();
      } else {
        throw new Error(data.message || 'Error en el envío');
      }
    } catch (error) {
      if (formMessage) {
        formMessage.textContent = 'Hubo un error al enviar. Intenta de nuevo o escríbeme a fmolina.inf@gmail.com';
        formMessage.className = 'text-center text-sm font-mono mt-2 text-red-400';
        formMessage.classList.remove('hidden');
      }
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      if (formMessage) {
        setTimeout(() => formMessage.classList.add('hidden'), 6000);
      }
    }
  });
}

// ===== Current year in footer =====
const yearEl = document.getElementById('current-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Smooth scroll con offset por navbar fixed =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const navHeight = navbar ? navbar.offsetHeight : 64;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight + 8;
    window.scrollTo({ top, behavior: 'smooth' });
    history.pushState(null, '', href);
  });
});

// ===== Tech cards: hover + seguimiento de mouse para glow =====
document.querySelectorAll('.tech-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  });
  card.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-4px)';
    this.style.boxShadow = '0 10px 30px rgba(16,185,129,0.12)';
  });
  card.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = 'none';
  });
});

// ===== Project cards hover =====
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-2px)';
    this.style.boxShadow = '0 10px 30px rgba(16,185,129,0.08)';
  });
  card.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = 'none';
  });
});

// ===== Fallback para logos del stack técnico si falla CDN =====
document.querySelectorAll('.tech-icon img').forEach(img => {
  img.addEventListener('error', () => {
    img.style.display = 'none';
    const fallback = document.createElement('span');
    fallback.textContent = img.alt ? img.alt.charAt(0) : '?';
    fallback.className = 'text-lg font-bold text-white';
    img.parentElement.appendChild(fallback);
  });
});
