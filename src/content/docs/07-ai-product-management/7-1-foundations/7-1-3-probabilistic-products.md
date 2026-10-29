---
title: "7.1.3 Probabilistic products"
description: "Why a feature that works 92 percent of the time changes everything about design, testing, launch and support, and how to think in distributions instead of pass or fail."
---

## Introduction

Say an engineer tells you the new feature works 92 percent of the time. For a conventional
feature that sentence is alarming: something is broken and you should find it. For an AI
feature it may be excellent, acceptable or unshippable, and you cannot tell which from the
number alone. You need to know what the other 8 percent looks like, who it happens to, how
bad it is when it happens, and whether the user can tell.

This is the single biggest mental shift in AI product management. Every lesson after this
one assumes you have made it. This lesson is where you make it.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- Why "works 92 percent of the time" is not a quality statement.
- Thinking in distributions: the shape of outcomes, not the average.
- The asymmetric cost of errors and how it decides what you can ship.
- What probabilistic quality does to design, testing, launch and support.
- Precision and recall in one example, because you will be asked.

## From pass or fail to a distribution

A conventional feature is deterministic. Given the same input it does the same thing, so
you can test it once and know. A model-backed feature is probabilistic. Given the same
input it may do slightly different things, and across the range of real inputs it will do
very different things. You cannot test it once. You can only sample it, and what you
learn is a distribution.

So the question "does it work?" has to become several questions:

- **How often is it right?** The headline rate.
- **How right is right?** Excellent, adequate, technically correct but useless?
- **How wrong is wrong?** Slightly off, visibly broken, confidently false, harmful?
- **For whom?** Does it fail evenly or does it fail for one language, one segment, one
  kind of request?
- **Can the user tell?** A visible failure costs a retry. An invisible one costs trust.

A feature that is excellent 60 percent of the time and transparently useless the rest
("I couldn't find that") is often shippable. A feature that is right 98 percent of the
time and confidently fabricates the other 2 percent may be a lawsuit. The average hides
exactly the thing that matters.

## The asymmetry of errors

Errors are not equal, and the inequality is usually the whole design problem.

Consider a feature that suggests a reply to a customer message. If the suggestion is
mediocre, the agent edits it. Cost: a few seconds. If the suggestion promises a refund the
company does not offer, the agent might send it. Cost: real money and a policy breach.
Those two errors have the same weight in an accuracy number and completely different
weights in the business.

So for every AI feature, before anything is built, write down the kinds of error it can
make and what each one costs: to the user, to the company, to trust. Then design to make
the expensive errors rare, visible or impossible, even at the price of making the cheap
ones more common. A model that says "I'm not sure" more often and fabricates less is
usually a better product than the reverse, and no accuracy benchmark will tell you that.

This is also where you learn that the model is only part of the system. A confirmation
step, a human review queue, a hard rule that blocks certain outputs, a fallback to the old
flow: each of these changes the distribution the user actually experiences without
touching the model. Lesson 7.3.2 is about designing those.

## Precision and recall, once

You will hear these two words in every AI planning meeting, so here they are with one
example. A fraud detector flags transactions.

- **Precision** is: of the transactions it flagged, how many were actually fraud? Low
  precision means lots of false alarms, angry customers and tired analysts.
- **Recall** is: of all the actual fraud, how much did it catch? Low recall means fraud
  gets through.

You almost always trade one for the other by moving a threshold. Flag more aggressively
and recall rises while precision falls. The PM's job is not to maximise either. It is to
decide which error is more expensive for this product and set the threshold accordingly.
That decision is a product decision, and if you do not make it, an engineer will make it
by default.

## What this does to each stage

**Design.** The interface has to carry uncertainty honestly. Confidence cues, easy
correction, an obvious way out, and language that does not overclaim. "Here's a draft"
sets a different expectation from "Here's your answer". Lesson 7.3.1 goes deep on this.

**Testing.** Quality assurance becomes evaluation: a set of representative inputs, a
rubric for judging outputs, and a score tracked over time. Every prompt or model change
is re-scored. A change that improves the average and worsens a critical segment is a
regression. Section 7.4 teaches you to build this.

**Launch.** You ship to a slice and watch the distribution in the wild, because the
real inputs are never quite like your test set. You decide in advance what rates of what
failures would make you roll back, and you write those numbers down before launch, when
nobody is attached to the result.

**Support.** Someone will get a bad output and complain. Support needs a script for it,
a way to report it that reaches the team, and the authority to turn the feature off for
that customer. A feature with no "report this" path is a feature that will learn nothing.

**Communication.** Executives want a number. Give them the distribution anyway: "Right
and useful 71 percent, harmlessly wrong 24 percent, badly wrong 5 percent, and here is
what we are doing about the 5." A PM who reports "92 percent accurate" and gets surprised
by the 8 has not done the job.

## A way to practise

Pick any AI feature you use. For a week, every time it produces an output, sort it into
excellent, fine, harmless miss, or harmful miss, and note what the input was like. After
a week you will have a rough distribution and, more importantly, a feel for the kinds of
input that break it. That feel is what AI PMs are paid for.

## Assignment

<div class="assignment">

1. Read Eugene Yan's
   [Patterns for Building LLM-based Systems and Products](https://eugeneyan.com/writing/llm-patterns/),
   forty minutes. Long and worth it. Read it for the patterns that manage uncertainty:
   evaluation, guardrails, fallbacks, and collecting feedback. Skip any code.
2. Read the Wikipedia article on
   [Precision and recall](https://en.wikipedia.org/wiki/Precision_and_recall), ten
   minutes, and look at the confusion matrix diagram until the four cells make sense.
   You will draw that grid on a whiteboard in a meeting within your first month as an
   AI PM.
3. Read the Wikipedia overview of
   [hallucination in AI](https://en.wikipedia.org/wiki/Hallucination_%28artificial_intelligence%29),
   ten minutes, for the taxonomy of ways a model can be confidently wrong and the
   mitigations that exist.
4. Run the week-long practice above on one AI feature you already use, or start it now
   and keep going into the next section. Keep the tally; you will reuse it in lesson
   7.4.4 on error analysis.
5. For the feature you specified in project 5.1.4, imagine it had a model in it. List the
   three most expensive errors it could make and, for each, one design choice that would
   make the error rarer, more visible or impossible.

</div>

## Additional resources

- Google's [Rules of Machine Learning](https://developers.google.com/machine-learning/guides/rules-of-ml).
  Written for engineers, but rule one, "don't be afraid to launch a product without
  machine learning", is the most important sentence an AI PM can read.
- [Applied LLMs](https://applied-llms.org/), a long practitioners' guide by six people
  who shipped these systems. The sections on evaluation and on when not to use a model
  complement this lesson.
