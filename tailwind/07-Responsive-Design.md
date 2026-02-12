# 07. Responsive Design

Con Tailwind, implementar diseño responsive es extremadamente sencillo gracias a los **breakpoints** predefinidos.

> [!IMPORTANT]
> En la documentación oficial, encontrarás información detallada en **Core Concepts → Responsive Design**.

## Breakpoints Predefinidos

Tailwind incluye 5 breakpoints basados en anchos de pantalla:

| Breakpoint | Ancho Mínimo | Dispositivo Típico |
|:-----------|:-------------|:-------------------|
| `sm` | 640px | Móvil horizontal / Tablet pequeña |
| `md` | 768px | Tablet |
| `lg` | 1024px | Laptop |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Desktop grande |

---

## Sintaxis de Media Queries en Tailwind

Para aplicar estilos solo a partir de cierto tamaño de pantalla, usa el prefijo del breakpoint seguido de dos puntos:

```html
<nav class="bg-slate-800 sm:bg-red-500">
    <!-- Fondo gris oscuro por defecto -->
    <!-- Fondo rojo cuando la pantalla sea ≥640px -->
</nav>
```

### Múltiples Breakpoints

Puedes combinar varios breakpoints en el mismo elemento:

```html
<nav class="bg-slate-800
            sm:bg-red-500
            md:bg-green-500
            lg:bg-blue-500">
    <!-- 
    - Pantallas pequeñas (<640px): gris oscuro
    - sm (≥640px): rojo
    - md (≥768px): verde
    - lg (≥1024px): azul
    -->
</nav>
```

---

## Enfoque Mobile-First (Recomendado)

> [!TIP]
> **Mobile-First**: Define primero el diseño para dispositivos pequeños (sin prefijo), y luego añade breakpoints para pantallas más grandes.

Este enfoque es el **recomendado** porque:
1. La mayoría del tráfico web viene de móviles.
2. Es más fácil expandir un diseño simple que simplificar uno complejo.

### Ejemplo: Navbar Mobile-First

```html
<nav class="h-auto bg-slate-800
            flex flex-col gap-5
            items-center justify-between
            py-6 px-10
            md:flex-row md:h-20">
   
   <img src="./assets/logo.png" class="h-14 w-64 object-cover" alt="Logo">
   
   <div class="text-white flex gap-10 order-1 md:order-0">
     <a href="#">Inicio</a>
     <a href="#">Acerca de</a>
     <a href="#">Contacto</a>
   </div>
   
   <a href="#" class="bg-amber-700 text-white px-7 py-3 rounded-lg">Contáctame</a>
</nav>
```

### Desglose del Ejemplo

**En móvil (por defecto, <768px):**
- `h-auto`: Altura automática (se adapta al contenido)
- `flex-col`: Elementos apilados verticalmente
- `gap-5`: Separación de 20px entre elementos
- `py-6`: Padding vertical
- `order-1` en el menú: Lo envía al final (después del logo y el botón)

**En tablet y superiores (≥768px):**
- `md:flex-row`: Cambia a fila horizontal
- `md:h-20`: Altura fija de 80px
- `md:order-0` en el menú: Vuelve al orden original (entre logo y botón)

---

## Regla Importante: Una Clase por Breakpoint

> [!IMPORTANT]
> **No puedes poner más de una clase en cada breakpoint**. Si necesitas aplicar múltiples estilos en el mismo breakpoint, debes **repetir el prefijo**.

```html
<!-- ❌ INCORRECTO (no funciona) -->
<div class="md:flex-row h-20">

<!-- ✅ CORRECTO -->
<div class="md:flex-row md:h-20">
```

---

## Enfoque Desktop-First (Alternativa)

Si prefieres diseñar primero para pantallas grandes, usa los breakpoints con `max-`:

| Breakpoint | Ancho Máximo | Se aplica cuando... |
|:-----------|:-------------|:--------------------|
| `max-sm` | <640px | Pantalla menor que 640px |
| `max-md` | <768px | Pantalla menor que 768px |
| `max-lg` | <1024px | Pantalla menor que 1024px |
| `max-xl` | <1280px | Pantalla menor que 1280px |
| `max-2xl` | <1536px | Pantalla menor que 1536px |

```html
<nav class="h-20 flex-row
            max-md:h-auto max-md:flex-col">
    <!-- 
    - Por defecto (desktop): altura 20, fila horizontal
    - Pantallas <768px: altura auto, columna vertical
    -->
</nav>
```

---

## Combinar Breakpoints: Rangos

Puedes combinar breakpoints `min` y `max` para aplicar estilos solo en un **rango específico** de tamaños.

```html
<div class="sm:max-lg:bg-red-400">
    <!-- Fondo rojo SOLO cuando: ≥640px Y <1024px -->
    <!-- Es decir, tablets y laptops pequeñas -->
</div>
```

### Ejemplos de Rangos

```html
<!-- Solo en móviles grandes y tablets -->
<div class="sm:max-md:text-2xl">

<!-- Solo en laptops (no móvil ni desktop grande) -->
<div class="lg:max-xl:px-20">
```

---

## Ejemplo Práctico Completo

```html
<div class="
    w-full p-4 bg-blue-500
    sm:w-3/4 sm:p-6 sm:bg-green-500
    md:w-1/2 md:p-8 md:bg-yellow-500
    lg:w-1/3 lg:p-10 lg:bg-red-500
">
    <h2 class="text-xl md:text-3xl lg:text-5xl">
        Título Responsive
    </h2>
</div>
```

**Comportamiento:**
- **Móvil (<640px)**: Ancho completo, padding 16px, fondo azul, texto 24px
- **sm (≥640px)**: Ancho 75%, padding 24px, fondo verde
- **md (≥768px)**: Ancho 50%, padding 32px, fondo amarillo, texto 30px
- **lg (≥1024px)**: Ancho 33%, padding 40px, fondo rojo, texto 48px

---

## Consejos para Diseño Responsive

> [!TIP]
> **Consejos clave:**
> 1. **Empieza por móvil**: Diseña primero para pantallas pequeñas.
> 2. **Prueba en varios tamaños**: Usa las herramientas de desarrollador del navegador.
> 3. **No abuses de breakpoints**: A veces `flex-wrap` o unidades relativas son suficientes.
> 4. **Piensa en contenido**: ¿Qué información es crítica en móvil?

### Herramientas de Prueba

En Chrome/Firefox:
1. Abre DevTools (F12)
2. Activa el modo responsive (Ctrl/Cmd + Shift + M)
3. Prueba diferentes tamaños predefinidos (iPhone, iPad, etc.)
