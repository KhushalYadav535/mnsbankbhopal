import React from 'react';
import Link from 'next/link';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { ArrowRight, Percent, Home, Briefcase, TrendingUp } from 'lucide-react';

export function ProductsSection() {
  const products = [
    {
      id: 'savings',
      title: 'Savings Account',
      description: 'Secure your future with competitive interest rates and premium features',
      icon: Percent,
      color: 'from-primary to-primary/50',
      highlights: ['4.5% Interest', 'Zero Minimum Balance', 'Free Debit Card'],
      href: '/products/savings',
    },
    {
      id: 'home-loan',
      title: 'Home Loans',
      description: 'Fulfill your dream home with flexible EMI options and low interest rates',
      icon: Home,
      color: 'from-accent to-accent/50',
      highlights: ['8.2% Starting Rate', 'Flexible Tenure', 'Quick Approval'],
      href: '/products/home-loans',
    },
    {
      id: 'business-loan',
      title: 'Business Loans',
      description: 'Scale your business with customized loan solutions and expert support',
      icon: Briefcase,
      color: 'from-secondary to-secondary/50',
      highlights: ['Upto ₹50 Lakhs', '48-Hour Approval', 'Dedicated Manager'],
      href: '/products/business-loans',
    },
    {
      id: 'investments',
      title: 'Investment Plans',
      description: 'Build wealth with our range of investment and insurance products',
      icon: TrendingUp,
      color: 'from-primary/80 to-accent/80',
      highlights: ['6-8% Returns', 'Tax Benefits', 'Guaranteed Maturity'],
      href: '/products/investments',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-card/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Premium Products</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Comprehensive banking solutions tailored to your financial goals and aspirations
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mb-16">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <Link key={product.id} href={product.href}>
                <Card className="h-full p-8 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer border border-white/10 dark:border-white/5 flex flex-col bg-card/40 backdrop-blur-md hover:bg-card/60">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 group-hover:scale-125 transition-transform shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-base text-foreground/70 mb-7 flex-grow leading-relaxed">
                    {product.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3 mb-8 pb-8 border-b border-border/30">
                    {product.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-3 text-sm font-medium">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-secondary to-accent" />
                        <span className="text-foreground/80">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-sm font-semibold text-secondary group-hover:text-primary transition-colors gap-2">
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground rounded-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all px-8"
            asChild
          >
            <Link href="/products">Explore All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
