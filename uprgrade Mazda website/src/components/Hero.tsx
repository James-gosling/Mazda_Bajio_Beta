import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://storage.googleapis.com/a1aa/image/8f8f5d67-7efc-4eb9-8feb-6f39fa8e8d66.jpeg')"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Bienvenidos a Mazda Querétaro
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
            Encuentra el vehículo perfecto que cumpla con tus necesidades
          </p>
          <div className="space-x-4">
            <button
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeu52UKlEvExd3gAGaZbIfm8efXAYwQkriHOHLQmEr_C5z5gQ/viewform', '_blank')}
              className="bg-red-500 text-white px-8 py-3 rounded-lg transform hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Cotizar mi auto
            </button>
            <a
              href="#catalogo"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-800 transition-colors duration-300"
            >
              Ver catálogo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;