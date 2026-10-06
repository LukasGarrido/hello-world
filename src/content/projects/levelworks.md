---
order: 1
category: "Fullstack"
tag: "FastAPI + Astro"
title: "Level Works"
description: "Sistema de gestión y reserva para autolavados basado en una arquitectura desacoplada: API-first asíncrona con FastAPI y cliente estático interactivo en Astro."
tags: ["FastAPI", "Astro 5", "Tailwind CSS v4", "PostgreSQL", "Docker", "TypeScript"]
color: "indigo"
featured: true
backgroundImg: "/projects/LevelWorksHero.png"
links:
  - label: "Ver Código"
    href: "https://github.com/LukasGarrido/LevelWorks"
    variant: "solid"
  - label: "Ver Documentación"
    href: "https://github.com/LukasGarrido/LevelWorks/tree/master/docs"
    variant: "outline"
---
**Plataforma de gestión y reservas para servicios de autolavado.**

LevelWorks es un proyecto personal que me ayudó a comprender el flujo completo de un desarrollo Fullstack (Backend - Frontend).

¿Cómo está construido?

- **Backend:** Desarrollado como una API asíncrona independiente con FastAPI y Python, usando PostgreSQL y SQLAlchemy para la persistencia de datos. Incluye autenticación segura mediante JWT y un panel de administración integrado.
    
- **Frontend:** Construido con Astro y Tailwind CSS. Elegí estas tecnologías por su ligereza y velocidad, conectándolo con el backend a través de peticiones REST.
    
- **Infraestructura:** Todo el entorno está empaquetado y orquestado con Docker Compose.