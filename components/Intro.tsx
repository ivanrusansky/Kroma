import FadeInSection from "./FadeInSection";

export default function Intro() {
  return (
    <section className="w-full bg-white py-14 md:py-20 px-6">
      <FadeInSection>
      <div className="max-w-[640px] mx-auto">
        <p className="text-[15px] md:text-[17px] leading-[1.8] text-black font-normal mb-8 text-justify">
          En Kroma tenemos el objetivo de potenciar la imagen y presentación de
          toda propuesta, abarcando la creación de contenido visual para todo
          tipo de marcas, negocios, servicios y empresas.
        </p>
        <p className="text-[15px] md:text-[17px] leading-[1.8] text-black font-normal text-justify">
          Ofrecemos una variedad de servicios que se adecúan a los sectores
          comerciales, sociales, institucionales y educativos:
        </p>
      </div>
      </FadeInSection>
    </section>
  );
}
