import ServiceItem from "./ServiceItem";
import FadeInSection from "./FadeInSection";
import { Category } from "@/types";

interface ServiceCategoryProps {
  category: Category;
}

export default function ServiceCategory({ category }: ServiceCategoryProps) {
  return (
    <section className="w-full bg-white py-16 md:py-30 px-6 md:px-20">
      {/* Category title */}
      <FadeInSection>
        <h2 className="text-[36px] md:text-[56px] font-bold text-black leading-none mb-4">
          {category.title}
        </h2>

        {/* Separator */}
        <div className="w-full border-t border-black/40 mb-15" />
      </FadeInSection>

      {/* Services list */}
      <div>
        {category.services.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
