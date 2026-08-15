import { faqs } from "@/app/data";

export default function Faq() {
  return (
    <section id="faq" className="border-b border-rule">
      <div className="mx-auto max-w-content px-6 py-16 md:py-20">
        <div className="mb-10 max-w-2xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-700">
            Common questions
          </span>
          <h2 className="mt-2 font-display text-3xl text-pine-900 sm:text-4xl">
            Before you open anything
          </h2>
        </div>

        <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
          {faqs.map((item) => (
            <div key={item.q} className="border-t border-rule pt-5">
              <h3 className="font-display text-lg text-pine-900">{item.q}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink/70">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
