import React from 'react';
import { Github, Linkedin, Mail, Code, Search } from 'lucide-react';

const Footer = () => {
  // Obtém o ano atual para o copyright
  const currentYear = new Date().getFullYear();
  // Estado para armazenar o texto da pesquisa
  const [searchQuery, setSearchQuery] = React.useState('');

  // Função para lidar com a pesquisa no Google
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank');
    }
  };

  return (
    // Rodapé com fundo escuro e borda superior
    <footer className="bg-darker-bg text-white py-16 border-t border-gray-800 relative z-10">
      <div className="max-w-5xl mx-auto px-4">
        {/* Seção superior do rodapé */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          {/* Logo e descrição */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-2">
              <Code size={24} className="text-neon-blue" />
              <h2 className="text-2xl font-bold text-neon-blue glow-text">MarcosSeraphim<span className="text-white blinking-cursor">_</span></h2>
            </div>
            <p className="text-gray-400">Desenvolvedor Full Stack & Analista de Dados</p>
          </div>
          
          {/* Barra de pesquisa Google */}
          <form onSubmit={handleSearch} className="flex items-center bg-darker-bg/70 border border-gray-700 rounded-md overflow-hidden px-2 mb-4 md:mb-0 w-full md:w-64">
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
          
          {/* Links de redes sociais */}
          <div className="flex space-x-4">
            <a 
              href="https://github.com/marcosseraphim" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors hover:text-neon-blue"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/marcosseraphim" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors hover:text-neon-blue"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:seraphim.marcos@example.com" 
              className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors hover:text-neon-blue"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        {/* Seção inferior do rodapé */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Marcos Seraphim. Todos os direitos reservados.
          </p>
          
          {/* Links de navegação rápida */}
          <div className="flex space-x-6">
            <a href="#about" className="text-gray-400 hover:text-neon-blue text-sm transition-colors">
              Sobre
            </a>
            <a href="#portfolio" className="text-gray-400 hover:text-neon-blue text-sm transition-colors">
              Portfólio
            </a>
            <a href="#contact" className="text-gray-400 hover:text-neon-blue text-sm transition-colors">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;