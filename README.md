# Portafolio Personal - Landing Page

Portfolio personal / Landing page construido con Astro, priorizando una arquitectura estática, rápida y ligera (Arquitectura de Islas).

## Stack Tecnológico

| Capa | Tecnología | Versión |
|------|-----------|---------|
| **Entorno** | Node.js Alpine | 22-alpine |
| **Framework Core** | Astro | ^5.8.0 |
| **Estilizado** | Tailwind CSS v4 | ^4.1.0 |
| **Plugin Vite** | @tailwindcss/vite | ^4.1.0 |
| **Animaciones** | tw-animate-css | ^1.2.5 |
| **Despliegue Dev** | Docker + Docker Compose | — |
| **Despliegue Prod** | Docker Multi-stage + Nginx Alpine | — |

## Estructura de Directorios

```text
hello-world/
├── src/
│   ├── components/                 # Componentes UI organizados por responsabilidad
│   │   ├── layout/                 # Estructura global de la página
│   │   │   ├── Header.astro        # Navegación principal con ThemeToggle
│   │   │   └── Footer.astro        # Pie de página
│   │   ├── sections/               # Secciones de la landing page (una por bloque)
│   │   │   ├── Hero.astro          # Sección de presentación principal
│   │   │   ├── Projects.astro      # Galería de proyectos (consume Content Collections)
│   │   │   ├── Experience.astro    # Historial de experiencia laboral
│   │   │   ├── Education.astro     # Formación académica
│   │   │   ├── Stack.astro         # Tecnologías y herramientas
│   │   │   ├── GithubSection.astro # Actividad pública en GitHub
│   │   │   └── ContactCta.astro    # Call-to-action de contacto
│   │   └── ui/                     # Átomos de UI reutilizables
│   │       ├── Badge.astro         # Etiqueta de categoría / tecnología
│   │       ├── Button.astro        # Botón con variantes solid/outline
│   │       ├── ProjectCard.astro   # Tarjeta individual de proyecto
│   │       ├── GitHubActivity.astro# Widget de actividad de GitHub (API)
│   │       └── ThemeToggle.astro   # Toggle dark/light mode (JS mínimo)
│   ├── content/                    # Astro Content Collections
│   │   ├── config.ts               # Esquemas Zod para colecciones
│   │   └── projects/               # Entradas de proyectos en Markdown
│   │       └── levelworks.md
│   ├── layouts/
│   │   └── Layout.astro            # Plantilla HTML base (head, fuentes, meta)
│   ├── pages/                      # Rutas file-based de Astro
│   │   ├── index.astro             # Página de inicio (/)
│   │   └── 404.astro               # Página de error personalizada
│   └── styles/
│       └── global.css              # Variables CSS, fuentes y estilos base
├── public/                         # Assets estáticos (servidos tal cual)
│   ├── my.png                      # Foto de perfil
│   ├── Ceala.png                   # Logo proyecto Ceala
│   └── usm.png                     # Logo USM
├── docker/                         # Recetas Docker separadas por entorno
│   ├── Dockerfile                  # Producción: build Node → Nginx Alpine (puerto 85)
│   └── Dockerfile.dev              # Desarrollo: Node 22-alpine con hot-reload (puerto 4321)
├── .env                            # Variables de entorno locales (no versionado)
├── .dockerignore                   # Archivos excluidos del contexto Docker
├── .gitignore
├── AGENTS.md                       # Contexto y reglas para asistentes de IA
├── astro.config.mjs                # Config Astro: plugin Tailwind v4 via Vite, host 0.0.0.0
├── docker-compose.yml              # Orquestación dev: volúmenes, hot-reload, CHOKIDAR polling
├── package.json                    # Dependencias y scripts (dev / build / preview)
├── tailwind.config.mjs             # Design tokens: paleta light/dark, tipografías
└── tsconfig.json                   # TypeScript estricto para Astro
```

## Arquitectura de Componentes

```
Layout.astro (plantilla base)
└── index.astro (/)
    ├── Header.astro
    │   └── ThemeToggle.astro
    ├── Hero.astro
    ├── Projects.astro
    │   └── ProjectCard.astro  ← datos de src/content/projects/*.md
    │       └── Badge.astro
    ├── Experience.astro
    ├── Education.astro
    ├── Stack.astro
    │   └── Badge.astro
    ├── GithubSection.astro
    │   └── GitHubActivity.astro
    ├── ContactCta.astro
    │   └── Button.astro
    └── Footer.astro
```

## Diseño / Design System

- **Modo oscuro/claro:** gestionado con la clase `dark` en el `<html>` (Tailwind `darkMode: 'class'`).
- **Paleta light:** `primary #4F46E5`, `bg #F8FAFC`, `surface #FFFFFF`.
- **Paleta dark:** `primary #6366F1`, `secondary #06B6D4`, `tertiary #10B981`, `bg #050505`.
- **Tipografías:** `Geist` (headings) · `Inter` (body) · `JetBrains Mono` (código).
- **Animaciones:** `tw-animate-css` como extensión de utilidades Tailwind.


## Entornos Docker

### Desarrollo
```bash
docker compose up
# → http://localhost:4321 con hot-reload
```
- Imagen: `node:22-alpine`
- Volúmenes con bind mount para hot-reload
- `CHOKIDAR_USEPOLLING=true` para compatibilidad Windows/WSL

### Producción (multi-stage build)
```bash
docker build -f docker/Dockerfile -t portfolio .
# → Nginx Alpine sirviendo los estáticos en el puerto 85
```
- **Stage 1 (build):** `node:22-alpine` → `npm run build` → `/app/dist`
- **Stage 2 (runtime):** `nginx:alpine` → sirve `/usr/share/nginx/html`

## Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo en localhost:4321
npm run build    # Genera los estáticos en /dist
npm run preview  # Previsualiza el build de producción
```
