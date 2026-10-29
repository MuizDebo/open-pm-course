---
title: "7.6.4 Working prototype"
description: "Project: build a clickable or working prototype of your AI feature with an AI coding tool, label what is faked, and demo it in two minutes."
---

## Introduction

You chose an AI feature for your product in project 7.2.4 and specified it in project 7.3.6,
including its failure modes and fallbacks. This project makes it real enough to put in
front of a person. Using an AI coding or prototyping tool, you will build the core flow,
label honestly what is faked, and record a short demo.

The point is not the code, most of which should be thrown away. The point is that you can
now show rather than describe, and that you can do it while being precise about the gap
between the demo and the product. Both of those are skills interviewers for AI PM roles now
test directly, which Course 8 covers.

## Before you start

Have these to hand: the AI PRD from 7.3.6 (the flow, the failure modes, the fallbacks), the
eval rubric from 7.4.6 if you did the extra credit here, and the hour of practice from
lesson 7.6.1. Pick one tool and stay with it; switching tools is the commonest way this
project eats a weekend. Expect four to eight hours in total, including the demo.

If your feature depends on a model, you can fake the model for the core submission. Use a
small set of hard-coded responses that cover the happy path and at least one failure case.
Faking is allowed; hiding that you faked is not.

## Assignment

<div class="assignment">

1. **Build the core flow.** Using an AI coding or prototyping tool, build the single most
   important path through your AI feature, from the user's first action to the result and
   what they do with it. Mobile-first if your product is. Include at least one failure
   state from your PRD: the model is unsure, the model is wrong, or the model is
   unavailable, and show the fallback you specified.
2. **Write the honesty file.** A `WHAT-IS-REAL.md` in the repository with three lists:
   what is real, what is faked, and what has not been considered. Be specific. "Model
   responses are hard-coded from six examples" is useful. "Some parts are mocked" is not.
3. **Record a two-minute demo.** Walk through the flow and the failure state, and read
   out the honesty file's faked list before you show anything. Loom, a screen recording, or
   a phone pointed at a laptop are all fine. Two minutes is a hard limit; it forces you to
   decide what matters.
4. **Reflect.** Three hundred words: what the prototype taught you that the PRD did not,
   what you would change in the PRD now, and what you would tell an engineer picking this
   up. Include how long each part took.
5. **Submit.** Put the prototype in its own public repository, or a folder of your work
   repository, with the honesty file, a link to the demo video, and the reflection. Post the
   link in the project's Discussions thread using the template from lesson 0.3, and review
   two other prototypes. For each, say whether the honesty file matched what you saw in the
   demo.

#### Extra credit

- Wire a real model call behind the core flow, using a provider's API with your own key,
  and never commit the key. Then run at least three items from your 7.4.6 eval suite
  against it and record the results in the honesty file. The gap between "it works in the
  demo" and "it passes three evals" is the gap this course has been pointing at since
  lesson 7.1.3.
- Put the prototype in front of two people from your audience map and record what they
  did in the failure state. Add the findings to your hypotheses folder from lesson 7.6.3.

</div>

## Submitting your work

Post a link to your artifact in this project's thread in
[GitHub Discussions](https://github.com/MuizDebo/open-pm-course/discussions). Review at
least two other submissions while you are there.
