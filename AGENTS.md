```markdown
# AI Context & Coding Rules (agents.md)

Este archivo sirve como contexto y guía de instrucciones (system prompt) para asistentes de inteligencia artificial (como Cursor, GitHub Copilot, ChatGPT) que interactúen con este repositorio. 

Al sugerir, refactorizar o escribir código para este proyecto, **DEBES** adherirte a las siguientes reglas:

## 1. Contexto del Proyecto
- **Propósito:** Portfolio personal / Landing page para desarrollador.
- **Framework Core:** Astro. El objetivo principal es mantener la web lo más estática, rápida y ligera posible (Arquitectura de Islas).
- **Idioma:** [Especificar idioma preferido para el contenido, ej: Español/Inglés].

## 2. Reglas de Desarrollo
- **Zero JavaScript Client-side:** Prioriza el uso exclusivo de componentes `.astro` con HTML y CSS. Usa JavaScript del lado del cliente ÚNICAMENTE si es estrictamente necesario para interactividad (ej. menú hamburguesa, toggles).
- **Estilizado:** 
  - Usa **Tailwind CSS** para todo el estilizado. No escribas CSS puro ni uses módulos CSS a menos que sea para animaciones que Tailwind no soporte nativamente.
  - Sigue una filosofía de diseño "Mobile First".
- **Gestión de Contenido:** Los proyectos y la información estática deben estructurarse usando **Astro Content Collections** con archivos `.md` o `.mdx`.
- **Rendimiento Visual:** 
  - Usa la etiqueta nativa `<Image />` o `<Picture />` de `astro:assets` en lugar del tag tradicional `<img>` para garantizar una correcta optimización y uso de WebP/AVIF.
  - Para iconos, utiliza SVG puros o la librería `astro-icon`.
- **Código Limpio:** Mantén la semántica HTML (`<article>`, `<section>`, `<nav>`, `<main>`) y asegúrate de aplicar atributos ARIA cuando sea relevante para la accesibilidad (a11y).