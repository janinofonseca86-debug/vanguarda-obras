
import React from 'react';

const ResidentialIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
);

const CommercialIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
    </svg>
);

const RenovationIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.36 2.64L15.5 6.5l2.83 2.83 3.86-3.86c-1.12-1.12-2.73-1.48-4.83-.83zM3 16.5V21h4.5l9.96-9.96-4.5-4.5L3 16.5zm10.5-4.46L15.96 14.5 18 12.46l-2.5-2.5-1.5 1.5z"/>
    </svg>
);


interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">
    <div className="inline-block p-4 bg-amber-100 text-amber-500 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services: React.FC = () => {
    const services = [
        {
            icon: <ResidentialIcon className="w-10 h-10" />,
            title: 'Construção Residencial',
            description: 'Construímos a casa dos seus sonhos com materiais de alta qualidade e design moderno, focados no seu conforto e segurança.'
        },
        {
            icon: <CommercialIcon className="w-10 h-10" />,
            title: 'Edifícios Comerciais',
            description: 'Projetos comerciais funcionais e inovadores para o seu negócio, otimizando espaços e garantindo a melhor infraestrutura.'
        },
        {
            icon: <RenovationIcon className="w-10 h-10" />,
            title: 'Reformas e Renovações',
            description: 'Modernizamos e revitalizamos seu espaço, seja residencial ou comercial, com soluções criativas e acabamento impecável.'
        }
    ];

  return (
    <section id="servicos" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Nossos Serviços</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Oferecemos uma gama completa de serviços de construção civil com compromisso e qualidade.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
