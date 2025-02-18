"use client";

import Image from "next/image";
import { useState } from "react"
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
import dek4 from "./images/dek4.jpg"
import dek5 from "./images/dek5.jpg"
import cancha1 from "./images/cancha1.png"
import cancha2 from "./images/cancha2.png"
import cancha3 from "./images/cancha3.png"
import cancha4 from "./images/cancha1.jpg"
import cancha5 from "./images/cancha2.jpg"
import pelotero1 from "./images/pelotero1.jpg"
import pelotero2 from "./images/pelotero2.jpg"
import pelotero3 from "./images/pelotero3.jpg"
import pelotero4 from "./images/pelotero4.jpg"
import pelotero5 from "./images/pelotero5.jpg"
import pelotero6 from "./images/pelotero6.jpg"

const imageCategories = {
  todos: [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9 ],
  pelotero: [pelotero1, pelotero2, pelotero3, pelotero4, pelotero5, pelotero6],
  dek: [foto7, dek4, dek5],
  cancha: [cancha2, cancha4, cancha5],
  baños: [baño1, baño2, baño3, baño4, baño6, baño7],
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("todos")

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
  }

  return (
    <section id="galeria" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Galería de Eventos</h2>

        <div className="flex justify-center space-x-4 mb-8">
          {Object.keys(imageCategories).map((category) => (
            <Button
              key={category}
              onClick={() => handleCategoryChange(category)}
              variant={activeCategory === category ? "default" : "outline"}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imageCategories[activeCategory as keyof typeof imageCategories].map((src, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-md aspect-[4/3]">
              <Image
                src={src || "/placeholder.svg"}
                alt={`Imagen ${index + 1} de ${activeCategory}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

