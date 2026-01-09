'use client'; // <--- Necessário para animações de scroll

import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, PenTool, Palette, Scale, Sparkles } from 'lucide-react';

const aiFeatures = [
  {
    icon: Calculator,
    emoji: "🍲",
    title: "Calcular Bebida e Comida",
    description: "Nunca mais erre no churrasco ou na festa."
  },
  {
    icon: PenTool,
    emoji: "✍️",
    title: "Escrever Votos Emocionantes",
    description: "Travou? A IA escreve rascunhos lindos para você."
  },
  {
    icon: Palette,
    emoji: "🎨",
    title: "Visualizar a Decoração",
    description: "Crie imagens da sua mesa de bolo antes mesmo de contratar o decorador."
  },
  {
    icon: Scale,
    emoji: "⚖️",
    title: "Advogado de Bolso",
    description: "Use prompts prontos para analisar contratos e fugir de pegadinhas de fornecedores."
  }
];

export default function AIFeatures() {
  return (
    <section
      className="relative py-24 px-4 overflow-hidden bg-cover bg-no-repeat"
      style={{
            backgroundBlendMode: 'darken',
            backgroundColor: 'rgb(0,0,0,0.8)',
            backgroundImage: 'url(https://i.pinimg.com/originals/4b/f9/c8/4bf9c83cc144158f4cb885cf78afff19.jpg)',
      }}
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4a574]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#e8b4b8]/5 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4a574]/10 border border-[#d4a574]/20 mb-6">
            <Sparkles className="w-4 h-4 text-[#d4a574]" />
            <span className="text-sm text-[#d4a574]">O Grande Diferencial</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            "Por que este guia é <span className="text-[#d4a574] italic">diferente?</span> 
          </h2>
          
          <p className="text-[#a89a8c] text-lg max-w-2xl mx-auto leading-relaxed">
            Porque ele te ensina a ter <span className="text-gray-200">superpoderes</span>. 
            Enquanto outras noivas <span className="text-gray-200">perdem horas no Google,</span> você vai aprender a usar a 
            Inteligência Artificial para:
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4a574]/10 to-[#e8b4b8]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-6 rounded-2xl border border-[#3d342e] hover:border-[#d4a574]/40 transition-all duration-300 bg-[#1a1614]/50 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{feature.emoji}</span>
                  <div>
                    <h3 className="text-[#d4a574] font-medium text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#d4a574]/10 to-[#e8b4b8]/10 border border-[#d4a574]/20">
            <blockquote className="text-xl md:text-2xl text-white font-light italic leading-relaxed max-w-2xl">
              "Pense na IA não como um robô frio, mas como um 
              <span className="text-[#d4a574]"> estagiário genial </span> 
              que leu todos os livros de casamento do mundo."
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}