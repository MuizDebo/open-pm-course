---
title: "6.4 Experiments"
description: "A/B tests without the maths: what randomisation buys you, how big a test needs to be, the ways people fool themselves, and when not to run one at all."
---

## Introduction

Lesson 6.3 ended with the only clean way to know whether something caused something: run
an experiment. Show one version to some users and another to the rest, chosen at random,
and compare. It sounds simple and it is, in the way that cooking is simple. The ingredients
are few and the ways to ruin it are many.

This lesson is the PM's working knowledge of experiments. Not the statistics, which an
analyst or a tool will do for you, but the judgement: what a test can answer, how big it
needs to be, the three ways teams fool themselves, and the cases where an experiment is the
wrong tool and a decision is the right one. Project 6.8 gives you a real dataset to analyse
with all of it.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- What randomisation does and why it is the whole point.
- Sample size and power in plain words, and the calculator you will actually use.
- What a p-value is and is not.
- The three classic mistakes: peeking, novelty, and testing too many things.
- Guardrails, segments and the Simpson's paradox check.
- When not to experiment.

## What randomisation buys you

Every correlation problem in lesson 6.3 came from the groups being different. Users who
turned on notifications were different from those who did not, so you could not compare
them. Randomisation fixes this by making the groups the same in every respect except the
one you chose. Flip a coin for each user. Heads sees the old checkout, tails the new one.
Because the coin does not care about device, country, channel or intent, the two groups
have the same mix of all of them, on average, and any difference in the outcome is caused
by the change.

That is the entire power of the method. It is also where most failures start: if the
assignment is not actually random, because the new version only went to Android, or to
users who opted in, or to the first thousand people on Monday morning, you are back to
comparing different groups and the result means nothing.

## Sample size and power

A test needs enough users to tell a real difference from noise. How many depends on three
things:

- **The baseline rate.** A change to a step that converts at 2 percent needs far more users
  than one at 40 percent, because small rates are noisier.
- **The smallest effect you care about.** Detecting a lift from 20 to 21 percent needs
  many times more users than detecting 20 to 25. Decide this before you start, honestly:
  what is the smallest improvement that would change your decision?
- **How sure you want to be.** The conventions are a five percent chance of calling a
  difference when there is none, and an eighty percent chance of catching one when there
  is. These are conventions, not laws, and they trade off against speed.

Put those three into a sample size calculator, Evan Miller's is in the assignment, and it
tells you how many users per variant. Divide by your weekly traffic to the step and you
have the test duration. If the answer is nine months, the test is not worth running at
that size, and knowing that in advance is the point.

## The p-value, in one paragraph

When a test ends, the tool reports a p-value. It is the probability of seeing a difference
at least this large if the change actually did nothing. A p-value of 0.03 means: if the new
checkout were no better, you would see a gap this big about three percent of the time by
luck. It is not the probability that the change works, and it is not the size of the
effect. A tiny, useless improvement can have a very small p-value with enough users. Read
the p-value for "is this likely noise" and the effect size with its range for "does this
matter".

## Three ways teams fool themselves

**Peeking.** Checking the results every day and stopping when they look good. Because noise
wanders, a test that is going to end at "no difference" will cross the significance line
at some point along the way, and if you stop there you have been fooled by the wandering.
Fix the sample size in advance and read the result once, at the end. If you must look
early, use a tool built for sequential testing and say so.

**Novelty.** A new design gets attention because it is new. Clicks rise for a week and
fall back. Run tests long enough for the novelty to wear off, at least a full weekly cycle
and often two, and check whether the effect in week two matches week one.

**Testing many things.** Twenty metrics on a dashboard means one will be significant by
chance even if nothing changed. Decide the one primary metric before the test. Everything
else is a guardrail or a curiosity, and curiosities need their own test.

## Guardrails, segments and the paradox

A test that lifts the primary metric can still be a loss. Define guardrails before you
start: page load time, error rate, support contacts, refund rate, the activation rate of
users on low-end devices. A win on conversion that doubles support tickets is a decision,
not a win.

After the test, segment the result the way lesson 6.3 taught. A lift that comes entirely
from one device or one country is a different finding from a lift everywhere, and
sometimes the segments disagree with the whole. Check that the two variants have the same
segment mix. If they do not, something in the assignment was not random, and Simpson's
paradox is waiting.

## When not to experiment

Experiments are for decisions that are reversible, measurable in weeks, and where the
honest answer is "we do not know". They are the wrong tool when:

- **You already know.** If every user interview and every support ticket says the button
  is unfindable, move the button.
- **The effect is too slow or too rare.** Lifetime value, annual renewals, fraud. The test
  would take a year. Use leading indicators and judgement.
- **You cannot randomise.** A pricing change that must apply to everyone in a market, a
  feature a large customer was promised. You can still measure before and after; you
  cannot claim causation.
- **The change is strategic.** No A/B test tells you whether to enter a new market. That is
  Course 4.
- **It is unethical to withhold.** A safety fix, an accessibility fix, a legal requirement.
  Ship it.

A team that tests everything is as badly run as a team that tests nothing. The skill is
knowing which decisions earn the cost.

## Assignment

<div class="assignment">

1. Read Evan Miller's [How not to run an A/B test](https://www.evanmiller.org/how-not-to-run-an-ab-test.html),
   fifteen minutes. The clearest explanation of the peeking problem ever written, with
   simulations you can see. Then open his
   [sample size calculator](https://www.evanmiller.org/ab-testing/sample-size.html) and
   work out how long a test would take on your product's key step at your current traffic.
2. Read Ron Kohavi and Stefan Thomke's
   [The surprising power of online experiments](https://hbr.org/2017/09/the-surprising-power-of-online-experiments)
   in HBR, twenty minutes. The case for experimentation from the people who built
   Microsoft's platform, with the examples of tiny changes worth millions and confident
   predictions that were wrong.
3. Read Statsig's [explanation of the peeking problem](https://www.statsig.com/blog/peeking-problem),
   ten minutes, for what sequential testing is and when a tool can let you look early.
   Vendor content; take the method.
4. Write a one-page experiment plan for a change to the feature from project 5.1.4:
   hypothesis, primary metric, two guardrails, smallest effect worth detecting, sample size
   from the calculator, duration, and the segments you will check afterwards. Keep it;
   project 6.8 is the analysis half of this.

</div>

## Additional resources

- Kohavi, Tang and Xu's book site, [experimentguide.com](https://experimentguide.com/), has
  the reading list and errata for *Trustworthy Online Controlled Experiments*, the standard
  reference if you end up owning an experimentation programme. Kohavi's older
  [exp-platform.com](https://exp-platform.com/) hosts the papers behind it.
- Wikipedia on [A/B testing](https://en.wikipedia.org/wiki/A/B_testing),
  [statistical power](https://en.wikipedia.org/wiki/Statistical_power),
  [p-values](https://en.wikipedia.org/wiki/P-value) and the
  [novelty effect](https://en.wikipedia.org/wiki/Novelty_effect), for when you want the
  definitions behind the plain-English versions above.
- Optimizely's [A/B testing glossary entry](https://www.optimizely.com/optimization-glossary/ab-testing/)
  is a decent first explainer to send a stakeholder who has never seen one.
