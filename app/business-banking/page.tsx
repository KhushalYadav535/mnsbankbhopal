import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Briefcase, TrendingUp, BarChart3 } from 'lucide-react';

export default function BusinessBankingPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-foreground mb-4">Business Banking</h1>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Comprehensive financial solutions designed to fuel your business growth.
            </p>
          </div>
        </section>

        <Separator />

        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Our Business Solutions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Briefcase, title: 'Business Loans', desc: 'Tailored financing solutions up to ₹50 lakhs', rate: '9% - 10.5%' },
                { icon: BarChart3, title: 'Working Capital', desc: 'Short-term financing for daily operations', rate: '8.5% - 9.5%' },
                { icon: TrendingUp, title: 'Trade Services', desc: 'LC, BG, and export-import solutions', rate: 'Competitive Rates' },
              ].map((service, idx) => {
                const Icon = service.icon;
                return (
                  <Card key={idx} className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-foreground/70 mb-4">{service.desc}</p>
                    <p className="text-accent font-semibold text-sm">{service.rate}</p>
                  </Card>
                );
              })}
            </div>

            <div className="bg-primary/5 p-8 rounded-lg border border-primary/20 space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Why Choose MNS Bank for Business Banking?</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-foreground/70">
                <li className="flex gap-2">✓ Dedicated Relationship Manager</li>
                <li className="flex gap-2">✓ Quick Approval (48 Hours)</li>
                <li className="flex gap-2">✓ Flexible Repayment Terms</li>
                <li className="flex gap-2">✓ Competitive Interest Rates</li>
                <li className="flex gap-2">✓ Zero Account Opening Charges</li>
                <li className="flex gap-2">✓ 24/7 Business Support</li>
              </ul>
            </div>
          </div>
        </section>

        <Separator />

        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Grow Your Business With MNS Bank</h2>
            <Button className="bg-primary hover:bg-primary/90 rounded-lg" size="lg" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
