import React from 'react';
import { Card } from '../ui/card';
import { Info, AlertTriangle } from 'lucide-react';

interface KFSProps {
  loanType: string;
  interestRate: string;
  processingFee: string;
  tenure: string;
  emiEstimate: string;
  totalCost: string;
  prepaymentPenalty: string;
}

export function KFSPanel({
  loanType,
  interestRate,
  processingFee,
  tenure,
  emiEstimate,
  totalCost,
  prepaymentPenalty
}: KFSProps) {
  return (
    <Card className="p-8 bg-card/40 backdrop-blur-md border border-white/10 dark:border-white/5 shadow-xl relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent/10 to-transparent blur-3xl rounded-full" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-primary/10">
            <Info className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground">Key Facts Statement (KFS)</h3>
            <p className="text-sm text-foreground/70">As mandated by the Reserve Bank of India</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-8">
          <div className="space-y-1 pb-4 border-b border-border/30">
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Loan Type</p>
            <p className="text-lg font-semibold text-foreground">{loanType}</p>
          </div>
          <div className="space-y-1 pb-4 border-b border-border/30">
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Indicative Interest Rate</p>
            <p className="text-lg font-bold text-primary">{interestRate} p.a.</p>
          </div>
          <div className="space-y-1 pb-4 border-b border-border/30 gap-1">
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Estimated EMI</p>
            <p className="text-lg font-bold text-accent">{emiEstimate}</p>
          </div>
          <div className="space-y-1 pb-4 border-b border-border/30">
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Repayment Tenure</p>
            <p className="text-lg font-semibold text-foreground">{tenure}</p>
          </div>
          <div className="space-y-1 pb-4 border-b border-border/30">
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Processing Fee</p>
            <p className="text-lg font-semibold text-foreground">{processingFee}</p>
          </div>
          <div className="space-y-1 pb-4 border-b border-border/30">
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Prepayment Penalty</p>
            <p className="text-lg font-semibold text-foreground">{prepaymentPenalty}</p>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-destructive/5 border border-destructive/20 mt-8">
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-2">Total Estimated Cost of Credit</p>
          <p className="text-3xl font-display font-bold text-destructive mb-2">{totalCost}</p>
          <div className="flex gap-2 items-start mt-4 pt-4 border-t border-destructive/10">
            <AlertTriangle className="w-4 h-4 text-destructive/80 shrink-0 mt-0.5" />
            <p className="text-xs text-destructive/80 font-medium">
              Disclaimer: Rates and calculations are purely indicative and used for illustrative purposes only. The actual terms, rates, EMI, and total cost of credit will be determined at the time of sanction based on the applicant's credit profile and standard bank policies.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
