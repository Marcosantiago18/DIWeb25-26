# 08. Pseudoclases y Variantes

Las **variantes** en Tailwind permiten aplicar clases de utilidad condicionalmente según el estado del elemento (hover, focus, etc.) o el tamaño de la pantalla.

> [!IMPORTANT]
> En la documentación oficial, encontrarás información detallada en **Core Concepts → Hover, Focus and Other States**.

## ¿Qué son las Variantes?

Las variantes son **modificadores** que se anteponen a las clases de utilidad usando el formato:

```
variante:clase-de-utilidad
```

Hasta ahora has visto dos tipos de variantes:
1. **Media queries** (responsive): `sm:`, `md:`, `lg:`, etc.
2. **Pseudoclases** (estados): `hover:`, `focus:`, `active:`, etc.

---

## Pseudoclases Básicas

### `hover:` - Al pasar el ratón

Aplica estilos cuando el usuario pasa el cursor sobre el elemento.

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2">
    <!-- Fondo azul por defecto, azul oscuro al pasar el ratón -->
    Pasa el ratón
</button>
```

### `focus:` - Al enfocar el elemento

Muy útil para inputs y elementos interactivos.

```html
<input type="text" 
       placeholder="Enter your name"
       class="border border-gray-300 rounded-md py-2 px-4
              focus:outline-blue-500 focus:border-blue-500">
<!-- El outline y el borde cambian a azul al hacer clic en el input -->
```

> [!TIP]
> Por defecto, los inputs muestran un `outline` azul al hacer clic. Puedes cambiarlo con `focus:outline-{color}` o eliminarlo con `focus:outline-none`.

### `active:` - Al hacer clic

Aplica estilos mientras el botón está siendo presionado.

```html
<button class="bg-green-500 active:bg-green-800">
    Presióname
</button>
```

### `disabled:` - Cuando está deshabilitado

```html
<button disabled class="bg-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed">
    Botón deshabilitado
</button>
```

---

## Combinando Variantes

Puedes combinar múltiples variantes en el mismo elemento:

```html
<button class="bg-purple-600 
               hover:bg-purple-400 
               hover:text-black
               active:bg-purple-900
               focus:outline-purple-500">
    Botón interactivo
</button>
```

---

## Group: Observar el Padre

La clase `group` permite que los **hijos** reaccionen al estado del **padre**.

### Sintaxis Básica

1. Añade `group` al elemento padre
2. Usa `group-hover:`, `group-focus:`, etc. en los hijos

```html
<a href="#" class="group bg-purple-600 hover:bg-purple-400 px-6 py-3 rounded-lg flex items-center gap-2">
    <!-- Icono SVG -->
    <svg class="fill-white group-hover:fill-black" width="20" height="20">
        <!-- ... -->
    </svg>
    
    <!-- Texto -->
    <span class="text-white group-hover:text-black">
        Contáctame
    </span>
</a>
```

**Comportamiento:**
- Al pasar el ratón sobre el `<a>` (padre con `group`):
  - El fondo cambia de morado oscuro a morado claro (`hover:bg-purple-400`)
  - El icono cambia de blanco a negro (`group-hover:fill-black`)
  - El texto cambia de blanco a negro (`group-hover:text-black`)

> [!NOTE]
> Sin `group`, tendrías que añadir `hover:` individualmente a cada elemento hijo, lo cual es menos eficiente.

---

## Group con Nombres: Múltiples Niveles

Cuando tienes **varios niveles de anidación**, puedes nombrar los grupos para evitar conflictos.

### Problema sin nombres

```html
<div class="group">
    <div class="group">
        <div class="group-hover:text-red-500">
            <!-- ¿Qué grupo está observando? ❌ -->
        </div>
    </div>
</div>
```

### Solución: Nombrar los grupos

```html
<a href="#" class="group/link bg-purple-600 hover:bg-purple-400">
    <svg class="fill-white group-hover/link:fill-black">
        <!-- Observa específicamente al grupo "link" -->
    </svg>
    
    <span class="text-white group-hover/link:text-black">
        Contáctame
    </span>
</a>
```

**Sintaxis:**
- En el padre: `group/{nombre}`
- En el hijo: `group-hover/{nombre}:clase`

---

## Ejemplo Práctico: Card con Overlay

Este ejemplo combina `group`, transformaciones y transiciones para crear un efecto de overlay animado.

```html
<figure class="w-100 rounded-3xl mx-auto my-30 relative overflow-hidden group/figure">
    <!-- Imagen -->
    <img src="img/tailwind-workspace.png" 
         alt="Workspace de desarrollo con Tailwind CSS"
         class="rounded-[inherit]
                group-hover/figure:scale-150
                group-hover/figure:rotate-6
                transition-transform">
    
    <!-- Overlay (capa que aparece) -->
    <div class="absolute w-full h-full bg-purple-900/70
                rounded-[inherit] flex items-center justify-center
                top-0
                translate-y-full
                group-hover/figure:translate-y-0
                transition-transform duration-500">
        <h3 class="text-white text-3xl font-bold">
            ¡Aprende Tailwind!
        </h3>
    </div>
</figure>
```

### Desglose del Efecto

#### Contenedor `<figure>`

| Clase | Efecto |
|:------|:-------|
| `relative` | Contexto de posicionamiento para el overlay |
| `overflow-hidden` | Oculta el overlay cuando está fuera de los límites |
| `group/figure` | Permite observar el hover desde los hijos |

#### Imagen `<img>`

| Clase | Efecto |
|:------|:-------|
| `rounded-[inherit]` | Hereda el `border-radius` del padre |
| `group-hover/figure:scale-150` | Hace zoom al 150% al pasar el ratón |
| `group-hover/figure:rotate-6` | Rota 6 grados al pasar el ratón |
| `transition-transform` | Animación suave de las transformaciones |

#### Overlay `<div>`

**Estado inicial (sin hover):**

| Clase | Efecto |
|:------|:-------|
| `absolute` | Posicionamiento absoluto dentro del `<figure>` |
| `w-full h-full` | Ocupa el 100% del ancho y alto |
| `bg-purple-900/70` | Fondo morado con 70% de opacidad |
| `top-0` | Alineado con la parte superior |
| `translate-y-full` | **Desplazado 100% hacia abajo (oculto)** |

**Estado con hover:**

| Clase | Efecto |
|:------|:-------|
| `group-hover/figure:translate-y-0` | Vuelve a su posición original (visible) |
| `transition-transform duration-500` | Animación de 500ms |

### Visualización del Proceso

```
Estado inicial:
┌─────────────────────┐
│   <figure>          │
│  ┌───────────────┐  │
│  │   <img>       │  │  ← Imagen visible
│  │               │  │
│  └───────────────┘  │
└─────────────────────┘
 ┌───────────────┐      ← <div> oculto aquí
 │ ¡Aprende      │        (translate-y-full)
 │ Tailwind!     │
 └───────────────┘

Al hacer HOVER:
┌─────────────────────┐
│   <figure>          │
│  ┌───────────────┐  │
│  │ ¡Aprende      │  │  ← <div> se desliza
│  │ Tailwind!     │  │     hacia arriba
│  └───────────────┘  │
└─────────────────────┘
```

---

## Peer: Observar Hermanos

La clase `peer` permite que un elemento reaccione al estado de su **hermano anterior**.

### Sintaxis

1. Marca el elemento observado con `peer`
2. En el hermano siguiente, usa `peer-hover:`, `peer-focus:`, etc.

> [!IMPORTANT]
> El elemento con `peer` debe estar **antes** en el HTML que el elemento que lo observa.

---

## Ejemplo Práctico: Float Label

Un efecto común en formularios donde el label "flota" sobre el input al enfocarlo.

```html
<div class="relative w-full">
    <!-- Input marcado como peer -->
    <input type="text"
           id="name"
           placeholder="Ingresa tu nombre"
           class="w-full border-b border-zinc-600 p-2 px-4
                  focus:border-blue-600 focus:outline-none
                  peer">
    
    <!-- Label que observa al peer -->
    <label for="name"
           class="absolute left-4 -top-5 text-sm text-blue-600
                  opacity-0 peer-focus:opacity-100
                  transition-opacity duration-200">
        Ingresa tu nombre
    </label>
</div>
```

### Desglose del Float Label

#### Contenedor `<div>`

| Clase | Efecto |
|:------|:-------|
| `relative` | Contexto de posicionamiento para el label absoluto |
| `w-full` | Ocupa todo el ancho disponible |

#### Input con `peer`

| Clase | Efecto |
|:------|:-------|
| `peer` | **Marca este elemento como observado** |
| `border-b` | Solo borde inferior |
| `focus:border-blue-600` | Borde azul al enfocar |
| `focus:outline-none` | Elimina el outline predeterminado |

#### Label con `peer-focus:`

| Clase | Efecto |
|:------|:-------|
| `absolute` | Posicionamiento absoluto |
| `left-4` | 16px desde la izquierda (alineado con el padding del input) |
| `-top-5` | 20px **por encima** del input (valor negativo) |
| `text-sm` | Fuente pequeña (14px) |
| `text-blue-600` | Color azul |
| `opacity-0` | **Invisible por defecto** |
| `peer-focus:opacity-100` | **Visible cuando el input tiene focus** |
| `transition-opacity duration-200` | Animación suave de 200ms |

### Cómo Funciona

```
┌─────────────────────────────────────┐
│  <div class="relative">             │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ <input class="peer">        │ ← Marcado como "peer"
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ <label class="peer-focus:   │ ← Reacciona al focus del peer
│  │         opacity-100">       │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

---

## Variantes Adicionales con `peer`

### Mostrar label cuando hay texto

Usa `peer-placeholder-shown:` para detectar si el placeholder es visible:

```html
<input placeholder=" " class="peer">
<label class="peer-placeholder-shown:opacity-0 peer-focus:opacity-100">
    Nombre
</label>
```

### Animar posición además de opacidad

```html
<label class="absolute left-4 top-2
             peer-focus:-top-5 peer-focus:text-sm
             transition-all duration-200">
    Nombre
</label>
```

### Cambiar color al hacer focus

```html
<label class="text-gray-500 peer-focus:text-blue-600">
    Nombre
</label>
```

---

## Otras Pseudoclases Útiles

### Estados de Formulario

- `required:` - Cuando el campo es obligatorio
- `invalid:` - Cuando la validación falla
- `valid:` - Cuando la validación es correcta
- `checked:` - Para checkboxes y radios

```html
<input type="email" required 
       class="border invalid:border-red-500 valid:border-green-500">
```

### Estados de Interacción

- `visited:` - Enlaces visitados
- `focus-within:` - Cuando un hijo tiene focus
- `focus-visible:` - Focus visible por teclado (no por clic)

```html
<div class="focus-within:ring-2 focus-within:ring-blue-500">
    <input type="text">
    <!-- El div tendrá un anillo azul cuando el input tenga focus -->
</div>
```

---

## Resumen: Group vs Peer

| Característica | `group` | `peer` |
|:--------------|:--------|:-------|
| **Relación** | Padre → Hijos | Hermano anterior → Hermano siguiente |
| **Sintaxis padre** | `group` o `group/{nombre}` | `peer` o `peer/{nombre}` |
| **Sintaxis hijo** | `group-hover:clase` | `peer-hover:clase` |
| **Uso típico** | Cards, botones con iconos | Formularios, float labels |
| **Dirección** | De arriba hacia abajo | De izquierda a derecha (en el HTML) |

---

## Consejos de Uso

> [!TIP]
> **Mejores prácticas:**
> 1. **Usa `group` para componentes**: Cuando un contenedor y sus hijos deben reaccionar juntos.
> 2. **Usa `peer` para formularios**: Ideal para labels flotantes y validación visual.
> 3. **Nombra los grupos**: Si tienes más de un nivel de anidación, usa `group/{nombre}`.
> 4. **Combina con transiciones**: Añade `transition-*` para animaciones suaves.
> 5. **Prueba la accesibilidad**: Asegúrate de que los estados sean visibles para usuarios de teclado.

---

## Ejemplo Completo: Botón con Icono

```html
<a href="#" 
   class="group/link 
          bg-purple-600 hover:bg-purple-400 
          text-white
          px-6 py-3 rounded-lg
          flex items-center gap-2
          transition-colors duration-300">
    
    <!-- Icono de sobre (envelope) -->
    <svg class="fill-white group-hover/link:fill-black transition-colors" 
         width="20" height="20" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
    
    <!-- Texto -->
    <span class="group-hover/link:text-black transition-colors">
        Contáctame
    </span>
</a>
```

**Comportamiento:**
- Al pasar el ratón:
  - El fondo cambia de morado oscuro a morado claro
  - El icono cambia de blanco a negro
  - El texto cambia de blanco a negro
  - Todas las transiciones son suaves (300ms)
