# Decisiones generales

Se decidio pasar los assets de la carpeta static hacia la carpeta assets para aprovechar las funcionalidades de Hugo Pipes.

En el baseof las líneas:

```hugo
{{ $styles := slice
    (resources.Get "css/base.css")
    (resources.Get "css/components/header.css")
    (resources.Get "css/components/hero.css")
  }}

  {{ $bundle := $styles | resources.Concat "css/main.css" }}
  {{ $bundle = $bundle | minify | fingerprint }}

  <link rel="stylesheet" href="{{ $bundle.RelPermalink }}" integrity="{{ $bundle.Data.Integrity }}">
```

Crea una variable con los archivos css y luego los concatena. `minify` elimina espacos, comentarios y demas para hacer el archivo más pequeño. Y luego se le agrega un hash al nombre del archivo para evitar que el navegador use versiones anteriores del mismo archivo. El integrity asegura el que archivo no haya sido modificado ¿Cómo lo hace? ni idea :v

Lo mismo pasa con el `main.js`