import { plans } from "@/app/data";

export default function PlanGrid() {
  return (
    <section id="plans" className="border-b border-rule bg-sage/40">
      <div className="mx-auto max-w-content px-6 py-16 md:py-20">
        <div className="mb-10 max-w-2xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-700">
            The field guide
          </span>
          <h2 className="mt-2 font-display text-3xl text-pine-900 sm:text-4xl">
            Eight accounts, each built for a different working life
          </h2>
          <p className="mt-3 font-body text-ink/70">
            Every entry notes who it&rsquo;s for, the 2026 contribution ceiling, how it&rsquo;s
            taxed, and the one thing people get tripped up on.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className="group flex flex-col rounded-2xl border border-rule bg-paper p-5 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="font-mono text-xs text-gold-700">{plan.eyebrow}</span>
              <h3 className="mt-1 font-display text-xl text-pine-900">{plan.name}</h3>
              <p className="mt-2 font-body text-sm text-ink/70">{plan.who}</p>

              <dl className="mt-4 space-y-2 border-t border-dashed border-rule pt-4 font-body text-xs">
                <div className="flex justify-between gap-3">
                  <dt className="text-ink/50">2026 limit</dt>
                  <dd className="text-right font-medium text-pine-700">{plan.limit2026}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-ink/50">Taxed</dt>
                  <dd className="text-right font-medium text-pine-700">{plan.taxTreatment}</dd>
                </div>
              </dl>

              <p className="mt-4 flex-1 font-body text-sm leading-relaxed text-ink/75">
                {plan.bestFor}
              </p>

              <p className="mt-4 rounded-lg bg-gold-200/40 px-3 py-2 font-body text-xs leading-relaxed text-pine-900">
                <span className="font-semibold">Watch for:</span> {plan.watchOut}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
