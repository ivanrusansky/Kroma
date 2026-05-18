const WA_NUMBER = "5491100000000"; // reemplazar con número real
const WA_MESSAGE = encodeURIComponent(
  "Hola, me interesa consultar por sus servicios"
);
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;
const INSTAGRAM_URL = "https://instagram.com/kromavisual"; // reemplazar con usuario real

export default function Footer() {
  return (
    <footer className="w-full bg-[#1A1A1A] min-h-50 flex flex-col items-center justify-center py-10 px-6">
      {/* Icons */}
      <div className="flex items-center gap-10">
        {/* Instagram */}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram de Kroma"
          className="text-white opacity-100 hover:opacity-70 transition-opacity duration-300 flex items-center justify-center min-w-11 min-h-11"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8"
            aria-hidden="true"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
          </svg>
        </a>

        {/* WhatsApp */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp de Kroma"
          className="text-white opacity-100 hover:opacity-70 transition-opacity duration-300 flex items-center justify-center min-w-11 min-h-11"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8"
            aria-hidden="true"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </a>
      </div>

      {/* Copyright */}
      <p className="mt-6 text-[14px] text-white/60 text-center">
        Kroma © 2026
      </p>
    </footer>
  );
}
