# Hectric Design System

## Tipografía y Textos
- **Fuente de Títulos:** `Poppins` (usada para h1, h2, h3, h4, etc. y elementos de alto impacto visual).
- **Fuente de Párrafos:** `Lato` (usada para textos largos, descripciones, botones y contenido general).
- **Color Base:** Paleta `slate` de Tailwind CSS.
- **Uso:** El tono de `slate` (de 50 a 950) dependerá del tipo de texto, su jerarquía, prioridad y tamaño (ej. `text-slate-900` para títulos principales, `text-slate-500` para subtítulos o textos secundarios).

## Colores de Marca y Elementos de Interfaz
- **Color Primario:** `teal-600` (`bg-teal-600`, `text-teal-600`, etc.).
- **Variaciones del Primario:** Se utilizará la paleta `teal` para estados activos, botones principales, *hovers* (ej. `hover:bg-teal-700`) e insignias (ej. `bg-teal-50 text-teal-700`).
- **Gris/Neutro:** La paleta `slate` se usa para fondos secundarios (`bg-slate-50`), bordes (`border-slate-200`) y elementos inactivos, sirviendo de lienzo para que resalte el `teal`.

## Estructura y Formas
- **Bordes:** Uso estricto de `rounded-lg` para contenedores, botones, tarjetas e inputs. Evitar `rounded-xl`, `rounded-md` o `rounded-2xl` para mantener consistencia absoluta.

## Iconografía
- **Librería Oficial:** [Solar Icons](https://yesicon.app/solar). Se abandona Heroicons u otras librerías genéricas a favor del estilo de Solar, el cual aporta un aspecto más moderno, suave y premium (preferiblemente en su variante Line-Duotone o Linear, según el caso de uso).
