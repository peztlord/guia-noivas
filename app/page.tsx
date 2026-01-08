import React from 'react';
import HeroSection from './components/HeroSection';
import PainPoints from './components/PainPoints';
import ProductSection from './components/ProductSection';
import AIFeatures from './components/AIFeatures';
import PricingOffer from './components/PricingOffer';
import BonusTimer from './components/BonusTimer';
import FAQSection from './components/FAQSection';
import FooterCTA from './components/FooterCTA';

export default function Home() {
  const checkoutUrl = "#checkout"; // Dica: No futuro, mova isso para .env

  return (
    <main className="min-h-screen bg-[#1a1614] text-white overflow-x-hidden">
      <HeroSection checkoutUrl={checkoutUrl} />
      <PainPoints />
      <ProductSection />
      <AIFeatures />
      <PricingOffer checkoutUrl={checkoutUrl} />
      <BonusTimer />
      <FAQSection />
      <FooterCTA checkoutUrl={checkoutUrl} />
    </main>
  );
}