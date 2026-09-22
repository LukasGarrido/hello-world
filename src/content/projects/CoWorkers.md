---
order: 2
category: "Frontend & Web"
tag: "Astro + Tailwind"
title: "Coworkers.cl"
description: "Landing page corporativa desarrollada en Astro para startup de software en Concepción. Sitio estático y modular enfocado en la conversión de clientes."
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

Soy socio de **CoWorkers**, una _startup_ enfocada en desarrollo web. Dado que el equipo está compuesto por programadores, nos dividimos las tareas de marketing entre todos, y a mí me tocó asumir el desarrollo de nuestra _landing page_ junto a otro socio. Apostamos por **Astro** por lo ágil que es y lo bien que se adapta a proyectos enfocados en rendimiento y estructura de _frontend_.

El sitio funciona como la carta de presentación de la agencia: muestra lo que hacemos en nuestras dos verticales principales (**Servicios a medida** y **Mesón**, un sistema en tablet para atención al público), explica cómo trabajamos y guía a las personas a agendar una llamada. Lo desarrollamos de forma 100% estática con Astro, sin añadir _frameworks_ de UI pesados para garantizar la mejor velocidad de carga posible.


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