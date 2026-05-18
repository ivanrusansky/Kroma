import FadeInSection from "./FadeInSection";

export default function Intro() {
  return (
    <section className="w-full bg-white py-6 md:py-8 px-6">
      <FadeInSection>
      <div className="max-w-130 mx-auto">
        <p className="text-[13px] md:text-[14px] leading-[1.6] text-black/70 font-normal mb-3 text-justify">
          En Kroma tenemos el objetivo de potenciar la imagen y presentación de
          toda propuesta, abarcando la creación de contenido visual para todo
          tipo de marcas, negocios, servicios y empresas.
        </p>
        <p className="text-[13px] md:text-[14px] leading-[1.6] text-black/70 font-normal text-justify">
          Ofrecemos una variedad de servicios que se adecúan a los sectores
          comerciales, sociales, institucionales y educativos:
        </p>
      </div>
      </FadeInSection>
    </section>
  );
}
