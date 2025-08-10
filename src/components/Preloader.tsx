"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [logoSrc, setLogoSrc] = useState<string>("/white.png");

  useEffect(() => {
    // The CSS animation performs: visible → hidden → visible (single cycle)
    // We want a short dwell to ensure users notice it
    const totalMs = 1700; // match CSS 1.8s + buffer
    const timer = setTimeout(() => setIsVisible(false), totalMs);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505]">
      <Image
        src={logoSrc}
        alt="Private Party"
        width={140}
        height={140}
        priority
        className="animate-flash select-none"
        onError={() => setLogoSrc("/pp.svg")}
      />
    </div>
  );
}


