---
# --- CAMPOS OBLIGATORIOS ---
order: 1                               # (number) Orden numérico de prioridad/aparición en la lista
category: "Backend & Fullstack"        # (string) Categoría principal (ej: "Backend & Fullstack", "SaaS Core", "AI Search")
tag: "FastAPI + Astro"                # (string) Tag superior o resumen de tecnología (ej: "FastAPI + Astro", "2024 · Production")
title: "Nombre del Proyecto"           # (string) Título principal del proyecto
description: "Descripción corta y concisa del proyecto que aparecerá en las cards de la landing." # (string)
tags:                                 # (string[]) Lista de badges de tecnologías secundarias/stack
  - "FastAPI"
  - "Astro 5"
  - "Tailwind CSS v4"
  - "PostgreSQL"
  - "Docker"
color: "indigo"                       # (enum: "indigo" | "violet" | "slate" | "emerald") Color temático
featured: true                        # (boolean) `true` para destacar en tamaño completo en la grilla

# --- CAMPOS OPCIONALES ---
backgroundImg: "/projects/mi-hero.png"# (string, opcional) Ruta a la imagen de fondo hero del proyecto
links:                                # (array, opcional) Enlaces a repositorios, demos o documentación
  - label: "Ver Código"
    href: "https://github.com/usuario/repo"
    variant: "solid"                  # (enum: "solid" | "outline") Estilo del botón
  - label: "Ver Documentación"
    href: "https://github.com/usuario/repo/tree/main/docs"
    variant: "outline"
---

Descripción inicial en texto plano o negrita sobre el propósito, solución general y arquitectura clave del proyecto.

## Stack Tecnológico

### Backend / API

| Tecnología | Versión | Rol / Descripción |
| :--- | :--- | :--- |
| **Tecnología A** | v1.0 | Descripción clara de la responsabilidad del componente |
| **Tecnología B** | v2.0 | Base de datos / ORM / Autenticación |

### Frontend & Cliente

| Tecnología | Versión | Rol / Descripción |
| :--- | :--- | :--- |
| **Astro** | v5.x | Renderizado estático y arquitectura modular de componentes |
| **Tailwind CSS** | v4.x | Estilizado utility-first con variables semánticas |

## Arquitectura & Decisiones Técnicas

Explicación detallada de decisiones técnicas, arquitectura de componentes, eventos del DOM o flujo de datos.

```text
ComponenteA ──(evento:disparado)──▶ ComponenteB ──▶ API Endpoint