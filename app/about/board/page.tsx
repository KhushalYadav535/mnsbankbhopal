import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const BOARD_MEMBERS = [
  { name: 'Shri Rajesh Sharma', designation: 'Chairman', since: '2018' },
  { name: 'Shri Anil Gupta', designation: 'Vice Chairman', since: '2019' },
  { name: 'Shri Suresh Patel', designation: 'Managing Director & CEO', since: '2020' },
  { name: 'Smt. Priya Verma', designation: 'Director', since: '2017' },
  { name: 'Shri Vikram Singh', designation: 'Director', since: '2021' },
  { name: 'Smt. Kavita Joshi', designation: 'Director', since: '2019' },
  { name: 'Shri Manoj Kumar', designation: 'Director', since: '2022' },
  { name: 'Shri Deepak Mishra', designation: 'Director', since: '2020' },
];

export default function BoardOfDirectorsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <h1 className="text-5xl font-bold text-foreground">Board of Directors</h1>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Our bank is governed by an experienced and diverse board of directors committed to ethical banking and community development.
            </p>
          </div>
        </section>

        <Separator />

        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {BOARD_MEMBERS.map((member) => (
                <Card key={member.name} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {member.name.split(' ').slice(-1)[0][0]}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground text-lg">{member.name}</h3>
                  <p className="text-accent font-semibold text-sm mt-1">{member.designation}</p>
                  <p className="text-muted-foreground text-xs mt-2">Since {member.since}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
