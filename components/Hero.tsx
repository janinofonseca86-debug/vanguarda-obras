
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/construction/1920/1080')" }}></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 drop-shadow-lg">
          Construindo o Futuro, Tijolo por Tijolo
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 drop-shadow-md">
          Excelência em cada projeto, da fundação ao acabamento. Sua visão, nossa expertise.
        </p>
        <a 
          href="#contato" 
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Solicite um Orçamento
        </a>
      </div>
    </section>
  );
};

export default Hero;
