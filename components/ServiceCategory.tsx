import ServiceItem from "./ServiceItem";
import FadeInSection from "./FadeInSection";
import { Category } from "@/types";

interface ServiceCategoryProps {
  category: Category;
}

export default function ServiceCategory({ category }: ServiceCategoryProps) {
  const isGrid = category.services.length > 1;
  const carouselSizes = isGrid
    ? "(max-width: 1024px) calc(100vw - 48px), calc((100vw - 128px) / 3)"
    : "(max-width: 1024px) calc(100vw - 48px), 1200px";

  return (
    <section id={category.id} className="w-full bg-white py-10 md:py-16 scroll-mt-16">
      <div className="max-w-180 mx-auto px-6 lg:max-w-none lg:px-12 xl:px-16">
        {/* Category title */}
        <FadeInSection>
          <h2 className="text-[28px] md:text-[38px] font-bold text-black leading-none mb-3">
            {category.title}
          </h2>

          {/* Separator */}
          <div className="w-full border-t border-black/40 mb-10" />
        </FadeInSection>

        {/* Services list */}
        <div className={isGrid ? "lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12 xl:gap-x-10" : ""}>
          {category.services.map((service) => (
            <ServiceItem key={service.id} service={service} carouselSizes={carouselSizes} />
          ))}
        </div>
      </div>
    </section>
  );
}
