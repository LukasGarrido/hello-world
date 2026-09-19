---
order: 1
category: "Backend & Fullstack"
tag: "FastAPI + Astro"
title: "Level Works"
description: "Sistema de gestión y reserva para autolavados basado en una arquitectura desacoplada: API-first asíncrona con FastAPI y cliente estático interactivo en Astro."
tags: ["FastAPI", "Astro 5", "Tailwind CSS v4", "PostgreSQL", "Docker", "TypeScript"]
color: "indigo"
featured: true
backgroundImg: "/public/projects/levelWorksHero.png"
links:
  - label: "Ver Código"
    href: "https://github.com/LukasGarrido/LevelWorks"
    variant: "solid"
  - label: "Documentación API"
    href: "http://localhost:8000/docs"
    variant: "outline"
---

Level Works es un sistema de gestión y reservas optimizado para negocios de autolavado. Está desarrollado bajo una **arquitectura desacoplada**: un backend API-first construido con FastAPI y un frontend independiente construido con Astro (sin frameworks de UI pesados), comunicados vía REST/JSON.

---

## Stack Tecnológico

### Backend (API)
* **FastAPI 0.110+ (Python 3.12):** Framework backend asíncrono de alto rendimiento expuesto como API JSON pura bajo `/api/v1`.
* **SQLAlchemy 2.0+ & PostgreSQL 16:** ORM asíncrono y base de datos relacional principal para producción.
* **Pydantic 2.x:** Contratos de entrada/salida tipados (*schemas*) para cada endpoint.
* **Seguridad & Auth:** Emisión y validación de tokens JWT (`python-jose`) y hashing de contraseñas con Bcrypt.
* **SQLAdmin 0.17+ & fastapi-storages:** Panel de administración integrado (SSR interno) para gestión de servicios, reservas y carga de imágenes.

### Frontend (Astro Client)
* **Astro 5.x:** Framework frontend con compilación estática pura (`output: 'static'`). Sin islas ni frameworks UI — la interactividad se maneja con `<script>` nativos.
* **Tailwind CSS 4.x:** Integrado vía `@tailwindcss/vite` con soporte de utilidades de animación (`tw-animate-css`).
* **TypeScript (Strict):** Cliente API tipado (`lib/api.ts` y `lib/types.ts`).

### Infraestructura & Docker
* **Docker & Docker Compose v2+:** Contenedorización y orquestación de servicios independientes (Backend, Frontend y PostgreSQL).
* **Nginx Alpine:** Servidor web para producción que entrega el *build* estático de Astro.

---

## Arquitectura del Frontend

El cliente frontend funciona sin frameworks de UI (React/Vue). El estado del *wizard* de reserva se comparte de forma desacoplada entre componentes mediante eventos del DOM (`CustomEvents`):

```text
ServiceSelect ──(service:selected)──▶ DatePicker ──(date:selected)──▶ TimeSlots ──(slot:selected)──▶ ReservationForm