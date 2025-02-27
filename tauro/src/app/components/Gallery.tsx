"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "./ui/button";
import foto1 from "./images/tauro1.png";
import foto2 from "./images/tauro2.png";
import foto3 from "./images/tauro3.png";
import foto4 from "./images/tauro4.png";
import foto5 from "./images/tauro5.png";
import foto6 from "./images/tauro6.png";
import foto7 from "./images/tauro7.png";
import foto8 from "./images/tauro8.png";
import foto9 from "./images/tauro9.png";
import baño1 from "./images/baño1.jpg";
import baño2 from "./images/baño2.jpg";
import baño3 from "./images/baño3.jpg";
import baño4 from "./images/baño4.jpg";
import baño6 from "./images/baño6.jpg";
import baño7 from "./images/baño7.jpg";
import dek4 from "./images/dek4.jpg";
import dek5 from "./images/dek5.jpg";
import dek6 from "./images/dek6.jpg";
import dek7 from "./images/dek7.jpg";
import dek8 from "./images/dek8.jpg";
import cancha2 from "./images/cancha2.png";
import cancha4 from "./images/cancha1.jpg";
import cancha5 from "./images/cancha2.jpg";
import pelotero1 from "./images/pelotero1.jpg";
import pelotero2 from "./images/pelotero2.jpg";
import pelotero3 from "./images/pelotero3.jpg";
import pelotero4 from "./images/pelotero4.jpg";
import pelotero5 from "./images/pelotero5.jpg";
import pelotero6 from "./images/pelotero6.jpg";

const imageCategories = {
  todos: [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9],
  pelotero: [pelotero1, pelotero2, pelotero3, pelotero4, pelotero5, pelotero6],
  dek: [foto7, dek4, dek5, dek6, dek7, dek8],
  cancha: [cancha2, cancha4, cancha5],
  baños: [baño1, baño2, baño3, baño4, baño6, baño7],
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [loading, setLoading] = useState(false);

  const handleCategoryChange = (category: string) => {
    setLoading(true);
    setTimeout(() => {
      setActiveCategory(category);
      setLoading(false);
    }, 800); 
  };

  return (
    <section id="galeria" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Galería de Eventos
        </h2>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.keys(imageCategories).map((category) => (
            <Button
              key={category}
              onClick={() => handleCategoryChange(category)}
              variant={activeCategory === category ? "default" : "outline"}
              className="mb-2 text-sm sm:text-base"
              disabled={loading} 
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="w-10 h-10 border-4 border-gray-800 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {imageCategories[activeCategory as keyof typeof imageCategories].map((src, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-md aspect-[4/3]">
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Imagen ${index + 1} de ${activeCategory}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
