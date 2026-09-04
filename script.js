// ===== Navbar scroll effect =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('bg-bg-primary/90', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-border-color');
  } else {
    navbar.classList.remove('bg-bg-primary/90', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-border-color');
  }
});

// ===== Mobile menu toggle =====
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Close mobile menu on link click
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// ===== Active nav link on scroll =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('text-white', 'bg-white/5');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('text-white', 'bg-white/5');
    }
  });
});

// ===== Scroll reveal animation =====
const revealElements = document.querySelectorAll('.tech-card, .project-card, .contact-link-card, #sobre-mi > div > div:last-child > div, #educacion .space-y-8 > div');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach((el, index) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
  revealObserver.observe(el);
});

// ===== Typing effect for terminal =====
const terminalText = document.querySelector('.terminal-card .p-5');
if (terminalText) {
  const originalHTML = terminalText.innerHTML;
  terminalText.style.opacity = '0';

  const terminalObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        terminalText.style.opacity = '1';
        terminalText.classList.add('animate-fade-in');
        terminalObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  terminalObserver.observe(terminalText);
}

// ===== Form handling (FormSubmit) =====
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Enviando...';
  submitBtn.disabled = true;
  formMessage.classList.add('hidden');

  const formData = new FormData(contactForm);

  try {
    const response = await fetch('https://formsubmit.co/ajax/fmolina.inf@gmail.com', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: formData
    });

    if (response.ok) {
      formMessage.textContent = '¡Mensaje enviado! Te responderé pronto.';
      formMessage.className = 'text-center text-sm font-mono mt-2 text-accent';
      formMessage.classList.remove('hidden');
      contactForm.reset();
    } else {
      const data = await response.json().catch(() => ({}));
      throw new Error(data.message || 'Error en el envío');
    }
  } catch (error) {
    formMessage.textContent = 'Hubo un error al enviar. Intenta de nuevo o escríbeme a fmolina.inf@gmail.com';
    formMessage.className = 'text-center text-sm font-mono mt-2 text-red-400';
    formMessage.classList.remove('hidden');
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
    setTimeout(() => {
      formMessage.classList.add('hidden');
    }, 5000);
  }
});

// ===== Current year in footer =====
document.getElementById('current-year').textContent = new Date().getFullYear();

// ===== Smooth scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== Tech cards hover effect =====
document.querySelectorAll('.tech-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-4px)';
    this.style.boxShadow = '0 10px 30px rgba(16, 185, 129, 0.1)';
  });

  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = 'none';
  });
});

// ===== Project cards hover effect =====
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px)';
    this.style.boxShadow = '0 10px 30px rgba(16, 185, 129, 0.08)';
  });

  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = 'none';
  });
});
