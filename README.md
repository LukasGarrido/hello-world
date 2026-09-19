# Portafolio Personal - Landing Page & Casos de Estudio

Portafolio personal y landing page para desarrollador construido con **Astro 5**, priorizando una arquitectura estática, rápida y ligera (Arquitectura de Islas) con renderizado estático de rutas dinámicas para páginas de detalle de proyectos (`/proyectos/[id]`).

## Stack Tecnológico

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
│   │   │   ├── Header.astro        # Navegación principal con ThemeToggle
│   │   │   └── Footer.astro        # Pie de página y derechos de autor
│   │   ├── sections/               # Secciones principales de la landing page
│   │   │   ├── Hero.astro          # Presentación principal
│   │   │   ├── Education.astro     # Formación académica
│   │   │   ├── GithubSection.astro # Integración/actividad de GitHub
│   │   │   ├── Projects.astro      # Galería de proyectos (consume Content Collections)
│   │   │   ├── Stack.astro         # Tecnologías, herramientas y habilidades
│   │   │   ├── Experience.astro    # Historial de experiencia laboral
│   │   │   └── ContactCta.astro    # Llamada a la acción / información de contacto
│   │   └── ui/                     # Componentes atómicos reutilizables
│   │       ├── Badge.astro         # Etiqueta visual para categorías/tecnologías
│   │       ├── Button.astro        # Botones con variantes de estilo
│   │       ├── ProjectCard.astro   # Tarjeta individual de proyecto
│   │       ├── GitHubActivity.astro# Widget de actividad de GitHub
│   │       └── ThemeToggle.astro   # Control para alternar modo claro/oscuro
│   ├── content/                    # Astro Content Collections (Astro 5)
│   │   ├── config.ts               # Esquema Zod y loader `glob` para proyectos
│   │   └── projects/               # Entradas de proyectos en formato Markdown
│   │       └── levelworks.md
│   ├── layouts/
│   │   └── Layout.astro            # Plantilla HTML base (script Anti-FOUC y scroll observer)
│   ├── pages/                      # Rutas basadas en archivos (file-based routing)
│   │   ├── index.astro             # Página principal de inicio (/)
│   │   ├── 404.astro               # Página de error 404 personalizada
│   │   └── proyectos/
│   │       └── [id].astro         # Vista de detalle dinámica para caso de estudio (/proyectos/[id])
│   └── styles/
│       └── global.css              # Variables OKLCH, tokens de tema Tailwind v4 y utilidades
├── public/                         # Recursos estáticos
│   ├── Google's Dinosaur.png
│   ├── Google's Dinosaur404.png
│   ├── Google's DinosaurContact.png
│   └── projects/
│       └── LevelWorksHero.png      # Imagen de cabecera para proyectos
├── docker/                         # Configuración de entornos Docker
│   ├── Dockerfile                  # Receta Producción (Build Node 22 -> Nginx Alpine)
│   └── Dockerfile.dev              # Receta Desarrollo (Node 22-alpine con hot-reload)
├── .env                            # Variables de entorno locales
├── .dockerignore                   # Archivos excluidos del contexto Docker
├── .gitignore
├── AGENTS.md                       # Contexto y reglas para asistentes de IA
├── astro.config.mjs                # Configuración de Astro (plugin Vite para Tailwind v4)
├── docker-compose.yml              # Orquestación de desarrollo
├── package.json                    # Dependencias y scripts del proyecto
├── tailwind.config.mjs             # Tokens adicionales de Tailwind CSS
└── tsconfig.json                   # Configuración estricta de TypeScript
```

## Arquitectura de Rutas y Componentes

```text
Ruta Principal (/)
Layout.astro (Plantilla base + Anti-FOUC + IntersectionObserver)
└── index.astro
    ├── Header.astro
    │   └── ThemeToggle.astro
    ├── Hero.astro
    ├── Education.astro
    ├── GithubSection.astro
    │   └── GitHubActivity.astro
    ├── Projects.astro
    │   └── ProjectCard.astro ──▶ [Ver detalle]
    ├── Stack.astro
    │   └── Badge.astro
    ├── Experience.astro
    ├── ContactCta.astro
    │   └── Button.astro
    └── Footer.astro

Ruta de Detalle (/proyectos/[id])
Layout.astro
└── proyectos/[id].astro
    ├── Header.astro
    ├── Header del Proyecto (Imagen Pixel Art + Metadatos + Links Externos)
    ├── <Content /> (Renderizado de Markdown con @tailwindcss/typography)
    └── Footer.astro
```

## Astro 5 Content Collections

Los proyectos están gestionados a través de **Astro Content Collections** en `src/content/config.ts`, utilizando el nuevo loader `glob` de Astro 5:

```typescript
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    order: z.number(),
    category: z.string(),
    tag: z.string(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    color: z.enum(['indigo', 'violet', 'slate']).default('indigo'),
    featured: z.boolean().default(false),
    backgroundImg: z.string().optional(),
    links: z.array(z.object({
      label: z.string(),
      href: z.string(),
      variant: z.enum(['solid', 'outline']).default('outline'),
    })).optional(),
    chart: z.object({
      label: z.string(),
      liveLabel: z.string(),
      values: z.array(z.number()),
    }).optional(),
    code: z.string().optional(),
    npm: z.object({
      install: z.string(),
      stars: z.string(),
    }).optional(),
  }),
});
```

Cada archivo `.md` dentro de `src/content/projects/` genera automáticamente su tarjeta en la página principal y su página individual estática en `/proyectos/<id>`.

## Diseño & Sistema de Tokens (Tailwind CSS v4)

- **Modo Claro (Warm Cream):** Basado en tonos neutros cálidos (`oklch(0.965 0.006 75)`).
- **Modo Oscuro (Warm Graphite):** Basado en tonos grafito cálidos (`oklch(0.2 0.008 60)`).
- **Prevención de FOUC:** Script optimizado e inyectado en el `<head>` de `Layout.astro` que detecta la preferencia guardada en `localStorage` o del sistema operativo antes de renderizar la página.
- **Tipografía:** `DM Sans` para texto de cuerpo e interfaz y `Space Grotesk` para títulos principales (`font-display`).
- **Animaciones al Scroll:** Animación `.fade-on-scroll` controlada por `IntersectionObserver` registrado con soporte para transiciones de página (`astro:page-load`).

## Entornos Docker

### Desarrollo
```bash
docker compose up
# Servidor de desarrollo accesible en http://localhost:4321 con Hot Reloading
```
- Imagen base: `node:22-alpine`
- Montaje de volúmenes para actualización automática de código
- Variable `CHOKIDAR_USEPOLLING=true` configurada para compatibilidad en Windows / WSL

### Producción (Multi-stage Build)
```bash
docker build -f docker/Dockerfile -t portfolio .
# Genera imagen optimizada con Nginx Alpine sirviendo los estáticos en el puerto 85
```
- **Stage 1 (Build):** `node:22-alpine` -> ejecuta `npm run build` para generar `/app/dist`.
- **Stage 2 (Runtime):** `nginx:alpine` -> sirve los archivos compilados en `/usr/share/nginx/html`.

## Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo en http://localhost:4321
npm run build    # Compila el sitio estático optimizado en la carpeta /dist
npm run preview  # Previsualiza el build de producción localmente
```
