
import React, { useState } from 'react';

const BuildingIcon: React.FC<{ className: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 21V10.075L12 3L20 10.075V21H14V14H10V21H4ZM6 19H8V12H16V19H18V11L12 5.5L6 11V19ZM12 13Z" />
    </svg>
);


const MenuIcon: React.FC<{ className: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" />
    </svg>
);


const CloseIcon: React.FC<{ className: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" />
    </svg>
);

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '#inicio', label: 'Início' },
        { href: '#servicos', label: 'Serviços' },
        { href: '#projetos', label: 'Projetos' },
        { href: '#sobre', label: 'Sobre Nós' },
        { href: '#contato', label: 'Contato' },
    ];

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
        });
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#inicio" onClick={(e) => handleScroll(e, '#inicio')} className="flex items-center gap-2">
                    <BuildingIcon className="w-8 h-8 text-amber-500" />
                    <span className="text-2xl font-bold text-gray-800">Vanguarda</span>
                </a>

                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} onClick={(e) => handleScroll(e, link.href)} className="text-gray-600 hover:text-amber-500 transition-colors duration-300 font-medium">
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none">
                        {isMenuOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white absolute w-full shadow-lg`}>
                <nav className="flex flex-col items-center py-4">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} onClick={(e) => handleScroll(e, link.href)} className="py-3 text-gray-700 hover:text-amber-500 hover:bg-gray-100 w-full text-center transition-colors duration-300">
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
