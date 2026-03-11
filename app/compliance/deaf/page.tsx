import React from 'react';
import { DeafSearch } from '@/components/compliance/deaf-search';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FileText, AlertCircle } from 'lucide-react';

export default function DeafPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-background via-card/10 to-background pt-8 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">DEAF / Unclaimed</span> Deposits
            </h1>
            <p className="text-lg text-foreground/70 max-w-3xl leading-relaxed">
              Search the Depositor Education and Awareness Fund (DEAF) registry to find unclaimed bank accounts and deposits as mandated by the RBI.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <DeafSearch />
              
              <div className="mt-12 space-y-6">
                <h3 className="text-2xl font-bold text-foreground">How to Claim Unclaimed Deposits</h3>
                <div className="p-6 rounded-2xl bg-card/40 backdrop-blur-md border border-white/10 dark:border-white/5 shadow-sm space-y-4 text-foreground/80 leading-relaxed">
                  <p>If you find your name or a deceased relative's name in this list, follow these steps to claim the amount:</p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Download and fill out the Claim Form available on our website or branch.</li>
                    <li>Gather valid KYC documents (Aadhaar, PAN, Voter ID, etc.).</li>
                    <li>If claiming on behalf of a deceased depositor, ensure you have the Death Certificate and legal heir documentation.</li>
                    <li>Visit the branch where the account was maintained and submit the documents.</li>
                  </ol>
                  <div className="mt-4 pt-4 border-t border-border/20 flex items-start gap-3">
                    <FileText className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <a href="/downloads/claim-form.pdf" className="text-primary hover:text-accent font-semibold transition-colors">
                      Download Claim Form (PDF)
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 backdrop-blur-md sticky top-28">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Important Notice</h3>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                  Accounts that have had no transactions for 10 years or more are classified as unclaimed and transferred to the RBI's DEAF account.
                </p>
                <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                  Even after transfer, depositors or their legal heirs can legitimately claim their funds from the bank by following the standard KYC procedure.
                </p>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-6 pt-4 border-t border-primary/20">
                  RBI Mandated Disclosure
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
