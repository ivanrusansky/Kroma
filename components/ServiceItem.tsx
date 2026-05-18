import Carousel from "./Carousel";
import FadeInSection from "./FadeInSection";
import { Service } from "@/types";

interface ServiceItemProps {
  service: Service;
  carouselSizes?: string;
}

export default function ServiceItem({ service, carouselSizes }: ServiceItemProps) {
  return (
    <FadeInSection>
    <article className="w-full mb-12 md:mb-16 lg:mb-0 lg:h-full lg:flex lg:flex-col">
      {/* Title */}
      <h3 className="text-[16px] md:text-[18px] font-semibold text-black/75 leading-tight mb-2">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-[13px] md:text-[14px] leading-[1.6] text-black/60 font-normal mb-4">
        {service.description}
      </p>

      {/* Carousel — lg:mt-auto alinea todos los carruseles a la misma altura en el grid */}
      <div className="lg:mt-auto">
        <Carousel images={service.images} alt={service.title} aspectRatio={service.aspectRatio} sizes={carouselSizes} />
      </div>
    </article>
    </FadeInSection>
  );
}
