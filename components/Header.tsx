
import React, { useState, useEffect } from 'react';

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

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isMenuOpen]);

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
        <>
            <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-30 shadow-md">
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
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none" aria-label="Abrir menu">
                            <MenuIcon className="w-7 h-7" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMenuOpen(false)}
                aria-hidden="true"
            ></div>

            {/* Mobile Menu Drawer */}
            <aside
                className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="mobile-menu-title"
            >
                <div className="flex justify-between items-center p-5 border-b">
                    <h2 id="mobile-menu-title" className="text-xl font-bold text-gray-800">Menu</h2>
                    <button onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-gray-900" aria-label="Fechar menu">
                        <CloseIcon className="w-6 h-6" />
                    </button>
                </div>
                <nav className="flex flex-col p-5">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleScroll(e, link.href)}
                            className="py-3 px-3 text-lg text-gray-700 rounded-md hover:bg-amber-50 hover:text-amber-600 transition-all duration-200"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </aside>
        </>
    );
};

export default Header;
