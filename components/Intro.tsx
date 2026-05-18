import FadeInSection from "./FadeInSection";

export default function Intro() {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-6">
      <FadeInSection>
      <div className="max-w-180 mx-auto">
        <p className="text-[14px] md:text-[15px] leading-[1.6] text-black font-normal mb-5 text-justify">
          En Kroma tenemos el objetivo de potenciar la imagen y presentación de
          toda propuesta, abarcando la creación de contenido visual para todo
          tipo de marcas, negocios, servicios y empresas.
        </p>
        <p className="text-[14px] md:text-[15px] leading-[1.6] text-black font-normal text-justify">
          Ofrecemos una variedad de servicios que se adecúan a los sectores
          comerciales, sociales, institucionales y educativos:
        </p>
      </div>
      </FadeInSection>
    </section>
  );
}
