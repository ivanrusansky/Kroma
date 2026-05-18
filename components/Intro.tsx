import FadeInSection from "./FadeInSection";

export default function Intro() {
  return (
    <section className="w-full bg-white py-6 md:py-8 px-6 lg:px-16 xl:px-20">
      <FadeInSection>
      <div className="max-w-130 mx-auto lg:max-w-[760px] xl:max-w-[900px]">
        <p className="text-[13px] md:text-[14px] lg:text-[15px] leading-[1.6] text-black/60 font-normal mb-3 text-justify lg:text-left">
          En Kroma tenemos el objetivo de potenciar la imagen y presentación de
          toda propuesta, abarcando la creación de contenido visual para todo
          tipo de marcas, negocios, servicios y empresas.
        </p>
        <p className="text-[13px] md:text-[14px] lg:text-[15px] leading-[1.6] text-black/60 font-normal text-justify lg:text-left">
          Ofrecemos una variedad de servicios que se adecúan a los sectores
          comerciales, sociales, institucionales y educativos:
        </p>
      </div>
      </FadeInSection>
    </section>
  );
}
