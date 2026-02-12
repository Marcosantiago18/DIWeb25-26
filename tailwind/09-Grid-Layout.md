# 09. Grid Layout

Grid es un sistema de layout **bidimensional** que permite controlar filas y columnas simultáneamente, ideal para diseños complejos.

> [!TIP]
> En la documentación oficial, encontrarás toda la información sobre Grid en el menú lateral bajo **Layout → Grid**.

## Diferencia entre Flexbox y Grid

| Característica | Flexbox | Grid |
|:--------------|:--------|:-----|
| **Dimensiones** | Unidimensional (fila O columna) | Bidimensional (filas Y columnas) |
| **Uso ideal** | Barras de navegación, alineación de elementos | Layouts de página, galerías, dashboards |
| **Control** | Sobre el eje principal y transversal | Sobre filas y columnas simultáneamente |

---

## Activar Grid

Para convertir un elemento en un contenedor grid, usa la clase `grid`:

```html
<div class="grid">
    <!-- Los hijos se colocan en celdas de grid -->
</div>
```

> [!NOTE]
> Por defecto, `grid` crea **una sola columna**, apilando todos los elementos verticalmente.

---

## Definir Columnas: `grid-cols-{n}`

Especifica cuántas columnas quieres en tu grid:

- `grid-cols-1`: 1 columna (por defecto)
- `grid-cols-2`: 2 columnas
- `grid-cols-3`: 3 columnas
- ...
- `grid-cols-12`: 12 columnas (sistema clásico)

```html
<div class="grid grid-cols-3 gap-4">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
</div>
```

**Resultado:** 3 columnas, los elementos se distribuyen automáticamente (Item 1-3 en la primera fila, Item 4-6 en la segunda).

---

## Definir Filas: `grid-rows-{n}`

Especifica cuántas filas explícitas quieres:

```html
<div class="grid grid-cols-2 grid-rows-3 gap-4">
    <!-- 2 columnas × 3 filas = 6 celdas -->
</div>
```

> [!IMPORTANT]
> Si tienes más elementos que celdas definidas, Grid creará filas adicionales automáticamente (filas implícitas).

---

## Espaciado: `gap-`

Al igual que en Flexbox, `gap-` añade espacio entre las celdas:

- `gap-4`: Espacio de 16px entre filas y columnas
- `gap-x-4`: Solo espacio horizontal (entre columnas)
- `gap-y-4`: Solo espacio vertical (entre filas)

```html
<div class="grid grid-cols-3 gap-6">
    <!-- Separación de 24px entre todas las celdas -->
</div>
```

---

## Ejemplo Práctico: Galería de Imágenes

```html
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    <img src="img1.jpg" alt="Imagen 1" class="w-full h-64 object-cover rounded-lg">
    <img src="img2.jpg" alt="Imagen 2" class="w-full h-64 object-cover rounded-lg">
    <img src="img3.jpg" alt="Imagen 3" class="w-full h-64 object-cover rounded-lg">
    <img src="img4.jpg" alt="Imagen 4" class="w-full h-64 object-cover rounded-lg">
    <img src="img5.jpg" alt="Imagen 5" class="w-full h-64 object-cover rounded-lg">
    <img src="img6.jpg" alt="Imagen 6" class="w-full h-64 object-cover rounded-lg">
</div>
```

**Comportamiento responsive:**
- Móvil (<640px): 1 columna
- sm (≥640px): 2 columnas
- md (≥768px): 3 columnas
- lg (≥1024px): 4 columnas

---

## Spanning: Ocupar Múltiples Celdas

### `col-span-{n}` - Ocupar varias columnas

Permite que un elemento ocupe más de una columna:

```html
<div class="grid grid-cols-3 gap-4">
    <div class="col-span-2 bg-blue-500">Ocupa 2 columnas</div>
    <div class="bg-red-500">1 columna</div>
    <div class="bg-green-500">1 columna</div>
    <div class="col-span-2 bg-yellow-500">Ocupa 2 columnas</div>
</div>
```

Valores disponibles:
- `col-span-1` a `col-span-12`
- `col-span-full`: Ocupa todas las columnas disponibles

### `row-span-{n}` - Ocupar varias filas

```html
<div class="grid grid-cols-3 grid-rows-3 gap-4">
    <div class="row-span-2 bg-purple-500">Ocupa 2 filas</div>
    <div class="bg-blue-500">Normal</div>
    <div class="bg-red-500">Normal</div>
    <div class="bg-green-500">Normal</div>
    <div class="bg-yellow-500">Normal</div>
</div>
```

---

## Ejemplo Avanzado: Dashboard Layout

```html
<div class="grid grid-cols-4 grid-rows-3 gap-4 h-screen p-4">
    <!-- Header: ocupa las 4 columnas -->
    <header class="col-span-4 bg-slate-800 text-white flex items-center px-6 rounded-lg">
        <h1 class="text-2xl font-bold">Dashboard</h1>
    </header>
    
    <!-- Sidebar: ocupa 2 filas -->
    <aside class="row-span-2 bg-slate-700 text-white p-4 rounded-lg">
        <nav>
            <ul class="space-y-2">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Estadísticas</a></li>
                <li><a href="#">Configuración</a></li>
            </ul>
        </nav>
    </aside>
    
    <!-- Main content: ocupa 3 columnas y 2 filas -->
    <main class="col-span-3 row-span-2 bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-4">Contenido Principal</h2>
        <p>Aquí va el contenido del dashboard...</p>
    </main>
</div>
```

### Desglose del Dashboard

| Elemento | Clases Grid | Efecto |
|:---------|:-----------|:-------|
| `<header>` | `col-span-4` | Ocupa las 4 columnas (ancho completo) |
| `<aside>` | `row-span-2` | Ocupa 2 filas (sidebar alto) |
| `<main>` | `col-span-3 row-span-2` | Ocupa 3 columnas y 2 filas |

---

## Posicionamiento Explícito

### `col-start-{n}` y `col-end-{n}`

Controla exactamente dónde empieza y termina un elemento:

```html
<div class="grid grid-cols-6 gap-4">
    <div class="col-start-2 col-end-5 bg-blue-500">
        <!-- Empieza en la columna 2, termina en la 5 (ocupa 3 columnas) -->
    </div>
</div>
```

### `row-start-{n}` y `row-end-{n}`

Lo mismo pero para filas:

```html
<div class="grid grid-rows-4 gap-4">
    <div class="row-start-2 row-end-4 bg-red-500">
        <!-- Empieza en la fila 2, termina en la 4 (ocupa 2 filas) -->
    </div>
</div>
```

---

## Grid Flow: Dirección de Llenado

Controla cómo se llenan las celdas automáticamente:

- `grid-flow-row`: Llena por filas (por defecto)
- `grid-flow-col`: Llena por columnas
- `grid-flow-row-dense`: Llena por filas, rellenando huecos
- `grid-flow-col-dense`: Llena por columnas, rellenando huecos

```html
<div class="grid grid-cols-3 grid-flow-col gap-4">
    <!-- Los elementos se colocan primero verticalmente, luego pasan a la siguiente columna -->
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
</div>
```

---

## Columnas Responsivas con Valores Arbitrarios

Para crear grids más flexibles, usa `grid-cols-[valor]`:

```html
<!-- Grid con columnas de ancho mínimo 200px que se ajustan automáticamente -->
<div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
    <div class="bg-blue-500 p-4">Card 1</div>
    <div class="bg-red-500 p-4">Card 2</div>
    <div class="bg-green-500 p-4">Card 3</div>
    <div class="bg-yellow-500 p-4">Card 4</div>
</div>
```

> [!TIP]
> **`auto-fit` vs `auto-fill`:**
> - `auto-fit`: Colapsa las columnas vacías, expandiendo las existentes
> - `auto-fill`: Mantiene las columnas vacías, creando espacio adicional

---

## Alineación en Grid

### Alineación de Items (dentro de sus celdas)

- `justify-items-start`: Alinea items al inicio (izquierda)
- `justify-items-center`: Centra items horizontalmente
- `justify-items-end`: Alinea items al final (derecha)
- `justify-items-stretch`: Estira items (por defecto)

```html
<div class="grid grid-cols-3 gap-4 justify-items-center">
    <!-- Todos los items estarán centrados en sus celdas -->
</div>
```

- `items-start`: Alinea items arriba
- `items-center`: Centra items verticalmente
- `items-end`: Alinea items abajo
- `items-stretch`: Estira items verticalmente (por defecto)

### Alineación del Grid Completo (dentro del contenedor)

- `justify-content-start`: Grid al inicio
- `justify-content-center`: Grid centrado
- `justify-content-end`: Grid al final
- `justify-content-between`: Espacio entre columnas
- `justify-content-around`: Espacio alrededor de columnas
- `justify-content-evenly`: Espacio uniforme

```html
<div class="grid grid-cols-3 gap-4 justify-content-center h-screen">
    <!-- El grid completo estará centrado horizontalmente -->
</div>
```

### Alineación Individual

Para alinear un solo item de forma diferente:

- `justify-self-start`, `justify-self-center`, `justify-self-end`
- `self-start`, `self-center`, `self-end`

```html
<div class="grid grid-cols-3 gap-4">
    <div class="justify-self-center">Centrado</div>
    <div>Normal</div>
    <div class="self-end">Abajo</div>
</div>
```

---

## Ejemplo Completo: Card Grid Responsive

```html
<div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">Nuestros Productos</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Card 1 -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="product1.jpg" alt="Producto 1" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-xl font-semibold mb-2">Producto 1</h3>
                <p class="text-gray-600 mb-4">Descripción del producto...</p>
                <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Comprar
                </button>
            </div>
        </div>
        
        <!-- Card 2 -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="product2.jpg" alt="Producto 2" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-xl font-semibold mb-2">Producto 2</h3>
                <p class="text-gray-600 mb-4">Descripción del producto...</p>
                <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Comprar
                </button>
            </div>
        </div>
        
        <!-- Card 3 (Featured - ocupa 2 columnas en lg) -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden lg:col-span-2">
            <img src="product3.jpg" alt="Producto Destacado" class="w-full h-48 object-cover">
            <div class="p-4">
                <span class="bg-yellow-400 text-xs font-bold px-2 py-1 rounded">DESTACADO</span>
                <h3 class="text-xl font-semibold mb-2 mt-2">Producto Destacado</h3>
                <p class="text-gray-600 mb-4">Este producto es especial y ocupa más espacio...</p>
                <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Comprar Ahora
                </button>
            </div>
        </div>
    </div>
</div>
```

---

## Consejos para Usar Grid

> [!TIP]
> **Mejores prácticas:**
> 1. **Usa Grid para layouts de página**: Estructura general, dashboards, galerías.
> 2. **Usa Flexbox para componentes**: Navbars, cards individuales, botones con iconos.
> 3. **Combina ambos**: Grid para el layout principal, Flexbox dentro de las celdas.
> 4. **Mobile-first con Grid**: Empieza con `grid-cols-1` y añade columnas con breakpoints.
> 5. **Aprovecha `gap`**: Es más limpio que usar márgenes individuales.

---

## Cuándo Usar Grid vs Flexbox

| Situación | Recomendación |
|:----------|:--------------|
| Galería de imágenes | **Grid** |
| Navbar horizontal | **Flexbox** |
| Dashboard con sidebar | **Grid** |
| Card con imagen, título y botón | **Flexbox** |
| Layout de blog (header, sidebar, main, footer) | **Grid** |
| Centrar un elemento | **Flexbox** (más simple) |
| Sistema de 12 columnas | **Grid** |
| Lista de elementos con espaciado uniforme | **Flexbox** |
