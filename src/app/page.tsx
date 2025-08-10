import AboutSection from "@/components/AboutSection";
import SearchSection from "@/components/SearchSection";
import BentoSection from "@/components/BentoSection";

export const runtime = "edge";

export default function Home() {
  return (
    <main className="relative pt-16">
      {/* Video should sit directly under the navbar; keep slight side spacing like navbar */}
      <section className="relative h-[calc(100vh-64px)] px-6 sm:px-6 pb-10 md:pb-10">
        <div className="relative h-full">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/videos/vid.mp4"
            autoPlay
            muted
            loop
            playsInline
          />

          {/* Overlay for contrast */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Centered content */}
          <div className="relative z-10 flex h-full items-center justify-center px-4">
            <div className="text-center">
              <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
                Crafting your<br />exceptional lifestyle
              </h1>
              <div className="mt-8">
                <a
                  href="#apply"
                  className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm sm:text-base font-medium transition-colors hover:bg-neutral-200"
                >
                  Apply for membership
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      {/** Keep consistent side spacing with navbar/hero */}
      <AboutSection />

      {/* Search Section */}
      <SearchSection />

      {/* Bento Section */}
      <BentoSection />
    </main>
  );
}
