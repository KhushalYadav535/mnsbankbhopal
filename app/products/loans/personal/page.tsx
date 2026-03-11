import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProductShell } from '@/components/products/product-shell';
import { InquiryForm } from '@/components/forms/inquiry-form';
import { KFSPanel } from '@/components/products/kfs-panel';
import { CheckCircle2, Zap, Clock, Landmark } from 'lucide-react';

export default function PersonalLoanPage() {
  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <>
          <h2 className="text-2xl font-bold text-foreground mb-4">Fulfill Your Dreams Instantly</h2>
          <p>
            Whether it's a medical emergency, a dream wedding, or home renovation, our MNS Personal Loan provides you the immediate financial assistance you need with minimal documentation and rapid disbursal.
          </p>
          <div className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
              <Zap className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-bold text-foreground">Instant Approval</h4>
              <p className="text-sm text-muted-foreground">In-principle approval within 24 hours</p>
            </div>
            <div className="p-6 rounded-2xl bg-accent/5 border border-accent/10">
              <Clock className="w-8 h-8 text-accent mb-3" />
              <h4 className="font-bold text-foreground">Flexible Tenure</h4>
              <p className="text-sm text-muted-foreground">Choose repayment anywhere from 12 to 60 months</p>
            </div>
            <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/10">
              <Landmark className="w-8 h-8 text-green-500 mb-3" />
              <h4 className="font-bold text-foreground">No Collateral</h4>
              <p className="text-sm text-muted-foreground">Unsecured loan requiring zero security</p>
            </div>
          </div>
        </>
      )
    },
    {
      id: "kfs",
      label: "Key Facts & Pricing",
      content: (
        <div className="mt-8">
          <KFSPanel 
            loanType="MNS Personal Loan"
            interestRate="11.50%"
            processingFee="1.50% of Loan Amount + GST"
            tenure="Maximum up to 60 Months"
            emiEstimate="₹2,199 per Lakh (For 60 Months)"
            totalCost="₹1,31,940 (Repaying ₹1 Lakh over 5 years)"
            prepaymentPenalty="2% on Principal Outstanding if closed before 12 months. Nil thereafter."
          />
        </div>
      )
    },
    {
      id: "eligibility",
      label: "Eligibility & Documents",
      content: (
        <>
          <h2 className="text-2xl font-bold text-foreground mb-4">Who Can Apply?</h2>
          <ul className="space-y-4 list-none p-0 mb-8">
            <li className="flex gap-3"><CheckCircle2 className="text-primary w-5 h-5 shrink-0 mt-1" /> <strong>Age:</strong> Minimum 21 years and maximum 60 years at loan maturity.</li>
            <li className="flex gap-3"><CheckCircle2 className="text-primary w-5 h-5 shrink-0 mt-1" /> <strong>Income:</strong> Minimum net monthly income of ₹25,000 for salaried individuals.</li>
            <li className="flex gap-3"><CheckCircle2 className="text-primary w-5 h-5 shrink-0 mt-1" /> <strong>Experience:</strong> At least 2 years of total work experience (1 year with current employer).</li>
          </ul>
          
          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Required Documents</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>KYC Documents:</strong> Copy of Aadhaar, PAN Card, and Utility Bill.</li>
            <li><strong>Income Proof:</strong> Last 3 months Salary Slips.</li>
            <li><strong>Bank Statements:</strong> Last 6 months bank statement showing salary credits.</li>
            <li><strong>Employment Proof:</strong> Employee ID Card and Appointment Letter.</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <>
      <Header />
      <ProductShell 
        title="Personal Loan"
        description="Experience complete financial freedom with our low-interest, fast-processing personal loans designed around your unique needs."
        heroImage="personal-loan-illustration"
        tabs={tabs}
        sidebarContent={
          <InquiryForm 
            title="Apply for Personal Loan" 
            defaultProduct="Personal Loan" 
          />
        }
      />
      <Footer />
    </>
  );
}
