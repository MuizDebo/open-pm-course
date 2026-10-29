---
title: "5.2.3 Estimation and why it fails"
description: "Why software estimates are wrong, how wrong, what story points are for, and what a product manager should do with an estimate."
---

## Introduction

Every product manager has told someone a date and watched it pass. The usual reaction is to
blame the engineers, the second usual reaction is to blame yourself, and the correct reaction
is to understand that estimating software is hard for structural reasons that no amount of
diligence removes. Once you know why, you stop asking for precision that cannot exist and
start asking for the thing that can: a range, a confidence, and early warning.

This lesson is about what estimates are, why they fail, and how to use them without being
burned.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- Why estimates are late more often than early, and by how much.
- The planning fallacy and Hofstadter's law.
- Story points, planning poker, and what they are actually for.
- The S-curve of a project and why the first week lies.
- What to do with an estimate: ranges, confidence, and tracking.

## Estimates are skewed, not just noisy

If estimates were merely imprecise, they would be early about as often as they are late. They
are not. Software work finishes late far more often than early, and when it is late it is
often very late. The reason is the shape of the distribution. The fastest a task can go is
bounded: you cannot finish in less than zero time, and in practice not much less than the
estimate. The slowest it can go is unbounded: one surprising dependency, one wrong assumption
about the data, and a two-day task is a two-week task. The average of many such tasks is
pulled by the long tail.

Erik Bernhardsson's post in the assignment makes this precise with a statistical model. The
headline is that even if the median task takes exactly as long as estimated, the project as a
whole takes much longer, because the sum is dominated by the few tasks that blew up. That is
not a people problem. It is arithmetic.

## The planning fallacy

Humans estimate by imagining the task going well. We do not imagine the sick day, the
ambiguous spec, the library that turns out to be unmaintained. Kahneman and Tversky called
this the planning fallacy, and it holds for every kind of plan, from term papers to Olympic
stadiums. Hofstadter's law is the joke version: it always takes longer than you expect, even
when you take into account Hofstadter's law.

Two things reduce it. The first is reference-class forecasting: ignore your sense of this task
and ask how long similar tasks actually took. Your past sprints are the reference class. The
second is to ask for the estimate as a range, which forces the estimator to picture the bad
case rather than only the good one.

## Story points

Many teams estimate in story points rather than hours. A point is a unit of relative size:
this task is about twice that one. The point of points is to stop pretending to a precision
nobody has, and to let the team's actual throughput, its velocity in points per sprint,
convert sizes into dates. Planning poker, where everyone estimates privately and then
reveals, exists to surface disagreement: when one engineer says two and another says
thirteen, one of them knows something, and the conversation is the value.

What points are not: a productivity metric, a way to compare teams, or a thing to report
upward. The moment points become a target, they inflate, and the only thing you have lost is
the forecast. Mike Cohn's pieces in the assignment are the standard references.

Some teams have dropped estimates altogether and simply count stories, having sliced them
small enough that size variance stops mattering. Lesson 5.2.5 covers slicing. Whether or not
your team estimates, the slicing is where the real predictability comes from.

## The S-curve

Projects do not progress in a straight line. They start slow, while the team learns the
problem and makes the decisions that everything else depends on. They go fast in the middle,
when those decisions are made and the work is mostly execution. They slow again at the end,
in integration, edge cases, polish and the bugs that only appear when everything is
connected.

Two consequences. First, "we're thirty percent through the time and twenty percent done" is
normal in week one and alarming in week six. Judge progress against the curve, not the line.
Second, the last ten percent reliably takes far more than ten percent of the time, so a team
that reports "nearly done" is often two weeks out. Ask what remains, not what percentage.

## What to do with an estimate

- **Ask for a range, with a confidence.** "Two to four weeks, probably three" is useful. "Three
  weeks" is a guess with the uncertainty hidden.
- **Ask what would make it the long end.** The answer is a list of risks. Go and retire the
  ones you can: get the answer from legal now, find out if the data exists, check the
  third-party API actually does what the design assumes.
- **Commit to the outside, communicate the middle.** Tell stakeholders a date you can hit at
  the long end of the range. Tell the team the plan is the middle. Deliver early rather than
  explain late.
- **Track against the curve, weekly.** The useful question is "what did we learn this week
  that changes the estimate?" If the answer is "nothing" for three weeks on a risky project,
  nobody is looking.
- **Never negotiate an estimate down.** You can cut scope, which changes the work. Pressing an
  engineer to say a smaller number changes nothing except whether they tell you the truth
  next time.
- **Do not pad silently.** If you add buffer, say so. A PM who quietly doubles every estimate
  teaches the team that their numbers do not matter.

## When someone wants a date anyway

They will. Sales has a customer, leadership has a board meeting. Give a date, from the outside
of the range, and say what it assumes: this scope, this team, no surprises of this kind. Then
write those assumptions down where everyone can see them. When one breaks, the conversation is
about the assumption, not about your credibility. Lesson 2.1.1 is about living with the rest.

## Assignment

<div class="assignment">

1. Read Erik Bernhardsson's
   [Why software projects take longer than you think: a statistical model](https://erikbern.com/2019/04/15/why-software-projects-take-longer-than-you-think-a-statistical-model.html),
   fifteen minutes. The maths is light and the conclusion is the one fact about estimation
   you most need: the tail, not the median, sets the date.
2. Read Jacob Kaplan-Moss's [Estimating software projects](https://jacobian.org/2021/may/20/estimation/),
   twenty minutes. A working engineering leader's method, with ranges and confidence, that you
   can ask your own team to use.
3. Read Mike Cohn on [What are story points?](https://www.mountaingoatsoftware.com/blog/what-are-story-points)
   and [Planning poker](https://www.mountaingoatsoftware.com/agile/planning-poker), ten
   minutes together. You want the purpose of each, so you can defend the practice to a
   stakeholder who wants hours.
4. Read the Wikipedia entry on the [planning fallacy](https://en.wikipedia.org/wiki/Planning_fallacy),
   ten minutes, for the evidence base and the reference-class idea. Then estimate, as a
   range, how long the remaining projects in this course will take you. Write it down. Check
   it when you finish.
5. Take the three features you sketched in lesson 5.2.1 and, for each, write what would make
   it take the long end of its range. Three risks per feature. This is the risk list you will
   use in project 5.2.6.

</div>

## Additional resources

- [Hofstadter's law](https://en.wikipedia.org/wiki/Hofstadter%27s_law), one minute. For the
  next time someone asks why the date moved.
- Lesson 2.2.1 on reversible and irreversible decisions. The decisions that most affect an
  estimate are made in week one, and most of them are reversible if someone checks.
