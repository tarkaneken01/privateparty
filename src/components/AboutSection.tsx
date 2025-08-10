"use client";

import LottieAnimation from "@/components/LottieAnimation";

export default function AboutSection() {
  return (
    <section id="about" className="px-6 sm:px-6 py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Left column: Heading + Description */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">
            From secluded island retreats to exclusive mountain chalets, we
            curate bespoke travel experiences tailored to your preferences.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-neutral-300">
            With exceptional pricing, we offer you booking prices you&apos;ve never
            seen before.
          </p>
        </div>

        {/* Right column: Lottie animation */}
        <div className="flex items-center justify-end">
          <LottieAnimation
            path="/lottie/airport.json"
            className="w-full max-w-[520px] aspect-[1.2/1]"
          />
        </div>
      </div>
    </section>
  );
}


