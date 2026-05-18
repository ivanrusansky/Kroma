import Carousel from "./Carousel";
import FadeInSection from "./FadeInSection";
import { Service } from "@/types";

interface ServiceItemProps {
  service: Service;
}

export default function ServiceItem({ service }: ServiceItemProps) {
  return (
    <FadeInSection>
    <article className="w-full mb-20 md:mb-25">
      {/* Title */}
      <h3 className="text-[28px] md:text-[36px] font-semibold text-black leading-tight mb-5">
        {service.title}
      </h3>

      {/* Description */}
      <p className="max-w-175 text-[16px] md:text-[18px] leading-[1.6] text-black font-normal mb-10">
        {service.description}
      </p>

      {/* Carousel */}
      <Carousel images={service.images} alt={service.title} />
    </article>
    </FadeInSection>
  );
}
