import FadeInSection from "./FadeInSection";

export default function Intro() {
  return (
    <section className="w-full bg-white py-20 md:py-[120px] px-6 md:px-10">
      <FadeInSection>
      <div className="max-w-[800px] mx-auto text-center">
        <p className="text-[18px] md:text-[20px] leading-[1.8] text-black font-normal mb-10">
          En Kroma tenemos el objetivo de potenciar la imagen y presentación de
          toda propuesta, abarcando la creación de contenido visual para todo
          tipo de marcas, negocios, servicios y empresas.
        </p>
        <p className="text-[18px] md:text-[20px] leading-[1.8] text-black font-normal">
          Ofrecemos una variedad de servicios que se adecúan a los sectores
          comerciales, sociales, institucionales y educativos:
        </p>
      </div>
      </FadeInSection>
    </section>
  );
}
