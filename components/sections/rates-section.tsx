import React from 'react';
import { Card } from '../ui/card';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

export function RatesSection() {
  const rates = [
    {
      title: 'Savings Account',
      rate: '4.5%',
      description: 'Per Annum',
      details: 'on deposits above ₹1,00,000',
      highlight: false,
    },
    {
      title: 'Fixed Deposit',
      rate: '6.5%',
      description: 'Per Annum',
      details: '1-3 years tenure',
      highlight: true,
    },
    {
      title: 'Recurring Deposit',
      rate: '5.5%',
      description: 'Per Annum',
      details: 'Flexible deposit schemes',
      highlight: false,
    },
    {
      title: 'Home Loan',
      rate: '8.2%',
      description: 'Per Annum',
      details: 'Floating rate starting from',
      highlight: false,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-card/15 to-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-secondary/15 to-accent/10 rounded-full border border-secondary/40 hover:border-secondary/60 transition-colors">
            <TrendingUp className="w-5 h-5 text-secondary" />
            <span className="text-sm font-semibold text-secondary">
              Competitive Rates Updated Weekly
            </span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
            Current <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Interest Rates</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Maximize your returns with our competitive and transparent interest rates
          </p>
        </div>

        {/* Rates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {rates.map((rateItem, index) => (
            <Card
              key={index}
              className={`p-8 transition-all duration-500 border rounded-2xl flex flex-col backdrop-blur-md ${
                rateItem.highlight
                  ? 'bg-gradient-to-br from-secondary/15 to-accent/10 border-secondary/60 shadow-xl hover:shadow-2xl scale-105 lg:scale-110 hover:-translate-y-2'
                  : 'bg-card/40 border-white/10 dark:border-white/5 hover:border-secondary/50 hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              {rateItem.highlight && (
                <div className="flex items-center gap-2 mb-5 px-4 py-2 w-fit bg-gradient-to-r from-secondary/30 to-accent/20 rounded-full border border-secondary/40">
                  <ArrowUpRight className="w-4 h-4 text-secondary font-bold" />
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">Best Rate</span>
                </div>
              )}

              <h3 className="text-base font-semibold text-foreground/80 mb-4 uppercase tracking-widest text-sm">
                {rateItem.title}
              </h3>

              <div className="mb-6 flex-grow">
                <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {rateItem.rate}
                </div>
                <p className="text-sm text-foreground/70 mt-2 font-medium">{rateItem.description}</p>
              </div>

              <p className="text-sm text-foreground/70 pt-6 border-t border-border/30">
                {rateItem.details}
              </p>
            </Card>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-16 p-6 bg-gradient-to-r from-secondary/8 to-accent/8 rounded-2xl border border-secondary/30 backdrop-blur-sm">
          <p className="text-sm text-foreground/70 leading-relaxed">
            <span className="font-semibold text-foreground">Disclaimer:</span> Interest rates mentioned are subject to change. Please contact our branches or visit our website for the latest rates. Rates are effective as of today and may vary based on tenure and amount.
          </p>
        </div>
      </div>
    </section>
  );
}
