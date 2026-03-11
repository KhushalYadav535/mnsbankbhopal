import React from 'react';
import { User, ShieldAlert, Building2, Phone, Mail, Globe } from 'lucide-react';

export function EscalationMatrix() {
  const levels = [
    {
      level: 1,
      title: "Level 1: Branch Manager",
      icon: User,
      description: "First point of contact for resolving banking service issues or transaction disputes.",
      tat: "Resolution within 7 working days",
      contact: "Contact your respective home branch",
    },
    {
      level: 2,
      title: "Level 2: Principal Nodal Officer",
      icon: Building2,
      description: "If your issue remains unresolved or the reply is unsatisfactory within 7 days.",
      tat: "Resolution within 15 working days",
      contactDetails: {
        name: "Shri R. K. Sharma",
        designation: "Chief Compliance Officer & Principal Nodal Officer",
        address: "Head Office, Bairagarhi, Bhopal - 462030",
        phone: "0755-2345678",
        email: "nodalofficer@mnsbankbhopal.com"
      }
    },
    {
      level: 3,
      title: "Level 3: RBI Integrated Ombudsman",
      icon: ShieldAlert,
      description: "If you do not receive a reply within 30 days or remain dissatisfied with the bank's final response.",
      tat: "Independent RBI mechanism",
      rbiLink: "https://cms.rbi.org.in",
      tollFree: "14448"
    }
  ];

  return (
    <div className="space-y-8 relative">
      {/* Connecting line */}
      <div className="hidden md:block absolute left-12 top-10 bottom-10 w-0.5 bg-gradient-to-b from-primary/30 via-accent/30 to-destructive/30 rounded-full" />

      {levels.map((level, index) => {
        const Icon = level.icon;
        return (
          <div key={level.level} className="relative z-10 flex flex-col md:flex-row gap-6 group">
            <div className="shrink-0 flex items-center justify-center w-24 h-24 rounded-2xl bg-card border border-white/10 dark:border-white/5 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 relative z-10 bg-gradient-to-br from-card to-card/50 backdrop-blur-md">
              <Icon className={`w-10 h-10 ${index === 0 ? 'text-primary' : index === 1 ? 'text-accent' : 'text-destructive'}`} />
            </div>
            
            <div className="flex-1 p-6 rounded-2xl bg-card/40 backdrop-blur-md border border-white/10 dark:border-white/5 shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-foreground">{level.title}</h3>
                <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold tracking-wider uppercase inline-flex w-fit">
                  {level.tat}
                </span>
              </div>
              
              <p className="text-foreground/70 mb-5 leading-relaxed">
                {level.description}
              </p>

              {level.contact && (
                <p className="font-medium text-foreground">{level.contact}</p>
              )}

              {level.contactDetails && (
                <div className="p-4 rounded-xl bg-background/50 border border-border/20 space-y-2 text-sm">
                  <p className="font-bold text-foreground">{level.contactDetails.name}</p>
                  <p className="text-muted-foreground mb-2">{level.contactDetails.designation}</p>
                  <div className="flex items-center gap-2 text-foreground/80"><Building2 className="w-4 h-4 text-primary" /> {level.contactDetails.address}</div>
                  <div className="flex items-center gap-2 text-foreground/80"><Phone className="w-4 h-4 text-primary" /> {level.contactDetails.phone}</div>
                  <div className="flex items-center gap-2 text-foreground/80"><Mail className="w-4 h-4 text-primary" /> {level.contactDetails.email}</div>
                </div>
              )}

              {level.rbiLink && (
                <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/20 space-y-3 mt-4">
                  <a href={level.rbiLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-destructive hover:underline font-semibold">
                    <Globe className="w-4 h-4" /> File complaint at cms.rbi.org.in
                  </a>
                  <div className="flex items-center gap-2 font-semibold text-destructive/80">
                    <Phone className="w-4 h-4" /> Toll-Free: {level.tollFree}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
