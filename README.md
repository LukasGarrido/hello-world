# Portafolio Personal - Landing Page

Portafolio personal - landing page construido con **Astro 5**, priorizando una arquitectura estática, rápida y ligera (Arquitectura de Islas) con renderizado estático de rutas dinámicas para páginas de detalle de proyectos (`/proyectos/[id]`).

## Stack

| Capa | Tecnología | Versión / Detalle |
|------|-----------|-------------------|
| **Entorno** | Node.js Alpine | `22-alpine` |
| **Framework Core** | Astro | `^5.8.0` (loader `glob` para Content Collections) |
| **Estilizado** | Tailwind CSS v4 | `^4.1.0` (integrado vía `@tailwindcss/vite`) |
| **Animaciones & FX** | tw-animate-css + IntersectionObserver | `^1.2.5` (clase de utilidad `.fade-on-scroll`) |
| **Tipografía** | Google Fonts | `DM Sans` (body) · `Space Grotesk` (headings) |
| **Despliegue Dev** | Docker + Docker Compose | Hot-reload con polling `CHOKIDAR` |
| **Despliegue Prod** | Docker Multi-stage + Nginx Alpine | Servidor web estático (puerto 85) |

## Estructura de Directorios

```text
hello-world/
├── src/
│   ├── components/                 # Componentes UI organizados por responsabilidad
│   │   ├── layout/                 # Estructura global de la interfaz
│   │   │   ├── Header.astro        # Barra de navegación flotante dinámica y enlaces de contacto
│   │   │   └── Footer.astro        # Pie de página y enlaces sociales (LinkedIn, GitHub, Gmail)
│   │   ├── sections/               # Secciones principales de la landing page
│   │   │   ├── Hero.astro          # Presentación principal con animación canvas de red y descarga de CV
│   │   │   ├── Projects.astro      # Galería de proyectos con filtros dinámicos (consume Content Collections)
│   │   │   ├── Stack.astro         # Marquee infinito de tecnologías y herramientas
│   │   │   ├── Experience.astro    # Historial de experiencia laboral y ayudantías con stack icons
│   │   │   ├── Workflow.astro      # Metodología de trabajo interactiva por áreas
│   │   │   └── Education.astro     # Formación académica, certificaciones e idiomas
│   │   └── ui/                     # Componentes atómicos reutilizables
│   │       └── Button.astro        # Botones con variantes de estilo (solid, outline, ghost)
│   ├── content/                    # Astro Content Collections (Astro 5)
│   │   ├── config.ts               # Esquema Zod y loader `glob` para proyectos
│   │   └── projects/               # Entradas de proyectos en formato Markdown
│   │       ├── CoWorkers.md
│   │       └── levelworks.md
│   ├── layouts/
│   │   └── Layout.astro            # Plantilla HTML base (script Anti-FOUC, splash screen y scroll observer)
│   ├── pages/                      # Rutas basadas en archivos (file-based routing)
│   │   ├── index.astro             # Página principal de inicio (/)
│   │   ├── 404.astro               # Página de error 404 personalizada
│   │   └── proyectos/
│   │       └── [id].astro         # Vista de detalle dinámica (/proyectos/[id])
│   └── styles/
│       └── global.css              # Variables OKLCH, tokens de tema Tailwind v4 y utilidades
├── public/                         # Recursos estáticos
│   ├── cv_LukasGarrido.pdf         # Currículum descargable
│   ├── projects/                   # Imágenes de cabecera de proyectos
│   │   ├── CoWorkersHero.png
│   │   └── LevelWorksHero.png
│   └── Stack/                      # Iconos vectoriales de tecnologías (Astro, Python, Docker, etc.)
├── docker/                         # Configuración de entornos Docker
│   ├── Dockerfile                  # Receta Producción (Build Node 22 -> Nginx Alpine)
│   └── Dockerfile.dev              # Receta Desarrollo (Node 22-alpine con hot-reload)
├── .env                            # Variables de entorno locales
├── .dockerignore                   # Archivos excluidos del contexto Docker
├── .gitignore
├── AGENTS.md                       # Contexto y reglas para asistentes de IA
├── astro.config.mjs                # Configuración de Astro (plugin Vite para Tailwind v4)
├── docker-compose.yml              # Orquestación de desarrollo
├── LICENSE                         # Licencia MIT
├── package.json                    # Dependencias y scripts del proyecto
├── tailwind.config.mjs             # Tokens adicionales de Tailwind CSS
└── tsconfig.json                   # Configuración estricta de TypeScript
```

## Arquitectura de Rutas y Componentes

```text
Ruta Principal (/)
Layout.astro (Plantilla base + Anti-FOUC + SplashScreen + IntersectionObserver)
└── index.astro
    ├── Header.astro (Navegación interactiva + Redes sociales)
    ├── Hero.astro (Canvas interactivo + Descarga CV)
    ├── Projects.astro (Filtros por categoría + Content Collections ──▶ [Detalles])
    ├── Stack.astro (Carrusel continuo / Marquee de herramientas)
    ├── Experience.astro (Timeline interactivo con badges de tecnologías)
    ├── Workflow.astro (Pestañas interactivas de metodología)
    ├── Education.astro (Formación académica y certificaciones)
    └── Footer.astro (Enlaces directos a LinkedIn, GitHub y Gmail)

Ruta de Detalle (/proyectos/[id])
Layout.astro
└── proyectos/[id].astro
    ├── Header.astro
    ├── Hero / Cabecera (Imagen + Metadatos + Tags + Links externos)
    ├── <Content /> (Renderizado de Markdown con estilos prose)
    └── Footer.astro
```


