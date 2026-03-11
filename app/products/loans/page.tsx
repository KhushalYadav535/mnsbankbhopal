import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { BadgePercent, Car, Home, ReceiptText, Gift, LockKeyhole, Landmark, Building2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ALL_LOANS = [
  { title: 'Gold Loan', desc: 'Unlock the value of your gold instantly with minimal documentation.', icon: BadgePercent, rate: '8.90%', href: '/products/loans/gold' },
  { title: 'Personal Loan', desc: 'No questions asked financial freedom for your personal needs.', icon: ReceiptText, rate: '11.50%', href: '/products/loans/personal' },
  { title: 'Home Loan', desc: 'Step into your own home with competitive interest rates.', icon: Home, rate: '8.40%', href: '/products/loans/home' },
  { title: 'Car Loan', desc: 'Drive your dream car with up to 100% on-road funding.', icon: Car, rate: '9.25%', href: '/products/loans/car' },
  { title: 'Business Loan', desc: 'Fuel your business growth with hassle-free financing.', icon: Building2, rate: '10.25%', href: '/products/loans/business' },
  { title: 'Festival Loan', desc: 'Celebrate without financial worries this season.', icon: Gift, rate: '10.00%', href: '/products/loans/festival' },
  { title: 'Loan Against FD', desc: 'Get liquidity without breaking your fixed deposits.', icon: LockKeyhole, rate: 'FD+1.5%', href: '/products/loans/against-fd' },
  { title: 'House Construction Loan', desc: 'Build your dream home from the ground up.', icon: Landmark, rate: '8.50%', href: '/products/loans/construction' },
];

export default function LoansIndexPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <h1 className="text-5xl font-bold text-foreground">Retail & MSME Loans</h1>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Fast processing, minimal documentation, and highly competitive rates designed for your personal and business aspirations.
            </p>
          </div>
        </section>

        <Separator />

        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ALL_LOANS.map((loan) => {
                const Icon = loan.icon;
                return (
                  <Link key={loan.title} href={loan.href}>
                    <Card className="p-6 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-primary/5 text-primary rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                          <Icon className="w-7 h-7" />
                        </div>
                        <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full border border-accent/20">
                          {loan.rate}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{loan.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{loan.desc}</p>
                      <div className="flex items-center gap-1 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
