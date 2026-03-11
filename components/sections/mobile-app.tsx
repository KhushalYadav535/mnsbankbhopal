"use client";

import React from "react";
import { motion } from "framer-motion";
import { Landmark, ArrowRightLeft, ShieldCheck, QrCode } from "lucide-react";
import { Button } from "../ui/button";

export function MobileAppSection() {
  const features = [
    { title: "Universal Payments", desc: "IMPS, NEFT, RTGS & UPI all in one secure place.", icon: <ArrowRightLeft className="w-6 h-6" /> },
    { title: "Scan & Pay", desc: "Pay at any merchant using the built-in QR scanner.", icon: <QrCode className="w-6 h-6" /> },
    { title: "Complete Control", desc: "Manage cards, limits, and profiles with military-grade 256-bit encryption.", icon: <ShieldCheck className="w-6 h-6" /> }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Apple-like Phone Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 flex justify-center relative"
          >
            {/* Ambient Background Glow behind phone */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full mix-blend-screen" />
            
            {/* The Phone Hardware Frame */}
            <div className="relative z-10 w-[300px] h-[600px] md:w-[340px] md:h-[680px] bg-card rounded-[3rem] border-[8px] border-foreground/10 shadow-2xl overflow-hidden flex flex-col p-4 ring-1 ring-border shadow-[0_30px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.5)] animate-float">
              {/* Top Notch/Island */}
              <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-20">
                <div className="w-32 h-6 bg-foreground/10 rounded-b-xl" />
              </div>
              
              {/* Mock UI: App Header */}
              <div className="pt-8 pb-4 flex justify-between items-center border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-sm">
                    <Landmark className="w-4 h-4" />
                  </div>
                  <span className="font-serif font-bold text-lg">MNS Mobile</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-muted border border-border flex items-center justify-center relative overflow-hidden">
                   <div className="w-full h-full bg-foreground/20" />
                </div>
              </div>
              
              {/* Mock UI: Body */}
              <div className="flex-1 mt-6 space-y-4">
                <div className="p-5 rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg">
                  <div className="text-xs font-semibold uppercase tracking-widest opacity-80 mb-1">Total Balance</div>
                  <div className="text-3xl font-display font-bold">₹ 4,25,890</div>
                  <div className="mt-4 pt-4 border-t border-white/20 flex justify-between text-sm font-medium">
                    <span>A/c: **** 1234</span>
                    <span>Savings</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-3 py-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                       <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-primary/60">
                         {i === 0 ? <ArrowRightLeft className="w-5 h-5"/> : i === 1 ? <QrCode className="w-5 h-5"/> : <div className="w-4 h-1 bg-primary/40 rounded-full" />}
                       </div>
                       <div className="w-12 h-2 bg-muted rounded-full" />
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-2">
                  <div className="text-sm font-bold">Recent Transactions</div>
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="p-3 rounded-xl bg-card border border-border flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-muted" />
                        <div className="space-y-1.5">
                          <div className="w-20 h-2 bg-muted-foreground/30 rounded-full" />
                          <div className="w-12 h-2 bg-muted rounded-full" />
                        </div>
                      </div>
                      <div className={`w-12 h-3 rounded-full ${i===1 ? 'bg-green-500/50' : 'bg-foreground/50'}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Copy & Features */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-5xl md:text-6xl font-display font-medium text-foreground tracking-tight mb-6 leading-tight">
              Main Jahan, <br/> <span className="italic text-primary">Mera Bank Wahan.</span>
            </h2>
            
            <p className="text-lg text-foreground/70 leading-relaxed mb-10 max-w-lg">
              Carry the entire branch in your pocket. Experience a buttery-smooth interface thoughtfully designed for all your banking needs, natively on iOS and Android.
            </p>

            <div className="space-y-8 mb-12">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 p-3 rounded-xl bg-primary/5 text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-foreground/70">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
               {/* Mock App Store Buttons */}
               <Button size="lg" className="h-14 px-6 rounded-xl bg-foreground text-background hover:bg-foreground/90 transition-transform hover:scale-105 duration-300">
                 Download for Android
               </Button>
               <Button size="lg" variant="outline" className="h-14 px-6 rounded-xl border-border bg-transparent hover:bg-muted transition-transform hover:scale-105 duration-300">
                 Download for iOS
               </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
