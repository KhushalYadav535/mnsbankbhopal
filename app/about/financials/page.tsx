import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const REPORTS = [
  { year: '2024-25', title: 'Annual Report FY 2024-25', status: 'Latest' },
  { year: '2023-24', title: 'Annual Report FY 2023-24', status: '' },
  { year: '2022-23', title: 'Annual Report FY 2022-23', status: '' },
  { year: '2021-22', title: 'Annual Report FY 2021-22', status: '' },
  { year: '2020-21', title: 'Annual Report FY 2020-21', status: '' },
];

export default function FinancialReportsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <h1 className="text-5xl font-bold text-foreground">Financial Reports</h1>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Transparent financial disclosures reflecting our commitment to accountability and trust.
            </p>
          </div>
        </section>

        <Separator />

        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {REPORTS.map((report) => (
                <Card key={report.year} className="p-6 flex items-center justify-between hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{report.title}</h3>
                      <p className="text-sm text-muted-foreground">Financial Year {report.year}</p>
                    </div>
                    {report.status && (
                      <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold">{report.status}</span>
                    )}
                  </div>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="w-4 h-4" /> Download
                  </Button>
                </Card>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-8">
              For any queries regarding financial disclosures, please contact <a href="mailto:ceo@mnsbankonline.com" className="text-primary hover:underline">ceo@mnsbankonline.com</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
