import React from 'react';

interface CarModel {
  name: string;
  price: string;
  image: string;
  specSheet: string;
}

const Catalog: React.FC = () => {
  const cars: CarModel[] = [
    {
      name: "Mazda 2 Sedán",
      price: "Desde $330,900 MXN",
      image: "https://www.mazda.mx/siteassets/mazda-mx/mycos-2025/mazda2-sedan/configura-3.0/exteriores/signature/46v-rojo-brillante/mazda2-sedan-configura-signature-rojo-v1-36.jpg",
      specSheet: "https://www.mazda.mx/siteassets/descargables-2025/mazda2-sedan/ficha-tecnica/ficha-tecnica-mazda2-sedan-2025-v01.pdf"
    },
    {
      name: "Mazda 3 Sedán",
      price: "Desde $420,900 MXN",
      image: "https://www.mazda.mx/siteassets/mazda-mx/mycos-2025/mazda3-sedan/configura-v.3/exteriores/signature/rojo-brillante/mazda3-sedan-signature-rojo-v1-36.jpg",
      specSheet: "https://www.mazda.mx/siteassets/descargables-2025/mazda3-sedan/ficha-tecnica/ficha-tecnica-mazda3-sedan-2025-v01.pdf"
    },
    {
      name: "Mazda CX-30",
      price: "Desde $480,900 MXN",
      image: "https://storage.googleapis.com/a1aa/image/51703f2c-6709-402c-b601-d5610bf6403c.jpeg",
      specSheet: "https://www.mazda.mx/siteassets/descargables-2025/mazda-cx-30/ficha-tecnica/ficha-tecnica-mazda-cx-30-2025-v02.pdf"
    }
  ];

  return (
    <section id="catalogo" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Catálogo de Vehículos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div key={index} className="car-card bg-white rounded-xl overflow-hidden">
              <img 
                src={car.image} 
                alt={car.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{car.name}</h3>
                <p className="text-red-500 font-semibold mb-4">{car.price}</p>
                <div className="flex justify-between items-center">
                  <a 
                    href={car.specSheet}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 hover:text-red-600 font-medium"
                  >
                    Ficha técnica
                  </a>
                  <button
                    onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeu52UKlEvExd3gAGaZbIfm8efXAYwQkriHOHLQmEr_C5z5gQ/viewform', '_blank')}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Cotizar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;