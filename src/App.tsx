/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  Youtube, 
  MessageCircle, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight,
  Menu,
  X,
  Compass,
  Zap,
  Star,
  Users,
  Calendar,
  Lock
} from 'lucide-react';

const LINKS = {
  course: "https://habitosquecuram.hotmart.host/quebrando-votos-de-pobreza-em-21-dias",
  instagram: "https://www.instagram.com/habitosquecuramamente",
  youtube: "https://youtu.be/8oMLGe-iECY?si=K2q4T8lsEm6KEwzO",
  whatsapp: "https://wa.me/5519983399818?text=Olá%20Cris!%20Gostaria%20de%20agendar%20uma%20consulta%20vibracional%20e%20saber%20mais%20sobre%20o%20seu%20atendimento."
};

const IMAGES = {
  cris: "https://i.postimg.cc/vDFdP2Vn/Chat-GPT-Image-14-de-mai-de-2026-16-41-07.png",
  course: "https://i.postimg.cc/Df5jBMqP/Chat-GPT-Image-14-de-mai-de-2026-16-47-33.png",
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-dark/80 backdrop-blur-2xl py-4 border-b border-white/10' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group"
        >
          <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center transition-all duration-500 group-hover:border-brand-gold/50 group-hover:shadow-[0_0_20px_rgba(201,154,36,0.3)] overflow-hidden">
            <img src={IMAGES.cris} alt="Cris Rossi Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <span className="font-serif text-2xl font-medium text-white tracking-tight">Cris Rossi</span>
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
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-brand-gold text-[10px] font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-md"
          >
            <Star size={14} className="fill-brand-gold animate-pulse" />
            Terapeuta Vibracional
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-10 p-5 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl flex items-center gap-5 max-w-sm group hover:border-brand-gold/30 transition-all duration-500"
          >
            <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center shrink-0 border border-brand-gold/20 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(201,154,36,0.1)]">
              <MessageCircle size={24} className="text-brand-gold" />
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
            Inicie hoje uma transformação profunda através de hábitos conscientes e cura vibracional com Cris Rossi.
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
              <MessageCircle size={18} />
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
              <p className="text-[10px] uppercase tracking-[0.2em] opacity-50 font-bold">de Cura Profunda</p>
            </div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -left-12 bottom-1/4 hidden lg:block z-20"
          >
            <div className="glass-card w-16 h-16 rounded-2xl flex items-center justify-center border-brand-gold/20 shadow-2xl">
              <Zap size={24} className="text-brand-gold" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-brand-offwhite relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-dark/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="order-2 md:order-1 relative"
        >
          <div className="relative z-10 p-2 bg-white rounded-[3rem] shadow-2xl overflow-hidden group">
            <img src={IMAGES.cris} alt="Cris Rossi Terapeuta" className="rounded-[2.5rem] w-full grayscale-[10%] group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-12 flex flex-col justify-end">
               <p className="text-white text-2xl font-serif italic mb-2 tracking-tight">Cris Rossi</p>
               <p className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold">Terapeuta Vibracional</p>
            </div>
          </div>
          
          <div className="absolute -bottom-10 -right-10 z-20 hidden lg:block">
            <motion.div 
              initial={{ rotate: -5 }}
              whileInView={{ rotate: 0 }}
              className="bg-brand-dark p-10 rounded-[2.5rem] text-white shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] max-w-[280px] border border-white/10"
            >
              <p className="font-serif italic text-2xl leading-tight mb-4 text-brand-gold">
                "A cura é o retorno à sua essência."
              </p>
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-brand-gold text-brand-gold" />)}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="order-1 md:order-2"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-6 flex items-center gap-4"
          >
            <div className="h-px w-8 bg-brand-gold" />
            <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-[10px]">A Mentora</span>
          </motion.div>
          
          <h2 className="text-5xl lg:text-7xl mb-10 font-serif text-brand-dark leading-tight">
            Quem é <span className="premium-glow">Cris Rossi</span>
          </h2>
          
          <div className="space-y-8 text-brand-dark/70 text-xl leading-relaxed font-light">
            <p>
              Terapeuta vibracional dedicada a conduzir pessoas em profundos processos de cura, expansão de consciência e reconexão espiritual.
            </p>
            <p>
              Seu trabalho é um convite para liberar padrões limitantes e acessar uma vida com verdadeira leveza, clareza e prosperidade divina.
            </p>
            <p className="font-medium text-brand-dark/90 italic">
              "Sua prosperidade é um estado vibracional que aguarda sua liberação interna."
            </p>
          </div>
          
          <div className="mt-12 pt-12 border-t border-brand-dark/10 flex flex-wrap gap-12">
             <div className="flex flex-col">
               <span className="text-brand-gold text-5xl font-serif font-bold tracking-tighter">1.2k+</span>
               <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 mt-2">Alunos Transformados</span>
             </div>
             <div className="flex flex-col">
               <span className="text-brand-dark text-5xl font-serif font-bold tracking-tighter">10+</span>
               <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 mt-2">Anos de Experiência</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Course = () => {
  const benefits = [
    "Liberar crenças de escassez",
    "Romper padrões ancestrais",
    "Curar registros do dinheiro",
    "Consciência de Abundância",
    "Reconectar com o Merecimento",
    "Fortalecer Espiritualidade"
  ];

  return (
    <section id="curso" className="section-padding bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-brand-moss/10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-6 flex items-center gap-4"
          >
            <div className="h-px w-12 bg-brand-gold" />
            <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-[10px]">A Jornada de Transformação</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-7xl mb-8 font-serif"
          >
            Quebrando Votos de Pobreza em 21 Dias
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-white/50 font-light leading-relaxed"
          >
            Uma imersão profunda para quem busca curar a relação com o dinheiro, liberando memórias e votos que bloqueiam o fluxo da abundância na sua vida.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {benefits.map((benefit, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex gap-4 items-center group cursor-default"
                >
                  <div className="w-8 h-8 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shrink-0 group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-300">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-white/70 font-medium group-hover:text-white transition-colors tracking-tight">{benefit}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="glass-card p-10 rounded-[2rem] border-brand-gold/10 relative">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Compass size={80} />
              </div>
              <p className="text-brand-offwhite/80 leading-relaxed italic text-lg mb-8 relative z-10">
                "Este processo não é apenas racional, é uma limpeza profunda em nível de DNA espiritual, removendo o que não te pertence mais."
              </p>
              <a href={LINKS.course} target="_blank" rel="noopener noreferrer" className="btn-primary w-full shadow-2xl">
                Garantir meu curso agora
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center perspective-[2000px]"
          >
            <motion.div 
              whileHover={{ rotateY: 10, rotateX: -5, scale: 1.02 }}
              className="relative w-full max-w-md group transition-all duration-700"
            >
              <div className="absolute -inset-4 bg-brand-gold/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="netflix-card aspect-[1/1] border border-white/5 relative z-10">
                <img 
                  src={IMAGES.course} 
                  alt="Curso Cris Rossi" 
                  className="w-full h-full object-cover" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent p-10 flex flex-col justify-end">
                   <div className="flex items-center gap-3 mb-4">
                      <div className="px-3 py-1 bg-brand-gold text-brand-dark text-[10px] font-bold uppercase tracking-[0.2em] rounded">Original Cris Rossi</div>
                      <span className="text-xs text-white/60 font-bold">Volume 01</span>
                   </div>
                   <h4 className="text-4xl font-serif text-white mb-6 leading-tight group-hover:text-brand-gold transition-colors duration-500">Jornada da Prosperidade</h4>
                   
                   <div className="flex items-center gap-6">
                      <div className="flex -space-x-3">
                         {[1,2,3,4].map(i => (
                           <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-dark bg-brand-moss overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
                             <img src={`https://i.pravatar.cc/100?u=user${i}`} alt="User" />
                           </div>
                         ))}
                      </div>
                      <div className="h-px w-8 bg-white/20" />
                      <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold">+ de 1.2k Alunos</span>
                   </div>
                </div>
              </div>
              
              <div className="absolute top-6 left-6 z-20">
                <div className="glass-card px-4 py-2 rounded-lg text-[10px] font-bold text-white tracking-[0.2em] uppercase backdrop-blur-3xl shadow-2xl border-white/20">
                  Jornada de 21 Dias
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ForWho = () => {
  const points = [
    "Você sente que trabalha muito, mas o dinheiro não flui como deveria",
    "Percebe padrões repetidos de escassez e dificuldade na sua ancestralidade",
    "Tem dificuldade crônica em se sentir merecedora de verdadeira abundância",
    "Sente culpa profunda ao receber, cobrar por seu talento ou prosperar",
    "Busca uma cura vibracional profunda, além de técnicas puramente racionais",
    "Deseja transformar permanentemente sua relação com a abundância divina"
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
            Essa jornada é <span className="italic text-brand-gold">para você</span> se…
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

const Journey = () => {
  const steps = [
    {
      title: "Consciência",
      desc: "Identificação cirúrgica dos padrões, votos e crenças que atuam no seu campo.",
      icon: <Compass size={32} />
    },
    {
      title: "Liberação",
      desc: "Práticas vibracionais para limpar registros ancestrais e dívidas energéticas.",
      icon: <Zap size={32} />
    },
    {
      title: "Reprogramação",
      desc: "Ancoragem da nova frequência de merecimento e fluxo constante de abundância.",
      icon: <Star size={32} />
    }
  ];

  return (
    <section id="jornada" className="section-padding bg-brand-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-8xl mb-8 font-serif tracking-tight"
          >
            A Trilha da <span className="italic text-brand-gold">Transformação</span>
          </motion.h2>
          <p className="text-white/40 max-w-2xl mx-auto uppercase tracking-[0.4em] text-[10px] font-bold">Os três portais da sua libertação</p>
        </div>

        <div className="grid md:grid-cols-3 gap-16 relative">
          {/* Connector Line */}
          <div className="absolute top-[120px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent hidden md:block" />
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative z-10 text-center group"
            >
              <div className="relative mb-12 flex justify-center">
                <div className="w-32 h-32 rounded-full border border-brand-gold/20 bg-brand-dark flex items-center justify-center text-brand-gold shadow-[0_0_50px_rgba(201,154,36,0.1)] transition-all duration-700 group-hover:scale-110 group-hover:border-brand-gold group-hover:shadow-[0_0_80px_rgba(201,154,36,0.3)]">
                  {step.icon}
                </div>
                {/* Number Badge */}
                <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-brand-gold text-brand-dark font-serif font-bold flex items-center justify-center text-xl shadow-xl transition-all duration-500 group-hover:scale-110">
                  {index + 1}
                </div>
              </div>
              
              <div className="glass-card p-10 rounded-[2.5rem] border-white/5 group-hover:border-brand-gold/20 transition-all duration-700">
                <h3 className="text-3xl font-serif font-medium text-white mb-6 tracking-tight group-hover:text-brand-gold transition-colors">{step.title}</h3>
                <div className="w-12 h-1 bg-brand-gold/30 mx-auto mb-6 transition-all duration-500 group-hover:w-24 group-hover:bg-brand-gold" />
                <p className="text-white/50 leading-relaxed text-lg font-light group-hover:text-white/80 transition-colors">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EmotionalCall = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 bg-brand-dark overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src={IMAGES.spiritual} alt="Abundância" className="w-full h-full object-cover blur-sm" />
      </div>
      <div className="absolute inset-0 bg-brand-dark/80" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="p-12 md:p-20 rounded-[3rem] border border-white/10 bg-black/30 backdrop-blur-sm"
        >
          <h2 className="text-4xl lg:text-6xl font-serif mb-8 leading-tight">
            A prosperidade também começa na sua <span className="text-brand-gold italic">energia</span>.
          </h2>
          <p className="text-xl text-white/70 mb-12 font-light leading-relaxed">
            Muitas vezes, a escassez não está apenas nas escolhas financeiras, mas em padrões profundos carregados pela história familiar, pelas crenças e pelos registros energéticos. Essa jornada foi criada para quem está pronta para olhar para isso com amor e transformar.
          </p>
          <a href={LINKS.course} target="_blank" rel="noopener noreferrer" className="btn-primary text-xl px-12">
            Quero quebrar votos de pobreza
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Connection = () => {
  const socials = [
    { name: 'Instagram', icon: <Instagram size={28} />, href: LINKS.instagram, color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500' },
    { name: 'YouTube', icon: <Youtube size={28} />, href: LINKS.youtube, color: 'bg-red-600' },
    { name: 'WhatsApp', icon: <MessageCircle size={28} />, href: LINKS.whatsapp, color: 'bg-green-500' },
  ];

  return (
    <section id="contato" className="section-padding bg-brand-offwhite">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4">Conecte-se com Cris Rossi</h2>
          <p className="text-brand-dark/50">Diariamente compartilhando cura e expansão</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {socials.map((social, i) => (
            <motion.a
               key={i}
               href={social.href}
               target="_blank"
               rel="noopener noreferrer"
               whileHover={{ y: -10 }}
               className="group p-8 bg-white rounded-3xl shadow-xl flex flex-col items-center text-center border border-brand-dark/5"
            >
              <div className={`w-16 h-16 rounded-2xl ${social.color} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                {social.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">{social.name}</h3>
              <p className="text-brand-dark/40 mb-6 text-sm">Acesse conteúdos gratuitos e acompanhe nossa jornada.</p>
              <span className="text-brand-gold font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                Seguir Agora <ArrowRight size={18} />
              </span>
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
          <h2 className="text-5xl lg:text-7xl font-serif mb-6">Clarificando <span className="italic text-brand-gold">Caminhos</span></h2>
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
    <footer className="py-12 px-6 bg-brand-dark text-white border-t border-white/5 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6 mb-12">
          <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mb-2">
            <span className="text-brand-dark font-serif font-bold text-2xl">CR</span>
          </div>
          <h2 className="font-serif text-3xl">Cris Rossi</h2>
          <p className="text-white/40 uppercase tracking-widest text-xs">Terapeuta Vibracional</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 mb-12 text-sm text-white/60">
           <a href="#sobre" className="hover:text-brand-gold transition-colors">Sobre Mim</a>
           <a href="#curso" className="hover:text-brand-gold transition-colors">O Curso</a>
           <a href="#jornada" className="hover:text-brand-gold transition-colors">Como Funciona</a>
           <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors text-brand-gold underline underline-offset-4">Dúvidas? Fale Conosco</a>
        </div>
        
        <div className="h-px bg-white/5 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-sm">
          <p>© {new Date().getFullYear()} Cris Rossi. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href={LINKS.instagram}><Instagram size={18} /></a>
            <a href={LINKS.youtube}><Youtube size={18} /></a>
            <a href={LINKS.whatsapp}><MessageCircle size={18} /></a>
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
        <MessageCircle size={32} className="md:w-9 md:h-9" strokeWidth={1.5} />
        
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

const FinalCTA = () => {
  return (
    <section className="section-padding bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-gold/5 blur-[150px] rounded-full" />
      </div>
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="flex justify-center opacity-30">
            <Compass size={64} className="text-brand-gold animate-spin-slow" />
          </div>
          
          <h2 className="text-5xl lg:text-8xl font-serif text-white tracking-tighter text-balance">
            Pronta para sua nova <span className="italic text-brand-gold">frequência</span>?
          </h2>
          
          <p className="text-2xl text-white/50 font-light max-w-2xl mx-auto leading-relaxed">
            Abra espaço para a abundância que já é sua. A jornada de 21 dias é o portal para essa transformação.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <a href={LINKS.course} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-16 group">
               Entrar na jornada agora
               <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-500" />
            </a>
            <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-16 group shadow-[0_20px_50px_rgba(201,154,36,0.4)]">
               <MessageCircle size={24} />
               Falar no WhatsApp
            </a>
          </div>
          
          <div className="pt-12 text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold">
            Garantia de satisfação espiritual & profissional
          </div>
        </motion.div>
      </div>
    </section>
  )
}

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
        <EmotionalCall />
        <Connection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppSticky />
    </div>
  );
}
