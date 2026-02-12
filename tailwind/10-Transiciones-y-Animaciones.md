# 10. Transiciones y Animaciones

Las transiciones y animaciones dan vida a tus interfaces, mejorando la experiencia del usuario con feedback visual suave y atractivo.

> [!IMPORTANT]
> En la documentación oficial, encontrarás información detallada en **Transitions & Animation**.

## Diferencia entre Transición y Animación

| Característica | Transición | Animación |
|:--------------|:-----------|:-----------|
| **Activación** | Requiere un cambio de estado (hover, focus, etc.) | Se ejecuta automáticamente o en loop |
| **Control** | Solo inicio y fin | Múltiples keyframes (pasos intermedios) |
| **Uso típico** | Hover effects, cambios de color, tamaño | Loading spinners, pulsos, rebotes |

---

## Transiciones Básicas

### `transition` - Activar Transiciones

La clase `transition` habilita transiciones suaves para las propiedades más comunes:

```html
<button class="bg-blue-500 hover:bg-blue-700 transition">
    Hover me
</button>
```

> [!NOTE]
> Por defecto, `transition` aplica a: `color`, `background-color`, `border-color`, `text-decoration-color`, `fill`, `stroke`, `opacity`, `box-shadow`, `transform`, `filter`, `backdrop-filter`.

---

## Transiciones Específicas

Para mayor control, especifica qué propiedades deben tener transición:

- `transition-none`: Sin transiciones
- `transition-all`: Todas las propiedades
- `transition-colors`: Solo colores (color, background, border)
- `transition-opacity`: Solo opacidad
- `transition-shadow`: Solo sombras
- `transition-transform`: Solo transformaciones (scale, rotate, translate)

```html
<!-- Solo transición de colores -->
<button class="bg-blue-500 text-white hover:bg-red-500 hover:text-black transition-colors">
    Cambio de color
</button>

<!-- Solo transición de transformación -->
<div class="hover:scale-110 transition-transform">
    Hover para zoom
</div>
```

---

## Duración: `duration-{time}`

Controla cuánto dura la transición:

- `duration-75`: 75ms
- `duration-100`: 100ms
- `duration-150`: 150ms
- `duration-200`: 200ms
- `duration-300`: 300ms (común para interacciones)
- `duration-500`: 500ms
- `duration-700`: 700ms
- `duration-1000`: 1000ms (1 segundo)

```html
<button class="bg-blue-500 hover:bg-blue-700 transition duration-500">
    Transición lenta (500ms)
</button>
```

> [!TIP]
> **Recomendaciones de duración:**
> - **100-200ms**: Cambios sutiles (color, opacidad)
> - **300-400ms**: Interacciones estándar (hover, focus)
> - **500-700ms**: Efectos dramáticos (modales, overlays)

---

## Retardo: `delay-{time}`

Añade un retraso antes de que comience la transición:

```html
<div class="opacity-0 hover:opacity-100 transition delay-300">
    Aparezco después de 300ms
</div>
```

Valores disponibles: `delay-75`, `delay-100`, `delay-150`, `delay-200`, `delay-300`, `delay-500`, `delay-700`, `delay-1000`

---

## Timing Function: `ease-{type}`

Controla la aceleración de la transición:

- `ease-linear`: Velocidad constante
- `ease-in`: Empieza lento, termina rápido
- `ease-out`: Empieza rápido, termina lento
- `ease-in-out`: Empieza y termina lento, rápido en el medio

```html
<div class="hover:translate-x-10 transition duration-500 ease-in-out">
    Movimiento suave
</div>
```

### Comparación Visual

```html
<div class="space-y-4">
    <div class="bg-blue-500 h-12 hover:translate-x-64 transition duration-1000 ease-linear">
        Linear (constante)
    </div>
    <div class="bg-green-500 h-12 hover:translate-x-64 transition duration-1000 ease-in">
        Ease-in (acelera)
    </div>
    <div class="bg-red-500 h-12 hover:translate-x-64 transition duration-1000 ease-out">
        Ease-out (desacelera)
    </div>
    <div class="bg-purple-500 h-12 hover:translate-x-64 transition duration-1000 ease-in-out">
        Ease-in-out (suave)
    </div>
</div>
```

---

## Ejemplo Completo: Botón Interactivo

```html
<button class="
    bg-gradient-to-r from-purple-500 to-pink-500
    text-white font-bold py-3 px-8 rounded-lg
    hover:from-purple-600 hover:to-pink-600
    hover:scale-105
    hover:shadow-2xl
    active:scale-95
    transition-all duration-300 ease-in-out
">
    Click Me!
</button>
```

**Efectos combinados:**
- Cambio de gradiente
- Escala al 105% en hover
- Sombra más pronunciada
- Escala al 95% al hacer clic (feedback táctil)
- Todo con transición suave de 300ms

---

## Animaciones Predefinidas

Tailwind incluye animaciones que se ejecutan automáticamente:

### `animate-spin` - Rotación continua

Ideal para loading spinners:

```html
<svg class="animate-spin h-8 w-8 text-blue-500" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
</svg>
```

### `animate-ping` - Pulso que se expande

Útil para notificaciones:

```html
<div class="relative">
    <span class="absolute top-0 right-0 flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
    </span>
    <button class="bg-blue-500 text-white px-4 py-2 rounded">
        Notificaciones
    </button>
</div>
```

### `animate-pulse` - Pulso de opacidad

Para indicar carga o contenido placeholder:

```html
<div class="animate-pulse space-y-4">
    <div class="h-4 bg-gray-300 rounded w-3/4"></div>
    <div class="h-4 bg-gray-300 rounded"></div>
    <div class="h-4 bg-gray-300 rounded w-5/6"></div>
</div>
```

### `animate-bounce` - Rebote vertical

Para flechas o indicadores:

```html
<svg class="animate-bounce w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
</svg>
```

---

## Ejemplo Práctico: Card con Efectos

```html
<div class="
    bg-white rounded-xl shadow-lg overflow-hidden
    hover:shadow-2xl
    hover:-translate-y-2
    transition-all duration-300
    group
">
    <img src="product.jpg" alt="Producto" class="
        w-full h-48 object-cover
        group-hover:scale-110
        transition-transform duration-500
    ">
    
    <div class="p-6">
        <h3 class="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
            Producto Destacado
        </h3>
        <p class="text-gray-600 mb-4">
            Descripción del producto con características principales.
        </p>
        <button class="
            bg-blue-500 text-white px-6 py-2 rounded-lg
            hover:bg-blue-600
            active:scale-95
            transition-all duration-200
        ">
            Comprar Ahora
        </button>
    </div>
</div>
```

**Efectos del Card:**
1. **Hover en el card**: Sombra más grande y se eleva 8px
2. **Hover en la imagen**: Zoom al 110%
3. **Hover en el título**: Cambia a azul
4. **Click en el botón**: Se reduce ligeramente (feedback)

---

## Animaciones Personalizadas con Valores Arbitrarios

Puedes crear duraciones personalizadas:

```html
<div class="transition duration-[2000ms]">
    Transición de 2 segundos
</div>
```

---

## Combinando Transiciones con Pseudoclases

### Efecto de Subrayado Animado

```html
<a href="#" class="
    relative text-blue-600 font-semibold
    after:content-[''] after:absolute after:bottom-0 after:left-0
    after:w-0 after:h-0.5 after:bg-blue-600
    hover:after:w-full
    after:transition-all after:duration-300
">
    Hover para subrayar
</a>
```

> [!NOTE]
> Aquí usamos **Arbitrary Variants** (`after:`) para crear un pseudo-elemento que se anima.

### Botón con Borde Animado

```html
<button class="
    relative px-6 py-3 text-blue-600 font-bold
    border-2 border-blue-600 rounded-lg
    overflow-hidden
    group
">
    <span class="relative z-10 group-hover:text-white transition-colors duration-300">
        Hover Me
    </span>
    <span class="
        absolute inset-0 bg-blue-600
        translate-y-full
        group-hover:translate-y-0
        transition-transform duration-300
    "></span>
</button>
```

**Efecto:** El fondo azul "sube" desde abajo al hacer hover.

---

## Ejemplo Avanzado: Modal con Animación

```html
<!-- Overlay con fade-in -->
<div class="
    fixed inset-0 bg-black/50
    opacity-0 pointer-events-none
    transition-opacity duration-300
    [&.active]:opacity-100 [&.active]:pointer-events-auto
">
    <!-- Modal con slide-in -->
    <div class="
        fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        bg-white rounded-2xl p-8 w-96
        scale-75 opacity-0
        transition-all duration-300
        [&.active]:scale-100 [&.active]:opacity-100
    ">
        <h2 class="text-2xl font-bold mb-4">Modal Animado</h2>
        <p class="text-gray-600 mb-6">Este modal aparece con animación suave.</p>
        <button class="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
            Cerrar
        </button>
    </div>
</div>
```

> [!TIP]
> Añade la clase `active` con JavaScript para activar la animación del modal.

---

## Loading States: Skeleton Screens

```html
<div class="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
    <!-- Skeleton para imagen -->
    <div class="animate-pulse bg-gray-300 h-48 rounded-lg mb-4"></div>
    
    <!-- Skeleton para título -->
    <div class="animate-pulse bg-gray-300 h-6 rounded w-3/4 mb-3"></div>
    
    <!-- Skeleton para texto -->
    <div class="space-y-2">
        <div class="animate-pulse bg-gray-300 h-4 rounded"></div>
        <div class="animate-pulse bg-gray-300 h-4 rounded w-5/6"></div>
        <div class="animate-pulse bg-gray-300 h-4 rounded w-4/6"></div>
    </div>
    
    <!-- Skeleton para botón -->
    <div class="animate-pulse bg-gray-300 h-10 rounded-lg w-32 mt-4"></div>
</div>
```

---

## Consejos para Animaciones

> [!TIP]
> **Mejores prácticas:**
> 1. **No abuses**: Demasiadas animaciones cansan al usuario.
> 2. **Sé consistente**: Usa las mismas duraciones en toda la aplicación.
> 3. **Prioriza el rendimiento**: Anima `transform` y `opacity` (son más eficientes que `width` o `height`).
> 4. **Respeta las preferencias**: Considera usuarios con `prefers-reduced-motion`.
> 5. **Feedback inmediato**: Las interacciones deben responder en <100ms.

---

## Respetar Preferencias de Movimiento Reducido

Algunos usuarios prefieren menos animaciones por accesibilidad:

```html
<div class="
    transition-transform duration-300
    motion-reduce:transition-none
">
    <!-- Sin transición si el usuario prefiere movimiento reducido -->
</div>
```

---

## Tabla de Referencia Rápida

| Clase | Efecto |
|:------|:-------|
| `transition` | Habilita transiciones en propiedades comunes |
| `transition-all` | Transición en todas las propiedades |
| `transition-colors` | Solo colores |
| `transition-transform` | Solo transformaciones |
| `duration-300` | Duración de 300ms |
| `delay-150` | Retraso de 150ms |
| `ease-in-out` | Aceleración suave |
| `animate-spin` | Rotación continua |
| `animate-pulse` | Pulso de opacidad |
| `animate-bounce` | Rebote vertical |
| `animate-ping` | Pulso expansivo |
