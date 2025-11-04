import Image from "next/image";

const testimonials = [
  {
    name: "Maria Garcia",
    text: "Excellent care. The team is very professional and caring with pets. I totally recommend this clinic.",
    rating: 5,
    image: "/Pets/descarga.jpeg",
  },
  {
    name: "John Perez",
    text: "I brought my dog Max here and was very satisfied. The service is impeccable and the prices are fair.",
    rating: 5,
    image: "/Pets/descarga (1).jpeg",
  },
  {
    name: "Ana Martinez",
    text: "The best veterinarians in Bucharest. Always attentive with excellent care. My cat is in the best hands.",
    rating: 5,
    image: "/Pets/images (1).jpeg",
  },
  {
    name: "Carlos Lopez",
    text: "First-class professionals. The emergency care was fast and efficient. Very grateful.",
    rating: 5,
    image: "/Pets/images (2).jpeg",
  },
  {
    name: "Laura Fernandez",
    text: "Modern clinic with state-of-the-art equipment. The staff is friendly and very competent.",
    rating: 5,
    image: "/Pets/images (3).jpeg",
  },
  {
    name: "Roberto Silva",
    text: "They have been caring for my pets for years. I always trust them for any health problem.",
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
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our clients' satisfaction is our priority
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


