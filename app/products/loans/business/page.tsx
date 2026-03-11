import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProductShell } from '@/components/products/product-shell';
import { InquiryForm } from '@/components/forms/inquiry-form';
import { KFSPanel } from '@/components/products/kfs-panel';
import { Briefcase, TrendingUp, Building2, CheckCircle2 } from 'lucide-react';

export default function BusinessLoanPage() {
  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <>
          <h2 className="text-2xl font-bold text-foreground mb-4">Empowering Local Enterprises</h2>
          <p>
            From working capital financing to equipment purchases, MNS Bank provides flexible and rapid business lending solutions specifically designed to fuel the growth of MSMEs and local enterprises in Bhopal.
          </p>
          <div className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
              <TrendingUp className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-bold text-foreground">Custom Credit</h4>
              <p className="text-sm text-muted-foreground">Solutions ranging from ₹5 Lakhs to ₹5 Crores</p>
            </div>
            <div className="p-6 rounded-2xl bg-accent/5 border border-accent/10">
              <Briefcase className="w-8 h-8 text-accent mb-3" />
              <h4 className="font-bold text-foreground">Working Capital</h4>
              <p className="text-sm text-muted-foreground">Cash Credit (CC) and Overdraft (OD) facilities</p>
            </div>
            <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/10">
              <Building2 className="w-8 h-8 text-green-500 mb-3" />
              <h4 className="font-bold text-foreground">CGTMSE Coverage</h4>
              <p className="text-sm text-muted-foreground">Collateral-free options under CGTMSE scheme</p>
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
            loanType="MNS Term Loan (MSME)"
            interestRate="12.25%"
            processingFee="1.00% of Sanctioned Limit + GST"
            tenure="Up to 84 Months (including moratorium)"
            emiEstimate="Variable based on Disbursement & Moratorium Phase"
            totalCost="Calculated precisely at the time of sanction based on repayment schedule"
            prepaymentPenalty="Nil for MSME priority sector loans. Otherwise, 2% of principal outstanding."
          />
        </div>
      )
    },
    {
      id: "eligibility",
      label: "Eligibility & Documents",
      content: (
        <>
          <h2 className="text-2xl font-bold text-foreground mb-4">Business Eligibility</h2>
          <ul className="space-y-4 list-none p-0 mb-8">
            <li className="flex gap-3"><CheckCircle2 className="text-primary w-5 h-5 shrink-0 mt-1" /> <strong>Vintage:</strong> Minimum 3 years of continuous business operations.</li>
            <li className="flex gap-3"><CheckCircle2 className="text-primary w-5 h-5 shrink-0 mt-1" /> <strong>Profitability:</strong> Cash profit in the last two consecutive financial years.</li>
            <li className="flex gap-3"><CheckCircle2 className="text-primary w-5 h-5 shrink-0 mt-1" /> <strong>Turnover:</strong> Minimum annual turnover of ₹50 Lakhs.</li>
          </ul>
          
          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Required Documents</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>KYC Documents:</strong> Promoters' PAN and Aadhaar, Business PAN, Udyam Registration.</li>
            <li><strong>Financials:</strong> Audited Balance Sheet and P&L statements for the last 3 years with ITR.</li>
            <li><strong>Bank Statements:</strong> Last 12 months bank statements for all current accounts.</li>
            <li><strong>Project Report:</strong> (If applying for term loans for expansion or machinery purchase).</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <>
      <Header />
      <ProductShell 
        title="Business Loan (MSME)"
        description="Accelerate your business operations with our custom-tailored financial products offering competitive rates and dedicated relationship management."
        heroImage="business-loan-illustration"
        tabs={tabs}
        sidebarContent={
          <InquiryForm 
            title="Request a Call Back" 
            defaultProduct="Business Loan" 
          />
        }
      />
      <Footer />
    </>
  );
}
