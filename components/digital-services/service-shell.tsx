import React from 'react';

interface Step {
  title: string;
  description: string;
}

interface ServiceShellProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  benefits: { title: string; description: string; icon: React.ReactNode }[];
  stepsTitle?: string;
  steps?: Step[];
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  layout?: 'left' | 'center';
}

export function ServiceShell({
  title,
  subtitle,
  description,
  icon,
  benefits,
  stepsTitle = "How to Get Started",
  steps,
  primaryAction,
  secondaryAction,
  layout = 'left'
}: ServiceShellProps) {
  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Section */}
      <div className={`flex flex-col ${layout === 'center' ? 'items-center text-center' : 'items-start'} mb-16 relative`}>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 mb-8 backdrop-blur-md shadow-lg shadow-primary/10`}>
          {icon}
        </div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent/10 to-transparent rounded-full border border-accent/20 mb-6">
          <span className="text-sm font-semibold text-accent">{subtitle}</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight max-w-3xl">
          {title}
        </h1>
        
        <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl mb-10">
          {description}
        </p>

        <div className="flex flex-wrap gap-4">
          {primaryAction && (
            <a href={primaryAction.href} className="inline-flex h-14 items-center justify-center rounded-xl bg-primary px-8 font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all">
              {primaryAction.label}
            </a>
          )}
          {secondaryAction && (
            <a href={secondaryAction.href} className="inline-flex h-14 items-center justify-center rounded-xl bg-card/50 backdrop-blur-md border border-white/10 dark:border-white/5 hover:bg-card/80 px-8 font-semibold text-foreground transition-all">
              {secondaryAction.label}
            </a>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20">
        
        {/* Benefits Section */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card/40 backdrop-blur-md border border-white/10 dark:border-white/5 shadow-sm hover:shadow-md hover:border-primary/30 transition-all group">
                <div className="mb-4 text-primary group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Steps Section */}
        {steps && steps.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">{stepsTitle}</h2>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                      {index + 1}
                    </div>
                    {index !== steps.length - 1 && (
                      <div className="w-0.5 h-full bg-border/50 mt-2" />
                    )}
                  </div>
                  <div className="pb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 mt-2">{step.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
