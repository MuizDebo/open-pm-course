---
title: "7.2.4 AI opportunity audit"
description: "Project: find ten places AI could go in your product, run each through the decision tree, and pick the one you will build for the rest of this course."
---

## Introduction

This project applies the three lessons of this section to your own product. You will list
ten candidate AI features, run every one through the five questions, place each on the
maturity scale, decide how you would source the model, and choose one to carry forward.

The choice matters more than usual. The feature you pick here is the one you will write the
AI requirements for in project 7.3.6, build the evaluation suite for in project 7.4.6, and
prototype in project 7.6.4. Pick something you can actually define, test and demo, not the
most impressive-sounding idea on the list.

## Before you start

You need your product from project 3.1.4, with its audience map, the interview synthesis
from 3.2.5, the opportunity solution tree from 3.3.4 and the goals and roadmap from 4.2.5.
The opportunity tree is the best source of candidates: every opportunity on it is a place a
model might help. If you have not done those projects, do the audit on a product you use
daily and know well, but expect the later projects in this course to be harder without
real user research behind them.

Expect four to six hours. Most of it is thinking, not writing.

## Assignment

<div class="assignment">

1. **List ten candidate AI features.** Spread them deliberately. At least three should come
   straight from opportunities on your solution tree. At least two should be things a
   competitor already does. At least two should be internal or operational, such as
   support triage or content moderation, rather than user-facing. At least one should be
   something you suspect is a bad idea, included on purpose so you can show your reasoning
   for rejecting it. One line each: what the feature does and for whom.
2. **Run the decision tree.** Build a table with one row per feature and one column per
   question from lesson 7.2.1: data available, task well defined, cost of error, frequency,
   ease of correction. Fill each cell with a short answer and a verdict of strong, weak or
   unknown. Add a final column with go, not yet, or no.
3. **Place each on the maturity scale.** For every feature, state the level it would launch
   at using lesson 7.2.2's scale, and the level it could reach in a year. One sentence on
   what the move up would require.
4. **Choose one.** Pick a feature with a go verdict, a clear task definition and a
   launch level of two or three. Write a one-page memo that covers: the user problem it
   solves and the evidence from your interviews, the five answers in prose, the launch level
   and why, how you would source the model using lesson 7.2.3's six trade-offs, the biggest
   risk, and what "working" would mean in a number you could measure. Name the feature
   clearly; you will use the name in three more projects.
5. **Explain two rejections.** For the feature you included as a bad idea and for one other
   no or not yet, write a short paragraph on why, in terms a non-technical executive would
   accept. Practise saying no to AI with reasons; you will do it often.
6. **Submit.** Put the list, the table and the memo in a folder called
   `7-2-4-ai-opportunity-audit` in your work repository. Post the link in the project's
   Discussions thread with the template from lesson 0.3. Review two other audits. In
   particular, look at whether the chosen feature's task is really well defined, since that
   is the mistake that hurts most in the projects that follow.

#### Extra credit

- For your chosen feature, sketch the level-zero version: what you would ship with no model
  at all to start collecting the data. Often this is the right first release.
- Estimate the cost of the feature at your expected volume in a year, using one provider's
  current pricing page and showing the arithmetic. Then estimate what the same volume would
  cost self-hosted, with the help of a developer if you can find one.

</div>

## Submitting your work

Post a link to your artifact in this project's thread in
[GitHub Discussions](https://github.com/MuizDebo/open-pm-course/discussions). Review at
least two other submissions while you are there.
