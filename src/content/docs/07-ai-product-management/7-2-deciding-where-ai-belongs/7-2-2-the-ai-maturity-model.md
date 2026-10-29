---
title: "7.2.2 The AI maturity model"
description: "Five levels of automation, from manual to adaptive, what each one needs in data, evaluation and trust, and why most products should stop at level three."
---

## Introduction

"Add AI to this" hides a choice that matters more than the model: how much should the
system do on its own? A feature that suggests and waits is a different product from one that
acts and reports, even when the model underneath is the same. The difference shows up in
what data you need, how you evaluate, how much users have to trust you, and what happens on
the day the model is wrong.

This lesson gives you a five-level scale for that choice. It borrows its shape from the way
the car industry describes driving automation, and it is useful for the same reason: it
stops "autonomous" meaning whatever the speaker wants it to mean. You will use it to say
precisely what you are building, to plan a path from one level to the next, and to resist
the pull toward the top of the scale, where most of the failures live.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- The five levels: manual, assisted, suggested, automated with review, adaptive.
- What each level needs in data, evaluation and user trust.
- Why moving up a level is a product decision, not a model upgrade.
- Why level three is the right home for most features, and how to tell when it is not.

## The five levels

**Level 0: Manual.** The user does the task. The product may provide tools, templates and
shortcuts, but nothing is inferred. This is where most features start, and it is often where
the data that enables the next level is collected. A categorisation feature at level zero
is a dropdown and a record of what people chose.

**Level 1: Assisted.** The system surfaces information that helps the user decide, but
makes no recommendation. Search over past tickets while an agent writes a reply. A sidebar
showing similar transactions. The model is doing work, usually retrieval or ranking, but the
user still owns the judgement. Errors here are cheap: an unhelpful result is ignored.

**Level 2: Suggested.** The system proposes a specific answer and the user accepts, edits
or rejects it. A pre-filled category. A drafted reply. A suggested price. This is the level
where most of the value of modern models is realised, because the user's decision doubles
as correction and the correction doubles as training signal. The product has to make
accepting easy and rejecting easier.

**Level 3: Automated with review.** The system acts, and a human reviews either a sample,
the exceptions, or everything after the fact. Transactions are categorised automatically and
flagged if confidence is low. Replies are sent and a lead reviews a daily sample. This
level needs real evaluation infrastructure, because you are no longer seeing every output
before it lands. It also needs an undo.

**Level 4: Adaptive.** The system acts, monitors its own results and adjusts without a human
in the loop for routine cases. Ranking systems that reweight themselves. Fraud rules that
tighten when attack patterns shift. Very few product teams need this, and the ones that do
have dedicated machine learning engineers, monitoring and rollback. For a PM, the
important thing about level four is recognising when someone is proposing it by accident.

## What each level costs

The levels are not a ladder of ambition. Each step up demands things the step below did not.

| Level | Data needed | Evaluation needed | Trust needed |
|---|---|---|---|
| 0 Manual | None. Collects it. | Usage analytics | None |
| 1 Assisted | Enough to retrieve or rank | Is it relevant? Spot checks. | Low |
| 2 Suggested | Enough to predict | Acceptance rate, edit distance | Moderate |
| 3 Automated with review | Enough to predict well | Rubric, golden set, sampled review, error budget | High |
| 4 Adaptive | Continuous, labelled | Online monitoring, drift detection, automatic rollback | Very high |

Read the table from right to left when you plan. Trust is the slowest thing to build and the
fastest thing to lose. A feature launched at level three that makes a visible mistake in its
first week gets pulled back to level one by the users themselves: they stop relying on it.
A feature that spends a quarter at level two, with a visible acceptance rate climbing, earns
the right to level three. Lesson 7.4 covers the evaluation column in depth.

## Moving up is a product decision

Teams often assume the path from suggestion to automation is "get the model more accurate".
Accuracy matters, but the move is mostly about everything around the model:

- **A threshold and a fallback.** At level three the system must know when it is unsure and
  route those cases to a human. That means confidence you can trust, which means
  calibration work, which is evaluation work.
- **An undo.** If the action can be reversed in one step, you can automate at lower
  accuracy. If it cannot, you need to be nearly perfect before you stop asking.
- **Visibility.** Users need to see what was done on their behalf, after the fact, in a way
  that is not a wall of notifications. Lesson 7.3.1 covers this.
- **A review ritual.** Somebody reads the sample every day. If nobody will, the feature is
  not ready for level three, whatever the accuracy number says.

Write the level into the PRD. "This feature launches at level two and moves to level three
when acceptance exceeds a stated rate for four weeks and the review process is staffed" is a
plan. "This feature uses AI to automate categorisation" is a wish.

## Why level three is usually the ceiling

Three reasons, in increasing order of importance.

**Returns diminish.** Most of the time saved comes from the move to level two, where the
user stops doing the task from scratch. Automating the confirmation tap saves a tap.

**Risk compounds.** Each level up removes a point where a human would have caught the
error. Level four removes the last one. For a product whose users are small businesses,
patients or borrowers, that is not a trade most teams should make, and lesson 7.5.2 will
show you the regulation that increasingly agrees.

**You lose the signal.** Level two gives you a correction on every output, for free. Level
three gives you a sample. Level four gives you whatever your monitoring catches. The higher
you go, the less you learn, and the model that stops learning is the model that drifts.

The exceptions are real: high-volume, low-stakes, easily reversible tasks where the human
review was theatre anyway. Spam filtering. Feed ranking. Duplicate detection. If your feature
is one of those, go up. If you are not sure, it is not.

## Assignment

<div class="assignment">

1. Read the Wikipedia article on [SAE J3016](https://en.wikipedia.org/wiki/SAE_J3016), the
   driving automation levels, fifteen minutes. Not for the cars. Read it for how a precise
   shared vocabulary for "how autonomous" changed an entire industry's conversation, and
   note how much argument sits at the boundary between levels two and three.
2. Read the [People + AI Guidebook](https://pair.withgoogle.com/guidebook/patterns) patterns
   page, twenty minutes, looking for the patterns about setting expectations, showing
   confidence and letting users correct. Each one belongs to a specific level on the scale;
   write down which.
3. Read Apple's [machine learning guidelines](https://developer.apple.com/design/human-interface-guidelines/machine-learning)
   from its Human Interface Guidelines, fifteen minutes. It is a design document, and it
   treats "how much the system does on its own" as a design decision with consequences,
   which is this lesson's argument from the other side.
4. Take the three features from lesson 7.2.1's last assignment item. Place each on the
   five-level scale as it ships today. Then write one sentence per feature on what it would
   need to move up one level, and whether you think it should.

</div>

## Additional resources

- Wikipedia on [automation bias](https://en.wikipedia.org/wiki/Automation_bias), the
  well-documented tendency of people to trust automated output over their own judgement
  even when it is wrong. It is the strongest argument for keeping review real rather than
  nominal at level three.
- Microsoft's [HAX Toolkit](https://www.microsoft.com/en-us/haxtoolkit/), a set of design
  patterns and a workbook for human-AI interaction, organised by when in the user's journey
  each applies. Useful once you have chosen a level and need to design the interaction.
