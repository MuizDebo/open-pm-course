---
title: "3.3.1 Market sizing"
description: "TAM, SAM and SOM, bottom-up versus top-down, how to size a market in an hour, and why the reasoning matters more than the number."
---

## Introduction

Sooner or later someone will ask you how big the market is. An investor, a founder, a
director deciding whether your team gets another engineer. The honest answer is always "I
don't know exactly", and that is not an acceptable answer in the room. Market sizing is the
craft of getting from "I don't know" to "here is a defensible estimate and here is how I got
it", in about an hour, with public information.

The number you produce will be wrong. Everyone's is. What makes a market size useful is not
its precision but the chain of reasoning behind it, which tells you which assumptions matter
and which to go and check. This lesson teaches the three standard numbers, the two ways to
get them, and the habits that keep you honest.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- TAM, SAM and SOM, and what each is actually for.
- Top-down sizing from reports versus bottom-up sizing from first principles.
- A worked example for an emerging market where the reports are thin.
- Why the assumptions are the output, not the number.
- Common ways market sizes mislead, including your own.

## The three numbers

**TAM, total addressable market.** Everyone who could conceivably buy the kind of thing you
sell, multiplied by what they would pay in a year. It answers "is this worth anyone's time at
all?" and almost nothing else. Treat a TAM with suspicion whenever it is used to justify a
specific decision.

**SAM, serviceable addressable market.** The part of the TAM your product can actually reach
given its channel, geography, language, price point and regulatory position. If you sell to
Nigerian small businesses through an app that needs a smartphone and a bank account, your
SAM is not "African SMEs".

**SOM, serviceable obtainable market.** The share of the SAM you can realistically win in a
planning horizon, given competitors and your capacity. This is the number that should drive
a roadmap, a hiring plan or a revenue forecast. It is also the one people most often skip,
because it is the smallest.

The three nest. If your SOM is close to your TAM, either the market is tiny or you have
confused yourself.

## Top-down and bottom-up

**Top-down** starts from a published figure and slices it. "The Nigerian payments market
is worth X billion according to a report; we target the segment that is 10 percent of that;
we think we can take 5 percent of the segment." Fast, easy to present, and only as good as
the report, which was usually written to sell something.

**Bottom-up** starts from units you can count or estimate. "There are about N registered
small businesses; about a third accept digital payments; those process about M naira a month;
we charge a fee of P percent." Slower, uglier, and far more useful, because every number in
the chain is a thing you can check and improve.

Do both. If they land within a factor of three of each other, you have a usable estimate.
If they are an order of magnitude apart, one of your assumptions is broken and finding which
one is the most valuable hour you will spend this week.

## A worked example in an hour

Suppose you are sizing a bookkeeping app for small retailers in Nigeria. Reports exist but
they are expensive, old or written by someone selling a payments terminal. Bottom-up:

1. **How many retailers?** The national statistics office publishes counts of micro, small
   and medium enterprises. Take the micro and small figure; note the year.
2. **How many could use an app?** Smartphone penetration among business owners is higher
   than the national average. Use the national figure as a floor and say so.
3. **How many keep any books at all?** Financial inclusion surveys ask about record-keeping.
   Use that proportion.
4. **What would they pay?** Compare with what they already pay for airtime, a POS terminal,
   or an accountant once a year. Pick a monthly price and justify it in one line.
5. **Multiply.** Retailers times smartphone share times record-keeping share times annual
   price gives a SAM. State the SOM as what your channel can reach in two years, with a
   reason.

Write every step down with its source and its date. The spreadsheet is the artifact; the
final number is a footnote. When someone challenges you, you do not defend the number, you
walk them through the chain and ask which link they would change. That turns an argument
into a research question.

## The assumptions are the product

A market size that says "about four hundred million dollars" teaches nobody anything. One
that says "about four hundred million, and it is most sensitive to how many retailers keep
books, which we think is 30 percent but could be 15" tells the team exactly what to go and
find out in the next round of interviews. Good sizing produces a ranked list of the
assumptions that most move the result. That list feeds straight back into discovery.

It also protects you from the oldest trick in the deck: a large TAM used to justify a small,
badly chosen product. A huge market for "financial services in Africa" says nothing about
whether a bookkeeping app for Lagos retailers will sell. Only the SAM and SOM do.

## How sizing goes wrong

- **Multiplying a big population by a small percentage.** "If we only get 1 percent of
  everyone" is not a plan. Nobody gets 1 percent of everyone without a reason.
- **Using the report's definition, not yours.** Reports count what is convenient to count.
  Your product's market is defined by who can actually buy and use it.
- **Freezing the number.** A market size is a snapshot. Date it, and redo it when the
  assumptions change, which they will after your next ten interviews.
- **Sizing before framing.** If you cannot say whose problem you are solving, you cannot
  size the market for solving it. Lessons 3.1.1 and 3.1.3 come first for a reason.

## Assignment

<div class="assignment">

1. Read the Wikipedia entry on
   [Total addressable market](https://en.wikipedia.org/wiki/Total_addressable_market), ten
   minutes, for the standard definitions and the usual criticisms. It is short and neutral,
   which is rarer than it should be for this topic.
2. Read the entry on [Fermi problems](https://en.wikipedia.org/wiki/Fermi_problem), ten
   minutes. Bottom-up sizing is a Fermi estimate wearing a suit, and the habit of breaking an
   unknown into knowable pieces is the whole skill.
3. Watch Kevin Hale's
   [How to Evaluate Startup Ideas](https://www.youtube.com/watch?v=DOtCl5PU8F0), about forty
   minutes. The section on market size, and the distinction between markets that are big now
   and markets that are growing fast, is the clearest short treatment of why TAM alone
   misleads.
4. Size the market for your own product idea, the one from project 3.1.4, both ways. For
   Nigeria or another African market, start from the
   [World Bank country page](https://data.worldbank.org/country/nigeria), the
   [National Bureau of Statistics](https://www.nigerianstat.gov.ng/) and
   [EFInA's](https://efina.org.ng/) financial inclusion surveys. Write down every assumption
   with its source. If top-down and bottom-up disagree by more than three times, find the
   broken link before you stop.

</div>

## Additional resources

- The [World Bank's Nigeria overview](https://www.worldbank.org/en/country/nigeria/overview)
  is a useful one-page grounding in the macro numbers before you start multiplying.
- [Statista](https://www.statista.com/) has free summary figures for many markets. Treat them
  as a starting point for a top-down estimate, never as the answer, and always find the
  underlying source.
