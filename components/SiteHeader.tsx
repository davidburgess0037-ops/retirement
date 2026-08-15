export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-xl  text-pine-700">NerdWallet</span>
        
        </a>
        <nav className="hidden items-center gap-7 font-body text-sm text-ink/80 md:flex">
          <a href="#plans" className="hover:text-pine-700">Plan types</a>
          <a href="#path" className="hover:text-pine-700">Find your path</a>
          <a href="#compare" className="hover:text-pine-700">Compare</a>
          <a href="#faq" className="hover:text-pine-700">Questions</a>
        </nav>
        <a
          href="#path"
          className="rounded-full bg-pine-700 px-4 py-2 font-body text-sm font-medium text-paper transition hover:bg-pine-900"
        >
          SignIn
        </a>
      </div>
    </header>
  );
}
