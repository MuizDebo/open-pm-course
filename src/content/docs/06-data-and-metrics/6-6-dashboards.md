---
title: "6.6 Dashboards"
description: "What belongs on a dashboard, what does not, and how to build one that is still being looked at in six months."
---

## Introduction

Every product team has a dashboard, and most of them are dead. Built in a burst of
enthusiasm, forty charts wide, looked at daily for two weeks and never again. The problem
is rarely the tool. It is that nobody decided what question the dashboard was for, so it
tried to answer all of them and ended up answering none.

This lesson is about building a dashboard that stays alive: one that fits on a screen,
answers a handful of questions you actually ask every week, and tells you when something
has changed. It builds directly on the metrics tree from lesson 6.2 and leads into the
project where you draw your own.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- The one job a dashboard has, and the jobs it should refuse.
- Using your metrics tree as the skeleton.
- One question per chart, and which chart answers which question.
- What to leave off, and where that information should live instead.
- The weekly review habit that keeps a dashboard honest.

## One job

A dashboard answers the question "is the product healthy, and if not, where should I look?"
That is its whole job. It is a glance, not an investigation. If a dashboard takes more than
a minute to read, it has become a report, and reports belong in documents with sentences
around the numbers.

Everything that follows comes from that one job. The dashboard shows the few numbers that
tell you about health, shows them against something so you can tell good from bad, and
makes a change visible. Investigation happens elsewhere, in a query or a spreadsheet, once
the dashboard has told you where to dig.

## The metrics tree is the skeleton

In lesson 6.2 you met the metrics tree: a north star metric at the top, the input metrics
that drive it beneath, each one something a team can actually move. That tree is your
dashboard's structure.

The north star goes at the top, large, with its trend over a sensible period and its target
if it has one. Beneath it, one small chart per input metric, in the same order as the tree
so the eye can follow cause toward effect. If the north star dips, you look down the column
to see which input moved. That is the "where should I look" part of the job.

A tree with a north star and four to six inputs gives you a dashboard of five to seven
charts. That fits on one screen, and one screen is the limit. If you need a second screen,
you need a second dashboard with a different job, not a longer one.

## One question per chart

Each chart should answer exactly one question that someone on the team actually asks. Write
the question as the chart's title. "Weekly active users" is a label. "Are we growing week
on week?" is a question, and it tells you what kind of chart to draw.

A few pairings that cover most cases:

- **Is it going up or down over time?** A line chart. One line if you can manage it. Three
  at most.
- **How does this week compare with the target or with last week?** A single big number
  with the comparison underneath it, in words. "23.1 percent, up from 21.8 percent."
- **Which segment is pulling the average?** A bar chart with one bar per segment, sorted.
- **Where in the funnel do people drop?** A funnel or a set of bars in step order.
- **Is this value normal?** A line with a shaded band for the usual range, so an unusual
  week stands out.

Pie charts answer "what share is each part", which is almost never a question a product team
asks weekly, and they are hard to read. Edward Tufte's idea of the data-ink ratio is the
test to apply to every chart: how much of the ink is carrying information, and how much is
decoration? Gridlines, legends, 3D effects, colours that mean nothing. Strip them out until
only the data is left.

## What to leave off

The dashboard will attract requests. Someone wants their metric on it. Leadership wants
revenue. Marketing wants campaign numbers. The answer to most of these is not "no" but "not
here".

Leave off:

- **Metrics nobody acts on.** If the number moved and no one would do anything different,
  it is a curiosity, not a health signal.
- **Vanity metrics.** Cumulative totals that only ever go up. Page views without a
  denominator. Lesson 6.2 covered why they feel good and tell you nothing.
- **Deep diagnostics.** Latency by endpoint, error rates by version. Engineering has its own
  dashboard. Yours links to it.
- **Anything you look at monthly.** Monthly numbers go in the monthly review document, with
  a paragraph of interpretation.

Each of those has a home. A second dashboard for the growth team. A document for the
monthly review. A link to the engineering board. The product dashboard stays small because
it is the one you look at every Monday.

## Why dashboards die

Stephen Few, who has thought about this longer than anyone, points to the same causes
again and again: too much on one screen, charts chosen to look impressive rather than to be
read, and no clear audience. Add two product-specific ones:

- **Nobody owns it.** A dashboard without a named owner rots. Definitions drift, a data
  pipeline breaks and nobody notices, and six weeks later the chart is confidently showing
  zeros.
- **It never changed anything.** If the team cannot name a decision the dashboard
  prompted, they will stop looking. A dashboard earns its place by catching something.

The fix for both is the same habit.

## The weekly review

Pick a time, Monday morning is traditional, and spend fifteen minutes with the dashboard
and the team. The routine:

1. **Read the north star.** Up, down or flat against last week and against target. Say it
   out loud in a sentence.
2. **Scan the inputs.** Which ones moved more than usual? Those get a sentence each.
3. **Pick one thing to investigate**, if anything moved. Assign it. The investigation
   happens outside the meeting, with the tools from lesson 6.5.
4. **Note what you decided.** Two lines in a running document. "Activation dipped in Ghana,
   Ade looking into it." Over a year this log becomes the history of the product.

Fifteen minutes. If it runs to forty, the dashboard is too big or the meeting has become
something else. Avinash Kaushik's rule that every dashboard should end in a recommended
action is the test: did the fifteen minutes produce a decision or an assignment? If not,
twice in a row, change the dashboard.

## Assignment

<div class="assignment">

1. Read Stephen Few's [Dashboard Confusion](https://www.perceptualedge.com/articles/ie/dashboard_confusion.pdf),
   fifteen minutes. The original argument for what a dashboard is and is not, from 2004,
   and still the clearest. Note his definition and compare it with the "one job" above.
2. Read Avinash Kaushik on
   [digital dashboards](https://www.kaushik.net/avinash/digital-dashboards-strategic-tactical-best-practices-tips-examples/),
   twenty minutes. He is writing about web analytics, but the distinction between a
   dashboard for executives and one for the team doing the work, and the insistence on
   recommended actions, apply to any product.
3. Watch David McCandless's
   [The beauty of data visualization](https://www.ted.com/talks/david_mccandless_the_beauty_of_data_visualization),
   eighteen minutes. Partly the opposite of this lesson, since his charts are for
   persuading rather than monitoring. Watch it to see how much a chart's design decides what
   you notice, then apply that deliberately to your own.
4. Find a dashboard you can see, at work or a public one such as a city's open-data site.
   For each chart, write the question it answers in one line. Count how many charts have no
   clear question. That number is how much of the dashboard is dead.

</div>

## Additional resources

- Wikipedia on the [data-ink ratio](https://en.wikipedia.org/wiki/Data-ink_ratio). Short,
  with examples of the same chart before and after decoration is removed.
- The [Data Visualisation Catalogue](https://datavizcatalogue.com/) lists chart types by
  the question they answer. Useful when you know the question and not the chart.
- Amplitude's [North Star Playbook](https://amplitude.com/north-star) is a vendor's book,
  free to read, on building a metrics tree. Pairs with lesson 6.2 and the project that
  follows.
