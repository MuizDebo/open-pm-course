---
title: "7.4.3 AI metrics"
description: "The handful of numbers that tell you whether an AI feature is working: task completion, acceptance, edit distance, fallbacks, hallucination, latency and cost."
---

## Introduction

Course 6 gave you a metrics tree: a north star at the top, input metrics beneath, each one
defined and sourced. An AI feature slots into that tree, but it adds a layer of its own.
Between "user opened the feature" and "user got value" sits a model doing something
probabilistic, and you need numbers for that middle layer or you will be flying blind
between the offline evals of lesson 7.4.2 and the business outcomes that take weeks to
move.

This lesson gives you those numbers. There are seven that matter in nearly every AI
product. None of them is exotic, and all of them can be instrumented in a week if you ask
for them in the PRD.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- The seven AI-layer metrics and what each one tells you.
- How to instrument them without a research team.
- Which Course 6 metrics still apply and how they relate.
- Reading the numbers together instead of one at a time.
- The two traps: optimising a proxy, and ignoring cost.

## The seven that matter

**Task completion rate.** Of the times a user started a task with the feature, how often did
they finish it? A support assistant: the user's question was resolved without a handoff. A
writing tool: the user kept the draft. A search feature: the user clicked a result and did
not search again. This is the closest thing to a north star for the AI layer, and it has to
be defined per feature, in the PRD, as an event you can log.

**Acceptance rate.** When the feature offered something, did the user take it? Suggestions
accepted, generated replies sent, recommended items chosen. Acceptance is the fastest
signal you have, because it arrives seconds after the output. It is also the easiest to
inflate, since an accepted suggestion can still be wrong.

**Edit distance.** When the user accepted, how much did they change it first? If a
generated email is sent after the user rewrote half of it, the feature did half the work.
Measured as the fraction of characters changed, or the Levenshtein distance between what
was generated and what was used. Low acceptance with low edit distance means the output is
good when it is right; high acceptance with high edit distance means users like the
starting point and not the result.

**Fallback or escalation rate.** How often did the feature give up, refuse, hand off to a
human, or return a generic answer? Some fallbacks are correct: the model should say it does
not know when it does not. The rate you watch is fallbacks on inputs the feature was
designed to handle. Rising fallback rate after a change is the earliest sign something
broke.

**Hallucination rate.** How often did the output assert something false or unsupported?
This is the one metric on the list that cannot come from user behaviour; users rarely
notice a confident falsehood. It comes from the evals: the judge or human review scoring
a sample of production outputs for faithfulness. Report it as a rate on the sample, with
the sample size next to it.

**Latency.** Time from the user's action to a usable output, at the median and at the
ninety-fifth percentile. Users abandon slow features regardless of quality, and AI features
are slower than the rest of your product. Track both numbers; the median hides the users
who left.

**Cost per task.** What each completed task costs in model calls, retrieval and tooling.
Most AI features have real marginal costs, which almost no other software does, and a
feature that works beautifully at a loss is not a product. Track it per task, not per call,
so that a change that doubles calls but halves retries shows up as what it is.

## Instrumenting them

Every one of these is an event or a derived number, and the time to specify them is in the
PRD, as part of the success metrics section from lesson 5.1.1. For each metric, write:

- **The event.** What user or system action fires it, with the properties attached: feature,
  input length, model version, latency, token count.
- **The denominator.** Completion rate of what? Started tasks, or feature opens, or
  sessions? Pick one and write it down.
- **The source.** Behavioural events for completion, acceptance, edit distance, fallback,
  latency and cost. The eval sample for hallucination.

Ask engineering for a daily table with one row per task and a column per metric. A
spreadsheet pivot over that table, from lesson 6.5, is enough to run the feature for its
first few months.

## The Course 6 metrics still apply

The AI layer sits inside the product, and the product metrics do not go away. Retention,
activation and revenue from lesson 6.2 are still the north star; the seven above are input
metrics that explain movements in it. Two relationships to watch:

- **Completion versus retention.** If completion rises and retention does not, users are
  finishing tasks they did not value. Check what tasks they are completing.
- **Acceptance versus support contacts.** If acceptance rises and support contacts rise
  with it, users are accepting outputs that turn out to be wrong later. Check hallucination.

Put the AI metrics on the dashboard from project 6.7 as a block of their own, beneath the
product metrics they feed.

## Reading them together

No single number on the list tells you the feature is good. Read them as a set:

| Pattern | What it usually means |
|---|---|
| High acceptance, high edit distance | Good starting points, poor finished output. Work on quality, not reach. |
| Low acceptance, low fallback | Outputs arrive but users ignore them. Wrong task, wrong moment, or wrong format. |
| Rising fallback after a release | Something broke. Roll back first, investigate second. |
| Flat hallucination, rising completion | Real improvement. Ship. |
| Falling cost, falling completion | You optimised the wrong thing. |

The habit from 7.4.4 of reading individual failures is what turns these patterns into
specific work.

## Two traps

**Optimising the proxy.** Acceptance is easy to move: make the output shorter, more
confident, more agreeable. Users click accept more and are served worse. Every metric on
this list can be gamed by a change that makes the product worse, which is why the eval
suite and the human sample sit beside them. Goodhart's law from lesson 4.2.1 applies with
unusual force here.

**Ignoring cost.** Teams treat model cost as an engineering concern until finance asks why
the feature loses money per user. Put cost per task on the same dashboard as completion from
day one, and set a target for it in the PRD. A feature that cannot be made to pay is a
decision for lesson 7.2.3, not a surprise for later.

## Assignment

<div class="assignment">

1. Read Chip Huyen's [Building LLM applications for production](https://huyenchip.com/2023/04/11/llm-engineering.html),
   twenty-five minutes. Written for engineers, and the clearest account of why latency,
   cost and inconsistency are product problems rather than implementation details. Read it
   for the sections on cost and latency and on the challenges of evaluation.
2. Read the Google SRE chapter on [Service Level Objectives](https://sre.google/sre-book/service-level-objectives/),
   twenty minutes. Not about AI, and exactly the discipline you need: picking a small number
   of indicators, choosing targets, and measuring at percentiles. Apply it to latency and
   fallback rate.
3. Read the Wikipedia article on [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance),
   ten minutes. You only need the idea, not the algorithm: edit distance is a number you can
   ask for, and now you know what it measures.
4. For the AI feature you chose in 7.2.4, define all seven metrics in a table: event,
   denominator, source, target. Add them to the success-metrics section of the PRD you will
   write in 7.3.6, or draft that section now. Then pick the two you would watch on the
   first day after launch and write a sentence on why those two.

</div>

## Additional resources

- Eugene Yan's [Task-specific LLM evals that do and don't work](https://eugeneyan.com/writing/evals/),
  second half. The sections on summarisation and on toxicity metrics show how a quality
  score is built for a specific task, which is what hallucination rate is for yours.
- The Wikipedia entry on [hallucination in artificial intelligence](https://en.wikipedia.org/wiki/Hallucination_%28artificial_intelligence%29),
  for the taxonomy and some well-known public examples to use when explaining the metric
  to stakeholders.
