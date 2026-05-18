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
    <article className="w-full mb-12 md:mb-16 lg:mb-0">
      {/* Title */}
      <h3 className="text-[18px] md:text-[24px] font-semibold text-black leading-tight mb-3">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-[14px] md:text-[15px] leading-[1.6] text-black font-normal mb-6">
        {service.description}
      </p>

      {/* Carousel */}
      <Carousel images={service.images} alt={service.title} aspectRatio={service.aspectRatio} sizes={carouselSizes} />
    </article>
    </FadeInSection>
  );
}
