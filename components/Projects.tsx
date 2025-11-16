import React from 'react';

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, category }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg">
    <img src={imageUrl} alt={title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"/>
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-1/4 group-hover:translate-y-0 transition-transform duration-500">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{category}</p>
    </div>
  </div>
);


const Projects: React.FC = () => {
  const projects = [
    {
      imageUrl: 'https://picsum.photos/seed/modern-house/600/400',
      title: 'Residência Belavista',
      category: 'Construção Residencial'
    },
    {
      imageUrl: 'https://picsum.photos/seed/office-building/600/400',
      title: 'Vanguarda Corporate Center',
      category: 'Edifício Comercial'
    },
    {
      imageUrl: 'https://picsum.photos/seed/apartment-renovation/600/400',
      title: 'Apartamento Jardins',
      category: 'Reforma'
    },
    {
      imageUrl: 'https://picsum.photos/seed/luxury-villa/600/400',
      title: 'Villa Toscana',
      category: 'Construção Residencial'
    },
    {
      imageUrl: 'https://picsum.photos/seed/retail-store/600/400',
      title: 'Loja Conceito',
      category: 'Edifício Comercial'
    },
    {
      imageUrl: 'https://picsum.photos/seed/industrial-plant/600/400',
      title: 'Centro de Logística',
      category: 'Construção Industrial'
    },
    {
      imageUrl: 'https://picsum.photos/seed/beach-house/600/400',
      title: 'Casa de Praia Itamambuca',
      category: 'Construção Residencial'
    },
    {
      imageUrl: 'https://picsum.photos/seed/modern-loft/600/400',
      title: 'Loft Industrial',
      category: 'Reforma'
    },
    {
      imageUrl: 'https://picsum.photos/seed/community-center/600/400',
      title: 'Centro Comunitário',
      category: 'Edifício Institucional'
    },
  ];

  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Portfólio de Projetos</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Conheça alguns dos projetos que entregamos com orgulho e excelência.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;