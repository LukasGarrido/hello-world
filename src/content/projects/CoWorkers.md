---
order: 2
category: "Frontend & Web"
tag: "Astro + Tailwind"
title: "Coworkers.cl"
description: "Landing corporativa para empresa de software en Concepción: sitio estático modular orientado a conversión, SEO y visibilidad en asistentes de IA."
tags: ["Astro", "Tailwind CSS v4", "TypeScript", "Docker", "Vercel"]
color: "emerald"
featured: false
backgroundImg: "/projects/CoWorkersHero.png"
links:
  - label: "Ver Código"
    href: "https://github.com/CoWorkersSPA/CoWorkers"
    variant: "solid"
  - label: "Ver Sitio"
    href: "https://co-workers-gules.vercel.app"
    variant: "outline"
---
# Coworkers.cl

**Landing corporativa de empresa de software para pymes.**

![Astro](https://img.shields.io/badge/Astro-7.x-BC52EE?logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.x-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-22.12+-5FA04E?logo=nodedotjs&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?logo=docker&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?logo=vercel&logoColor=white)

Es el sitio público de la empresa: presenta sus dos líneas principales (**Servicios** a medida y **Mesón**, la tablet para el mostrador), explica su flujo metodológico de trabajo y canaliza el contacto hacia agendamientos de reuniones iniciales. Está desarrollado como un sitio **estático con Astro**, sin frameworks de UI.

---

## Contenido

- [Stack tecnológico](#stack-tecnológico)
- [Arquitectura general](#arquitectura-general)
- [Arquitectura del frontend](#arquitectura-del-frontend)

---

## Stack tecnológico

### Frontend (Astro Client)

| Tecnología | Versión | Rol |
|---|---|---|
| **Astro** | 7.x (Node 22.12+) | Generador de sitio estático; cada sección es un componente `.astro` sin JavaScript de cliente innecesario |
| **Tailwind CSS** | 4.x | Estilos *utility-first* integrados vía `@tailwindcss/vite`, con animaciones mediante `tw-animate-css` |
| **TypeScript** | 6.x | Tipado estricto de datos y props de componentes, validado con `@astrojs/check` |
| **@astrojs/sitemap** | 3.x | Generación automática del `sitemap` para indexación en buscadores |

### Infraestructura y SEO

| Tecnología | Versión | Rol |
|---|---|---|
| **Docker & Docker Compose** | v2+ | Entorno de desarrollo reproducible con `Dockerfile.dev` y volúmenes montados para *hot-reload* |
| **Vercel** | — | Despliegue estático automatizado de alto rendimiento |
| **robots.txt & llms.txt** | — | Reglas de rastreo para buscadores tradicionales y resumen estructurado para asistentes de IA |

---

## Arquitectura general

```mermaid
flowchart LR
    U[Visitante] --> V[Vercel<br/>Astro estático]
    V --> P[index.astro]
    P --> L[Layout.astro<br/>Header + Footer]
    P --> S[Sections<br/>7 bloques de contenido]
    S -.-> C[CTA<br/>Agendar 30 min]