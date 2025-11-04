const services = [
  {
    name: "General Consultation",
    description: "Complete health examination for your pet with professional diagnosis.",
    price: "150 RON",
    icon: "🩺",
  },
  {
    name: "Vaccination",
    description: "Complete vaccination program to protect your pet.",
    price: "80 RON",
    icon: "💉",
  },
  {
    name: "Surgery",
    description: "Surgical services performed by specialized veterinarians.",
    price: "From 500 RON",
    icon: "⚕️",
  },
  {
    name: "Emergencies",
    description: "Emergency care available 24 hours a day.",
    price: "200 RON",
    icon: "🚨",
  },
  {
    name: "Grooming",
    description: "Grooming and aesthetic care services for your pet.",
    price: "100 RON",
    icon: "✂️",
  },
  {
    name: "Radiology",
    description: "Image diagnosis with state-of-the-art technology.",
    price: "180 RON",
    icon: "📷",
  },
  {
    name: "Laboratory",
    description: "Complete clinical analysis for accurate diagnosis.",
    price: "120 RON",
    icon: "🔬",
  },
  {
    name: "Parasite Control",
    description: "Treatment and prevention of internal and external parasites.",
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
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of professional veterinary services
            for the comprehensive care of your pet.
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


