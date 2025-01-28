import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">Salón de Eventos</div>
        <div className="hidden md:flex space-x-4">
          <Link href="#" className="hover:text-red-500">
            Inicio
          </Link>
          <Link href="#servicios" className="hover:text-red-500">
            Servicios
          </Link>
          <Link href="#galeria" className="hover:text-red-500">
            Galería
          </Link>
          <Link href="#sobre-nosotros" className="hover:text-red-500">
            Sobre Nosotros
          </Link>
          <Link href="#contacto" className="hover:text-red-500">
            Contacto
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}

