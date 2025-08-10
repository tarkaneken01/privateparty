import Image from "next/image";

type Corner = "tl" | "tr" | "bl" | "br";

function HeadingOverlay({
  text,
  position = "bl",
}: {
  text: string;
  position?: Corner;
}) {
  const posClass =
    position === "tl"
      ? "top-4 left-4"
      : position === "tr"
      ? "top-4 right-4"
      : position === "br"
      ? "bottom-4 right-4"
      : "bottom-4 left-4";
  return (
    <div className={`absolute ${posClass} z-10`}>
      <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold tracking-tight">
        {text}
      </h3>
    </div>
  );
}

type ImageMode = "icon" | "background";

function BentoCard({
  heading,
  imgSrc,
  headingPosition = "bl",
  className = "",
  imageMode = "icon",
  imageCorner = "tr",
  iconWidth = 220,
  iconHeight = 220,
  iconOpacity = 0.9,
}: {
  heading: string;
  imgSrc?: string;
  headingPosition?: Corner;
  className?: string;
  imageMode?: ImageMode;
  imageCorner?: Corner;
  iconWidth?: number;
  iconHeight?: number;
  iconOpacity?: number;
}) {
  return (
    <div className={`relative border border-white/20 rounded-xl overflow-hidden ${className}`}>
      {imageMode === "background" && imgSrc ? (
        <>
          <Image
            src={imgSrc}
            alt={heading}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
          {/* Subtle gradient for legibility when using background */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </>
      ) : null}

      {imageMode === "icon" && imgSrc ? (
        <div
          className={`absolute ${
            imageCorner === "tl"
              ? "top-3 left-3"
              : imageCorner === "tr"
              ? "top-3 right-3"
              : imageCorner === "bl"
              ? "bottom-3 left-3"
              : "bottom-3 right-3"
          }`}
        >
          <Image
            src={imgSrc}
            alt=""
            width={iconWidth}
            height={iconHeight}
            className={`object-contain`}
            style={{ opacity: iconOpacity }}
            priority={false}
          />
        </div>
      ) : null}

      <HeadingOverlay text={heading} position={headingPosition} />
      {/* Maintain aspect ratio on small screens; allow natural height otherwise */}
      <div className="invisible select-none" aria-hidden>
        {/* Spacer to ensure a minimum height when no image is present */}
        &nbsp;
      </div>
    </div>
  );
}

export default function BentoSection() {
  return (
    <section id="bento" className="px-3 sm:px-4 py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {/* Left tall card spanning two rows */}
        <div className="md:row-span-2 min-h-[280px] md:min-h-[540px]">
          <BentoCard
            heading="Exclusive Villas & Retreats"
            imgSrc="/images/luxury-house.png"
            headingPosition="bl"
            imageMode="icon"
            imageCorner="tr"
            iconWidth={460}
            iconHeight={460}
            className="h-full"
          />
        </div>

        {/* Top-right card */}
        <div className="min-h-[200px] md:min-h-[260px]">
          <BentoCard
            heading="Superyacht Escapes"
            imgSrc="/images/yacht.png"
            headingPosition="tr"
            imageMode="icon"
            imageCorner="bl"
            iconWidth={240}
            iconHeight={240}
            className="h-full"
          />
        </div>

        {/* Middle-right card */}
        <div className="min-h-[200px] md:min-h-[260px]">
          <BentoCard
            heading="Private Jet Charters"
            imgSrc="/images/plane.png"
            headingPosition="bl"
            imageMode="icon"
            imageCorner="tr"
            iconWidth={220}
            iconHeight={220}
            className="h-full"
          />
        </div>

        {/* Bottom full-width text-only card */}
        <div className="md:col-span-2 min-h-[220px] md:min-h-[260px]">
          <BentoCard
            heading="Private Events & Access"
            imgSrc="/images/interior.webp"
            headingPosition="br"
            imageMode="background"
            className="h-full"
          />
        </div>
      </div>
    </section>
  );
}


