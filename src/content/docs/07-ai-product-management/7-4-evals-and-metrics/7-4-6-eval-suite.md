---
title: "7.4.6 Eval suite"
description: "Project: a scoring rubric, a thirty-item golden dataset, three automated checks, one judge prompt and a scoring sheet for your AI feature."
---

## Introduction

This project turns the four lessons of this section into the artifact that defines good for
your AI feature. It is the AI-era equivalent of the PRD you wrote in 5.1.4, and it sits
beside the AI PRD from 7.3.6: that document says what the feature does, this one says how
you will know whether it does it well.

A finished eval suite is also the single most convincing thing an AI product manager can
show in an interview. Most candidates can talk about evals. Very few have built one for a
real feature and can explain what the first run taught them.

## Before you start

You need the feature you chose in project 7.2.4 and the AI PRD from 7.3.6, including its
failure modes and fallbacks. You will reuse the thirty-item set you began in lesson 7.4.4
and the checks and rubric line from the 7.4.2 assignment. If you skipped those, do them
first; this project assembles rather than invents. Expect six to eight hours.

Do not name specific model versions or quote prices anywhere in the suite. Models change
monthly; your suite should outlive them.

## Assignment

<div class="assignment">

1. **Write the scoring rubric.** One page. It defines what a passing output does and does
   not do for this feature, in sentences specific enough that two people would score the
   same output the same way. Include:
   - Three to five required qualities, each with one example of a pass and one of a fail.
   - The hard failures: anything that is an automatic fail regardless of other qualities,
     such as invented facts, policy violations, or answering when it should refuse.
   - A short note on what the rubric deliberately does not judge, and why.
2. **Build the golden dataset.** Thirty items in a spreadsheet with these columns: id,
   input, category (common, hard, refuse, adversarial), source (real, team, synthetic),
   expected output or rubric notes, and a notes column. At least twenty must be real or
   team-written. Include at least three refuse cases and three adversarial cases from your
   red-team session in 7.4.5. Strip anything personal.
3. **Define three deterministic checks.** Each one a rule a script could apply to an output:
   what it tests, how it is computed, pass condition, and which rubric line it enforces.
   At least one must be a hard-failure check.
4. **Write one judge prompt.** The full text you would give a model acting as judge: the
   rubric, the input and output placeholders, an instruction to explain its reasoning
   first, and a binary verdict. Then write the calibration plan: how many items you would
   score by hand, and what agreement rate with the judge you would accept.
5. **Produce the scoring sheet.** A second sheet that lists, per item, the deterministic
   check results, the judge verdict, the human verdict where available, and a final pass or
   fail. Fill in at least ten rows by hand using the feature's current outputs, a
   competitor's feature, or a plausible mock if you have no working version. Count the
   failures by type and write one paragraph on what the biggest pile tells you.
6. **Write the readiness thresholds.** From lesson 7.4.5: the blocking, target and watch
   criteria this suite would feed, with numbers.

#### Extra credit

- Run the full suite against any model you have access to, through a chat interface if
  nothing else, and report the scores with the failure analysis. State what you would
  change first.
- Have one other learner score five of your items with your rubric, without seeing your
  scores. Report the agreement rate and what you changed in the rubric as a result.
- Propose the follow-up: the five items you would add to the set after the first real
  week in production, and why those.

</div>

## Submitting your work

Post a link to your artifact in this project's thread in
[GitHub Discussions](https://github.com/MuizDebo/open-pm-course/discussions). Review at
least two other submissions while you are there. When you review, score two of the other
person's items with their rubric and tell them whether you agreed with their verdict; that
is the most useful feedback an eval suite can get.
