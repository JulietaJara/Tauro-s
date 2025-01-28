import { Facebook, Instagram, Twitter, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2023 Salón de Eventos. Todos los derechos reservados.</p>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="#" className="hover:text-red-500">
              <Facebook size={24} />
            </Link>
            <Link href="#" className="hover:text-red-500">
              <Instagram size={24} />
            </Link>
            <Link href="#" className="hover:text-red-500">
              <Twitter size={24} />
            </Link>
          </div>
          <div className="flex items-center">
            <MapPin size={24} className="mr-2" />
            <p>Calle Principal 123, Ciudad, País</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

