FASE 1: PLANIFICACIÓN Y ESTRUCTURA
Paso 1: Definir la arquitectura de información
Confirmar que el sitio será una landing page de una sola página (one-page) con scroll vertical
Estructura de secciones:
Hero / Header
Introducción
Categoría: Fotografía
Categoría: Sitios Web
Categoría: Contenido IA
Footer
Botón flotante de WhatsApp
Paso 2: Catalogar servicios por categoría
FOTOGRAFÍA (6 servicios):

Producto
Institucional
Interiores/Exteriores
Eventos sociales
Documentación
Backstage
SITIOS WEB (6 tipos):

Informativa
Institucional
E-commerce
Landing-Page
Artísticas
Portfolio
CONTENIDO IA (2 servicios):

Fotos de Producto
Flyers
Paso 3: Redactar descripciones para cada servicio
Escribir para cada uno de los 14 servicios:
Breve explicación de qué consiste el servicio
Beneficios específicos para el cliente
Mantener tono formal, directo y profesional
Máximo 3-4 líneas por servicio
FASE 2: PREPARACIÓN DE RECURSOS
Paso 4: Organizar imágenes
Clasificar las 4 imágenes que proporcionarás para cada servicio
Total: 14 servicios × 4 imágenes = 56 imágenes
Nombrarlas con nomenclatura consistente:
fotografia-producto-01.jpg, fotografia-producto-02.jpg, etc.
sitio-ecommerce-01.jpg, sitio-ecommerce-02.jpg, etc.
ia-flyers-01.jpg, ia-flyers-02.jpg, etc.
Paso 5: Obtener recursos adicionales
Logo Kroma (ya tienes la imagen 1 con el logo "K")
Icono de WhatsApp en verde (#25D366)
Iconos minimalistas 2D en blanco para:
WhatsApp (para footer)
Instagram (para footer)
Paso 6: Definir datos de contacto
Número de WhatsApp con formato internacional
Usuario/URL de Instagram
Mensaje predefinido para el enlace de WhatsApp (ejemplo: "Hola, me interesa consultar por sus servicios")
FASE 3: CONFIGURACIÓN DEL ENTORNO DE DESARROLLO
Paso 7: Inicializar proyecto Next.js
Crear nuevo proyecto con Next.js 14+ (App Router)
Seleccionar:
TypeScript: Sí
Tailwind CSS: Sí
App Router: Sí
Paso 8: Instalar dependencias adicionales
Biblioteca de carrusel (react-responsive-carousel o swiper)
Biblioteca de iconos (react-icons o lucide-react)
Librería para animaciones de scroll opcional (framer-motion)
Paso 9: Configurar Tailwind
Extender configuración con:
Font Inter (ya viene por defecto en Next.js 14)
Colores personalizados:
Negro: #000000
Blanco: #FFFFFF
Gris oscuro footer: #1A1A1A o #2D2D2D
Verde WhatsApp: #25D366
FASE 4: ESTRUCTURA DE CARPETAS Y ARCHIVOS
Paso 10: Crear estructura de carpetas
/app
  - page.tsx (página principal)
  - layout.tsx
  - globals.css

/components
  - Hero.tsx
  - Intro.tsx
  - ServiceCategory.tsx
  - ServiceItem.tsx
  - Carousel.tsx
  - WhatsAppButton.tsx
  - Footer.tsx

/public
  /images
    /fotografia
    /sitios-web
    /contenido-ia
    /icons

/data
  - services.ts (datos estructurados de servicios)

/types
  - index.ts (tipos TypeScript)
  Paso 11: Crear archivo de datos
En /data/services.ts crear objeto JSON con:
Categorías (Fotografía, Sitios Web, Contenido IA)
Por cada categoría: array de servicios
Por cada servicio:
Título
Descripción
Beneficios
Array de rutas de imágenes (4 por servicio)
FASE 5: DESARROLLO DE COMPONENTES
Paso 12: Componente Hero/Header
Fondo blanco
Logo Kroma centrado (imagen 1)
Título principal: "Kroma" (si no está en el logo)
Subtítulo opcional minimalista
Padding generoso arriba y abajo
Totalmente minimalista, sin menú de navegación
Paso 13: Componente Introducción
Sección con fondo blanco
Texto centrado en font Inter
Contenido:
"En Kroma tenemos el objetivo de potenciar la imagen y presentación de toda propuesta, abarcando la creación de contenido visual para todo tipo de marcas, negocios, servicios y empresas."
"Ofrecemos una variedad de servicios que se adecúan a los sectores comerciales, sociales, institucionales y educativos:"
Espaciado amplio (padding vertical generoso)
Paso 14: Componente ServiceCategory
Props: título de categoría, array de servicios
Layout:
Título de categoría (ej: "Fotografía") con tipografía grande, bold, negro
Separador sutil (línea fina negra opcional)
Renderizar cada servicio usando ServiceItem
Paso 15: Componente ServiceItem
Props: título servicio, descripción, array imágenes
Layout:
Título del servicio (ej: "Producto") en negrita
Descripción del servicio y beneficios
Carrusel de imágenes debajo
Alternar alineación (izquierda/derecha) entre servicios para variedad visual opcional
Fondo blanco, texto negro
Paso 16: Componente Carousel
Props: array de imágenes
Funcionalidad:
Mostrar imagen actual en tamaño grande
Controles anterior/siguiente (flechas minimalistas)
Indicadores de posición (dots)
Transiciones suaves
Responsive: adaptar tamaño según pantalla
Estilo ultra minimalista: controles discretos en negro
Paso 17: Componente WhatsAppButton
Botón flotante con position: fixed
Ubicación: bottom-right (ej: bottom: 24px, right: 24px)
Ícono de WhatsApp en color verde #25D366
Fondo blanco con sombra sutil
Redondo (border-radius: 50%)
Al hacer clic: abrir WhatsApp con número predefinido
URL: https://wa.me/NÚMERO?text=MENSAJE
Permanece visible al hacer scroll (z-index alto)
Paso 18: Componente Footer
Fondo gris oscuro (#1A1A1A o #2D2D2D)
Layout centrado:
Dos iconos: WhatsApp e Instagram
Iconos en blanco, 2D, minimalistas, tamaño pequeño
Distribuidos horizontalmente con espaciado
Links:
WhatsApp → misma URL que botón flotante
Instagram → https://instagram.com/USUARIO
Padding vertical moderado
Opcional: texto pequeño con copyright o "Kroma © 2026"
FASE 6: ENSAMBLAJE DE LA PÁGINA
Paso 19: Construir página principal (app/page.tsx)
Importar todos los componentes
Estructura:

<Hero />
<Intro />
<ServiceCategory title="Fotografía" services={fotografiaServices} />
<ServiceCategory title="Sitios Web" services={sitiosWebServices} />
<ServiceCategory title="Contenido IA" services={contenidoIAServices} />
<Footer />
<WhatsAppButton />

Paso 20: Aplicar estilos globales
En globals.css:
Aplicar font Inter a todo el sitio
Resetear márgenes y paddings
Color de fondo general: blanco
Color de texto por defecto: negro
Smooth scrolling: html { scroll-behavior: smooth; }
FASE 7: OPTIMIZACIÓN Y RESPONSIVE
Paso 21: Hacer diseño responsive
Utilizar breakpoints de Tailwind (sm, md, lg, xl)
Prioridades:
Mobile first (empezar diseñando para móvil)
Carruseles adaptables en móvil
Textos legibles en pantallas pequeñas
Botón WhatsApp bien posicionado en móvil
Footer apilado verticalmente en móvil si es necesario
Paso 22: Optimizar imágenes
Usar componente <Image> de Next.js
Configurar:
width y height apropiados
loading="lazy" para cargar diferido
Formato WebP para mejor compresión
Placeholder blur opcional
Paso 23: Optimizar rendimiento
Lazy loading de carruseles que no están en viewport
Minimizar animaciones innecesarias
Asegurar carga rápida (<3 segundos)
FASE 8: PRUEBAS Y AJUSTES
Paso 24: Pruebas de funcionalidad
Verificar que todos los carruseles funcionen correctamente
Comprobar que botón WhatsApp abre la app/web correctamente
Verificar que footer redirige a Instagram correctamente
Probar en diferentes navegadores (Chrome, Firefox, Safari, Edge)
Paso 25: Pruebas responsive
Probar en dispositivos reales o herramientas de desarrollo:
iPhone (varios modelos)
Android (varios tamaños)
Tablet
Desktop (varias resoluciones)
Paso 26: Revisar contenido
Verificar ortografía y gramática en todos los textos
Confirmar que todas las 56 imágenes se muestran correctamente
Revisar que descripciones de servicios sean claras y persuasivas
Paso 27: Ajustes finales de diseño
Verificar espaciado consistente entre secciones
Confirmar paleta de colores: solo blanco, negro, gris oscuro y verde WhatsApp
Asegurar que el diseño se siente ultra minimalista e institucional
Ajustar tamaños de fuente para jerarquía visual clara
FASE 9: PREPARACIÓN PARA DEPLOY
Paso 28: Optimizar para producción
Ejecutar npm run build para generar build de producción
Verificar que no hay errores de compilación
Revisar warnings y solucionarlos si son relevantes
Paso 29: Configurar SEO básico
En layout.tsx o page.tsx agregar metadata:
title: "Kroma - Servicios de Contenido Visual"
description: Resumen de servicios
Open Graph tags para compartir en redes sociales
Favicon (usar logo de Kroma)
Paso 30: Elegir plataforma de hosting
Opciones recomendadas:

Vercel (recomendado para Next.js, deploy automático desde GitHub)
Netlify
GitHub Pages (requiere exportación estática)
FASE 10: DEPLOYMENT Y LANZAMIENTO
Paso 31: Crear repositorio Git
Inicializar Git en el proyecto
Crear repositorio en GitHub
Hacer commit inicial
Conectar repositorio local con remoto
Push del código
Paso 32: Deploy en plataforma elegida
Si usas Vercel:

Conectar cuenta de GitHub con Vercel
Importar repositorio
Configurar proyecto (Next.js se detecta automáticamente)
Deploy con un clic
Vercel asignará URL temporal (ej: proyecto.vercel.app)
Paso 33: Configurar dominio (opcional)
Si tienes dominio propio (ej: kroma.com):
Agregarlo en configuración de Vercel/Netlify
Configurar DNS según indicaciones de la plataforma
Esperar propagación DNS (24-48 horas)
Paso 34: Prueba final en producción
Visitar URL del sitio desplegado
Realizar todas las pruebas del paso 24-26 en el sitio en vivo
Compartir URL con stakeholders para feedback
FASE 11: MANTENIMIENTO Y ACTUALIZACIONES
Paso 35: Documentar el proyecto
Crear README.md con:
Descripción del proyecto
Instrucciones para correr localmente
Estructura de carpetas
Cómo agregar nuevos servicios
Cómo actualizar imágenes
Paso 36: Plan de actualizaciones
Definir proceso para:

Agregar nuevos servicios
Actualizar descripciones
Cambiar imágenes de carruseles
Actualizar datos de contacto
Paso 37: Monitoreo
Configurar Google Analytics (opcional)
Monitorear rendimiento con Lighthouse
Recoger feedback de usuarios
Iterar mejoras según necesidad
RESUMEN DE ENTREGABLES
✅ Sitio web responsivo en Next.js + Tailwind
✅ 3 categorías de servicio con 14 servicios en total
✅ 14 carruseles con 4 imágenes cada uno (56 imágenes totales)
✅ Botón flotante de WhatsApp
✅ Footer con links a Instagram y WhatsApp
✅ Diseño ultra minimalista blanco/negro
✅ Font Inter
✅ Sitio desplegado y accesible en línea