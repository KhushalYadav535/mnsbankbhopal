import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2 } from 'lucide-react';

export default function PersonalBankingPage() {
  const services = [
    { title: 'Savings Account', desc: 'Premium savings with 4.5% interest', href: '/products/savings' },
    { title: 'Fixed Deposits', desc: 'Secure investments with 6.5-7% returns', href: '/products/fixed-deposits' },
    { title: 'Home Loans', desc: 'Affordable loans from 8.2% p.a.', href: '/products/home-loans' },
    { title: 'Personal Loans', desc: 'Quick loans up to ₹25 lakhs', href: '/products/personal-loans' },
    { title: 'Auto Loans', desc: 'Finance your vehicle dreams', href: '/products/auto-loans' },
    { title: 'Investment Products', desc: 'Build wealth for the future', href: '/products/investments' },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-foreground mb-4">Personal Banking</h1>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Comprehensive banking solutions designed for your personal financial goals and aspirations.
            </p>
          </div>
        </section>

        <Separator />

        {/* Services Grid */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Our Personal Banking Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link key={service.title} href={service.href}>
                  <Card className="h-full p-6 hover:shadow-lg transition-all">
                    <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-foreground/70 mb-4">{service.desc}</p>
                    <div className="text-primary hover:text-primary/80 text-sm font-semibold transition-colors">
                      Explore →
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* Why Choose */}
        <section className="py-16 bg-gradient-to-b from-card/30 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Why Choose MNS Bank for Personal Banking?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Competitive interest rates on all products',
                'Zero balance account option',
                'Quick and easy loan approval',
                '24/7 digital banking access',
                'Dedicated relationship managers',
                'Flexible repayment options',
                'Insurance & investment products',
                'Priority customer service',
              ].map((feature) => (
                <div key={feature} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Start Your Banking Journey Today</h2>
            <Button className="bg-primary hover:bg-primary/90 rounded-lg" size="lg" asChild>
              <Link href="/open-account">Open Account</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
