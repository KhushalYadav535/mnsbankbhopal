"use client";

import React, { useState, useEffect } from 'react';
import { Slider } from '../ui/slider';
import { Card } from '../ui/card';
import { Calculator } from 'lucide-react';

export function EmiCalculator() {
  const [principal, setPrincipal] = useState(1000000); // 10 Lakhs
  const [rate, setRate] = useState(8.5);
  const [tenureYears, setTenureYears] = useState(10);
  
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Formula: EMI = P x R x (1+R)^N / [(1+R)^N-1]
    const p = principal;
    const r = rate / 12 / 100;
    const n = tenureYears * 12;

    if (p > 0 && r > 0 && n > 0) {
      const emiCalc = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const emiVal = Math.round(emiCalc);
      const totalAmt = emiVal * n;
      const totalInt = totalAmt - p;
      
      setEmi(emiVal);
      setTotalAmount(totalAmt);
      setTotalInterest(totalInt);
    } else {
      setEmi(0);
      setTotalAmount(0);
      setTotalInterest(0);
    }
  }, [principal, rate, tenureYears]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
      
      {/* Input Section */}
      <div className="space-y-10 p-8 rounded-3xl bg-card/40 backdrop-blur-md border border-white/10 dark:border-white/5 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-primary/10">
            <Calculator className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Loan EMI Calculator</h2>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="font-semibold text-foreground/80">Loan Amount</label>
            <div className="font-bold text-xl text-foreground">{formatCurrency(principal)}</div>
          </div>
          <Slider 
            value={[principal]} 
            onValueChange={(val) => setPrincipal(val[0])} 
            max={50000000} 
            step={50000} 
            min={50000} 
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>₹50,000</span>
            <span>₹5 Cr</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="font-semibold text-foreground/80">Interest Rate (% p.a.)</label>
            <div className="font-bold text-xl text-foreground">{rate.toFixed(1)}%</div>
          </div>
          <Slider 
            value={[rate]} 
            onValueChange={(val) => setRate(val[0])} 
            max={20} 
            step={0.1} 
            min={5} 
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>5%</span>
            <span>20%</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="font-semibold text-foreground/80">Loan Tenure (Years)</label>
            <div className="font-bold text-xl text-foreground">{tenureYears} Years</div>
          </div>
          <Slider 
            value={[tenureYears]} 
            onValueChange={(val) => setTenureYears(val[0])} 
            max={30} 
            step={1} 
            min={1} 
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>1 Year</span>
            <span>30 Years</span>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="flex items-center">
        <Card className="w-full p-8 bg-gradient-to-br from-primary/10 via-card to-accent/5 border border-primary/20 backdrop-blur-md shadow-2xl relative overflow-hidden rounded-3xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full" />
          
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-foreground mb-8 text-center">Your Estimated EMI</h3>
            
            <div className="text-center mb-10 pb-10 border-b border-border/50">
              <div className="text-5xl lg:text-6xl font-display font-bold text-primary mb-2">
                {formatCurrency(emi)}
              </div>
              <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Per Month</div>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-foreground/70 font-medium">Principal Amount</span>
                <span className="font-bold text-lg text-foreground">{formatCurrency(principal)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground/70 font-medium">Total Interest</span>
                <span className="font-bold text-lg text-accent">{formatCurrency(totalInterest)}</span>
              </div>
              <div className="pt-6 border-t border-border/50 flex justify-between items-center">
                <span className="text-foreground font-bold">Total Amount Payable</span>
                <span className="font-bold text-xl text-foreground">{formatCurrency(totalAmount)}</span>
              </div>
            </div>

            <div className="mt-10 p-4 rounded-xl bg-background/50 text-xs text-muted-foreground text-center">
              Disclaimer: These figures are indicative and for illustrative purposes only.
            </div>
          </div>
        </Card>
      </div>

    </div>
  );
}
