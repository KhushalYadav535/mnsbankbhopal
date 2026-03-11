import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { TrustSection } from '@/components/sections/trust-section';
import { ProductsSection } from '@/components/sections/products-section';
import { WhyChooseUsSection } from '@/components/sections/why-choose-us-section';
import { RatesSection } from '@/components/sections/rates-section';
import { InquiryCTASection } from '@/components/sections/inquiry-cta-section';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <ProductsSection />
        <WhyChooseUsSection />
        <RatesSection />
        <InquiryCTASection />
      </main>
      <Footer />
    </>
  );
}
