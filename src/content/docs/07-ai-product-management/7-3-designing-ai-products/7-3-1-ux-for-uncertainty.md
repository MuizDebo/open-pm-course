---
title: "7.3.1 UX for uncertainty"
description: "Designing for a feature that is sometimes wrong: confidence, explanations, graceful failure, undo, expectations and latency."
---

## Introduction

Every product you have designed so far was deterministic. The button did the same thing
every time, and if it did not, that was a bug. An AI feature is different in kind. It will
give a different answer to the same question on Tuesday and Thursday, it will be confidently
wrong some fraction of the time, and no amount of engineering will get that fraction to
zero. The design question is not "how do we make it right" but "how do we make it useful
and safe when it is wrong".

This lesson is about that question. It gives you a set of patterns for showing uncertainty,
explaining outputs, failing gracefully and letting people recover, and it asks you to think
about latency as a design material rather than an engineering problem. Most of the patterns
come from two well-tested sources, Google's People and AI Research guidebook and Microsoft's
guidelines for human-AI interaction, which the assignment sends you to.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- Why "sometimes wrong" changes the design brief.
- Setting expectations before the first use, and keeping them accurate.
- Showing confidence and explanations without overclaiming.
- Failing gracefully: fallbacks, escape hatches and undo.
- Latency and streaming as design decisions.
- The questions to put to a designer before the first mockup.

## The brief changes

In a deterministic product, the design brief is "make the right thing easy". With a model in
the loop, the brief gains three clauses. Make it clear what the feature can and cannot do.
Make it obvious when the output might be wrong. Make it cheap to recover when it is.

That sounds like a longer list of requirements, and it is, but the deeper change is where
the risk sits. In a normal feature, the worst case is that nobody uses it. In an AI feature,
the worst case is that people use it, trust it, and act on a wrong answer. A translation
feature that mistranslates a dosage, a summariser that drops the one line that mattered, a
classifier that flags the wrong customer as fraud. The design has to assume those cases and
make them survivable.

## Setting expectations

People form a mental model of an AI feature within the first few seconds, and that model
decides how they will treat its output. If the feature looks like a search engine, they will
expect facts. If it looks like a chat with a person, they will expect judgement. If it looks
like a calculator, they will expect it to be right.

Your job is to make the mental model match reality. Concretely:

- **Say what it is for, in the interface, not in a help page.** "Drafts a reply from your
  notes. Check it before sending" is a product decision, not copy.
- **Show the limits where they bite.** If the model only knows about data up to a certain
  point, or only covers certain languages, say so at the moment it matters.
- **Avoid the human mask.** Names, avatars and "I think" invite trust the feature has not
  earned. Use them only if the product is deliberately a companion.

Google's guidebook calls this the mental-models chapter, and it is the place to start.

## Confidence and explanations

Two patterns help people calibrate, and both are easy to get wrong.

**Confidence.** Showing a percentage looks rigorous and is usually meaningless to the person
reading it. Better: show confidence through behaviour. High-confidence outputs can be
applied directly; low-confidence ones are presented as suggestions with alternatives; very
low ones say "I'm not sure" and hand back to the person. Three tiers of behaviour beat a
number.

**Explanations.** "Why did it say that?" is a fair question and often has no good answer, so
do not fake one. What you can show: the sources it used (for retrieval-based features), the
inputs it looked at, and the rules it followed. A summary that highlights the sentences it
drew from is explainable in a way that matters. A generated paragraph with "explanation:
based on your data" is not.

The test for both: does this help the person decide how much to trust this specific output?
If it only makes the feature look smarter, cut it.

## Failing gracefully

Assume the feature will fail in three ways: it will produce nothing useful, it will produce
something subtly wrong, and it will produce something confidently wrong. Design for each.

- **Fallbacks.** When the model cannot do the task, what happens? The right answer is almost
  never an error message. It is the non-AI version of the feature: the manual form, the
  search results, the human agent. Design the fallback first, because it is what people
  see on the worst day.
- **Escape hatches.** At every step, the person should be able to say "no, I'll do it
  myself" without losing their work. If the only way out of the AI flow is to abandon the
  task, people will abandon the product.
- **Undo.** Every action the feature takes on the person's behalf must be reversible, and
  the reversal must be obvious. Sent emails, applied edits, changed settings: if the
  feature can do it, the feature can undo it, or it does not do it without confirmation.
- **Corrections that teach.** When someone fixes the output, capture the fix. Lesson 7.3.2
  is about turning that into a system that improves. Here, just make sure correcting is
  easier than starting over.

The guidebook's chapter on errors is the best short treatment of this, and the assignment
asks you to read it with your own feature in mind.

## Latency and streaming

A model call takes longer than a database call, sometimes much longer, and that is a design
input. Three choices:

1. **Stream.** Show the output as it is produced. People tolerate waiting when they can see
   progress, and they can start reading. The cost is that a wrong answer streams too, so
   the escape hatch must work mid-stream.
2. **Do it in the background.** For anything that takes more than a few seconds, run it
   asynchronously and notify. Nobody wants to watch a spinner for a report.
3. **Pre-compute.** If the inputs are known ahead of time, generate before the person asks.
   Drafts ready when the inbox opens, summaries ready when the meeting ends.

Whichever you pick, measure it. Time to first useful output is a product metric for an AI
feature, as much as accuracy is.

## Questions for the first mockup

Before a designer draws anything, you should be able to answer, in writing:

- What does the feature do when the model returns nothing useful?
- What does the person see that tells them how much to trust this output?
- How do they undo it?
- How do they get out of the flow and do it the old way?
- How long will they wait, and what will they see while waiting?
- What will they believe the feature is, after ten seconds?

If any answer is "we'll figure it out", that is the design problem, and it is yours.

## Assignment

<div class="assignment">

1. Read the [Mental models](https://pair.withgoogle.com/chapter/mental-models/) and
   [Errors and graceful failure](https://pair.withgoogle.com/chapter/errors-failing/)
   chapters of Google's People and AI guidebook, forty minutes together. They are the
   clearest published treatment of the two ideas this lesson leans on. Note the worksheets
   at the end of each.
2. Read Microsoft's [guidelines for human-AI interaction](https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/),
   twenty minutes. Eighteen guidelines, grouped by when they apply: initially, during
   interaction, when wrong, over time. Pick the five that matter most for the feature you
   chose in project 7.2.4 and write one sentence each on how you would meet them.
3. Watch the first thirty minutes of Andrej Karpathy's
   [Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g), one hour
   in full. You do not need the second half yet. The first half is the best plain
   explanation of why these systems are probabilistic, which is the fact this whole lesson
   is designed around.
4. Take the feature from 7.2.4 and answer the six questions in the last section above, in
   writing, half a page. Keep it; it goes into the AI PRD in project 7.3.6.

</div>

## Additional resources

- The full [People and AI guidebook](https://pair.withgoogle.com/guidebook/) and its
  [patterns library](https://pair.withgoogle.com/guidebook/patterns). Worth bookmarking;
  you will come back to it for every AI feature.
- Microsoft's [HAX design library](https://www.microsoft.com/en-us/haxtoolkit/library/),
  which pairs each guideline with real product examples.
- Nielsen Norman Group on [AI as a new UI paradigm](https://www.nngroup.com/articles/ai-paradigm/),
  a short argument that intent-based interfaces change what "usability" means.
