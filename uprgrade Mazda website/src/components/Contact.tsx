import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Contacto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Información de Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-red-500 mr-4" />
                <a href="tel:4423093500" className="text-gray-600 hover:text-red-500">
                  442 309 3500
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-red-500 mr-4" />
                <a href="mailto:contacto@mazdaqueretaro.com" className="text-gray-600 hover:text-red-500">
                  contacto@mazdaqueretaro.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-red-500 mr-4" />
                <span className="text-gray-600">
                  Av. 5 de Febrero 1303, Querétaro, Qro.
                </span>
              </div>
            </div>
          </div>
          <div>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeG24cgxDChBOpvwqctHALzZ9X5DMvaO3mJBfybIDNGOgc-vA/viewform?embedded=true"
              className="w-full h-[500px] rounded-lg shadow-lg"
              title="Formulario de contacto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;