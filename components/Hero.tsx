import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full flex items-center justify-center bg-white" style={{ minHeight: "clamp(60vh, 80vh, 100vh)" }}>
      <div className="flex items-center justify-center w-full px-6 py-16">
        <Image
          src="/images/icons/logo-kroma.png"
          alt="Kroma"
          width={300}
          height={300}
          priority
          className="w-[180px] sm:w-[240px] md:w-[300px] h-auto object-contain"
        />
      </div>
    </section>
  );
}
