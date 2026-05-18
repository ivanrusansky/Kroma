import ServiceItem from "./ServiceItem";
import FadeInSection from "./FadeInSection";
import { Category } from "@/types";

interface ServiceCategoryProps {
  category: Category;
}

export default function ServiceCategory({ category }: ServiceCategoryProps) {
  return (
    <section id={category.id} className="w-full bg-white py-10 md:py-16 scroll-mt-16">
      <div className="max-w-180 mx-auto px-6">
        {/* Category title */}
        <FadeInSection>
          <h2 className="text-[28px] md:text-[38px] font-bold text-black leading-none mb-3">
            {category.title}
          </h2>

          {/* Separator */}
          <div className="w-full border-t border-black/40 mb-10" />
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
