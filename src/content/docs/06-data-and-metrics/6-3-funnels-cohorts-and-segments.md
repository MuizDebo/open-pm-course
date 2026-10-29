---
title: "6.3 Funnels, cohorts and segments"
description: "The three ways of cutting product data that answer most questions, how to read each, and how to avoid the mistakes that make a confident PM wrong."
---

## Introduction

Almost every question a PM asks of product data is one of three shapes. Where do people
drop off? That is a funnel. Do people keep coming back? That is a cohort. Is it the same
for everyone? That is a segment. Learn to build and read all three and you can answer most
of what a team needs without an analyst.

The catch is that each one has a well-known way of lying. This lesson teaches the three
cuts and the three lies, including the one with a name, Simpson's paradox, which has fooled
more smart people than any other mistake in this course.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- Funnels: what they show, how to define the steps, and the drop-off that matters.
- Cohorts and retention curves: how to read them and what shape to want.
- Segments: by channel, device, country, plan, and why the average hides the story.
- Correlation, causation and the questions that separate them.
- Simpson's paradox, with an example you can reproduce.

## Funnels

A funnel is a sequence of steps a user must pass to reach an outcome, with the count or
share at each step. Landed on the pricing page, started checkout, entered a card, paid.
The drop between steps is where you look.

Three rules for building one that tells the truth:

- **Define the steps as events, not screens.** "Visited the checkout page" and "started
  checkout" are different when the page loads for people who bounce instantly.
- **Fix the window.** A funnel over "ever" and a funnel over "within one session" give
  different numbers. Choose the one that matches how the product is actually used.
- **Compare the largest drop, not the first.** The first step always loses the most people
  in absolute terms. The step with the biggest proportional loss relative to what you would
  expect is the one worth fixing.

A funnel tells you where, not why. When you find the step, go to the qualitative row from
lesson 6.1: watch five people try it.

## Cohorts and retention curves

A cohort is a group of users defined by when they did something, usually when they signed
up. A retention curve plots what share of a cohort is still active over time. Put several
cohorts on one chart and you can see whether the product is getting better at keeping
people.

How to read one:

- **It falls fast, then flattens or does not.** The first days lose the people who were
  never going to stay. What matters is whether the curve goes flat. A flat line at 25
  percent means a quarter of each cohort found lasting value. A line that keeps sliding
  toward zero means nobody did, however slowly.
- **Newer cohorts above older ones** is the sign of a product improving. Below, and
  something you shipped or some change in who you acquired made it worse.
- **Define "active" honestly.** Opened the app is a low bar. Did the core action is the
  bar. The curve for the honest definition is lower and more useful.

Andrew Chen's analysis of mobile retention, in the assignment, is the reference point: most
apps lose most users within days, and the best ones differ in where the curve flattens, not
in whether it falls.

## Segments

The average user does not exist. A 30 percent activation rate might be 45 percent on
Android and 10 percent on the web, or 50 percent in Lagos and 15 percent in Abuja, or 60
percent from referrals and 12 percent from paid ads. The overall number is a blend, and
blends hide the story.

Segment every important metric by at least these:

- **Acquisition channel.** Where the user came from predicts whether they stay more than
  anything you do afterwards.
- **Device and platform.** Different users, different constraints, often different
  products in practice.
- **Country or region.** Payment methods, connectivity, trust and language all vary.
- **Plan or customer size**, for B2B.
- **Cohort week**, so you can see change over time within each segment.

When a metric moves, the first question is "which segment moved it?" The answer is
usually one segment, and that tells you where to look. The second question is whether the
mix of segments changed, which is where the next section begins.

## Correlation and causation

Product data is observational. You see that users who turn on notifications retain better.
You do not know whether notifications cause retention, whether people who were going to
retain anyway turn on notifications, or whether something else, such as being on a newer
phone, causes both.

Before you believe a correlation is a cause, ask:

1. **Could the arrow point the other way?** Engaged users do more of everything, including
   the feature you are studying.
2. **Is there a third thing?** Device, channel, country, plan, cohort. Segment by each and
   see whether the relationship survives.
3. **Did the mix change?** If the proportion of a high-performing segment grew, the overall
   number rises with no behaviour changing at all.

The only clean way to establish cause is an experiment, which is lesson 6.4. Until you have
run one, speak of correlations as correlations, especially in front of executives who will
remember the stronger claim.

## Simpson's paradox

The third question above has a famous failure mode. A trend that holds in every segment can
reverse when the segments are combined, because the segments are different sizes in the
two things being compared. This is Simpson's paradox and it is not rare.

A product example. Two onboarding flows, old and new. Activation rates:

| | Old flow | New flow |
|---|---|---|
| Mobile users | 20% of 1,000 = 200 | 24% of 4,000 = 960 |
| Desktop users | 40% of 4,000 = 1,600 | 44% of 1,000 = 440 |
| **All users** | **36% of 5,000** | **28% of 5,000** |

The new flow is better on mobile and better on desktop and worse overall, because the new
flow was shown mostly to mobile users, who activate less on any flow. Read only the bottom
row and you kill a better product. Read only the segments and you miss that the rollout
was uneven.

The defence is the habit from the previous section: whenever two groups are compared,
check whether the groups have the same mix of segments. If they do not, compare within
segments and say so. The dataset in project 6.8 contains a version of exactly this.

## Assignment

<div class="assignment">

1. Watch TED-Ed's [How statistics can be misleading](https://www.youtube.com/watch?v=sxYrzzy3cq8)
   by Mark Liddell, five minutes, and minutephysics'
   [Simpson's Paradox](https://www.youtube.com/watch?v=ebEkn-BiW5k), five minutes. Two short
   explanations of the paradox with different examples. Watch both; it takes two to make
   it stick.
2. Read Andrew Chen's
   [New data shows losing 80% of mobile users is normal](https://andrewchen.com/new-data-shows-why-losing-80-of-your-mobile-users-is-normal-and-that-the-best-apps-do-much-better/),
   ten minutes. The retention-curve benchmark most PMs carry in their heads, with the
   chart that shows what "the best apps do better" looks like.
3. Read Mixpanel's [cohort analysis guide](https://mixpanel.com/blog/cohort-analysis/),
   fifteen minutes. Vendor content, but a clear walkthrough of building and reading a
   retention table, including the triangle layout you will see in every analytics tool.
4. In a spreadsheet, rebuild the Simpson's paradox table above from the four raw counts,
   then change the mobile share of the new flow until the overall number flips back. Note
   the threshold. Ten minutes, and you will never fall for it in a meeting.

</div>

## Additional resources

- The Wikipedia articles on [cohort analysis](https://en.wikipedia.org/wiki/Cohort_analysis),
  [conversion funnels](https://en.wikipedia.org/wiki/Conversion_funnel) and
  [Simpson's paradox](https://en.wikipedia.org/wiki/Simpson%27s_paradox) are all short and
  the last one has the Berkeley admissions case, the original real-world example.
- Amplitude's [cohort analysis](https://amplitude.com/blog/cohort-analysis) post covers the
  behavioural cohorts that go beyond sign-up date, such as "users who did X in week one",
  which is where cohorts become a discovery tool.
