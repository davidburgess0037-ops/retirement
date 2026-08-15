import Image from "next/image";
import GrowthLine from "./GrowthLine";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-rule">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <div className="flex flex-col justify-center">
        
          <h1 className="text-balance font-display text-4xl leading-[1.08] text-pine-900 sm:text-5xl md:text-[3.4rem]">
            The best retirement plan is the one that matches{" "}
            <em className="text-gold-700">how you earn</em>, not just how much you save.
          </h1>
          <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-ink/75">
            Whether you punch a clock, freelance, or run the whole business, there&rsquo;s an
            account built for your situation. This guide walks through each one, then helps
            you find yours in four questions.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#path"
              className="rounded-full bg-gold-500 px-6 py-3 font-body font-semibold text-pine-900 shadow-sm transition hover:bg-gold-400"
            >
              Find my plan &rarr;
            </a>
            <a
              href="#plans"
              className="font-body text-sm font-medium text-pine-700 underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-pine-900"
            >
              Browse all 8 account types
            </a>
          </div>
          <div className="mt-10 max-w-md">
            <GrowthLine className="w-full" />
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-pine-500">
              What compounding looks like over a career &mdash; illustrative, not a projection
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 -z-10 rounded-[28px] bg-pine-700/10" />
          <div className="overflow-hidden rounded-[24px] border border-rule shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1758691031787-90867cb6fb2c?auto=format&fit=crop&w=1200&q=80"
              alt="A retired couple smiling together at home"
              width={1200}
              height={1400}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden w-48 rounded-2xl border border-rule bg-paper p-4 shadow-lg sm:block">
            <p className="font-display text-2xl text-pine-700">8</p>
            <p className="font-body text-xs leading-snug text-ink/70">
              account types compared side by side in this guide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
