---
title: "4.2.1 Goals and OKRs"
description: "Outcomes over output: how to set goals a product team can actually steer by, what OKRs are for, and the ways they go wrong."
---

## Introduction

A strategy says where you are going. A goal says how you will know you are getting there.
Most product teams have the first in a slide deck and the second nowhere, which is why the
quarterly review turns into a list of things that shipped rather than a conversation about
whether anything changed.

This lesson is about goals that describe a change in the world rather than a change in the
codebase, and about the most common system for writing them down, objectives and key
results. OKRs are useful and widely abused. By the end you should be able to write a goal
your team can argue with, tell a good key result from a bad one, and spot the three ways a
goals process quietly turns into a to-do list.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- Outcomes versus outputs, and why the difference matters more than the format.
- What an objective and a key result are, and what each is for.
- The marks of a good key result and the marks of a bad one.
- How OKRs fail: too many, too safe, too tied to features, too tied to pay.
- How goals connect upwards to strategy and downwards to the roadmap.

## Outcomes, not outputs

An output is something the team makes: a feature, a redesign, a migration. An outcome is
something that changes for a user or the business because of it: more people finish
onboarding, support tickets about billing fall, enterprise customers renew.

Teams default to outputs because outputs are controllable and visible. You can promise to
ship a feature and then ship it. You cannot promise that users will care. But the whole point
of the product function is that users care, so a goals system built on outputs measures the
one thing that was never in doubt and ignores the thing that was.

The test for any goal: could the team hit it by shipping nothing? If an outcome goal is
"reduce time to first invoice from four days to one", the team might get there by removing a
step, by changing the copy, or by calling every new customer. Any of those counts. If the
goal is "ship the new invoice builder", the team hits it on launch day whether or not anyone
invoices faster. The first goal gives the team a problem; the second gives them an order.

## What OKRs are

Objectives and key results came from Intel in the 1970s, reached Google in 1999 through the
investor John Doerr, and spread from there. The format is simple:

- An **objective** is a qualitative statement of what you want to achieve. It should be
  memorable and a little ambitious. "Make invoicing the reason small businesses choose us."
- **Key results** are the two to four measurable things that would tell you the objective
  is being met. "Time from signup to first invoice under one day for 80 percent of new
  accounts." "Invoicing mentioned in a third of new-customer interviews as a reason for
  switching."

The objective gives direction; the key results give evidence. The discipline is that key
results are numbers you can check, not activities you can tick off, and that the objective
is met when the numbers move, not when the work is done.

OKRs are usually set quarterly for teams and annually for the company, graded at the end on
a simple scale, and reviewed in the open. The grading is meant to be honest, not flattering:
a key result scored at 0.7 was a good quarter, and a column of 1.0s usually means the goals
were too easy.

## Good key results, bad key results

A good key result:

- Describes a change in a number that matters to a user or the business.
- Has a baseline. "Increase activation to 40 percent" means nothing unless you know it is 25
  percent today.
- Can be measured with instruments you have or will have by week two, not by a survey you
  hope to run at the end.
- Would be uncomfortable to miss and plausible to hit. Doerr's advice is that a 70 percent
  hit rate is about right; teams that hit everything are sandbagging.

A bad key result:

- Is a feature with a date on it. "Launch the new dashboard by March" is a milestone, which
  is fine to track, but it is not a key result.
- Is a vanity number: sign-ups, page views, downloads, anything that can go up while the
  product gets worse.
- Measures effort: "run ten user interviews", "ship weekly". Those are habits, and good ones,
  but they are not outcomes.
- Cannot be influenced by the team that owns it. A product team cannot own revenue if sales
  controls pricing and discounting.

The usual fix for a bad key result is to ask "and what would be different if that worked?"
until you reach something a user would notice.

## How OKRs go wrong

Most OKR failures are not failures of the format. They are the organisation using the format
to do something else.

**Too many.** A team with eight objectives has none. Three objectives with three key results
each is already a lot for a quarter. Fewer, written better, beats more.

**Too safe.** When OKRs are used to judge people, people set goals they know they can hit,
and the system stops stretching anyone. Google's guidance is explicit that OKRs are not a
performance review input. If your company ties them to bonuses, expect sandbagging and
plan for it.

**Too tied to features.** The roadmap gets copied into the key results with percentages
attached. This is an output plan in a costume. The giveaway is key results that read as
"complete X".

**Too top-down.** Objectives handed down with no room for the team to shape the key results
produce compliance, not commitment. The better pattern is leadership setting the
objectives, teams proposing the key results, and a short negotiation.

**Set and forgotten.** OKRs written in week one and read again in week thirteen have no
effect on the quarter. They need to appear in the weekly team meeting, next to the numbers.

Goodhart's law hangs over all of this: when a measure becomes a target, it stops being a
good measure. Any key result can be gamed. The defence is to pair each primary number with a
guardrail. "Activation to 40 percent, with thirty-day retention not falling below today's
level."

## Where goals sit

Goals are the joint between strategy and roadmap. The strategy from section 4.1 says which
problems you are choosing to solve and for whom. The goals say what success on those
problems looks like this quarter, in numbers. The roadmap, in the next lesson, says what you
intend to try in order to move those numbers. Each layer should be derivable from the one
above it. If a roadmap item cannot be traced to a key result, and the key result to an
objective, and the objective to the strategy, something in the chain is decoration.

You do not have to call them OKRs. Plenty of good teams use "goals and metrics" or "outcomes
and measures" and avoid the baggage. What matters is the shape: a direction, a small number
of honest measures, a baseline, and a habit of looking at them.

## Assignment

<div class="assignment">

1. Read John Doerr's
   [What is an OKR?](https://www.whatmatters.com/faqs/okr-meaning-definition-example)
   explainer, ten minutes, for the canonical definition and examples from the person who
   brought the method to Google.
2. Watch Rick Klau's
   [How Google sets goals: OKRs](https://www.youtube.com/watch?v=mJB83EZtAjc), about eighty
   minutes, or the first thirty if that is all you have. It is a workshop, not a polished
   talk, and that is why it is useful: you see the grading, the transparency and the
   awkward parts.
3. Read Christina Wodtke's [The Art of the OKR](https://eleganthack.com/the-art-of-the-okr/),
   fifteen minutes, for the clearest treatment of the difference between a key result that
   measures a result and one that measures a task.
4. Read the [OKR entry on Wikipedia](https://en.wikipedia.org/wiki/OKR) and then
   [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law), ten minutes together.
   Hold the second one in mind every time you write a number down for the rest of this
   course.
5. Take the product you have been working on since project 3.1.4. Write one objective and
   three key results for the next quarter. For each key result, write the baseline, the
   instrument you would use to measure it, and a guardrail. Keep it; it becomes the goals
   sheet in project 4.2.5.

</div>

## Additional resources

- Google's [Set goals with OKRs](https://rework.withgoogle.com/en/guides/set-goals-with-okrs)
  guide at re:Work. Short, practical, and the source of the "70 percent is a good score"
  convention.
- Atlassian's [OKRs play](https://www.atlassian.com/team-playbook/plays/okrs) in their
  team playbook, if you want a step-by-step workshop format for setting them with a team.
- Lenny Rachitsky's interview with Christina Wodtke,
  [The ultimate guide to OKRs](https://www.lennysnewsletter.com/p/the-ultimate-guide-to-okrs-christina),
  for the long version, including what to do when the company's OKR process is bad and you
  cannot change it.
