---
title: "6.2 Metrics that matter"
description: "North star metrics, inputs and outputs, leading and lagging, vanity metrics, and why retention beats growth as the thing to watch."
---

## Introduction

A product can have hundreds of metrics and still be run by three of them. The job of a PM
with data is not to know every number. It is to choose the few that stand for the value the
product creates, to understand what moves them, and to refuse the rest.

This lesson is about that choosing. It gives you the vocabulary teams use, the traps that
catch people who report numbers without thinking about them, and the one argument that
matters more than any framework: retention is the truth about a product, and growth is
what you do once retention is true.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- The north star metric and what makes a good one.
- Input and output metrics, and why you can only move inputs.
- Leading and lagging indicators.
- Vanity metrics and how to spot them.
- Growth versus retention, and why retention comes first.
- A metrics tree, the artifact that holds all of this together.

## The north star

A north star metric is the one number that best captures the value users get from the
product, chosen so that if it goes up, the business follows. Hours of video watched. Nights
booked. Messages sent between people who are not the same person. Weekly active teams.

A good north star has four properties:

- **It measures value received, not value promised.** Sign-ups are a promise. Orders
  delivered are value.
- **It leads revenue.** If it rises, money follows, later. If it can rise while the business
  falls, it is the wrong metric.
- **A team can move it.** If only the market moves it, it is a scoreboard, not a target.
- **It is hard to game.** Course 2 covered Goodhart's law: when a measure becomes a target,
  it stops being a good measure. The best north stars are expensive to fake.

Most products have one north star and a small set of **guardrail metrics** that must not get
worse while chasing it: load time, support tickets, refund rate, the share of users on
cheap phones who can still complete a purchase.

## Inputs and outputs

Revenue, retention and the north star are **outputs**. Nobody can go to work on Monday and
move them directly. What a team can move are **inputs**: the activation rate of new users,
the time to first value, the number of listings in a city, the share of orders that arrive
on time. Inputs are the levers; outputs are what the levers are for.

A great deal of bad planning comes from putting outputs in goals and then wondering what to
do. "Increase revenue 20 percent" is a wish. "Raise first-week activation from 22 to 28
percent" is a plan, and the lesson on OKRs in Course 4 is where you learned to write it.

## Leading and lagging

A **lagging** indicator tells you what happened: monthly revenue, churn last quarter. By the
time it moves, the cause is months old. A **leading** indicator moves earlier and predicts
the lagging one: trial users who hit a key action in week one predict paid conversion in
month two; a drop in orders per active merchant this week predicts churn next quarter.

Your dashboard needs both, but your attention belongs on the leading ones, because those
are the numbers you can still do something about.

## Vanity metrics

A vanity metric is one that goes up and to the right whether or not the product is working.
Total registered users, cumulative downloads, page views, app store rank, social followers.
They are easy to grow, pleasant to present and almost uncorrelated with whether anyone is
getting value.

The test: **could this number rise while the product got worse?** If yes, it is vanity. If
it would only rise because more people got more value, it is real. Cumulative anything is
vanity by construction, because it cannot go down.

You will still be asked to report vanity metrics. Report them, label them, and put the real
ones above them.

## Growth versus retention

Here is the argument that organises this whole course. Growth is how many people come in.
Retention is how many stay. A product with strong growth and weak retention is a bucket
with a hole: every marketing naira pours in the top and leaks out the bottom, and the leak
grows with the bucket. A product with weak growth and strong retention is small and
healthy, and growth can be bought later.

So the order of work is: find out whether people who try the product keep using it. If they
do not, no amount of acquisition fixes it, and the work is in the product. If they do, then
growth is a spending decision.

The shape to look for is a **retention curve** that flattens. Plot the share of a sign-up
cohort still active on day 1, 7, 30, 90. A curve that falls to zero means nobody found
lasting value. A curve that drops and then goes flat means a core of users did, and the
height of the flat part is the product's real audience. Lesson 6.3 shows you how to read
these; the point here is that the flat line is the thing you are trying to raise.

## The metrics tree

The artifact that holds all of this together is a tree. At the top, the north star. One
level down, the three or four outputs it decomposes into. Below each, the inputs a team
can move, and below those, the events that measure them.

```
Weekly orders delivered (north star)
├── Active buyers this week
│   ├── New buyers activated (first order within 7 days of sign-up)
│   │   ├── sign-up completed
│   │   └── first order placed
│   └── Returning buyers (ordered in the last 28 days)
│       └── order placed, days since previous order
└── Orders per active buyer
    ├── Listings available in buyer's area
    └── Checkout completion rate
```

A tree like this does three things: it shows every team where its work connects to the
business, it stops arguments about which metric matters by showing how they relate, and it
is the specification for your dashboard. Project 6.7 asks you to build one for your product.

## Assignment

<div class="assignment">

1. Read a16z's [16 Startup Metrics](https://a16z.com/16-startup-metrics/) and the follow-up
   [16 More Startup Metrics](https://a16z.com/16-more-startup-metrics/), twenty minutes
   together. Definitions investors use, with the common ways each is fudged. Read them for
   the fudges.
2. Read Lenny Rachitsky's [Choosing your north star metric](https://www.lennysnewsletter.com/p/choosing-your-north-star-metric),
   fifteen minutes. A survey of what real companies chose and why, with the patterns by
   business type. Note which pattern your product fits.
3. Read Andrew Chen's [Retention is king](https://andrewchen.com/retention-is-king/), ten
   minutes, for the growth-versus-retention argument above made with numbers, and Brian
   Balfour's [Growth is good, but retention is forever](https://www.reforge.com/blog/retention-engagement-growth-silent-killer),
   fifteen minutes, for the version with the curves.
4. Draft a north star for your product, with two guardrails. Write one paragraph on why it
   passes the four tests above and one on how someone could game it. Keep it; project 6.7
   starts from it.

</div>

## Additional resources

- Amplitude's [North Star Playbook](https://amplitude.com/books/north-star) is a free
  short book on choosing and using a north star, with worked examples. A vendor's book, so
  read the method and skip the tool.
- The Wikipedia entry on [vanity metrics](https://en.wikipedia.org/wiki/Vanity_metric) is
  short and has the standard examples, useful when you need to explain the term to someone
  who likes their download count.
