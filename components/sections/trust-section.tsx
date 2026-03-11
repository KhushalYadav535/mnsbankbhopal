"use client";

import React from 'react';
import { motion } from 'framer-motion';
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

  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary/8 to-accent/8 border-y border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7"
        >
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={itemVars}
                className="group flex gap-5 p-6 rounded-2xl bg-card/40 backdrop-blur-md border border-white/10 dark:border-white/5 hover:border-secondary/50 hover:bg-card/60 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-primary/25 to-primary/10 group-hover:from-secondary/30 group-hover:to-secondary/15 transition-all shadow-sm group-hover:shadow-md animate-pulse-ripple">
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
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
