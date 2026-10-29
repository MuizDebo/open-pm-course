---
title: "6.8 Experiment analysis"
description: "Project: analyse a real-shaped A/B test dataset and write the ship, do-not-ship or keep-testing memo."
---

## Introduction

Reading about experiments is not the same as sitting in front of one and having to decide.
This project gives you a dataset from a test that looks like the ones you will meet at
work: two variants, a few thousand users, some segments, and at least one thing that is not
as tidy as it first appears. Your job is to work out what happened and recommend what to
do, in writing, the way a PM would on the Friday the results come in.

There is no answer key. Submissions get reviewed by other learners, and the comparison
between memos is where the learning is.

## The scenario

A mobile-money app tested a redesigned onboarding flow. 6,000 new users were assigned
50/50 to control (the old flow) or treatment (the new flow) at sign-up, over four weeks
starting 7 September 2026. Outcomes were measured over the thirty days after each user
signed up.

Download the dataset: [experiment-6-8.csv](/open-pm-course/data/experiment-6-8.csv). One
row per user, with these columns:

| Column | Meaning |
|---|---|
| `user_id` | Anonymous id |
| `assigned_at` | Date the user signed up and was assigned a variant |
| `week` | Week of the test, 1 to 4 |
| `variant` | `control` or `treatment` |
| `device` | `mobile` or `desktop` |
| `country` | `NG`, `GH`, `KE` or `ZA` |
| `activated` | 1 if the user completed their first transfer within 30 days, else 0 |
| `orders_30d` | Number of transfers in the 30 days |
| `revenue_30d` | Fee revenue from those transfers, in naira |

The product team's hypothesis was that the new flow would raise activation. Revenue is the
metric leadership cares about.

## Before you start

Reread lesson 6.3 on segments and cohorts and lesson 6.4 on experiments, especially the
parts on randomisation checks and on why a result can be true for the average and false for
every segment. Open the file in a spreadsheet or load it with SQL; either works for 6,000
rows. Expect four to six hours.

## Assignment

<div class="assignment">

1. **The headline numbers.** Compute activation rate and revenue per user for control and
   for treatment. State the difference in both absolute and relative terms.
2. **Check the randomisation.** Are the two groups balanced on device, country and week?
   Show the breakdown. If anything is not balanced, say what it would do to a naive
   comparison.
3. **Segment.** Repeat the headline comparison by device and then by country. Where is the
   effect bigger, smaller, absent or reversed? Say what you think is going on.
4. **Look at time.** Something about the countries changes partway through the test. Find
   it, and explain how it affects any comparison that pools all four weeks together.
5. **Separate the mechanisms.** Did treatment change how many users activated, how much
   each activated user spent, or both? Compute revenue per activated user by variant and
   decide.
6. **Judge the evidence.** Using a sample-size or significance calculator from lesson 6.4,
   estimate whether the overall activation lift is likely to be real at this sample size,
   and whether the segment-level effects are. Be honest about what the test can and cannot
   tell you.
7. **Write the memo.** One page. Your recommendation first: ship to everyone, ship to some
   segments, do not ship, or keep testing. Then the reasoning, with the three or four
   numbers that matter, and the caveats you would want the room to hear. Write it for a
   leadership reader who will spend two minutes on it.
8. **Submit.** Put your workings (spreadsheet, queries or notebook) and the memo in a folder
   called `6-8-experiment-analysis` in your work repository. Post the link in the project's
   Discussions thread using the template from lesson 0.3, and review two other memos. Note
   where you reached a different recommendation from the same data, and why.

#### Extra credit

- Do the analysis in SQL or a notebook rather than a spreadsheet, and include the queries.
- Propose the follow-up experiment: what you would test next, for whom, measuring what, and
  how many users you would need.

</div>

## Submitting your work

Post a link to your artifact in this project's thread in
[GitHub Discussions](https://github.com/MuizDebo/open-pm-course/discussions). Review at
least two other submissions while you are there.
