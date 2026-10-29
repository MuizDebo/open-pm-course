---
title: "4.2.3 Prioritisation frameworks"
description: "RICE, ICE, Kano, weighted scoring and cost of delay: what each is good for, where each misleads, and when to put the spreadsheet away."
---

## Introduction

Every PM has more good ideas than the team can build. Prioritisation is the act of choosing
which ones get the next few weeks of engineering time, and it is where the pressure from
sales, executives, customers and your own enthusiasm all arrive at once. Frameworks exist
to make that choice explainable. They do not make it for you.

This lesson covers the five frameworks you will meet most often, what each one is actually
measuring, and the failure modes of each. It ends with the point most framework guides
skip: the framework is a way to structure an argument, and the argument is the thing. A
score with no reasoning behind it is a guess wearing a number.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- What a prioritisation framework is for and what it cannot do.
- RICE, ICE and weighted scoring: the scoring family.
- Kano: the customer-satisfaction family.
- Cost of delay: the economics family.
- Common failures: false precision, gaming, and prioritising the wrong list.
- When to skip the framework and decide.

## What frameworks are for

A framework does three jobs. It forces you to think about each option along the same
dimensions, so you compare like with like. It makes the reasoning visible, so that a
stakeholder who disagrees can argue with an input rather than with you. And it gives a
default order, so the team is not re-litigating the backlog every week.

What a framework cannot do is supply judgement. Every input is an estimate. The output
inherits all of that uncertainty and then hides it behind a number with decimal places.
Treat the score as a conversation starter and the inputs as the conversation.

## The scoring family

**RICE** comes from Intercom and scores each option on four things: Reach (how many users
it affects in a period), Impact (how much it affects each of them, on a small scale),
Confidence (how sure you are about the first two, as a percentage), and Effort (person-months
or similar). Score is Reach times Impact times Confidence, divided by Effort. The confidence
term is the clever part: it penalises ideas you are excited about but have not validated,
which is exactly the trap PMs fall into.

**ICE** is the lighter cousin: Impact, Confidence, Ease, each scored one to ten, multiplied
or averaged. Fast enough to run on a whiteboard, and that is both its strength and its
weakness. Scores of seven and eight feel different and mean nothing. Itamar Gilad's work on
confidence is a useful corrective: he makes the confidence score depend on the kind of
evidence you have, so that a gut feeling and a successful experiment cannot both be "high".

**Weighted scoring** is the general form. You pick the criteria that matter for your
product (strategic fit, revenue, retention, risk, effort), give each a weight, score each
option on each criterion, and sum. It is flexible, which means it is easy to tune the
weights until your favourite wins. Set the weights before you score anything and have
someone else check the scores.

All three share a failure: they reward things that are easy to count. Reach is countable.
"This makes the product feel trustworthy" is not, so it scores low, and the roadmap fills
with small measurable wins while the product's character erodes.

## The customer-satisfaction family

The **Kano model** sorts features by how customers react to their presence and absence.
Basic features are expected: nobody praises you for them and everybody leaves without
them. Performance features scale: more is better and customers will pay for more. Delighters
are unexpected: their absence is not noticed but their presence wins loyalty. And some
features are indifferent, where nobody cares either way.

Kano is useful because it stops you over-investing in basics (past "good enough" there is
no return) and under-investing in delighters (which never make it through a RICE score
because the reach is unclear). It is also time-sensitive: today's delighter is next year's
basic. Running a Kano survey properly takes real users and a pair of questions per
feature, which is more work than most teams do. The model is still worth knowing as a lens
even when you do not run the survey.

## The economics family

**Cost of delay** asks a different question: what does it cost us, per week, not to have
this? For a feature that unblocks a contract, the cost is the contract's value spread over
the delay. For a compliance deadline, the cost is a step function. For a nice-to-have, the
cost is close to zero, which is the point.

Divide cost of delay by duration and you get a priority order that favours short, valuable
work, sometimes called weighted shortest job first. It is the only framework here that
accounts for time, and it is the right one when deadlines, contracts or seasonality are
real. It is the wrong one when the value of most items is genuinely unknown, because you
will be dividing one guess by another.

## How frameworks fail

**False precision.** A RICE score of 1,340 against 1,290 is a tie. Teams treat it as a
ranking. Round aggressively and treat anything within a third of each other as equal.

**Gaming.** Whoever fills in the sheet decides the order. Stakeholders learn this fast and
start inflating reach for their items. Have inputs filled in by whoever has the evidence,
not whoever wants the outcome, and make the evidence a column.

**Prioritising the wrong list.** A framework applied to a backlog of feature requests
produces the best-scoring feature request. It will not surface the problem nobody has
requested a feature for. Run discovery first (Course 3), frame problems, then prioritise
solutions to the problems that matter.

**Effort as the tiebreaker.** Every framework divides by effort, so small things win. That
is often right and sometimes ruinous: the big thing that would change the business never
scores well against twenty small things. Reserve capacity for big bets outside the
framework.

**Ignoring the strategy.** If your strategy says you are winning on reliability and the
scores say to build a new feature, the scores are wrong, or the strategy is. Strategic fit
is either a criterion with a heavy weight or a filter applied before scoring.

## When to skip it

Sometimes the right answer is obvious and the framework is theatre. A security fix, a
feature that unblocks a signed deal, a bug that is costing you customers daily: decide,
tell people why, move on. Frameworks earn their time when the options are genuinely close,
when the stakeholders genuinely disagree, or when you need a defensible record of why you
chose as you did. Use them then. The rest of the time, your job is judgement, and the
previous course was about building it.

## Assignment

<div class="assignment">

1. Read Intercom's
   [RICE: Simple prioritization for product managers](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/),
   ten minutes. The original write-up, with the reasoning behind each factor and a worked
   example.
2. Read Itamar Gilad's
   [The tool that will help you choose better product ideas](https://itamargilad.com/the-tool-that-will-help-you-choose-better-product-ideas/),
   fifteen minutes, for the confidence meter. It turns the softest input in ICE and RICE
   into something defensible.
3. Read the [Kano model](https://en.wikipedia.org/wiki/Kano_model) entry, ten minutes, and
   Black Swan Farming's [Cost of Delay](https://blackswanfarming.com/cost-of-delay/)
   introduction, ten minutes. Two frameworks the scoring family cannot replace.
4. Take ten candidate features or problems for your product. Score them with RICE. Then
   score them with cost of delay divided by duration. Write a short note on where the two
   orders disagree and which you believe. Keep the sheet and the note for project 4.2.5.

</div>

## Additional resources

- ProductPlan's [Weighted scoring](https://www.productplan.com/glossary/weighted-scoring/)
  glossary entry, for a quick template if you want to build your own criteria.
- Intercom's [Product strategy means saying no](https://www.intercom.com/blog/product-strategy-means-saying-no/),
  the other half of prioritisation: the list of good reasons you will still decline.
- The Scaled Agile Framework's [WSJF](https://www.scaledagileframework.com/wsjf/) page,
  for the formal version of cost of delay divided by job size. You do not need the rest of
  the framework to use this piece.
