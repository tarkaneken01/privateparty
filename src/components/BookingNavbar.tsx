"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function BookingNavbar() {
  const [compact, setCompact] = useState(false);
  const lastYRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    lastYRef.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastYRef.current;
      if (delta > 2 && !compact) setCompact(true);
      else if (delta < -2 && compact) setCompact(false);
      lastYRef.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [compact]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-18 flex items-center bg-[#050505]/95 backdrop-blur-sm">
      <nav className="relative w-full px-6 sm:px-6 h-full flex items-center">
        {/* Centered logo only when compact */}
        <div
          className={`pointer-events-none absolute left-1/2 top-1/2 -translate-y-1/2 transition-all duration-500 ease-out ${
            compact ? "opacity-100 -translate-x-1/2" : "opacity-0 -translate-x-1/2"
          }`}
        >
          <Link href="/member/" aria-label="Private Party" className="pointer-events-auto block">
            <Image src="/white.png" alt="Private Party" width={120} height={36} className="h-10 w-auto" />
          </Link>
        </div>

        {/* Normal flow */}
        <div className="flex items-center w-full">
          <div
            className={`flex items-center gap-6 transition-opacity duration-300 ${
              compact ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <Link href="/member/" className="shrink-0" aria-label="Private Party">
              <Image src="/white.png" alt="Private Party" width={120} height={36} className="h-10 w-auto" />
            </Link>
            <ul className="hidden md:flex items-center gap-8 px-4 text-md text-white leading-none">
              <li>
                <Link href="/member/" className="hover:text-neutral-300 transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/member/booking" className="hover:text-neutral-300 transition-colors">
                  Booking
                </Link>
              </li>
              <li>
                <Link href="/membership" className="hover:text-neutral-300 transition-colors">
                  Membership
                </Link>
              </li>
            </ul>
          </div>

          <div className={`transition-opacity duration-300 ml-auto ${compact ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
            <Link href="/" className="text-md text-white hover:text-neutral-300 underline transition-colors leading-none">
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}


