import ServiceItem from "./ServiceItem";
import FadeInSection from "./FadeInSection";
import { Category } from "@/types";

interface ServiceCategoryProps {
  category: Category;
}

export default function ServiceCategory({ category }: ServiceCategoryProps) {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-[120px] px-6 sm:px-10 md:px-[80px]">
      <div className="max-w-[1400px] mx-auto">
        {/* Category title */}
        <FadeInSection>
        <h2 className="text-[32px] sm:text-[40px] md:text-[56px] font-bold text-black leading-none mb-8 md:mb-[60px]">
          {category.title}
        </h2>

        {/* Separator */}
        <div className="w-full border-t border-black/40 mb-8 md:mb-[60px]" />
        </FadeInSection>

        {/* Services list */}
        <div>
          {category.services.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
