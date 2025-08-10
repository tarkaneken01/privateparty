"use client";

import { useEffect, useRef, useState } from "react";

export default function ApplyInlineSection() {
  const [open, setOpen] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const checkHash = () => {
      if (typeof window === "undefined") return;
      const hash = window.location.hash;
      const shouldOpen = hash === "#apply-form" || hash === "#apply";
      setOpen(shouldOpen);
      if (shouldOpen) {
        // Ensure the section is in view and not hidden under the navbar
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  return (
    <section
      id="apply-form"
      ref={sectionRef}
      className={`px-3 sm:px-4 scroll-mt-24 ${open ? "mb-12 md:mb-16" : ""}`}
    >
      <div
        className={`overflow-hidden transition-[max-height,opacity,transform] duration-500 ease-out ${
          open ? "max-h-[1600px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
        }`}
        aria-hidden={!open}
      >
        <div className="border border-white/15 bg-transparent p-5 md:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-white text-xl md:text-2xl font-semibold tracking-tight">
                Membership application
              </h2>
              <p className="mt-2 text-neutral-300 text-sm md:text-base max-w-2xl">
                Provide a few details and an operator will contact you discreetly.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                if (typeof window !== "undefined") {
                  const { pathname, search } = window.location;
                  history.replaceState(null, "", pathname + search);
                }
              }}
              className="text-neutral-400 hover:text-white text-sm"
            >
              Close
            </button>
          </div>

          <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="fullName" className="block text-sm text-neutral-300 mb-2">
                Full name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                className="w-full bg-transparent text-white border border-white/25 rounded-none px-3 py-2 focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-neutral-300 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full bg-transparent text-white border border-white/25 rounded-none px-3 py-2 focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
                placeholder="name@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm text-neutral-300 mb-2">
                Phone (optional at this stage)
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full bg-transparent text-white border border-white/25 rounded-none px-3 py-2 focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
                placeholder="+1 555 000 0000"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm text-neutral-300 mb-2">
                Company (optional)
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="w-full bg-transparent text-white border border-white/25 rounded-none px-3 py-2 focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
                placeholder="Organization"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="interests" className="block text-sm text-neutral-300 mb-2">
                Interests
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  "Hotel rates",
                  "Private aviation",
                  "Superyachts",
                  "Villas & estates",
                  "Events & dining",
                  "Lifestyle services",
                ].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 text-sm text-neutral-300">
                    <input type="checkbox" className="accent-white/80" /> {opt}
                  </label>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm text-neutral-300 mb-2">
                Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full bg-transparent text-white border border-white/25 rounded-none px-3 py-2 focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
                placeholder="Share your background, passions, and ambitions - how your presence will elevate the community."
              />
            </div>

            <div className="md:col-span-2 flex justify-start pt-1">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm sm:text-base font-medium transition-colors hover:bg-neutral-200"
              >
                Submit application
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}


