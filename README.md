# Landing page — Servicio Técnico de Electrodomésticos CDMX

Sitio estático en HTML, CSS y JavaScript, sin dependencias ni proceso de compilación.

## Archivos
- `index.html`: contenido, metadatos SEO, datos estructurados y secciones.
- `styles.css`: diseño responsive.
- `config.js`: número de teléfono/WhatsApp y mensaje inicial.
- `script.js`: enlaces de contacto, formulario que prepara un mensaje y menú móvil.

## Antes de publicar
1. Edita `config.js` y reemplaza `phoneDigits` por el número real en formato internacional, solo dígitos (México: 52 + número, sin +, espacios ni guiones). El placeholder `525500000000` está bloqueado intencionalmente y muestra una advertencia en lugar de abrir un número ficticio.
2. En `index.html`, reemplaza `https://www.TU-DOMINIO.com/` en `canonical`, Open Graph y Schema por el dominio real.
3. El teléfono ya está incorporado en los datos estructurados JSON-LD.
4. Verifica todas las imágenes remotas y, de ser posible, sustitúyelas por imágenes propias o autorizadas optimizadas para web.
5. Confirma datos del negocio, garantía y condiciones de atención urgente.
6. Cuando tengas dominio, crea `robots.txt` y `sitemap.xml`, configura Google Search Console y envía el sitemap.

## Ejecutar y publicar
Abre `index.html` en un navegador o usa Live Server en VS Code. En Netlify puedes desplegar esta carpeta como sitio estático; no requiere comando de build.

## Notas
- El formulario no almacena datos en un servidor: abre WhatsApp con el mensaje preparado.
- La atención el mismo día se expresa como sujeta a disponibilidad, horario y ubicación.
- Las imágenes actuales son remotas de Unsplash y deben verificarse antes de producción.
