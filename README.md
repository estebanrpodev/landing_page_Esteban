# Landing Page — Esteban Montoya Restrepo

Portafolio profesional de una sola página (SPA) para un perfil Junior Full Stack. Diseño oscuro "cyber-minimalista" con acentos en verde esmeralda, navegación suave entre secciones y totalmente responsivo (Mobile-First).

## Demo

Puedes ejecutar el proyecto localmente con los pasos de [Instalación](#instalación).

## Tecnologías

- **React 19** con componentes funcionales y Hooks (`useState`, `useEffect`).
- **Vite** como bundler y servidor de desarrollo.
- **Tailwind CSS v4** mediante `@tailwindcss/vite`.
- **lucide-react** para la iconografía.
- **JavaScript (ES Modules)**.

## Características

- Navbar fija con efecto glass al hacer scroll y menú móvil.
- Smooth scroll hacia las secciones: Inicio, Sobre mí, Habilidades, Proyectos, Formación y Contacto.
- Fondo con efecto ambient glow (esferas verdes difuminadas).
- Hero con badge animado "Disponible para nuevos retos", foto de perfil circular y botones de acción.
- Sección Sobre mí con datos académicos y fortalezas.
- Stack tecnológico organizado en Frontend, Backend & DB y Herramientas.
- Proyectos destacados con imagen, etiquetas de tecnologías, descripción y enlace a GitHub.
- Línea de tiempo de formación académica.
- Sección de contacto con enlaces `mailto:` y `tel:`.
- Transiciones suaves, estados hover y soporte para `prefers-reduced-motion`.

## Estructura del proyecto

```text
.
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── profile.png
│   │   ├── project-1-placeholder.svg
│   │   └── project-2-placeholder.svg
│   ├── components/
│   │   ├── About.jsx
│   │   ├── AmbientGlow.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── GithubIcon.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── Skills.jsx
│   │   └── Timeline.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Instalación

Requisitos: Node.js 18 o superior y npm.

```bash
git clone https://github.com/estebanrpodev/landing_page_Esteban.git
cd landing_page_Esteban
npm install
```

## Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo con HMR
npm run build    # Build de producción en dist/
npm run preview  # Previsualiza el build de producción
npm run lint     # Análisis estático con oxlint
```

## Personalización

- **Foto de perfil:** reemplaza `src/assets/profile.png` manteniendo el mismo nombre.
- **Imágenes de proyectos:** reemplaza los SVG en `src/assets/` o actualiza las importaciones en `src/components/Projects.jsx`.
- **Proyectos:** edita el arreglo `projects` en `src/components/Projects.jsx`.
- **Habilidades:** edita el arreglo `groups` en `src/components/Skills.jsx`.
- **Formación:** edita el arreglo `items` en `src/components/Timeline.jsx`.
- **Contacto:** actualiza el correo y teléfono en `src/components/Contact.jsx` y `src/components/Footer.jsx`.

## Contacto

- Correo: [estebanrpo2008@gmail.com](mailto:estebanrpo2008@gmail.com)
- Teléfono: [+57 313-568-5882](tel:+573135685882)
- GitHub: [github.com/estebanrpodev](https://github.com/estebanrpodev)
