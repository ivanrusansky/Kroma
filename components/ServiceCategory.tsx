import ServiceItem from "./ServiceItem";
import FadeInSection from "./FadeInSection";
import { Category } from "@/types";

interface ServiceCategoryProps {
  category: Category;
}

export default function ServiceCategory({ category }: ServiceCategoryProps) {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-6">
      <div className="max-w-[860px] mx-auto">
        {/* Category title */}
        <FadeInSection>
        <h2 className="text-[28px] sm:text-[34px] md:text-[42px] font-bold text-black leading-none mb-6 md:mb-10">
          {category.title}
        </h2>

        {/* Separator */}
        <div className="w-full border-t border-black/40 mb-6 md:mb-10" />
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
