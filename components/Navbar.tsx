import Image from "next/image";

const NAV_LINKS = [
  { label: "Fotografía", href: "#fotografia" },
  { label: "Sitio Web", href: "#sitios-web" },
  { label: "Contenido IA", href: "#contenido-ia" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/8 h-14">
      <div className="max-w-180 mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#" aria-label="Inicio" className="flex items-center">
          <Image
            src="/images/icons/kroma-logo.png"
            alt="Kroma"
            width={36}
            height={36}
            className="w-9 h-9 rounded-full object-contain"
            priority
          />
        </a>

        {/* Navigation */}
        <nav aria-label="Navegación principal">
          <ul className="flex items-center gap-5 sm:gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-[12px] sm:text-[13px] font-medium text-black/55 hover:text-black transition-colors duration-200 tracking-wide"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
