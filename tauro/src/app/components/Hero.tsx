"use client";

import Image from "next/image";
import salon from "./images/salon1.jpg"

export default function Hero() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5491170295182", "_blank");
  };

  const handleScrollToGallery = () => {
    const gallerySection = document.getElementById("galeria");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <Image
        src={salon}
        alt="Salón de eventos elegante"
        fill
        className="object-cover"
        priority
      />

      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          El Lugar Perfecto para
          <span className="text-red-500 block">Tus Eventos</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Elegancia y servicio excepcional para hacer de tu celebración un momento inolvidable
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleScrollToGallery}
            className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-3 rounded-lg transition duration-300"
          >
            Ver Galería
          </button>
          <button
            onClick={handleWhatsAppClick}
            className="bg-transparent border border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3 rounded-lg transition duration-300"
          >
            Consultar ahora
          </button>
        </div>
      </div>
    </section>
  );
}
