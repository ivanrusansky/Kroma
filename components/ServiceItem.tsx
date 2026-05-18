import Carousel from "./Carousel";
import FadeInSection from "./FadeInSection";
import { Service } from "@/types";

interface ServiceItemProps {
  service: Service;
}

export default function ServiceItem({ service }: ServiceItemProps) {
  return (
    <FadeInSection>
    <article className="w-full mb-12 md:mb-16">
      {/* Title */}
      <h3 className="text-[20px] md:text-[26px] font-semibold text-black leading-tight mb-3">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-[14px] md:text-[15px] leading-[1.6] text-black font-normal mb-8">
        {service.description}
      </p>

      {/* Carousel */}
      <Carousel images={service.images} alt={service.title} />
    </article>
    </FadeInSection>
  );
}
