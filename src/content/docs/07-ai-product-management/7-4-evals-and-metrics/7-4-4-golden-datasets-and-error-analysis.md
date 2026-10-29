---
title: "7.4.4 Golden datasets and error analysis"
description: "How to build the set of examples your evals run on, and the weekly habit of reading failures one by one that produces most of the product insight."
---

## Introduction

Every eval in this section runs against a set of inputs. The quality of that set decides
the quality of everything built on it. A golden dataset of fifty invented questions that
all look alike will tell you your feature is excellent right up to the day real users
arrive with the questions you did not imagine.

This lesson is about building the set properly, and about the discipline that goes with
it: looking at the failures, one at a time, and sorting them into piles. Error analysis is
unglamorous, it does not scale, and it is where most of the product decisions in an AI
feature come from. The teams that do it weekly ship better products than the teams with
better models who do not.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- What a golden dataset is and how big it needs to be.
- Where to get inputs: real usage first, synthetic last.
- Labelling: expected outputs versus rubrics, and who does it.
- Error analysis: the look-at-your-data loop and how to categorise failures.
- Keeping the set alive as the product and its users change.

## What a golden dataset is

A golden dataset is a fixed collection of inputs, each paired with a definition of what a
good output looks like, that you run the feature against every time something changes.
Fixed matters: if the set changes between runs, the score changes for reasons that have
nothing to do with your work.

Size depends on what you are measuring. Thirty items is enough to catch regressions in a
narrow feature and to start error analysis. A hundred gives you stable numbers and room for
subgroups. Beyond a few hundred the marginal item adds little unless the feature is broad.
Start at thirty, as project 7.4.6 does, and grow it from failures.

Coverage matters more than size. The set should contain, in roughly the proportion users
send them:

- The common cases that must work every time.
- The hard cases: long inputs, ambiguous requests, missing information, two questions in one.
- The cases the feature should refuse or hand off.
- The cases that went wrong in production last month.
- A few adversarial inputs: the prompt-injection attempts from lesson 7.3.3 and the
  questions designed to make the model say something it should not.

## Where inputs come from

**Real usage, first.** Production logs, support tickets, the transcripts from the user
interviews you ran in project 3.2.5, search queries that got no results. Real inputs are
messy, misspelled, half-formed, and that is their value. Before launch, when you have no
usage, the interview transcripts and the support queue for the manual version of the task
are the best sources.

**Your team, second.** Ask the engineers, support staff and sales team each to write ten
inputs they would expect to break it. People who have watched customers struggle write
better hard cases than you will.

**Synthetic, last.** A model can generate variations of real inputs to fill gaps in
coverage, and it is useful for that. It is a poor source of the set's core, because it
generates inputs that are easy for models. Keep synthetic items labelled as such and below
a quarter of the set.

Strip anything personal from real inputs before they go into the set. The set will be
shared, copied into prompts and kept for years.

## Labelling

Each input needs a definition of good. There are two forms, and most sets use both.

**An expected output**, where there is one right answer: a tracking number, a category, a
yes or no, a figure extracted from a document. These score with a deterministic check.

**A rubric**, where many outputs could be good: a summary, a reply, an explanation. The
rubric is a short list of things a passing output must do and must not do, specific to this
input. "Must mention that the refund takes five to seven days. Must not promise a date.
Must not exceed sixty words." These score with a judge or a person.

Who labels: the PM writes or reviews every label in the first set. It is a few hours, and
those hours are the clearest thinking you will do about what the feature is for. After that,
labelling can be shared, with a calibration pass where two people label the same ten items
and compare.

Keep a column for notes. "Ambiguous, could be either" on a label is information, and the
set will be read by people who were not in the room.

## Error analysis

The score tells you how good the feature is. Error analysis tells you what to do about it.
The loop is simple and the discipline is in doing it every week:

1. **Pull the failures.** From the latest eval run, and from a sample of production outputs
   that the checks flagged or users rejected. Thirty to fifty items.
2. **Read each one.** The input, the output, and why it failed. Write a short free-text note
   per item: "ignored the second question", "invented a policy", "right answer, wrong
   tone", "input was unanswerable and it tried anyway".
3. **Group the notes.** After thirty items the notes cluster into five to ten failure
   types. Count them.
4. **Pick the biggest pile.** That is the next piece of work, whether it is a prompt change,
   a retrieval fix, a new deterministic check, a new fallback, or a change to the product
   so that users stop sending that input.
5. **Add the failures to the golden set.** Each real failure becomes a permanent test. The
   set grows from what went wrong, which is the only growth that matters.

Hamel Husain's field guide, in the assignment, calls this the single highest-leverage
activity in AI product work, and gives the tooling to make it fast: a simple viewer, one
item at a time, with a notes box. A spreadsheet works.

Two things make it a product activity rather than a debugging one. The notes are written
in terms of what the user needed, not what the model did. And the biggest pile is often not
a model problem at all. It is a user sending something the feature was not designed for,
which is a scope decision for you.

## Keeping the set alive

A golden set decays. Users change what they ask, the product adds features, the hard cases
from last year become easy. Three habits keep it useful:

- **Add from failures, weekly.** Covered above. The set should be mostly real failures
  within a few months.
- **Retire with care.** An item that has passed for six months is still a regression test.
  Move it to a "stable" tier that runs less often rather than deleting it.
- **Version it.** When the set changes, the score changes. Keep a changelog so that a jump
  in the number can be traced to the set rather than the feature.

## Assignment

<div class="assignment">

1. Read Hamel Husain's [A Field Guide to Rapidly Improving AI Products](https://hamel.dev/blog/posts/field-guide/),
   thirty minutes. The error-analysis loop above comes from it, along with the case for
   building a simple data viewer and the argument that most teams are blocked on looking,
   not on tooling.
2. Watch [Carrying Out Error Analysis](https://www.youtube.com/watch?v=JoAxZsdw_3w) from
   Andrew Ng's deep learning course, ten minutes. Older and about image classifiers, and
   the method is identical: a spreadsheet of failures, a column per failure type, tick
   marks, and a decision based on the biggest column.
3. Read Simon Willison's [posts tagged evals](https://simonwillison.net/tags/evals/), skim
   for twenty minutes. A running public notebook on how practitioners actually build and
   share eval sets, with links out to the sets themselves. Notice how often the advice is
   "use real inputs".
4. Build the first version of the golden set for your feature from 7.2.4: thirty inputs,
   sourced as described above, each with an expected output or a rubric, and a notes
   column. Mark each one as common, hard, refuse, or adversarial, and check the proportions
   against what you expect users to send. This is the core of project 7.4.6, so do it
   properly.

</div>

## Additional resources

- [Label Studio](https://labelstud.io/), an open-source labelling tool, if the spreadsheet
  stops being enough. Most teams never need it; it is here so you know it exists.
- The [Evaluate](https://huggingface.co/docs/evaluate/index) library documentation from
  Hugging Face, for the standard metrics engineers will reach for when you ask for
  automated scoring. You do not need to run it. You need to recognise the names.
