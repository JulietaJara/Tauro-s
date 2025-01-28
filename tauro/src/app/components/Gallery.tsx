import Image from "next/image";
import foto1 from "./images/tauro1.png";
import foto2 from "./images/tauro2.png";
import foto3 from "./images/tauro3.png";
import foto4 from "./images/tauro4.png";
import foto5 from "./images/tauro5.png";
import foto6 from "./images/tauro6.png";
import foto7 from "./images/tauro7.png";
import foto8 from "./images/tauro8.png";
import foto9 from "./images/tauro9.png"

export default function Gallery() {
  const images = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9];

  return (
    <section id="galeria" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Galería de Eventos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md aspect-[4/3]" 
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={`Evento ${index + 1}`}
                layout="fill" 
                objectFit="cover" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
