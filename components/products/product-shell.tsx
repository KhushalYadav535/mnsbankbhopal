"use client";

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

interface TabSection {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface ProductShellProps {
  title: string;
  description: string;
  heroImage?: string;
  tabs: TabSection[];
  sidebarContent?: React.ReactNode;
}

export function ProductShell({ title, description, heroImage, tabs, sidebarContent }: ProductShellProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card/10 to-background">
      {/* Product Hero */}
      <div className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground leading-tight">
                {title}
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed max-w-xl">
                {description}
              </p>
            </div>
            {heroImage && (
              <div className="hidden lg:flex justify-end">
                 {/* In a real app we would use Next.js Image component */}
                <div className="w-full max-w-md h-80 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 dark:border-white/5 shadow-2xl backdrop-blur-sm p-4 relative overflow-hidden">
                   <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/80 to-transparent z-10" />
                   {/* Placeholder for actual image */}
                   <div className="w-full h-full rounded-2xl bg-card/50 border border-white/10 flex items-center justify-center text-muted-foreground font-semibold">
                     {title} Illustrated
                   </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Content Tabs & Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
          
          <div className="xl:col-span-2">
            <Tabs defaultValue={tabs[0].id} className="w-full">
              <TabsList className="w-full h-auto flex flex-wrap justify-start gap-2 bg-transparent p-0 mb-8">
                {tabs.map((tab) => (
                  <TabsTrigger 
                    key={tab.id} 
                    value={tab.id}
                    className="px-6 py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg shadow-primary/20 transition-all font-semibold"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {tabs.map((tab) => (
                <TabsContent 
                  key={tab.id} 
                  value={tab.id}
                  className="mt-6 p-8 rounded-3xl bg-card/40 backdrop-blur-md border border-white/10 dark:border-white/5 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500"
                >
                  <div className="prose prose-slate dark:prose-invert max-w-none text-foreground/80 leading-relaxed space-y-4">
                    {tab.content}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          <div className="xl:col-span-1">
            <div className="sticky top-28 space-y-8">
              {sidebarContent}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
