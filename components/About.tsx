
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://picsum.photos/seed/construction-team/600/500" 
              alt="Equipe da Construtora Vanguarda" 
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Sobre a Construtora Vanguarda</h2>
            <div className="w-24 h-1 bg-amber-500 mt-2 mb-6"></div>
            <p className="text-gray-600 mb-4 text-lg">
              Com mais de 15 anos de experiência no mercado da construção civil, a Vanguarda se destaca pela inovação, qualidade e compromisso com os prazos. Nossa missão é transformar projetos em realidade, superando as expectativas de nossos clientes.
            </p>
            <p className="text-gray-600 mb-6">
              Acreditamos que cada construção é mais do que uma estrutura; é um espaço para viver, trabalhar e prosperar. Por isso, utilizamos as melhores práticas de engenharia, materiais de ponta e uma equipe altamente qualificada para garantir a excelência em cada detalhe.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <span className="text-3xl font-bold text-amber-500">15+</span>
                    <p className="text-gray-700">Anos de Mercado</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <span className="text-3xl font-bold text-amber-500">100+</span>
                    <p className="text-gray-700">Projetos Entregues</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
