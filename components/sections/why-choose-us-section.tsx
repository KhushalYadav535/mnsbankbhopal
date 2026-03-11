import React from 'react';
import { Zap, Users, Smartphone, Headphones } from 'lucide-react';

export function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Zap,
      title: 'Fast & Easy',
      description: 'Open account in just 5 minutes online with instant verification',
    },
    {
      icon: Users,
      title: 'Personal Support',
      description: 'Dedicated relationship managers for all banking needs',
    },
    {
      icon: Smartphone,
      title: 'Digital First',
      description: '24/7 access to your accounts via mobile and web banking',
    },
    {
      icon: Headphones,
      title: 'Always Available',
      description: 'Multilingual customer support available round the clock',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-primary/2 to-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-secondary/8 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
            Why Choose <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">MNS Bank</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Experience banking designed for you with features and services that matter
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group relative p-9 rounded-2xl border border-border/40 hover:border-secondary/50 bg-gradient-to-br from-card to-card/50 hover:from-card/80 hover:to-card/40 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                {/* Background accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-secondary/25 group-hover:to-secondary/10 flex items-center justify-center mb-6 transition-all group-hover:shadow-lg">
                    <Icon className="w-8 h-8 text-primary group-hover:text-accent group-hover:scale-110 transition-all" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {reason.title}
                  </h3>

                  <p className="text-base text-foreground/70 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
