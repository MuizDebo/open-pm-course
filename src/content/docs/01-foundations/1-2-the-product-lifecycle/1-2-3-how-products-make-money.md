---
title: "1.2.3 How products make money"
description: "Business models, pricing basics, unit economics, and the difference between value and revenue, at the depth a PM needs."
---

## Introduction

A product manager who cannot explain how their product makes money is making decisions in
the dark. Every prioritisation call, every pricing discussion, every argument with sales
comes back to the business model, and the PM who understands it has an advantage in all of
them. You do not need an MBA. You need the handful of concepts in this lesson and the habit
of asking "and how does this pay for itself?"

This lesson covers the common business models, the basics of pricing, the idea of unit
economics, and the distinction that trips up new PMs most: value is not the same as revenue.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- The main ways software products make money and what each means for the PM.
- Value versus revenue, and why confusing them ruins products.
- Unit economics: what a customer costs and what they are worth.
- Pricing as a product decision, not a finance one.
- The questions to ask about any product's model.

## The common models

**Subscription.** Customers pay a recurring fee for access. Most B2B software and a growing
share of consumer software. The PM cares about retention above almost everything, because a
customer who leaves after three months may never have covered the cost of acquiring them.

**Transactional.** The product takes a cut of each transaction it enables: marketplaces,
payment products, ticketing. Revenue scales with volume. The PM cares about the number of
transactions and the take rate, and about the balance between the two sides of the market.

**Advertising.** The product is free to users and advertisers pay for their attention.
Social products, search, much of media. The PM's user and the PM's customer are different
people, which creates a tension the PM lives inside every day.

**Usage-based.** Customers pay for what they consume: cloud infrastructure, API calls,
messages sent. Revenue follows usage, so the PM's incentive is to make the product easy to
use more of, which usually aligns well with users.

**One-off purchase.** Pay once, own it. Rarer in software now, still common in hardware
and some consumer apps. Growth depends on new customers, since existing ones have already
paid.

**Freemium.** Free tier for most, paid tier for some. The PM's hardest job is deciding
what goes on which side of the line: too generous and nobody pays, too stingy and nobody
starts.

Most real products combine two or three of these. A marketplace might charge a subscription
to sellers and a transaction fee to buyers and sell promoted listings to both.

## Value is not revenue

The most important distinction in this lesson. A product creates value when it makes
someone's life or work better. It captures revenue when someone pays. The two are related
and not the same, and the gap between them is where most product strategy lives.

Some products create enormous value and capture little of it: a free search engine for
its users, an open-source library. Some capture a lot and create little: a subscription
that is hard to cancel. The good ones create more than they capture and capture enough to
keep going.

Why this matters for a PM: if you optimise directly for revenue, you will build things that
extract money from existing value rather than creating new value, and the product decays.
If you optimise only for value, the company runs out of money. The PM's job is to create
value first and then find the honest way to capture a share of it. Nearly every dark pattern
you have ever been annoyed by is a team that got this order backwards.

## Unit economics

Unit economics answers one question: does each customer make us money, after what it cost
to get them? Two numbers carry most of the weight.

**Customer acquisition cost (CAC).** What it costs, in marketing, sales and onboarding, to
get one paying customer.

**Lifetime value (LTV).** What a customer is worth over the time they stay, usually revenue
minus the cost of serving them, multiplied by how long they stay.

If LTV is comfortably more than CAC, the business works and growth is worth paying for. If it
is not, growth makes things worse: every new customer loses money. The usual rule of thumb
in subscription software is LTV at least three times CAC, with CAC paid back inside a year.
The rule is rough and the sources in the assignment argue about it. What matters is that you
know the two numbers for your product and which direction each is moving.

Everything a PM does touches one of these. Better onboarding lowers CAC. Better retention
raises LTV. A feature that only the free tier uses raises the cost to serve without raising
revenue. You do not need to run the spreadsheet. You need to know which cell your work
changes.

## Pricing is a product decision

New PMs often assume pricing belongs to finance or sales. It is a product decision, because
price is part of what the product communicates and who it selects for. A low price says
"for everyone" and attracts customers who are expensive to support. A high price says "for
serious users" and funds a better product for fewer people. The packaging, which features
go in which tier, is pure product design.

You will not set prices in your first PM job. You will be asked to decide what goes in the
premium tier, whether a feature should be metered, and whether a free trial should be
seven days or thirty. Those are pricing decisions, and the assignment gives you enough to
make them thoughtfully.

## Questions to ask about any product

When you look at a product, your own or a competitor's, ask:

1. Who pays, and is that the same person who uses it?
2. What do they pay for: access, usage, outcomes, attention?
3. What does it cost to get one customer, and what are they worth?
4. What would make a customer pay more, and what would make them leave?
5. Where does the value created exceed the revenue captured, and is that deliberate?

If you can answer those for a product, you understand its business well enough to be its
PM. The section project asks you to answer them for a real one.

## Assignment

<div class="assignment">

1. Watch Strategyzer's
   [Business Model Canvas explained](https://www.youtube.com/watch?v=QoAOzMTLP5s), two
   minutes. The canvas is a one-page way to lay out who a product serves, what it offers,
   how it reaches them and how it makes money. You will use it in Course 4; for now, learn
   the nine boxes.
2. Read David Skok's [SaaS Metrics 2.0](https://www.forentrepreneurs.com/saas-metrics-2/),
   forty minutes. Long, and the definitive explanation of CAC, LTV, churn and payback for
   subscription businesses. Read the first half carefully and skim the rest. If your
   product is not subscription, the ideas still transfer.
3. Read the a16z post [16 More Startup Metrics](https://a16z.com/16-more-startup-metrics/), fifteen
   minutes. A companion to the one you read in lesson 1.1.3, covering the metrics that get
   gamed and the ones that show whether value is being created rather than just captured.
4. Read Ben Thompson's [Aggregation Theory](https://stratechery.com/2015/aggregation-theory/),
   fifteen minutes. The best short explanation of why free-to-user, advertising-funded and
   marketplace products behave so differently from subscription ones, and why the PM's user
   and customer can be different people.
5. Answer the five questions above for one product you pay for and one you use for free.
   Half a page each. Keep them; the section project builds on them.

</div>

## Additional resources

- Strategyzer's [Business Model Canvas library page](https://www.strategyzer.com/library/the-business-model-canvas)
  has the canvas itself and a longer explanation than the video.
- Patrick Campbell's writing at [ProfitWell](https://www.paddle.com/resources) on pricing
  and packaging is the practical companion to this lesson when you are asked to decide what
  goes in which tier.
