
import React from 'react';

const PinIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-10c-4.2 0-8 3.22-8 8.2 0 3.32 2.67 7.25 8 11.8 5.33-4.55 8-8.48 8-11.8C20 5.22 16.2 2 12 2zm0 10.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
);

const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.02.74-.25 1.02l-2.2 2.2z"/>
    </svg>
);

const EmailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
);

const Contact: React.FC = () => {
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Obrigado pelo seu contato! Retornaremos em breve.');
    };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Entre em Contato</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Tem um projeto em mente? Vamos conversar e transformá-lo em realidade.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
            <div className="lg:w-1/2 bg-gray-50 p-8 rounded-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                        <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 transition"/>
                    </div>
                     <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 transition"/>
                    </div>
                     <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Sua Mensagem</label>
                        <textarea id="message" name="message" rows={5} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 transition"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-md transition duration-300 shadow-md">
                            Enviar Mensagem
                        </button>
                    </div>
                </form>
            </div>
            <div className="lg:w-1/2 space-y-8">
                <div className="flex items-start gap-4">
                    <PinIcon className="w-10 h-10 text-amber-500 mt-1"/>
                    <div>
                        <h3 className="text-xl font-semibold">Nosso Endereço</h3>
                        <p className="text-gray-600">Av. das Construções, 123, Centro<br/>Cidade dos Projetos, EP 12345-678</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <PhoneIcon className="w-10 h-10 text-amber-500 mt-1"/>
                    <div>
                        <h3 className="text-xl font-semibold">Telefone</h3>
                        <p className="text-gray-600">(11) 98765-4321</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <EmailIcon className="w-10 h-10 text-amber-500 mt-1"/>
                    <div>
                        <h3 className="text-xl font-semibold">Email</h3>
                        <p className="text-gray-600">contato@vanguarda.com</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
