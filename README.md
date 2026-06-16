# Refactor de páginas de producto

Este proyecto contiene el refactor responsive de páginas de producto para DS3 Comunicaciones usando HTML, CSS y JavaScript vanilla.

## Qué se hizo

### Página AMP `6-1427200-4`

Se creó y adaptó la página:

```txt
pages/6-1427200-4.html
```

Cambios principales:

- Refactor completo del `<head>` con metadata limpia y orientada al producto.
- Implementación responsive sin Tailwind CDN.
- Uso de componentes CSS locales para:
  - header
  - navbar
  - breadcrumbs
  - carrusel de marcas
  - hero de producto
  - productos relacionados
  - lista de precios
  - footer
- Actualización del producto a:
  - **Cable UTP AMP Categoria 6 Chaqueta CMR 23AWG 6-1427200-4**
- Imágenes del producto agregadas en `public/`.
- Ficha técnica PDF agregada en `public/6-1427200-4-DS.pdf`.
- Especificaciones técnicas tomadas desde el PDF oficial.
- Sección de productos relacionados reemplazada por cables AMP Cat 6 y Cat 6A.
- Se limpiaron comentarios HTML innecesarios.

### Página Cisco C9200L

Se movió la página original:

```txt
C9200L-24P-4G-E.html
```

a:

```txt
pages/C9200L-24P-4G-E.html
```

Cambios principales:

- La página ahora vive dentro de `pages/`.
- Se actualizaron rutas internas que apuntaban al producto.
- Se actualizó el enlace desde `index.html`.
- Se actualizó el enlace en el componente de productos relacionados.
- Se limpiaron comentarios HTML innecesarios.

### Componentes compartidos

Se agregaron o mejoraron componentes reutilizables:

```txt
components/header/
components/navbar/
components/breadcrumbs/
components/brand-carousel/
components/product-hero/
components/related-products/
components/price-list/
components/footer/
```

Mejoras destacadas:

- Header responsive con menú móvil.
- Header sticky al hacer scroll.
- Navbar sticky debajo del header.
- Carrusel de marcas responsive con flechas y dots.
- Breadcrumb alineado y sin padding izquierdo innecesario.
- Hero de producto responsive con galería, precio, CTA y documentación.
- Lista de precios como sección independiente.
- Footer actualizado con canales de contacto.

### Tokens globales

Se agregó configuración base en:

```txt
css/global.css
```

Incluye tokens de:

- colores
- fondos
- márgenes responsive
- gutters
- radios
- anchos máximos

## Assets agregados

```txt
public/1427254-4-1.jpg
public/1859218-2.jpg
public/219585-2_front.jpg
public/6-1427200-4-DS.pdf
public/UTP-box.png
public/UTP-cable.png
```

## Notas

- El proyecto evita Tailwind CDN para producción en las páginas refactorizadas.
- La implementación usa HTML/CSS/JS vanilla.
- Algunos archivos legacy pueden permanecer en el proyecto, pero las páginas refactorizadas usan componentes CSS locales.
