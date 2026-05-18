import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import ServiceCategory from "@/components/ServiceCategory";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { categories } from "@/data/services";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full bg-white pt-14">
        <Intro />
        {categories.map((category) => (
          <ServiceCategory key={category.id} category={category} />
        ))}
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
}
