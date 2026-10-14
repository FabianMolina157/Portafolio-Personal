# Portafolio Personal

Portafolio personal multimedia desarrollado con Angular 22. La interfaz toma como referencia visual el template iPortfolio de BootstrapMade y utiliza componentes standalone, Bootstrap Icons y estilos SCSS propios.

## Tecnologías

- Angular 22 y TypeScript
- Bootstrap Icons
- HTML y SCSS

## Instalación y ejecución

```bash
npm install
npm start
```

Abre `http://localhost:4200/` en el navegador.

## Compilación

```bash
npm run build
```

## Personalización

- Edita el objeto `profile`, las listas `skills`, `projects`, `knowledge`, `navigation` y `socials` en `src/app/app.component.ts`.
- Actualiza el contenido entre corchetes (por ejemplo `[NOMBRE COMPLETO]` y `[CORREO]`) con información propia antes de publicar.
- Reemplaza `src/assets/personal/fotoPortafolioPersonal.png` por tu fotografía conservando el nombre, o actualiza la ruta en la plantilla.
- Cambia las imágenes SVG de marcador en `src/assets/projects/` por capturas de tus proyectos y ajusta las rutas en el arreglo `projects`.
- Configura los enlaces de redes y GitHub con URLs reales. Los niveles de habilidades son valores de ejemplo editables: ajústalos a tu experiencia.

El formulario abre el programa de correo del visitante mediante `mailto:`; no envía datos a un servidor.
