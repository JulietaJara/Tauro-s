import { MapPin } from "lucide-react"

export default function Location() {
  return (
    <section id="ubicacion" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8"> 📍 Nuestra Ubicación</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.522998649641!2d-58.2184962249329!3d-34.79278176750647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a328e9f5e3d53d%3A0xbe4617b769e966ff!2sTauro&#39;s%20Eventos!5e0!3m2!1ses!2sus!4v1738036223815!5m2!1ses!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center text-black">
                <MapPin className="mr-2 text-black" /> Dirección
              </h3>
              <p className="text-gray-600 mb-2">Av. Valentín Vergara 3497</p>
              <p className="text-gray-600 mb-2">Ranelagh, Argentina</p>
              <p className="text-gray-600 mb-4">Código Postal: 1884</p>
              <h3 className="text-xl font-semibold mb-2 text-black">Horario de Atención (Verano)</h3>
              <p className="text-gray-600 mb-1">Lunes a Viernes: 17:00 PM - 19:00 PM</p>
              <p className="text-gray-600 mb-4">Sábados: 10:00 AM - 12:00 AM</p>
              <h3 className="text-xl font-semibold mb-2 text-black">Horario de Atención (Invierno)</h3>
              <p className="text-gray-600 mb-1">Lunes a Viernes: 16:00 PM - 18:00 PM</p>
              <p className="text-gray-600">Sábados: 10:00 AM - 12:00 AM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

