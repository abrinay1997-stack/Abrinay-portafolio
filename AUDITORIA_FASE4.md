# Fase 4 — Navegación y estados de interacción accesibles

## Objetivo
Fortalecer accesibilidad de interacción para teclado y lectores de pantalla, incorporando estados visibles de foco y mejoras básicas de semántica en elementos interactivos críticos.

## Cambios implementados

### 1) Estados `focus-visible` consistentes
- Se añadieron estilos de foco visibles en:
  - Botones y enlace del menú de `Navbar`.
  - Botones legales, enlace sociales y controles de navegación en `Footer`.
  - Botones prev/next y tarjeta activa de `SocialProof`.

### 2) Menú de navegación (Navbar)
- Se añadieron atributos ARIA al botón hamburguesa:
  - `aria-expanded`
  - `aria-controls`
  - `aria-label` dinámico (abrir/cerrar menú)
- Se añadió `Escape` para cerrar el menú abierto.
- Se añadió estructura accesible al contenedor del menú (`id`, `role="menu"`, `aria-hidden`).

### 3) Modal legal (Footer)
- Se añadieron atributos de diálogo accesible:
  - `role="dialog"`
  - `aria-modal="true"`
  - `aria-labelledby`
- Se añadió cierre por tecla `Escape`.

### 4) Navegación por teclado en carrusel (SocialProof)
- Se habilitó activación con `Enter`/`Space` para la tarjeta activa del carrusel.
- Se añadieron `role="button"` y `tabIndex` controlado en tarjeta activa.
- Se reforzaron estados de foco en botones de navegación lateral.

## Resultado esperado
- Mayor claridad visual de foco al navegar con teclado.
- Menor riesgo de pérdida de contexto en menú y modal.
- Mejor operabilidad sin mouse en componentes de alta interacción.

## Siguiente validación recomendada
- Ejecutar auditoría con Lighthouse + pruebas manuales de teclado (Tab/Shift+Tab/Escape/Enter/Space) sobre home y biografía.
