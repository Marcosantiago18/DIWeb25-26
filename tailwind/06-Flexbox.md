# 06. Flexbox

Flexbox es un sistema de layout unidimensional que facilita la alineación y distribución de elementos en un contenedor.

> [!TIP]
> En la documentación oficial, encontrarás toda la información sobre Flex y Grid en el menú lateral bajo "Layout".

## Activar Flexbox

Para convertir un elemento en un contenedor flex, usa la clase `flex`:

```html
<nav class="flex">
    <!-- Los hijos se colocan automáticamente en fila -->
</nav>
```

---

## Dirección (`flex-direction`)

Por defecto, Flexbox coloca los elementos en **fila** (horizontal). Puedes cambiar la dirección:

- `flex-row`: Fila horizontal (por defecto, de izquierda a derecha)
- `flex-row-reverse`: Fila horizontal invertida (de derecha a izquierda)
- `flex-col`: Columna vertical (de arriba a abajo)
- `flex-col-reverse`: Columna vertical invertida (de abajo a arriba)

```html
<nav class="flex flex-col">
    <!-- Los elementos se apilan verticalmente -->
</nav>
```

---

## Alineación Vertical: `items-`

Controla cómo se alinean los elementos en el **eje transversal** (perpendicular a la dirección principal).

- `items-start`: Alinea al inicio (arriba en `flex-row`, izquierda en `flex-col`)
- `items-center`: Centra verticalmente
- `items-end`: Alinea al final (abajo en `flex-row`, derecha en `flex-col`)
- `items-stretch`: Estira para ocupar toda la altura (por defecto)
- `items-baseline`: Alinea por la línea base del texto

```html
<nav class="h-20 flex items-center">
    <!-- Todos los hijos estarán centrados verticalmente -->
</nav>
```

---

## Distribución Horizontal: `justify-`

Controla cómo se distribuyen los elementos en el **eje principal** (la dirección del flex).

- `justify-start`: Agrupa al inicio (por defecto)
- `justify-center`: Centra horizontalmente
- `justify-end`: Agrupa al final
- `justify-between`: Espacio **entre** elementos (primero al inicio, último al final)
- `justify-around`: Espacio **alrededor** de cada elemento (espacios iguales)
- `justify-evenly`: Espacio **uniforme** entre todos (incluidos los extremos)

### Ejemplo con `justify-between`

```html
<nav class="flex items-center justify-between">
    <img src="logo.png" alt="Logo">
    <div>Enlaces</div>
    <a href="#">Botón</a>
</nav>
```

> [!NOTE]
> Con 3 elementos y `justify-between`:
> - El **primero** (logo) se empuja a la izquierda
> - El **segundo** (enlaces) queda en el centro
> - El **tercero** (botón) se empuja a la derecha

---

## Espaciado entre Elementos: `gap-`

En lugar de usar márgenes individuales, `gap-` añade espacio automático entre los elementos hijos.

- `gap-4`: Espacio de 16px entre todos los hijos
- `gap-x-4`: Espacio horizontal (solo en `flex-row`)
- `gap-y-4`: Espacio vertical (solo en `flex-col`)

```html
<div class="flex gap-10">
    <a href="#">Inicio</a>
    <a href="#">Acerca de</a>
    <a href="#">Contacto</a>
    <!-- Separación automática de 40px entre enlaces -->
</div>
```

---

## Ejemplo Completo: Navbar con Flexbox

```html
<nav class="h-20 bg-slate-800 flex items-center justify-between px-10">
   <img src="./assets/logo.png" class="h-14 w-auto object-contain" alt="Logo IES HLANZ">
   
   <div class="text-white flex gap-10">
     <a href="#">Inicio</a>
     <a href="#">Acerca de</a>
     <a href="#">Contacto</a>
   </div>
   
   <a href="#" class="bg-amber-700 text-white px-7 py-3 rounded-lg">Contáctame</a>
</nav>
```

### Desglose del Navbar

#### Contenedor `<nav>` (Padre Flex)

| Clase | Efecto |
|:------|:-------|
| `h-20` | Altura fija de 80px |
| `bg-slate-800` | Fondo gris oscuro |
| `flex` | Activa Flexbox (3 hijos en fila) |
| `items-center` | Centra verticalmente logo, enlaces y botón |
| `justify-between` | Logo a la izquierda, enlaces al centro, botón a la derecha |
| `px-10` | Padding horizontal de 40px (evita que toquen los bordes) |

#### Logo `<img>`

| Clase | Efecto |
|:------|:-------|
| `h-14` | Altura fija de 56px |
| `w-auto` | Ancho automático (mantiene proporción) |
| `object-contain` | La imagen se escala para caber sin recortarse |

#### Grupo de Enlaces `<div>` (Hijo Flex que es también Padre Flex)

| Clase | Efecto |
|:------|:-------|
| `text-white` | Color blanco heredado a los enlaces |
| `flex` | Convierte este div en contenedor flex para sus hijos |
| `gap-10` | Separación de 40px entre cada enlace |

#### Botón `<a>`

| Clase | Efecto |
|:------|:-------|
| `bg-amber-700` | Fondo ámbar oscuro |
| `text-white` | Texto blanco |
| `px-7` | Padding horizontal de 28px |
| `py-3` | Padding vertical de 12px |
| `rounded-lg` | Esquinas redondeadas |

---

## Truco: Ajustar Logo con `object-cover`

Si tu logo tiene demasiado espacio en blanco arriba y abajo, puedes forzar un recorte:

```html
<img src="./assets/logo.png" class="h-14 w-64 object-cover" alt="Logo">
```

> [!TIP]
> Al usar `w-64`, forzamos un ancho mayor que la proporción natural. Con `object-cover`, el navegador hace "zoom" y recorta el exceso vertical, eliminando el espacio sobrante.

---

## Alineación Individual: `self-`

Si quieres que **un solo hijo** tenga una alineación diferente al resto, usa `self-`:

- `self-start`
- `self-center`
- `self-end`
- `self-stretch`

```html
<div class="flex items-center">
    <div>Centrado</div>
    <div class="self-start">Arriba</div>
    <div>Centrado</div>
</div>
```

---

## Orden de los Elementos: `order-`

Cambia el orden visual de los elementos sin modificar el HTML.

- `order-0`: Orden por defecto
- `order-1`, `order-2`, etc.: Orden creciente

Los elementos se ordenan de **menor a mayor**.

```html
<div class="flex">
    <div class="order-1">Segundo (visualmente)</div>
    <div>Primero (order-0 por defecto)</div>
</div>
```

> [!NOTE]
> Si solo un elemento tiene `order-1` y los demás tienen `order-0` (por defecto), ese elemento irá al **final**.

---

## Crecimiento y Encogimiento

### `flex-grow`

Permite que un elemento **crezca** para ocupar el espacio disponible.

- `flex-grow`: El elemento crece proporcionalmente
- `flex-grow-0`: No crece (por defecto)

### `flex-shrink`

Controla si un elemento puede **encogerse** cuando no hay espacio.

- `flex-shrink`: Puede encogerse (por defecto)
- `flex-shrink-0`: No se encoge

### Atajos útiles

- `flex-1`: Equivale a `flex-grow: 1; flex-shrink: 1; flex-basis: 0%` (crece y encoge)
- `flex-auto`: Crece y encoge según su contenido
- `flex-none`: No crece ni encoge

---

## Ajuste de Línea: `flex-wrap`

Por defecto, Flexbox intenta meter todos los elementos en una sola línea. Con `flex-wrap`, los elementos saltan a la siguiente línea si no caben.

- `flex-nowrap`: Todo en una línea (por defecto)
- `flex-wrap`: Permite múltiples líneas
- `flex-wrap-reverse`: Múltiples líneas en orden inverso

```html
<div class="flex flex-wrap gap-4">
    <!-- Si no caben, los elementos saltan a la siguiente línea -->
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```
