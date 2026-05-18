import ServiceItem from "./ServiceItem";
import FadeInSection from "./FadeInSection";
import { Category } from "@/types";

interface ServiceCategoryProps {
  category: Category;
}

export default function ServiceCategory({ category }: ServiceCategoryProps) {
  const carouselSizes = "(max-width: 1024px) calc(100vw - 48px), 250px";

  return (
    <section id={category.id} className="w-full bg-white py-8 md:py-12 scroll-mt-16">
      <div className="max-w-180 mx-auto px-6 lg:max-w-none lg:px-16 xl:px-20">
        {/* Category title */}
        <FadeInSection>
          <h2 className="text-[28px] md:text-[38px] lg:text-[30px] font-bold text-black/75 leading-none mb-3">
            {category.title}
          </h2>

          {/* Separator */}
          <div className="w-full border-t border-black/30 mb-8" />
        </FadeInSection>

        {/* Services grid */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-10 lg:gap-y-14 xl:gap-x-12 lg:max-w-[760px] xl:max-w-[900px] lg:mx-auto">
          {category.services.map((service) => (
            <ServiceItem key={service.id} service={service} carouselSizes={carouselSizes} />
          ))}
        </div>
      </div>
    </section>
  );
}
