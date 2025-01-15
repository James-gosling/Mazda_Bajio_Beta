import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Professional Car Sales" 
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Sobre Mí</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Con más de 10 años de experiencia en la industria automotriz, me especializo en ayudar a mis clientes a encontrar el Mazda perfecto que se adapte a sus necesidades y estilo de vida.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Mi compromiso es brindar un servicio personalizado y profesional, asegurando que cada cliente tenga una experiencia excepcional en la compra de su nuevo vehículo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;