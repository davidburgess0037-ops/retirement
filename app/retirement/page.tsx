// app/retirement/page.tsx
"use client";

import { useState, useMemo, ChangeEvent } from "react";
import { formatUSD } from "@/lib/bank"; // reuse your currency formatter

// --- Helper functions ---

/**
 * Calculate future value of monthly contributions with compound interest.
 * Formula: FV = P * ((1 + r)^n - 1) / r  +  PV * (1 + r)^n
 * where:
 *   PV = current savings (present value)
 *   P  = monthly contribution (deposit per period)
 *   r  = monthly rate (annual return / 12)
 *   n  = total number of months
 */
function calculateRetirement(
  currentSavings: number,
  monthlyContribution: number,
  annualReturn: number,
  currentAge: number,
  retirementAge: number
) {
  const months = (retirementAge - currentAge) * 12;
  if (months <= 0) return null;

  const monthlyRate = annualReturn / 100 / 12;
  const fv =
    currentSavings * Math.pow(1 + monthlyRate, months) +
    monthlyContribution * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);

  const totalContributions =
    currentSavings + monthlyContribution * months;
  const earnings = fv - totalContributions;

  return {
    futureValue: fv,
    totalContributions,
    earnings,
    months,
    years: months / 12,
  };
}

// --- Component ---

export default function RetirementPage() {
  // State
  const [currentAge, setCurrentAge] = useState<number>(30);
  const [retirementAge, setRetirementAge] = useState<number>(65);
  const [currentSavings, setCurrentSavings] = useState<number>(10000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(500);
  const [annualReturn, setAnnualReturn] = useState<number>(7);

  // Compute result
  const result = useMemo(() => {
    return calculateRetirement(
      currentSavings,
      monthlyContribution,
      annualReturn,
      currentAge,
      retirementAge
    );
  }, [currentAge, retirementAge, currentSavings, monthlyContribution, annualReturn]);

  // Input handlers
  const handleNumberInput =
    (setter: (v: number) => void) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const val = parseFloat(e.target.value);
      if (!isNaN(val) && val >= 0) setter(val);
    };

  return (
    <div className="min-h-screen bg-sage py-12 px-4">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <h1 className="font-display text-4xl font-bold text-pine-900 text-center">
          Retirement Savings Planner
        </h1>
        <p className="mt-2 text-center text-sm text-pine-700/70">
          See how your savings can grow over time.
        </p>

        {/* Main grid */}
        <div className="mt-8 grid gap-8 md:grid-cols-5">
          {/* Inputs – left side (3 cols) */}
          <div className="md:col-span-3 space-y-6 rounded-3xl bg-white p-6 shadow-card ring-1 ring-rule">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Current Age */}
              <div>
                <label className="label" htmlFor="currentAge">
                  Current Age
                </label>
                <input
                  id="currentAge"
                  type="number"
                  min={18}
                  max={80}
                  value={currentAge}
                  onChange={handleNumberInput(setCurrentAge)}
                  className="input"
                />
              </div>

              {/* Retirement Age */}
              <div>
                <label className="label" htmlFor="retirementAge">
                  Retirement Age
                </label>
                <input
                  id="retirementAge"
                  type="number"
                  min={currentAge + 1}
                  max={100}
                  value={retirementAge}
                  onChange={handleNumberInput(setRetirementAge)}
                  className="input"
                />
              </div>

              {/* Current Savings */}
              <div>
                <label className="label" htmlFor="currentSavings">
                  Current Savings ($)
                </label>
                <input
                  id="currentSavings"
                  type="number"
                  min={0}
                  step={100}
                  value={currentSavings}
                  onChange={handleNumberInput(setCurrentSavings)}
                  className="input"
                />
              </div>

              {/* Monthly Contribution */}
              <div>
                <label className="label" htmlFor="monthlyContribution">
                  Monthly Contribution ($)
                </label>
                <input
                  id="monthlyContribution"
                  type="number"
                  min={0}
                  step={50}
                  value={monthlyContribution}
                  onChange={handleNumberInput(setMonthlyContribution)}
                  className="input"
                />
              </div>

              {/* Annual Return */}
              <div className="sm:col-span-2">
                <label className="label" htmlFor="annualReturn">
                  Expected Annual Return (%)
                </label>
                <input
                  id="annualReturn"
                  type="number"
                  min={0}
                  max={20}
                  step={0.5}
                  value={annualReturn}
                  onChange={handleNumberInput(setAnnualReturn)}
                  className="input"
                />
              </div>
            </div>

            {/* Quick preset buttons */}
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="text-xs text-gray-400">Presets:</span>
              <button
                onClick={() => {
                  setCurrentAge(30);
                  setRetirementAge(65);
                  setCurrentSavings(15000);
                  setMonthlyContribution(600);
                  setAnnualReturn(7);
                }}
                className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium hover:bg-gray-50"
              >
                Conservative
              </button>
              <button
                onClick={() => {
                  setCurrentAge(35);
                  setRetirementAge(62);
                  setCurrentSavings(50000);
                  setMonthlyContribution(1200);
                  setAnnualReturn(8);
                }}
                className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium hover:bg-gray-50"
              >
                Aggressive
              </button>
              <button
                onClick={() => {
                  setCurrentAge(45);
                  setRetirementAge(67);
                  setCurrentSavings(80000);
                  setMonthlyContribution(1500);
                  setAnnualReturn(6);
                }}
                className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium hover:bg-gray-50"
              >
                Late Starter
              </button>
            </div>
          </div>

          {/* Results – right side (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            {result ? (
              <>
                <div className="rounded-3xl bg-pine-900 p-6 text-white shadow-card">
                  <p className="text-sm font-light uppercase tracking-wider text-pine-300">
                    Projected Balance at Retirement
                  </p>
                  <p className="font-display text-4xl font-bold">
                    {formatUSD(result.futureValue)}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-sm">
                    <span className="rounded-full bg-pine-700 px-2 py-0.5 text-pine-200">
                      {result.years.toFixed(1)} years
                    </span>
                    <span className="text-pine-400">•</span>
                    <span className="text-pine-300">
                      {result.months} months
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white p-4 text-center shadow-card ring-1 ring-rule">
                    <p className="text-xs uppercase tracking-wider text-gray-400">
                      Total Contributions
                    </p>
                    <p className="font-display text-xl font-bold text-pine-800">
                      {formatUSD(result.totalContributions)}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white p-4 text-center shadow-card ring-1 ring-rule">
                    <p className="text-xs uppercase tracking-wider text-gray-400">
                      Investment Earnings
                    </p>
                    <p className="font-display text-xl font-bold text-gold-500">
                      {formatUSD(result.earnings)}
                    </p>
                  </div>
                </div>

                {/* Progress bar showing how much is from contributions vs earnings */}
                <div className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-rule">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Contributions</span>
                    <span>Earnings</span>
                  </div>
                  <div className="mt-1 h-3 w-full overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full bg-pine-500 transition-all duration-500"
                      style={{
                        width: `${(result.totalContributions / result.futureValue) * 100}%`,
                      }}
                    />
                    <div
                      className="h-full bg-gold-400 transition-all duration-500"
                      style={{
                        width: `${(result.earnings / result.futureValue) * 100}%`,
                        marginTop: "-0.75rem",
                      }}
                    />
                  </div>
                  <div className="mt-1 flex justify-between text-xs text-gray-500">
                    <span>{(result.totalContributions / result.futureValue * 100).toFixed(0)}%</span>
                    <span>{(result.earnings / result.futureValue * 100).toFixed(0)}%</span>
                  </div>
                </div>
              </>
            ) : (
              <div className="rounded-3xl bg-white p-6 text-center text-gray-500 shadow-card">
                Please ensure retirement age is greater than current age.
              </div>
            )}
          </div>
        </div>

        {/* Small note */}
        <p className="mt-8 text-center text-xs text-gray-400">
          This is a simplified projection. Actual returns may vary.
        </p>
      </div>
    </div>
  );
}