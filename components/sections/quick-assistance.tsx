"use client";

import React from "react";
import { motion } from "framer-motion";
import { Landmark, Handshake, PiggyBank, Calculator } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  {
    title: "Open Account",
    subtitle: "Start your journey in 5 mins",
    icon: <Landmark className="w-8 h-8 flex-shrink-0" />,
    href: "/products/savings-account",
  },
  {
    title: "Apply for Loan",
    subtitle: "Instant approvals, easy process",
    icon: <Handshake className="w-8 h-8 flex-shrink-0" />,
    href: "/products/loans",
  },
  {
    title: "Start Saving",
    subtitle: "High-yield fixed deposits",
    icon: <PiggyBank className="w-8 h-8 flex-shrink-0" />,
    href: "/products/fixed-deposits",
  },
  {
    title: "EMI Calculator",
    subtitle: "Plan your finances instantly",
    icon: <Calculator className="w-8 h-8 flex-shrink-0" />,
    href: "/tools/calculator",
  },
];

export function QuickAssistanceStrip() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section className="relative -mt-16 z-20 max-w-7xl mx-auto px-6 md:px-12">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {quickLinks.map((link, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <Link href={link.href} className="block group h-full">
              <div className="h-full flex items-center gap-5 p-5 bg-card/60 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 relative overflow-hidden group-hover:-translate-y-1.5 group-hover:shadow-[0_15px_40px_rgb(0,0,0,0.1)] group-hover:border-accent/40">
                
                {/* Subtle gradient hover effect inside card */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-primary/0 opacity-0 group-hover:from-accent/5 group-hover:to-primary/5 transition-opacity duration-300" />
                
                <div className="text-primary/70 group-hover:text-primary transition-colors duration-300 z-10">
                  {link.icon}
                </div>
                
                <div className="flex flex-col z-10">
                  <h3 className="font-bold text-lg text-foreground tracking-tight group-hover:text-primary transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground mt-0.5">
                    {link.subtitle}
                  </p>
                </div>
                
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
