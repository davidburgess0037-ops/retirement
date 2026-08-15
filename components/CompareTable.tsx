import { plans } from "@/app/data";

export default function CompareTable() {
  return (
    <section id="compare" className="border-b border-rule bg-pine-900">
      <div className="mx-auto max-w-content px-6 py-16 md:py-20">
        <div className="mb-8 max-w-2xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-400">
            Side by side
          </span>
          <h2 className="mt-2 font-display text-3xl text-paper sm:text-4xl">
            The whole ledger, at a glance
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-pine-500/40">
          <table className="w-full min-w-[720px] border-collapse font-body text-sm text-paper">
            <thead>
              <tr className="border-b border-pine-500/40 bg-pine-700/40 text-left">
                <th className="px-4 py-3 font-medium text-gold-200">Account</th>
                <th className="px-4 py-3 font-medium text-gold-200">2026 limit</th>
                <th className="px-4 py-3 font-medium text-gold-200">Tax treatment</th>
                <th className="px-4 py-3 font-medium text-gold-200">Who it fits</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan, i) => (
                <tr
                  key={plan.id}
                  className={i % 2 === 0 ? "bg-pine-900" : "bg-pine-700/20"}
                >
                  <td className="px-4 py-3 font-display text-base text-paper">{plan.name}</td>
                  <td className="px-4 py-3 text-pine-100/90">{plan.limit2026}</td>
                  <td className="px-4 py-3 text-pine-100/90">{plan.taxTreatment}</td>
                  <td className="px-4 py-3 text-pine-100/80">{plan.who}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 font-body text-xs text-pine-100/60">
          Figures reflect 2026 IRS limits and are for illustration in this sample &mdash; always
          confirm current limits before making contribution decisions.
        </p>
      </div>
    </section>
  );
}
