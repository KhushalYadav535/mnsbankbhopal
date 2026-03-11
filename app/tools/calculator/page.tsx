import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { EmiCalculator } from '@/components/tools/emi-calculator';

export default function CalculatorPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-background via-card/10 to-background pt-8 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Plan Your <span className="text-primary">Finances</span>
            </h1>
            <p className="text-lg text-foreground/70">
              Use our smart EMI calculator to estimate your monthly installments for Home, Personal, or Business Loans. Adjust the sliders to see how tenure and interest rates affect your payments.
            </p>
          </div>

          <EmiCalculator />

        </div>
      </main>
      <Footer />
    </>
  );
}
