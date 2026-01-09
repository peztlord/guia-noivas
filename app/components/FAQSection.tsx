'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HelpCircle, ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Serve para quem vai casar só no civil?",
    answer: "Sim! O guia foca em organização e prioridades, então funciona perfeitamente para qualquer tipo de cerimônia, seja civil, religiosa ou ambos."
  },
  {
    question: "Preciso pagar para usar a IA?",
    answer: "Não! Ensinamos a usar ferramentas 100% gratuitas como ChatGPT, Gemini e Bing. Você não precisa gastar nada extra para aproveitar todos os recursos."
  },
  {
    question: "Como recebo o acesso?",
    answer: "Imediatamente no seu e-mail após a confirmação do pagamento. Você receberá um link para baixar o eBook e a planilha bônus em poucos minutos."
  },
  {
    question: "E se eu não gostar do conteúdo?",
    answer: "Temos garantia total de 7 dias. Se você não amar o conteúdo, devolvemos seus R$ 9,99 integralmente, sem perguntas. O risco é todo nosso."
  },
  {
    question: "O guia serve para casamentos com orçamento apertado?",
    answer: "Com certeza! Na verdade, ele foi pensado especialmente para isso. Você vai aprender a economizar, priorizar e usar ferramentas gratuitas para ter o casamento dos sonhos sem gastar fortunas."
  }
];

export default function FAQSection() {
  // Estado para controlar qual FAQ está aberta (null = nenhuma)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 bg-[#faf8f5]">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4a574]/10 border border-[#d4a574]/20 mb-6">
            <HelpCircle className="w-4 h-4 text-[#d4a574]" />
            <span className="text-sm text-[#d4a574]">Dúvidas Frequentes</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-light text-[#2d2420]">
            Tire suas <span className="text-[#d4a574] italic">dúvidas</span>
          </h2>
        </motion.div>

        {/* FAQ Accordion Customizado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className={`
                  bg-white rounded-2xl border px-6 overflow-hidden transition-all duration-300
                  ${isOpen 
                    ? 'border-[#d4a574]/40 shadow-lg' 
                    : 'border-[#e8e4df]'
                  }
                `}
              >
                {/* Botão do Accordion */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left py-5 flex items-center justify-between group"
                >
                  <span className="text-[#2d2420] font-medium group-hover:text-[#d4a574] transition-colors pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#d4a574] transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
                  />
                </button>

                {/* Conteúdo com animação "Grid Rows" do Tailwind */}
                <div 
                  className={`
                    grid transition-[grid-template-rows] duration-300 ease-out
                    ${isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'}
                  `}
                >
                  <div className="overflow-hidden">
                    <p className="text-[#6b5f54] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Guarantee Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div
            className="rounded-3xl p-8 md:p-10 text-center"
            style={{
                backgroundBlendMode: 'darken',
                backgroundColor: 'rgb(0,0,0,0.8)',
                backgroundImage: 'url(https://i.pinimg.com/474x/ff/df/25/ffdf2515d70406d5c063ccc1543481d0.jpg)',
            }}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#d4a574]/20 to-[#e8b4b8]/20 flex items-center justify-center">
              <ShieldCheck className="w-10 h-10 text-[#d4a574]" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
              Garantia <span className="text-[#d4a574]">Incondicional</span>
            </h3>
            
            <p className="text-white text-lg max-w-lg mx-auto leading-relaxed">
              Se você não amar o conteúdo, devolvemos seus <span className="text-[#d4a574]">R$ 9,90</span>. 
              Sem perguntas, sem burocracia. O risco é todo nosso.
            </p>
            
            <div className="mt-6 flex items-center justify-center gap-2 text-[#8a7d70]">
              <div className="w-2 h-2 rounded-full bg-[#d4a574]" />
              <span className="text-sm text-gray-300">Garantia válida por 7 dias</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}