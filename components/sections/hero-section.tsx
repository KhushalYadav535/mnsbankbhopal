import React from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, TrendingUp, Users } from 'lucide-react';
import { Button } from '../ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-accent/8 pointer-events-none" />
      
      {/* Animated Decorative Elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-accent/15 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-gradient-to-br from-secondary/5 to-transparent rounded-full blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-secondary/15 to-accent/10 rounded-full border border-secondary/40 hover:border-secondary/60 transition-colors">
                <span className="inline-block w-2 h-2 bg-secondary rounded-full"></span>
                <span className="text-sm font-semibold text-secondary">
                  Premium Banking Since 1996
                </span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-display font-bold tracking-tight leading-tight text-foreground">
                Your Trusted<br /><span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">Banking Partner</span>
              </h1>
              
              <p className="text-xl text-foreground/70 leading-relaxed max-w-xl font-light">
                Experience premium banking with MNS Bank. Secure, reliable, and innovative financial solutions for individuals and businesses.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground rounded-lg font-semibold group shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
                asChild
              >
                <Link href="/open-account" className="flex items-center gap-2">
                  Open Your Account
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="rounded-lg font-semibold border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all"
                asChild
              >
                <Link href="/products">Explore Products</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-border/40">
              <div className="space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">28K+</div>
                <p className="text-sm font-medium text-foreground/70">Satisfied Customers</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">₹500Cr+</div>
                <p className="text-sm font-medium text-foreground/70">Assets Under Management</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent">28 Yrs</div>
                <p className="text-sm font-medium text-foreground/70">Banking Excellence</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:mt-0">
            {/* Security */}
            <div className="group p-7 rounded-2xl bg-gradient-to-br from-card to-card/50 hover:from-card/80 hover:to-card/40 border border-border/30 hover:border-secondary/50 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 group-hover:from-secondary/25 group-hover:to-secondary/10 transition-all">
                <Shield className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-lg">Advanced Security</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                RBI-compliant security with industry-leading encryption
              </p>
            </div>

            {/* Growth */}
            <div className="group p-7 rounded-2xl bg-gradient-to-br from-card to-card/50 hover:from-card/80 hover:to-card/40 border border-border/30 hover:border-accent/50 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-5 group-hover:from-accent/25 group-hover:to-accent/10 transition-all">
                <TrendingUp className="w-7 h-7 text-accent group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-lg">Investment Growth</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Competitive interest rates to grow your wealth
              </p>
            </div>

            {/* Community */}
            <div className="group p-7 rounded-2xl bg-gradient-to-br from-card to-card/50 hover:from-card/80 hover:to-card/40 border border-border/30 hover:border-primary/50 transition-all duration-300 cursor-pointer sm:col-span-2 lg:col-span-1 shadow-sm hover:shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 group-hover:from-primary/25 group-hover:to-primary/10 transition-all">
                <Users className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-lg">Community-Focused</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Supporting local Bhopal community since 1996
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
