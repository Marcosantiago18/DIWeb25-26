# 11. Utilidades Avanzadas y Productividad

Este módulo cubre técnicas avanzadas que te permitirán aprovechar al máximo Tailwind CSS y mejorar tu productividad.

> [!IMPORTANT]
> Estos conceptos requieren un buen entendimiento de los módulos anteriores. Son herramientas poderosas que, bien utilizadas, pueden acelerar enormemente tu desarrollo.

---

## Arbitrary Variants: Selectores Personalizados

Los **Arbitrary Variants** te permiten usar cualquier selector CSS con la sintaxis de corchetes `[&...]:`

### Sintaxis Básica

```
[&>selector]:clase-de-utilidad
```

El `&` representa el elemento actual.

---

## Seleccionar Hijos Directos: `[&>*]:`

Aplica estilos a todos los hijos directos sin tener que añadir clases a cada uno:

```html
<div class="[&>*]:p-4 [&>*]:bg-gray-100 [&>*]:rounded-lg">
    <div>Hijo 1 - Tiene padding, fondo gris y bordes redondeados</div>
    <div>Hijo 2 - Tiene padding, fondo gris y bordes redondeados</div>
    <div>Hijo 3 - Tiene padding, fondo gris y bordes redondeados</div>
</div>
```

> [!TIP]
> Esto es especialmente útil cuando trabajas con contenido dinámico o markdown donde no puedes añadir clases a cada elemento.

### Ejemplo Práctico: Estilizar Lista

```html
<ul class="[&>li]:py-2 [&>li]:border-b [&>li]:border-gray-300">
    <li>Elemento 1</li>
    <li>Elemento 2</li>
    <li>Elemento 3</li>
    <li>Elemento 4</li>
</ul>
```

---

## Pseudo-selectores Avanzados

### `nth-child` - Seleccionar por posición

```html
<!-- Alternar colores en filas de tabla -->
<table class="w-full">
    <tbody class="[&>tr:nth-child(odd)]:bg-gray-100 [&>tr:nth-child(even)]:bg-white">
        <tr><td>Fila 1 - Gris</td></tr>
        <tr><td>Fila 2 - Blanco</td></tr>
        <tr><td>Fila 3 - Gris</td></tr>
        <tr><td>Fila 4 - Blanco</td></tr>
    </tbody>
</table>
```

### Primer y Último Hijo

```html
<div class="[&>*:first-child]:font-bold [&>*:last-child]:text-gray-500">
    <p>Primer párrafo - Negrita</p>
    <p>Párrafo intermedio - Normal</p>
    <p>Último párrafo - Gris</p>
</div>
```

### Seleccionar Elementos Específicos

```html
<!-- Solo el tercer hijo -->
<div class="[&>*:nth-child(3)]:bg-yellow-200">
    <div>Hijo 1</div>
    <div>Hijo 2</div>
    <div>Hijo 3 - Fondo amarillo</div>
    <div>Hijo 4</div>
</div>
```

---

## Combinar con Pseudo-clases

```html
<!-- Hover en hijos directos -->
<nav class="[&>a]:px-4 [&>a]:py-2 [&>a:hover]:bg-blue-500 [&>a:hover]:text-white">
    <a href="#">Inicio</a>
    <a href="#">Acerca de</a>
    <a href="#">Contacto</a>
</nav>
```

---

## Estructura del Archivo `tailwind.css`

Antes de profundizar en las directivas avanzadas, es importante entender la estructura básica del archivo `src/css/tailwind.css`.

### Archivo Básico

```css
@import "tailwindcss";
```

Esta única línea importa todo Tailwind CSS. A partir de aquí, puedes añadir personalizaciones usando diferentes capas.

### Las Capas de Tailwind CSS

Tailwind organiza los estilos en **cuatro capas principales**:

1. **`@theme`**: Personalización del sistema de diseño (colores, fuentes, espaciado, etc.)
2. **`@layer base`**: Estilos base globales (reset, tipografía)
3. **`@layer components`**: Componentes reutilizables
4. **`@layer utilities`**: Utilidades personalizadas

> [!IMPORTANT]
> El orden de las capas es importante. Tailwind las procesa en este orden específico para garantizar que los estilos se apliquen correctamente.

---

## `@theme`: Personalizar el Sistema de Diseño

La directiva `@theme` es la forma recomendada en **Tailwind CSS v4** para personalizar colores, fuentes, espaciado y otros valores del sistema de diseño.

> [!TIP]
> `@theme` reemplaza la antigua configuración en `tailwind.config.js` de Tailwind v3. Es más simple y está directamente en tu CSS.

### Sintaxis Básica

```css
@import "tailwindcss";

@theme {
  /* Tus personalizaciones aquí */
}
```

### Personalizar Colores

```css
@import "tailwindcss";

@theme {
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  --color-accent: #f59e0b;
  
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
}
```

**Usar en HTML:**

```html
<div class="bg-primary text-white">Fondo azul personalizado</div>
<button class="bg-accent hover:bg-accent/80">Botón con color accent</button>
```

### Personalizar Fuentes

```css
@import "tailwindcss";

@theme {
  --font-sans: "Inter", system-ui, sans-serif;
  --font-serif: "Merriweather", Georgia, serif;
  --font-mono: "Fira Code", monospace;
}
```

**Usar en HTML:**

```html
<p class="font-sans">Texto con Inter</p>
<h1 class="font-serif">Título con Merriweather</h1>
<code class="font-mono">Código con Fira Code</code>
```

### Personalizar Espaciado

```css
@import "tailwindcss";

@theme {
  --spacing-xs: 0.25rem;    /* 4px */
  --spacing-sm: 0.5rem;     /* 8px */
  --spacing-md: 1rem;       /* 16px */
  --spacing-lg: 2rem;       /* 32px */
  --spacing-xl: 4rem;       /* 64px */
}
```

### Personalizar Breakpoints

```css
@import "tailwindcss";

@theme {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

### Ejemplo Completo de `@theme`

```css
@import "tailwindcss";

@theme {
  /* Colores de marca */
  --color-brand-blue: #1e40af;
  --color-brand-purple: #7c3aed;
  --color-brand-pink: #ec4899;
  
  /* Fuentes */
  --font-display: "Poppins", sans-serif;
  --font-body: "Inter", sans-serif;
  
  /* Espaciado personalizado */
  --spacing-section: 5rem;
  --spacing-card: 1.5rem;
  
  /* Radios de borde */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
  --radius-full: 9999px;
  
  /* Sombras */
  --shadow-card: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-card-hover: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}
```

---

## Variables CSS con `:root`

Además de `@theme`, puedes usar variables CSS personalizadas con `:root` para valores que quieras usar tanto en Tailwind como en CSS personalizado.

### Diferencia entre `@theme` y `:root`

| `@theme` | `:root` |
|:---------|:--------|
| Variables que Tailwind convierte en utilidades | Variables CSS estándar |
| `--color-primary` → `bg-primary` | `--my-color` → `var(--my-color)` |
| Solo para valores del sistema de diseño | Para cualquier valor CSS |
| Recomendado en Tailwind v4 | CSS estándar |

### Usar `:root` para Variables Globales

```css
@import "tailwindcss";

:root {
  /* Variables que NO necesitas como utilidades de Tailwind */
  --header-height: 80px;
  --sidebar-width: 250px;
  --transition-speed: 200ms;
  --z-modal: 1000;
  --z-dropdown: 100;
  --z-header: 50;
}

@theme {
  /* Variables que SÍ quieres como utilidades de Tailwind */
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
}
```

### Usar Variables `:root` en HTML

```html
<!-- Usando variables :root con valores arbitrarios -->
<header class="h-[var(--header-height)] z-[var(--z-header)]">
  Header
</header>

<aside class="w-[var(--sidebar-width)]">
  Sidebar
</aside>

<!-- Usando variables @theme directamente -->
<button class="bg-primary text-white">
  Botón
</button>
```

### Ejemplo: Sistema de Diseño Completo

```css
@import "tailwindcss";

/* Variables CSS globales */
:root {
  --header-height: 80px;
  --footer-height: 200px;
  --sidebar-width: 280px;
  --content-max-width: 1200px;
  
  --transition-fast: 150ms;
  --transition-normal: 200ms;
  --transition-slow: 300ms;
  
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-modal: 1000;
  --z-tooltip: 1100;
}

/* Sistema de diseño de Tailwind */
@theme {
  /* Paleta de colores */
  --color-primary: #2563eb;
  --color-secondary: #7c3aed;
  --color-accent: #f59e0b;
  
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-danger: #ef4444;
  --color-info: #3b82f6;
  
  /* Tipografía */
  --font-display: "Poppins", sans-serif;
  --font-body: "Inter", sans-serif;
  --font-mono: "Fira Code", monospace;
  
  /* Espaciado */
  --spacing-section: 6rem;
  --spacing-container: 2rem;
  
  /* Bordes */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  
  /* Sombras */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}
```

**Usar en HTML:**

```html
<div class="min-h-screen flex flex-col">
  <!-- Header con altura de variable :root -->
  <header class="h-[var(--header-height)] bg-primary text-white sticky top-0 z-[var(--z-sticky)]">
    <div class="max-w-[var(--content-max-width)] mx-auto px-container">
      <h1 class="font-display text-2xl">Mi Sitio</h1>
    </div>
  </header>
  
  <!-- Contenido principal -->
  <main class="flex-1">
    <div class="max-w-[var(--content-max-width)] mx-auto px-container py-section">
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h2 class="font-display text-3xl text-primary mb-4">Título</h2>
        <p class="font-body text-gray-700">Contenido...</p>
        <button class="bg-accent text-white px-6 py-2 rounded-md 
                       transition-all duration-[var(--transition-normal)]
                       hover:shadow-xl">
          Acción
        </button>
      </div>
    </div>
  </main>
  
  <!-- Footer con altura de variable :root -->
  <footer class="h-[var(--footer-height)] bg-gray-900 text-white">
    Footer
  </footer>
</div>
```

> [!WARNING]
> **Recuerda**: Cuando uses variables `:root` en clases de Tailwind, debes usar la sintaxis de valores arbitrarios: `h-[var(--header-height)]`

---

## `@apply`: Reutilizar Combinaciones de Clases

La directiva `@apply` te permite crear clases personalizadas combinando utilidades de Tailwind.

> [!IMPORTANT]
> `@apply` se usa en tu archivo CSS (`src/css/tailwind.css`), NO en el HTML.

### Cuándo Usar `@apply`

✅ **Usa `@apply` cuando:**
- Tienes un componente que se repite exactamente igual muchas veces
- Quieres crear estilos base para elementos HTML
- Necesitas mantener consistencia en componentes complejos

❌ **NO uses `@apply` si:**
- Solo usas el componente una o dos veces
- Puedes resolver el problema con componentes de tu framework (React, Vue, etc.)
- Estás replicando clases que ya existen en Tailwind

### Sintaxis en `tailwind.css`

```css
@import "tailwindcss";

@layer components {
  .btn-primary {
    @apply bg-blue-500 text-white font-bold py-2 px-4 rounded-lg;
    @apply hover:bg-blue-600 active:scale-95;
    @apply transition-all duration-200;
  }
  
  .btn-secondary {
    @apply bg-gray-500 text-white font-bold py-2 px-4 rounded-lg;
    @apply hover:bg-gray-600;
    @apply transition-colors duration-200;
  }
}
```

### Usar en HTML

```html
<button class="btn-primary">Botón Principal</button>
<button class="btn-secondary">Botón Secundario</button>
```

> [!WARNING]
> **Importante**: Recuerda que debes tener el proceso de compilación (`npm run tailwind`) ejecutándose para que los cambios en el CSS se reflejen.

---

## `@layer`: Organizar Estilos Personalizados

Tailwind organiza los estilos en tres capas:

1. **`@layer base`**: Estilos base (reset, tipografía global)
2. **`@layer components`**: Componentes reutilizables
3. **`@layer utilities`**: Utilidades personalizadas

### Ejemplo Completo

```css
@import "tailwindcss";

/* Estilos base globales */
@layer base {
  h1 {
    @apply text-4xl font-bold mb-4;
  }
  
  h2 {
    @apply text-3xl font-semibold mb-3;
  }
  
  a {
    @apply text-blue-600 hover:underline;
  }
}

/* Componentes reutilizables */
@layer components {
  .card {
    @apply bg-white rounded-xl shadow-lg p-6;
    @apply hover:shadow-2xl transition-shadow duration-300;
  }
  
  .badge {
    @apply inline-block px-3 py-1 text-xs font-semibold rounded-full;
  }
  
  .badge-success {
    @apply badge bg-green-100 text-green-800;
  }
  
  .badge-error {
    @apply badge bg-red-100 text-red-800;
  }
}

/* Utilidades personalizadas */
@layer utilities {
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
}
```

### Usar en HTML

```html
<!-- Usando estilos base (h1 ya tiene estilos) -->
<h1>Título Principal</h1>

<!-- Usando componentes -->
<div class="card">
    <h2>Card Title</h2>
    <p>Contenido de la card...</p>
    <span class="badge-success">Activo</span>
</div>

<!-- Usando utilidades personalizadas -->
<h3 class="text-shadow">Texto con sombra</h3>
<div class="overflow-auto scrollbar-hide">
    Contenido con scroll pero sin scrollbar visible
</div>
```

---

## Dark Mode: `dark:`

Tailwind incluye soporte nativo para modo oscuro usando la variante `dark:`.

### Configuración

Por defecto, Tailwind v4 detecta automáticamente la preferencia del sistema operativo del usuario.

### Uso Básico

```html
<div class="bg-white text-black dark:bg-gray-900 dark:text-white">
    <h1 class="text-gray-900 dark:text-gray-100">Título</h1>
    <p class="text-gray-700 dark:text-gray-300">
        Este contenido se adapta automáticamente al modo oscuro.
    </p>
</div>
```

### Ejemplo Completo: Card con Dark Mode

```html
<div class="
    bg-white dark:bg-gray-800
    text-gray-900 dark:text-gray-100
    rounded-xl shadow-lg dark:shadow-gray-900/50
    p-6
    transition-colors duration-300
">
    <h2 class="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
        Card Adaptable
    </h2>
    <p class="text-gray-700 dark:text-gray-300 mb-4">
        Este card se ve bien tanto en modo claro como oscuro.
    </p>
    <button class="
        bg-blue-500 dark:bg-blue-600
        hover:bg-blue-600 dark:hover:bg-blue-700
        text-white px-4 py-2 rounded-lg
        transition-colors
    ">
        Acción
    </button>
</div>
```

### Combinar Dark Mode con Otras Variantes

```html
<!-- Hover diferente en dark mode -->
<button class="
    bg-blue-500 hover:bg-blue-600
    dark:bg-blue-700 dark:hover:bg-blue-800
    text-white px-4 py-2 rounded
">
    Botón Adaptable
</button>

<!-- Focus diferente en dark mode -->
<input class="
    border border-gray-300 dark:border-gray-600
    bg-white dark:bg-gray-800
    focus:border-blue-500 dark:focus:border-blue-400
    focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20
    px-4 py-2 rounded
">
```

---

## Plugins Oficiales de Tailwind

Tailwind ofrece plugins oficiales que extienden su funcionalidad.

### 1. Forms Plugin

Mejora el estilo de formularios:

```bash
npm install @tailwindcss/forms
```

**Beneficios:**
- Estilos consistentes para inputs, selects, checkboxes
- Mejor apariencia por defecto
- Fácil personalización

### 2. Typography Plugin

Estilos para contenido de texto largo (artículos, blogs):

```bash
npm install @tailwindcss/typography
```

**Uso:**
```html
<article class="prose lg:prose-xl dark:prose-invert">
    <h1>Título del Artículo</h1>
    <p>Contenido con estilos automáticos...</p>
    <!-- Todo el contenido dentro tendrá estilos tipográficos profesionales -->
</article>
```

### 3. Aspect Ratio Plugin

Mantiene proporciones de aspecto:

```bash
npm install @tailwindcss/aspect-ratio
```

**Uso:**
```html
<div class="aspect-w-16 aspect-h-9">
    <iframe src="https://www.youtube.com/embed/..." class="w-full h-full"></iframe>
</div>
```

---

## Valores Arbitrarios: Resumen Completo

Ya has visto valores arbitrarios en módulos anteriores, aquí un resumen:

```html
<!-- Colores -->
<div class="bg-[#1a1a1a] text-[#ff6b6b]">

<!-- Tamaños -->
<div class="w-[347px] h-[calc(100vh-80px)]">

<!-- Espaciado -->
<div class="p-[17px] m-[2.5rem]">

<!-- Grid personalizado -->
<div class="grid-cols-[200px_1fr_300px]">

<!-- Fuentes -->
<p class="font-[Inter] text-[clamp(1rem,2vw,2rem)]">

<!-- Transformaciones -->
<div class="rotate-[17deg] scale-[1.15]">
</div>
```

> [!TIP]
> Usa valores arbitrarios cuando necesites un valor específico que no está en la escala de Tailwind, pero no abuses: si usas el mismo valor varias veces, considera añadirlo a tu configuración.

---

## Ejemplo Integrador: Sistema de Diseño Completo

```css
/* src/css/tailwind.css */
@import "tailwindcss";

@layer base {
  /* Tipografía base */
  body {
    @apply font-[Inter] text-gray-900 dark:text-gray-100;
    @apply bg-gray-50 dark:bg-gray-900;
  }
  
  h1 { @apply text-4xl font-bold mb-6; }
  h2 { @apply text-3xl font-semibold mb-4; }
  h3 { @apply text-2xl font-semibold mb-3; }
  
  a {
    @apply text-blue-600 dark:text-blue-400;
    @apply hover:underline transition-colors;
  }
}

@layer components {
  /* Botones */
  .btn {
    @apply px-6 py-2 rounded-lg font-semibold;
    @apply transition-all duration-200;
    @apply active:scale-95;
  }
  
  .btn-primary {
    @apply btn bg-blue-600 text-white;
    @apply hover:bg-blue-700;
    @apply dark:bg-blue-500 dark:hover:bg-blue-600;
  }
  
  .btn-secondary {
    @apply btn bg-gray-200 text-gray-900;
    @apply hover:bg-gray-300;
    @apply dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600;
  }
  
  /* Cards */
  .card {
    @apply bg-white dark:bg-gray-800;
    @apply rounded-xl shadow-lg;
    @apply p-6 transition-shadow duration-300;
    @apply hover:shadow-2xl;
  }
  
  /* Inputs */
  .input {
    @apply w-full px-4 py-2 rounded-lg;
    @apply border border-gray-300 dark:border-gray-600;
    @apply bg-white dark:bg-gray-800;
    @apply focus:outline-none focus:ring-2 focus:ring-blue-500/50;
    @apply transition-all duration-200;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
  
  .scrollbar-thin {
    scrollbar-width: thin;
  }
}
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Diseño</title>
    <link rel="stylesheet" href="css/estilos.css">
</head>
<body>
    <div class="container mx-auto p-6">
        <h1>Mi Aplicación</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="card">
                <h3>Card 1</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4">
                    Contenido de la card...
                </p>
                <button class="btn-primary">Acción</button>
            </div>
            
            <div class="card">
                <h3>Card 2</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4">
                    Contenido de la card...
                </p>
                <button class="btn-secondary">Acción</button>
            </div>
        </div>
        
        <form class="card mt-6 max-w-md">
            <h2>Formulario</h2>
            <input type="text" placeholder="Nombre" class="input mb-4">
            <input type="email" placeholder="Email" class="input mb-4">
            <button type="submit" class="btn-primary w-full">Enviar</button>
        </form>
    </div>
</body>
</html>
```

---

## Consejos Finales

> [!TIP]
> **Mejores prácticas avanzadas:**
> 1. **Usa `@layer components` para componentes repetidos**: No repitas las mismas 10 clases en 50 botones.
> 2. **Arbitrary Variants para casos específicos**: Perfecto para contenido dinámico o markdown.
> 3. **Dark mode desde el inicio**: Es más fácil diseñar con dark mode desde el principio que añadirlo después.
> 4. **Plugins solo si los necesitas**: No instales todos los plugins, solo los que realmente uses.
> 5. **Documenta tus componentes personalizados**: Si creas clases con `@apply`, documenta qué hacen.

---

## Resumen de Herramientas Avanzadas

| Herramienta | Cuándo Usar |
|:-----------|:------------|
| **`@theme`** | Personalizar el sistema de diseño (colores, fuentes, espaciado) |
| **`:root`** | Variables CSS globales para usar con valores arbitrarios |
| **`@layer base`** | Estilos base globales (reset, tipografía) |
| **`@layer components`** | Organizar componentes personalizados |
| **`@layer utilities`** | Crear utilidades CSS personalizadas |
| **`@apply`** | Crear componentes reutilizables en CSS |
| **Arbitrary Variants** `[&>*]:` | Estilizar hijos sin añadir clases individuales |
| **`dark:`** | Adaptar diseño a modo oscuro |
| **Plugins oficiales** | Extender funcionalidad (forms, typography) |
| **Valores arbitrarios** `[]` | Valores específicos fuera de la escala |

---

## Próximos Pasos

Con estos conocimientos avanzados, estás listo para:

1. **Crear sistemas de diseño completos** con componentes reutilizables
2. **Optimizar tu flujo de trabajo** con `@apply` y `@layer`
3. **Construir aplicaciones profesionales** con dark mode y responsive design
4. **Manejar casos especiales** con arbitrary variants y valores personalizados

> [!IMPORTANT]
> Recuerda: La clave de Tailwind es el equilibrio. Usa estas herramientas avanzadas cuando aporten valor real, pero no compliques innecesariamente tu código. La simplicidad de las utility classes es una de las mayores fortalezas de Tailwind.
