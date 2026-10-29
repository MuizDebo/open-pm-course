---
title: "7.4.2 Four kinds of eval"
description: "Deterministic checks, a model as judge, human review and live experiments: what each catches, what each costs, and how to combine them."
---

## Introduction

Once you accept that good has to be measured, the next question is how. There are four
ways, and the mistake most teams make is picking one. Automated checks are cheap and blind
to quality. A model judging another model is fast and quietly wrong in ways you will not
notice. Human review is the gold standard and does not scale. A live experiment tells you
the truth about users and nothing about why.

This lesson goes through each kind: what it catches, what it misses, what it costs, and
when to use it. Then it shows the combination that most working teams converge on, so that
you can design the eval suite in 7.4.6 with the right mix from the start.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- Deterministic checks: assertions that a program can run.
- A model as judge: using one model to grade another, and how to keep it honest.
- Human evals: when people must score, and how to make their scores consistent.
- A/B tests: the live experiment, and why it comes last.
- How the four fit together in a single pipeline.

## Deterministic checks

A deterministic check is a rule a script can apply to an output with no judgement involved.
Did the answer contain a tracking number in the right format? Was it under two hundred
words? Did it mention the product name the user asked about? Did it include the required
disclaimer? Did the JSON parse? Did it refuse when the question was about a competitor?

**What it catches.** Format, length, presence or absence of required and forbidden things,
structural correctness, hard policy violations.

**What it misses.** Everything that needs judgement. A reply can pass every check and still
be unhelpful, wrong in substance or rude.

**Cost.** Almost nothing to run, so you can run it on every output in production, not just
the golden set. The cost is in writing good rules, which is a PM task: each rule encodes a
requirement from your PRD.

Write these first. A surprising share of the failures you find by hand in lesson 7.4.4
turn out to be checkable.

## A model as judge

The second kind uses a language model to grade outputs against a rubric you write. You give
the judge the input, the output and the rubric, and ask for a score and a reason. This is
usually called LLM-as-judge, and it is the technique that makes evaluating open-ended text
at scale possible at all.

**What it catches.** Qualities you can describe in words: whether the answer addresses the
question, whether the tone matches the brief, whether a summary covers the key points,
whether a reply is faithful to the source document.

**What it misses.** Whatever the judge is also bad at. Judges prefer longer answers, prefer
answers that sound confident, and can be fooled by an output that restates the rubric's
words. A judge that has not been checked against human scores is a random number generator
with good manners.

**Cost.** Cheap per item, so hundreds of outputs a day is fine. The real cost is building
trust in the judge, which means scoring a sample by hand and measuring how often the judge
agrees with you. Hamel Husain's guide on building a judge, in the assignment, puts that
agreement step at the centre, and so should you.

Two rules that save teams months. Make the judge answer a narrow question with a pass or
fail, not a one-to-ten score; people and models both agree more on binary judgements. And
make it explain its reasoning before it gives the verdict, so you can read why it was wrong
when it is.

## Human evals

Sometimes a person has to look. Early on, when you do not yet know what the failure modes
are. For anything high-stakes, where being wrong costs money or trust. For calibrating the
judge. And for the qualities nobody has managed to describe in a rubric yet, which is where
the product taste from lesson 2.2.4 lives.

**What it catches.** Everything, in principle, including the failures you did not know to
look for.

**What it misses.** Consistency. Two reviewers disagree, one reviewer disagrees with
themselves on a tired afternoon, and scores drift over weeks. The fix is the rubric: a
written scoring guide with examples of each grade, and a short calibration session where
reviewers score the same ten items and argue about the differences.

**Cost.** High. Minutes per item, and the items have to be sampled carefully so the sample
says something about the whole. Use people for the twenty percent of the eval that automation
cannot do, and use what they find to write new deterministic checks and judge rubrics.

A practical note: the PM should be one of the reviewers, every week, for as long as the
product exists. Not the only one, but one of them. Lesson 7.4.4 is about what you learn
from doing that.

## A/B tests

The fourth kind is the live experiment from lesson 6.4: ship two versions, randomise users
between them, measure what users do. Nothing else tells you whether the feature works for
the people it is for. A model can score an answer as excellent and users can still not read
it.

**What it catches.** The actual effect on actual users: completion, acceptance, retention,
revenue, support contacts.

**What it misses.** Why. An experiment says treatment lost by two points. It does not say
which answers caused it. It also takes weeks and real traffic, and it exposes real users to
whatever you are testing, so it cannot be the first line of defence.

**Cost.** Engineering time, statistical care, and patience. Use the sample-size reasoning
from lesson 6.4; AI features often move metrics by small amounts, which means large samples.

Run experiments last, after the offline evals say a change is at least as good as the
current version, to confirm it with users and to catch what the offline evals could not.

## Putting them together

The combination that most teams converge on looks like a funnel.

1. **Every output, in production**, passes through deterministic checks. Failures are
   logged and counted. Some block the response and trigger a fallback.
2. **Every change to the feature**, before it ships, runs the golden set through the model
   judge. The score has to clear a threshold. Lesson 7.4.5 is about setting it.
3. **Every week**, a human sample: the PM and one or two others read a few dozen production
   outputs, including the ones the checks flagged, and score them. Disagreements with the
   judge are examined; new failure types become new rules or rubric lines.
4. **Significant changes** ship behind an experiment, with the product metrics from 7.4.3
   as the success criteria.

Each layer catches what the one before missed and feeds the one before. The deterministic
rules come from what humans found; the judge is calibrated against humans; the experiment
confirms the judge. The whole thing is cheaper than it sounds, because the expensive layer,
people, is used sparingly and only on what the cheap layers cannot do.

## Assignment

<div class="assignment">

1. Read Hamel Husain's [Creating a LLM-as-a-Judge That Drives Business Results](https://hamel.dev/blog/posts/llm-judge/),
   thirty minutes. The step-by-step method for building a judge you can trust, with the
   human-agreement check at the centre. Note the advice on binary verdicts and on
   critiques before scores.
2. Read Anthropic's guide to [creating strong empirical evaluations](https://docs.anthropic.com/en/docs/test-and-evaluate/develop-tests),
   fifteen minutes. A vendor's page, but a clear one on the difference between code-graded,
   model-graded and human-graded tests, with examples of each.
3. Read the abstract and section 3 of [Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena](https://arxiv.org/abs/2306.05685),
   twenty minutes. The paper that measured how well model judges agree with people, and
   catalogued their biases: position, verbosity, self-preference. Those are the things to
   guard against in your own judge.
4. Take the twenty-item spreadsheet from lesson 7.4.1. For each failure you found, decide
   which of the four kinds of eval would have caught it cheapest. Write three deterministic
   checks and one judge rubric line that would catch at least half of them.

</div>

## Additional resources

- Eugene Yan's [Patterns for Building LLM-based Systems and Products](https://eugeneyan.com/writing/llm-patterns/).
  The evaluation section is the relevant one; the rest is a map of the whole territory
  you will meet in sections 7.3 and 7.6.
- OpenAI's [evals guide](https://platform.openai.com/docs/guides/evals), for the same ideas
  in another vendor's words and tooling. Read both and notice how much they agree.
