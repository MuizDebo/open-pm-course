---
title: "4.3.2 Reading a P&L"
description: "How to read a profit and loss statement line by line, from revenue to net income, with a worked dollar example showing which lines a PM's decisions move."
---

## Introduction

A profit and loss statement (P&L) shows what a business earned and spent over a period, and
what was left. Finance prepares it. Leaders read it every month. If you cannot read it, you
cannot follow the conversations where budgets, hiring and your roadmap get decided.

This lesson walks down a P&L from the top line to the bottom, using Ledgerbox, the invented
bookkeeping app from lesson 4.3.1. It is clear about which lines a PM moves and which belong
to finance, and it shows two product decisions changing specific lines.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- Revenue, cost of revenue and gross margin.
- Contribution margin.
- Operating expenses, EBITDA and net income.
- Cash versus profit, burn rate and runway.
- What a PM owns on the P&L and what finance owns.
- How two product decisions change the numbers.

## The Ledgerbox P&L

Here is one month, in US dollars. All numbers are invented and match lesson 4.3.1.

| Line | $ |
| --- | ---: |
| **Revenue** | **12,000,000** |
| Hosting | 1,200,000 |
| Payment fees | 300,000 |
| WhatsApp and SMS | 500,000 |
| Customer support | 1,000,000 |
| **Cost of revenue** | **3,000,000** |
| **Gross profit** (75% gross margin) | **9,000,000** |
| Paid ads | 3,000,000 |
| Sales commissions | 500,000 |
| Referral bonuses | 500,000 |
| **Contribution** (41.7% contribution margin) | **5,000,000** |
| Engineering and product salaries | 6,000,000 |
| Sales team salaries | 1,500,000 |
| Onboarding team | 500,000 |
| Rent, admin, legal and accounting | 1,500,000 |
| **Operating expenses** | **9,500,000** |
| **EBITDA** | **−4,500,000** |
| Depreciation and amortisation | 300,000 |
| Interest | 200,000 |
| Tax | 0 |
| **Net income** | **−5,000,000** |

Real P&Ls are laid out differently from company to company. Many do not show a contribution
line at all. The logic underneath is the same.

![A waterfall chart of Ledgerbox's month. Revenue of $12,000, minus $3,000 cost of revenue, leaves $9,000 gross profit at 75 percent. Minus $4,000 of variable acquisition costs leaves $5,000 contribution at 42 percent. Minus $9,500 operating expenses leaves EBITDA of minus $4,500. The cost of revenue and variable acquisition bars are highlighted as the costs product decisions move most directly.](illustrations/I-14-p-and-l-waterfall.svg "Ledgerbox's month as a waterfall: the two highlighted bars are where product decisions bite hardest.")

## Revenue and cost of revenue

**Revenue** is what customers paid for the period's service. For a subscription product it is
close to MRR, here $12,000.

**Cost of revenue**, also called cost of goods sold (COGS), is what it costs to deliver the
product to existing customers. For software that means hosting, payment processing fees,
messaging, and the support staff who answer customers. For an AI product it also means
**model inference**: every call to a model costs money, as lesson 7.1.2 explains. Ledgerbox
spends $3,000, which is $1.50 per customer, the cost to serve from lesson 4.3.1.

**Gross margin** is gross profit as a share of revenue: $9,000 ÷ $12,000 = 75
percent. Traditional software often runs at 70 to 85 percent. Products with heavy support,
logistics or model costs run lower. One trap for products sold in Nigeria and other emerging markets: hosting and AI APIs are
billed in dollars. If you charge customers in a local currency, a weaker local currency
raises your cost of revenue while your prices stay put.

## Contribution margin

**Contribution** subtracts the costs that rise with each new sale: here paid ads,
commissions and referral bonuses, $4,000. What remains, $5,000 or about 42 percent
of revenue, is what the business has left to pay for everything fixed. Companies define the
line differently, so always ask what is in it.

## Operating expenses and EBITDA

**Operating expenses** (opex) are the costs of running the company whatever the month's
sales: salaries, rent, admin. Ledgerbox spends $9,500, most of it on people.

**EBITDA** means earnings before interest, tax, depreciation and amortisation. In plain
words: profit from running the business, before the cost of borrowing, the tax bill, and
the slow write-down of things bought earlier, like laptops. Ledgerbox's EBITDA is −$4,500.

Leaders and investors quote EBITDA because it compares the core business across companies
with different debts and tax positions. Be careful with it. Laptops, servers and loans are
real costs, and EBITDA hides them. A company can show positive EBITDA and still run out of
money.

## Net income

Take away depreciation ($300), interest ($200) and tax (none, on a loss) and you
reach **net income**: −$5,000. This is the bottom line people mean when they ask if a
company is profitable.

## Cash is not profit

Profit follows accounting rules. Cash is money in the bank. They differ. If 50 customers
prepay a year at $50, $2,500 arrives today, but only about $208 counts as this
month's revenue. A big client who pays 60 days late counts as revenue now and cash later. A
laptop bought for $1,200 leaves the bank at once but reaches the P&L slowly, as
depreciation.

**Burn rate** is how much cash the company loses each month. Gross burn is all cash going
out. Net burn is cash out minus cash in. Ledgerbox's net burn this month is about
$4,500. **Runway** is cash in the bank divided by net burn: with $54,000 banked,
twelve months. Runway is the number that keeps founders awake. If your roadmap needs
eighteen months to pay off, it needs a plan for the six months it does not cover.

## What a PM owns and what finance owns

**You own, or strongly influence:**

- Cost to serve: which features carry running costs, which messaging channel you use, which
  model you call and how often.
- Gross margin and contribution margin, through those choices and through activation,
  onboarding and referral design.
- Pricing input: packaging, tiers, add-ons, what goes in the free plan.
- Cost estimates in your specs, so finance is never surprised by a new line.

**Finance owns:** the official P&L, accounting rules such as when revenue counts and what
is depreciated, budgets, cash management, tax, and the forecasts used for fundraising.

Forecasts are shared. Finance builds them; your roadmap is one of their main inputs.

## Two product decisions

**Decision 1: an AI receipt scanner, free on every plan.** Half of customers, 1,000 of them,
use it. Each scans about 40 receipts a month at roughly $0.01 of inference per scan. That adds
$400 to cost of revenue. Gross margin falls to 71.7 percent. The benefit, if any, shows
up later as lower churn. If you sold the scanner instead as a $1 add-on and 400
customers bought it, revenue would rise by $400 and inference would cost $160.

**Decision 2: in-app help and guided setup.** Support tickets fall by 40 percent, so the
support line drops from $1,000 to $600. Gross margin rises to 78.3 percent.

| Line | Today | Decision 1 | Decision 2 |
| --- | ---: | ---: | ---: |
| Cost of revenue | 3,000,000 | 3,400,000 | 2,600,000 |
| Gross profit | 9,000,000 | 8,600,000 | 9,400,000 |
| Gross margin | 75.0% | 71.7% | 78.3% |
| Contribution | 5,000,000 | 4,600,000 | 5,400,000 |
| EBITDA | −4,500,000 | −4,900,000 | −4,100,000 |

Neither decision is right or wrong on these numbers alone. The point is that both are
product decisions, and both land on the P&L within a month.

## Assignment

<div class="assignment">

1. Read Investopedia's [Gross Margin](https://www.investopedia.com/terms/g/grossmargin.asp)
   and [Contribution Margin](https://www.investopedia.com/terms/c/contributionmargin.asp)
   pages, ten minutes each. Short, standard definitions with worked examples, useful for
   checking your own arithmetic.
2. Read Investopedia's [EBITDA](https://www.investopedia.com/terms/e/ebitda.asp) page,
   fifteen minutes, paying most attention to the criticisms section. It is the fuller case
   for why EBITDA flatters.
3. Read a16z's
   [The New Business of AI](https://a16z.com/the-new-business-of-ai-and-how-its-different-from-traditional-software/),
   twenty minutes, for why AI products often have lower gross margins than traditional
   software. Read it alongside lesson 7.1.2.
4. Read Paul Graham's [Default Alive or Default Dead?](https://paulgraham.com/aord.html), ten
   minutes, for the one question about burn and runway every startup team should be able to
   answer.
5. Draft a one-month P&L for your product from project 3.1.4, using your numbers from the
   lesson 4.3.1 assignment. Mark each line "I move this", "finance owns this" or "shared".

</div>

## Additional resources

- Stripe Atlas's [guide to the business of SaaS](https://stripe.com/guides/atlas/business-of-saas),
  for how subscription revenue, margins and cash fit together, from a company that sees a
  great many of them.
- David Sacks's [The Burn Multiple](https://sacks.substack.com/p/the-burn-multiple-51a7e43cb200),
  for one blunt way investors judge whether burn is buying enough growth.
