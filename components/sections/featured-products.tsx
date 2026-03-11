"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wallet, Home, Gem, CarFront, ArrowRight } from "lucide-react";
import Link from "next/link";
import { TiltCard } from "../tilt-card";

const products = [
  {
    title: "Savings Account",
    desc: "Earn up to 6.50% p.a. with zero hidden fees and full digital access.",
    icon: <Wallet className="w-10 h-10" />,
    href: "/products/savings-account",
    color: "from-blue-500/10 to-transparent",
    iconColor: "text-blue-500"
  },
  {
    title: "Home Loan",
    desc: "Turn your dream home into reality with competitive rates starting at 8.40%.",
    icon: <Home className="w-10 h-10" />,
    href: "/products/loans/home",
    color: "from-emerald-500/10 to-transparent",
    iconColor: "text-emerald-500"
  },
  {
    title: "Gold Loan",
    desc: "Instant liquidity against your gold ornaments with minimal documentation.",
    icon: <Gem className="w-10 h-10" />,
    href: "/products/loans/gold",
    color: "from-accent/20 to-transparent",
    iconColor: "text-accent"
  },
  {
    title: "Car Loan",
    desc: "Drive home your dream car today with up to 100% on-road funding.",
    icon: <CarFront className="w-10 h-10" />,
    href: "/products/loans/car",
    color: "from-indigo-500/10 to-transparent",
    iconColor: "text-indigo-500"
  }
];

export function FeaturedProducts() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 relative">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="h-0.5 w-8 bg-accent" />
            <span className="text-sm font-semibold tracking-widest text-accent uppercase">Explore</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-medium text-foreground tracking-tight"
          >
            Products You'd <span className="italic text-primary/80">Love</span>
          </motion.h2>
        </div>
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <Link href="/products" className="group flex items-center gap-2 font-medium text-primary hover:text-accent transition-colors">
            View all products 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {products.map((product, idx) => (
          <motion.div key={idx} variants={cardVariants} className="h-full">
            <TiltCard className="h-full">
              <Link href={product.href} className="group block h-full">
                <div className="h-full flex flex-col p-8 sm:p-10 rounded-3xl bg-card border border-white/20 dark:border-white/5 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 overflow-hidden relative group-hover:-translate-y-2">
                  
                  {/* Background Gradient Effect */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${product.color} blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className={`mb-auto w-16 h-16 flex items-center justify-center rounded-2xl bg-background border border-border/50 shadow-sm ${product.iconColor} mb-8 group-hover:scale-110 transition-transform duration-500`}>
                      {product.icon}
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-3">{product.title}</h3>
                      <p className="text-foreground/70 leading-relaxed mb-8 font-medium">
                        {product.desc}
                      </p>
                      
                      <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent group-hover:text-primary transition-colors duration-300">
                        Explore {product.title.split(' ')[0]}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
