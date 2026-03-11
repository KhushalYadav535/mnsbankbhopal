import React from 'react';
import { CheckCircle2, Award, Lock, BarChart3 } from 'lucide-react';

export function TrustSection() {
  const trustItems = [
    {
      icon: Lock,
      title: 'RBI Regulated',
      description: 'Fully regulated and supervised by Reserve Bank of India',
    },
    {
      icon: CheckCircle2,
      title: 'OFAC Compliant',
      description: 'Meeting international compliance and security standards',
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in cooperative banking services',
    },
    {
      icon: BarChart3,
      title: 'Financially Stable',
      description: 'Strong capital adequacy ratio and consistent growth',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary/8 to-accent/8 border-y border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.title} 
                className="group flex gap-5 p-6 rounded-xl bg-card/40 border border-border/30 hover:border-secondary/50 hover:bg-card/60 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-primary/25 to-primary/10 group-hover:from-secondary/30 group-hover:to-secondary/15 transition-all shadow-sm group-hover:shadow-md">
                    <Icon className="h-7 w-7 text-primary group-hover:text-accent transition-colors group-hover:scale-110" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                    {item.description}
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
