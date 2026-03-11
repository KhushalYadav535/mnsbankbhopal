import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Heart, Globe, Users, Target } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-foreground">About MNS Bank</h1>
              <p className="text-lg text-foreground/70 max-w-3xl">
                Serving the Bhopal community with integrity, innovation, and excellence since 1996.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* History */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-foreground">Our Story</h2>
                <div className="space-y-4 text-foreground/70">
                  <p>
                    Mahanagar Nagrik Sahakari Bank was established in 1996 with a vision to provide premium banking services to the people of Bhopal. We are a cooperative bank registered with the Reserve Bank of India, dedicated to financial inclusion and community development.
                  </p>
                  <p>
                    Over the past 28 years, we've grown from a small community bank to a trusted financial institution with a strong presence across Bhopal. Our commitment to transparency, fair practices, and customer-centric service has been the foundation of our success.
                  </p>
                  <p>
                    Today, we serve over 28,000 customers with ₹500 crores in assets under management, providing comprehensive banking solutions for individuals and businesses.
                  </p>
                </div>
              </div>

              <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="space-y-6">
                  {[
                    { year: '1996', event: 'Bank Established' },
                    { year: '2005', event: 'Expanded to 3 branches' },
                    { year: '2015', event: 'Launched Digital Banking' },
                    { year: '2023', event: 'Reached 28K+ customers' },
                  ].map((item) => (
                    <div key={item.year} className="flex gap-4 pb-6 border-b border-border/50 last:border-b-0">
                      <div className="font-bold text-primary min-w-16">{item.year}</div>
                      <div className="text-foreground/70">{item.event}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        <Separator />

        {/* Mission & Values */}
        <section className="py-16 bg-gradient-to-b from-card/30 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <Card className="p-8 bg-primary/5 border-primary/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-foreground/70">
                  To provide accessible, affordable, and innovative banking services that empower individuals and businesses to achieve their financial goals while maintaining the highest standards of integrity and customer service.
                </p>
              </Card>

              <Card className="p-8 bg-accent/5 border-accent/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-foreground/70">
                  To be the most trusted cooperative bank in Central India, recognized for excellence in service, financial stability, and community contribution.
                </p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Heart, title: 'Integrity', desc: 'Honest and ethical practices in all dealings' },
                { icon: Users, title: 'Customer First', desc: 'Putting our customers at the heart of everything' },
                { icon: Globe, title: 'Community', desc: 'Committed to serving Bhopal and beyond' },
                { icon: Target, title: 'Excellence', desc: 'Pursuing the highest standards of quality' },
              ].map((value) => {
                const Icon = value.icon;
                return (
                  <Card key={value.title} className="p-6 text-center">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-foreground/70">{value.desc}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <Separator />

        {/* Awards & Recognition */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="text-3xl font-bold text-foreground">Recognition & Awards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                'Best Cooperative Bank - 2023',
                'Customer Service Excellence Award - 2022',
                'Digital Innovation Leader - 2023',
              ].map((award) => (
                <Card key={award} className="p-6">
                  <p className="text-lg font-semibold text-foreground">{award}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Join Our Community</h2>
            <p className="text-foreground/70">
              Experience banking with a bank that values your trust and success.
            </p>
            <Button className="bg-primary hover:bg-primary/90 rounded-lg" size="lg" asChild>
              <Link href="/open-account">Open Account Today</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
