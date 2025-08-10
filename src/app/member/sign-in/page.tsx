"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";

export const runtime = "edge";
export default function MemberSignInPage() {
  const [stage, setStage] = useState<"credentials" | "otp">("credentials");
  const otpInputsRef = useRef<Array<HTMLInputElement | null>>([]);

  return (
    <main className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-6 py-24 md:py-32">
      <section className="w-full max-w-md">
        <div className="mb-6 text-center">
          <Image src="/white.png" alt="Private Party" width={160} height={40} className="mx-auto h-16 w-auto mb-4" />
          <div className="text-xs tracking-[0.3em] text-neutral-400 uppercase mb-6">Private Access</div>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight">Member sign‑in</h1>
        </div>

        {stage === "credentials" ? (
          <form
            className="border border-white/20 rounded-lg bg-transparent p-5 md:p-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setStage("otp");
            }}
          >
            <div>
              <label htmlFor="email" className="block text-sm text-neutral-300 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full bg-transparent text-white border border-white/25 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
                placeholder="Email address"
                required
              />
            </div>

            <div>
              <label htmlFor="pass" className="block text-sm text-neutral-300 mb-2">
                Password
              </label>
              <input
                id="pass"
                name="pass"
                type="password"
                className="w-full bg-transparent text-white border border-white/25 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                type="submit"
                className="px-5 py-2 border border-white/40 text-white rounded-lg hover:bg-white hover:text-black transition-colors"
              >
                Continue
              </button>
              <Link href="/" className="text-sm text-neutral-400 hover:text-white transition-colors">
                Back to site
              </Link>
            </div>
          </form>
        ) : (
          <form
            className="border border-white/20 rounded-lg bg-transparent p-5 md:p-6 space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="text-center">
              <div className="text-sm text-neutral-300">Two‑factor authentication</div>
              <p className="mt-1 text-neutral-400 text-xs">Enter the 6‑digit code sent to your email</p>
            </div>

            {(() => {
              const inputsRef = (otpInputsRef.current ||= Array(6).fill(null));
              const setRef = (i: number) => (el: HTMLInputElement | null) => {
                inputsRef[i] = el;
              };

              const focusIndex = (i: number) => {
                const clamped = Math.max(0, Math.min(5, i));
                inputsRef[clamped]?.focus();
                inputsRef[clamped]?.select();
              };

              const fillFrom = (start: number, digits: string) => {
                let idx = start;
                for (const d of digits) {
                  if (idx > 5) break;
                  const input = inputsRef[idx];
                  if (input) input.value = d;
                  idx += 1;
                }
                focusIndex(Math.min(start + digits.length, 5));
              };

              const handleChange = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
                const digits = e.target.value.replace(/\D/g, "");
                if (digits.length <= 1) {
                  e.target.value = digits;
                  if (digits.length === 1) focusIndex(i + 1);
                  return;
                }
                // Paste or multiple digits typed
                e.preventDefault();
                fillFrom(i, digits);
              };

              const handleKeyDown = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
                const input = inputsRef[i];
                if (e.key === "Backspace") {
                  if (input && input.value === "" && i > 0) {
                    const prev = inputsRef[i - 1];
                    prev && (prev.value = "");
                    focusIndex(i - 1);
                    e.preventDefault();
                  }
                } else if (e.key === "ArrowLeft") {
                  focusIndex(i - 1);
                  e.preventDefault();
                } else if (e.key === "ArrowRight") {
                  focusIndex(i + 1);
                  e.preventDefault();
                }
              };

              const handlePaste = (i: number, e: React.ClipboardEvent<HTMLInputElement>) => {
                const text = e.clipboardData.getData("text").replace(/\D/g, "");
                if (!text) return;
                e.preventDefault();
                fillFrom(i, text.slice(0, 6 - i));
              };

              return (
                <div className="flex items-center justify-between gap-2">
                  {Array.from({ length: 6 }).map((_, idx) => (
                    <input
                      key={idx}
                      ref={setRef(idx)}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={1}
                      onChange={(e) => handleChange(idx, e)}
                      onKeyDown={(e) => handleKeyDown(idx, e)}
                      onPaste={(e) => handlePaste(idx, e)}
                      className="w-full text-center bg-transparent text-white border border-white/25 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
                      aria-label={`Digit ${idx + 1}`}
                    />
                  ))}
                </div>
              );
            })()}

            <div className="pt-2 flex items-center justify-between">
              <button
                type="submit"
                className="px-5 py-2 border border-white/40 text-white rounded-lg hover:bg-white hover:text-black transition-colors"
              >
                Verify
              </button>
              <button
                type="button"
                onClick={() => setStage("credentials")}
                className="text-sm text-neutral-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        <p className="mt-4 text-center text-xs text-neutral-500">Discreet access for members only</p>
      </section>
    </main>
  );
}


