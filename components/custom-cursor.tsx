"use client";

import React, { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show on non-touch devices
    const isTouch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (isTouch) return;

    const cursor = cursorRef.current;
    const glow = glowRef.current;
    if (!cursor || !glow) return;

    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX - 6}px`;
      cursor.style.top = `${mouseY - 6}px`;
      cursor.style.opacity = "1";
      glow.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = "0";
      glow.style.opacity = "0";
    };

    // Smooth trailing glow with requestAnimationFrame
    let animId: number;
    const animateGlow = () => {
      glowX += (mouseX - glowX) * 0.12;
      glowY += (mouseY - glowY) * 0.12;
      if (glow) {
        glow.style.left = `${glowX - 20}px`;
        glow.style.top = `${glowY - 20}px`;
      }
      animId = requestAnimationFrame(animateGlow);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    animId = requestAnimationFrame(animateGlow);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" style={{ opacity: 0 }} />
      <div ref={glowRef} className="cursor-glow" style={{ opacity: 0 }} />
    </>
  );
}
