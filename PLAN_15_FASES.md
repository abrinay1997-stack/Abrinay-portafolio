# Plan de 15 fases para corregir los hallazgos del sitio

## Objetivo
Corregir de forma progresiva los hallazgos detectados en accesibilidad, SEO, rendimiento, conversión, navegación y mantenibilidad, sin perder la identidad visual del sitio.

## Fase 1 — Auditoría base y métricas iniciales
- Levantar línea base con Lighthouse (Performance, A11y, SEO, Best Practices).
- Medir Core Web Vitals (LCP, INP, CLS) en mobile y desktop.
- Registrar estado actual en una hoja de control para comparar mejoras por fase.

## Fase 2 — Inventario de contenido y arquitectura de información
- Listar todas las secciones, textos, enlaces y CTA actuales.
- Definir jerarquía de contenido orientada a servicios (composición, mezcla, sync, producción).
- Detectar duplicidades, textos ambiguos y vacíos de información comercial.

## Fase 3 — Escala tipográfica y legibilidad
- Ajustar tamaños mínimos para textos críticos y secundarios.
- Reducir tracking excesivo en textos pequeños.
- Validar contraste WCAG AA en elementos de texto y controles.

## Fase 4 — Navegación y estados de interacción accesibles
- Implementar estados `focus-visible` consistentes para botones y enlaces.
- Verificar navegación completa por teclado (menú, modales, enlaces internos).
- Corregir trampas de foco y orden de tabulación.

## Fase 5 — Movimiento y preferencia del usuario
- Añadir soporte a `prefers-reduced-motion` para animaciones del hero y hover.
- Reducir animaciones no críticas en dispositivos de bajo rendimiento.
- Mantener estética visual con una variante de animación más ligera.

## Fase 6 — Claridad de propuesta de valor en Hero
- Reescribir copy principal con lenguaje de servicio y resultado.
- Añadir CTA principal (p. ej. “Solicitar propuesta” o “Escuchar reel”).
- Añadir CTA secundario de respaldo (p. ej. “Ver catálogo”).

## Fase 7 — Conversión en navegación global
- Integrar CTA persistente en navbar (desktop/móvil).
- Hacer que el contacto clave (email/booking) sea visible sin fricción.
- Ajustar microcopy para intención comercial clara.

## Fase 8 — SEO on-page y semántica HTML
- Revisar estructura de headings (H1-H2-H3) por sección.
- Mejorar metatitle, metadescription y headings con keywords reales.
- Corregir semántica de secciones para mejorar indexación y rastreo.

## Fase 9 — SEO social y metadata enriquecida
- Completar Open Graph y Twitter Cards con imagen y descripción optimizadas.
- Verificar metadata por entorno (local/staging/prod).
- Probar previsualizaciones al compartir enlaces.

## Fase 10 — Structured data (schema.org)
- Implementar JSON-LD de `Person` o `Organization` según estrategia.
- Incluir atributos relevantes (nombre artístico, rol, redes, área geográfica, servicios).
- Validar con herramientas de Rich Results.

## Fase 11 — Optimización de imágenes y carga
- Migrar imágenes críticas a formatos modernos (WebP/AVIF cuando sea viable).
- Definir tamaños responsivos y `loading="lazy"` en imágenes no críticas.
- Minimizar impacto en LCP con priorización de recursos above-the-fold.

## Fase 12 — Rendimiento de frontend y peso de bundle
- Auditar dependencias y código no esencial.
- Aplicar carga diferida en secciones no críticas si aporta mejora real.
- Revisar tamaño final del bundle y presupuesto de performance.

## Fase 13 — Desacoplar contenido del código
- Extraer catálogos, textos legales y redes a archivos de contenido (JSON/TS).
- Definir estructura única para facilitar edición sin tocar componentes.
- Documentar flujo de actualización para mantenimiento futuro.

## Fase 14 — QA integral (funcional, visual y accesibilidad)
- Ejecutar checklist funcional en desktop y móvil.
- Validar accesibilidad con herramientas automáticas y revisión manual.
- Realizar regresión visual de componentes clave (hero, catálogo, footer, menú).

## Fase 15 — Lanzamiento controlado y mejora continua
- Publicar cambios por bloques (si es posible) para reducir riesgo.
- Monitorear métricas post-release durante 2–4 semanas.
- Priorizar backlog de optimización continua según impacto real en negocio.

## Entregables por fase (recomendado)
- Issue/ticket por fase con criterio de aceptación.
- Checklist de validación técnica y UX.
- Evidencia antes/después (métricas, capturas y notas de QA).
