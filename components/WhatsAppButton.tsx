"use client";

const WA_NUMBER = "5491138948317";
const WA_MESSAGE = encodeURIComponent(
  "Hola, me interesa consultar por sus servicios"
);
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export default function WhatsAppButton() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-[9999] flex items-center justify-center
        w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] md:w-[64px] md:h-[64px]
        bg-white rounded-full
        shadow-[0_4px_20px_rgba(0,0,0,0.15)]
        hover:scale-110 hover:shadow-[0_4px_30px_rgba(0,0,0,0.2)]
        transition-all duration-300"
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-[32px] h-[32px] md:w-[36px] md:h-[36px]"
        aria-hidden="true"
      >
        <path
          fill="#25D366"
          d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.473 2.027 7.776L0 32l8.469-2.001A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0z"
        />
        <path
          fill="#fff"
          d="M23.507 19.62c-.355-.178-2.101-1.036-2.426-1.154-.324-.119-.56-.178-.796.178-.237.355-.914 1.154-1.12 1.391-.207.237-.414.266-.769.089-.355-.178-1.498-.552-2.853-1.76-1.054-.94-1.766-2.101-1.973-2.456-.207-.355-.022-.547.155-.724.16-.159.355-.414.533-.621.178-.207.237-.355.355-.592.119-.237.059-.444-.03-.621-.089-.178-.796-1.92-1.09-2.63-.287-.689-.579-.595-.796-.606-.207-.01-.444-.013-.681-.013s-.621.089-.947.444c-.325.355-1.24 1.212-1.24 2.955 0 1.742 1.27 3.426 1.447 3.663.178.237 2.5 3.817 6.056 5.352.847.365 1.508.583 2.023.746.85.27 1.623.232 2.234.141.682-.101 2.101-.859 2.397-1.688.296-.829.296-1.54.207-1.688-.089-.148-.325-.237-.68-.414z"
        />
      </svg>
    </a>
  );
}
