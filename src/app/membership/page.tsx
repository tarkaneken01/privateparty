import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Membership — Private Party",
  description:
    "Join Private Party to unlock unrivaled hotel rates, priority access, and a dedicated lifestyle team for discreet, world-class experiences.",
};

import ApplyInlineSection from "@/components/ApplyInlineSection";

export const runtime = "edge";

export default function MembershipPage() {
  return (
    <main className="relative pt-16">
      <Navbar />
      {/* Hero */}
      <section className="px-6 sm:px-6 pt-10 md:pt-14 pb-14 md:pb-20">
        <div className="max-w-6xl">
          <div className="text-neutral-300 text-xs tracking-widest uppercase mb-3">
            Membership
          </div>
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            Discretion. Access. Exceptional rates.
          </h1>
          <p className="mt-5 max-w-2xl text-neutral-300 text-base sm:text-lg">
            Join a private circle with 24/7 lifestyle management, priority bookings,
            and hotel rates that consistently outperform public platforms. Designed
            for those who value privacy, precision, and effortless execution.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="#apply-form"
              className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm sm:text-base font-medium transition-colors hover:bg-neutral-200"
            >
              Apply for membership
            </a>
            <a
              href="#benefits"
              className="inline-flex items-center justify-center rounded-full border border-white/30 text-white px-6 py-3 text-sm sm:text-base font-medium hover:bg-white/10 transition-colors"
            >
              Explore benefits
            </a>
          </div>
        </div>
      </section>

      {/* Inline Apply form (appears when #apply in URL) */}
      <ApplyInlineSection />

      {/* Benefits Grid */}
      <section id="benefits" className="px-6 sm:px-6 pb-16 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              title: "Unmatched Hotel Rates",
              desc:
                "Preferential pricing often 10–20% below public sites across leading luxury hotels.",
            },
            {
              title: "Dedicated Lifestyle Manager",
              desc:
                "A single, trusted point of contact to execute your plans with precision—anytime.",
            },
            {
              title: "Priority Access",
              desc:
                "From last‑minute tables to sold‑out events—doors open, even when they shouldn’t.",
            },
            {
              title: "Tailored Itineraries",
              desc:
                "Seamless trips from secluded islands to alpine retreats, crafted around you.",
            },
            {
              title: "Private Aviation & Transport",
              desc:
                "Jet charters, chauffeurs, and secure transfers—coordinated end to end.",
            },
            {
              title: "Global Network",
              desc:
                "A discreet ecosystem of partners and properties across continents.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-white/15 bg-transparent px-5 py-6 md:px-6 md:py-8"
            >
              <h3 className="text-white text-lg md:text-xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-neutral-300 text-sm md:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Rates Highlight */}
      <section className="px-6 sm:px-6 pb-16 md:pb-20">
        <div className="max-w-12xl">
          <div className="border border-white/15 bg-transparent p-5 md:p-7">
            <h3 className="text-white text-xl md:text-2xl font-semibold tracking-tight">
              Member hotel rates that speak for themselves
            </h3>
            <p className="mt-2 text-neutral-300 text-sm md:text-base">
              Typical examples from recent bookings. Actual savings vary by season and availability.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
              {[{
                city: "Paris",
                stay: "8 nights",
                public: "$7,000",
                member: "$6,000 – $6,500",
              },
              {
                city: "New York",
                stay: "5 nights",
                public: "$4,200",
                member: "$3,550 – $3,800",
              },
              {
                city: "Dubai",
                stay: "7 nights",
                public: "$5,800",
                member: "$4,900 – $5,200",
              }].map((row) => (
                <div key={row.city} className="border border-white/10 p-4">
                  <div className="text-neutral-400 text-xs uppercase tracking-wider">
                    {row.city} • {row.stay}
                  </div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-neutral-400 line-through text-sm">{row.public}</span>
                    <span className="text-white text-base font-semibold">{row.member}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="px-6 sm:px-6 pb-16 md:pb-20">
        <div className="max-w-12xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: "01",
                title: "Apply",
                desc: "Share your preferences and priorities—travel patterns, lifestyle, and requirements.",
              },
              {
                step: "02",
                title: "Consult",
                desc: "We align on expectations, privacy, and scope. Your dedicated manager is assigned.",
              },
              {
                step: "03",
                title: "Activate",
                desc: "Access begins—bookings, rates, and experiences, handled end‑to‑end for you.",
              },
            ].map((s) => (
              <div key={s.step} className="border border-white/15 p-5 md:p-6">
                <div className="text-neutral-500 text-xs tracking-widest">{s.step}</div>
                <h4 className="mt-2 text-white text-lg font-semibold">{s.title}</h4>
                <p className="mt-2 text-neutral-300 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="apply" className="px-6 sm:px-6 pb-24 md:pb-28">
        <div className="max-w-12xl border border-white/15 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-white text-2xl font-semibold tracking-tight">
              Ready to join Private Party?
            </h3>
            <p className="mt-2 text-neutral-300 text-sm md:text-base max-w-2xl">
              Membership is limited. Submit your application and an operator will be in touch.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="#apply-form"
              className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm sm:text-base font-medium transition-colors hover:bg-neutral-200"
            >
              Start application
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}


