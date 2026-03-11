import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accessibility, Phone, Video, MapPin } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function DEAFPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/30">
                <Accessibility className="w-4 h-4" />
                <span className="text-sm font-semibold text-secondary">Accessibility & Inclusivity</span>
              </div>
              
              <h1 className="text-5xl font-bold text-foreground">Accessibility Services</h1>
              <p className="text-lg text-foreground/70 max-w-3xl">
                MNS Bank is committed to providing banking services that are accessible to all, including differently abled and elderly customers.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* Services for Differently Abled */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Services for Differently Abled</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  title: 'Wheelchair Accessible Branches',
                  description: 'All our branches have wheelchair ramps, accessible restrooms, and designated parking spaces.',
                },
                {
                  title: 'Sign Language Interpreters',
                  description: 'Available on request for deaf and hard of hearing customers (24-hour notice recommended).',
                },
                {
                  title: 'Screen Reader Compatible Website',
                  description: 'Our website is WCAG 2.1 AA compliant and works with major screen readers.',
                },
                {
                  title: 'Large Print Documents',
                  description: 'Account statements and forms available in large print upon request.',
                },
                {
                  title: 'Video Relay Service',
                  description: 'Connect with our team through video relay for seamless communication.',
                },
                {
                  title: 'Priority Queuing',
                  description: 'Differently abled customers receive priority in branch queues.',
                },
              ].map((service) => (
                <Card key={service.title} className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-foreground/70">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* Services for Elderly */}
        <section className="py-16 bg-gradient-to-b from-card/30 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Senior Citizen Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  title: 'Senior Citizen Savings Account',
                  description: 'Special savings account with higher interest rates and additional benefits for customers aged 60+.',
                },
                {
                  title: 'Home Visit Service',
                  description: 'Our staff can visit your home for account opening and document collection.',
                },
                {
                  title: 'Simple Online Banking',
                  description: 'Simplified interface with larger fonts and easy-to-use features for digital banking.',
                },
                {
                  title: 'Dedicated Support Line',
                  description: 'Special phone line with patient support staff trained to assist elderly customers.',
                },
                {
                  title: 'Power of Attorney Assistance',
                  description: 'Help with setting up authorized signatories for account management.',
                },
                {
                  title: 'Priority Service',
                  description: 'Priority processing for transactions and dedicated relationship managers.',
                },
              ].map((service) => (
                <Card key={service.title} className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-foreground/70">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* How to Access */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">How to Request Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Call</h3>
                <p className="text-sm text-foreground/70 mb-4">1800-BANK-123</p>
                <p className="text-xs text-foreground/60">24/7 Available</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Visit</h3>
                <p className="text-sm text-foreground/70 mb-4">Any Branch</p>
                <p className="text-xs text-foreground/60">Accessible locations</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Video className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Video Call</h3>
                <p className="text-sm text-foreground/70 mb-4">Via Email Request</p>
                <p className="text-xs text-foreground/60">Schedule appointment</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Accessibility className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <p className="text-sm text-foreground/70 mb-4">accessibility@mnsbankbhopal.com</p>
                <p className="text-xs text-foreground/60">Response in 24 hours</p>
              </Card>
            </div>
          </div>
        </section>

        <Separator />

        {/* FAQ */}
        <section className="py-16 bg-gradient-to-b from-card/30 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Common Questions</h2>
            
            <div className="space-y-4">
              {[
                {
                  q: 'Is there a special account for differently abled customers?',
                  a: 'Yes, we offer a comprehensive banking package with zero balance, priority service, and special facilities.',
                },
                {
                  q: 'Do I get special interest rates as a senior citizen?',
                  a: 'Yes, our Senior Citizen Savings Account offers higher interest rates and additional benefits.',
                },
                {
                  q: 'Can someone assist me in accessing online banking?',
                  a: 'Yes, our support team can guide you through the process. Call 1800-BANK-123 for assistance.',
                },
              ].map((item, idx) => (
                <Card key={idx} className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                  <p className="text-foreground/70">{item.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              We're Here to Help Everyone
            </h2>
            <p className="text-foreground/70">
              Contact our accessibility team for any special requirements or assistance.
            </p>
            <Button className="bg-primary hover:bg-primary/90 rounded-lg" size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
