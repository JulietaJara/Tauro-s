import { MapPin } from "lucide-react"

export default function Location() {
  return (
    <section id="ubicacion" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Nuestra Ubicación</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8535386916655!2d-74.08304468523807!3d4.639976343504326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a2e545a44b1%3A0x4b15704d84b7b2fe!2sCentro%20de%20Bogot%C3%A1%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2s!4v1625097721642!5m2!1ses!2s"
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
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <MapPin className="mr-2" /> Dirección
              </h3>
              <p className="text-gray-600 mb-2">Calle Principal 123</p>
              <p className="text-gray-600 mb-2">Ciudad, País</p>
              <p className="text-gray-600 mb-4">Código Postal: 12345</p>
              <h3 className="text-xl font-semibold mb-2">Horario de Atención</h3>
              <p className="text-gray-600 mb-1">Lunes a Viernes: 9:00 AM - 7:00 PM</p>
              <p className="text-gray-600">Sábados y Domingos: 10:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

