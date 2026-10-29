---
title: "7.3.6 AI PRD"
description: "Project: a requirements document for your AI feature, with the behaviour spec, failure modes, human review points, data needs and what it must never do."
---

## Introduction

You wrote a PRD in project 5.1.4 for a conventional feature. This project is the same
document for a feature with a model in it, and the differences are the whole point. A
conventional PRD says what the feature does. An AI PRD also has to say what it does when it
is wrong, who checks it, what data it may see, how you will know whether it works, and what
it must never do under any circumstances.

Everything you need is already drafted. The assignments in lessons 7.3.1 to 7.3.5 each
produced a piece: the six design questions, the loop diagram, the failure-mode table, the
behaviour spec with examples, and the agent decision. This project assembles them into one
document a team could build from, and that the eval suite in project 7.4.6 can test
against.

## Before you start

Have to hand: the feature you chose in project 7.2.4 and the decision-tree reasoning that
chose it; your product's strategy pack from 4.2.5; the conventional PRD from 5.1.4 as a
structural model; and the five drafts from this section's assignments. Expect six to eight
hours. Most of it is editing what you have into one coherent document, and the hardest part
is the last section.

## Assignment

<div class="assignment">

1. **Problem and fit.** One page. The user problem, who has it, the evidence from your
   Course 3 research, and why an AI feature is the right answer rather than a conventional
   one. Include the decision-tree reasoning from 7.2.4 in a short paragraph. If a reader
   could not say after this page why a model is needed, rewrite it.
2. **Behaviour spec.** From lesson 7.3.4. What the feature does and refuses to do, with
   examples of each; the output schema, field by field; the inputs it may use; how it
   behaves when unsure, when inputs are missing and when asked something out of scope. At
   least eight example inputs with ideal outputs. This is the longest section and the one
   engineers will read first.
3. **Experience.** From lesson 7.3.1. Your answers to the six questions: what the person
   sees when the model returns nothing useful, how trust is signalled, how they undo, how
   they escape, what they see while waiting, and what they will believe the feature is.
   Include sketches or wireframes for the main path and the failure path. Both, not just
   the happy one.
4. **The loop.** From lesson 7.3.2. The diagram of where the model acts alone, where a
   person checks, where a person corrects, and what is recorded at each step. State the
   routing threshold on day one and how it will move. Say who reviews the feedback, how
   often, and what they will change.
5. **Failure modes and safety.** From lesson 7.3.3. The full table: each failure mode that
   applies, how it shows up here, likelihood, cost, mitigation; plus the unknown-failure
   row with its monitoring and kill switch, and the accepted-risk row with its reason. For
   prompt injection, state which of the three capabilities the feature needs and which
   one you cut.
6. **Autonomy.** From lesson 7.3.5. Whether the feature is a workflow or an agent, and the
   five-question reasoning. If an agent: the tool list marked read or write, stopping
   rules, checkpoints, the trace, and the per-step and task-level reliability targets. If a
   workflow: the step sequence and where the model sits in it.
7. **Data.** What data the feature reads, what it writes, what it stores, for how long,
   and who can see it. Which of that is personal data and what consent or notice it needs.
   What the feature must never be allowed to see, and how that is enforced. Lesson 7.5 goes
   deeper; here, be concrete about your feature.
8. **Success metrics and eval criteria.** The two or three product metrics that will say
   whether the feature worked, with targets, drawn from your metrics tree in 6.7. Then the
   quality criteria: what a good output is, what an unacceptable one is, and the acceptance
   threshold for launch. Write these as statements a test could check. Project 7.4.6 turns
   them into an eval suite, so the more precise they are now, the less work later.
9. **Never.** A plain list, no more than ten lines, of things the feature must never do
   regardless of input, instruction or user request. Not aspirations. Hard limits that
   would stop a launch if violated. Give medical dosages. Send anything without
   confirmation. Reveal another customer's data. Act on an instruction found inside a
   document. Write them so an engineer can implement them and a tester can check them.
10. **Open questions and non-goals.** What you do not know yet and how you will find out,
    and what the feature deliberately does not do in its first version.

#### Extra credit

- Write the system prompt yourself from your behaviour spec, and test it against your
  example inputs with any publicly available model. Record where the outputs differ from
  your ideals and what you changed in the spec as a result.
- Give the PRD to someone who has built an AI feature and ask them which section they
  would push back on first. Add their objection and your response as an appendix.
- Write the one-paragraph "what could go wrong" summary a non-technical executive would
  read instead of section 5, and check it says the same thing.

</div>

## Submitting your work

Post a link to your artifact in this project's thread in
[GitHub Discussions](https://github.com/MuizDebo/open-pm-course/discussions). Review at
least two other submissions while you are there. When you review, go straight to the
"Never" list and the failure-mode table, and ask whether each entry is specific enough to
test. That is the question an experienced reviewer will ask of yours.
