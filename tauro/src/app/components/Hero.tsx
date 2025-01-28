"use client";

export default function Hero() {
  const handleClick = () => {
    window.open('https://wa.me/1170295182', '_blank');
  };
    return (
      <section className="bg-gray-200 text-gray-800 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">Bienvenidos a <span style={{ color: '#DC2626' }}>Tauro&apos;s</span></h1>
          <p className="text-xl mb-8 text-gray-600">
            El lugar perfecto para tus celebraciones, sean para niños o adultos
          </p>
          <button 
          onClick={handleClick} 
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300"
        >
          Consultar Ahora
        </button>
        </div>
      </section>
    )
  }
  
  