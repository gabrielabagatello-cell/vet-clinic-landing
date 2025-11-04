import AppointmentForm from "./AppointmentForm";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-light to-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/images.jpeg"
          alt="Veterinary Clinic"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 to-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              We Care for Your
              <span className="block text-primary-light">Pets</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Professional veterinary services with love and dedication.
              Your four-legged companion deserves the best.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-primary-light" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>24/7 Care</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-primary-light" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Certified Professionals</span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex justify-center md:justify-end">
            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
}


