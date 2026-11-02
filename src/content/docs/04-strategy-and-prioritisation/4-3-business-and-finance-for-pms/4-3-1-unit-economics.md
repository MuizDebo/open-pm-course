---
title: "4.3.1 Unit economics"
description: "How to calculate ARPU, CAC, LTV, payback, churn and net revenue retention for a subscription product, and which product decisions move each one."
---

## Introduction

Lesson 1.2.3 gave you the short version of unit economics: what a customer costs to win, and
what they are worth once you have them. This lesson goes deeper. You will calculate each
number, learn the trap hidden in each, and see which product decisions move it.

Finance builds the official model, but most of the levers sit in product. A PM who can say
"this should cut payback by a month, and here is the arithmetic" gets heard in rooms where
"users will love it" does not.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- ARPU, MRR and ARR.
- CAC: paid, blended and fully loaded, and why the flattering one is dangerous.
- LTV: the simple formula, and why it misleads early.
- LTV:CAC and payback period.
- Churn done properly: customers versus revenue, monthly versus annual.
- Net revenue retention, and why B2B products live or die by it.

## The example product

This lesson and lesson 4.3.2 share one invented product. Call it Ledgerbox: a bookkeeping
app for small Nigerian businesses, sold as a monthly subscription. The basic plan costs
$5 a month and the team plan $15. It has 2,000 paying customers: 1,800 on basic and
200 on team. Every number below is made up and rounded so the arithmetic is easy to follow.

## ARPU, MRR and ARR

**Monthly recurring revenue (MRR)** is the subscription revenue you can count on each month.
For Ledgerbox that is 1,800 × $5 plus 200 × $15, which is $12,000. **Annual
recurring revenue (ARR)** is MRR × 12, so $144,000. Only recurring revenue counts.
One-off setup fees and training do not.

**Average revenue per user (ARPU)** is MRR divided by paying customers: $12,000 ÷ 2,000
= $6. Some companies divide by all users, free ones included, so ask.

*What moves it:* pricing, packaging, the mix of plans and add-ons. Move 100 basic customers
to the team plan and ARPU rises by $0.50. Discounts to close deals pull it down.

## Customer acquisition cost

Last month Ledgerbox spent this on winning customers:

| Cost | $ |
| --- | ---: |
| Paid ads | 3,000,000 |
| Sales team salaries | 1,500,000 |
| Sales commissions | 500,000 |
| Referral bonuses | 500,000 |
| Onboarding team | 500,000 |
| **Total** | **6,000,000** |

It won 200 new paying customers, 80 of them from ads. That gives three different CACs.

- **Paid CAC** is ad spend ÷ customers from ads: $3,000 ÷ 80 = $37.50. It tells you
  whether the ads work.
- **Blended CAC** is ad spend ÷ all new customers: $3,000 ÷ 200 = $15. It flatters,
  because free referrals and word of mouth make the ads look cheap.
- **Fully loaded CAC** is every acquisition cost ÷ all new customers: $6,000 ÷ 200 =
  $30. Use this one for the ratios below.

*What moves it:* activation and onboarding (more sign-ups become paying customers for the
same spend), referral features, trial length, a shorter sign-up flow, and which segment you
target.

## Gross margin per customer

Before LTV you need what each customer costs to serve each month. For Ledgerbox: hosting
$0.60, payment fees $0.15, WhatsApp and SMS reminders $0.25, and customer support $0.50. That is
$1.50. Gross profit per customer is $6 − $1.50 = $4.50 a month, a gross margin of 75
percent. Lesson 4.3.2 covers margin in full.

*What moves it:* any feature with a running cost. Reminders by SMS, a support-heavy flow, an
AI feature that calls a model every time it is used.

## Lifetime value

The simple formula is ARPU × gross margin ÷ monthly churn. Ledgerbox loses 4 percent of
customers a month, so:

> LTV = $6 × 0.75 ÷ 0.04 = $4.50 ÷ 0.04 = $112.50

Dividing by churn gives the average lifetime: 1 ÷ 0.04 = 25 months.

Be honest about how weak this number is early on. A product that is eight months old has
never had a 25-month customer, and the formula assumes churn stays flat, which it rarely
does. Small changes swing it hard: at 3 percent churn LTV is $150,
at 5 percent it is $90. Quote LTV as a range, not a fact.

*What moves it:* retention work above all, then price and margin.

## LTV:CAC and payback

**LTV:CAC** is $112.50 ÷ $30 = 3.75. Lesson 1.2.3 gave you the rough rule of at least 3.

**Payback period** is how many months of gross profit it takes to earn back CAC: $30 ÷
$4.50 = 6.7 months. Payback is more trustworthy early, because customers only need to stay
seven months, not twenty-five.

![A line chart of one Ledgerbox customer's running position over 12 months. It starts at minus $30, the fully loaded CAC, rises by $4.50 of gross profit each month, crosses zero at 6.7 months, and reaches plus $24 at month 12.](illustrations/I-13-payback-period.svg "Each new customer puts Ledgerbox $30 in the hole; $4.50 of gross profit a month climbs out in 6.7 months.")

Payback also explains why fast growth eats cash: the faster you sign customers, the deeper
the hole before it fills.

*What moves it:* everything above, plus annual plans paid upfront, which bring the cash in on
day one.

## Churn, done properly

Last month 80 of Ledgerbox's 2,000 customers cancelled. That is **customer churn**, also
called logo churn: 80 ÷ 2,000 = 4 percent.

Those 80 were mostly small accounts, worth $320 of MRR. Another 30 customers downgraded,
losing $100 (this is called contraction). **Gross revenue churn** is ($320 +
$100) ÷ $12,000 = 3.5 percent. Customer churn tells you how many left. Revenue churn
tells you how much it hurt. If revenue churn is the higher one, your biggest customers are
leaving.

**Monthly versus annual.** 3 percent a month sounds small. It compounds on a shrinking base:
0.97 multiplied by itself 12 times is 0.69. You keep 69 percent of customers and lose 31
percent in a year. Ledgerbox's 4 percent a month is 39 percent a year. When anyone quotes
churn, ask three things: customers or revenue, per month or per year, and which customers.

*What moves it:* activation in the first weeks, when most churn happens; features that build
a habit; reliability; and failed payments. Expired cards and failed transfers cause a lot of
quiet churn in Nigeria, and payment retries often save more customers than a new feature.

## Net revenue retention

**Net revenue retention (NRR)** follows one group of existing customers and asks how much
revenue they bring in now compared with before. Expansion counts in, contraction and churn
count out:

> NRR = (starting MRR + expansion − contraction − churned MRR) ÷ starting MRR

Last month 150 Ledgerbox customers upgraded or added users, worth $300. So NRR is
($12,000 + $300 − $100 − $320) ÷ $12,000 = 99 percent. If that held
every month, a year later the same customers would bring in about 89 percent of their
starting revenue.

Above 100 percent, existing customers grow faster than they leave, and the business grows
even if sales stop. This matters most in B2B, where customers add staff, branches and usage;
the strongest B2B software companies often report annual NRR above 120 percent. Consumer
products rarely expand.

*What moves it:* packaging with a natural upgrade path (per user, per branch, per volume),
features that grow with the customer, and everything that reduces churn.

## Assignment

<div class="assignment">

1. Re-read the CAC, LTV, churn and MRR entries in the a16z post
   [16 Startup Metrics](https://a16z.com/16-startup-metrics/), which you first met in lesson
   1.1.3, ten minutes. Now that you can do the arithmetic, its warnings about blended CAC and
   inflated MRR will make more sense.
2. Read David Skok's
   [SaaS Metrics 2.0: Detailed Definitions](https://www.forentrepreneurs.com/saas-metrics-2-definitions-2/),
   thirty minutes. The exact formulas behind this lesson, including churn and LTV variants.
3. Read David Skok's
   [Unlocking the Path to Negative Churn](https://www.forentrepreneurs.com/why-churn-is-critical-in-saas/),
   twenty minutes, for why expansion revenue changes the shape of a subscription business.
4. Read Lenny Rachitsky's
   [What is good retention](https://www.lennysnewsletter.com/p/what-is-good-retention-issue-29),
   fifteen minutes, for retention benchmarks by product type to test your own churn guess
   against.
5. Estimate ARPU, fully loaded CAC, gross margin, monthly churn, LTV and payback for your
   product from project 3.1.4. Invent the numbers if you must, but write one line per number
   on where it came from. Keep the sheet; project 4.3.3 builds on it.

</div>

## Additional resources

- Y Combinator's
  [Startup Business Models and Pricing](https://www.youtube.com/watch?v=oWZbWzAyHAE), about
  thirty-three minutes. A clear talk on how business model choice shapes CAC, LTV and the
  metrics a company should watch.
