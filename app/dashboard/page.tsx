"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getBankState, resetBankState, formatUSD } from "@/lib/bank";

const quickActions = [
  { emoji: "🧾", label: "Pay Bills" },
  { emoji: "💳", label: "Virtual Card" },
  { emoji: "🎁", label: "Rewards" },
  { emoji: "📈", label: "Savings" },
];

function money(n: number) {
  const sign = n < 0 ? "-" : "+";
  return `${sign}${formatUSD(n)}`;
}

export default function DashboardPage() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [bank, setBank] = useState<any>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem("krest_user");

    if (!raw) {
      router.replace("/login");
      return;
    }

    setUser(JSON.parse(raw));
    setBank(getBankState());
  }, [router]);

  const logout = () => {
    localStorage.removeItem("krest_user");
    router.push("/login");
  };

  const handleReset = () => {
    setBank(resetBankState());
  };

  if (!user || !bank) {
    return (
      <main className="grid min-h-screen place-items-center bg-paper">
        <p className="text-sm text-pine-700">Loading your dashboard...</p>
      </main>
    );
  }

  const firstName = user.name?.split(" ")[0] || "User";
  const balanceText = hidden ? "••••••••" : formatUSD(bank.balance);

  return (
    <div className="min-h-screen bg-paper">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-rule bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-pine-700 text-paper font-bold">
              N
            </div>

            <div>
              <p className="font-display text-lg font-bold text-pine-900">
                NerdWallet
              </p>
              <p className="text-xs text-pine-700">
                Banking made simple
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden rounded-full bg-gold-200 px-3 py-1 text-xs font-semibold text-pine-900 md:block">
              Earn $155 Bonus
            </span>

            <button
              onClick={logout}
              className="rounded-lg border border-rule px-4 py-2 text-sm font-medium text-pine-700 transition hover:bg-sage"
            >
              Log Out
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-content px-6 py-8">
        {/* Greeting */}
        <div className="flex items-center gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-lg">
            👤
          </div>

          <div>
            <p className="text-sm text-pine-700">Welcome back</p>
            <h1 className="font-display text-2xl font-bold text-pine-900">
              Hi, {firstName}
            </h1>
          </div>
        </div>

        {/* Balance */}
        <div className="mt-8 flex items-end justify-between">
          <div>
            <p className="text-sm text-pine-700">Total Balance</p>

            <h2 className="mt-2 font-display text-5xl font-bold text-pine-900">
              {balanceText}
            </h2>
          </div>

          <button
            onClick={() => setHidden(!hidden)}
            className="grid h-12 w-12 place-items-center rounded-full bg-white text-xl shadow-lg transition hover:scale-105"
          >
            {hidden ? "🙈" : "👁️"}
          </button>
        </div>

        {/* Accounts */}
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {/* USD Account */}
          <div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-rule">
            <div className="flex items-center justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-sage text-xl">
                🇺🇸
              </div>

              <span className="rounded-full bg-sage px-3 py-1 text-xs font-semibold text-pine-700">
                Primary
              </span>
            </div>

            <h3 className="mt-6 font-display text-3xl font-bold text-pine-900">
              {balanceText}
            </h3>

            <p className="mt-1 text-sm text-pine-700">
              US Dollar Account
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-lg bg-sage px-3 py-2 text-sm text-pine-700">
              🏦 218871272941
            </div>
          </div>

          {/* Card */}
          <div className="rounded-3xl bg-pine-700 p-6 text-paper shadow-xl">
            <p className="text-sm text-sage">
              First Credit Union Virtual Card
            </p>

            <p className="mt-6 font-mono text-xl tracking-[0.3em]">
              4519 •••• •••• 8032
            </p>

            <div className="mt-10 flex items-end justify-between">
              <div>
                <p className="text-xs text-sage">Card Holder</p>
                <p className="font-semibold">{user.name}</p>
              </div>

              <div>
                <p className="text-xs text-sage">Expires</p>
                <p className="font-semibold">09/29</p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-10 flex justify-center gap-10">
          <button className="group flex flex-col items-center gap-2">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-pine-700 text-2xl text-paper shadow-lg transition group-hover:bg-pine-900">
              +
            </span>
            <span className="text-sm font-medium text-pine-900">
              Add Money
            </span>
          </button>

          <Link
            href="/transfer"
            className="group flex flex-col items-center gap-2"
          >
            <span className="grid h-14 w-14 place-items-center rounded-2xl border border-rule bg-white text-xl text-pine-700 shadow-lg transition group-hover:border-pine-500">
              ➤
            </span>
            <span className="text-sm font-medium text-pine-900">
              Send
            </span>
          </Link>

          <button className="group flex flex-col items-center gap-2">
            <span className="grid h-14 w-14 place-items-center rounded-2xl border border-rule bg-white text-xl text-pine-700 shadow-lg transition group-hover:border-pine-500">
              ⇄
            </span>
            <span className="text-sm font-medium text-pine-900">
              Request
            </span>
          </button>
        </div>

        {/* Transactions */}
        <section className="mt-12">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-display text-xl font-bold text-pine-900">
              Recent Transactions
            </h2>

            <button
              onClick={handleReset}
              className="text-sm font-semibold text-pine-700 hover:underline"
            >
              Reset Demo Data
            </button>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-rule">
            {bank.transactions.map((t: any) => (
              <div
                key={t.id}
                className="flex items-center justify-between border-b border-rule px-5 py-4 last:border-b-0"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`grid h-10 w-10 place-items-center rounded-full ${
                      t.type === "in"
                        ? "bg-emerald-100 text-emerald-600"
                        : "bg-sage text-pine-700"
                    }`}
                  >
                    {t.type === "in" ? "↓" : "↑"}
                  </div>

                  <div>
                    <p className="font-semibold text-pine-900">
                      {t.label}
                    </p>

                    <p className="text-xs text-pine-700">
                      {t.date}
                      {t.meta?.reference
                        ? ` • ${t.meta.reference}`
                        : ""}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p
                    className={`font-semibold ${
                      t.amount > 0
                        ? "text-emerald-600"
                        : "text-pine-900"
                    }`}
                  >
                    {hidden ? "••••" : money(t.amount)}
                  </p>

                  <p className="text-xs text-gray-400">
                    {t.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mt-12">
          <h2 className="font-display text-xl font-bold text-pine-900">
            Quick Actions
          </h2>

          <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
            {quickActions.map((item) => (
              <button
                key={item.label}
                className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-rule transition hover:-translate-y-1 hover:ring-pine-300"
              >
                <div className="text-3xl">{item.emoji}</div>

                <p className="mt-3 text-sm font-semibold text-pine-900">
                  {item.label}
                </p>
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}