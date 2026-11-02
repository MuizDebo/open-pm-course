---
title: "4.3.3 Unit economics model"
description: "Project: build a spreadsheet model of your product's unit economics, test which assumption matters most, and name the roadmap item that most improves the numbers."
---

## Introduction

This project turns lessons 4.3.1 and 4.3.2 into a working spreadsheet for your own product:
the one you chose in project 3.1.4 and planned in project 4.2.5. You will calculate ARPU,
CAC, gross margin, churn, LTV and payback, project twelve months ahead, find the assumption
your answer depends on most, and write a short memo linking the economics to your roadmap.

PMs build models like this to argue for roadmap items in money as well as user value, and to
find out early which guess they most need to check. Finance will build the official version.
Yours shows you know which cells your work changes. Expect five to seven hours.

## Before you start

Gather your numbers from the lesson 4.3.1 assignment, your P&L draft from lesson 4.3.2 and
your roadmap from project 4.2.5. If you do not have a product of your own, use the Restock
case from lesson 9.1. Restock's business model is not given, so choose one (for example a
monthly subscription for shop owners, or a fee per order paid by wholesalers) and record it
as your first assumption.

**Use invented or public numbers only.** If you work at a company, do not use its real
figures, not even rounded or disguised. Your model will be public. Plausible invented
numbers, with a line on why they are plausible, are better for this project anyway.

Any spreadsheet tool works: Google Sheets, Excel or LibreOffice Calc. The model has five
parts, and every number flows from one place.

![Five boxes. The Assumptions tab, highlighted, feeds the Unit economics tab, which feeds the 12-month projection. The Assumptions tab also feeds the Sensitivity check, which makes each input 20 percent worse one at a time and re-reads the unit economics outputs. The projection and the sensitivity check both feed the Memo.](illustrations/I-15-unit-economics-model.svg "Every number starts on the Assumptions tab, so changing one input updates the whole model.")

## Assignment

<div class="assignment">

1. **Assumptions tab.** Put every input on one tab named "Assumptions" and label it clearly
   as assumptions. Each row has a value, a unit, a source, and a confidence (high, medium or
   low). Include at least: price and plan mix, new customers per month, every acquisition
   cost, each cost to serve, monthly churn and monthly expansion. No other tab may contain
   a typed-in number. Every other cell is a formula that points back here.
2. **Unit economics.** On a second tab, calculate ARPU, fully loaded CAC (and paid CAC if
   you have a paid channel), gross margin, monthly churn and its annual equivalent, LTV,
   LTV:CAC and payback period. Show each formula's inputs next to its result so a reader can
   follow the arithmetic, as lesson 4.3.1 does.
3. **Twelve-month projection.** Build one of these, month by month:
   - a cohort view: one month's new customers, how many remain each month, the revenue and
     gross profit they bring, and the running total against what they cost to acquire; or
   - an MRR view: starting MRR, plus new, plus expansion, minus contraction, minus churn,
     giving ending MRR each month.

   State month-12 MRR or the cohort's month-12 position, and the month (if any) when payback
   is reached.
4. **Sensitivity check.** Make each key assumption 20 percent worse, one at a time, and
   record what happens to LTV:CAC and payback. Put the results in a small table, ranked by
   effect. Name the single assumption that most changes the answer, and say what research or
   experiment would tell you its real value.
5. **Memo.** Half a page. Which roadmap item from project 4.2.5 most improves the economics?
   Say which number it moves, by how much in your model, and how confident you are. If the
   answer differs from your roadmap's order, say whether you would change the order and why.
   Be honest about the limits: early LTV is a guess, and so is any churn figure from a
   product with no customers yet.
6. **Submit.** Put a link to the spreadsheet (view access) or an exported copy, plus the
   memo, in a folder called `4-3-3-unit-economics-model` in your work repository. Post the
   link in the project's Discussions thread using the template from lesson 0.3, and review
   two other models. In your reviews, pick the assumption you trust least and ask where it
   came from.

#### Extra credit

- Model two pricing options side by side, for example one flat plan against two tiers, or a
  subscription against a fee per order. Which wins on payback, which on LTV, and which would
  you choose?
- Add an AI feature's inference cost as new assumptions: cost per use and uses per customer
  per month (see lesson 7.1.2). Watch what it does to gross margin, and find the usage level
  at which margin falls below the floor you would accept.

</div>

## Submitting your work

Post a link to your artifact in this project's thread in
[GitHub Discussions](https://github.com/MuizDebo/open-pm-course/discussions). Review at
least two other submissions while you are there.
