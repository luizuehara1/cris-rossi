/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight,
  Menu,
  X,
  Compass,
  Star,
  Users,
  Calendar,
  Lock,
  Play,
  Sparkles,
  History,
  Coins,
  Eye,
  Heart
} from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa';

const LINKS = {
  course: "https://habitosquecuram.hotmart.host/quebrando-votos-de-pobreza-em-21-dias",
  instagram: "https://www.instagram.com/habitosquecuramamente",
  youtube: "https://youtu.be/8oMLGe-iECY?si=K2q4T8lsEm6KEwzO",
  whatsapp: "https://wa.me/5519983399818?text=Olá%20Cris!%20Gostaria%20de%20agendar%20uma%20consulta%20vibracional%20e%20saber%20mais%20sobre%20o%20seu%20atendimento."
};

const IMAGES = {
  cris: "https://i.postimg.cc/vDFdP2Vn/Chat-GPT-Image-14-de-mai-de-2026-16-41-07.png",
  course: "https://i.postimg.cc/PJk6dMMv/Chat-GPT-Image-13-de-jul-de-2026-16-39-29.png",
  spiritual: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800"
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'O Curso', href: '#curso' },
    { name: 'A Jornada', href: '#jornada' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-dark/80 backdrop-blur-2xl py-4 md:py-5 border-b border-white/10' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 md:gap-5 group"
        >
          <div className="w-14 h-14 md:w-20 md:h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center transition-all duration-500 group-hover:border-brand-gold/50 group-hover:shadow-[0_0_25px_rgba(201,154,36,0.4)] overflow-hidden shrink-0 shadow-lg">
            <img src={IMAGES.cris} alt="Cris Rossi Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <span className="font-serif text-2xl md:text-[32px] font-medium text-white tracking-tight transition-colors duration-500 group-hover:text-brand-gold">Cris Rossi</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className={`text-sm font-medium tracking-wide transition-colors ${isScrolled ? 'text-white/80 hover:text-brand-gold' : 'text-brand-dark/80 md:text-white/80 hover:text-brand-gold'}`}
            >
              {item.name}
            </a>
          ))}
          <a href={LINKS.course} target="_blank" rel="noopener noreferrer" className="btn-primary py-2 px-6 text-sm">
            Quero Começar
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-gold"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-dark border-t border-white/10 p-6 flex flex-col gap-6 md:hidden"
          >
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/80 text-lg font-medium border-b border-white/5 pb-2"
              >
                {item.name}
              </a>
            ))}
            <a href={LINKS.course} className="btn-primary w-full shadow-none">
              Quero Começar
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Pendulum = ({ className = "text-brand-gold", size = 24 }: { className?: string; size?: number }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      animate={{ rotate: [-24, 24, -24] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{ originX: "50%", originY: "10%" }}
    >
      {/* Small top anchor ring */}
      <circle cx="12" cy="3" r="1.5" className="fill-current" />
      
      {/* Delicately dotted chain line representing the metal links */}
      <line x1="12" y1="4.5" x2="12" y2="14.5" className="stroke-current" strokeWidth="1.2" strokeDasharray="1.5 1.5" />
      
      {/* Top cap bead of the pendulum */}
      <circle cx="12" cy="14.5" r="1.5" className="fill-current" />
      
      {/* Smooth classic metallic teardrop pendulum with pointed tip */}
      <path
        d="M12 14.5 C14.8 14.5 15.8 18.5 12 23 C8.2 18.5 9.2 14.5 12 14.5 Z"
        className="fill-current"
      />
      
      {/* Sleek metallic reflection highlight */}
      <path 
        d="M11 15.5 C12.2 15.5 13 17.5 12.1 21.2" 
        className="stroke-white/40" 
        strokeWidth="0.8" 
        strokeLinecap="round" 
      />
    </motion.svg>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-dark text-white">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-moss/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-4 px-7 py-3.5 sm:px-10 sm:py-4.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-[13px] sm:text-sm font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-8 backdrop-blur-md shadow-[0_15px_40px_rgba(201,154,36,0.12)] hover:bg-brand-gold/20 cursor-default transition-all duration-300"
          >
            <Star size={20} className="fill-brand-gold animate-pulse shrink-0" />
            <span className="leading-none mt-[1px]">Terapeuta Vibracional</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-10 p-5 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl flex items-center gap-5 max-w-sm group hover:border-brand-gold/30 transition-all duration-500"
          >
            <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center shrink-0 border border-brand-gold/20 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(201,154,36,0.1)] text-brand-gold">
              <FaWhatsapp size={26} />
            </div>
            <div>
              <p className="text-sm font-medium text-white/90">QUER MARCAR UMA SESSÃO?</p>
              <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[10px] text-brand-gold hover:text-white transition-colors font-bold uppercase tracking-[0.15em] mt-1 inline-block">CLIQUE AQUI PARA SABER MAIS</a>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-6xl lg:text-8xl font-serif leading-[0.95] mb-8 text-balance"
          >
            Mude sua vida mudando seus <span className="italic text-brand-gold premium-glow">hábitos</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-xl text-white/60 font-light mb-10 max-w-lg leading-relaxed text-balance"
          >
            Inicie hoje uma transformação através de hábitos conscientes e correção vibracional com Cris Rossi.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a href={LINKS.course} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-12 group">
              Quero iniciar minha jornada
              <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
            </a>
            <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-12 group shadow-[0_20px_40px_rgba(201,154,36,0.3)]">
              <FaWhatsapp size={20} />
              Falar com a Cris
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative premium-glow"
        >
          <div className="relative z-10 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border border-white/10 group">
            <img src={IMAGES.cris} alt="Cris Rossi" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />
          </div>
          
          {/* Decorative Floaties */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-16 top-1/4 hidden lg:block z-20"
          >
            <div className="glass-card p-8 rounded-3xl shadow-2xl backdrop-blur-3xl border-brand-gold/20">
              <p className="text-brand-gold font-serif text-4xl italic mb-1 tracking-tighter">21 Dias</p>
              <p className="text-[10px] uppercase tracking-[0.2em] opacity-50 font-bold">para uma Nova Vida</p>
            </div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -left-12 bottom-1/4 hidden lg:block z-20"
          >
            <div className="glass-card w-20 h-20 rounded-2xl flex items-center justify-center border-brand-gold/20 shadow-2xl overflow-visible">
              <Pendulum size={44} className="text-brand-gold" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  const methods = [
    {
      title: "90 Dias para um Novo Mindset",
      subtitle: "Método Exclusivo",
      desc: "Uma abordagem transformadora desenvolvida por Cris que une reprogramação mental, alinhamento energético e mudança de hábitos, promovendo resultados reais e duradouros."
    },
    {
      title: "Divórcio Energético",
      subtitle: "Corte de Vínculos",
      desc: "Divórcio terapêutico vai além de um corte energético com o passado ou com  pessoas que não resoam mais com vc ,ele encerra laços de vidas passadas,pactos feito por seus antepassados,juras,maldiçoes ,formas pensamentos presas na linha do tempo da sua história."
    },
    {
      title: "Quebrando Votos de Pobreza em 21 Dias",
      subtitle: "Transformação Ativa",
      desc: "Um passo a passo desenvolvido para identificar, desbloquear e ressignificar padrões energéticos ligados à escassez financeira, medo, limitação e autosabotagem."
    }
  ];

  return (
    <section id="sobre" className="section-padding bg-brand-offwhite relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-dark/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Image (Sticky on Desktop) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5 lg:sticky lg:top-32 relative w-full"
          >
            <div className="relative z-10 p-2 bg-white rounded-[3rem] shadow-2xl overflow-hidden group">
              <img src={IMAGES.cris} alt="Cris Rossi Terapeuta" className="rounded-[2.5rem] w-full grayscale-[10%] group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-12 flex flex-col justify-end">
                 <p className="text-white text-2xl font-serif italic mb-2 tracking-tight">Cris Rossi</p>
                 <p className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold">Terapeuta Vibracional</p>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -right-8 z-20 hidden lg:block">
              <motion.div 
                initial={{ rotate: -5 }}
                whileInView={{ rotate: 0 }}
                className="bg-brand-dark p-8 rounded-[2rem] text-white shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] max-w-[260px] border border-white/10"
              >
                <p className="font-serif italic text-xl leading-tight mb-4 text-brand-gold">
                  "A cura vai além do corpo físico, desperte o seu poder."
                </p>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-brand-gold text-brand-gold" />)}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Methods */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col justify-start"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-6 flex items-center gap-4"
            >
              <div className="h-px w-8 bg-brand-gold" />
              <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-[10px]">A Mentora</span>
            </motion.div>
            
            <h2 className="text-5xl lg:text-7xl mb-10 font-serif text-brand-dark leading-tight tracking-tight">
              Quem é <span className="premium-glow text-brand-gold italic">Cris Rossi</span>
            </h2>
            
            <div className="space-y-6 text-brand-dark/80 text-[17px] md:text-lg leading-relaxed font-light text-balance mb-12">
              <p>
                <strong className="font-semibold text-brand-dark">Cris Rossi</strong> é Terapeuta Vibracional e Radiestesista, atuando há mais de 10 anos no desenvolvimento humano, equilíbrio energético e expansão da consciência. Sua missão é ajudar pessoas a desbloquearem padrões limitantes, restaurarem sua força interior e reencontrarem o alinhamento energético necessário para prosperar em todas as áreas da vida.
              </p>
              <p>
                Especialista em radiestesia e harmonização vibracional, Cris Rossi já auxiliou inúmeras pessoas em processos de transformação profunda, contribuindo diretamente para mais clareza emocional, fortalecimento espiritual e direcionamento rumo ao sucesso pessoal e profissional.
              </p>
              <p>
                Com sensibilidade, experiência e dedicação, Cris Rossi continua fazendo diferença na vida de seus clientes, guiando cada pessoa em uma jornada de cura, expansão e transformação vibracional, ajudando-as a despertarem seu verdadeiro potencial e construírem uma nova realidade de equilíbrio, abundância e propósito.
              </p>
            </div>

            {/* Methods Showcase Section */}
            <div className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gold font-mono">Metodologias & Métodos Exclusivos:</h3>
              
              <div className="grid gap-6">
                {methods.map((method, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -3 }}
                    className="p-8 bg-white border border-brand-dark/[0.04] rounded-2xl md:rounded-[2rem] shadow-[0_15px_40px_-20px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_-15px_rgba(201,154,36,0.12)] hover:border-brand-gold/20 transition-all duration-500 group"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold mb-2 block">{method.subtitle}</span>
                    <h4 className="text-xl md:text-2xl font-serif text-brand-dark font-medium mb-3 group-hover:text-brand-gold transition-colors">{method.title}</h4>
                    <p className="text-sm md:text-base text-brand-dark/70 font-light leading-relaxed">{method.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>



          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Course = () => {
  const benefitsData = [
    {
      title: "Liberar crenças de escassez",
      desc: "Limpeza profunda de medos inconscientes, sentimentos de falta e crenças limitantes sobre o fluxo do dinheiro.",
      icon: Sparkles,
      badge: "Mentalidade"
    },
    {
      title: "Romper padrões ancestrais",
      desc: "Libertação de votos de pobreza, heranças energéticas familiares e pactos limitantes herdados do passado.",
      icon: History,
      badge: "Linhagem"
    },
    {
      title: "Sintonizar-se com a riqueza",
      desc: "Eleve sua assinatura vibracional para atrair novas oportunidades e abundância financeira com leveza.",
      icon: Coins,
      badge: "Frequência"
    },
    {
      title: "Consciência de Abundância",
      desc: "Desenvolva uma mente próspera capaz de enxergar e criar novas vias de crescimento em sua realidade.",
      icon: Eye,
      badge: "Expansão"
    },
    {
      title: "Reconectar com o Merecimento",
      desc: "Sinta-se verdadeiramente digno(a) de receber, acolher e desfrutar do melhor que o universo oferece.",
      icon: Heart,
      badge: "Cura"
    },
    {
      title: "Fortalecer Espiritualidade",
      desc: "Conexão profunda com as leis universais do dar e receber, fluindo sob a proteção e guia divina.",
      icon: Compass,
      badge: "Alinhamento"
    }
  ];

  return (
    <section id="curso" className="section-padding bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-brand-moss/10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Storytelling & Methodology */}
          <div className="lg:col-span-7 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="h-px w-12 bg-brand-gold" />
              <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-[10px]">A Jornada de Transformação</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-7xl font-serif text-white tracking-tight leading-tight text-balance"
            >
              Quebrando Votos de Pobreza em 21 Dias
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-white/70 font-light leading-relaxed text-base md:text-lg text-balance"
            >
              <p>
                O método <span className="text-white font-medium">“Quebrando Votos de Pobreza em 21 Dias”</span> foi criado para ajudar você a identificar e liberar padrões energéticos de escassez que bloqueiam o fluxo da prosperidade, da abundância e da realização pessoal.
              </p>
              <p>
                Durante essa jornada, você será conduzido(a) por um processo profundo de limpeza e transformação, rompendo <span className="text-brand-gold font-medium">laços energéticos negativos</span> ligados a crenças familiares, votos conscientes ou inconscientes, pactos, juras, culpas, medos, sentimentos de vingança e bloqueios emocionais.
              </p>
              <p>
                Muitas dessas marcas podem ser transmitidas por gerações e, sem percebermos, acabam influenciando nossa vida financeira, emocional, espiritual e nossos relacionamentos.
              </p>
              <p>
                Ao longo de 21 dias, você fortalecerá sua energia, despertará uma nova consciência sobre o merecimento e abrirá espaço para viver com mais leveza, equilíbrio, prosperidade e expansão.
              </p>
              <p className="border-l-2 border-brand-gold/40 pl-4 py-1 text-white/85 font-medium italic">
                “Cortar laços com a pobreza e o não merecimento é modificar de uma vez por todas a sua assinatura energética, liberando o fluxo da riqueza em sua vida.”
              </p>
              <p className="font-medium text-brand-gold text-lg">
                Permita-se viver uma nova realidade.
              </p>
            </motion.div>

            {/* Benefit Tags list styled nicely */}
            <div className="space-y-8 pt-6">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-brand-gold font-bold font-mono">Incluso no Método</span>
                <h3 className="text-2xl font-serif text-white font-medium tracking-tight">O que você vai conquistar:</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {benefitsData.map((benefit, i) => {
                  const IconComponent = benefit.icon;
                  return (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.6 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="relative overflow-hidden p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.06] hover:shadow-[0_20px_40px_rgba(201,154,36,0.08)] transition-all duration-500 group flex flex-col justify-between gap-4 cursor-default"
                    >
                      {/* Ambient background glow inside each card */}
                      <div className="absolute -right-8 -bottom-8 w-20 h-20 bg-brand-gold/5 rounded-full blur-xl group-hover:bg-brand-gold/10 transition-all duration-700 pointer-events-none" />
                      
                      <div className="space-y-3.5 relative z-10">
                        <div className="flex items-center justify-between">
                          <div className="w-11 h-11 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-dark group-hover:rotate-6 transition-all duration-500 shadow-[0_0_15px_rgba(201,154,36,0.1)] overflow-visible">
                            <Pendulum size={24} className="shrink-0 text-current" />
                          </div>
                          <span className="text-[9px] uppercase font-mono tracking-widest px-2.5 py-1 rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/20">
                            {benefit.badge}
                          </span>
                        </div>
                        
                        <h4 className="text-base font-serif font-medium text-white group-hover:text-brand-gold transition-colors duration-300">
                          {benefit.title}
                        </h4>
                        
                        <p className="text-xs text-white/55 font-light leading-relaxed group-hover:text-white/75 transition-colors duration-300">
                          {benefit.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Premium CTA glassmorphic package card */}
            <div className="glass-card p-8 md:p-10 rounded-[2rem] border-brand-gold/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none">
                <Compass size={120} />
              </div>
              <p className="text-brand-offwhite/80 leading-relaxed italic text-lg mb-8 relative z-10">
                "Este processo vai além da mente: é uma limpeza profunda no seu DNA espiritual, rompendo pactos, padrões e energias que já não pertencem à sua história."
              </p>
              <a href={LINKS.course} target="_blank" rel="noopener noreferrer" className="btn-primary w-full shadow-2xl relative z-10">
                Garantir meu processo agora
              </a>
            </div>
          </div>

          {/* Right Column: Sticky Capa Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex justify-center w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-sm group transition-all duration-700 perspective-[2000px]"
            >
              {/* Golden dynamic backglow on hover */}
              <div className="absolute -inset-4 bg-brand-gold/15 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />
              
              {/* Perfectly square, rounded, high-end frame without overlay text */}
              <div className="relative z-10 aspect-square w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] bg-brand-black transition-all duration-500 group-hover:scale-105 group-hover:border-brand-gold/30">
                <img 
                  src={IMAGES.course} 
                  alt="Curso Quebrando Votos de Pobreza em 21 Dias" 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

const ForWho = () => {
  const points = [
    "Você sente que trabalha muito, mas o dinheiro não flui como deveria",
    "Percebe padrões repetidos de escassez e dificuldade nos seus relacionamentos familiares",
    "Tem dificuldade crônica em se sentir merecedora de verdadeira riqueza",
    "Sente culpa profunda ao receber, cobrar por seu talento ou prosperar",
    "Busca uma cura vibracional profunda, além de técnicas puramente racionais",
    "Deseja transformar definitivamente sua relação com a riqueza divina"
  ];

  return (
    <section className="section-padding bg-brand-offwhite relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-serif mb-6 text-brand-dark"
          >
            Essa jornada é <span className="italic text-brand-gold">para você</span> que...
          </motion.h2>
          <div className="w-24 h-1 bg-brand-gold/40 mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="flex flex-col gap-6 p-10 bg-white rounded-[2.5rem] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-brand-dark/5 transition-all duration-500 hover:shadow-[0_20px_50px_-12px_rgba(201,154,36,0.15)] group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-gold/5 flex items-center justify-center shrink-0 group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-500">
                <CheckCircle2 className="text-brand-gold group-hover:text-brand-dark" size={28} />
              </div>
              <p className="text-brand-dark/80 font-medium text-lg leading-relaxed">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoCard = ({ video, onPlay }: { 
  video: { id: string; title: string; category: string; description: string }; 
  onPlay: (id: string) => void 
}) => {
  const [thumbUrl, setThumbUrl] = useState(`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative cursor-pointer bg-brand-dark/40 border border-brand-gold/15 hover:border-brand-gold/40 rounded-[2rem] overflow-hidden transition-all duration-500 flex flex-col h-full shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
      onClick={() => onPlay(video.id)}
    >
      {/* Thumbnail container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-dark select-none">
        <img
          src={thumbUrl}
          alt={video.title}
          onError={() => setThumbUrl(`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Play Overlay */}
        <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-black/25 transition-colors duration-500 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-16 h-16 md:w-20 md:h-20 bg-brand-gold text-brand-dark rounded-full flex items-center justify-center shadow-[0_10px_35px_rgba(201,154,36,0.3)] transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(201,154,36,0.6)]"
          >
            <Play size={28} className="fill-brand-dark ml-1 md:w-8 md:h-8" />
          </motion.div>
        </div>
      </div>
      
      {/* Video text content */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
        <div className="space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold/95 font-mono mb-2 block">{video.category}</span>
          <h4 className="text-xl md:text-2xl font-serif text-white font-medium leading-snug group-hover:text-brand-gold transition-colors duration-300">
            {video.title}
          </h4>
        </div>
        <p className="text-white/50 text-sm font-light mt-4 line-clamp-3 leading-relaxed">
          {video.description}
        </p>
      </div>
    </motion.div>
  );
};

const Journey = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const videos = [
    {
      id: "8oMLGe-iECY",
      title: "A escassez que você vive pode não ser falta de sorte ou castigo, e sim o passado pesando sobre você",
      category: "Jornada de 21 Dias",
      description: "Cris Rossi partilha ensinamentos e insights sobre a quebra vibracional de crenças históricas e a sintonização do amor e abundância divina em seu próprio ambiente doméstico."
    },
    {
      id: "gezcoICe4sg",
      title: "Gotas de Orvalho — 1 hora de limpeza de memórias",
      category: "Alinhamento Vibracional",
      description: "Um mergulho essencial de Cris Rossi ensinando como os pactos, crenças inconscientes e as falsas juras de escassez sabotam silenciosamente a atração de novos clientes e recursos."
    },
    {
      id: "E3fzzFTyk1g",
      title: "Quebrando votos de pobreza em 21 dias — Depoimento Benjamin Lima",
      category: "Relato de Aluno",
      description: "O emocionante depoimento de Benjamin Lima sobre o corte radical dos bloqueios ancestrais de escassez e o resgate consciente da permissão interna para expandir e prosperar."
    },
    {
      id: "UdKoCqRsjoo",
      title: "Quebrando votos de pobreza em 21 dias — Depoimento Viviane Santos",
      category: "Relato de Aluna",
      description: "Viviane Santos detalha as realizações, insights inovadores e o despertar duradouro do merecimento financeiro após vivenciar as meditações e técnicas guiadas da Cris Rossi."
    }
  ];

  return (
    <section id="jornada" className="section-padding bg-brand-dark text-white relative overflow-hidden">
      {/* Lights & Glow Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-moss/10 blur-[130px] rounded-full animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-6">
        <div className="text-center mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-brand-gold/8 border border-brand-gold/20 text-brand-gold text-[10px] font-bold tracking-[0.25em] uppercase mb-6"
          >
            <Star size={12} className="fill-brand-gold animate-pulse" />
            Depoimentos de Sucesso
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-7xl mb-6 font-serif tracking-tight leading-tight text-white"
          >
            Vidas <span className="italic text-brand-gold">Transformadas</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/60 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed text-balance"
          >
            Conheça relatos reais e aulas transformadoras de pessoas que vivenciaram o método <strong className="font-semibold text-brand-gold">Quebrando Votos de Pobreza em 21 Dias</strong> e perceberam mudanças profundas em sua jornada de libertação, consciência e prosperidade.
          </motion.p>
        </div>

        {/* Videos Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {videos.map((vid, idx) => (
            <motion.div
              key={vid.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
            >
              <VideoCard video={vid} onPlay={(id) => setActiveVideoId(id)} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {activeVideoId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8 bg-brand-black/95 backdrop-blur-md"
            onClick={() => setActiveVideoId(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden bg-brand-dark border border-brand-gold/25 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setActiveVideoId(null)}
                className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-brand-black/60 text-white hover:text-brand-gold hover:bg-brand-black/90 transition-all duration-300"
              >
                <X size={24} />
              </button>
              
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
                title="Depoimento Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};



const Connection = () => {
  const socials = [
    { 
      name: 'Instagram', 
      handle: '@habitosquecuramamente',
      badge: 'Reflexões & Sabedoria',
      description: 'Acompanhe reflexões diárias de luz, lives exclusivas de cura, stories com ensinamentos práticos e conexão com nossa comunidade.',
      actionText: 'Seguir no Instagram',
      icon: <FaInstagram size={30} />, 
      href: LINKS.instagram, 
      color: 'bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600',
      glow: 'hover:shadow-[0_20px_50px_rgba(219,39,119,0.25)]',
      borderHover: 'hover:border-pink-500/30',
      accentColor: 'text-pink-500 bg-pink-500/5 border-pink-500/10'
    },
    { 
      name: 'YouTube', 
      handle: 'Canal Cris Rossi',
      badge: 'Meditações & Aulas',
      description: 'Acesse gratuitamente meditações guiadas de alta frequência, aulas sobre quebra de pactos e vídeos explicativos do método de 21 dias.',
      actionText: 'Inscrever-se no Canal',
      icon: <FaYoutube size={30} />, 
      href: LINKS.youtube, 
      color: 'bg-red-600',
      glow: 'hover:shadow-[0_20px_50px_rgba(220,38,38,0.25)]',
      borderHover: 'hover:border-red-600/30',
      accentColor: 'text-red-600 bg-red-600/5 border-red-600/10'
    },
    { 
      name: 'WhatsApp', 
      handle: 'Fale Conosco',
      badge: 'Suporte & Atendimento',
      description: 'Tire suas dúvidas diretamente sobre a jornada com nosso time, agende consultas vibracionais e receba suporte humanizado.',
      actionText: 'Conversar no WhatsApp',
      icon: <FaWhatsapp size={30} />, 
      href: LINKS.whatsapp, 
      color: 'bg-emerald-500',
      glow: 'hover:shadow-[0_20px_50px_rgba(16,185,129,0.25)]',
      borderHover: 'hover:border-emerald-500/30',
      accentColor: 'text-emerald-600 bg-emerald-500/5 border-emerald-500/10'
    },
  ];

  return (
    <section id="contato" className="section-padding bg-gradient-to-b from-brand-offwhite via-white to-brand-offwhite/50 relative overflow-hidden">
      {/* Visual background details to match premium feel */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-brand-gold/2 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-moss/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-[10px] font-bold tracking-[0.25em] uppercase mb-5"
          >
            <Sparkles size={12} className="animate-pulse" />
            Comunidade & Luz
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif mb-6 text-brand-dark tracking-tight"
          >
            Conecte-se com <span className="italic text-brand-gold">Cris Rossi</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-dark/60 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed text-balance"
          >
            Diariamente compartilhando cura, expansão e ensinamentos profundos nas redes. Escolha a sua plataforma de preferência e venha expandir conosco.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {socials.map((social, i) => (
            <motion.a
               key={social.name}
               href={social.href}
               target="_blank"
               rel="noopener noreferrer"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: i * 0.15, ease: [0.215, 0.61, 0.355, 1] }}
               whileHover={{ y: -12 }}
               className={`group relative p-8 md:p-10 bg-white rounded-[2.5rem] border border-brand-dark/5 shadow-[0_15px_40px_rgba(0,0,0,0.02)] flex flex-col justify-between items-start text-left transition-all duration-500 ${social.borderHover} ${social.glow}`}
            >
              {/* Dynamic Accent Line at the top of the card on hover */}
              <div className={`absolute top-0 left-8 right-8 h-[3px] rounded-b-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center ${social.color}`} />

              <div className="w-full">
                {/* Header block with network badge & icon */}
                <div className="flex justify-between items-start mb-8 w-full">
                  <div className={`w-14 h-14 rounded-2xl ${social.color} text-white flex items-center justify-center shadow-lg shadow-black/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    {social.icon}
                  </div>
                  
                  <span className={`text-[10px] font-mono font-bold tracking-wider px-3.5 py-1.5 rounded-full border uppercase ${social.accentColor} transition-colors duration-500`}>
                    {social.badge}
                  </span>
                </div>

                {/* Info Block */}
                <div className="mb-8">
                  <h3 className="text-2xl font-serif font-semibold text-brand-dark mb-1 group-hover:text-brand-gold transition-colors duration-300">
                    {social.name}
                  </h3>
                  <p className="text-xs font-mono text-brand-dark/40 mb-4 font-medium">
                    {social.handle}
                  </p>
                  <p className="text-brand-dark/60 text-sm md:text-base font-light leading-relaxed">
                    {social.description}
                  </p>
                </div>
              </div>

              {/* Action Trigger Link styled like a premium button */}
              <div className="w-full pt-4 border-t border-brand-dark/5 flex justify-between items-center text-sm font-semibold text-brand-dark group-hover:text-brand-gold transition-colors duration-300">
                <span className="tracking-wide">
                  {social.actionText}
                </span>
                <div className="w-9 h-9 rounded-full bg-brand-offwhite group-hover:bg-brand-gold group-hover:text-white flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-2">
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      q: "Preciso ter experiência prévia com terapias energéticas?",
      a: "Absolutamente não. A jornada foi minuciosamente desenhada para ser acessível, guiada passo a passo por Cris Rossi, independentemente do seu nível de conhecimento."
    },
    {
      q: "Como o conteúdo é entregue? É 100% online?",
      a: "Sim. A jornada é totalmente digital. Após a inscrição, você recebe acesso imediato a uma área exclusiva de membros para assistir às aulas onde e quando quiser."
    },
    {
      q: "Quanto tempo por dia preciso dedicar à jornada?",
      a: "Recomendamos de 15 a 30 minutos diários. É um processo contínuo de 21 dias focado em consistência e mergulho interno suave, mas poderoso."
    },
    {
      q: "Posso tirar dúvidas diretamente com a equipe?",
      a: "Sim. Você terá suporte especializado via WhatsApp para garantir que sua jornada de cura transcorra com total suporte e clareza."
    }
  ];

  return (
    <section className="section-padding bg-brand-dark text-white relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-moss/20 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-7xl font-serif mb-6">Abrindo Novos <span className="italic text-brand-gold">Caminhos</span></h2>
          <div className="w-24 h-1 bg-brand-gold/30 mx-auto rounded-full" />
        </motion.div>
        
        <div className="space-y-6">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl overflow-hidden transition-all duration-500 hover:border-brand-gold/20"
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left group"
                >
                  <span className={`font-serif text-2xl pr-8 transition-colors duration-500 ${isOpen ? 'text-brand-gold' : 'text-white/80 group-hover:text-white'}`}>{faq.q}</span>
                  <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-500 ${isOpen ? 'bg-brand-gold border-brand-gold text-brand-dark rotate-180' : 'border-white/10 text-white/40'}`}>
                    <ChevronDown size={28} />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-8 pt-0 text-white/50 text-xl font-light leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-brand-dark text-white border-t border-white/5 text-center relative overflow-hidden">
      {/* Background ambient glow matching the premium design */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-gold/3 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-brand-moss/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-12">
          {/* Circular Photo of Cris with a premium golden border & hover glow effect */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-brand-gold/40 p-1 bg-brand-dark/80 shrink-0 shadow-[0_10px_35px_rgba(201,154,36,0.15)] hover:shadow-[0_15px_45px_rgba(201,154,36,0.35)] transition-all duration-500 overflow-hidden mb-5 group"
          >
            <div className="w-full h-full rounded-full overflow-hidden">
              <img 
                src={IMAGES.cris} 
                alt="Cris Rossi" 
                className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-[2s]" 
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-white mb-2">Cris Rossi</h2>
          <p className="text-brand-gold text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold font-mono">Terapeuta Vibracional</p>
        </div>
        
        {/* Styled and balanced links container */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm md:text-base text-white/70 tracking-wide font-light max-w-3xl mx-auto border-t border-b border-white/[0.06] py-6 sm:py-8 mb-12">
          <a href="#sobre" className="hover:text-brand-gold hover:translate-y-[-1px] transition-all duration-300">Sobre Mim</a>
          <span className="hidden sm:inline text-white/10">•</span>
          <a href="#curso" className="hover:text-brand-gold hover:translate-y-[-1px] transition-all duration-300">O Curso</a>
          <span className="hidden sm:inline text-white/10">•</span>
          <a href="#jornada" className="hover:text-brand-gold hover:translate-y-[-1px] transition-all duration-300">Como Funciona</a>
          <span className="hidden sm:inline text-white/10">•</span>
          <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold text-brand-gold hover:translate-y-[-1px] transition-all duration-300 underline underline-offset-4 decoration-brand-gold/30 hover:decoration-brand-gold">Dúvidas? Fale Conosco</a>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-[13px] md:text-sm pt-4">
          <p className="font-light tracking-wide font-sans">© {new Date().getFullYear()} Cris Rossi. Todos os direitos reservados.</p>
          
          {/* Highly finished social icons containers */}
          <div className="flex gap-4">
            <a 
              href={LINKS.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white/10 hover:border-brand-gold flex items-center justify-center text-white/60 hover:text-brand-gold hover:bg-brand-gold/5 transition-all duration-300 hover:shadow-[0_0_15px_rgba(201,154,36,0.15)] hover:scale-105" 
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a 
              href={LINKS.youtube} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white/10 hover:border-brand-gold flex items-center justify-center text-white/60 hover:text-brand-gold hover:bg-brand-gold/5 transition-all duration-300 hover:shadow-[0_0_15px_rgba(201,154,36,0.15)] hover:scale-105" 
              aria-label="YouTube"
            >
              <FaYoutube size={20} />
            </a>
            <a 
              href={LINKS.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white/10 hover:border-brand-gold flex items-center justify-center text-white/60 hover:text-brand-gold hover:bg-brand-gold/5 transition-all duration-300 hover:shadow-[0_0_15px_rgba(201,154,36,0.15)] hover:scale-105" 
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppSticky = () => {
  return (
    <motion.a
      href={LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0, x: 20 }}
      animate={{ scale: 1, opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex items-center gap-4 group"
    >
      <div className="absolute inset-0 bg-brand-gold rounded-full blur-[40px] opacity-10 group-hover:opacity-30 transition-opacity duration-500" />
      
      <div className="hidden md:flex flex-col items-end pointer-events-none group-hover:translate-x-0 translate-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="bg-brand-black/90 backdrop-blur-2xl border border-brand-gold/20 text-white px-6 py-4 rounded-[1.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold mb-1">Online agora</p>
          <p className="text-sm font-medium text-balance">Agende sua sessão vibracional</p>
        </div>
      </div>

      <div className="relative w-16 h-16 md:w-20 md:h-20 bg-brand-gold text-brand-dark rounded-full shadow-[0_20px_50px_rgba(201,154,36,0.3)] flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_0_70px_rgba(201,154,36,0.5)] group-hover:scale-110">
        <span className="text-[32px] md:text-[40px] flex items-center justify-center">
          <FaWhatsapp />
        </span>
        
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-white"
        />

        <div className="absolute -top-1 -right-1 w-6 h-6 md:w-7 md:h-7 bg-red-600 text-white text-[10px] md:text-xs font-black rounded-full border-[3px] border-brand-dark flex items-center justify-center shadow-lg">
          1
        </div>
      </div>
    </motion.a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-brand-offwhite noise-bg selection:bg-brand-gold selection:text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Course />
        <ForWho />
        <Journey />
        <Connection />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppSticky />
    </div>
  );
}
