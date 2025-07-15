"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card"; 
import { Badge } from "./ui/badge"; 
import { useState } from "react";
import foto1 from "./images/salon2.jpg";
import foto2 from "./images/salon5.jpg";
import foto3 from "./images/tauro1.png";
import foto4 from "./images/salon1.jpg";
import foto5 from "./images/dek8.jpg";
import foto6 from "./images/salon6.jpg";
import foto7 from "./images/salon3.jpg";
import foto8 from "./images/salon4.jpg";
import foto9 from "./images/pelotero4.jpg";

const images = [
  { src: foto1, tag: "Boda" },
  { src: foto2, tag: "Quinceañera" },
  { src: foto3, tag: "Evento Corporativo" },
  { src: foto4, tag: "Boda" },
  { src: foto5, tag: "Cumpleaños infantil" },
  { src: foto7, tag: "Boda" },
  { src: foto6, tag: "Cumpleaños infantil"},
  { src: foto9, tag: "Cumpleaños infantil"},
  { src: foto8, tag: "Cumpleaños adultos"},

];

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="galeria" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Galería de Eventos</h2>
          <p className="text-xl text-gray-600">Momentos únicos capturados en nuestro salón</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(showAll ? images : images.slice(0, 6)).map((img, i) => (
            <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={img.src}
                  alt={`Evento ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge className="bg-red-600">{img.tag}</Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded-lg transition duration-300"
          >
            {showAll ? "Ver Menos" : "Ver Más Fotos"}
          </button>
        </div>
      </div>
    </section>
  );
}
