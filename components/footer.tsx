"use client";

import React from "react";
import Link from "next/link";
import { Landmark, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-card/40 backdrop-blur-3xl border-t-4 border-t-accent pt-20 pb-8 overflow-hidden z-10">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Column 1: Brand & Contact */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground shadow-lg">
                <Landmark className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl text-foreground">
                  MNS Bank
                </span>
                <span className="text-[0.65rem] font-bold tracking-widest uppercase text-muted-foreground mt-0.5">
                  Since 1996
                </span>
              </div>
            </Link>
            
            <p className="text-foreground/70 mb-8 max-w-sm font-medium leading-relaxed">
              Mahanagar Nagrik Sahakari Bank Ltd. — Bhopal's most trusted cooperative banking partner bridging tradition with ultra-modern digital convenience.
            </p>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"><Facebook className="w-5 h-5"/></a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"><Twitter className="w-5 h-5"/></a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"><Linkedin className="w-5 h-5"/></a>
            </div>
          </div>

          {/* Column 2: About Us */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-lg text-foreground mb-2">About Us</h4>
            <Link href="/about/board" className="text-foreground/70 hover:text-primary transition-colors font-medium">Board of Directors</Link>
            <Link href="/about/vision" className="text-foreground/70 hover:text-primary transition-colors font-medium">Vision & Mission</Link>
            <Link href="/about/financials" className="text-foreground/70 hover:text-primary transition-colors font-medium">Financial Reports</Link>
            <Link href="/about/careers" className="text-foreground/70 hover:text-primary transition-colors font-medium">Careers</Link>
          </div>

          {/* Column 3: Products */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-lg text-foreground mb-2">Products & Services</h4>
            <Link href="/products/savings-account" className="text-foreground/70 hover:text-primary transition-colors font-medium">Savings Accounts</Link>
            <Link href="/products/fixed-deposits" className="text-foreground/70 hover:text-primary transition-colors font-medium">Fixed Deposits</Link>
            <Link href="/products/loans" className="text-foreground/70 hover:text-primary transition-colors font-medium">Retail & MSME Loans</Link>
            <Link href="/digital-services/net-banking" className="text-foreground/70 hover:text-primary transition-colors font-medium">Net Banking</Link>
          </div>

          {/* Column 4: Useful Links & Contact Addr */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-lg text-foreground mb-2">Contact Us</h4>
            
            <div className="flex items-start gap-3 mt-1">
              <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <p className="text-sm font-medium text-foreground/70">Head Office, Bairagarhi,<br/>Bhopal - 462030, M.P.</p>
            </div>
            
            <div className="flex items-center gap-3 mt-2">
              <Phone className="w-5 h-5 text-accent shrink-0" />
              <p className="text-sm font-bold text-foreground/80">0755-4098000</p>
            </div>
            
            <div className="flex items-center gap-3 mt-2">
              <Mail className="w-5 h-5 text-accent shrink-0" />
              <p className="text-sm font-bold text-foreground/80">ceo@mnsbankonline.com</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar Segment */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground font-medium text-center md:text-left">
            © {new Date().getFullYear()} Mahanagar Nagrik Sahakari Bank Ltd. All rights reserved.
          </p>
          
          {/* DICGC Badge */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-xl border border-green-500/20 bg-green-500/5">
            <ShieldCheck className="w-5 h-5 text-green-600" />
            <div className="flex flex-col">
               <span className="text-[10px] font-bold uppercase tracking-wider text-green-600/80">Deposits Insured By</span>
               <span className="text-xs font-bold text-green-600">DICGC up to ₹5 Lakhs</span>
            </div>
          </div>
        </div>
        
        {/* Compliance Links */}
        <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
          <Link href="/compliance/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/compliance/grievance" className="hover:text-primary transition-colors">Grievance Redressal</Link>
          <Link href="/compliance/deaf" className="hover:text-primary transition-colors">DEAF Search</Link>
          <Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
        </div>

      </div>
    </footer>
  );
}
