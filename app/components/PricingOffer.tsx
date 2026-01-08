'use client'; // <--- Obrigatório para Framer Motion

import React from 'react';
import { motion } from 'framer-motion';
// import { Button } from '@/components/ui/button';
import { Check, Heart, Sparkles } from 'lucide-react';

interface PricingOfferProps {
  checkoutUrl: string;
}

export default function PricingOffer({ checkoutUrl }: PricingOfferProps) {
  return (
    <section id="pricing" className="relative py-24 px-4 bg-[#faf8f5] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#d4a574]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#e8b4b8]/10 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-[#d4a574] text-sm font-medium tracking-widest uppercase mb-4 block">
            Oferta Especial
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-[#2d2420] mb-4">
            Quanto vale a sua <p className="text-[#d4a574] italic">paz de espírito?</p>
          </h2>
          <div className="w-16 h-0.5 bg-[#d4a574] mx-auto" />
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#d4a574] to-[#e8b4b8] rounded-3xl blur-xl opacity-20" />
          
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#e8e4df]">
            {/* Top Banner */}
            <div className="bg-gradient-to-r from-[#2d2420] to-[#1a1614] py-4 px-6">
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 text-[#d4a574]" />
                <span className="text-[#d4a574] font-medium">Promoção de Janeiro</span>
                <Sparkles className="w-5 h-5 text-[#d4a574]" />
              </div>
            </div>

            <div className="p-8 md:p-12">
              {/* Comparison */}
              <div className="text-center mb-10">
                <p className="text-[#6b5f54] mb-6 text-lg">
                  Guias e checklists de casamentos geralmente custam, em média, 
                  <span className="font-semibold text-[#2d2420]"> R$ 49,90 a R$ 69,90</span>. 
                  Este guia, que te dá autonomia e ferramentas profissionais, custa normalmente R$ 29,90.
                </p>
                
                <p className="text-[#8a7d70] italic mb-8">
                  Mas, como queremos começar o ano realizando sonhos, preparamos uma condição especial:
                </p>

                {/* Price Display */}
                <div className="mb-8">
                  <p className="text-[#8a7d70] text-lg mb-2">
                    De: <span className="line-through text-[#a89a8c]">R$ 29,90</span>
                  </p>
                  <p className="text-[#6b5f54] text-xl mb-2">Por Apenas:</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-6xl md:text-7xl font-light text-[#2d2420]">R$</span>
                    <span className="text-7xl md:text-8xl font-light text-[#d4a574]">9</span>
                    <span className="text-4xl md:text-5xl font-light text-[#d4a574]">,90</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-3 italic">
                    (Menos que um café na padaria!)
                  </p>
                </div>

                {/* What's Included */}
                <div className="grid md:grid-cols-2 gap-4 mb-10 text-left max-w-lg mx-auto">
                  {[
                    "eBook Completo",
                    "4 Fases do Planejamento",
                    "Prompts de IA Prontos",
                    "Checklists Detalhados",
                    "Acesso Vitalício"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#d4a574]/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-[#d4a574]" />
                      </div>
                      <span className="text-[#4a423a]">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a href={checkoutUrl}>
                  <button 
                    type="button"
                    className="bg-gradient-to-r from-[#e8b4b8] to-[#d4a574] hover:from-[#dba5a9] hover:to-[#c99665] text-[#1a1614] font-semibold text-md px-10 py-7 rounded-full shadow-2xl shadow-[#e8b4b8]/20 transition-all duration-300 hover:scale-105 hover:shadow-[#e8b4b8]/30"
                  >
                    QUERO GUIA DOS SONHOS
                  </button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}