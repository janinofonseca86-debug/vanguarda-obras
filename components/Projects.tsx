import React, { useState, useEffect } from 'react';

// Icons
const CameraIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="3.2" />
        <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
    </svg>
);


interface ProjectCardProps {
  imageUrl: string;
  title: string;
  category: string;
  index: number;
  onImageChange: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, category, index, onImageChange }) => {
  const [cardTransform, setCardTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  const [imageTransform, setImageTransform] = useState('scale(1) translateX(0px) translateY(0px)');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    const rotateY = (x / width - 0.5) * 15;
    const rotateX = -(y / height - 0.5) * 15;
    setCardTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    
    const parallaxX = (x / width - 0.5) * -20;
    const parallaxY = (y / height - 0.5) * -20;
    setImageTransform(`scale(1.05) translateX(${parallaxX}px) translateY(${parallaxY}px)`);
  };

  const handleMouseLeave = () => {
    setCardTransform('perspective(1000px) rotateX(0deg) rotateY(0deg)');
    setImageTransform('scale(1) translateX(0px) translateY(0px)');
  };

  return (
    <div 
      className="group relative overflow-hidden rounded-lg shadow-lg"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: cardTransform,
        transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}
    >
      <img 
        src={imageUrl} 
        alt={title} 
        width="600"
        height="400"
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
        style={{
          transform: imageTransform,
          transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      
      {/* Upload Button */}
      <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <label htmlFor={`upload-${index}`} className="cursor-pointer bg-white/80 text-slate-800 p-2 rounded-full hover:bg-white shadow-md transition-colors" title="Alterar imagem">
          <CameraIcon className="w-6 h-6" />
        </label>
        <input
          type="file"
          id={`upload-${index}`}
          className="hidden"
          accept="image/png, image/jpeg, image/webp"
          onChange={(e) => onImageChange(index, e)}
        />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-1/4 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{category}</p>
      </div>
    </div>
  );
};

const initialProjects = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      title: 'Residência Belavista',
      category: 'Construção Residencial'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1542871365-276f578b8e84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      title: 'Vanguarda Corporate Center',
      category: 'Edifício Comercial'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1600585152225-358fe78d7815?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      title: 'Apartamento Jardins',
      category: 'Reforma'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      title: 'Villa Toscana',
      category: 'Construção Residencial'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1543269664-7e6795b5589a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      title: 'Loja Conceito',
      category: 'Edifício Comercial'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1587033519395-56a39f6534e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      title: 'Centro de Logística',
      category: 'Construção Industrial'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1597048104706-e3823f5b0a32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      title: 'Casa de Praia Itamambuca',
      category: 'Construção Residencial'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      title: 'Loft Industrial',
      category: 'Reforma'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1517456793574-84a5a56f082e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      title: 'Centro Comunitário',
      category: 'Edifício Institucional'
    },
  ];

const Projects: React.FC = () => {
    const [projects, setProjects] = useState(() => {
        try {
            const savedProjects = localStorage.getItem('userProjects');
            return savedProjects ? JSON.parse(savedProjects) : initialProjects;
        } catch (error) {
            console.error("Failed to parse projects from localStorage", error);
            return initialProjects;
        }
    });

    const handleImageChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                const newProjects = [...projects];
                newProjects[index] = { ...newProjects[index], imageUrl: reader.result as string };
                setProjects(newProjects);
                try {
                    localStorage.setItem('userProjects', JSON.stringify(newProjects));
                } catch (error) {
                    console.error("Failed to save projects to localStorage", error);
                }
            };
            reader.readAsDataURL(file);
        }
    };

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
            <ProjectCard key={index} {...project} index={index} onImageChange={handleImageChange} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;