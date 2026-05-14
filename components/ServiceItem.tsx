import Carousel from "./Carousel";
import FadeInSection from "./FadeInSection";
import { Service } from "@/types";

interface ServiceItemProps {
  service: Service;
}

export default function ServiceItem({ service }: ServiceItemProps) {
  return (
    <FadeInSection>
    <article className="w-full mb-16 sm:mb-20 md:mb-[100px]">
      {/* Title */}
      <h3 className="text-[28px] md:text-[36px] font-semibold text-black leading-tight mb-5">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-[16px] md:text-[18px] leading-[1.6] text-black font-normal max-w-[700px] mb-10">
        {service.description}
      </p>

      {/* Carousel */}
      <Carousel images={service.images} alt={service.title} />
    </article>
    </FadeInSection>
  );
}
