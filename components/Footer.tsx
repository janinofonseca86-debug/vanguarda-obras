import React from 'react';

const BuildingIcon: React.FC<{ className: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 21V10.075L12 3L20 10.075V21H14V14H10V21H4ZM6 19H8V12H16V19H18V11L12 5.5L6 11V19ZM12 13Z" />
    </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C17.17 2.09 16.1 2 15 2c-2.67 0-4.5 1.6-4.5 4.5V9.5H8v4h2.5V22h5v-8.5z"/>
    </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
    </svg>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-11 2H5v12h3V5zm-1.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm9-8.5H13v6h3v-6zm-1.5-2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"/>
    </svg>
);

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
        behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
             <a href="#inicio" onClick={(e) => handleScroll(e, '#inicio')} className="flex items-center gap-2 mb-4 cursor-pointer">
                <BuildingIcon className="w-8 h-8 text-amber-500" />
                <span className="text-2xl font-bold text-white">Vanguarda</span>
            </a>
            <p className="text-gray-400">Construindo o futuro com solidez e confiança desde 2008.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#servicos" onClick={(e) => handleScroll(e, '#servicos')} className="hover:text-amber-400 transition-colors cursor-pointer">Serviços</a></li>
              <li><a href="#projetos" onClick={(e) => handleScroll(e, '#projetos')} className="hover:text-amber-400 transition-colors cursor-pointer">Projetos</a></li>
              <li><a href="#sobre" onClick={(e) => handleScroll(e, '#sobre')} className="hover:text-amber-400 transition-colors cursor-pointer">Sobre Nós</a></li>
              <li><a href="#contato" onClick={(e) => handleScroll(e, '#contato')} className="hover:text-amber-400 transition-colors cursor-pointer">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>(11) 98765-4321</li>
              <li>contato@vanguarda.com</li>
              <li>Av. das Construções, 123</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors"><FacebookIcon className="w-6 h-6" /></a>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors"><InstagramIcon className="w-6 h-6" /></a>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors"><LinkedInIcon className="w-6 h-6" /></a>
            </div>
          </div>

        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Construtora Vanguarda. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;