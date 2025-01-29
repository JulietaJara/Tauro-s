export default function Services() {
    const services = [
      { title: "Fiestas Infantiles 🥳", description: "Diversión garantizada para los más pequeños" },
      { title: "Cumpleaños 🎉", description: "Festeja tu día especial con amigos y familia" },
      { title: "Bodas y Aniversarios 💐", description: "Celebra tu amor en un ambiente elegante" },
      { title: "Eventos Corporativos 💼", description: "Espacios ideales para reuniones y conferencias" },
      { title: "Egresados 🎓", description: "Disfruta de una celebración única para cerrar un ciclo y dar la bienvenida a lo nuevo." },
      { title: "Baby Shower 🍼", description: "Celebra la llegada de un nuevo miembro a la familia con una fiesta llena de alegría." },
      { title: "Fiestas de Retiro 🥂", description: "Una fiesta especial para aquellos que se retiran del trabajo o de una etapa de vida." },
      { title: "Fiestas de Fin de Año 🍾", description: "Despide el año con una celebración llena de alegría y buenos deseos." },
    ]
  
    return (
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  