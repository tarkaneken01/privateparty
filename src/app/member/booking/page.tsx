"use client";

import Image from "next/image";

export const runtime = "edge";

export default function MemberBookingHome() {
  return (
    <main>
    <section id="search" className="px-4 sm:px-4">
      <div className="mx-auto w-full">
        <form
          className="border border-white/20 bg-transparent rounded-none p-4 md:p-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-4 md:space-y-5">
            {/* Row 1: Destination full width */}
            <div>
              <label htmlFor="destination" className="block text-sm text-neutral-300 mb-2">
                Destination
              </label>
              <input
                id="destination"
                name="destination"
                type="text"
                placeholder="City, hotel, or area"
                className="w-full bg-transparent text-white placeholder-white/60 border border-white/25 rounded-none px-3 py-2 focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
                autoComplete="off"
              />
            </div>

            {/* Row 2: Check-in, Check-out, Guests, Rooms */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5 items-end">
              {/* Check-in */}
              <div>
                <label htmlFor="checkin" className="block text-sm text-neutral-300 mb-2">
                  Check-in
                </label>
                <input
                  id="checkin"
                  name="checkin"
                  type="date"
                  className="w-full bg-transparent text-white border border-white/25 rounded-none px-3 py-2 focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
                />
              </div>

              {/* Check-out */}
              <div>
                <label htmlFor="checkout" className="block text-sm text-neutral-300 mb-2">
                  Check-out
                </label>
                <input
                  id="checkout"
                  name="checkout"
                  type="date"
                  className="w-full bg-transparent text-white border border-white/25 rounded-none px-3 py-2 focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
                />
              </div>

              {/* Guests */}
              <div>
                <label htmlFor="guests" className="block text-sm text-neutral-300 mb-2">
                  Guests
                </label>
                <div className="relative">
                  <select
                    id="guests"
                    name="guests"
                    className="w-full appearance-none bg-transparent text-white border border-white/25 rounded-none px-3 pr-10 py-2 focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
                    defaultValue="2"
                  >
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n} className="bg-[#050505] text-white">
                        {n} {n === 1 ? "guest" : "guests"}
                      </option>
                    ))}
                  </select>
                  {/* Custom chevron */}
                  <svg
                    aria-hidden
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/70"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              {/* Rooms */}
              <div>
                <label htmlFor="rooms" className="block text-sm text-neutral-300 mb-2">
                  Rooms
                </label>
                <div className="relative">
                  <select
                    id="rooms"
                    name="rooms"
                    className="w-full appearance-none bg-transparent text-white border border-white/25 rounded-none px-3 pr-10 py-2 focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
                    defaultValue="1"
                  >
                    {Array.from({ length: 5 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n} className="bg-[#050505] text-white">
                        {n} {n === 1 ? "room" : "rooms"}
                      </option>
                    ))}
                  </select>
                  {/* Custom chevron */}
                  <svg
                    aria-hidden
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/70"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Row 3: Submit button */}
            <div className="flex justify-start">
              <button
                type="submit"
                className="w-full md:w-auto bg-white text-black rounded-xl px-5 py-2 font-medium hover:bg-neutral-200 transition-colors"
              >
                Search
              </button>
            </div>
          </div>
        </form>

        {/* Results list */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              id: 1,
              name: "Aurelia Grand Hotel",
              location: "Paris, France",
              priceOriginal: "$620 / night",
              priceDiscounted: "$545 / night",
              img: "/images/1.webp",
            },
            {
              id: 2,
              name: "The Meridian",
              location: "Dubai, UAE",
              priceOriginal: "$540 / night",
              priceDiscounted: "$468 / night",
              img: "/images/2.webp",
            },
            {
              id: 3,
              name: "Harbor View Suites",
              location: "Sydney, Australia",
              priceOriginal: "$480 / night",
              priceDiscounted: "$425 / night",
              img: "/images/3.webp",
            },
          ].map((hotel) => (
            <article key={hotel.id} className="bg-transparent">
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src={hotel.img}
                  alt={hotel.name}
                  fill
                  className="rounded-lg object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="pt-3">
                <h4 className="text-white text-base sm:text-lg font-semibold tracking-tight">
                  {hotel.name}
                </h4>
                <p className="text-neutral-400 text-sm mt-1">{hotel.location}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="flex items-baseline gap-2">
                    <span className="text-white text-sm sm:text-base font-semibold">
                      {hotel.priceDiscounted}
                    </span>
                    <span className="text-neutral-400 line-through text-sm">
                      {hotel.priceOriginal}
                    </span>
                  </span>
                  <button
                    type="button"
                    className="px-3 py-1 text-sm border border-white/40 text-white rounded-xl hover:bg-white hover:text-black transition-colors"
                  >
                    View
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    </main>
  );
}


