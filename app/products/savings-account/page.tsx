import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProductShell } from '@/components/products/product-shell';
import { InquiryForm } from '@/components/forms/inquiry-form';
import { CheckCircle2, ShieldCheck, Wallet } from 'lucide-react';

export default function SavingsAccountPage() {
  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <>
          <h2 className="text-2xl font-bold text-foreground mb-4">Grow Your Wealth Safely</h2>
          <p>
            MNS Bank’s Savings Account is designed to help you save for the future while maintaining liquid access to your funds. With competitive interest rates and zero hidden charges, managing your daily finances has never been easier.
          </p>
          <div className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
              <ShieldCheck className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-bold text-foreground">DICGC Insured</h4>
              <p className="text-sm text-muted-foreground">Up to ₹5 Lakhs insured per RBI guidelines</p>
            </div>
            <div className="p-6 rounded-2xl bg-accent/5 border border-accent/10">
              <Wallet className="w-8 h-8 text-accent mb-3" />
              <h4 className="font-bold text-foreground">6.50% p.a.</h4>
              <p className="text-sm text-muted-foreground">Competitive interest rates paid quarterly</p>
            </div>
            <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/10">
              <CheckCircle2 className="w-8 h-8 text-green-500 mb-3" />
              <h4 className="font-bold text-foreground">Zero Charges</h4>
              <p className="text-sm text-muted-foreground">No monthly maintenance fees</p>
            </div>
          </div>
        </>
      )
    },
    {
      id: "features",
      label: "Features & Benefits",
      content: (
        <>
          <h2 className="text-2xl font-bold text-foreground mb-4">Unmatched Account Benefits</h2>
          <ul className="space-y-4 list-none p-0">
            <li className="flex gap-3"><CheckCircle2 className="text-primary w-5 h-5 shrink-0 mt-1" /> <strong>Free Debit Card:</strong> Contactless standard RuPay debit card free for the first year.</li>
            <li className="flex gap-3"><CheckCircle2 className="text-primary w-5 h-5 shrink-0 mt-1" /> <strong>Digital Banking:</strong> 24/7 access via Net Banking and Mobile App with IMPS/NEFT/RTGS capabilities.</li>
            <li className="flex gap-3"><CheckCircle2 className="text-primary w-5 h-5 shrink-0 mt-1" /> <strong>Any-Branch Banking:</strong> Deposit or withdraw cash easily at any MNS Bank branch.</li>
            <li className="flex gap-3"><CheckCircle2 className="text-primary w-5 h-5 shrink-0 mt-1" /> <strong>Auto-Sweep Facility:</strong> Automatically transfer excess balances to a flexi-FD for higher returns.</li>
          </ul>
        </>
      )
    },
    {
      id: "eligibility",
      label: "Eligibility & Documents",
      content: (
        <>
          <h2 className="text-2xl font-bold text-foreground mb-4">Who Can Open?</h2>
          <p>The MNS Regular Savings Account can be opened by resident individuals (sole or joint), Hindu Undivided Families (HUF), and Minors (above 10 years, under guardianship).</p>
          
          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Required Documents for KYC</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Identity Proof:</strong> Aadhaar Card, PAN Card, Voter ID, Passport, or Driving License.</li>
            <li><strong>Address Proof:</strong> Aadhaar Card, Recent Utility Bill, Bank Statement, or Rent Agreement.</li>
            <li><strong>Photographs:</strong> 2 recent passport-size color photographs.</li>
            <li><strong>PAN Card:</strong> Mandatory for all account holders (or Form 60).</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <>
      <Header />
      <ProductShell 
        title="Regular Savings Account"
        description="A smart, secure way to build your savings. Enjoy premium banking features, robust interest rates, and seamless digital access 24/7."
        heroImage="savings-hero"
        tabs={tabs}
        sidebarContent={
          <InquiryForm 
            title="Open an Account" 
            defaultProduct="Savings Account" 
          />
        }
      />
      <Footer />
    </>
  );
}
