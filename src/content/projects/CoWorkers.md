---
order: 2
category: "Frontend & Web"
tag: "Astro + Tailwind"
title: "Coworkers.cl"
description: "Landing corporativa para empresa de software en Concepción: sitio estático modular orientado a conversión, SEO y visibilidad en asistentes de IA."
tags: ["Astro", "Tailwind CSS v4", "TypeScript", "Docker", "Vercel"]
color: "emerald"
featured: false
backgroundImg: "/projects/coworkersHero.png"
links:
  - label: "Ver Código"
    href: "https://github.com/CoWorkersSPA/CoWorkers"
    variant: "solid"
  - label: "Ver Sitio"
    href: "https://co-workers-gules.vercel.app"
    variant: "outline"
---

Landing corporativa de **Coworkers.cl**, empresa de desarrollo de software para pymes ubicada en Concepción, Chile. 

El sitio presenta sus dos líneas principales de negocio (**Servicios a medida** y **Mesón**, sistema de atención para mostrador), explica su flujo metodológico de trabajo y canaliza el contacto hacia agendamientos de reuniones iniciales. Está desarrollado como un sitio **estático puro en Astro**, libre de frameworks UI pesados y con arquitectura modular por secciones.

---

## Stack Tecnológico & Visibilidad

### Frontend & Build
* **Astro 7.x (Node 22.12+):** Generador de sitio estático donde cada sección es un componente `.astro` independiente sin JavaScript cliente innecesario.
* **Tailwind CSS 4.x:** Estilos *utility-first* integrados vía `@tailwindcss/vite`, complementados con animaciones de `tw-animate-css`.
* **TypeScript 6.x:** Tipado estricto de datos y props de componentes, validado mediante `@astrojs/check`.

### Infraestructura & SEO
* **Docker & Docker Compose:** Entorno de desarrollo aislado con `Dockerfile.dev` y volúmenes montados para *hot-reload*.
* **Vercel:** Despliegue estático automatizado de alto rendimiento.
* **Optimización IA & SEO:** Generación automática de `sitemap` (`@astrojs/sitemap`), metadatos `og:*` locales (`es_CL`) y archivos estáticos `robots.txt` y `llms.txt` estructurados para indexación por buscadores y asistentes de IA.

---

## Arquitectura de Componentes

La aplicación organiza sus componentes en tres capas según responsabilidad:

| Carpeta | Responsabilidad | Ejemplos |
| :--- | :--- | :--- |
| `layout/` | Envolventes globales de la página. | `Header.astro`, `Footer.astro` |
| `sections/` | Componentes aislados por cada bloque de la landing page. | `Hero.astro`, `TwoDoors.astro`, `Team.astro` |
| `ui/` | Piezas genéricas reutilizables instanciadas por props. | `Button.astro`, `Eyebrow.astro`, `Wordmark.astro` |

```text
Hero ──▶ PainFacts ──▶ TwoDoors ──▶ HowWeWork ──▶ Guarantees ──▶ Team ──▶ FinalCta