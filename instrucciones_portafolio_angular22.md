# Instrucciones para crear Portafolio Personal Multimedia con Angular 22

## 1. Objetivo del proyecto

Crear una **página web multimedia de Portafolio Personal** utilizando **Angular 22**, tomando como referencia visual y estructural el template **iPortfolio de BootstrapMade**:

https://builder.bootstrapmade.com/demo/iPortfolio/

El resultado debe ser un portafolio personal funcional, responsive y visualmente profesional, pero adaptado a la información, fotografías y proyectos personales del estudiante.

**Importante:** no crear una copia idéntica del HTML original. Se debe **recrear el estilo, estructura, distribución y experiencia visual de iPortfolio dentro de Angular 22**, organizando correctamente el proyecto mediante componentes.

El sitio debe funcionar correctamente en:

- Computadoras de escritorio.
- Laptops.
- Tablets.
- Teléfonos móviles.

---

## 2. Tecnologías obligatorias

Utilizar:

- **Angular 22**
- **TypeScript**
- **HTML**
- **CSS/SCSS**
- **Bootstrap 5** para facilitar el diseño responsive.
- **Bootstrap Icons** o una biblioteca de iconos compatible.
- JavaScript/TypeScript únicamente cuando sea necesario para interacciones.
- Componentes Angular independientes (standalone components).

No utilizar React, Vue, AngularJS ni otro framework para reemplazar Angular.

No convertir el proyecto en una página HTML estática. Debe ser realmente un proyecto Angular.

Angular utiliza actualmente componentes standalone como enfoque predeterminado, por lo que se debe mantener una estructura moderna de Angular. Verificar siempre la compatibilidad con Angular 22 antes de instalar dependencias o utilizar APIs.

---

## 3. Referencia visual principal

La referencia obligatoria es:

https://builder.bootstrapmade.com/demo/iPortfolio/

También puede consultarse la página oficial del template:

https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/

El template iPortfolio está planteado como un portafolio/CV personal responsive y contiene elementos como perfil, navegación, presentación, información personal, habilidades, experiencia, proyectos y contacto.

### La IA debe estudiar principalmente:

- Distribución general de la página.
- Barra lateral de navegación.
- Fotografía circular de perfil.
- Tipografía.
- Espaciado.
- Jerarquía visual.
- Secciones del portafolio.
- Tarjetas y elementos de proyectos.
- Animaciones discretas.
- Diseño responsive.
- Comportamiento de la navegación en dispositivos pequeños.

### No hacer:

- No copiar literalmente textos de ejemplo como "Alex Smith".
- No conservar información falsa del template.
- No utilizar la fotografía del template como fotografía personal.
- No mantener proyectos ficticios como si fueran del estudiante.
- No copiar código innecesario del template original si puede implementarse mejor en Angular.

---

# 4. Información personal

El contenido debe estar preparado para un portafolio personal de estudiante/desarrollador.

Si algún dato personal todavía no está definido, utilizar un marcador claramente identificable en lugar de inventar información.

Por ejemplo:

- `[NOMBRE COMPLETO]`
- `[DESCRIPCIÓN PERSONAL]`
- `[CORREO]`
- `[TELÉFONO]`
- `[CIUDAD, PAÍS]`
- `[GITHUB]`
- `[LINKEDIN]`

**No inventar datos personales, empresas, experiencia laboral, títulos académicos o proyectos que el estudiante no haya proporcionado.**

La estructura debe permitir reemplazar fácilmente esos datos posteriormente.

---

# 5. Fotografía personal

La fotografía personal que debe utilizarse es la imagen proporcionada junto con estas instrucciones.

El archivo entregado es:

`fotoPortafolioPersonal.png`

Crear dentro del proyecto una carpeta específica para recursos personales:

```text
src/
└── assets/
    └── personal/
        └── fotoPortafolioPersonal.png
```

La IA debe utilizar **esa misma fotografía**, no generar una fotografía alternativa ni sustituirla por una imagen de Internet.

## Ubicación recomendada

Copiar la fotografía proporcionada a:

```text
src/assets/personal/fotoPortafolioPersonal.png
```

Y utilizarla desde Angular mediante una ruta relativa apropiada, por ejemplo:

```html
<img
  src="assets/personal/fotoPortafolioPersonal.png"
  alt="Fotografía de perfil"
>
```

Si la configuración concreta de Angular 22 utiliza otra ubicación de assets, adaptar la ruta correctamente, pero mantener la fotografía dentro de una carpeta de recursos personales.

## Uso de la fotografía

La fotografía debe aparecer principalmente en:

1. La sección de perfil de la barra lateral.
2. Opcionalmente en la sección "Sobre mí", si visualmente resulta conveniente.

Debe conservarse como una fotografía real y no aplicarle filtros exagerados.

En la barra lateral debe mostrarse preferentemente:

- Forma circular.
- Tamaño equilibrado.
- `object-fit: cover`.
- Borde o sombra sutil si combina con el diseño.

Ejemplo conceptual:

```html
<img
  src="assets/personal/fotoPortafolioPersonal.png"
  alt="[NOMBRE COMPLETO]"
  class="profile-img"
/>
```

---

# 6. Estructura general del sitio

Crear una página tipo **One Page Portfolio**, inspirada en iPortfolio.

La navegación debe desplazarse hacia las diferentes secciones de la misma página.

Secciones mínimas:

1. Inicio
2. Sobre mí
3. Habilidades
4. Formación / Educación
5. Proyectos / Portafolio
6. Servicios o conocimientos
7. Contacto

Se puede agregar una sección de experiencia si existe información real para completarla.

No agregar secciones innecesarias solamente para hacer el proyecto más grande.

---

# 7. Barra lateral

Crear una barra lateral inspirada en la navegación del template iPortfolio.

Debe contener:

### Perfil

- Fotografía personal.
- Nombre completo.
- Profesión o descripción breve.

### Redes sociales

Preparar botones para:

- GitHub
- LinkedIn
- Instagram
- Facebook

Si una red social no tiene información real, dejar el enlace como marcador:

```text
[LINK_GITHUB]
[LINK_LINKEDIN]
```

No inventar perfiles.

### Menú

El menú debe contener:

- Inicio
- Sobre mí
- Habilidades
- Educación
- Proyectos
- Servicios
- Contacto

Cada elemento debe llevar a su sección correspondiente.

---

# 8. Sección Inicio / Hero

Crear una sección principal visualmente atractiva.

Debe contener:

```text
Hola, soy
[NOMBRE COMPLETO]

[DESCRIPCIÓN PROFESIONAL O ACADÉMICA]
```

También puede utilizarse un efecto de texto dinámico para mostrar diferentes roles, por ejemplo:

```text
Estudiante
Desarrollador
Programador
Diseñador
```

Pero únicamente utilizar roles que tengan sentido para el estudiante.

Agregar un botón:

```text
Ver mis proyectos
```

que desplace al usuario hacia la sección de proyectos.

Opcionalmente:

```text
Contactarme
```

que desplace hacia Contacto.

---

# 9. Sección Sobre mí

Crear una sección titulada:

```text
Sobre mí
```

Debe contener:

- Una breve presentación.
- Área de estudio.
- Intereses tecnológicos.
- Tecnologías que conoce.
- Objetivos profesionales.
- Información básica que sea apropiada para un portafolio académico.

No inventar información.

La sección puede incluir nuevamente la fotografía personal en tamaño pequeño o una composición visual secundaria.

---

# 10. Sección de habilidades

Crear una sección:

```text
Habilidades
```

Mostrar las habilidades mediante barras de progreso, tarjetas o indicadores visuales.

Ejemplos de tecnologías que pueden utilizarse **solo si corresponden al estudiante**:

- HTML
- CSS
- JavaScript
- TypeScript
- Angular
- Flutter
- Java
- Python
- SQL
- Git
- GitHub

Las habilidades deben poder editarse fácilmente desde un archivo TypeScript.

Ejemplo conceptual:

```ts
skills = [
  { name: 'HTML', level: 80 },
  { name: 'CSS', level: 75 },
  { name: 'JavaScript', level: 70 },
  { name: 'Angular', level: 65 }
];
```

La interfaz debe generarse utilizando `@for` o la sintaxis moderna de Angular cuando sea apropiado.

No escribir manualmente el mismo bloque HTML muchas veces si puede generarse desde datos.

---

# 11. Sección Educación / Formación

Crear una sección tipo línea de tiempo o tarjetas.

Debe permitir mostrar:

- Institución.
- Carrera o área de estudio.
- Periodo.
- Descripción.

Utilizar marcadores si faltan datos:

```text
[INSTITUCIÓN]
[CARRERA]
[FECHA DE INICIO]
[FECHA DE FINALIZACIÓN]
```

No inventar universidades ni títulos.

---

# 12. Sección Proyectos / Portafolio

Esta es una de las secciones más importantes.

Crear una galería de proyectos utilizando tarjetas.

Cada proyecto debe poder contener:

- Imagen.
- Nombre.
- Descripción.
- Tecnologías utilizadas.
- Categoría.
- Enlace a GitHub.
- Enlace de demostración, si existe.

Ejemplo conceptual:

```ts
projects = [
  {
    title: 'Control de Gastos Personales',
    description: 'Aplicación para registrar y controlar gastos personales.',
    technologies: ['Angular', 'TypeScript'],
    image: 'assets/personal/proyecto-gastos.png',
    github: '[LINK_GITHUB]'
  }
];
```

La arquitectura debe permitir agregar nuevos proyectos fácilmente.

Si todavía no existen imágenes reales para proyectos, utilizar temporalmente placeholders locales claramente identificados o imágenes neutras apropiadas, pero no presentar proyectos ficticios como trabajos reales.

---

# 13. Proyecto destacado

Si existe un proyecto académico importante, mostrarlo de forma destacada.

Ejemplo:

```text
Control de Gastos Personales
```

Descripción:

```text
Aplicación desarrollada para registrar, organizar y consultar
gastos personales de manera sencilla.
```

No agregar funcionalidades que realmente no existan en el proyecto.

---

# 14. Sección Servicios / Conocimientos

Crear una sección sencilla con tarjetas.

Ejemplos:

- Desarrollo web.
- Desarrollo de aplicaciones móviles.
- Diseño de interfaces.
- Bases de datos.
- Programación.

Estos elementos deben presentarse como áreas de conocimiento si todavía no existe experiencia profesional.

Evitar afirmar que el estudiante ofrece servicios profesionales si no corresponde.

---

# 15. Sección Contacto

Crear una sección de contacto profesional.

Debe mostrar:

- Correo electrónico.
- Teléfono, si se desea publicar.
- Ubicación general.
- GitHub.
- LinkedIn.

También crear un formulario visual:

```text
Nombre
Correo
Asunto
Mensaje
[Enviar mensaje]
```

## Importante

No implementar un backend de correo electrónico si no es necesario para la evaluación.

El formulario puede ser visual/funcional a nivel de interfaz.

Si se implementa envío real, hacerlo únicamente con una solución segura y explicando claramente la configuración necesaria.

No colocar claves API, contraseñas o tokens directamente en el código.

---

# 16. Footer

Crear un footer sencillo con:

```text
© 2026 [NOMBRE COMPLETO]
Portafolio Personal
```

Si se conserva una referencia al template original, respetar las condiciones de licencia correspondientes.

---

# 17. Multimedia

El proyecto debe considerarse una página web multimedia.

Por ello debe utilizar adecuadamente:

- Fotografía personal.
- Imágenes de proyectos.
- Iconos.
- Elementos visuales.
- Animaciones sutiles.
- Posiblemente enlaces multimedia adicionales si son relevantes.

No sobrecargar la página con animaciones.

La prioridad debe ser:

1. Diseño.
2. Legibilidad.
3. Responsive.
4. Rendimiento.
5. Facilidad de mantenimiento.

---

# 18. Animaciones

Agregar animaciones discretas inspiradas en el comportamiento de iPortfolio.

Ejemplos:

- Aparición suave de las secciones.
- Animación al entrar en viewport.
- Hover en tarjetas.
- Hover en botones.
- Transiciones de navegación.

Evitar animaciones excesivas.

Las animaciones no deben impedir la lectura ni afectar el rendimiento.

---

# 19. Diseño responsive

Este requisito es obligatorio.

El sitio debe adaptarse correctamente a:

### Desktop

- Barra lateral visible.
- Contenido principal separado de la barra lateral.
- Galerías en varias columnas.

### Tablet

- Barra lateral adaptada.
- Contenido con menos columnas.

### Móvil

- Menú tipo botón/hamburguesa.
- Contenido a una sola columna.
- Fotografía correctamente dimensionada.
- Botones fáciles de pulsar.
- Texto legible.
- Sin desplazamiento horizontal.

Probar específicamente aproximadamente:

```text
360px
390px
768px
1024px
1366px
1920px
```

---

# 20. Estructura recomendada del proyecto Angular

Utilizar una estructura organizada similar a:

```text
portfolio-personal/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── sidebar/
│   │   │   ├── hero/
│   │   │   ├── about/
│   │   │   ├── skills/
│   │   │   ├── education/
│   │   │   ├── portfolio/
│   │   │   ├── services/
│   │   │   └── contact/
│   │   │
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   └── app.component.scss
│   │
│   ├── assets/
│   │   ├── personal/
│   │   │   └── fotoPortafolioPersonal.png
│   │   │
│   │   └── projects/
│   │       ├── proyecto-1.png
│   │       ├── proyecto-2.png
│   │       └── proyecto-3.png
│   │
│   ├── styles.scss
│   └── index.html
│
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

La estructura puede modificarse si Angular 22 genera otra organización más adecuada, pero debe conservarse una separación clara de componentes.

---

# 21. Componentización

No colocar todo el sitio dentro de un único componente gigante.

Crear componentes independientes para las partes principales.

Por ejemplo:

```text
SidebarComponent
HeroComponent
AboutComponent
SkillsComponent
EducationComponent
PortfolioComponent
ServicesComponent
ContactComponent
```

El componente principal debe encargarse principalmente de organizar las secciones.

Esto facilitará:

- Mantenimiento.
- Correcciones.
- Reutilización.
- Comprensión del proyecto.
- Presentación académica.

---

# 22. Datos editables

Siempre que sea posible, separar los datos del diseño.

Por ejemplo:

```ts
profile = {
  name: '[NOMBRE COMPLETO]',
  profession: '[PROFESIÓN / ÁREA]',
  description: '[DESCRIPCIÓN]'
};
```

Y:

```ts
socialLinks = [
  {
    name: 'GitHub',
    url: '[LINK_GITHUB]',
    icon: 'bi-github'
  }
];
```

De esta manera, cambiar los datos personales no requiere modificar toda la estructura HTML.

---

# 23. Bootstrap e iconos

Utilizar Bootstrap 5 para:

- Grid.
- Responsive.
- Botones.
- Utilidades.
- Espaciado.

Utilizar Bootstrap Icons para los iconos cuando sea conveniente.

Ejemplos:

```text
bi-house
bi-person
bi-file-earmark-text
bi-images
bi-envelope
bi-github
bi-linkedin
```

No descargar manualmente cientos de iconos innecesarios.

---

# 24. Estilos

Crear una identidad visual coherente.

Tomar como referencia la estética de iPortfolio:

- Barra lateral oscura.
- Fondo claro en el contenido.
- Tipografía moderna.
- Contraste elevado.
- Acentos de color.
- Tarjetas limpias.
- Espaciado amplio.

No modificar arbitrariamente toda la estética de iPortfolio.

La página debe verse claramente inspirada en la referencia proporcionada por el docente.

---

# 25. Accesibilidad

Agregar:

- `alt` descriptivo a imágenes.
- `aria-label` cuando sea necesario.
- Contraste suficiente.
- Botones accesibles.
- Navegación mediante teclado cuando corresponda.
- Elementos HTML semánticos.

No utilizar imágenes como sustituto de texto importante.

---

# 26. SEO básico

Configurar:

```html
<title>Portafolio Personal - [NOMBRE]</title>
<meta name="description" content="Portafolio personal de [NOMBRE]">
```

También configurar correctamente:

```html
<html lang="es">
```

---

# 27. Navegación

Aunque sea una página One Page, la navegación debe funcionar correctamente.

Ejemplo:

```text
Inicio → #hero
Sobre mí → #about
Habilidades → #skills
Educación → #education
Proyectos → #portfolio
Servicios → #services
Contacto → #contact
```

Al hacer clic en un elemento del menú, debe desplazarse suavemente hacia la sección.

---

# 28. Requisitos técnicos para la IA generadora de código

La IA que implemente este proyecto debe:

1. Crear un proyecto Angular 22 correctamente.
2. Instalar únicamente las dependencias necesarias.
3. Crear los componentes.
4. Configurar Bootstrap correctamente.
5. Configurar Bootstrap Icons.
6. Crear la estructura de assets.
7. Utilizar la fotografía personal proporcionada.
8. Crear un diseño responsive.
9. Implementar las secciones solicitadas.
10. Comprobar que no existan errores de compilación.
11. Ejecutar el proyecto localmente.
12. Corregir errores de TypeScript, HTML, CSS o Angular.
13. Verificar las rutas de las imágenes.
14. Verificar que no existan enlaces rotos.
15. Verificar que el menú funcione.
16. Verificar que el diseño móvil funcione.

---

# 29. Comandos esperados

La IA puede utilizar comandos equivalentes a:

```bash
ng new portfolio-personal
cd portfolio-personal
npm install
npm install bootstrap bootstrap-icons
ng serve
```

Si el proyecto ya existe, **no crear otro proyecto encima**. Primero inspeccionar la estructura existente.

Para ejecutar:

```bash
ng serve
```

La aplicación debería estar disponible normalmente en:

```text
http://localhost:4200/
```

---

# 30. Reglas para evitar errores

La IA debe respetar las siguientes reglas:

### Regla 1

No eliminar archivos existentes sin comprobar primero para qué sirven.

### Regla 2

No reemplazar Angular por HTML estático.

### Regla 3

No utilizar React, Vue u otros frameworks.

### Regla 4

No inventar información personal.

### Regla 5

No reemplazar la fotografía personal proporcionada.

### Regla 6

No guardar la fotografía dentro de un componente si debe ser un asset.

### Regla 7

No utilizar rutas absolutas de Windows como:

```text
C:\Users\...
```

Las imágenes deben utilizar rutas relativas del proyecto.

### Regla 8

No colocar contraseñas, tokens o claves API dentro del proyecto.

### Regla 9

No instalar paquetes innecesarios.

### Regla 10

Antes de terminar, ejecutar una compilación de producción:

```bash
ng build
```

y corregir cualquier error.

---

# 31. Verificación final

Antes de considerar terminado el proyecto, comprobar:

## Angular

- [ ] Angular 22.
- [ ] Proyecto ejecuta correctamente.
- [ ] `ng build` funciona.
- [ ] No existen errores de TypeScript.
- [ ] No existen errores en consola.

## Diseño

- [ ] Inspirado en iPortfolio.
- [ ] Barra lateral.
- [ ] Inicio.
- [ ] Sobre mí.
- [ ] Habilidades.
- [ ] Educación.
- [ ] Proyectos.
- [ ] Servicios/conocimientos.
- [ ] Contacto.
- [ ] Footer.

## Fotografía

- [ ] Se utiliza `fotoPortafolioPersonal.png`.
- [ ] La imagen está dentro de `src/assets/personal/`.
- [ ] La imagen carga correctamente.
- [ ] Tiene texto alternativo.
- [ ] Se ve correctamente en desktop y móvil.

## Responsive

- [ ] Desktop.
- [ ] Laptop.
- [ ] Tablet.
- [ ] Móvil.
- [ ] Sin scroll horizontal.

## Funcionalidad

- [ ] Menú funciona.
- [ ] Enlaces internos funcionan.
- [ ] Scroll suave.
- [ ] Redes sociales tienen enlaces configurables.
- [ ] Tarjetas de proyectos funcionan.
- [ ] Formulario de contacto se muestra correctamente.

---

# 32. GitHub - opcional

Si se desea obtener los puntos extra, preparar el proyecto para subirlo a GitHub.

Crear un repositorio con un nombre como:

```text
portfolio-personal-angular
```

Antes de subirlo, comprobar que `.gitignore` incluya elementos que no deben subirse, especialmente:

```text
node_modules/
dist/
```

No subir:

- Contraseñas.
- Tokens.
- Claves privadas.
- Información sensible.

El repositorio debería incluir:

```text
README.md
src/
angular.json
package.json
tsconfig.json
```

y los demás archivos necesarios para reconstruir el proyecto.

---

# 33. README.md

Crear un `README.md` explicando:

```text
# Portafolio Personal

Portafolio personal desarrollado con Angular 22.

## Tecnologías

- Angular 22
- TypeScript
- Bootstrap 5
- Bootstrap Icons
- HTML
- CSS/SCSS

## Instalación

npm install

## Ejecución

ng serve

## Compilación

ng build
```

También explicar brevemente:

- Objetivo del proyecto.
- Estructura principal.
- Cómo reemplazar la fotografía.
- Cómo modificar los datos personales.
- Cómo agregar nuevos proyectos.

---

# 34. Instrucción final para la IA generadora de código

**Implementa este proyecto siguiendo todas las instrucciones anteriores.**

Antes de escribir código:

1. Inspecciona la estructura actual del proyecto.
2. Determina si Angular 22 ya está instalado.
3. No destruyas trabajo existente.
4. Identifica dónde están los assets.
5. Crea la carpeta `src/assets/personal/`.
6. Utiliza la fotografía `fotoPortafolioPersonal.png` proporcionada por el usuario.
7. Construye el portafolio siguiendo la referencia visual de iPortfolio.
8. Divide la interfaz en componentes Angular.
9. Mantén los datos personales fácilmente editables.
10. Implementa primero la estructura y después el diseño visual.
11. Comprueba responsive.
12. Ejecuta la aplicación.
13. Corrige los errores encontrados.
14. Ejecuta `ng build`.
15. No consideres terminado el proyecto hasta que compile correctamente.

**Prioridad del proyecto:**

```text
Angular 22 correcto
        ↓
Componentización
        ↓
Diseño inspirado en iPortfolio
        ↓
Contenido personal
        ↓
Fotografía personal
        ↓
Responsive
        ↓
Multimedia
        ↓
Animaciones
        ↓
Optimización y revisión final
```

El resultado debe parecer un **portafolio personal académico/profesional real**, no una demostración genérica de Angular.
