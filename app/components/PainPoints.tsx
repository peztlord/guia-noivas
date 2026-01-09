'use client'; // <--- Adicionado para suportar Framer Motion

import React from 'react';
import { motion } from 'framer-motion';
import { Frown, DollarSign, Brain, Clock } from 'lucide-react';

const painPoints = [
  {
    icon: Frown,
    emoji: "😓",
    text: 'Você olhou para o anel de noivado, ficou feliz, mas logo depois bateu o pânico: "Por onde eu começo?".'
  },
  {
    icon: DollarSign,
    emoji: "💸",
    text: "Sente que a indústria de casamentos fala uma língua estranha cheia de cifras que assustam."
  },
  {
    icon: Brain,
    emoji: "🤯",
    text: "Está printando tudo no Pinterest, mas não sabe como transformar aquilo em realidade sem estourar o orçamento."
  },
  {
    icon: Clock,
    emoji: "🕰️",
    text: "Não tem dinheiro para contratar uma assessora completa agora, mas precisa de ajuda profissional."
  }
];

export default function PainPoints() {
  return (
    <section className="relative py-24 px-4 bg-[#faf8f5]">
      {/* Decorative top wave */}
      {/* <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#2d2420] to-transparent" /> */}
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-[#2d2420] mb-4">
            Parece <span className="italic text-[#d4a574]">familiar</span>{" "}?
          </h2>
          <div className="w-16 h-0.5 bg-[#d4a574] mx-auto" />
        </motion.div>

        <div className="space-y-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex items-center gap-5 p-6 rounded-2xl bg-white shadow-sm border border-[#e8e4df] hover:shadow-md hover:border-[#d4a574]/30 transition-all duration-300"
            >
              <span className="text-3xl flex-shrink-0">{point.emoji}</span>
              <p className="text-[#4a423a] text-lg leading-relaxed">
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div
            className="inline-block p-8 rounded-3xl"
            style={{
                backgroundBlendMode: 'darken',
                backgroundColor: 'rgb(0,0,0,0.8)',
                backgroundImage: 'url(https://i.pinimg.com/474x/ff/df/25/ffdf2515d70406d5c063ccc1543481d0.jpg)',
            }}
          >
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
              Respire fundo. É normal se sentir perdida. Mas tentar resolver a festa, 
              a lua de mel e o noivado tudo no mesmo dia é a receita para o caos.
            </p>
            <p className="text-xl md:text-2xl text-[#d4a574] font-light mt-4">
              Você precisa de um <span className="italic">mapa</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}