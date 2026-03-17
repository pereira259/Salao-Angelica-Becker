/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Instagram, 
  MapPin, 
  Phone, 
  Scissors, 
  Heart, 
  Sparkles, 
  Clock,
  ChevronRight
} from 'lucide-react';

const WHATSAPP_NUMBER = "5566996078886";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio.`;
const INSTAGRAM_LINK = "https://instagram.com/salaoangelicabecker";

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col items-center justify-center ${className}`}>
    <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center mb-2 relative">
      <div className="absolute inset-1 rounded-full border border-gold/30"></div>
      <span className="font-serif text-2xl text-gold tracking-widest">AB</span>
    </div>
    <span className="font-serif text-ink text-lg tracking-widest uppercase text-center leading-tight">
      Angélica<br/>Becker
    </span>
    <span className="text-[10px] tracking-[0.2em] text-gold uppercase mt-1">Salão de Beleza</span>
  </div>
);

const Divider = () => (
  <div className="flex items-center justify-center w-full py-8">
    <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
    <div className="w-2 h-2 rounded-full bg-gold mx-2"></div>
    <div className="h-[1px] w-24 bg-gradient-to-l from-transparent via-gold to-transparent"></div>
  </div>
);

const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Agendar', href: '#agendar' },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-gold/20 selection:text-ink">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 bg-white/95 backdrop-blur-md shadow-sm ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center transition-transform group-hover:scale-105">
                <span className="font-serif text-gold text-sm tracking-widest">AB</span>
              </div>
              <span className={`font-serif tracking-widest uppercase text-sm transition-colors ${isScrolled ? 'text-ink' : 'text-ink'}`}>
                Angélica Becker
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-sm tracking-widest uppercase text-gray-dark hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gold text-white text-sm tracking-widest uppercase rounded-full hover:bg-gold-light transition-all shadow-[0_4px_14px_0_rgba(200,151,42,0.39)] hover:shadow-[0_6px_20px_rgba(200,151,42,0.23)] hover:-translate-y-0.5"
              >
                Agendar
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-ink p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-2xl text-ink hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 px-8 py-3 bg-gold text-white tracking-widest uppercase rounded-full w-full text-center"
              >
                Agendar Horário
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-cream">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <iframe
            src="https://www.youtube.com/embed/mpHjxXHgvP8?autoplay=1&mute=1&loop=1&playlist=mpHjxXHgvP8&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          {/* Overlay to ensure text is readable */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>
        </div>

        <div className="absolute inset-0 shimmer-overlay z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 border border-gold/20 rounded-full opacity-50 z-0"></div>
        <div className="absolute bottom-1/4 right-10 w-48 h-48 border border-gold/20 rounded-full opacity-50 z-0"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-ink mb-6 leading-tight"
          >
            Sua Beleza Merece o <br className="hidden md:block" />
            <span className="italic text-gold">Melhor Cuidado</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-dark max-w-2xl mx-auto mb-10 font-light"
          >
            Especialistas em Noivas e Beleza Feminina — +15 anos de experiência em Sinop, MT
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-white tracking-widest uppercase rounded-full hover:bg-gold-light transition-all shadow-[0_8px_30px_rgb(200,151,42,0.3)] hover:shadow-[0_8px_30px_rgb(200,151,42,0.5)] hover:-translate-y-1"
            >
              Agendar Horário
            </a>
          </motion.div>
        </div>
      </section>

      <Divider />

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-4">Nossos Serviços</h2>
            <p className="text-gray-dark max-w-2xl mx-auto">Experiência premium para realçar sua beleza natural.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Dia da Noiva', desc: 'Produção completa e exclusiva para o seu grande dia.', icon: Heart },
              { title: 'Mechas & Cor', desc: 'Técnicas avançadas para iluminação e coloração perfeita.', icon: Sparkles },
              { title: 'Corte', desc: 'Visagismo e cortes modernos que valorizam seu rosto.', icon: Scissors },
              { title: 'Penteados', desc: 'Penteados clássicos e despojados para qualquer evento.', icon: Sparkles },
              { title: 'Makeup', desc: 'Maquiagem profissional com produtos de alta durabilidade.', icon: Sparkles },
              { title: 'Manicure & Pedicure', desc: 'Cuidado completo com unhas, spa dos pés e mãos.', icon: Sparkles },
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gold/20 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(200,151,42,0.1)] transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                  <service.icon className="text-gold" size={24} />
                </div>
                <h3 className="text-xl font-serif text-ink mb-3">{service.title}</h3>
                <p className="text-gray-dark text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight/Stats Section */}
      <section className="py-20 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 shimmer-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gold/30">
            <div className="p-8">
              <div className="text-5xl md:text-6xl font-serif text-gold mb-4">+15</div>
              <div className="text-xl font-serif text-ink uppercase tracking-widest">Anos de Tradição</div>
              <p className="mt-4 text-gray-dark">No ramo da beleza em Sinop</p>
            </div>
            <div className="p-8">
              <div className="text-5xl md:text-6xl font-serif text-gold mb-4">+600</div>
              <div className="text-xl font-serif text-ink uppercase tracking-widest">Noivas Realizadas</div>
              <p className="mt-4 text-gray-dark">Sonhos transformados em realidade</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[4/5] rounded-t-full overflow-hidden border-4 border-cream relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop" 
                  alt="Salão Interior" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative background shape */}
              <div className="absolute -bottom-6 -right-6 w-full h-full rounded-t-full border border-gold/30 z-0"></div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <h2 className="text-sm tracking-[0.3em] uppercase text-gold mb-4">Nossa História</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-ink mb-6 leading-tight">
                A Arte de Revelar <br/><span className="italic">Sua Melhor Versão</span>
              </h3>
              <p className="text-gray-dark mb-6 leading-relaxed">
                O Salão de Beleza Angélica Becker nasceu da paixão por transformar e elevar a autoestima feminina. Com mais de 15 anos de dedicação exclusiva à beleza em Sinop, construímos um espaço onde o luxo encontra o conforto.
              </p>
              <p className="text-gray-dark mb-8 leading-relaxed">
                Nossa especialidade em noivas nos permitiu fazer parte de mais de 600 histórias de amor, cuidando de cada detalhe para que o grande dia seja impecável. Nossa equipe está em constante atualização para oferecer as melhores técnicas em mechas, cortes e produções.
              </p>
              
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold font-serif text-lg hover:text-gold-light transition-colors group"
              >
                Conheça nosso espaço 
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-4">Inspirações</h2>
            <p className="text-gray-dark max-w-2xl mx-auto">Um pouco do nosso trabalho e dedicação.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?q=80&w=1000&auto=format&fit=crop" alt="Noiva" className="w-full aspect-square object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop" alt="Mechas" className="w-full aspect-square object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1516975080661-422fc2bc928d?q=80&w=1000&auto=format&fit=crop" alt="Maquiagem" className="w-full aspect-square object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format&fit=crop" alt="Penteado" className="w-full aspect-square object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer" referrerPolicy="no-referrer" />
          </div>
          
          <div className="mt-12 text-center">
             <a 
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold tracking-widest uppercase text-sm rounded-full hover:bg-gold hover:text-white transition-all"
              >
                <Instagram size={18} />
                Ver mais no Instagram
              </a>
          </div>
        </div>
      </section>

      {/* Agendar Section */}
      <section id="agendar" className="py-24 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 shimmer-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm tracking-[0.3em] uppercase text-gold mb-4">Reserve seu momento</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-ink mb-6 leading-tight">
              Pronta para realçar <br/><span className="italic">sua beleza?</span>
            </h3>
            <p className="text-gray-dark max-w-2xl mx-auto">
              Agende seu horário preenchendo o formulário abaixo ou fale diretamente conosco pelo WhatsApp.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div className="w-full lg:w-3/5">
              <form 
                action="https://formspree.io/f/your_form_id" 
                method="POST"
                className="bg-white p-8 md:p-10 rounded-2xl border border-gold/20 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="font-serif text-ink mb-2">Nome completo *</label>
                    <input type="text" id="name" name="name" required className="border-0 border-b border-gold/30 focus:border-gold focus:ring-0 bg-transparent px-0 py-2 outline-none transition-colors text-gray-dark" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="font-serif text-ink mb-2">WhatsApp / Telefone *</label>
                    <input type="tel" id="phone" name="phone" required className="border-0 border-b border-gold/30 focus:border-gold focus:ring-0 bg-transparent px-0 py-2 outline-none transition-colors text-gray-dark" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="flex flex-col">
                    <label htmlFor="email" className="font-serif text-ink mb-2">E-mail *</label>
                    <input type="email" id="email" name="email" required className="border-0 border-b border-gold/30 focus:border-gold focus:ring-0 bg-transparent px-0 py-2 outline-none transition-colors text-gray-dark" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="service" className="font-serif text-ink mb-2">Serviço *</label>
                    <select id="service" name="service" required defaultValue="" className="border-0 border-b border-gold/30 focus:border-gold focus:ring-0 bg-transparent px-0 py-2 outline-none transition-colors text-gray-dark appearance-none">
                      <option value="" disabled>Selecione um serviço</option>
                      <option value="Noiva">Noiva</option>
                      <option value="Mecha">Mecha</option>
                      <option value="Corte">Corte</option>
                      <option value="Coloração">Coloração</option>
                      <option value="Penteado">Penteado</option>
                      <option value="Makeup">Makeup</option>
                      <option value="Manicure/Pedicure">Manicure/Pedicure</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="flex flex-col">
                    <label htmlFor="date" className="font-serif text-ink mb-2">Data preferida *</label>
                    <input type="date" id="date" name="date" required className="border-0 border-b border-gold/30 focus:border-gold focus:ring-0 bg-transparent px-0 py-2 outline-none transition-colors text-gray-dark" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="time" className="font-serif text-ink mb-2">Horário preferido *</label>
                    <input type="time" id="time" name="time" required className="border-0 border-b border-gold/30 focus:border-gold focus:ring-0 bg-transparent px-0 py-2 outline-none transition-colors text-gray-dark" />
                  </div>
                </div>

                <div className="flex flex-col mb-10">
                  <label htmlFor="message" className="font-serif text-ink mb-2">Mensagem adicional (opcional)</label>
                  <textarea id="message" name="message" rows={3} className="border-0 border-b border-gold/30 focus:border-gold focus:ring-0 bg-transparent px-0 py-2 outline-none transition-colors text-gray-dark resize-none"></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-gold text-white tracking-widest uppercase text-sm rounded-full hover:bg-gold-light transition-all shadow-[0_8px_30px_rgb(200,151,42,0.3)] hover:shadow-[0_8px_30px_rgb(200,151,42,0.5)] hover:-translate-y-1">
                  Solicitar Agendamento
                </button>
              </form>
            </div>

            {/* Direct Contact */}
            <div className="w-full lg:w-2/5 flex flex-col justify-center">
              <div className="bg-white p-10 rounded-2xl border border-gold/20 shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-center h-full flex flex-col justify-center">
                <div className="w-20 h-20 rounded-full bg-cream flex items-center justify-center mx-auto mb-8">
                  <WhatsAppIcon size={36} className="text-gold" />
                </div>
                <h4 className="font-serif text-3xl text-ink mb-4">Atendimento Rápido</h4>
                <p className="text-gray-dark mb-10 text-lg">
                  Prefere falar diretamente conosco? Clique no botão abaixo para ser atendida via WhatsApp.
                </p>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-ink text-white tracking-widest uppercase text-sm rounded-full hover:bg-gray-900 transition-all shadow-lg hover:-translate-y-1 w-full"
                >
                  <WhatsAppIcon size={20} />
                  Agendar pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            
            <div className="flex flex-col items-center md:items-start">
              <Logo className="mb-6" />
              <p className="text-gray-dark text-sm text-center md:text-left max-w-xs">
                Sua beleza merece o melhor cuidado. Especialistas em noivas e beleza feminina em Sinop, MT.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-serif text-xl text-ink mb-6">Contato</h4>
              <div className="space-y-4">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-dark hover:text-gold transition-colors">
                  <Phone size={18} className="text-gold" />
                  <span>(66) 99607-8886</span>
                </a>
                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-dark hover:text-gold transition-colors">
                  <Instagram size={18} className="text-gold" />
                  <span>@salaoangelicabecker</span>
                </a>
                <div className="flex items-start gap-3 text-gray-dark">
                  <MapPin size={18} className="text-gold shrink-0 mt-1" />
                  <span>Sinop, MT<br/>Brasil</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-serif text-xl text-ink mb-6">Horário</h4>
              <div className="space-y-4 text-gray-dark">
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-gold" />
                  <span>Terça a Sábado</span>
                </div>
                <p className="pl-8">08:00 - 19:00</p>
                <p className="pl-8 text-sm italic mt-4">* Atendimentos de noivas possuem horários flexíveis.</p>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-gold/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-dark">
              © {new Date().getFullYear()} Salão de Beleza Angélica Becker. Todos os direitos reservados.
            </p>
            <p className="text-xs text-gray-dark/60">
              Desenvolvido com excelência.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-gold text-white rounded-full shadow-[0_4px_20px_rgba(200,151,42,0.4)] hover:bg-gold-light transition-all hover:scale-110 animate-gold-pulse group"
        aria-label="Agendar pelo WhatsApp"
      >
        <WhatsAppIcon size={28} />
        <span className="absolute right-16 bg-white text-ink text-sm font-medium py-2 px-4 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-gold/20">
          Agendar pelo WhatsApp
        </span>
      </a>
    </div>
  );
}
