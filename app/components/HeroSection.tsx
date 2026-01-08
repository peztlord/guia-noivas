'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

interface HeroSectionProps {
  checkoutUrl: string;
}

export default function HeroSection({ checkoutUrl }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1614] via-[#2d2420] to-[#1a1614]" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4a574]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#e8b4b8]/10 rounded-full blur-3xl" />
      
      {/* Floating hearts */}
      <motion.div
        className="absolute top-1/4 left-[15%] text-[#d4a574]/30"
        animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart className="w-8 h-8 fill-current" />
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-[20%] text-[#e8b4b8]/20"
        animate={{ y: [10, -10, 10], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart className="w-6 h-6 fill-current" />
      </motion.div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4a574]/20 border border-[#d4a574]/30 mb-8"
        >
          <Sparkles className="w-4 h-4 text-[#d4a574]" />
          <span className="text-sm text-[#d4a574] font-medium tracking-wide">
            Promoção Exclusiva de Janeiro
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6"
        >
          <span className="text-white">Organize seu </span>
          <span className="text-[#d4a574] font-normal italic">Casamento dos Sonhos</span>
          <br />
          <span className="text-white">sem Surtar</span>
        </motion.h1>

        {/* Subheadline */}
        {/* <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-md md:text-xl text-[#a89a8c] max-w-3xl mx-auto mb-4 leading-relaxed font-light"
        >
          (e com uma Assessora de Graça disponível 24h)
        </motion.p> */}

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Descubra o método inédito que une o passo a passo tradicional à 
          <span className="text-[#e8b4b8]"> Inteligência Artificial </span> 
          para você economizar tempo, dinheiro e sanidade. Do "Sim" ao altar, sem virar uma "Bridezilla".
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <a href={checkoutUrl}>
            <button 
              type="button"
              className="bg-gradient-to-r from-[#e8b4b8] to-[#d4a574] hover:from-[#dba5a9] hover:to-[#c99665] text-[#1a1614] font-semibold text-md px-10 py-7 rounded-full shadow-2xl shadow-[#e8b4b8]/20 transition-all duration-300 hover:scale-105 hover:shadow-[#e8b4b8]/30"
            >
              QUERO GUIA DOS SONHOS
            </button>
          </a>
          <p className="text-sm text-gray-300 mt-4">
            Promoção Exclusiva de Janeiro
          </p>
        </motion.div>

        {/* Trust indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 mb-6 flex items-center justify-center gap-8 text-[#d4a574]"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#d4a574]" />
            <span className="text-sm">Acesso Imediato</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#e8b4b8]" />
            <span className="text-sm">Garantia de 7 dias</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#d4a574]" />
            <span className="text-sm">+ Bônus Exclusivo</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-[#d4a574]/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-[#d4a574]/50" />
        </div>
      </motion.div>
    </section>
  );
}