# Manual de Mantenimiento - Portafolio Abrinay

Este documento describe cómo realizar actualizaciones y mantener el sitio optimizado siguiendo la arquitectura de "Contenido Desacoplado".

## 1. Actualización de Contenido
Todo el texto, enlaces y configuración de servicios se encuentra en:
`content/siteContent.ts`

Para cambiar un texto, el reel o un enlace de red social, edite ese archivo. No es necesario tocar los componentes de React.

## 2. Gestión de Imágenes
- **Formatos:** Use preferiblemente `.webp` o `.avif` para mejor rendimiento.
- **Ubicación:** Las imágenes deben guardarse en `public/assets/` o `assets/`.
- **Optimización:** Antes de subir una imagen, pásela por una herramienta de compresión (ej. Squoosh o TinyPNG).
- **Atributos:** Al añadir nuevas imágenes en los componentes, asegúrese de incluir `loading="lazy"` (excepto en el Hero) y un `alt` descriptivo.

## 3. SEO y Metadatos
Si necesita cambiar el título global o la descripción para buscadores, edite:
- `index.html` (Meta tags básicos y OpenGraph).
- `components/Hero.tsx` (Contiene los datos estructurados JSON-LD en este proyecto).

## 4. Flujo de Desarrollo y Despliegue
- **Instalación:** `npm install`
- **Desarrollo:** `npm run dev`
- **Build de producción:** `npm run build`
- **Pruebas de QA:** `npx playwright test`

## 5. Estética "Brutalismo Cinemático"
El estilo visual se controla principalmente mediante:
- `index.html` (contiene el `<style>` global): Contiene las variables de color, el efecto de ruido (noise) y el gradiente de spotlight.
- Las animaciones utilizan transiciones de CSS puro para mantener el rendimiento. Para cambios en la velocidad de navegación, busque la variable `transitionDelay` en `App.tsx`.
