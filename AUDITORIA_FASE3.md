# Fase 3 — Escala tipográfica y legibilidad

## Objetivo
Mejorar la legibilidad del sitio ajustando tamaños mínimos de texto, reduciendo tracking excesivo en microcopys y elevando contraste percibido en textos secundarios.

## Cambios aplicados

### 1) Tamaño mínimo de texto
Se elevó el tamaño de múltiples labels/microtextos de `7px–10px` a rangos más legibles (`11px–13px`) en componentes críticos:
- `Hero`
- `Navbar`
- `Catalog`
- `PressArchive`
- `Credits`
- `Biography`
- `Footer`
- `SocialProof`

### 2) Reducción de tracking extremo
Se normalizaron valores de tracking en textos pequeños para reducir fatiga visual y mejorar lectura rápida, especialmente en navegación, labels y subtítulos.

### 3) Contraste en texto secundario
En varias piezas de texto secundario se incrementó opacidad/color para mejorar legibilidad sin romper la estética visual oscura del sitio.

## Resultado esperado
- Mejor lectura en pantallas móviles y laptop.
- Menor ruido visual en textos uppercase de soporte.
- Menos fricción en escaneo de navegación y contenido descriptivo.

## Pendientes recomendados para cerrar completamente Fase 3
- Definir una escala tipográfica global en tokens/clases utilitarias para evitar regresiones.
- Ejecutar validación formal WCAG AA de contraste por componente.
- Revisar idioma/copy para reducir mayúsculas sostenidas en párrafos largos.
