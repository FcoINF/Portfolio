# Francisco Molina — Developer Portfolio

> Portfolio personal de **Francisco Molina**, estudiante de Ingeniería en Informática (Duoc UC) especializado en desarrollo Full Stack y diseño UI/UX.

![Status](https://img.shields.io/badge/Status-En%20desarrollo-10b981?style=flat-square)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-slate?style=flat-square)

**Demo:** Abre `index.html` en el navegador o desplegado en tu hosting favorito · **Autor:** [@FcoINF](https://github.com/FcoINF)

---

## 📋 Tabla de Contenidos

- [Sobre el Proyecto](#-sobre-el-proyecto)
- [Demo](#-demo)
- [Stack Técnico](#-stack-técnico)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Secciones](#-secciones)
- [Características](#-características)
- [Instalación y Uso](#-instalación-y-uso)
- [Personalización](#-personalización)
- [Formulario de Contacto](#-formulario-de-contacto)
- [Roadmap](#-roadmap)
- [Contacto](#-contacto)
- [Licencia](#-licencia)

## 📖 Sobre el Proyecto

Portfolio web responsive de una sola página (SPA) diseñado para presentar perfil profesional, habilidades técnicas, proyectos y vías de contacto. El diseño sigue una estética **dark + terminal** (`#1a1a2e` / `#10b981`) con tarjetas tipo código Java, efectos de blur y micro-interacciones.

Objetivos principales:
- Presentación profesional clara para reclutadores y clientes freelance.
- Mostrar proyectos con impacto real (ej. **MHS — Mental Health Support** y **Chatbot Municipal**).
- Canal de contacto directo vía email sin necesidad de backend.

## 👀 Demo

```bash
# Opción 1: abrir directamente
start index.html  # Windows
open index.html   # macOS
xdg-open index.html # Linux

# Opción 2: servidor local (recomendado para evitar restricciones CORS)
npx serve .
# o
python -m http.server 8000
```

## 🛠 Stack Técnico

| Tecnología | Uso | Nivel |
|---|---|---|
| **HTML5** | Estructura semántica | 75% |
| **CSS3** | Estilos, responsive, animaciones custom (`styles.css:1`) | 70% |
| **JavaScript (Vanilla)** | Interactividad, navbar, animaciones, formulario (`script.js:1`) | 65% |
| **Tailwind CSS (CDN)** | Utility-first, theming extendido (`index.html:16`) | - |
| **Python** | Backend & Scripts | 65% |
| **Java** | Backend & POO | 60% |
| **Kotlin** | Android & Backend | 40% |
| **Flutter / Dart** | Desarrollo móvil (proyecto MHS) | 55% |
| **Figma** | UI/UX Design | 85% |
| **Git** | Control de versiones | 70% |
| **AWS** | Cloud Services | 35% |

Fuentes: `JetBrains Mono` (código) + `Inter` (texto) vía Google Fonts. Iconos desde [Simple Icons CDN](https://cdn.simpleicons.org).

## 📁 Estructura del Proyecto

```
Portafolio/
├── index.html      # Estructura completa — navbar, hero, sobre mí, stack, proyectos, educación, contacto, footer
├── styles.css      # Variables CSS, componentes (botones, cards, terminal), animaciones, responsive
├── script.js       # Lógica: navbar scroll, menú móvil, active links, scroll reveal, form, smooth scroll, hovers
├── favicon.svg     # Favicon
└── README.md       # Este archivo
```

- **Sin build step**: proyecto 100% estático, sin bundler, sin `package.json`. Ideal para desplegar directo en GitHub Pages / Netlify / Vercel.

## 🧩 Secciones

| Sección | ID | Descripción |
|---|---|---|
| **Navbar** | `#navbar` | Fijo, efecto blur al hacer scroll (`script.js:2`), menú móvil accesible (`aria-expanded`) |
| **Hero** | `#hero` | Presentación + badge disponibilidad + terminal card `Francisco.java` |
| **Sobre mí** | `#sobre-mi` | Bio + `profile.java` + 3 tarjetas info + stats (Duoc UC, 3er semestre, remoto, idiomas) |
| **Stack Técnico** | `#stack` | 10 cards con barra de progreso: HTML, CSS, JS, Java, Python, Kotlin, Figma, Git, Flutter, AWS |
| **Proyectos** | `#proyectos` | MHS (Dart/Flutter/Firebase), Chatbot Municipal (HTML/Python/IA), placeholder futuros |
| **Educación** | `#educacion` | Ingeniería en Informática Duoc UC 2025-2028 + habilidades complementarias |
| **Contacto** | `#contacto` | Formulario + links GitHub / LinkedIn / Email |
| **Footer** | — | Navegación, redes, copyright con año dinámico (`script.js:153`) |

## ✨ Características

- **Totalmente responsive** — grid adaptativo (`md:grid-cols-[1fr_1.2fr]`), menú hamburguesa en móvil.
- **Navbar inteligente** — fondo translúcido + blur al scrollear >20px, link activo según sección (`script.js:54`).
- **Smooth scroll con offset** por navbar fixed (`script.js:157`).
- **Scroll reveal** con `IntersectionObserver` (`script.js:77`) — fade + translate sin layout thrashing, respeta `prefers-reduced-motion` (`styles.css:307`).
- **Efectos hover** — `tech-card` con seguimiento de mouse y glow radial (`styles.css:172`, `script.js:172`), elevación en project cards.
- **Accesibilidad** — `focus-visible`, labels asociadas, `aria-label`, cierre de menú con `Escape` y click fuera.
- **Performance** — scroll con `requestAnimationFrame` + `passive: true`, lazy loading de iconos, fallback si falla CDN de logos (`script.js:203`).
- **SEO básico** — meta `description`, `keywords`, `theme-color`, `viewport`.

## 🚀 Instalación y Uso

### Requisitos
Solo un navegador moderno. Opcional: Node.js / Python para servidor local.

### Pasos
1. Clona el repo:
   ```bash
   git clone https://github.com/FcoINF/Portafolio.git
   cd Portafolio
   ```
2. Abre `index.html` o levanta servidor:
   ```bash
   npx serve .
   ```
3. Edita al gusto y recarga.

### Deploy recomendado

| Plataforma | Comando / Acción |
|---|---|
| **GitHub Pages** | Settings → Pages → Deploy from branch `main` / root |
| **Netlify** | Drag & drop carpeta o `netlify deploy` |
| **Vercel** | `vercel --prod` o importar repo |

No requiere configuración de build.

## 🎨 Personalización

Edita variables en `styles.css:2`:
```css
:root {
  --bg-primary: #1a1a2e;
  --accent: #10b981;
  /* ... */
}
```
Y colores de Tailwind en `index.html:20`:
```js
tailwind.config = { theme: { extend: { colors: { 'accent': '#10b981' } } } }
```

Textos, links y porcentajes del stack se editan directamente en `index.html` (ej. progreso en `style="width: 75%"`).

## 📬 Formulario de Contacto

Funciona sin backend vía **[FormSubmit](https://formsubmit.co/)**:

- `action="https://formsubmit.co/fmolina.inf@gmail.com"` en `index.html:557`
- Envío AJAX a `https://formsubmit.co/ajax/fmolina.inf@gmail.com` en `script.js:118`
- Campos: `nombre`, `email`, `asunto`, `mensaje` + hidden `_captcha=false`, `_template=table`, `_autoresponse`
- Estados: `Enviando...` → éxito (verde) / error (rojo) con auto-hide 6s (`script.js:127`)

> Para usar tu propio email, reemplaza `fmolina.inf@gmail.com` en `index.html:557` y `script.js:118`.

## 🗺 Roadmap

- [ ] Añadir más proyectos con enlaces y demos
- [ ] Modo claro / toggle tema
- [ ] Internacionalización (ES / EN)
- [ ] Optimizar imágenes y añadir Open Graph
- [ ] Migrar a Vite + componentes si el proyecto crece

## 📮 Contacto

**Francisco Molina** — Ingeniería en Informática, Duoc UC (3er semestre)

- GitHub: [@FcoINF](https://github.com/FcoINF)
- LinkedIn: [francisco-m-536795332](https://www.linkedin.com/in/francisco-m-536795332/)
- Email: [fmolina.inf@gmail.com](mailto:fmolina.inf@gmail.com)
- Portfolio: `fm.dev` (dominio en navbar `index.html:44`)

¿Tienes un proyecto en mente? Disponible para freelance, prácticas profesionales y colaboraciones — vía formulario en `#contacto`.

## 📄 Licencia

MIT — libre para usar como base para tu propio portfolio. Se agradece atribución.

---

<p align="center"><i>Built with HTML + Tailwind CSS · © <span id="year">2026</span> Francisco Molina</i></p>
