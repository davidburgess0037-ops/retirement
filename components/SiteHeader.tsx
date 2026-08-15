"use client";

import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold text-pine-700">
            NerdWallet
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-7 font-body text-sm text-ink/80 md:flex">
          <Link href="/" className="hover:text-pine-700 transition-colors">
            Home
          </Link>

          <Link
            href="/plans"
            className="hover:text-pine-700 transition-colors"
          >
            Plan Types
          </Link>

          <Link
            href="/find-path"
            className="hover:text-pine-700 transition-colors"
          >
            Find Your Path
          </Link>

          <Link
            href="/compare"
            className="hover:text-pine-700 transition-colors"
          >
            Compare
          </Link>

          <Link
            href="/faq"
            className="hover:text-pine-700 transition-colors"
          >
            FAQ
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-full border border-pine-700 px-4 py-2 text-sm font-medium text-pine-700 transition hover:bg-pine-50"
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="rounded-full bg-pine-700 px-4 py-2 text-sm font-medium text-paper transition hover:bg-pine-900"
          >
            Open Account
          </Link>
        </div>
      </div>
    </header>
  );
}