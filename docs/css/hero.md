# Decisiones tomadas con respecto al Hero

El hero sigue el flujo normal de elementos, pero el hero usa `position: relative;` para que el `overlay` use al hero como contenedor de referencia. El `inset` lo manda a la esquina superior izquierda del contenedor hero.

El hero__content tambien usa `position: relative;`, pero es para poder utilizr la propiedad `z-index`.

Existe un overlay para que el texto sea más legible con respecto a la imagen.

> La imagen original no se modifica. Solo se modifica el overlay.

En desktop el gradient esta de arriba hacia abajo pa que el texto se pueda ver. En mobile cambia, entonces va de bottom to top.

También, el height del hero se tiene que calcular para que quede preciso el alto del viewport. Entocnes sería el 100% del viewport menos la altura del header. Para eso se creo una variable global con el valor de la altura del header. 

En el html, las líneas:

```hugo
{{ $hero := resources.Get "images/hero.jpeg" }}
{{ $hero = $hero.Resize "1600x webp" }}
```

1. Carga la imagen desde la carpeta de assets
2. Redimensiona la imagen a 1600px
3. Convierte la imagen a WebP

