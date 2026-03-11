"use client";

import React from "react";
import { motion } from "framer-motion";
import { BadgePercent, Car, Home, ReceiptText, Gift, LockKeyhole, Landmark, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { TiltCard } from "../tilt-card";

const LOANS = [
  { title: "Gold Loan", desc: "Unlock the value of your gold instantly.", icon: <BadgePercent className="w-8 h-8" />, rate: "Starts at 8.90%" },
  { title: "Car Loan", desc: "Drive your dream car with up to 100% funding.", icon: <Car className="w-8 h-8" />, rate: "Starts at 9.25%" },
  { title: "Home Loan", desc: "Step into your own home easily.", icon: <Home className="w-8 h-8" />, rate: "Starts at 8.40%" },
  { title: "Personal Loan", desc: "No questions asked financial freedom.", icon: <ReceiptText className="w-8 h-8" />, rate: "Starts at 11.50%" },
  { title: "Festival Loan", desc: "Celebrate without financial worries.", icon: <Gift className="w-8 h-8" />, rate: "Special 10.00%" },
  { title: "Loan Against FD", desc: "Liquidity without breaking your deposits.", icon: <LockKeyhole className="w-8 h-8" />, rate: "FD Rate + 1.5%" },
  { title: "Loan Against Property", desc: "Leverage your real estate for business.", icon: <Building2 className="w-8 h-8" />, rate: "Starts at 9.75%" },
  { title: "House Construction", desc: "Build your dream from the ground up.", icon: <Landmark className="w-8 h-8" />, rate: "Starts at 8.50%" }
];

export function LoanProducts() {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 relative">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-bold tracking-widest uppercase text-foreground/80">Tailored Credit</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-medium text-foreground tracking-tight mb-6"
        >
          Bespoke Loan Solutions
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-foreground/70 leading-relaxed"
        >
          Fast processing, minimal documentation, and highly competitive interest rates designed exclusively for your personal and business aspirations.
        </motion.p>
      </div>

      <motion.div 
        variants={containerVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {LOANS.map((loan, idx) => (
          <motion.div key={idx} variants={itemVars}>
            <TiltCard className="h-full">
              <Link href={`/products/loans/${loan.title.toLowerCase().replace(/ /g, '-')}`} className="block h-full cursor-pointer">
                <div className="h-full flex flex-col p-6 rounded-3xl bg-card/40 backdrop-blur-md border border-white/20 dark:border-white/5 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden">
                  
                  {/* Accent border on hover only */}
                  <div className="absolute inset-0 border-2 border-accent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300 pointer-events-none" />
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-primary/5 text-primary rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {loan.icon}
                    </div>
                    <div className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full border border-accent/20">
                      {loan.rate}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{loan.title}</h3>
                  <p className="text-sm font-medium text-muted-foreground leading-relaxed mb-4 flex-grow">{loan.desc}</p>
                  
                  <div className="flex items-center gap-1.5 text-sm font-bold text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Read More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 text-center"
      >
        <Button variant="outline" className="rounded-full px-8 h-12 font-bold text-base hover:bg-primary hover:text-primary-foreground hover:border-transparent transition-all">
          View All Loan Details
        </Button>
      </motion.div>

    </section>
  );
}
