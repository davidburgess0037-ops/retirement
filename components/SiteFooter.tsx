import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-rule bg-paper">
      <div className="mx-auto max-w-content px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-pine-700">
              NerdWallet
            </h3>

            <p className="mt-3 text-sm leading-6 text-ink/70">
              Helping you make smarter financial decisions with trusted
              banking, savings, and investment solutions.
            </p>
          </div>

          {/* Banking */}
          <div>
            <h4 className="mb-4 font-semibold text-pine-900">
              Banking
            </h4>

            <ul className="space-y-2 text-sm text-ink/70">
              <li>
                <Link href="/checking" className="hover:text-pine-700">
                  Checking Accounts
                </Link>
              </li>

              <li>
                <Link href="/savings" className="hover:text-pine-700">
                  Savings Accounts
                </Link>
              </li>

              <li>
                <Link href="/cards" className="hover:text-pine-700">
                  Credit Cards
                </Link>
              </li>

              <li>
                <Link href="/loans" className="hover:text-pine-700">
                  Loans
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 font-semibold text-pine-900">
              Company
            </h4>

            <ul className="space-y-2 text-sm text-ink/70">
              <li>
                <Link href="/about" className="hover:text-pine-700">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/careers" className="hover:text-pine-700">
                  Careers
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-pine-700">
                  Contact
                </Link>
              </li>

              <li>
                <Link href="/support" className="hover:text-pine-700">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 font-semibold text-pine-900">
              Legal
            </h4>

            <ul className="space-y-2 text-sm text-ink/70">
              <li>
                <Link href="/privacy" className="hover:text-pine-700">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms" className="hover:text-pine-700">
                  Terms of Service
                </Link>
              </li>

              <li>
                <Link href="/security" className="hover:text-pine-700">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-rule pt-6 text-sm text-ink/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} NerdWallet. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-pine-700">
              Privacy
            </Link>

            <Link href="/terms" className="hover:text-pine-700">
              Terms
            </Link>

            <Link href="/contact" className="hover:text-pine-700">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}