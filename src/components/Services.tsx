import React from 'react';
import { Car, DollarSign, Headphones } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Car className="w-12 h-12 text-red-500" />,
      title: "Venta de Autos",
      description: "Amplia selección de vehículos Mazda nuevos y seminuevos con las mejores condiciones del mercado."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-red-500" />,
      title: "Financiamiento",
      description: "Opciones flexibles de financiamiento adaptadas a tu presupuesto y necesidades específicas."
    },
    {
      icon: <Headphones className="w-12 h-12 text-red-500" />,
      title: "Atención Personalizada",
      description: "Asesoramiento profesional antes, durante y después de tu compra para una experiencia satisfactoria."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="feature-card bg-gray-50 rounded-xl p-8">
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;