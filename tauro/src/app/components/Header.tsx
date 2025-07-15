"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-red-600">Tauro&apos;s</h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#inicio" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium">
                Inicio
              </a>
              <a href="#galeria" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium">
                Galería
              </a>
              <a href="#servicios" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium">
                Servicios
              </a>
              <a href="#contacto" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium">
                Contacto
              </a>
            </div>
          </div>

          {/* Botón Reservar (desktop) */}
          <div className="hidden md:block">
            <button
              onClick={() => window.open("https://wa.me/5491170295182", "_blank")}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
            >
              Reservar Ahora
            </button>
          </div>

          {/* Botón hamburguesa (mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú mobile */}
      {isOpen && (
        <div className="md:hidden px-4 pt-4 pb-3 space-y-1 bg-white shadow-sm border-t">
          <a href="#inicio" className="block text-gray-700 hover:text-red-600 px-3 py-2 text-base font-medium">
            Inicio
          </a>
          <a href="#galeria" className="block text-gray-700 hover:text-red-600 px-3 py-2 text-base font-medium">
            Galería
          </a>
          <a href="#servicios" className="block text-gray-700 hover:text-red-600 px-3 py-2 text-base font-medium">
            Servicios
          </a>
          <a href="#contacto" className="block text-gray-700 hover:text-red-600 px-3 py-2 text-base font-medium">
            Contacto
          </a>
          <button
            onClick={() => window.open("https://wa.me/5491170295182", "_blank")}
            className="w-full text-left text-white bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md font-medium mt-2"
          >
            Reservar Ahora
          </button>
        </div>
      )}
    </nav>
  );
}
