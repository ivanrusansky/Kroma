import { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "fotografia",
    title: "Fotografía",
    services: [
      {
        id: "fotografia-producto",
        title: "Producto",
        description:
          "Fotografía especializada para exhibir productos con la máxima calidad visual. Destacamos texturas, detalles y acabados que generan confianza en el comprador y potencian las ventas en cualquier canal digital o impreso.",
        images: [
          "/images/fotografia/producto/1.jpg",
          "/images/fotografia/producto/2.jpg",
          "/images/fotografia/producto/3.jpg",
          "/images/fotografia/producto/4.jpg",
          "/images/fotografia/producto/5.jpg",
          "/images/fotografia/producto/6.jpg",
        ],
      },
      {
        id: "fotografia-institucional",
        title: "Institucional",
        description:
          "Imágenes corporativas que transmiten los valores, cultura y profesionalismo de su organización. Ideales para comunicaciones internas, sitios web, memorias anuales y materiales de prensa.",
        images: [
          "/images/fotografia/institucional/1.jpg",
          "/images/fotografia/institucional/2.jpg",
          "/images/fotografia/institucional/3.jpg",
          "/images/fotografia/institucional/4.jpg",
          "/images/fotografia/institucional/5.jpg",
          "/images/fotografia/institucional/6.jpg",
        ],
      },
      {
        id: "fotografia-interiores-exteriores",
        title: "Interiores / Exteriores",
        description:
          "Registro fotográfico de espacios arquitectónicos, comerciales y residenciales. Mostramos ambientes con luz y composición cuidadas para destacar cada rincón y atraer a clientes potenciales.",
        images: [
          "/images/fotografia/interior/1.jpg",
          "/images/fotografia/interior/2.jpg",
          "/images/fotografia/interior/3.jpg",
          "/images/fotografia/interior/4.jpg",
          "/images/fotografia/interior/5.jpg",
          "/images/fotografia/interior/6.jpg",
        ],
      },
      {
        id: "fotografia-eventos-sociales",
        title: "Eventos Sociales",
        description:
          "Cobertura fotográfica completa de eventos corporativos, celebraciones y encuentros sociales. Capturamos los momentos más significativos con un enfoque documental y emocional.",
        images: [
          "/images/fotografia/social/1.jpg",
          "/images/fotografia/social/2.jpg",
          "/images/fotografia/social/3.jpg",
          "/images/fotografia/social/4.jpg",
          "/images/fotografia/social/5.jpg",
          "/images/fotografia/social/6.jpg",
        ],
      },
      {
        id: "fotografia-documentacion",
        title: "Documentación",
        description:
          "Fotografía técnica y de registro para procesos, obras, patrimonio e informes. Ideal para organismos públicos, empresas constructoras y cualquier entidad que requiera evidencia visual precisa y ordenada.",
        images: [
          "/images/fotografia/documental/1.jpg",
          "/images/fotografia/documental/2.jpg",
          "/images/fotografia/documental/3.jpg",
          "/images/fotografia/documental/4.jpg",
        ],
      },
      {
        id: "fotografia-gastronomica",
        title: "Gastronomía",
        description:
          "Fotografía especializada en gastronomía, con atención al detalle en texturas, colores y presentación de platos y bebidas. Ideal para restaurantes, cafeterías, chefs y marcas alimenticias que buscan comunicar sabor y calidad a través de imágenes que despiertan el apetito.",
        images: [
          "/images/fotografia/gastronomica/1.jpg",
          "/images/fotografia/gastronomica/2.jpg",
          "/images/fotografia/gastronomica/3.jpg",
          "/images/fotografia/gastronomica/4.jpg",
          "/images/fotografia/gastronomica/5.jpg",
          "/images/fotografia/gastronomica/6.jpg",
        ],
      },
      {
        id: "fotografia-clases",
        title: "Clases",
        description:
          "Fotografía escolar para instituciones educativas, academias y centros de formación. Retrato individual y grupal de alumnos y docentes, registro de actividades y egresados. Capturamos cada etapa con profesionalismo y calidez.",
        images: [
          "/images/fotografia/clases/1.jpg",
          "/images/fotografia/clases/2.jpg",
          "/images/fotografia/clases/3.jpg",
          "/images/fotografia/clases/4.jpg",
          "/images/fotografia/clases/5.jpg",
          "/images/fotografia/clases/6.jpg",
        ],
      },
    ],
  },
  {
    id: "sitios-web",
    title: "Sitios Web",
    services: [
      {
        id: "sitio-web-portafolio",
        title: "Diseño y Desarrollo",
        description:
          "Diseñamos y desarrollamos sitios web a medida: páginas informativas, institucionales, e-commerce, landing pages, portfolios y plataformas artísticas. Cada proyecto se construye con foco en la identidad de su marca, la experiencia del usuario y la optimización para buscadores.",
        aspectRatio: "4/5",
        images: [
          "/images/sitios-web/1.png",
          "/images/sitios-web/2.png",
          "/images/sitios-web/3.png",
          "/images/sitios-web/4.png",
          "/images/sitios-web/5.png",
          "/images/sitios-web/6.png",
          "/images/sitios-web/7.png",
          "/images/sitios-web/8.png",
          "/images/sitios-web/9.png",
        ],
      },
    ],
  },
  {
    id: "contenido-ia",
    title: "Contenido IA",
    services: [
      {
        id: "ia-cafeteria",
        title: "Cafetería",
        description:
          "Generación de imágenes fotorrealistas para cafeterías y negocios de café. Bebidas, pastelería y ambientes con estética visual que transmite identidad de marca y genera apetencia en redes sociales y menús digitales.",
        aspectRatio: "4/5",
        images: [
          "/images/contenido-ia/cafeteria/1.jpg",
          "/images/contenido-ia/cafeteria/2.jpg",
          "/images/contenido-ia/cafeteria/3.jpg",
          "/images/contenido-ia/cafeteria/4.jpg",
          "/images/contenido-ia/cafeteria/5.jpg",
        ],
      },
      {
        id: "ia-comida",
        title: "Comida",
        description:
          "Fotografía gastronómica generada con inteligencia artificial. Platos, ingredientes y presentaciones con acabados de alta calidad para menús digitales, redes sociales y campañas de marketing de restaurantes y servicios de catering.",
        aspectRatio: "4/5",
        images: [
          "/images/contenido-ia/comida/1.jpg",
          "/images/contenido-ia/comida/2.jpg",
          "/images/contenido-ia/comida/3.jpg",
          "/images/contenido-ia/comida/4.jpg",
        ],
      },
      {
        id: "ia-muebles",
        title: "Muebles",
        description:
          "Renders fotorrealistas de mobiliario y decoración de interiores generados con IA. Visualizaciones con distintos ambientes, texturas y acabados para catálogos, e-commerce y presentaciones de proyectos de diseño.",
        aspectRatio: "4/5",
        images: [
          "/images/contenido-ia/muebles/1.jpg",
          "/images/contenido-ia/muebles/2.jpg",
          "/images/contenido-ia/muebles/3.jpg",
          "/images/contenido-ia/muebles/4.jpg",
          "/images/contenido-ia/muebles/5.jpg",
          "/images/contenido-ia/muebles/6.jpg",
        ],
      },
      {
        id: "ia-ropa",
        title: "Ropa",
        description:
          "Imágenes de indumentaria y moda generadas con inteligencia artificial. Composiciones para catálogos digitales, tiendas online y redes sociales con presentación profesional de prendas, colores y estilos.",
        aspectRatio: "4/5",
        images: [
          "/images/contenido-ia/ropa/1.jpg",
          "/images/contenido-ia/ropa/2.jpg",
          "/images/contenido-ia/ropa/3.jpg",
          "/images/contenido-ia/ropa/4.jpg",
        ],
      },
      {
        id: "ia-skincare",
        title: "Skincare",
        description:
          "Fotografía de productos cosméticos y de cuidado personal generada con IA. Composiciones que destacan texturas, ingredientes y calidad, ideales para e-commerce, packaging y comunicación de marca.",
        aspectRatio: "4/5",
        images: [
          "/images/contenido-ia/skincare/1.jpg",
          "/images/contenido-ia/skincare/2.jpg",
          "/images/contenido-ia/skincare/3.jpg",
          "/images/contenido-ia/skincare/4.jpg",
          "/images/contenido-ia/skincare/5.jpg",
        ],
      },
    ],
  },
];
