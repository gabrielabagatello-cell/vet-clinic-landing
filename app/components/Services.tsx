const services = [
  {
    name: "Consulta General",
    description: "Examen completo de salud para tu mascota con diagnóstico profesional.",
    price: "150 RON",
    icon: "🩺",
  },
  {
    name: "Vacunación",
    description: "Programa completo de vacunación para proteger a tu mascota.",
    price: "80 RON",
    icon: "💉",
  },
  {
    name: "Cirugía",
    description: "Servicios quirúrgicos realizados por veterinarios especializados.",
    price: "Desde 500 RON",
    icon: "⚕️",
  },
  {
    name: "Emergencias",
    description: "Atención de urgencias disponible las 24 horas del día.",
    price: "200 RON",
    icon: "🚨",
  },
  {
    name: "Estética",
    description: "Servicios de peluquería y cuidado estético para tu mascota.",
    price: "100 RON",
    icon: "✂️",
  },
  {
    name: "Radiología",
    description: "Diagnóstico por imágenes con tecnología de última generación.",
    price: "180 RON",
    icon: "📷",
  },
  {
    name: "Laboratorio",
    description: "Análisis clínicos completos para diagnóstico preciso.",
    price: "120 RON",
    icon: "🔬",
  },
  {
    name: "Control de Parásitos",
    description: "Tratamiento y prevención de parásitos internos y externos.",
    price: "90 RON",
    icon: "🐛",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios veterinarios profesionales
            para el cuidado integral de tu mascota.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-primary-dark mb-3">
                {service.name}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <span className="text-2xl font-bold text-primary">
                  {service.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
