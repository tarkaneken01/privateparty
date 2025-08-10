export const metadata = {
  title: "About — Private Party",
  description:
    "Private Party crafts exceptional lifestyles with unmatched hotel rates, concierge expertise, and global access.",
};

import LottieAnimation from "@/components/LottieAnimation";

export default function AboutPage() {
  return (
    <main className="relative pt-16">
      {/* Full-width banner with Lottie background */}
      <section className="relative w-full h-60 sm:h-72 md:h-80 overflow-hidden">
        <LottieAnimation path="/lottie/map2.json" className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
      </section>

      {/* Hero */}
      <section className="px-6 sm:px-6 pt-10 md:pt-14 pb-12 md:pb-16">
        <div className="max-w-6xl">
          <div className="text-neutral-300 text-xs tracking-widest uppercase mb-3">
            About
          </div>
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            Crafting exceptional lifestyles worldwide
          </h1>
          <p className="mt-5 max-w-2xl text-neutral-300 text-base sm:text-lg">
            We orchestrate discreet, end‑to‑end service for discerning members. From superior
            hotel pricing to private aviation and rare experiences, your world is handled with
            precision—anytime, anywhere.
          </p>
        </div>
      </section>

      {/* Differentiators */}
      <section className="px-6 sm:px-6 pb-16 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              title: "Unmatched hotel pricing",
              desc:
                "Member rates often 10–20% below public platforms—across leading luxury properties.",
            },
            {
              title: "Dedicated 24/7 manager",
              desc:
                "Direct line to an expert who knows your preferences and executes flawlessly.",
            },
            {
              title: "Global access & privacy",
              desc:
                "A discreet network for tables, events, villas, jets, and more—handled with care.",
            },
          ].map((card) => (
            <div key={card.title} className="border border-white/15 bg-transparent p-5 md:p-6">
              <h2 className="text-white text-lg md:text-xl font-semibold tracking-tight">{card.title}</h2>
              <p className="mt-3 text-neutral-300 text-sm md:text-base">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services overview */}
      <section className="px-6 sm:px-6 pb-16 md:pb-20">
        <div className="max-w-12xl">
          <h2 className="text-white text-xl md:text-2xl font-semibold tracking-tight">What we do</h2>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {[
              {
                k: "Hotels",
                d: "Preferential pricing, suite upgrades, thoughtful amenities—globally.",
              },
              { k: "Travel", d: "Itineraries, transfers, chauffeurs, private aviation." },
              { k: "Yachting", d: "Full‑service charters with curated onboard experience." },
              { k: "Villas", d: "Private estates and retreats with seamless staffing." },
              { k: "Events", d: "Tables, tickets, and private invitations across cities." },
              { k: "Lifestyle", d: "Personal shopping, wellness, property management." },
            ].map((s) => (
              <div key={s.k} className="border border-white/10 p-4">
                <div className="text-neutral-400 text-xs uppercase tracking-wider">{s.k}</div>
                <p className="mt-2 text-sm text-neutral-300">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 sm:px-6 pb-16 md:pb-20">
        <div className="max-w-12xl">
          <h2 className="text-white text-xl md:text-2xl font-semibold tracking-tight">How it works</h2>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { n: "01", t: "Apply", d: "Share goals and preferences. We align on scope and privacy." },
              { n: "02", t: "Onboard", d: "Your lifestyle manager is assigned and profiles prepared." },
              { n: "03", t: "Activate", d: "Bookings and experiences executed with priority access." },
            ].map((st) => (
              <div key={st.n} className="border border-white/15 p-5 md:p-6">
                <div className="text-neutral-500 text-xs tracking-widest">{st.n}</div>
                <h3 className="mt-2 text-white text-lg font-semibold">{st.t}</h3>
                <p className="mt-2 text-neutral-300 text-sm">{st.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 sm:px-6 pb-24 md:pb-28">
        <div className="max-w-12xl border border-white/15 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-white text-2xl font-semibold tracking-tight">Ready to join Private Party?</h3>
            <p className="mt-2 text-neutral-300 text-sm md:text-base max-w-2xl">
              Membership is limited. Submit your application and an operator will be in touch.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="/membership#apply-form"
              className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm sm:text-base font-medium transition-colors hover:bg-neutral-200"
            >
              Apply for membership
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}


