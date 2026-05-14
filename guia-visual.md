Guía Visual UX/UI - Sitio Web Kroma
Manual de Instrucciones para Implementación de Diseño
1. ANATOMÍA DE LA PÁGINA (DE ARRIBA HACIA ABAJO)
SECCIÓN 1: HERO / HEADER
Ubicación: Primera sección visible al entrar al sitio

Contenido:

Logo Kroma (imagen 1 que proporcionaste - la K en negro y gris)
Centrado horizontal y verticalmente
Especificaciones:

Altura de sección: 100vh en desktop, 60vh en mobile
Fondo: blanco puro
Logo: máximo 300px de ancho en desktop, 200px en mobile
Sin navegación, sin menú, completamente limpio
SECCIÓN 2: INTRODUCCIÓN
Ubicación: Inmediatamente después del hero

Contenido:

Bloque de texto con la misión de Kroma (el texto que proporcionaste)
Centrado horizontalmente
Especificaciones:

Ancho máximo del contenedor de texto: 800px
Texto centrado (text-align: center)
Padding vertical: 120px arriba y abajo en desktop, 80px en mobile
Padding horizontal: 40px en desktop, 24px en mobile
Fondo: blanco
Color de texto: negro
Tamaño de fuente: 20px en desktop, 18px en mobile
Interlineado: 1.8 (espaciado generoso entre líneas)
El texto debe respirar, sin sentirse apretado
SECCIÓN 3: CATEGORÍA DE SERVICIO - FOTOGRAFÍA
Ubicación: Después de la introducción

Estructura:

Título de categoría "Fotografía"
Línea separadora sutil (opcional)
Lista de 6 servicios individuales
Especificaciones del título de categoría:

Alineado a la izquierda
Margen izquierdo: 80px en desktop, 24px en mobile
Tamaño de fuente: 56px en desktop, 36px en mobile
Peso: Bold (700)
Margin bottom: 60px
Línea separadora debajo (si se usa): 1px de grosor, negro, 40% de opacidad
Especificaciones de cada servicio individual: Cada servicio sigue esta estructura vertical:

A) Título del servicio (ej: "Producto")

Tamaño: 36px en desktop, 28px en mobile
Peso: Semibold (600)
Color: negro
Margin bottom: 20px
B) Descripción del servicio

Ancho máximo: 700px
Tamaño: 18px en desktop, 16px en mobile
Peso: Regular (400)
Interlineado: 1.6
Color: negro
Margin bottom: 40px
C) Carrusel de imágenes

Ancho: 100% del contenedor (máximo 1200px)
Altura: 600px en desktop, 400px en mobile
Imágenes cubren el espacio sin deformarse (object-fit: cover)
Controles de navegación: flechas simples en los laterales
Flechas: líneas negras simples, grosor 2px
Indicadores de posición: pequeños círculos negros debajo del carrusel
Círculo activo: relleno negro
Círculos inactivos: borde negro, interior blanco
Tamaño de círculos: 10px de diámetro
Separación entre círculos: 12px
Espaciado entre servicios:

Margin bottom: 100px en desktop, 80px en mobile
Esto crea separación clara entre cada servicio
Padding de la sección completa:

Padding vertical: 120px arriba y abajo
Padding horizontal: 80px en desktop, 24px en mobile
SECCIÓN 4: CATEGORÍA DE SERVICIO - SITIOS WEB
Ubicación: Después de la categoría Fotografía

Estructura: IDÉNTICA a la sección anterior

Título: "Sitios Web"
6 servicios con la misma estructura
Mismas especificaciones de tipografía, espaciado y carrusel
SECCIÓN 5: CATEGORÍA DE SERVICIO - CONTENIDO IA
Ubicación: Después de la categoría Sitios Web

Estructura: IDÉNTICA a las anteriores

Título: "Contenido IA"
2 servicios con la misma estructura
Mismas especificaciones de tipografía, espaciado y carrusel
SECCIÓN 6: FOOTER
Ubicación: Final de la página

Contenido:

Dos iconos horizontales: Instagram y WhatsApp
Texto pequeño de copyright (opcional): "Kroma © 2026"
Especificaciones:

Fondo: gris oscuro (#1A1A1A)
Altura: 200px en desktop, auto en mobile
Contenido centrado horizontal y verticalmente
Iconos:

Color: blanco
Estilo: 2D, minimalistas, sin relleno (solo contornos)
Tamaño: 32px x 32px
Separación entre iconos: 40px
Efecto hover: opacidad 70%
Texto de copyright:

Ubicado debajo de los iconos
Tamaño: 14px
Color: blanco con 60% de opacidad
Centrado
Margin top desde iconos: 24px
ELEMENTO FLOTANTE: BOTÓN WHATSAPP
Ubicación: Fijo en la pantalla, siempre visible

Posicionamiento:

Posición: fixed (no se mueve al hacer scroll)
Distancia desde abajo: 32px
Distancia desde derecha: 32px
Z-index: 9999 (siempre por encima de todo)
Especificaciones visuales:

Forma: círculo perfecto
Diámetro: 64px en desktop, 56px en mobile
Fondo: blanco
Sombra: difusa, negra con 15% de opacidad, blur 20px, offset Y: 4px
Icono dentro: logo WhatsApp oficial
Color del icono: verde WhatsApp (#25D366)
Tamaño del icono: 36px en desktop, 32px en mobile
Centrado dentro del círculo
Efecto hover (desktop):

Escala: aumentar a 1.1 (110%)
Transición suave: 0.3 segundos
Sombra más pronunciada: blur 30px
Funcionalidad:

Al hacer clic: abre WhatsApp web o app
URL formato: https://wa.me/NUMERO?text=Hola,%20me%20interesa%20consultar%20por%20sus%20servicios
2. SISTEMA DE ESPACIADO CONSISTENTE
Espaciado Vertical (Padding y Margin)
Extra Large: 120px (separación entre secciones principales)
Large: 80px (padding interno de secciones)
Medium: 60px (separación entre elementos relacionados)
Small: 40px (separación entre párrafos o elementos cercanos)
Tiny: 20px (separación mínima entre elementos muy relacionados)
Espaciado Horizontal (Padding de contenedor)
Desktop: 80px izquierda y derecha
Tablet: 40px izquierda y derecha
Mobile: 24px izquierda y derecha
Ancho máximo de contenedores
Texto de lectura: 800px máximo
Carruseles: 1200px máximo
Contenedor general: 1400px máximo
3. COMPORTAMIENTO RESPONSIVE
Breakpoints
Mobile: 0px - 640px
Tablet: 641px - 1024px
Desktop: 1025px en adelante
Cambios en Mobile
Tipografía: reducir tamaños según especificado arriba
Espaciado: reducir paddings y margins a 60-70% del tamaño desktop
Carruseles: altura reducida a 400px, flechas más pequeñas
Hero: altura de 60vh en lugar de 100vh
Botón WhatsApp: tamaño reducido y más cerca del borde (20px)
Footer: iconos apilados verticalmente si es necesario
4. INTERACCIONES Y ANIMACIONES
Scroll suave
Comportamiento: smooth scrolling al navegar entre secciones
CSS: scroll-behavior: smooth en el elemento html
Transiciones de carrusel
Duración: 0.5 segundos
Efecto: ease-in-out
Tipo: fade o slide horizontal
Hover en elementos clicables
Enlaces del footer: opacidad 70% en hover
Flechas del carrusel: opacidad 100% en hover (70% normal)
Botón WhatsApp: escala 110% en hover
Carga de imágenes
Efecto: lazy loading (cargan cuando están cerca del viewport)
Placeholder: fondo gris muy claro (#F5F5F5) mientras carga
Transición: fade in suave al cargar (0.3 segundos)
5. JERARQUÍA VISUAL
Orden de prominencia (de más a menos importante)
Logo en Hero: primera impresión, máxima atención
Títulos de categoría: segunda capa de jerarquía
Títulos de servicio: tercera capa
Descripciones: contenido de lectura
Carruseles: contenido visual de apoyo
Footer: información secundaria
Contraste
Usar solo negro sobre blanco para texto
No usar grises para texto principal (solo para elementos secundarios como copyright)
Mantener ratio de contraste mínimo 7:1 para accesibilidad
6. ESTRUCTURA DE CARRUSEL (DETALLADO)
Contenedor del carrusel
Posición relativa
Overflow hidden
Ancho: 100% del contenedor padre
Altura fija según especificado
Pista de imágenes
Display flex o grid
Las 4 imágenes alineadas horizontalmente
Solo una visible a la vez
Transición entre imágenes: transform translateX
Controles de navegación
Flecha izquierda:

Posición: absoluta, centrada verticalmente
Left: 20px
Ícono: chevron o arrow simple
Color: negro
Fondo: blanco semi-transparente (opcional)
Padding: 12px
Border radius: 4px
Flecha derecha:

Igual que izquierda pero Right: 20px
Indicadores (dots):

Posición: absoluta
Bottom: 20px
Centrados horizontalmente
Display flex con gap de 12px
Cada dot es un button o div clicable
7. PRINCIPIOS DE DISEÑO A MANTENER
Minimalismo
Eliminar cualquier elemento decorativo innecesario
Solo elementos funcionales
Mucho espacio en blanco (white space)
No usar bordes a menos que sean estrictamente necesarios
Institucionalidad
Mantener seriedad y profesionalismo
Evitar animaciones excesivas o llamativas
Todo debe sentirse pulido y premium
Tipografía consistente en toda la página
Claridad
Jerarquía visual obvia
Fácil de escanear visualmente
Información organizada en bloques claros
No sobrecargar con texto
Funcionalidad
Cada elemento tiene un propósito claro
Navegación intuitiva
Calls to action evidentes (botón WhatsApp, footer)
Carruseles fáciles de usar
8. ACCESIBILIDAD
Contraste de colores
Negro sobre blanco: contraste perfecto
Gris de footer: verificar que texto blanco tenga contraste suficiente
Interacción por teclado
Todos los botones y links navegables con Tab
Carruseles controlables con flechas de teclado
Focus visible en elementos interactivos
Textos alternativos
Todas las imágenes del carrusel deben tener alt text descriptivo
Logo debe tener alt="Kroma"
Tamaños mínimos clicables
Botones y links: mínimo 44x44px de área clicable
Controles de carrusel: mínimo 44x44px
9. LISTA DE VERIFICACIÓN FINAL
Antes de considerar el diseño completo, verificar:

 Paleta de colores limitada a: blanco, negro, gris footer, verde WhatsApp
 Font Inter aplicada en toda la página
 Todas las 14 servicios tienen su carrusel con 4 imágenes
 Botón WhatsApp visible en todas las resoluciones
 Footer con ambos iconos funcionando correctamente
 Espaciado consistente entre todas las secciones
 Responsive funcional en mobile, tablet y desktop
 Carruseles con controles visibles y funcionales
 Links de WhatsApp e Instagram con URLs correctas
 Smooth scroll activado
 Lazy loading de imágenes implementado
 No hay elementos decorativos innecesarios
 Diseño se siente minimalista e institucional
 Jerarquía visual clara y obvia
 Accesibilidad básica cumplida