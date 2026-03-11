import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { InteractiveMap } from '@/components/tools/interactive-map';

export default function LocatorPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-background via-card/10 to-background pt-8 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Find a branch near <span className="text-primary">You</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Locate your nearest MNS Bank branch, ATM center, or banking kiosk. We are expanding rapidly to serve you better across Madhya Pradesh.
            </p>
          </div>

          <InteractiveMap />

        </div>
      </main>
      <Footer />
    </>
  );
}
