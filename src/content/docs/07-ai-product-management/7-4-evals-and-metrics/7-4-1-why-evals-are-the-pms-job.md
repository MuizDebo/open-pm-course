---
title: "7.4.1 Why evals are the PM's job"
description: "In an AI product, the written definition of good is the spec. If nobody writes it down, the product has no spec."
---

## Introduction

In Course 5 you learned to write a requirements document: what the feature does, for whom,
what done looks like. For a button or a form, that document is enough. An engineer builds
it, it either works or it does not, and a tester can tell which in an afternoon.

An AI feature breaks that arrangement. The model does not do one thing; it does something
slightly different every time, and "works" is a matter of degree. A summariser that is
excellent on short emails and useless on long contracts has not passed or failed. It has
scored, and nobody knows the score because nobody wrote down what a good summary of a
contract looks like.

Evaluations, usually shortened to evals, are how you write that down. They are the sets of
examples, the scoring rules and the measurements that say what good means for your feature
and how close you are to it. This lesson argues that writing them is the product manager's
job, not a technical chore to be delegated, and shows what happens to teams that skip it.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- Why "good" has to be written down as examples and rubrics, or it does not exist.
- What vibes-based shipping is and the three ways it fails.
- Why the person who owns the user and the outcome has to own the definition of good.
- What a minimum viable eval looks like on day one.
- How evals change the conversation with engineering and leadership.

## The spec problem

A product requirements document says "the assistant answers questions about the user's
order history". Read it as an engineer and the questions start immediately. Answers in what
tone? How long? What if the order is ambiguous? What if the user asks something the data
cannot answer? Is making something up worse than saying "I do not know", and by how much?

In a deterministic feature those questions are edge cases you handle one by one. In an AI
feature they are the feature. The model will produce a different answer to every variant of
every question, and the only way to know whether the product is good is to look at a lot of
those answers and judge them against something.

That something has to exist in writing. If it lives in your head, every engineer, every
tester and every executive will carry a different version of it, and you will spend months
arguing about whether a given answer is fine. Hamel Husain's phrase for what you need is
blunt: your AI product needs evals. Not as a nice-to-have, as the thing that stands in for
the spec you can no longer write in prose.

## What an eval actually is

Strip away the tooling and an eval has three parts:

1. **Inputs.** A set of real or realistic things users will send: questions, documents,
   images, whatever the feature takes. Thirty is a start, a hundred is comfortable, and they
   should come from real usage wherever possible.
2. **A definition of good.** For each input, either an expected output, or a rubric that
   says what a good output must and must not do. "Mentions the delivery date. Does not
   invent a tracking number. Under eighty words."
3. **A way to score.** A script, a model acting as a judge, a person with the rubric, or a
   live experiment. Lesson 7.4.2 goes through all four.

Run the inputs through the feature, score the outputs, get a number. Change the prompt,
the model or the retrieval, run it again, see whether the number moved. That loop is how AI
products get better, and without it they do not.

## Vibes-based shipping

The alternative, which most teams try first, is to have a few people type things into the
feature, nod, and ship. Eugene Yan calls the result vibes. It fails in three ways, in
order.

**You cannot tell if a change helped.** A new prompt makes three of your test questions
better and, invisibly, two others worse. You ship it because the three looked good. Over a
month of such changes the product drifts, and nobody can say when it got worse.

**You cannot say no.** Leadership wants a model swap, sales wants a new tone, legal wants a
disclaimer in every answer. With a scored eval you can say what each change costs. Without
one, every opinion weighs the same, and the loudest wins.

**You find out from users.** The failures your five testers did not think to try are the
ones customers will find on day two. A support queue is an eval you did not run in time.

## Why it is your job

The engineer can build the harness. The data scientist can design the statistics. What
neither can do is decide what good means for this user, in this product, against this
business goal. That is the product decision, and it is the same decision you made when you
wrote non-goals into a PRD in lesson 5.1.1: what we are optimising for, what we are willing
to be bad at, where the line is.

Concretely, the PM owns:

- **The golden set.** Which inputs matter, in what proportion, and which real failures get
  added as they appear. Lesson 7.4.4.
- **The rubric.** The sentences that say what a passing answer does, written so that two
  people would score the same output the same way.
- **The thresholds.** What score ships, what score blocks, and what we monitor after launch.
  Lesson 7.4.5.
- **Reading the failures.** Not the aggregate score, the individual outputs that failed, one
  by one, every week. This is user research by another name, and it is where the product
  insight is.

A PM who hands all of that to engineering has handed over the product.

## The minimum viable eval

You do not need infrastructure to start. On the first day of an AI feature:

1. Collect twenty inputs from real users, support tickets or your own interviews. Not
   invented ones; invented inputs are too easy.
2. For each, write one line on what a good answer must do and one on what it must not do.
3. Put inputs and outputs in a spreadsheet. Score each output pass or fail by hand. Write
   one word next to each failure saying why.
4. Count the failure reasons. The biggest pile is your next piece of work.

That spreadsheet is an eval. Everything in the rest of this section makes it bigger,
faster or more reliable. None of it replaces the habit of looking.

## What changes when you have one

With an eval, the standup conversation moves from "it seems better" to "accuracy on the
refund questions went from 61 to 78 and tone got slightly worse". The release decision
moves from a feeling to a threshold. The model-swap argument becomes a number. And the
weekly habit of reading failures keeps you closer to what users actually send than any
dashboard will.

It also changes what you are accountable for, in the Course 2 sense. You can no longer say
the model was unpredictable. You wrote down what good meant, you measured it, and you
decided to ship. That is the job.

## Assignment

<div class="assignment">

1. Read Hamel Husain's [Your AI Product Needs Evals](https://hamel.dev/blog/posts/evals/),
   twenty-five minutes. The clearest argument for why evals are the centre of AI product
   work, with a worked example of a team going from vibes to a systematic loop. Read the
   whole thing, including the parts about looking at data.
2. Watch [Why AI evals are the hottest new skill for product builders](https://www.youtube.com/watch?v=BsWxPI9UM4c)
   with Hamel Husain and Shreya Shankar on Lenny's Podcast, about ninety minutes. Long, and
   worth it: it is a product conversation, not an engineering one, and it covers what a PM
   actually does in the loop.
3. Read the first half of Eugene Yan's
   [Task-specific LLM evals that do and don't work](https://eugeneyan.com/writing/evals/),
   fifteen minutes. You do not need every metric yet. Read it for the distinction between
   evaluating a model in general and evaluating your feature on your task.
4. Pick one AI feature you use, in any product. Spend thirty minutes building the minimum
   viable eval above: twenty real inputs, a one-line definition of good for each, pass or
   fail, one word per failure. Keep the spreadsheet. You will reuse the habit in 7.4.6.

</div>

## Additional resources

- Hamel Husain's [Frequently Asked Questions about AI Evals](https://hamel.dev/blog/posts/evals-faq/).
  Long, practical, and the answer to most of the questions you will have after this
  section. Skim the headings now and come back as each one becomes real.
- [Applied LLMs](https://applied-llms.org/), a group write-up of a year of lessons from
  building with language models. The section on evaluation and monitoring is the one for
  this lesson.
