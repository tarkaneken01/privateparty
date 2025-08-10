import Link from "next/link";
import Image from "next/image";

export const runtime = "edge";

export default function MemberHome() {
  return (
    <main className="px-3 sm:px-4 py-8 md:py-10">
      {/* Welcome hero */}
      <section className="border border-white/15 p-5 md:p-7">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <div className="text-neutral-400 text-xs uppercase tracking-widest">Welcome back,</div>
            <h1 className="mt-1 text-2xl md:text-3xl font-semibold tracking-tight">Tarkan</h1>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-neutral-300">
              <span className="inline-flex items-center gap-2">
                <span className="px-2 py-0.5 border border-white/25 rounded-full text-xs uppercase tracking-wider">Platinum</span>
                <span>•</span>
                <span>ID: PP-3842-01</span>
              </span>
              <Link href="#" className="underline hover:text-white">24/7 line</Link>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="#" className="border border-white/25 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
              Add to Apple Wallet
            </Link>
            <Link href="#" className="border border-white/25 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
              Add to Google Wallet
            </Link>
          </div>
        </div>
      </section>

      {/* Primary actions */}
      <section className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Book a hotel", href: "/member/booking" },
          { label: "New request", href: "#" },
          { label: "Call direct", href: "#" },
          { label: "Message manager", href: "#" },
        ].map((a) => (
          <Link
            key={a.label}
            href={a.href}
            className="border border-white/20 px-4 py-3 text-center hover:bg-white hover:text-black transition-colors"
          >
            {a.label}
          </Link>
        ))}
      </section>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Exclusive rates carousel (simple horizontal scroll) */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Exclusive rates</h2>
              <Link href="#" className="text-sm text-neutral-300 hover:text-white">View all</Link>
            </div>
            <div className="overflow-x-auto">
              <div className="flex gap-4 min-w-full">
                {[
                  { name: "The Aurelia", city: "Paris", public: "$620", member: "$545", img: "/images/1.webp" },
                  { name: "Meridian", city: "Dubai", public: "$540", member: "$468", img: "/images/2.webp" },
                  { name: "Harbor View", city: "Sydney", public: "$480", member: "$425", img: "/images/3.webp" },
                  { name: "Central Park", city: "NYC", public: "$720", member: "$615", img: "/images/1.webp" },
                ].map((h) => (
                  <article key={h.name} className="border border-white/15 w-[360px] shrink-0">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src={h.img} alt={h.name} fill className="object-cover" sizes="(max-width: 768px) 80vw, 360px" />
                    </div>
                    <div className="p-3">
                      <div className="text-sm text-neutral-300">{h.city}</div>
                      <h3 className="text-white font-medium">{h.name}</h3>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-neutral-400 line-through text-sm">{h.public}</span>
                        <span className="text-white font-semibold">{h.member}</span>
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <Link href="#" className="text-sm border border-white/25 px-3 py-1 hover:bg-white hover:text-black">View</Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Invitations */}
          <section className="border border-white/15 p-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Invitations</h2>
              <Link href="#" className="text-sm text-neutral-300 hover:text-white">View all</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2].map((i) => (
                <article key={i} className="border border-white/10 p-4">
                  <div className="text-sm text-neutral-300">March {22 + i}, 8:00 PM • London</div>
                  <h3 className="mt-1 font-medium">Private table — Maison Nuit</h3>
                  <div className="mt-3 flex items-center gap-2">
                    <Link href="#" className="text-sm border border-white/25 px-3 py-1 hover:bg-white hover:text-black">RSVP</Link>
                    <Link href="#" className="text-sm border border-white/25 px-3 py-1 hover:bg-white hover:text-black">Details</Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Upcoming trip */}
          <section className="border border-white/15 p-5">
            <h2 className="text-lg font-semibold">Upcoming trip</h2>
            <div className="mt-3 text-sm text-neutral-300">Apr 18 – Apr 24 • Paris</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Hotel: The Aurelia, Suite</li>
              <li>Car: Chauffeur — airport transfer</li>
              <li>Dining: Atelier Robuchon — 2 guests</li>
            </ul>
            <div className="mt-4 flex items-center gap-2">
              <Link href="#" className="text-sm border border-white/25 px-3 py-1 hover:bg-white hover:text-black">View itinerary</Link>
              <Link href="#" className="text-sm border border-white/25 px-3 py-1 hover:bg-white hover:text-black">Share</Link>
            </div>
          </section>

          {/* Concierge chat */}
          <section className="border border-white/15 p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Concierge</h2>
              <Link href="#" className="text-sm text-neutral-300 hover:text-white">New secure thread</Link>
            </div>
            <div className="mt-3 space-y-3">
              {[{ t:"Dinner this Friday?", time:"2h ago"}, {t:"Flight options to DXB", time:"Yesterday"}].map((m, idx) => (
                <div key={idx} className="flex items-center justify-between border border-white/10 px-3 py-2">
                  <div className="text-sm">{m.t}</div>
                  <div className="text-xs text-neutral-400">{m.time}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}


