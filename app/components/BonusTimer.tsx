'use client'; // <--- Obrigatório para usar Hooks e LocalStorage

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gift, Clock, Table2, CheckCircle } from 'lucide-react';

interface HeroSectionProps {
  checkoutUrl: string;
}

export default function BonusTimer({ checkoutUrl }: HeroSectionProps) {
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  useEffect(() => {
    // Check if there's a stored end time
    const storedEndTime = localStorage.getItem('bonusTimerEndTime');
    let endTime: number;

    if (storedEndTime) {
      endTime = parseInt(storedEndTime);
      const remaining = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
      setTimeLeft(remaining);
    } else {
      endTime = Date.now() + 30 * 60 * 1000;
      localStorage.setItem('bonusTimerEndTime', endTime.toString());
    }

    const timer = setInterval(() => {
      const remaining = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
      setTimeLeft(remaining);

      if (remaining <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section
      className="relative py-16 px-4 bg-gradient-to-b from-[#2d2420] to-[#1a1614]"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Glowing border effect */}
          {/* <div 
            className="absolute -inset-1 bg-gradient-to-r from-[#d4a574] via-[#e8b4b8] to-[#d4a574] rounded-3xl"
          /> */}

          <div
            className="relative rounded-3xl p-8 md:p-12 border border-[#d4a574]/30 bg-cover bg-no-repeat bg-center"
            style={{
              backgroundBlendMode: 'darken',
              backgroundColor: 'rgb(0,0,0,0.8)',
              backgroundImage: 'url(https://i.pinimg.com/originals/67/bd/1d/67bd1d857baa75137cd3ce668444933c.jpg)',
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <Gift className="w-8 h-8 text-[#d4a574] animate-bounce" />
              <h2 className="text-md md:text-2xl font-light text-white">
                <span className="text-white">PRESENTE RELÂMPAGO</span>
              </h2>
              <Gift className="w-8 h-8 text-[#d4a574] animate-bounce" />
            </div>

            {/* Timer */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <Clock className="w-6 h-6 text-[#e8b4b8]" />
              <div className="flex items-center gap-2">
                <span className="text-[#a89a8c] text-lg">Oferta expira em:</span>
                <span className="text-2xl md:text-3xl font-mono text-white tracking-wider">
                  {formatTime(timeLeft)}
                </span>
              </div>
            </div>

            {/* Bonus Content */}
            <div className="bg-[#d4a574]/10 rounded-2xl p-6 md:p-8 border border-[#d4a574]/20">
              <p className="text-[#a89a8c] text-lg text-center mb-6">
                Se você fechar seu pedido nos próximos <span className="text-gray-300 font-semibold">30 MINUTOS</span>,
                você não leva só o eBook. Você ganha gratuitamente nossa:
              </p>

              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-40 h-20 rounded-2xl bg-gradient-to-br from-[#d4a574] to-[#e8b4b8] flex items-center justify-center">
                  <Table2 className="w-8 h-8 text-[#1a1614]" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl md:text-2xl text-white font-light">
                    Planilha de Planejamento Financeiro
                  </h3>
                  <p className="text-[#8a7d70]">para Casamentos</p>
                </div>
              </div>

              <ul className="space-y-3 mb-6 max-w-md mx-auto">
                {[
                  "Controle cada centavo do seu orçamento",
                  "Divida os custos facilmente",
                  "Visualize suas finanças sem ser expert em Excel"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <p className="text-[#8a7d70]">
                  De <span className="line-through">R$ 19,90</span>
                </p>
                <p className="text-2xl md:text-3xl text-white font-light">
                  Por R$ <span className="font-semibold">0,00</span>
                </p>
                <p className="text-gray-300 text-sm mt-2 italic">
                  somente agora
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.5 }}
              >
                <a href={checkoutUrl} className="w-full flex justify-center mt-4">
                  <button
                    type="button"
                    className="
                              bg-gradient-to-r from-yellow-700/80 via-amber-200/70 to-yellow-700/80 
                              hover:from-yellow-800 hover:via-amber-300 hover:to-yellow-800 text-white
                              font-bold text-sm px-4 py-3 rounded-xl shadow-2xl drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]
                              shadow-[#e8b4b8]/20 transition-all duration-300 hover:scale-105 hover:shadow-[#e8b4b8]/30"
                  >
                    QUERO GUIA DOS SONHOS
                  </button>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}