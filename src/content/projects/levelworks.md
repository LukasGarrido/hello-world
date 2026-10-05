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
# Level Works

**Plataforma de gestión y reservas para servicios de autolavado.**

**LevelWorks** nació como un proyecto personal para dominar el desarrollo *fullstack* moderno. Empezó como un monolito sencillo con FastAPI y evolucionó hacia una arquitectura completamente desacoplada para ganar velocidad, escalabilidad y una mejor experiencia de usuario.

---

## ¿Cómo está construido?

- **Backend:** Desarrollado como una API asíncrona independiente con **FastAPI** y **Python**, utilizando **PostgreSQL** y **SQLAlchemy** para la persistencia de datos. Incluye autenticación segura con JWT y un panel de administración integrado.
- **Frontend:** Construido con **Astro** y **Tailwind CSS**. Se optó por una estructura ligera y rápida, comunicándose con el backend mediante peticiones REST limpias.
- **Infraestructura:** Todo el entorno está empaquetado y orquestado mediante **Docker Compose** para asegurar un despliegue fluido.

---

## El reto y la solución

Uno de los mayores desafíos fue diseñar el flujo de reserva (selección de servicio, fecha, horario y formulario final) de forma fluida y sin usar frameworks pesados de JavaScript. 

Para lograrlo, implementé un patrón basado en **Eventos nativos del DOM (`CustomEvents`)**, permitiendo que los componentes se comuniquen entre sí de manera totalmente desacoplada y reactiva:

```mermaid
flowchart LR
    A[Servicio] -->|"service:selected"| B[Fecha]
    B -->|"date:selected"| C[Horario]
    C -->|"slot:selected"| D[Formulario]