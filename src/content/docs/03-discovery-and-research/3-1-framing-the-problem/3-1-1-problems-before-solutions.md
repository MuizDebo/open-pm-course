---
title: "3.1.1 Problems before solutions"
description: "How to state a problem so that it can be solved, why teams skip this step, and what it costs them."
---

## Introduction

Most product work starts in the wrong place. Someone has a solution: a feature, a redesign,
a thing a competitor has, a thing the CEO saw at a conference. The team builds it. Months
later, nobody can say what problem it was for, so nobody can say whether it worked.

Discovery is the discipline of starting from the problem instead. It is not slower. A team
that spends a week stating the problem precisely usually ships sooner than a team that
spends three months building the first solution that came to mind, then rebuilding it. This
lesson gives you the tools for that first week: the problem statement, the hypothesis, and
the five whys. Everything else in Course 3 depends on them.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- Why teams skip problem framing, and what it costs.
- What a good problem statement contains and how to write one.
- Turning a problem into a testable hypothesis.
- The five whys, and when to stop asking.
- How to tell a problem from a solution in disguise.

## Why teams skip this

Nobody decides to skip the problem. It happens because solutions are concrete and problems
are not. A feature can be drawn, estimated and put on a roadmap. "Users do not come back
after the first week" cannot. So the meeting drifts toward the thing that can be scheduled.

It also happens because solutions arrive with authority attached. A customer asked for it. A
senior person suggested it. Sales lost a deal without it. Each of those is a real signal,
and each is a solution wearing the costume of a problem. The PM's job is to take off the
costume and ask what is underneath.

The cost is not that the team builds the wrong thing once. It is that the team never learns
anything. A solution with no stated problem cannot fail, because there is nothing to measure
it against, so the same mistake gets made again with a different feature.

## The problem statement

A problem statement is a few sentences that say who has a problem, what it is, when it
happens, and why it matters to them and to you. A workable template:

> **Who:** [a specific group of people]
> **Struggles to:** [do a specific thing]
> **When:** [a specific situation]
> **Because:** [the obstacle, as best you understand it]
> **Which costs them:** [time, money, trust, something they care about]
> **And costs us:** [churn, support load, lost revenue, something the business cares about]

Three tests of a good one:

- **It names a person, not a persona.** "Small-business owners" is a market. "The owner of a
  three-person plumbing firm doing her invoices on Sunday night" is someone you can picture
  and go and find.
- **It contains no solution.** If the statement mentions a feature, a screen or a technology,
  it is a solution. "Users need a dashboard" is a solution. "Users cannot tell whether their
  campaign is working until the month ends" is a problem.
- **It could be wrong.** A problem statement is a claim about the world. If there is no
  evidence that could contradict it, it is a slogan.

Write the statement before the first user interview, then expect to rewrite it after the
fifth. The first version is a hypothesis about what the problem is. The research is how you
find out.

## From problem to hypothesis

A hypothesis is a problem statement with a bet attached. The shape is: we believe that
[doing this] for [these people] will [produce this change], and we will know because
[this measure moves by this much].

The last clause is what makes it a hypothesis rather than a wish. If you cannot say what you
would observe if you were right, you cannot say what you would observe if you were wrong,
and the work cannot be evaluated. Write the measure before the work starts, not after, when
it is tempting to pick whichever number went up.

Two kinds of hypothesis are worth separating:

- **Problem hypotheses** claim that a group has a problem. Tested by research: interviews,
  support data, analytics. Course 3.
- **Solution hypotheses** claim that a particular approach will relieve it. Tested by
  prototypes and experiments. Courses 5 and 6.

Teams in a hurry test the second without ever testing the first, and then wonder why a
well-built feature went unused.

## The five whys

The five whys is a method from manufacturing that works just as well on product problems.
State the symptom, ask why it happens, then ask why of the answer, and keep going until you
reach something you can act on. Five is a convention, not a rule.

An example from a subscription product:

1. Why did revenue dip? Because renewals fell in March.
2. Why did renewals fall? Because a cohort of customers who joined in a January promotion
   did not renew.
3. Why did that cohort not renew? Because most of them never used the product after the
   first week.
4. Why did they stop after a week? Because the promotion sold them a use case the product
   does not actually serve well.
5. Why did the promotion promise that? Because marketing wrote it from the feature list,
   not from how current customers describe the value.

The feature list answer, five steps down, is a problem a PM can do something about. The
first answer, "revenue dipped", is not.

Two warnings. The method rewards whoever is in the room, so run it with people who have
different views of the problem, not just your own. And it tends to produce a single causal
chain when real problems usually have several. If the chain feels too neat, branch it: ask
"what else?" at each step.

## Spotting a solution in disguise

You will be handed solutions dressed as problems every week. Some tells:

- The sentence contains the word "need" followed by a noun. "We need an export button."
  Ask: what would they do with the export?
- The sentence names a competitor. "Competitor X has this." Ask: what are their customers
  getting from it that ours are not?
- The sentence comes with a mockup. Ask the person what they saw that made them draw it.
- The sentence is urgent and vague at once. "Customers are frustrated." Ask: which ones,
  doing what, and what did they say?

None of these questions is hostile. They are the questions that turn a request into
something you can research. People who bring you solutions usually know the problem very
well; they just have not been asked to say it.

## Assignment

<div class="assignment">

1. Read Dwayne Spradlin's
   [Are You Solving the Right Problem?](https://hbr.org/2012/09/are-you-solving-the-right-problem),
   fifteen minutes. A four-step process for problem definition, with examples of expensive
   misframings. Read it for the idea that the problem statement is itself a product that
   deserves iteration.
2. Read Teresa Torres's
   [Product Discovery: A Practical Guide](https://www.producttalk.org/2021/08/product-discovery/),
   twenty minutes. A working definition of discovery as a weekly habit rather than a phase,
   and the clearest account of why teams that start from solutions stop learning.
3. Read Marty Cagan's [Product Discovery](https://www.svpg.com/product-discovery/), ten
   minutes, for the four risks discovery exists to retire. Notice which of them this lesson
   addresses and which the rest of Course 3 covers.
4. Watch Rory Sutherland's [Perspective is everything](https://www.ted.com/talks/rory_sutherland_perspective_is_everything),
   eighteen minutes. A reminder that the problem you are handed is often not the problem the
   person has, and that reframing it is where the value is.
5. Take the memo you wrote in lesson 1.1.4 about a product that annoys you. Rewrite the
   annoyance as a problem statement using the template above, then run the five whys on
   it. Keep both; the project at the end of this section builds on them.

</div>

## Additional resources

- The Wikipedia entry on [Five whys](https://en.wikipedia.org/wiki/Five_whys), for the
  origin of the method and its known weaknesses.
- Amazon's [Working Backwards](https://www.workingbackwards.com/) site, from the book of the
  same name, on the press-release-first method of forcing a team to state the customer
  problem before building.
