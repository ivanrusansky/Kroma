# Kroma — Sitio Web de Servicios de Contenido Visual

Landing page de una sola página para **Kroma**, estudio de contenido visual. Incluye fotografía profesional, sitios web y contenido generado con IA.

## Stack

- [Next.js 16](https://nextjs.org) — App Router, exportación estática
- TypeScript
- Tailwind CSS
- lucide-react — íconos
- IntersectionObserver — animaciones de scroll (sin dependencias externas)

## Correr localmente

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
```

## Estructura de carpetas

```
app/
  layout.tsx          — fuente Inter, metadata SEO, globals
  page.tsx            — ensamble de secciones
  globals.css         — variables de color, scroll suave

components/
  Hero.tsx            — logo centrado, sección inicial
  Intro.tsx           — texto de misión
  ServiceCategory.tsx — título de categoría + lista de servicios
  ServiceItem.tsx     — título + descripción + carrusel
  Carousel.tsx        — carrusel con flechas, dots y teclado
  FadeInSection.tsx   — wrapper de animación fade-in al scroll
  WhatsAppButton.tsx  — botón flotante de contacto
  Footer.tsx          — íconos Instagram y WhatsApp

data/
  services.ts         — 3 categorías, 14 servicios, 4 imágenes c/u

types/
  index.ts            — interfaces Service y Category

public/images/
  fotografia/         — 24 imágenes (6 servicios × 4)
  sitios-web/         — 24 imágenes (6 servicios × 4)
  contenido-ia/       — 8 imágenes (2 servicios × 4)
  icons/
    logo-kroma.png    — logo principal (Hero + favicon)
```

## Cómo agregar o actualizar servicios

Editar `data/services.ts`. Cada servicio tiene: `id`, `title`, `description`, e `images` (array de 4 rutas dentro de `/public`).

## Cómo actualizar datos de contacto

- **WhatsApp:** cambiar `WA_NUMBER` en `components/WhatsAppButton.tsx` y `components/Footer.tsx`
- **Instagram:** cambiar `INSTAGRAM_URL` en `components/Footer.tsx`

## Cómo agregar imágenes

Colocar archivos en `public/images/{fotografia|sitios-web|contenido-ia}/` con la nomenclatura:

```
fotografia-producto-01.jpg
sitio-ecommerce-01.jpg
ia-flyers-01.jpg
```

## Deploy (Vercel)

1. Subir el repositorio a GitHub
2. Importar en [vercel.com](https://vercel.com)
3. Next.js se detecta automáticamente — deploy con un clic
4. Actualizar `metadataBase` en `app/layout.tsx` con la URL definitiva

## Paleta de colores

| Token | Valor |
|---|---|
| Fondo | `#FFFFFF` |
| Texto | `#000000` |
| Footer | `#1A1A1A` |
| WhatsApp | `#25D366` |

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
