import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const OPENINGS = [
  { title: 'Branch Manager', location: 'Bhopal', type: 'Full-time', department: 'Operations' },
  { title: 'IT Officer', location: 'Bhopal - Head Office', type: 'Full-time', department: 'Technology' },
  { title: 'Loan Officer', location: 'Bhopal', type: 'Full-time', department: 'Credit' },
  { title: 'Customer Service Executive', location: 'Bhopal', type: 'Full-time', department: 'Retail Banking' },
];

export default function CareersPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <h1 className="text-5xl font-bold text-foreground">Careers at MNS Bank</h1>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Join a team that values integrity, innovation, and impact. Build your career with Bhopal's most trusted cooperative bank.
            </p>
          </div>
        </section>

        <Separator />

        <section className="py-16 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Current Openings</h2>
            <p className="text-foreground/70 mb-8">Explore opportunities to make a difference in cooperative banking.</p>

            <div className="space-y-4">
              {OPENINGS.map((job) => (
                <Card key={job.title} className="p-6 hover:shadow-lg transition-shadow group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" />{job.department}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{job.location}</span>
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{job.type}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="gap-2 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-transparent transition-all whitespace-nowrap">
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-accent/5 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-2">Don't see a role that fits?</h3>
              <p className="text-foreground/70 mb-4">Send us your resume and we'll keep you in mind for future opportunities.</p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <a href="mailto:hr@mnsbankonline.com">
                  Email Your Resume
                </a>
              </Button>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
