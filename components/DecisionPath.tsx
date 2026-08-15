import Image from "next/image";
import { decisionSteps } from "@/app/data";

export default function DecisionPath() {
  return (
    <section id="path" className="border-b border-rule">
      <div className="mx-auto max-w-content px-6 py-16 md:py-20">
        <div className="mb-12 max-w-2xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-700">
            Find your path
          </span>
          <h2 className="mt-2 font-display text-3xl text-pine-900 sm:text-4xl">
            Work through these four questions, in order
          </h2>
          <p className="mt-3 font-body text-ink/70">
            This is an actual sequence &mdash; each step assumes you&rsquo;ve cleared the one
            before it, the way most planners approach the decision.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-[0.55fr_0.45fr] md:items-start">
          <ol className="space-y-0">
            {decisionSteps.map((step, i) => (
              <li key={step.id} className="relative flex gap-5 pb-10 last:pb-0">
                {i !== decisionSteps.length - 1 && (
                  <span
                    className="absolute left-[19px] top-10 h-full w-px bg-rule"
                    aria-hidden="true"
                  />
                )}
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-pine-700 bg-paper font-display text-lg text-pine-700">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl text-pine-900">{step.question}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-ink/70">
                    {step.detail}
                  </p>
                  <span className="mt-3 inline-block rounded-full bg-sage px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-pine-700">
                    &rarr; {step.leadsTo}
                  </span>
                </div>
              </li>
            ))}
          </ol>

          <div className="relative">
            <div className="overflow-hidden rounded-[24px] border border-rule shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1742841551724-2620db58e1c6?auto=format&fit=crop&w=900&q=80"
                alt="An elderly couple walking together through a park"
                width={900}
                height={1100}
                className="h-full w-full object-cover grayscale"
              />
            </div>
            <p className="mt-3 font-body text-xs text-ink/50">
              The goal at the end of the path isn&rsquo;t a product &mdash; it&rsquo;s this: enough
              years of uninterrupted saving that the choice of account stops mattering as much
              as the habit did.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
