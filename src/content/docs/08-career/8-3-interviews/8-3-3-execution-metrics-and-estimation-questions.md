---
title: "8.3.3 Execution, metrics and estimation questions"
description: "Metric drops, 'how would you measure', root cause trees, Fermi estimates and trade-off questions, with a worked example of each."
---

## Introduction

The execution round, sometimes called the analytical round, is the one experienced PMs tend
to underestimate and new PMs tend to fear. It asks you to reason with numbers under pressure:
a metric has moved and you must explain it, a feature is launching and you must say how to
measure it, a number is unknown and you must estimate it, two good things conflict and you
must choose.

If you did Course 6, you already have the tools. This lesson shows how they appear in the
interview, with a worked example of each question type and the structure interviewers are
listening for.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- The four question types: metric change, measuring success, estimation, trade-offs.
- Diagnosing a metric drop with a root cause tree.
- Defining success metrics for a feature in a way that survives pushback.
- A Fermi estimate worked through, and what is actually being graded.
- Trade-off questions and how to choose out loud.

## Metric change questions

"Daily active users of our ride-hailing app dropped eight percent last week. What do you do?"

The structure interviewers want is a tree, not a list. Lesson 6.3's funnels and segments and
lesson 2.2.1's decision discipline both apply.

**Clarify the metric.** How is DAU defined? Over what period did it drop, and compared to
what? Is it still falling or did it step down once? A sudden step suggests a cause with a
date. A slow slide suggests something structural.

**Rule out the boring explanations first.** Measurement: did tracking break, did a release
change how the event fires, did a dashboard change? External: a holiday, weather, a
competitor's promotion, an app store outage. Seasonality: what did this week look like last
year? Interviewers reward candidates who check for a broken dashboard before redesigning the
product.

**Then segment.** Platform (did it drop on one operating system, which suggests a release?),
geography (one city, which suggests a local cause?), user cohort (new users or returning,
which separates acquisition from retention?), funnel stage (did people open the app and not
book, or not open it at all?). Each cut either isolates the drop or rules out a branch.

**Form a hypothesis and say how you would confirm it.** "If the drop is isolated to new
Android users in week one after a release, I would suspect an onboarding regression and look
at crash rates and the funnel from install to first booking."

**Say what you would do about it.** Roll back, fix forward, communicate. Then say how you
would prevent it, which is usually a monitoring alert on the segment that broke.

The whole answer is a tree with the boring branches pruned first. Draw it if you have a
whiteboard. Wikipedia's page on the [issue tree](https://en.wikipedia.org/wiki/Issue_tree)
is the general form; the five whys from lesson 3.1.1 is the depth-first version.

## Measuring success questions

"How would you measure the success of a new 'save for later' feature on an e-commerce app?"

Start with the goal the feature serves, because a metric without a goal is a vanity metric.
Save for later probably exists to recover purchases that would otherwise be abandoned and to
bring people back. So:

- **Primary metric:** the conversion rate of saved items to purchases within thirty days.
- **Secondary:** the share of sessions that include a save; return visits from a saved-item
  notification.
- **Guardrails:** overall conversion rate, which should not fall because people save instead
  of buying now; checkout abandonment; notification opt-outs.
- **Counter-metric to watch:** saves that never convert, which would suggest the feature is a
  graveyard.

Then say how you would read the numbers: compared to what baseline, over what period, with
what segment cuts. If you can, say you would launch it as an experiment and point to lesson
6.4. Interviewers push on this round by asking "why that metric and not this one?" Have the
goal ready; it answers every version of that question.

## Estimation questions

"How many people in Lagos order food delivery on a typical Friday evening?"

Nobody cares about the number. The grade is on the structure, the reasonableness of each
assumption, and whether you sanity-check the result. Wikipedia's
[Fermi problem](https://en.wikipedia.org/wiki/Fermi_problem) page has the classic examples.

A worked path: Lagos has roughly twenty million people. Perhaps a third are adults with a
smartphone and income to spare, so about seven million potential customers. Of those, maybe
one in five has ever used a delivery app, so around 1.4 million. On a Friday evening, maybe
one in ten of those orders, so about 140,000 orders. Sanity check: the leading platform
publicly talks about orders in the low millions a month across the whole country, which is
tens of thousands a day, so 140,000 on the busiest evening in the biggest city is high but
in the right order of magnitude. You might revise one assumption down and land near 80,000.

Say your assumptions out loud, round aggressively, and finish with the sanity check. If the
interviewer offers a correction to an assumption, take it and redo the arithmetic. Lesson
3.3.1's market sizing is the same skill with more time.

## Trade-off questions

"Engineering says the feature will take six weeks with the design you want or two weeks with a
simpler version. Sales has promised a customer the full version in four. What do you do?"

These test judgement and communication more than analysis. Structure: name the trade-off
plainly, name the stakeholders and what each actually needs, propose a path, and say how you
would communicate it. "The customer needs to solve their problem, not to have our exact
design. I would ship the two-week version to them in a pilot, confirm it solves the problem,
and use what we learn to decide whether the full design is worth the extra four weeks. I
would tell sales today, not after the deadline." Lessons 2.1.3 and 2.3.4 are this round.

## What is being graded, across all four

- Did you clarify before computing?
- Did you structure the problem into parts?
- Did you rule out measurement and external causes before blaming the product?
- Did you state assumptions and sanity-check results?
- Did you choose, and give a reason?
- Could the interviewer follow you?

Precision is not on the list. Structure and honesty are.

## Assignment

<div class="assignment">

1. Browse Exponent's bank of [estimation questions](https://www.tryexponent.com/questions?type=estimation),
   ten minutes, for dozens more Fermi prompts, many with community answers you can compare
   against. Do three of them out loud, five minutes each, saying assumptions aloud.
2. Reread lesson 6.3 and then write out, as a tree, how you would diagnose a ten percent
   drop in completed orders for the product you have been building through this course.
   Include at least one measurement branch and one external branch before any product branch.
3. Take the feature you specified in project 5.1.4 and write its success metrics in the form
   above: goal, primary, secondary, guardrails, counter-metric. One page. Compare it with the
   metrics section of your PRD and note what you would change.
4. Watch one recorded execution or analytical mock interview on Exponent's
   [YouTube channel](https://www.youtube.com/@tryexponent), twenty to thirty minutes. Note
   the moment the candidate first mentioned checking whether the data was broken, or note
   that they never did.

</div>

## Additional resources

- Evan Miller's [sample size calculator](https://www.evanmiller.org/ab-testing/sample-size.html),
  from lesson 6.4, is worth having open when an interviewer asks how long an experiment would
  need to run. Knowing that a small effect needs tens of thousands of users per arm is a
  mark of someone who has actually done this.
- Wikipedia's [MECE principle](https://en.wikipedia.org/wiki/MECE_principle) explains the
  "mutually exclusive, collectively exhaustive" test for whether your tree's branches are
  well formed. Consulting jargon, but the idea is sound.
