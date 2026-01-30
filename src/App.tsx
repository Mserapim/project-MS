import React, { useEffect, useRef } from 'react';
// Importando ícones do Lucide React para uso na interface
import { Github, Linkedin, Mail, FileText, Phone, User, Briefcase, GraduationCap, Code, ExternalLink, ChevronDown, Cpu, Zap, Globe, Database, BarChart, PieChart } from 'lucide-react';
// Importando componentes personalizados
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
// Importação de EmailJS para envio de e-mails no formulário
import emailjs from "@emailjs/browser";


// 📌 Definição do componente ContactForm
const ContactForm = () => {
  const form = useRef(); // Criando referência para o formulário

  // Função para enviar e-mail
  const sendEmail = (e) => {
      e.preventDefault(); // Evita o reload da página

      emailjs.sendForm(
          "service_k8ebuit",  // Substitua pelo seu Service ID
          "template_5sgr8vb",   // Substitua pelo seu Template ID
          form.current,
          "EOdF4daI57rxFzWky"        // Substitua pelo seu User ID
      )
      .then((result) => {
          alert("Mensagem enviada com sucesso!");
          form.current.reset(); // Limpa os campos do formulário
      })
      .catch((error) => {
          alert("Erro ao enviar mensagem: " + error.text);
      });
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Email:</label>
      <input type="email" name="reply_to" required />
      <label>Mensagem:</label>
      <textarea name="message" required />
      <button type="submit">Enviar</button>
    </form>
  );
}; // 🚀 AGORA O `ContactForm` ESTÁ CORRETAMENTE FECHADO! ✅



function App() {
  // Referência para o canvas que será usado para o efeito Matrix
  const matrixRef = useRef(null);

  useEffect(() => {
    // Efeito de chuva Matrix (números binários caindo)
    const canvas = matrixRef.current;
    const context = canvas.getContext('2d');
    
    // Definindo o tamanho do canvas para preencher toda a tela
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Configurações para o efeito Matrix
    const binary = "01"; // Caracteres que serão exibidos (apenas 0 e 1 para efeito binário)
    const fontSize = 14; // Tamanho da fonte
    const columns = canvas.width / fontSize; // Número de colunas baseado na largura da tela
    
    // Array para controlar a posição vertical de cada coluna
    const drops = [];
    for (let i = 0; i < columns; i++) {
      // Inicializa cada coluna com uma posição aleatória acima da tela
      drops[i] = Math.floor(Math.random() * -100);
    }
    
    // Função para desenhar o efeito Matrix
    const drawMatrix = () => {
      // Cria um efeito de "rastro" ao invés de limpar completamente o canvas
      context.fillStyle = 'rgba(5, 8, 22, 0.05)';
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      // Define a cor e fonte dos caracteres
      context.fillStyle = '#00f3ff';
      context.font = `${fontSize}px monospace`;
      
      // Desenha cada caractere em sua posição
      for (let i = 0; i < drops.length; i++) {
        // Seleciona aleatoriamente 0 ou 1
        const text = binary.charAt(Math.floor(Math.random() * binary.length));
        context.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Reinicia a coluna quando ela chega ao final da tela (com probabilidade)
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Move o caractere para baixo
        drops[i]++;
      }
    };
    
    // Executa a função drawMatrix a cada 50ms
    const matrixInterval = setInterval(drawMatrix, 50);
    
    // Efeito de fade-in para as seções ao rolar a página
    const handleScroll = () => {
      // Seleciona todos os elementos com a classe fade-in-section
      const elements = document.querySelectorAll('.fade-in-section');
      elements.forEach((el) => {
        // Verifica se o elemento está visível na viewport
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
          // Adiciona classes para tornar o elemento visível com animação
          el.classList.add('opacity-100');
          el.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    };

    // Adiciona o evento de scroll para ativar as animações
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verificação inicial para elementos já visíveis
    
    // Limpeza ao desmontar o componente
    return () => {
      clearInterval(matrixInterval); // Para o efeito Matrix
      window.removeEventListener('scroll', handleScroll); // Remove o listener de scroll
    };
  }, []);

  return (
    // Container principal com fundo escuro e texto claro
    <div className="min-h-screen bg-dark-bg text-gray-100 font-sans relative">
      {/* Canvas para o efeito Matrix */}
      <canvas ref={matrixRef} className="fixed top-0 left-0 w-full h-full opacity-30 z-0"></canvas>
      {/* Componente de cabeçalho */}
      <Header />
      
      {/* Conteúdo principal */}
      <main className="max-w-5xl mx-auto px-4 py-8 relative z-10">
        {/* Seção Hero (principal) */}
        <section className="min-h-screen flex flex-col justify-center items-center relative py-20">
          {/* Gradiente de fundo */}
          <div className="hero-gradient absolute inset-0 z-0"></div>
          
          {/* Conteúdo da seção hero */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 z-10 w-full">
            {/* Lado esquerdo - Informações */}
            <div className="md:w-1/2">
              {/* Tag de desenvolvedor */}
              <div className="mb-2 inline-block">
                <span className="text-neon-blue text-sm font-mono tracking-wider">// ANALISTA DE DADOS & DESENVOLVEDOR FULL STACK</span>
              </div>
              {/* Nome com efeito de brilho */}
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
                Marcos <span className="text-neon-blue glow-text">Seraphim</span>
              </h1>
              {/* Linha decorativa */}
              <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-purple mb-6"></div>
              {/* Descrição */}
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Transformando <span className="text-neon-blue">dados</span> em insights e ideias em <span className="text-neon-blue">realidade digital</span> através de código e análise.
              </p>
              {/* Botões de ação */}
              <div className="flex gap-4 mt-8">
                <a href="#contact" className="neon-button bg-transparent border border-neon-blue text-neon-blue px-6 py-3 rounded-md font-medium transition-all hover:bg-neon-blue hover:text-darker-bg">
                  Iniciar Contato
                </a>
                <a href="#portfolio" className="bg-gradient-to-r from-neon-blue to-neon-purple text-darker-bg px-6 py-3 rounded-md font-medium transition-all hover:shadow-lg hover:shadow-neon-blue/20">
                  Ver Projetos
                </a>
              </div>
              
              {/* Links de redes sociais */}
              <div className="flex gap-4 mt-8">
                <a href="https://github.com/marcosseraphim" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/marcos-seraphim/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:seraphim.marcos@example.com" className="text-gray-400 hover:text-neon-blue transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            {/* Lado direito - Vídeo */}
            <div className="md:w-1/2 relative">
              {/* Efeito de brilho ao redor do vídeo */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg blur opacity-30"></div>
              {/* Container do vídeo com animação flutuante */}
              <div className="relative video-container floating-animation">
                <iframe 
                  width="100%" 
                  height="315" 
                  src="https://www.youtube.com/embed/8NwCJjyCMew?autoplay=1&mute=1&loop=1&playlist=8NwCJjyCMew&controls=0&showinfo=0" 
                  title="Digital Technology Video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
                {/* Gradiente sobre o vídeo para melhor integração visual */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent"></div>
              </div>
              
              {/* Ícones decorativos */}
              <div className="absolute -bottom-4 -right-4 bg-darker-bg p-3 rounded-md cyber-border">
                <Cpu size={24} className="text-neon-blue" />
              </div>
              <div className="absolute -top-4 -left-4 bg-darker-bg p-3 rounded-md cyber-border">
                <Code size={24} className="text-neon-purple" />
              </div>
            </div>
          </div>
          
          {/* Indicador de rolagem */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 scroll-down">
            <ChevronDown size={24} />
          </div>
        </section>

        {/* Seção Sobre Mim */}
        <Section id="about" title="Sobre Mim" icon={<User size={24} className="text-neon-blue" />}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2">
              {/* Parágrafos com efeito de fade-in ao rolar */}
              <p className="text-gray-300 mb-4 leading-relaxed fade-in-section opacity-0 translate-y-10 transition-all duration-700">
                Sou Marcos Seraphim, um desenvolvedor de software e analista de dados com paixão por criar soluções tecnológicas 
                que transformam dados em insights valiosos e resolvem problemas reais. Com experiência em desenvolvimento web e análise de dados, 
                estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed fade-in-section opacity-0 translate-y-10 transition-all duration-700 delay-100">
                Minha jornada na área de tecnologia começou há 14 anos, e desde então tenho trabalhado 
                em diversos projetos que me permitiram desenvolver um conjunto diversificado de habilidades 
                técnicas e analíticas. Especializo-me em arquiteturas modernas, análise de dados e visualizações interativas.
              </p>
              <p className="text-gray-300 leading-relaxed fade-in-section opacity-0 translate-y-10 transition-all duration-700 delay-200">
                Quando não estou codificando ou analisando dados, gosto de explorar novas tecnologias, esta com a familía, jogar videogames e praticar esportes. 
                Acredito que um bom equilíbrio entre vida profissional e pessoal é essencial 
                para manter a criatividade e a produtividade.
              </p>
            </div>
            
            {/* Card de áreas de atuação */}
            <div className="glass-effect rounded-lg p-6 fade-in-section opacity-0 translate-y-10 transition-all duration-700 delay-300">
              <h3 className="text-xl font-semibold mb-4 text-neon-blue">Áreas de Atuação</h3>
              <div className="space-y-4">
                {/* Área: Desenvolvimento Web */}
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-neon-blue/10 p-2 rounded-md">
                    <Globe size={18} className="text-neon-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Desenvolvimento Web</h4>
                    <p className="text-sm text-gray-400">Criação de aplicações web modernas e responsivas</p>
                  </div>
                </div>
                
                {/* Área: Análise de Dados */}
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-neon-blue/10 p-2 rounded-md">
                    <BarChart size={18} className="text-neon-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Análise de Dados</h4>
                    <p className="text-sm text-gray-400">Transformação de dados em insights estratégicos</p>
                  </div>
                </div>
                
                {/* Área: Visualização de Dados */}
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-neon-blue/10 p-2 rounded-md">
                    <PieChart size={18} className="text-neon-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Visualização de Dados</h4>
                    <p className="text-sm text-gray-400">Criação de dashboards interativos e relatórios</p>
                  </div>
                </div>
                
                {/* Área: Arquitetura de Sistemas */}
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-neon-blue/10 p-2 rounded-md">
                    <Database size={18} className="text-neon-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Arquitetura de Sistemas</h4>
                    <p className="text-sm text-gray-400">Planejamento e implementação de sistemas escaláveis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Seção Experiência Profissional */}
        <Section id="experience" title="Experiência Profissional" icon={<Briefcase size={24} className="text-neon-blue" />}>
          <div className="space-y-12 pl-8">
            {/* Experiência 1 */}
            <div className="timeline-item fade-in-section opacity-0 translate-y-10 transition-all duration-700">
              <div className="timeline-dot"></div>
              <div className="glass-effect rounded-lg p-6 cyber-border">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-neon-blue">Desenvolvedor Full Stack & Analista de Sistemas</h3>
                  <span className="text-sm bg-neon-blue/10 text-neon-blue px-3 py-1 rounded-md font-mono">2025 - 2026</span>
                </div>
                <h4 className="text-lg text-gray-300 mb-3">CAPCO/ A SERVIÇO DA PETROBRAS S/A </h4>
                <p className="text-gray-400 leading-relaxed">
                  Desenvolvimento de aplicações web utilizando React, Node.js e MongoDB, utilizando APIs, REST e JSON.
                  Implementação de análises de dados e dashboards com Java, Python e Power BI para tomada de decisões.
                  Criação de modelos preditivos e ETL, versionamento com Git e práticas de DevOps com Docker e Podman.
                  Mentoria de desenvolvedores juniores e implementação de práticas de DevOps.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs">React</span>
                  <span className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs">Docker</span>
                  <span className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs">Python</span>
                  <span className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs">Power BI</span>
                  <span className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs">Git</span>
                  <span className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs">Java</span>
                  <span className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs">APIs</span>
                </div>
              </div>
            </div>

            {/* Experiência 2 */}
            <div className="timeline-item fade-in-section opacity-0 translate-y-10 transition-all duration-700 delay-100">
              <div className="timeline-dot"></div>
              <div className="glass-effect rounded-lg p-6 cyber-border">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-neon-blue">Analista de Dados & Desenvolvedor Front-end</h3>
                  <span className="text-sm bg-neon-blue/10 text-neon-blue px-3 py-1 rounded-md font-mono">2024 - 2025</span>
                </div>
                <h4 className="text-lg text-gray-300 mb-3">CCT/ A SERVIÇO DA PETROBRAS S/A </h4>
                <p className="text-gray-400 leading-relaxed">
                  Desenvolvimento de interfaces responsivas e acessíveis utilizando React e TypeScript.
                  Análise de dados de usuários para otimização de experiência e conversão.
                  Criação de dashboards interativos para visualização de métricas de negócio.
                  Implementação de animações avançadas e visualizações de dados complexas.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs">React</span>
                  <span className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs">TypeScript</span>
                  <span className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs">Python</span>
                  <span className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs">JavaScript</span>
                  <span className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs">SQL</span>
                  <span className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs">Power BI</span>
                  <span className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs">Angular</span>
                </div>
              </div>
            </div>

            {/* Experiência 3 */}
            <div className="timeline-item fade-in-section opacity-0 translate-y-10 transition-all duration-700 delay-100">
              <div className="timeline-dot"></div>
              <div className="glass-effect rounded-lg p-6 cyber-border">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-neon-blue">Analista de Sistemas</h3>
                  <span className="text-sm bg-neon-blue/10 text-neon-blue px-3 py-1 rounded-md font-mono">2023 - 2024</span>
                </div>
                <h4 className="text-lg text-gray-300 mb-3">SOLUTIC/ A SERVIÇO DA PETROBRAS </h4>
                <p className="text-gray-400 leading-relaxed">
                  Desenvolvimento de interfaces responsivas e acessíveis utilizando React e TypeScript.
                  Análise de dados de usuários para otimização de experiência e conversão.
                  Criação de dashboards interativos para visualização de métricas de negócio.
                  Implementação de animações avançadas e visualizações de dados complexas.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs">React</span>
                  <span className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs">TypeScript</span>
                  <span className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs">Python</span>
                  <span className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs">JavaScript</span>
                  <span className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs">SQL</span>
                  <span className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs">Power BI</span>
                  <span className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs">Angular</span>
                </div>
              </div>
            </div>
           </div>
        </Section>

        {/* Seção Formação Acadêmica */}
        <Section id="education" title="Formação Acadêmica" icon={<GraduationCap size={24} className="text-neon-blue" />}>
          <div className="space-y-12 pl-8">
            {/* Formação 1 */}
            <div className="timeline-item fade-in-section opacity-0 translate-y-10 transition-all duration-700">
              <div className="timeline-dot"></div>
              <div className="glass-effect rounded-lg p-6 cyber-border">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-neon-blue">Pós-graduação em Arquitetura de Software</h3>
                  <span className="text-sm bg-neon-blue/10 text-neon-blue px-3 py-1 rounded-md font-mono">2018 - 2020</span>
                </div>
                <h4 className="text-lg text-gray-300 mb-3">Instituto Facuminas</h4>
                <p className="text-gray-400 leading-relaxed">
                  Especialização em Inteligência Artificial, Aprendizado de Máquina e Análise de Dados.
                  Pesquisa em algoritmos de otimização para sistemas distribuídos e processamento de big data.
                  Dissertação: "Modelos preditivos para análise de comportamento de usuários em plataformas digitais".
                </p>
              </div>
            </div>

            {/* Formação 2 */}
            <div className="timeline-item fade-in-section opacity-0 translate-y-10 transition-all duration-700 delay-100">
              <div className="timeline-dot"></div>
              <div className="glass-effect rounded-lg p-6 cyber-border">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-neon-blue">Bacharelado em Ciência da Computação</h3>
                  <span className="text-sm bg-neon-blue/10 text-neon-blue px-3 py-1 rounded-md font-mono">2009 - 2013</span>
                </div>
                <h4 className="text-lg text-gray-300 mb-3">Universidade Gama Filho</h4>
                <p className="text-gray-400 leading-relaxed">
                  Formação completa em Ciência da Computação com foco em desenvolvimento de software,
                  algoritmos, estruturas de dados, engenharia de software e análise estatística.
                  Projeto de conclusão: Sistema de recomendação baseado em comportamento do usuário
                  utilizando técnicas de machine learning e análise de dados.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Seção Habilidades */}
        <Section id="skills" title="Habilidades" icon={<Code size={24} className="text-neon-blue" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card de Tecnologias */}
            <div className="glass-effect rounded-lg p-6 cyber-border fade-in-section opacity-0 translate-y-10 transition-all duration-700">
              <h3 className="text-xl font-semibold mb-6 text-neon-blue">Tecnologias</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'JavaScript', 'TypeScript', "Java", 'React', 'Node.js', 'Next.js', 
                  'Python', 'Power BI', "Looker", 'GraphQL', 'MongoDB', "IDE Eclipse", 'PostgreSQL', 
                  'Docker', 'AWS', 'Cloud', 'TailwindCSS', 'Git','Sql','Angular'
                ].map((skill) => (
                  <span key={skill} className="skill-tag bg-neon-blue/10 text-neon-blue px-3 py-1 rounded-md text-sm transition-all hover:bg-neon-blue/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Card de Soft Skills */}
            <div className="glass-effect rounded-lg p-6 cyber-border fade-in-section opacity-0 translate-y-10 transition-all duration-700 delay-100">
              <h3 className="text-xl font-semibold mb-6 text-neon-purple">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Análise de Dados', 'Visualização', 'Storytelling com Dados',
                  'Liderança Técnica', 'Comunicação', 'Resolução de problemas', 
                  'Gestão de tempo', 'Adaptabilidade', 'Trabalho em equipe',
                  'Pensamento crítico', 'Aprendizado contínuo'
                ].map((skill) => (
                  <span key={skill} className="skill-tag bg-neon-purple/10 text-neon-purple px-3 py-1 rounded-md text-sm transition-all hover:bg-neon-purple/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Barras de Proficiência */}
            <div className="md:col-span-2 mt-4 fade-in-section opacity-0 translate-y-10 transition-all duration-700 delay-200">
              <div className="glass-effect rounded-lg p-6 cyber-border">
                <h3 className="text-xl font-semibold mb-6 text-neon-blue">Proficiência</h3>
                
                <div className="space-y-6">
                  {/* Barra de Proficiência: Front-end */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Front-end Development</span>
                      <span className="text-neon-blue">95%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  
                  {/* Barra de Proficiência: Análise de Dados */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Análise de Dados</span>
                      <span className="text-neon-blue">92%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  
                  {/* Barra de Proficiência: Back-end */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Back-end Development</span>
                      <span className="text-neon-blue">90%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  
                  {/* Barra de Proficiência: DevOps & Cloud */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">DevOps & Cloud</span>
                      <span className="text-neon-blue">85%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  {/* Barra de Proficiência: UI/UX Design */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Power BI</span>
                      <span className="text-neon-blue">80%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Seção Portfólio */}
        <Section id="portfolio" title="Portfólio" icon={<Briefcase size={24} className="text-neon-blue" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Projeto 1 */}
            <div className="tech-card glass-effect rounded-lg overflow-hidden cyber-border fade-in-section opacity-0 translate-y-10 transition-all duration-700">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Projeto 1" 
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-neon-blue/10 backdrop-blur-md rounded-md px-2 py-1">
                  <span className="text-xs text-neon-blue font-mono">2023</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">NexusAI Analytics Platform</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  Plataforma de análise de dados com inteligência artificial para processamento e visualização
                  de grandes volumes de dados, com dashboards interativos e relatórios automatizados.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs">React</span>
                  <span className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs">Python</span>
                  <span className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs">Power BI</span>
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center text-neon-blue hover:text-neon-purple transition-colors"
                >
                  Ver projeto <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>

            {/* Projeto 2 */}
            <div className="tech-card glass-effect rounded-lg overflow-hidden cyber-border fade-in-section opacity-0 translate-y-10 transition-all duration-700 delay-100">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Projeto 2" 
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-neon-blue/10 backdrop-blur-md rounded-md px-2 py-1">
                  <span className="text-xs text-neon-blue font-mono">2022</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Quantum Data Dashboard</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  Dashboard interativo para visualização de dados complexos em tempo real,
                  com análises preditivas e insights automatizados para tomada de decisões.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs">Vue.js</span>
                  <span className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs">D3.js</span>
                  <span className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs">Python</span>
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center text-neon-blue hover:text-neon-purple transition-colors"
                >
                  Ver projeto <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
            {/* Projeto 3 */}
            <div className="tech-card glass-effect rounded-lg overflow-hidden cyber-border fade-in-section opacity-0 translate-y-10 transition-all duration-700 delay-200">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Projeto 3" 
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-neon-blue/10 backdrop-blur-md rounded-md px-2 py-1">
                  <span className="text-xs text-neon-blue font-mono">2021</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">VisionData Analytics</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  Plataforma de análise preditiva, combinando aprendizado de máquina e estatística
                  vançada para transformar grandes volumes de dados em decisões estratégicas.                  
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs">React</span>
                  <span className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs">Python</span>
                  <span className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs">Power BI</span>
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center text-neon-blue hover:text-neon-purple transition-colors"
                >
                  Ver projeto <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
            {/* Projeto 4 */}
            <div className="tech-card glass-effect rounded-lg overflow-hidden cyber-border fade-in-section opacity-0 translate-y-10 transition-all duration-700 delay-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Projeto 4" 
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-neon-blue/10 backdrop-blur-md rounded-md px-2 py-1">
                  <span className="text-xs text-neon-blue font-mono">2020</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">DataViz Training Platform</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  Plataforma educacional para treinamento em visualização de dados e análise estatística,
                  com exercícios interativos e feedback em tempo real.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs">React</span>
                  <span className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs">D3.js</span>
                  <span className="bg-neon-blue/10 text-neon-blue px-2 py-1 rounded text-xs">Python</span>
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center text-neon-blue hover:text-neon-purple transition-colors"
                >
                  Ver projeto <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </Section>

        {/* Seção Contato */}
        <Section id="contact" title="Contato" icon={<Mail size={24} className="text-neon-blue" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="fade-in-section opacity-0 translate-y-10 transition-all duration-700">
              <p className="text-gray-300 mb-6 leading-relaxed">
                Interessado em trabalhar juntos ou tem alguma pergunta? 
                Entre em contato comigo através dos canais abaixo ou preencha o formulário.
              </p>
              
              <div className="space-y-6">
                {/* Link de Email */}
                <a href="mailto:marcosseraphim@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-neon-blue transition-colors group">
                  <div className="bg-neon-blue/10 p-3 rounded-lg group-hover:bg-neon-blue/20 transition-colors">
                    <Mail size={20} className="text-neon-blue" />
                  </div>
                  <span>marcosseraphim@gmail.com</span>
                </a>
                {/* Link de LinkedIn */}
                <a href="https://www.linkedin.com/in/marcos-seraphim/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-neon-blue transition-colors group">
                  <div className="bg-neon-blue/10 p-3 rounded-lg group-hover:bg-neon-blue/20 transition-colors">
                    <Linkedin size={20} className="text-neon-blue" />
                  </div>
                  <span>linkedin.com/in/marcosseraphim</span>
                </a>
                {/* Link de GitHub */}
                <a href="https://github.com/marcosseraphim" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-neon-blue transition-colors group">
                  <div className="bg-neon-blue/10 p-3 rounded-lg group-hover:bg-neon-blue/20 transition-colors">
                    <Github size={20} className="text-neon-blue" />
                  </div>
                  <span>github.com/marcosseraphim</span>
                </a>
                {/* Link de Telefone */}
                <a href="tel:+5521979612706" className="flex items-center gap-4 text-gray-300 hover:text-neon-blue transition-colors group">
                  <div className="bg-neon-blue/10 p-3 rounded-lg group-hover:bg-neon-blue/20 transition-colors">
                    <Phone size={20} className="text-neon-blue" />
                  </div>
                  <span>+55 (21) 97961-2706</span>
                </a>
                {/* Link para CV */}
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-neon-blue transition-colors group">
                  <div className="bg-neon-blue/10 p-3 rounded-lg group-hover:bg-neon-blue/20 transition-colors">
                    <FileText size={20} className="text-neon-blue" />
                  </div>
                  <span>Download CV</span>
                </a>
              </div>
            </div>
            
            {/* Formulário de Contato */}
            <form className="glass-effect rounded-lg p-6 cyber-border fade-in-section opacity-0 translate-y-10 transition-all duration-700 delay-100">
              <div className="space-y-4">
                {/* Campo: Nome */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 bg-darker-bg border border-gray-700 rounded-md focus:ring-2 focus:ring-neon-blue focus:border-neon-blue text-white"
                    placeholder="Seu nome"
                  />
                </div>
                {/* Campo: Email */}
                <div>
                  <label htmlFor="reply_to" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="reply_to"
                    name="reply_to"  // Alterado para ser reconhecido pelo EmailJS 
                    className="w-full px-4 py-2 bg-darker-bg border border-gray-700 rounded-md focus:ring-2 focus:ring-neon-blue focus:border-neon-blue text-white"
                    placeholder="seu.email@exemplo.com"
                    required
                  />
                </div>
                {/* Campo: Mensagem */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Mensagem</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 bg-darker-bg border border-gray-700 rounded-md focus:ring-2 focus:ring-neon-blue focus:border-neon-blue text-white"
                    placeholder="Sua mensagem aqui..."
                  ></textarea>
                </div>
                {/* Botão de Envio */}
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white px-6 py-3 rounded-md font-medium transition-all hover:shadow-lg hover:shadow-neon-blue/20"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </Section>
      </main>

      {/* Componente de Rodapé */}
      <Footer />
    </div>
  );
}

export default App;