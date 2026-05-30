# Decisiones tomadas en con respecto al header.

El header siempre va a quedar en la parte superior del viewport, tanto en mobile como en desktop. 

La combinación `backdrop-filter: blur(8px);` y `-webkit-backdrop-filter: blur(8px);` se utiliza para dar este efecto de vidrio. Lo que sea que pase por debajo del header cuando se este haciendo desplazamiento hacia abajo se verá levemente desemfocado.
```css
.header {
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
}
```

El `header__inner` se posiciona como relativo para que el `header__nav` se posicione justo debajo del header.

```css

.header__inner {
    position: relative;
}

.header__nava {
    position: absolute;
    top: 100%;
}

```

Las siguientes lineas son para pasar de un estilo hamburguesa a X cuando el menú esta abierto. El hamburguesa son tres lineas horizontales. Cuando el menú se abre, se opaca las segunda línea horizontal y las otras dos rotan para formar la X (equis) equisde :V

```css
.header__hamburger.is-active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.header__hamburger.is-active span:nth-child(2) {
  opacity: 0;
}

.header__hamburger.is-active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}
```
