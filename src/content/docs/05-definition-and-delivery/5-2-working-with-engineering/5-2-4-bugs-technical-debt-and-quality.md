---
title: "5.2.4 Bugs, technical debt and quality"
description: "What technical debt actually is, when to pay it and when not to, how to triage bugs, and how to learn from failures without blame."
---

## Introduction

At some point an engineer will tell you the team needs a sprint to "pay down tech debt", and
you will have to decide whether to give it to them. Say yes every time and you ship nothing.
Say no every time and in a year the team cannot ship anything either, because every change
breaks three other things. The decision is a product decision, and you cannot make it well
without understanding what debt is, where it comes from, and what it costs.

This lesson covers the debt metaphor and its misuse, bugs and how to triage them, the
quality argument, and the practice that keeps all of this honest: the blameless postmortem.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- Ward Cunningham's original debt metaphor and what it was and was not about.
- Fowler's quadrant: prudent, reckless, deliberate, inadvertent.
- When to pay debt down and when to leave it.
- Bug triage: severity, frequency, and the bugs you choose not to fix.
- Why quality is cheaper, not more expensive, past the first few weeks.
- Blameless postmortems and why they are the PM's business.

## The metaphor, as intended

Ward Cunningham coined "technical debt" in the early 1990s to explain to his finance-industry
bosses why the team sometimes shipped code it knew was imperfect. Shipping fast with a
simpler design is like borrowing: you get the product sooner, and you pay interest in the
form of extra effort on every later change, until you refactor, which is repaying the
principal. Used that way, debt is a sensible choice, made on purpose, with a plan to repay.

The metaphor got stretched. "Tech debt" now covers deliberate shortcuts, honest mistakes,
code that was fine until requirements changed, and code the current team simply dislikes.
Those are different things with different remedies, and lumping them together is how debt
conversations become unwinnable.

## Fowler's quadrant

Martin Fowler sorted debt on two axes. **Deliberate or inadvertent**: did the team know they
were taking a shortcut? **Prudent or reckless**: was it a reasonable call given what they
knew?

- **Prudent and deliberate**: "we'll ship the simple version now and rework it when we have
  ten customers." Good debt. Track it.
- **Reckless and deliberate**: "we don't have time for tests." Bad debt. Usually a sign of
  pressure from someone, possibly you.
- **Prudent and inadvertent**: "now that we've built it, we see how we should have built it."
  Unavoidable and healthy; it is what learning looks like.
- **Reckless and inadvertent**: the team did not know a better way existed. A skills problem,
  not a scheduling one.

When an engineer raises debt, ask which quadrant. The answer tells you whether the fix is a
sprint, a hiring conversation, or a change in how you set deadlines.

## When to pay it down

Debt is only worth repaying where you are going to keep working. Interest is charged on code
you change; code nobody touches costs nothing however ugly it is. So:

- **Pay down debt in the areas your roadmap is about to touch.** Refactoring the payments
  code before the pricing project is cheap. Refactoring the admin panel nobody changes is
  vanity.
- **Fold it into feature work** where you can, rather than scheduling separate debt sprints.
  A separate sprint is sometimes right, but it is also invisible to stakeholders and easy to
  cancel.
- **Make the interest visible.** If a feature took three weeks because of debt, say so in the
  review. "Two weeks of feature, one week of paying for last year" is a sentence
  leadership understands.
- **Watch for the moment the interest exceeds the payment.** When routine changes start
  taking twice as long and every release ships a regression, you are past the point where
  "later" is cheaper. That is the time to stop and fix, and it is your call to make.

## Bugs and triage

Every product has more bugs than it will ever fix. Triage is deciding which ones matter, and
it is a product decision because it trades user pain against new work. A simple frame:

- **Severity**: what happens to the user? Data loss, blocked task, wrong result, cosmetic.
- **Frequency**: how many users, how often? One user once is different from every user daily.
- **Workaround**: can they get past it?

A severe, frequent, no-workaround bug is an incident; stop and fix it. A cosmetic, rare bug
with a workaround may never be fixed, and that is a legitimate decision, as long as it is a
decision and not a backlog item quietly rotting. Say which bugs you have chosen not to fix
and why. Support and sales can live with a known issue; they cannot live with a surprise.

Run triage on a cadence, weekly or per sprint, with an engineer, not alone. The engineer knows
which cheap-looking bugs are expensive and which scary-looking ones are a one-line fix.

## Quality is not the slow option

The intuition that quality costs time is true for a few weeks and false after that. Fowler's
essay in the assignment makes the case with a curve: a codebase with low internal quality
gets slower to change every week, and within a month or two the high-quality codebase is
shipping faster and keeps pulling ahead. Tests, reviews and tidy design are not a tax on
speed; they are what speed is made of past the first release.

For you, this means the engineer asking for time to write tests is usually asking to go
faster, not slower. Joel Spolsky's old essay in the resources is the other side: the
catastrophic version of "fixing" quality, the ground-up rewrite, which has sunk more products
than any amount of debt.

## Blameless postmortems

When something breaks in production, the team should write up what happened, why, and what
will change, without naming who was at fault. Google's SRE book chapter in the assignment is
the standard. The reasoning: people make mistakes in systems that allowed the mistake, and if
the writeup punishes the person, the next person hides the mistake, and the system never gets
fixed.

This is the PM's business for two reasons. Some incidents are product decisions: the feature
that was rushed, the edge case nobody specified, the launch that went to everyone at once.
You should be in the room and sometimes you should be the one writing "I decided". And the
same practice, applied to product failures rather than outages, is what lesson 2.1.2 was
about. The habit transfers.

## Assignment

<div class="assignment">

1. Watch Ward Cunningham explain the
   [debt metaphor](https://www.youtube.com/watch?v=pqeJFYwnkjE), five minutes. The man who
   coined it on what he meant, and in particular that debt was never an excuse to write bad
   code.
2. Read Martin Fowler's [Technical Debt](https://martinfowler.com/bliki/TechnicalDebt.html) and
   [Technical Debt Quadrant](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html), ten
   minutes together. Then sort any debt you have heard a team complain about into the
   quadrant.
3. Read Fowler's [Is high quality software worth the cost?](https://martinfowler.com/articles/is-quality-worth-cost.html),
   fifteen minutes. The curve in the middle is the argument you will need the next time a
   stakeholder asks why the team "wastes time" on tests.
4. Read the [postmortem culture](https://sre.google/sre-book/postmortem-culture/) chapter of
   Google's SRE book, twenty minutes. Note the structure of a postmortem and the rules for
   keeping it blameless. You will run one in project 5.4.4.
5. Write a one-page triage policy for the product from project 3.1.4: the severity levels,
   what each means for response time, and who decides. Keep it for the launch pack.

</div>

## Additional resources

- Ward Cunningham's own wiki page,
  [Ward explains debt metaphor](http://wiki.c2.com/?WardExplainsDebtMetaphor), is the
  transcript of the video, for quoting.
- Joel Spolsky, [Things You Should Never Do, Part I](https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/),
  ten minutes. The case against the rewrite, from 2000, still cited every time someone
  proposes one.
- The SRE book's chapter on [eliminating toil](https://sre.google/sre-book/eliminating-toil/),
  for a precise vocabulary for the repetitive work that debt creates.
