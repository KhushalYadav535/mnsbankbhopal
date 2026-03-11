import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function ProductsPage() {
  const products = [
    {
      title: 'Savings Account',
      description: 'Premium savings with competitive interest rates and zero balance requirements.',
      href: '/products/savings',
      benefits: ['4.5% Interest', 'Zero Minimum Balance', 'Free Debit Card'],
    },
    {
      title: 'Fixed Deposits',
      description: 'Secure your future with our high-yield fixed deposit schemes.',
      href: '/products/fixed-deposits',
      benefits: ['6.5% - 7% Interest', 'Flexible Tenure', 'Safe & Secure'],
    },
    {
      title: 'Home Loans',
      description: 'Affordable home loans with flexible EMI and quick approval.',
      href: '/products/home-loans',
      benefits: ['8.2% Starting Rate', 'Quick Approval', 'Flexible Tenure'],
    },
    {
      title: 'Personal Loans',
      description: 'Quick personal loans for your financial needs.',
      href: '/products/personal-loans',
      benefits: ['10.5% Starting Rate', '48-Hour Approval', 'Upto ₹25 Lakhs'],
    },
    {
      title: 'Business Loans',
      description: 'Customized loan solutions to grow your business.',
      href: '/products/business-loans',
      benefits: ['9% Starting Rate', 'Dedicated Manager', 'Upto ₹50 Lakhs'],
    },
    {
      title: 'Investment Plans',
      description: 'Build wealth with our investment and insurance products.',
      href: '/products/investments',
      benefits: ['6-8% Returns', 'Tax Benefits', 'Guaranteed Maturity'],
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-foreground">Our Products</h1>
              <p className="text-lg text-foreground/70 max-w-3xl">
                Comprehensive banking solutions for individuals and businesses.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* Products Grid */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link key={product.title} href={product.href}>
                  <Card className="h-full p-6 hover:shadow-lg transition-all hover:border-secondary/50">
                    <h3 className="text-xl font-bold text-foreground mb-2">{product.title}</h3>
                    <p className="text-foreground/70 mb-4 text-sm">{product.description}</p>
                    
                    <div className="space-y-2 mb-6 pb-6 border-b border-border/50">
                      {product.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          <span className="text-foreground/70">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center text-sm font-semibold text-secondary gap-2 hover:text-primary transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
