'use client'; // <--- Necessário para animações de scroll

import React from 'react';
import { motion } from 'framer-motion';
import { Check, BookOpen, Layers, Paintbrush, Cpu } from 'lucide-react';

const phases = [
  {
    icon: BookOpen,
    title: "Fase 1: O Aquecimento (Noivado)",
    description: "O checklist de ação do que pensar, comprar e fazer para celebrar sem estresse. Descubra a regra de ouro da lista de convidados para não se arrepender depois."
  },
  {
    icon: Layers,
    title: "Fase 2: A Ordem de Ouro",
    description: "Pare de perder dinheiro! Saiba exatamente a hierarquia de contratação (Níveis 1 a 4) para garantir os melhores fornecedores."
  },
  {
    icon: Paintbrush,
    title: "Fase 3: Mão na Massa Inteligente",
    description: 'Aprenda o que realmente vale a pena fazer sozinha (DIY) para economizar e o que é o "barato que sai caro".'
  },
  {
    icon: Cpu,
    title: "Fase 4: Sua Arma Secreta (IA)",
    description: "O grande diferencial. Aprenda a usar o ChatGPT, Gemini e Bing como sua assessora digital."
  }
];

export default function ProductSection() {
  return (
    <section className="relative py-24 px-4 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#d4a574] text-sm font-medium tracking-widest uppercase mb-6 block">
            A Solução
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#2d2420] mb-4">
            Guia da Jornada da Noiva
          </h2>
          <p className="text-xl text-[#d4a574] italic mb-6">
            Do "Sim" ao Altar
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4a574] to-transparent mx-auto mb-8" />
          <p className="text-gray-800 text-lg max-w-2xl mx-auto leading-relaxed">
            Este não é apenas mais um checklist chato. É a sua "melhor amiga organizada" em formato digital. 
            Um manual prático que te pega pela mão desde o aquecimento (noivado) até a maratona (o grande dia).
          </p>
        </motion.div>

        {/* Product Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4a574]/20 to-[#e8b4b8]/20 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-[#2d2420] to-[#1a1614] rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-[#d4a574]/10 to-[#e8b4b8]/10 flex items-center justify-center border border-[#d4a574]/20">
                <div className="text-center px-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#d4a574] to-[#e8b4b8] flex items-center justify-center">
                    <BookOpen className="w-10 h-10 text-[#1a1614]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-3">
                    Guia da Jornada
                  </h3>
                  <p className="text-[#d4a574] italic text-lg">da Noiva</p>
                  <div className="mt-6 w-16 h-0.5 bg-[#d4a574]/50 mx-auto" />
                  <p className="text-gray-300 text-sm mt-6">
                    eBook + Planilha Bônus
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center text-2xl font-light text-[#2d2420] mb-8"
            >
              O Que Você Vai Encontrar:
            </motion.h3>

            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#e8e4df] hover:border-[#d4a574]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4a574]/20 to-[#e8b4b8]/20 flex items-center justify-center group-hover:from-[#d4a574] group-hover:to-[#e8b4b8] transition-all duration-300">
                  <phase.icon className="w-6 h-6 text-[#d4a574] group-hover:text-[#1a1614] transition-colors" />
                </div>
                <div>
                  <h4 className="text-[#2d2420] font-medium mb-1 flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#d4a574]" />
                    {phase.title}
                  </h4>
                  <p className="text-[#6b5f54] text-sm leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}