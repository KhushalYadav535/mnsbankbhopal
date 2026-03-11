import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function OpenAccountPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-foreground mb-4">Open Your Account in 5 Minutes</h1>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Start your banking journey with MNS Bank. Quick, simple, and secure account opening process.
            </p>
          </div>
        </section>

        <Separator />

        {/* Steps */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { step: 1, title: 'Verify Identity', desc: 'Complete video KYC in 2 minutes' },
                { step: 2, title: 'Submit Documents', desc: 'Upload ID and address proof' },
                { step: 3, title: 'Confirm Details', desc: 'Review and verify information' },
                { step: 4, title: 'Activation', desc: 'Account ready to use instantly' },
              ].map((item) => (
                <Card key={item.step} className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-lg font-bold text-primary">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70">{item.desc}</p>
                </Card>
              ))}
            </div>

            <div className="bg-primary/5 p-8 rounded-lg border border-primary/20 space-y-4">
              <h2 className="text-2xl font-bold text-foreground">What You Need</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Valid Photo ID (Aadhaar/PAN/Passport)',
                  'Address Proof (Utility Bill/Rent Agreement)',
                  'Income Proof (Salary Slip/ITR)',
                  'Selfie for Verification',
                  'Mobile Number & Email',
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Ready to Get Started?</h2>
            <p className="text-foreground/70">
              Join thousands of satisfied customers. Start your account opening process now.
            </p>
            <Button className="bg-primary hover:bg-primary/90 rounded-lg" size="lg">
              Start Account Opening
            </Button>
            <p className="text-sm text-foreground/60">
              Takes only 5 minutes. No hidden charges.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
