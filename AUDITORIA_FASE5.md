# Fase 5 — Movimiento y preferencia del usuario

## Objetivo
Reducir carga de animación para usuarios con `prefers-reduced-motion` y en componentes de alto movimiento, manteniendo la identidad visual del sitio en modo estándar.

## Cambios implementados

### 1) Política global de reducción de movimiento
- Se añadió un bloque CSS en `index.html` para `@media (prefers-reduced-motion: reduce)` que:
  - desactiva `scroll-behavior: smooth`,
  - minimiza duración de animaciones/transiciones,
  - desactiva animaciones decorativas (`glitch` y barras de audio).

### 2) Hero con soporte explícito a preferencia de movimiento
- Se detecta la preferencia del usuario mediante `matchMedia`.
- Se desactivan ondas animadas de fondo cuando el usuario prefiere menos movimiento.
- Se evita el efecto de escala prolongada en imagen de fondo con `motion-reduce`.

### 3) Carrusel SocialProof
- Se añade detección de `prefers-reduced-motion`.
- Se desactiva el autoplay del carrusel en modo reduced motion.
- Se reducen transiciones en elementos interactivos con variantes `motion-reduce`.

## Resultado esperado
- Menor fatiga visual y mejor confort para usuarios sensibles al movimiento.
- Menor actividad de animación continua en componentes críticos.
- Conservación del estilo visual en usuarios que no solicitan reducción de movimiento.

## Validación recomendada
- Probar Home con la preferencia del sistema activada/desactivada para confirmar:
  1. ausencia de autoplay en carrusel,
  2. ausencia de glitch/ondas decorativas,
  3. navegación sin scroll suave forzado.
