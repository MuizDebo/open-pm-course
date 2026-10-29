---
title: "9.5 Measurement pack"
description: "Capstone project: the metrics tree, dashboard, tracking plan and first experiment for your product."
---

## Introduction

By now your capstone product has a problem, an audience, a strategy and a first feature with
a plan to ship it. The measurement pack answers the question every stakeholder will ask the
week after launch: how do we know whether it worked? If you cannot answer that before you
ship, you will not be able to answer it afterwards either, because the data will not have
been collected.

This pack assembles the Course 6 work for your capstone product: a metrics tree, the
dashboard you would want on a Monday morning, a tracking plan for the first feature, and an
experiment design for the riskiest assumption in your strategy. It is the pack most learners
rush. Do not. A PM who can show up to a launch review with a tracking plan already
instrumented and an experiment already designed is rare, and hiring managers know it.

## Before you start

Have the delivery pack from 9.4 open, especially the PRD and its success metrics, and the
strategy pack from 9.3 with its goals. Reread lesson 6.2 on north star and input metrics and
lesson 6.4 on experiments. Your projects 6.7 and 6.8 are the templates; this pack does the
same work for the capstone product, more carefully.

If you are working the Restock case, the shop owners, the wholesalers and the founding team
all want different numbers. Part of this pack is deciding whose number sits at the top.

## Assignment

<div class="assignment">

1. **Metrics tree.** One north star metric at the top, with a one-paragraph defence of why
   it is the right one for this product at this stage and what it would look like if it were
   gamed. Beneath it, three to six input metrics the team can actually move, each with a
   precise definition (numerator, denominator, time window, who counts), a data source, and
   the goal from 9.3 it serves. Mark which are leading and which are lagging. Draw it as a
   tree; a photographed sketch is fine.
2. **Dashboard sketch.** The single screen you would look at every Monday. One question per
   chart, no more than eight charts, each labelled with the metric from your tree it shows
   and the comparison it makes (against last week, against target, by segment). Write one
   sentence under the sketch on what decision each chart could trigger. If a chart cannot
   trigger a decision, remove it.
3. **Tracking plan for the first feature.** For the feature in your 9.4 PRD, a table of the
   events you need: event name, when it fires, the properties attached (device, country,
   variant, whatever your segments need), and which metric in the tree each event feeds. Ten
   to twenty events is normal. Include the two or three events that would tell you the
   feature is failing, not only the ones that tell you it is working.
4. **Experiment design.** Pick the riskiest assumption in your strategy pack, the one that
   if false makes the rest irrelevant. Design the experiment that would test it: hypothesis,
   variant, primary metric, guardrail metrics, unit of randomisation, and how long it needs
   to run. Use the sample-size reasoning from lesson 6.4 and a calculator to estimate the
   users needed for the smallest effect worth detecting, and say honestly whether your
   product will have that many users in the time available. If it will not, say what you
   would do instead, because that is the real-world answer most of the time.
5. **Review against 6.8.** Reread your 6.8 memo. Write five lines on what that analysis
   taught you that changed how you designed this experiment: the segments you will check,
   the randomisation check you will run, the thing you will not conclude from a single
   number.

#### Extra credit

- Build the dashboard for real with a spreadsheet and fake data shaped like your tracking
  plan, and screenshot it.
- Write the SQL or spreadsheet formulas for the north star and two input metrics against
  the event table you defined.
- Pre-register the experiment: write down, before anything ships, the exact number that
  means success and the exact number that means stop.

</div>

## Submitting your work

Post a link to your artifact in this project's thread in
[GitHub Discussions](https://github.com/MuizDebo/open-pm-course/discussions). Review at
least two other submissions while you are there. When you review a measurement pack, start
with the north star: would you have chosen it, and could it be gamed?
