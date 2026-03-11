import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Target, Eye, Heart, Users, Globe, Shield } from 'lucide-react';

export default function VisionMissionPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <h1 className="text-5xl font-bold text-foreground">Vision & Mission</h1>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Guided by purpose, driven by community trust.
            </p>
          </div>
        </section>

        <Separator />

        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="p-8 bg-primary/5 border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10"><Eye className="w-6 h-6 text-primary" /></div>
                  <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-foreground/70 leading-relaxed text-lg">
                  To be the most trusted cooperative bank in Central India, recognized for excellence in service, financial stability, and community contribution — bridging tradition with cutting-edge digital convenience.
                </p>
              </Card>

              <Card className="p-8 bg-accent/5 border-accent/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-accent/10"><Target className="w-6 h-6 text-accent" /></div>
                  <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-foreground/70 leading-relaxed text-lg">
                  To provide accessible, affordable, and innovative banking services that empower individuals and businesses to achieve their financial goals while maintaining the highest standards of integrity and customer service.
                </p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Heart, title: 'Integrity', desc: 'Honest and ethical practices in all our dealings with customers and stakeholders.' },
                { icon: Users, title: 'Customer First', desc: 'Putting our customers at the heart of everything we do.' },
                { icon: Globe, title: 'Community', desc: 'Committed to serving and uplifting the Bhopal community.' },
                { icon: Shield, title: 'Trust & Security', desc: 'Safeguarding deposits with DICGC insurance and RBI compliance.' },
              ].map((value) => {
                const Icon = value.icon;
                return (
                  <Card key={value.title} className="p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-foreground/70">{value.desc}</p>
                  </Card>
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
