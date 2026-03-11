import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { EscalationMatrix } from '@/components/compliance/escalation-matrix';
import { FileText, ShieldCheck } from 'lucide-react';

export default function GrievanceRedressalPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-background via-card/10 to-background pt-8 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-transparent rounded-full border border-primary/20 mb-6">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Customer Rights Protection</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Grievance</span> Redressal
            </h1>
            <p className="text-lg text-foreground/70 max-w-3xl leading-relaxed">
              We are committed to serving you with excellence. If our service falls short, our three-level escalation matrix ensures your concerns are addressed fairly and promptly in compliance with RBI guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-8">Escalation Matrix</h2>
              <EscalationMatrix />
            </div>

            <div className="lg:col-span-1 space-y-6">
              <div className="p-6 rounded-2xl bg-card/40 backdrop-blur-md border border-white/10 dark:border-white/5 shadow-sm">
                <h3 className="text-xl font-bold text-foreground mb-4">Important Policies</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="/downloads/grievance-policy.pdf" className="flex items-start gap-3 group">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground group-hover:text-primary transition-colors">Grievance Redressal Policy</p>
                        <p className="text-xs text-muted-foreground mt-1">Download complete bank policy (PDF)</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/downloads/citizens-charter.pdf" className="flex items-start gap-3 group">
                      <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                        <FileText className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground group-hover:text-accent transition-colors">Citizens' Charter</p>
                        <p className="text-xs text-muted-foreground mt-1">Download standard of services (PDF)</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 backdrop-blur-md border border-white/10 dark:border-white/5 shadow-sm text-center">
                <h3 className="text-lg font-bold text-foreground mb-2">Need Immediate Help?</h3>
                <p className="text-sm text-foreground/70 mb-4">Our general customer support team is available 24/7.</p>
                <div className="text-2xl font-bold text-primary mb-1">1800-BANK-123</div>
                <div className="text-sm font-semibold text-foreground/60">Toll-Free Support</div>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
