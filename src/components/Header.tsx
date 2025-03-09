import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';

const Header = () => {
  // Estado para controlar a abertura/fechamento do menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Estado para controlar a aparência do cabeçalho ao rolar a página
  const [isScrolled, setIsScrolled] = useState(false);
  // Estado para armazenar o texto da pesquisa
  const [searchQuery, setSearchQuery] = useState('');

  // Efeito para detectar o scroll da página
  useEffect(() => {
    // Função que verifica a posição do scroll
    const handleScroll = () => {
      // Se o scroll for maior que 10px, ativa o efeito de cabeçalho com fundo
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Adiciona o evento de scroll
    window.addEventListener('scroll', handleScroll);
    // Remove o evento ao desmontar o componente
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para alternar a visibilidade do menu mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Função para lidar com a pesquisa no Google
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank');
    }
  };

  // Links de navegação
  const navLinks = [
    { name: 'Sobre', href: '#about' },
    { name: 'Experiência', href: '#experience' },
    { name: 'Formação', href: '#education' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    // Cabeçalho fixo com efeito de transparência ao rolar
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo/Nome */}
          <a href="#" className="text-2xl font-bold text-neon-blue glow-text">
            MarcosSeraphim<span className="text-white blinking-cursor">_</span>
          </a>

          {/* Barra de pesquisa para desktop - REMOVIDA conforme solicitado */}

          {/* Navegação para desktop */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-neon-blue font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Botão do menu mobile */}
          <button
            className="md:hidden text-gray-300 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <X size={24} className="text-neon-blue" /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Navegação mobile */}
      {isMenuOpen && (
        <nav className="md:hidden glass-effect backdrop-blur-md py-4 px-4 border-t border-gray-800">
          {/* Barra de pesquisa para mobile */}
          <form onSubmit={handleSearch} className="flex items-center bg-darker-bg/70 border border-gray-700 rounded-md overflow-hidden px-2 mb-4">
            <input
              type="text"
              placeholder="Pesquisar no Google..."
              className="bg-transparent border-none outline-none text-white py-2 px-2 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="text-gray-400 hover:text-neon-blue">
              <Search size={18} />
            </button>
          </form>
          {/* Links de navegação mobile */}
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-neon-blue font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;