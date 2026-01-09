'use client'; // <--- Obrigatório para Framer Motion

import React from 'react';
import { motion } from 'framer-motion';
// import { Button } from '@/components/ui/button';
import { Heart, Sparkles, Gift } from 'lucide-react';

interface FooterCTAProps {
  checkoutUrl: string;
}

export default function FooterCTA({ checkoutUrl }: FooterCTAProps) {
  return (
    <footer
      className="relative py-24 px-4 overflow-hidden bg-cover bg-no-repeat bg-center"
      style={{
            backgroundBlendMode: 'darken',
            backgroundColor: 'rgb(0,0,0,0.8)',
            backgroundImage: 'url(https://i.pinimg.com/originals/90/7e/fd/907efd6fb061c56e7b6e18ef823da2f4.jpg)',
      }}
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4a574]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-[#e8b4b8]/5 rounded-full blur-3xl" />
      
      {/* Floating hearts */}
      <motion.div
        className="absolute top-20 left-[10%] text-[#d4a574]/20"
        animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart className="w-6 h-6 fill-current" />
      </motion.div>
      <motion.div
        className="absolute top-40 right-[15%] text-[#e8b4b8]/20"
        animate={{ y: [10, -10, 10], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart className="w-8 h-8 fill-current" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-[20%] text-[#d4a574]/15"
        animate={{ y: [-5, 15, -5], rotate: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart className="w-5 h-5 fill-current" />
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4a574]/10 border border-[#d4a574]/20 mb-8">
            <Sparkles className="w-4 h-4 text-[#d4a574]" />
            <span className="text-sm text-[#d4a574]">Última Chamada</span>
            <Sparkles className="w-4 h-4 text-[#d4a574]" />
          </div>

          {/* Main Message */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-relaxed mb-8">
            O casamento é a celebração do <span className="text-[#e8b4b8] italic">amor</span>, 
            <br className="hidden md:block" />
            não um concurso de perfeição.
          </h2>

          <p className="text-xl text-[#a89a8c] mb-12 max-w-2xl mx-auto">
            Comece sua jornada <span className="text-[#d4a574]">leve</span> hoje mesmo.
          </p>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <a href={checkoutUrl}>
              <button
                type="button"
                className="
                  bg-gradient-to-r from-yellow-700/80 via-amber-200/70 to-yellow-700/80 
                  hover:from-yellow-800 hover:via-amber-300 hover:to-yellow-800 text-white
                  font-bold text-md px-4 py-3 rounded-xl shadow-2xl drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]
                  shadow-[#e8b4b8]/20 transition-all duration-300 hover:scale-105 hover:shadow-[#e8b4b8]/30"
              >
                QUERO GUIA DOS SONHOS
              </button>
            </a>
            
            <p className="text-gray-300 text-sm mt-6">
              Acesso imediato • Garantia de 7 dias • Pagamento 100% seguro
            </p>
          </motion.div>

          {/* Divider */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4a574]/30 to-transparent mx-auto mb-8" />

          {/* Footer Info */}
          <div className="text-gray-400 text-sm">
            <p className="mb-2">
              © {new Date().getFullYear()} Guia da Jornada da Noiva. Todos os direitos reservados.
            </p>
            <p className="flex items-center justify-center gap-2">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-[#e8b4b8] fill-current" />
              <span>para noivas que merecem paz</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}