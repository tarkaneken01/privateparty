"use client";

import { useEffect, useRef } from "react";

type LottieAnimationProps = {
  path: string;
  className?: string;
};

type LottieModule = {
  loadAnimation: (options: {
    container: Element;
    renderer: "svg" | "canvas" | "html";
    loop: boolean;
    autoplay: boolean;
    path: string;
    rendererSettings?: Record<string, unknown>;
  }) => { destroy: () => void };
};

export default function LottieAnimation({ path, className }: LottieAnimationProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    let isCancelled = false;

    async function load() {
      const mod: LottieModule = (await import("lottie-web")) as unknown as LottieModule;
      if (isCancelled || !containerRef.current) return;
      animationRef.current = mod.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid meet",
          progressiveLoad: true,
          hideOnTransparent: true,
        },
      });
    }

    load();
    return () => {
      isCancelled = true;
      if (animationRef.current) {
        try {
          animationRef.current.destroy();
        } catch {}
      }
    };
  }, [path]);

  return <div ref={containerRef} className={className} />;
}


