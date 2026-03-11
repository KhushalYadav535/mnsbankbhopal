"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, BellRing } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const UPDATES = [
  {
    tag: "Special Offer",
    title: "Festive Season Gold Loan Drive",
    date: "October 12, 2024",
    desc: "Avail our lowest ever interest rates on gold loans during this Diwali season. Zero processing fees applied.",
    color: "bg-accent/10 text-accent border-accent/20"
  },
  {
    tag: "Branch Update",
    title: "New ATM Inauguration at MP Nagar",
    date: "September 28, 2024",
    desc: "We are thrilled to announce 24/7 ATM and passbook printing services at our new MP Nagar Zone 1 kiosk.",
    color: "bg-primary/10 text-primary border-primary/20"
  },
  {
    tag: "Careers",
    title: "Hiring: Branch Managers & Clerks",
    date: "September 15, 2024",
    desc: "Join the fastest growing cooperative bank in Bhopal. Open walk-in interviews next Monday at Head Office.",
    color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
  }
];

export function LatestUpdates() {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 relative">
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <BellRing className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold tracking-widest text-accent uppercase">Bank Noticeboard</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-medium text-foreground tracking-tight"
          >
            Latest News & Updates
          </motion.h2>
        </div>
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <Button variant="outline" className="rounded-full rounded-r-none border-r-0">View All Updates</Button>
          <Button className="rounded-full rounded-l-none bg-primary text-primary-foreground px-4"><ArrowUpRight className="w-4 h-4"/></Button>
        </motion.div>
      </div>

      <motion.div 
        variants={containerVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {UPDATES.map((update, idx) => (
          <motion.div key={idx} variants={itemVars}>
            <Link href="#" className="block h-full group">
              <div className="h-full p-8 rounded-3xl bg-card border border-white/20 dark:border-white/5 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col">
                <div className="flex items-start justify-between mb-6 gap-2">
                  <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border ${update.color}`}>
                    {update.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                  {update.title}
                </h3>
                
                <p className="text-foreground/70 leading-relaxed mb-6 font-medium flex-1">
                  {update.desc}
                </p>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-semibold pt-6 border-t border-border/50">
                  <CalendarDays className="w-4 h-4" />
                  {update.date}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
