# Portafolio Personal / Landing Page

## Contexto del Proyecto

Este proyecto es mi portafolio personal como desarrollador, construido con un enfoque minimalista. El objetivo principal es mantener la web lo más estática, rápida y ligera posible aprovechando la Arquitectura de Islas que ofrece Astro.

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
│   ├── layouts/                # Componentes de diseno base
│   │   └── Layout.astro        # Plantilla HTML principal
│   └── pages/                  # Rutas de la aplicacion (file-based routing)
│       └── index.astro         # Pagina de inicio
├── .env                        # Variables de entorno locales
├── .dockerignore               # Archivos excluidos del contexto de Docker
├── astro.config.mjs            # Configuracion principal de Astro y plugins
├── docker-compose.yml          # Orquestacion de contenedores para desarrollo
├── Dockerfile                  # Receta de Docker para el entorno de produccion (Nginx)
├── Dockerfile.dev              # Receta de Docker para el entorno de desarrollo (Node)
├── package.json                # Dependencias y scripts del proyecto
├── tailwind.config.mjs         # Configuracion del sistema de diseno Tailwind
└── tsconfig.json               # Configuracion estricta de TypeScript para Astro
```

## Instrucciones de Desarrollo

Para iniciar el entorno de desarrollo local, se requiere tener Docker instalado y ejecutandose. No es necesario instalar Node.js ni dependencias localmente.

1. Clonar el repositorio.
2. Ejecutar `docker compose up --build`.
3. Abrir el navegador en `http://localhost:4321`.

Los cambios realizados en el directorio `src/` se reflejaran inmediatamente en el navegador gracias al hot-reload configurado a traves del volumen de Docker.
