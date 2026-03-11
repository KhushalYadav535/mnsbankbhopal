import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function FixedDepositsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold text-foreground mb-4">Fixed Deposits</h1>
          <p className="text-lg text-foreground/70 mb-8">Secure your future with competitive returns. Coming soon with full details.</p>
          <Button className="bg-primary rounded-lg" asChild>
            <Link href="/contact">Get More Information</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
