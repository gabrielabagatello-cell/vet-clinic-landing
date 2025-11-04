import Image from "next/image";

const testimonials = [
  {
    name: "María García",
    text: "Excelente atención. El equipo es muy profesional y cariñoso con las mascotas. Recomiendo totalmente esta clínica.",
    rating: 5,
    image: "/Pets/descarga.jpeg",
  },
  {
    name: "Juan Pérez",
    text: "Llevé a mi perro Max aquí y quedé muy satisfecho. El servicio es impecable y los precios son justos.",
    rating: 5,
    image: "/Pets/descarga (1).jpeg",
  },
  {
    name: "Ana Martínez",
    text: "Los mejores veterinarios de Bucuresti. Siempre atentos y con un trato excelente. Mi gato está en las mejores manos.",
    rating: 5,
    image: "/Pets/images (1).jpeg",
  },
  {
    name: "Carlos López",
    text: "Profesionales de primera clase. La atención de emergencias fue rápida y eficiente. Muy agradecido.",
    rating: 5,
    image: "/Pets/images (2).jpeg",
  },
  {
    name: "Laura Fernández",
    text: "Clínica moderna con equipamiento de última tecnología. El personal es amable y muy competente.",
    rating: 5,
    image: "/Pets/images (3).jpeg",
  },
  {
    name: "Roberto Silva",
    text: "Han cuidado de mis mascotas durante años. Siempre confío en ellos para cualquier problema de salud.",
    rating: 5,
    image: "/Pets/images.jpeg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra prioridad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-primary-dark">
                    {testimonial.name}
                  </h3>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
