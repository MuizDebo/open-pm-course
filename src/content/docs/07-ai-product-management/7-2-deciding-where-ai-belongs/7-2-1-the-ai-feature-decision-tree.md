---
title: "7.2.1 The AI feature decision tree"
description: "Five questions that tell you whether a problem should be solved with a model at all, with worked examples on both sides."
---

## Introduction

Most AI features that fail do not fail because the model was bad. They fail because the
model was pointed at a problem it should never have been given: one with no data behind it,
one where a wrong answer costs more than a right answer earns, or one that a plain rule
would have solved on Tuesday. The pressure to "add AI" is real, and it comes from
leadership, investors and customers at once. The PM's job is to turn that pressure into a
decision, feature by feature, that can be defended with reasons.

This lesson gives you five questions to ask of any candidate feature before anyone opens a
notebook. They are not original; versions of them appear in every serious guide to building
with machine learning. What is yours is the discipline of asking them every time, in order,
and writing the answers down.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- Why "could a model do this?" is the wrong first question.
- The five questions: data, task definition, cost of error, frequency, ease of correction.
- Worked examples where AI is the answer and where it is not.
- How to turn the answers into a go, no-go or not-yet.

## The wrong first question

"Could a model do this?" is almost always yes now, which is exactly why it tells you
nothing. A model can draft the email, flag the transaction, rank the feed, summarise the
call. The questions that separate a feature that ships and earns trust from one that ships
and gets switched off are about the problem, the data and the people, not the model.

Google's own guidance for its engineers opens with a rule that is easy to miss for how plain
it is: do not be afraid to launch a product without machine learning. If a heuristic gets
you most of the value, ship the heuristic, learn from real usage, and add the model when the
data exists and the heuristic has run out. That is not caution. It is sequencing.

## The five questions

Ask these in order. A weak answer to an early one usually makes the later ones moot.

**1. Is the data available?** Not "could we collect it" but "do we have it, at the volume
and quality the task needs, with the right to use it". A recommendation feature needs
behaviour history. A fraud model needs labelled fraud. A support assistant needs past
tickets and the answers that resolved them. If the honest answer is "we would need six
months of logging first", the feature is not a feature yet; the logging is. Course 6 lesson
6.1 on tracking plans is the prerequisite.

**2. Is the task well defined?** Can you write down what a correct output looks like, and
would two reasonable people agree on it? "Categorise this transaction as food, transport,
bills or other" is well defined. "Write a good reply to this customer" is not, until you
say what good means for your product, and lesson 7.4.1 is about exactly that. Vague tasks
produce models that are impossible to evaluate, and a model you cannot evaluate is a model
you cannot improve or trust.

**3. What is the cost of an error?** Models are wrong some of the time, always. The
question is what a wrong answer costs and who pays. A wrong song recommendation costs a
skip. A wrong fraud flag costs a blocked payment and an angry customer. A wrong dosage
suggestion costs a life. The higher the cost, the more review, the more conservative the
rollout, and the stronger the case for the model suggesting rather than acting. Course 7.3
is built on this question.

**4. How frequent is the task?** Models earn their keep on volume. A task done ten thousand
times a day is worth automating even if each instance saves a few seconds. A task done ten
times a month, by one person, with judgement, is rarely worth the data pipeline, the evals
and the maintenance. Count the instances before you count the benefits.

**5. How easy is it for a user to correct?** If the user can see the model's output, judge
it at a glance, and fix it with one action, you can ship at lower accuracy and improve from
the corrections. Autocomplete works at modest accuracy because rejecting a suggestion costs
nothing. A feature that acts silently, or whose errors only surface weeks later, needs to be
far more accurate before it ships. Correctability is also where your training signal comes
from, which feeds question one for the next version.

## Worked examples

**Transaction categorisation in a bookkeeping app.** Data: yes, millions of labelled
transactions from manual categorisation. Task: well defined, a fixed set of categories.
Cost of error: low, a miscategorised expense is a nuisance. Frequency: very high.
Correction: one tap to recategorise, and that tap is a label. Every question lands on the
right side. Build it, start with a suggestion the user confirms, move to automatic once
accuracy on your evals is high.

**Drafting a reply to a customer complaint.** Data: thousands of past replies, but quality
varies and the best ones are not tagged. Task: not yet well defined; "good" needs a rubric.
Cost of error: moderate, an insensitive reply to an angry customer is expensive. Frequency:
high. Correction: the agent reads and edits before sending, so easy. Verdict: yes, but as a
draft the agent must approve, with a rubric written first. Not an automated reply.

**Predicting which of your two hundred enterprise customers will churn this quarter.** Data:
two hundred rows, a handful of churn events a year. Task: well defined. Cost of error:
high, you will spend account-manager time on the wrong accounts. Frequency: quarterly.
Correction: you only find out at renewal. Verdict: no. The data is too thin for a model.
A spreadsheet with three health signals and a monthly review will beat it, and it will
be ready this week.

**Approving loan applications automatically.** Data: yes. Task: well defined. Cost of
error: very high, in both directions, and with legal and fairness consequences. Frequency:
high. Correction: the applicant often cannot see why, and a wrongly declined applicant does
not come back. Verdict: a model can score, a human must decide, and the review process is
the product. Lesson 7.5.2 covers the regulation that applies.

## Turning answers into a decision

Write the five answers in a table, one row per candidate feature. Then sort into three piles:

- **Go.** Data exists, task is defined, errors are cheap or correctable, volume is high.
- **Not yet.** One answer is weak and fixable: start logging, write the rubric, build the
  correction loop, and revisit in a quarter.
- **No.** Errors are expensive and hard to catch, or volume is low. Solve it another way,
  and say so in writing so the question does not come back every planning cycle.

The project at the end of this section does this for your own product. The table is the
artifact; the reasoning in each cell is what an interviewer or an executive will push on.

## Assignment

<div class="assignment">

1. Read the [People + AI Guidebook](https://pair.withgoogle.com/guidebook/), the chapter
   on [user needs and defining success](https://pair.withgoogle.com/guidebook/chapters/user-needs-defining-success),
   thirty minutes. The best public guide to deciding whether a problem needs AI at all, from
   a team that has shipped a great deal of it. Note its framing of when AI adds unique value
   versus when it is just novelty.
2. Read the first section of Google's
   [Rules of Machine Learning](https://developers.google.com/machine-learning/guides/rules-of-ml),
   up to and including the rules about launching without ML and choosing simple metrics,
   twenty minutes. It is written for engineers and is the most honest thing a PM can read
   about sequencing.
3. Read Google's short course on
   [ML problem framing](https://developers.google.com/machine-learning/problem-framing),
   forty minutes. It walks through turning a product goal into a task a model can be
   evaluated on, which is question two in practice.
4. Watch the first twenty minutes of Andrej Karpathy's
   [Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g), one hour
   in total. You only need the first third now, on what a language model is and is not;
   the rest is useful background for lesson 7.3.4.
5. Pick three features from a product you use that visibly involve AI. Run each through the
   five questions as an outsider and guess the answers. Note where you think the team got it
   right and where you would have said "not yet". Keep this; the project reuses the format.

</div>

## Additional resources

- Andrew Ng's [How to Choose Your First AI Project](https://hbr.org/2019/02/how-to-choose-your-first-ai-project),
  ten minutes. A short executive-level version of the same questions, useful when you
  need to explain your reasoning upward.
- Microsoft's [Guidelines for Human-AI Interaction](https://www.microsoft.com/en-us/research/project/guidelines-for-human-ai-interaction/).
  Eighteen guidelines spanning the whole life of an AI feature. Questions three and five
  map onto several of them.
