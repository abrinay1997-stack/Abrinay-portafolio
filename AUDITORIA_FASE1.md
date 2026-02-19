# Fase 1 — Auditoría base y métricas iniciales

## Alcance ejecutado
Se levantó una línea base inicial del estado técnico del sitio con foco en:
- Build de producción.
- Métricas de carga observadas en navegador (viewport móvil).
- Incidencias de carga (errores de consola/recursos externos).

## Comandos ejecutados
1. `npm ci`
2. `npm run build`
3. `npm run dev -- --host 0.0.0.0 --port 3000`
4. Script Playwright para medición básica de performance de navegación.

## Resultados base

### 1) Build de producción (Vite)
- `dist/index.html`: **2.90 kB** (gzip **1.24 kB**)
- `dist/assets/index-CnL0y2ZF.js`: **229.82 kB** (gzip **71.91 kB**)
- Tiempo de build local: **~1.5s**

### 2) Métricas de navegación (móvil 390x844)
URL auditada: `http://localhost:3000/Abrinay-portafolio/`

- DOMContentLoaded: **905.2 ms**
- Load Event End: **905.3 ms**
- First Contentful Paint (FCP): **1268 ms**
- Largest Contentful Paint (LCP): **No capturado** en esta corrida
- Recursos cargados: **46**
- Transfer size documento: **3468 bytes**

### 3) Incidencias detectadas durante la auditoría
- 1 error de consola (404 de recurso no especificado por el navegador en este reporte).
- 2 recursos externos bloqueados por política del entorno (`net::ERR_BLOCKED_BY_ORB`):
  - `upload.wikimedia.org` (textura/grano)
  - `images.unsplash.com` (imagen del hero)

> Nota: el bloqueo ORB depende del entorno de ejecución de prueba y puede no reproducirse igual en producción real; aun así, es una señal para reducir dependencias críticas de assets remotos.

## Evidencia
- Captura de referencia home (móvil): `artifacts/fase1-home.png`.

## Lectura rápida de la línea base
- El peso JS principal es aceptable para una landing visual, pero hay margen de optimización.
- La carga depende de imágenes remotas en secciones críticas (hero), lo cual puede impactar estabilidad visual/performance en ciertos entornos.
- La Fase 2 debería iniciar con inventario de contenido + criticidad de recursos para priorizar optimizaciones.

## Próximos pasos inmediatos (salida de Fase 1)
1. Estandarizar una plantilla de reporte para repetir la medición por versión.
2. Ejecutar una pasada Lighthouse completa en entorno de CI o navegador sin bloqueo ORB.
3. Definir umbrales iniciales (presupuesto) para bundle, FCP/LCP y cantidad de requests.
