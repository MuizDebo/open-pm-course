---
title: "7.3.2 Human in the loop"
description: "Where people check, correct and teach an AI feature, how to design the loop so it improves, and when full automation is the wrong goal."
---

## Introduction

"Human in the loop" gets used as a reassurance, as in "don't worry, there's a human in the
loop". Used that way it means nothing. A human who glances at a queue of five hundred items
and approves them all is in the loop in the same sense that a rubber stamp is.

Designed properly, the loop is the most valuable part of an AI feature. It is where errors
get caught before they reach anyone, where corrections become training signal, and where
the product earns the right to automate more over time. This lesson is about designing
that loop on purpose: who checks what, how corrections are captured, and how to tell when
automation is the wrong goal.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- The three jobs a person can do in the loop: check, correct, teach.
- Choosing a review point by cost of error and volume.
- Review queues that work and review queues that become rubber stamps.
- Capturing feedback so the system actually improves.
- Automation bias, and why the loop can make things worse.
- When to stop automating.

## Three jobs in the loop

A person in the loop can do three different things, and your design should know which.

**Check.** Look at an output before it takes effect and approve or reject it. The classic
review queue. Catches errors; does not reduce them.

**Correct.** Fix the output and let the fixed version through. Catches errors and produces
a record of what "right" looked like.

**Teach.** Correct in a way the system can learn from, with a reason or a label. Produces
the data that makes next month's model better than this month's.

Most products stop at "check" and wonder why the error rate never falls. The move from
check to correct to teach is mostly a design move, not a modelling one: it is about what
the interface asks of the person and what it records.

## Where to put the review point

Not every output needs a person. Two variables decide:

- **Cost of an error.** A wrong product recommendation costs a click. A wrong fraud flag
  costs a customer. A wrong medical summary costs more than that.
- **Volume.** A person can review tens of items an hour with attention, hundreds with
  none.

Low cost, any volume: automate, sample for quality. High cost, low volume: review
everything. High cost, high volume: the hard case, and the honest answer is to reduce the
volume reaching people by routing. Let the model handle the cases it is confident about and
that history says it gets right, and send the rest to a person. The routing threshold is a
product decision you will revisit every month as the data comes in.

Lesson 7.2.1's decision tree asked about cost of errors and ease of correction. This is
where those answers turn into a design.

## Review queues that work

A review queue fails in a predictable way: the reviewer learns that most items are fine,
starts approving without reading, and the queue becomes theatre. This is automation bias,
the well-documented tendency to defer to a machine's output, and it gets worse as the
machine gets better. The design has to fight it.

- **Show the reasoning, not just the output.** A reviewer who can see why the model flagged
  something can judge it. One who sees only "flagged" can only guess.
- **Mix in known cases.** Seed the queue with items whose correct answer you know and
  measure whether reviewers catch them. If they stop catching them, the queue has become a
  rubber stamp and you need to change something.
- **Make rejecting as easy as approving.** If approval is one click and rejection is a form,
  you have designed for approval.
- **Keep sessions short and volumes honest.** A queue of three hundred at the end of the
  day will be approved in bulk. Cap it, or route more to the model.
- **Report back.** Tell reviewers what their decisions changed. People review better when
  the work visibly matters.

## Capturing feedback that improves the system

There are two feedback channels and they need different designs.

**Explicit feedback.** Thumbs up and down, star ratings, "report this". Cheap to build and
almost useless on their own, because only annoyed and delighted people use them and neither
tells you what was wrong. If you ship one, pair it with a one-tap reason: wrong, unhelpful,
unsafe, other. The reasons are the signal.

**Implicit feedback.** What the person did next. Edited the draft heavily, deleted it,
sent it unchanged, asked again with different words. This is abundant and honest, and it is
where most of the learning comes from. Design the interaction so these signals are
unambiguous: an "accept" that is distinct from "dismiss", an edit that is captured as a
diff, a retry that is logged with the original.

Then close the loop. Feedback that goes into a database nobody reads is a cost with no
return. Before building the feedback capture, write down who will look at it, how often, and
what they will change. If the answer is "the data science team, eventually", you are
building a graveyard.

## When full automation is wrong

The temptation is to treat every human step as a cost to be engineered away. Sometimes the
human step is the product.

- **When the person wants to decide.** A doctor, a lawyer, a hiring manager. The feature's
  job is to prepare the decision, not make it, and taking the decision away destroys the
  value.
- **When accountability has to land somewhere.** A refund, a ban, a diagnosis. Someone has
  to be answerable, and "the model did it" is not an answer a customer or a regulator will
  accept.
- **When the cost of the rare error is unbounded.** A system that is right 99.9 percent of
  the time and catastrophic the rest is not a system you automate fully, however good the
  average looks.
- **When the human step is the trust.** People often value the fact that a person checked.
  Removing that quietly is a product change, not an efficiency gain.

The right goal is usually not "no humans" but "humans spend their time only where it
matters". Automation earns its way in, one routing threshold at a time, with the evidence
from the loop.

## Assignment

<div class="assignment">

1. Read the [Feedback and controls](https://pair.withgoogle.com/chapter/feedback-controls/)
   chapter of Google's People and AI guidebook, twenty minutes. The distinction it draws
   between feedback the person gives on purpose and feedback they give by their actions is
   the one this lesson builds on.
2. Read the Wikipedia article on [automation bias](https://en.wikipedia.org/wiki/Automation_bias),
   ten minutes. Pay attention to the aviation and medical examples. Then write down the
   two ways your review queue from the last step could become a rubber stamp, and what
   you would do about each.
3. Read the [Human-in-the-loop](https://en.wikipedia.org/wiki/Human-in-the-loop) overview,
   five minutes, for the vocabulary other people will use in meetings.
4. For the feature you chose in project 7.2.4, draw the loop: where the model acts alone,
   where a person checks, where a person corrects, and what is recorded at each step. One
   page, boxes and arrows. Mark the routing threshold and say how you would set it on day
   one and how you would move it. This diagram goes into the AI PRD in project 7.3.6.

</div>

## Additional resources

- Chip Huyen's [Building LLM applications for production](https://huyenchip.com/2023/04/11/llm-engineering.html).
  A long engineering-side piece; the sections on evaluation and on the gap between demo
  and production are the ones for a PM.
- Eugene Yan's [Patterns for building LLM-based systems](https://eugeneyan.com/writing/llm-patterns/).
  The "collect user feedback" pattern is a practical companion to this lesson, and the rest
  of the piece previews lesson 7.3.4.
