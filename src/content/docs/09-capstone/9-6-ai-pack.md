---
title: "9.6 AI pack"
description: "Capstone project: decide where AI belongs in your product, specify it, define how you will judge it, and prototype it."
---

## Introduction

The AI pack is where the capstone meets Course 7. You have a product with a strategy, a
first feature and a measurement plan. Now you decide, deliberately, whether and where a
model belongs in it, and you do the work that separates an AI feature that ships from one
that demos well and dies: a spec that names its failure modes, an eval suite that defines
good before anyone argues about it, and a prototype honest about what is faked.

The most valuable possible outcome of this pack is a well-argued "not yet". If your audit
shows that none of the ten candidate features clears the decision tree, that memo is the
deliverable, and it is a stronger portfolio piece than a forced chatbot. Most products in
2026 are shipping AI features that should have failed the audit. Do not add to the pile.

## Before you start

Have the 9.2 discovery pack, the 9.3 strategy pack and the 9.5 measurement pack to hand. Your
Course 7 projects (7.2.4, 7.3.6, 7.4.6, 7.6.4) are the templates and may already be about
this product; if so, this pack is a revision in light of the capstone's fuller picture, not a
repeat. Reread the responsible AI launch checklist in lesson 7.5.3 before you start, not
after.

If you are working the Restock case, remember the constraints: low-end Android phones on
metered data, cash and bank-transfer payments, non-technical wholesalers, low trust. An AI
feature that needs a fast connection or a user who will tolerate being wrong is already
disqualified.

## Assignment

<div class="assignment">

1. **Opportunity audit.** List ten candidate AI features for your product. Run each through
   the five questions of the decision tree from lesson 7.2.1 and assign the maturity level
   from lesson 7.2.2 it would need. Pick one, or pick none, and write a one-page memo
   justifying the choice with reference to the interviews in your discovery pack. If you pick
   none, the memo says what would have to be true for the answer to change, and the rest of
   this pack becomes a plan for the feature you would build first if it did.
2. **AI PRD.** For the chosen feature, the full requirements document from project 7.3.6:
   the user problem, the behaviour specification with example inputs and expected outputs,
   where the human stays in the loop, the fallback when the model fails or is uncertain, the
   data it needs and where that data comes from, the success metrics tied into your 9.5
   metrics tree, and an explicit "must never" list. The "must never" list is read first by
   every reviewer. Make it specific to your users.
3. **Eval suite.** A scoring rubric for the feature's outputs, a golden dataset of at least
   twenty realistic inputs with expected outcomes drawn from your discovery research, three
   automated checks that need no model to run, and one judge prompt with its own rubric.
   State the threshold on each that would block launch.
4. **Prototype or prototype plan.** Either a working or clickable prototype built with an AI
   coding tool, with a file in the repo that says exactly which parts are real and which are
   faked, or, if you cannot build it, a one-page prototype plan that names the tool, the
   screens, what will be faked and how a reviewer will be told. A plan is acceptable; a
   prototype that pretends to be more than it is, is not.
5. **Launch checklist.** Run the twenty-item responsible AI checklist from lesson 7.5.3
   against your feature and record the answer to each item. Any item you cannot answer yet
   becomes an open question in the PRD.

#### Extra credit

- Run five items from your golden dataset through any available model with your draft
  prompt and record the scores against your rubric. Report what surprised you.
- Red-team your own feature for one hour: try to make it produce something on the "must
  never" list, and add what you find to the eval suite.
- Estimate the cost per task at your expected volume using provider pricing pages, and
  compare it with the value the feature creates per task.

</div>

## Submitting your work

Post a link to your artifact in this project's thread in
[GitHub Discussions](https://github.com/MuizDebo/open-pm-course/discussions). Review at
least two other submissions while you are there. When you review an AI pack, read the "must
never" list first and then look for a golden-dataset item that tests each entry.
