"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "../ui/button";

export function DepositRates() {
  return (
    <section className="py-24 relative overflow-hidden">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-background to-background" />
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-blob" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-blob animation-delay-4000" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/10 mb-6">
              <TrendingUp className="w-4 h-4 text-accent" />
              <span className="text-sm font-bold tracking-widest uppercase text-accent">Wealth Growth</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground tracking-tight mb-6">
              Outperform Inflation <br/> with Unmatched Returns.
            </h2>
            
            <p className="text-lg text-foreground/70 leading-relaxed mb-8 max-w-lg">
              Secure your future with MNS Bank's premium Fixed Deposits. Enjoy industry-leading interest rates backed by unparalleled cooperative trust and DICGC insurance.
            </p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 font-medium text-foreground/80">
                <div className="p-1 rounded-full bg-primary/10 text-primary">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                Senior Citizens get an extra +0.25% p.a.
              </li>
              <li className="flex items-center gap-3 font-medium text-foreground/80">
                <div className="p-1 rounded-full bg-primary/10 text-primary">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                Bank Staff get an extra +1.00% p.a.
              </li>
            </ul>

            <Button className="h-14 px-8 text-lg rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
              Open Fixed Deposit <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Mega Offer Card 1 */}
            <div className="relative p-8 md:p-10 rounded-[2rem] bg-gradient-to-br from-card/80 to-card border border-white/20 dark:border-white/5 shadow-2xl overflow-hidden group">
              <div className="absolute inset-x-0 inset-y-0 opacity-10 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:animate-shimmer" />
              
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 relative z-10">
                <div>
                  <div className="text-accent font-bold tracking-widest uppercase text-sm mb-2">Special Deposit Scheme</div>
                  <div className="text-4xl md:text-5xl font-serif font-bold text-foreground">360 Days</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Interest Rate</div>
                  <div className="text-5xl md:text-6xl font-display font-medium text-primary">6.00<span className="text-2xl text-primary/60">%</span></div>
                </div>
              </div>
            </div>

            {/* Mega Offer Card 2 */}
            <div className="relative p-8 md:p-10 rounded-[2rem] bg-card/40 backdrop-blur-md border border-white/20 dark:border-white/5 shadow-lg overflow-hidden group hover:border-accent/30 transition-colors duration-500">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 relative z-10">
                <div>
                  <div className="text-muted-foreground font-bold tracking-widest uppercase text-sm mb-2">Short Term Premium</div>
                  <div className="text-3xl md:text-4xl font-serif font-bold text-foreground">222 Days</div>
                </div>
                <div className="text-right">
                  <div className="text-5xl font-display font-medium text-foreground">5.50<span className="text-2xl text-muted-foreground">%</span></div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
