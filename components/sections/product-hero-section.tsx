import React from 'react';
import { Card } from '../ui/card';

interface ProductFeature {
  title: string;
  description: string;
}

interface ProductHeroProps {
  title: string;
  subtitle: string;
  description: string;
  keyFeatures: ProductFeature[];
  highlights: string[];
}

export function ProductHeroSection({
  title,
  subtitle,
  description,
  keyFeatures,
  highlights,
}: ProductHeroProps) {
  return (
    <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full border border-secondary/30">
              <span className="text-sm font-semibold text-secondary">
                {subtitle}
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
              {title}
            </h1>
            
            <p className="text-lg text-foreground/70 max-w-3xl leading-relaxed">
              {description}
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {highlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/50">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{highlight}</span>
              </div>
            ))}
          </div>

          {/* Key Features Grid */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {keyFeatures.map((feature) => (
                <Card key={feature.title} className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
