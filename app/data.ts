export type Plan = {
  id: string;
  name: string;
  who: string;
  eyebrow: string;
  limit2026: string;
  taxTreatment: string;
  bestFor: string;
  watchOut: string;
};

export const plans: Plan[] = [
  {
    id: "401k",
    name: "401(k)",
    eyebrow: "01",
    who: "You have an employer that offers one",
    limit2026: "$24,500 ($32,500 if 50+)",
    taxTreatment: "Pre-tax in, taxed on withdrawal",
    bestFor:
      "Anyone whose employer offers a match — it's the closest thing to free money in personal finance, so contribute at least enough to capture the full match before funding anything else.",
    watchOut:
      "Investment choices are limited to whatever menu your plan administrator picked, and fees vary a lot from employer to employer.",
  },
  {
    id: "roth-401k",
    name: "Roth 401(k)",
    eyebrow: "02",
    who: "Your employer offers one and you expect a higher tax rate later",
    limit2026: "$24,500 ($32,500 if 50+), shared with a traditional 401(k)",
    taxTreatment: "After-tax in, withdrawals tax-free in retirement",
    bestFor:
      "Early-career savers in a low tax bracket now who'd rather pay tax on a smaller number today than a larger one decades from now.",
    watchOut:
      "You don't get a deduction today, so your paycheck takes a bigger hit than an equivalent traditional contribution would.",
  },
  {
    id: "trad-ira",
    name: "Traditional IRA",
    eyebrow: "03",
    who: "You want savings outside your workplace plan, or have no plan at all",
    limit2026: "$7,500 ($8,600 if 50+)",
    taxTreatment: "May be deductible now, taxed on withdrawal",
    bestFor:
      "Filling gaps a 401(k) doesn't cover, or as your primary account if your employer offers nothing at all.",
    watchOut:
      "If you're covered by a workplace plan and your income is high enough, the deduction phases out — you can still contribute, just without the up-front tax break.",
  },
  {
    id: "roth-ira",
    name: "Roth IRA",
    eyebrow: "04",
    who: "Your income is under the limit and you want tax-free growth",
    limit2026: "$7,500 ($8,600 if 50+), income limits apply",
    taxTreatment: "After-tax in, withdrawals and growth tax-free",
    bestFor:
      "Long time horizons — decades of tax-free compounding is the whole point — and for savers who want to withdraw contributions penalty-free in an emergency.",
    watchOut:
      "Direct contributions phase out above a modified adjusted gross income threshold, which climbs most years but does exclude high earners.",
  },
  {
    id: "sep-ira",
    name: "SEP IRA",
    eyebrow: "05",
    who: "You're self-employed or run a small business, even with employees",
    limit2026: "Up to 25% of compensation, capped at $72,000",
    taxTreatment: "Pre-tax in, taxed on withdrawal",
    bestFor:
      "Freelancers and business owners who want to shelter a large share of income with minimal paperwork — setup is simpler than most employer plans.",
    watchOut:
      "If you have employees, you generally must contribute the same percentage for them that you contribute for yourself.",
  },
  {
    id: "simple-ira",
    name: "SIMPLE IRA",
    eyebrow: "06",
    who: "You run a small business with 100 or fewer employees",
    limit2026: "$17,000 ($21,000 if 50+, higher for some 60-63)",
    taxTreatment: "Pre-tax in, taxed on withdrawal",
    bestFor:
      "Small employers who want to offer a retirement benefit without the administrative load of a full 401(k), while still requiring an employer contribution.",
    watchOut:
      "Employer contributions are mandatory every year — either a match or a flat percentage — which makes it costlier to run than it looks at first.",
  },
  {
    id: "solo-401k",
    name: "Solo 401(k)",
    eyebrow: "07",
    who: "You're self-employed with no employees other than a spouse",
    limit2026: "$24,500 as employee, up to $72,000 total with employer share",
    taxTreatment: "Pre-tax or Roth, your choice",
    bestFor:
      "Self-employed people who want the highest possible contribution ceiling — you're both the employer and the employee, so you can fund both sides.",
    watchOut:
      "Paperwork requirements kick in once plan assets pass $250,000, and the plan must be opened before the end of the tax year you want it to count for.",
  },
  {
    id: "pension",
    name: "Pension (Defined Benefit)",
    eyebrow: "08",
    who: "Your employer — often government or a legacy employer — still offers one",
    limit2026: "Set by plan formula, not a personal contribution limit",
    taxTreatment: "Employer-funded, benefit taxed on distribution",
    bestFor:
      "Long-tenured employees in the public sector, unions, or older private companies — the payout is often based on years of service and final salary.",
    watchOut:
      "Benefits are usually not portable. Leaving before you're vested can mean walking away with little or nothing.",
  },
];

export type Step = {
  id: string;
  question: string;
  detail: string;
  leadsTo: string;
};

export const decisionSteps: Step[] = [
  {
    id: "step-1",
    question: "Does an employer offer you a retirement plan with a match?",
    detail:
      "If yes, contribute at least enough to get the full match — turning it down is leaving part of your compensation unclaimed.",
    leadsTo: "401(k) or Roth 401(k)",
  },
  {
    id: "step-2",
    question: "Have you maxed the match, or is there no employer plan at all?",
    detail:
      "Open an IRA next. Choose Roth if you expect to be in a higher bracket later or want tax-free withdrawals; choose traditional if you want the deduction now.",
    leadsTo: "Traditional IRA or Roth IRA",
  },
  {
    id: "step-3",
    question: "Are you self-employed, or do you run a small business?",
    detail:
      "A Solo 401(k) usually allows the largest contribution if you have no employees. A SEP IRA is simpler to administer if you do.",
    leadsTo: "Solo 401(k) or SEP IRA",
  },
  {
    id: "step-4",
    question: "Still have room to save after maxing tax-advantaged accounts?",
    detail:
      "A standard taxable brokerage account has no contribution limit and no early-withdrawal penalty, at the cost of no special tax treatment.",
    leadsTo: "Taxable brokerage account",
  },
];

export const faqs: {
  q: string;
  a: string;
}[] = [
  {
    q: "Can I contribute to more than one type of account in the same year?",
    a: "Yes. It's common to hold a workplace 401(k) and a personal IRA at the same time. Each account type has its own limit, though income can affect how much of an IRA contribution is deductible.",
  },
  {
    q: "What's the real difference between Roth and traditional?",
    a: "It comes down to when you pay tax. Traditional accounts give you a deduction today and tax the withdrawals later. Roth accounts skip the deduction now so that qualified withdrawals, including all the growth, come out tax-free.",
  },
  {
    q: "What happens to my 401(k) if I change jobs?",
    a: "You can usually leave it with your old employer, roll it into your new employer's plan, or roll it into an IRA. A direct rollover, handled account-to-account, avoids taxes and penalties.",
  },
  {
    q: "Is it too late to start if I'm in my 40s or 50s?",
    a: "No — catch-up contributions exist for exactly this reason, letting savers 50 and older put in more each year across most account types. Starting later means fewer years of compounding, not zero years.",
  },
];
