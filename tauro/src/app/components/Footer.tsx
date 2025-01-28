import { Facebook, Instagram, MapPin } from "lucide-react"
import { FaTiktok } from "react-icons/fa"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 Tauro&apos;s. Todos los derechos reservados.</p>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="https://www.facebook.com/profile.php?id=61558870372440" className="hover:text-red-500">
              <Facebook size={24} />
            </Link>
            <Link href="https://www.instagram.com/tauroseventos/" className="hover:text-red-500">
              <Instagram size={24} />
            </Link>
            <Link href="https://www.tiktok.com/@tauros.eventos?_t=ZM-8tQylBh1nwj&_r=1" className="hover:text-red-500">
              <FaTiktok size={24} /> 
            </Link>
          </div>
          <div className="flex items-center">
            <MapPin size={24} className="mr-2" />
            <p>Av. Valentín Vergara 3497, Ranelagh, Argentina</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

