# Fase 2 — Inventario de contenido y arquitectura de información

## Objetivo de la fase
Construir un inventario funcional de contenido, navegación y CTAs para detectar vacíos comerciales, fricciones de UX y prioridades de reestructuración antes de entrar a cambios de UI/SEO.

## 1) Mapa actual de páginas/secciones

### Estructura de páginas
- **Home** (single-page por secciones): Hero, Catálogo, Sincronización digital, Prensa, Créditos, Contacto.
- **Biografía** (vista interna): bloque narrativo + hitos.

### Secciones operativas en Home
1. Hero (`#hero`)
2. Obras & Catálogo (`#work`)
3. Sincronización Digital (`#spotify-showcase`)
4. Prensa (`#press`)
5. Créditos (`#credits`)
6. Contacto/Footer (`#contact`)

## 2) Inventario de navegación actual

### Menú principal
- Inicio
- Biografía
- Catálogo
- Sincronización
- Prensa
- Créditos
- Contacto

### Comportamiento observado
- La navegación usa mezcla de cambio de vista (`home`/`biography`) + scroll por anclas.
- Al navegar desde biografía hacia una ancla de home, primero cambia a home y luego hace scroll con delay.

## 3) Inventario de CTAs y acciones del usuario

### CTAs principales detectados
- **Navbar**: navegación por secciones y “Mensaje_Directo” (mailto).
- **Catálogo**: botón play por ítem (enlace externo Spotify/Apple/medios).
- **Sincronización**: carrusel con embeds de Spotify.
- **Prensa**: “Ver artículo” en medios externos.
- **Footer**: redes sociales y correo.

### Hallazgos de conversión
- No existe un **CTA comercial primario persistente** orientado a negocio (ej. “Solicitar propuesta”, “Book a call”, “Licenciar música”).
- Hay múltiples salidas a enlaces externos, pero sin una jerarquía clara de objetivo principal.
- El contacto por email existe, pero está distribuido en varios puntos sin prioridad visual inequívoca.

## 4) Inventario de contenido por intención

### A) Autoridad / marca
- Hero cinematográfico con branding fuerte.
- Biografía y cronología de hitos.
- Créditos de producción.

### B) Prueba social / validación
- Prensa con medios reconocibles.
- Catálogo de obras y producciones.
- Módulo de sincronización digital.

### C) Conversión
- Contacto vía mail y redes sociales.
- Falta un flujo de conversión directo con propuesta de servicio + siguiente paso.

## 5) Vacíos y ambigüedades detectadas (Fase 2)
1. **Propuesta de servicio poco explícita en hero**: comunica identidad artística, pero no paquetiza oferta profesional.
2. **Jerarquía de CTAs difusa**: muchas acciones de exploración y pocas de cierre comercial.
3. **Arquitectura híbrida (página + anclas)**: funcional, pero requiere consistencia para evitar fricción de estado.
4. **Contenido clave hardcodeado en componentes**: dificulta actualización editorial y escalado.
5. **Dependencia alta de recursos externos** para soporte visual/social (ya detectado en Fase 1).

## 6) Recomendación de arquitectura objetivo (nivel información)

### Navegación objetivo sugerida
- Inicio
- Servicios
- Portafolio
- Prensa
- Biografía
- Contacto
- CTA persistente: **Solicitar propuesta**

### Orden sugerido de home (orientado a conversión)
1. Hero con propuesta clara + CTA primario
2. Servicios (qué resuelve y para quién)
3. Portafolio destacado (3–6 casos)
4. Prensa/credenciales
5. Créditos y alianzas
6. Contacto directo / formulario ligero

## 7) Backlog accionable que habilita Fase 3+
- Definir copy de propuesta de valor en formato “servicio + resultado + cliente objetivo”.
- Unificar CTA principal en navbar, hero y footer.
- Crear matriz de contenidos desacoplada (`content/*.ts` o JSON) para catálogo, prensa, redes y legales.
- Definir árbol semántico objetivo de headings antes de la fase SEO on-page.

## Entregable de cierre de Fase 2
- Inventario de navegación, contenido y conversion points completado.
- Lista priorizada de vacíos de información y decisión de arquitectura objetivo para implementar en fases 3–8.
