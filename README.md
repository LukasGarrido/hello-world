# Portafolio Personal tipo Landing Page

## Contexto

Desarrollo de mi portafolio como desarrollador backend

## Stack Tecnologico y Versiones

- **Entorno de Ejecucion:** Node.js (v22-alpine via Docker)
- **Framework Core:** Astro (^5.8.0)
- **Estilizado:** Tailwind CSS (^3.4.17)
- **Integracion de Estilos:** @astrojs/tailwind (^6.0.2)
- **Contenido (Planeado):** Markdown / MDX mediante Astro Content Collections.
- **Despliegue:** Docker y Docker Compose con Nginx (Multi-stage build).

## Estructura de Directorios

```text
hello-world/
├── src/                        # Codigo fuente de la aplicacion
│   ├── components/             # Componentes UI reutilizables
│   │   ├── Badge.astro
│   │   ├── Footer.astro
│   │   ├── GitHubActivity.astro
│   │   ├── Header.astro
│   │   └── ProjectCard.astro
│   ├── content/                # Colecciones de contenido (Astro Content Collections)
│   │   ├── config.ts           # Esquemas y configuracion
│   │   └── projects/           # Entradas de proyectos
│   │       └── levelworks.md
│   ├── layouts/                # Componentes de diseno base
│   │   └── Layout.astro        # Plantilla HTML principal
│   ├── pages/                  # Rutas de la aplicacion (file-based routing)
│   │   └── index.astro         # Pagina de inicio
│   └── styles/                 # Hojas de estilo globales
├── .env                        # Variables de entorno locales
├── .dockerignore               # Archivos excluidos del contexto de Docker
├── .gitignore                  # Archivos ignorados por Git
├── AGENTS.md                   # Contexto y reglas para IAs
├── astro.config.mjs            # Configuracion principal de Astro y plugins
├── docker-compose.yml          # Orquestacion de contenedores para desarrollo
├── Dockerfile                  # Receta de Docker para el entorno de produccion (Nginx)
├── Dockerfile.dev              # Receta de Docker para el entorno de desarrollo (Node)
├── package.json                # Dependencias y scripts del proyecto
├── tailwind.config.mjs         # Configuracion del sistema de diseno Tailwind
└── tsconfig.json               # Configuracion estricta de TypeScript para Astro
```
