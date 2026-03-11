"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ from = 0, to, duration = 2, suffix = "" }: { from?: number, to: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(from);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        
        // easeOutQuart
        const ease = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(ease * (to - from) + from));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-display font-medium text-accent">
      {count.toLocaleString('en-IN')}{suffix}
    </span>
  );
}

export function StatsBar() {
  const stats = [
    { value: 25, suffix: "+", label: "Years of Trust" },
    { value: 2, suffix: "", label: "Branch Locations" },
    { value: 6, suffix: ".00%", label: "Best FD Rate" },
    { value: 10000, suffix: "+", label: "Happy Customers" },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-primary text-primary-foreground border-y border-white/10 dark:border-white/5">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-accent/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 text-center divide-x-0 md:divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col items-center justify-center space-y-3"
            >
              <Counter to={stat.value} suffix={stat.suffix} />
              <div className="text-sm md:text-base font-semibold tracking-wider uppercase text-primary-foreground/70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
