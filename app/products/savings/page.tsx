import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProductHeroSection } from '@/components/sections/product-hero-section';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Download } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const keyFeatures = [
  {
    title: 'Competitive Interest Rate',
    description: '4.5% per annum on savings accounts with balanced operations',
  },
  {
    title: 'Zero Minimum Balance',
    description: 'No minimum balance requirement to maintain your account',
  },
  {
    title: 'Free Debit Card',
    description: 'RuPay debit card for all transactions and ATM withdrawals',
  },
  {
    title: '24/7 Digital Access',
    description: 'Online and mobile banking with unlimited transfers',
  },
  {
    title: 'Safe & Secure',
    description: 'RBI regulated with deposit insurance up to ₹5 lakhs',
  },
  {
    title: 'Easy Account Opening',
    description: 'Open account in 5 minutes with video KYC',
  },
];

const highlights = [
  '4.5% Interest Per Annum',
  'Zero Minimum Balance',
  'Free Debit Card',
];

export default function SavingsPage() {
  return (
    <>
      <Header />
      <main>
        <ProductHeroSection
          title="Savings Account"
          subtitle="Premium Savings"
          description="Build your financial future with our premium savings account. Enjoy competitive interest rates, zero balance requirements, and unlimited digital access."
          keyFeatures={keyFeatures}
          highlights={highlights}
        />

        {/* Eligibility & Documents */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Eligibility */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Who Can Apply?</h2>
                <div className="space-y-3">
                  {[
                    'Indian citizen aged 18 years and above',
                    'Salaried or self-employed individuals',
                    'Professionals and business owners',
                    'Retired individuals',
                    'Non-Resident Indians (NRI)',
                  ].map((item) => (
                    <div key={item} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents Required */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Documents Required</h2>
                <div className="space-y-3">
                  {[
                    'Valid Photo ID (Aadhaar/PAN/Passport)',
                    'Address Proof (Utility Bill/Rental Agreement)',
                    'Income Proof (Salary Slip/ITR)',
                    'Bank Statement or Reference',
                    'Passport size photograph',
                  ].map((item) => (
                    <div key={item} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Account Features & Benefits */}
        <section className="py-16 bg-gradient-to-b from-card/30 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Account Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Unlimited Deposits', desc: 'No limit on the number of deposits' },
                { title: '5 Free Withdrawals', desc: 'Per month at other bank ATMs' },
                { title: 'Monthly Statement', desc: 'Free electronic and physical statements' },
                { title: 'Standing Instructions', desc: 'Automatic payments setup facility' },
                { title: 'Locker Facility', desc: 'Safe deposit lockers available' },
                { title: 'Overdraft Facility', desc: 'Up to ₹2 lakhs overdraft limit' },
              ].map((feature) => (
                <Card key={feature.title} className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-foreground/70">{feature.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* KFS & Documents */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Key Facts Sheet & Policies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Key Facts Sheet (KFS)</h3>
                  <p className="text-sm text-foreground/70">Complete product details and terms</p>
                </div>
                <Button variant="outline" size="sm" className="ml-4" asChild>
                  <a href="#" download>
                    <Download className="w-4 h-4" />
                  </a>
                </Button>
              </Card>

              <Card className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Terms & Conditions</h3>
                  <p className="text-sm text-foreground/70">Account opening and usage terms</p>
                </div>
                <Button variant="outline" size="sm" className="ml-4" asChild>
                  <Link href="/terms">View</Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        <Separator />

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-4xl font-bold text-foreground">
              Ready to Open Your Savings Account?
            </h2>
            <p className="text-lg text-foreground/70">
              Join thousands of satisfied customers. Open account in just 5 minutes online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-lg" asChild>
                <Link href="/open-account">Open Account Online</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-lg" asChild>
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
