export default function SiteFooter() {
  return (
    <footer className="bg-paper">
      <div className="mx-auto max-w-content px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-4 border-t border-rule pt-8 sm:flex-row sm:items-center">
          <span className="font-display text-lg italic text-pine-700">Ledger &amp; Leaf</span>
          <p className="max-w-md font-body text-xs leading-relaxed text-ink/50">
            This is a sample site built to demonstrate a Next.js layout and is not affiliated
            with any financial institution. Contribution limits shown are for 2026 and change
            annually &mdash; verify current figures with the IRS before acting on them.
          </p>
        </div>
      </div>
    </footer>
  );
}
