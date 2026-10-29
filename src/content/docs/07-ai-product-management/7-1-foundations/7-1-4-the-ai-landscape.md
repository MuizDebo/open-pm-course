---
title: "7.1.4 The AI landscape"
description: "Model providers, open-weight models, APIs and the pace of change, and how to read a model card or a benchmark without being fooled."
---

## Introduction

The AI landscape changes faster than any course can track. Models that led the field a
year ago are mid-table now; prices have fallen by multiples; whole categories of tool have
appeared. So this lesson does not tell you which model to use. It gives you a map that
stays true while the names on it change, and a way to evaluate any new entrant yourself.

Anything here that names a specific company is an example, not a recommendation. Check
the date on anything you read about this field, including this.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- The three layers: models, platforms, applications.
- Hosted frontier models versus open-weight models, and when each fits.
- What an API gives you and what it does not.
- How to read a model card.
- How to read a benchmark, and why to distrust it.
- Keeping up without drowning.

## Three layers

**Models.** A handful of companies train the largest models and sell access to them. A
wider set, including some of the same companies, release models with open weights that
anyone can download and run. Below both sit many smaller, specialised models for
classification, speech, vision and embeddings.

**Platforms.** The tooling around models: APIs, hosting, fine-tuning services, vector
databases for retrieval, evaluation and monitoring tools, and the frameworks that chain
calls together. This layer is crowded and consolidating.

**Applications.** Products people actually use, built on the layers below. This is where
almost every AI PM works, and where the question is never "which model" first but "which
problem".

A useful habit: when you hear about a new company or product, place it on this map before
forming a view. A lot of confusion comes from comparing things on different layers.

## Hosted or open-weight

**Hosted frontier models** are the most capable, accessed through a provider's API, paid
per token. You get state-of-the-art quality, no infrastructure, and rapid improvement you
do not have to earn. You also get dependence on a vendor's pricing, policies and uptime,
and your data leaves your systems, which some customers and regulators will not accept.

**Open-weight models** can be downloaded and run on your own infrastructure or a host of
your choosing. You control the data, the cost structure and the version. They lag the
frontier in raw capability, though the gap keeps narrowing, and running them well is real
engineering work.

The decision is a product and business one as much as a technical one: how sensitive is
the data, how much capability does the task need, what does the unit economics look like
at your volume, and how much do you mind a vendor changing the model under you? Lesson
7.2.3 turns this into a build, buy or fine-tune framework.

## What an API gives you

For a hosted model, your engineers send a request containing instructions, any context and
the user's input, and receive text back. That is the whole interface. Around it the
provider offers settings (temperature, output length, response format), tool use so the
model can call your systems, streaming so answers appear as they are written, and usage
reporting so you can see the bill.

What the API does not give you: knowledge of your data (that is retrieval), memory
between calls (that is your database), guarantees about behaviour (that is your
evaluation), or safety for your specific context (that is your guardrails). Everything on
that second list is the application team's job, which is to say partly yours.

## Reading a model card

Reputable models ship with a model card: a document describing what the model is, what
it was trained to do, how it was evaluated, and what its known limitations and risks are.
Read it the way you would read a spec from another team. Look for:

- **Intended use and out-of-scope use.** If your use case is in the second list, stop.
- **Evaluation.** Which benchmarks, which languages, which domains. A model evaluated
  only in English tells you nothing about Yoruba.
- **Known limitations and biases.** Taken seriously, these are your risk register.
- **Data and cut-off.** When its knowledge ends and roughly what it saw. Explains a
  class of wrong answers before they surprise you.
- **Safety measures.** What the provider blocks, which you can then stop duplicating or
  must supplement.

A model without a card, or with a thin one, is telling you something about the vendor.

## Reading a benchmark

Benchmarks are standardised tests, and leaderboards rank models by them. They are useful
for a first filter and dangerous as a decision tool. Three reasons:

1. **They measure the test, not your task.** A model that tops a reasoning benchmark may
   be worse than a smaller one at summarising your support tickets. The only benchmark
   that matters is one built from your own inputs, which section 7.4 teaches you to make.
2. **They get gamed.** Once a benchmark matters, training data drifts toward it. A
   familiar law from Course 6 applies: when a measure becomes a target, it stops being a
   good measure.
3. **They hide cost and latency.** The top model may be ten times the price and three
   times the wait of the one two rows down, for a difference your users cannot see.

Use leaderboards to pick three or four candidates. Then test them on fifty of your own
real examples with your own rubric. The second step takes a day and settles the question;
the first step alone settles nothing.

## The pace of change

Assume that any specific capability or price you learn this month will be out of date
within six. Build so that swapping the model is a configuration change, not a rewrite;
evaluate every swap against your own test set; and spend your attention on the parts that
do not move: the problem, the data, the user, the failure modes. A team that re-architects
for every new model release ships nothing. A team that never re-evaluates leaves quality
and money on the table. Quarterly is a sane cadence for most products.

## Keeping up

You cannot follow everything and should not try. Three habits are enough:

- One trusted newsletter or blog that covers the field for practitioners rather than for
  investors.
- The release notes of whichever provider you actually use.
- A standing habit of trying new tools on your own work for an hour, so your sense of
  what is possible stays current.

## Assignment

<div class="assignment">

1. Read Hugging Face's guide to
   [model cards](https://huggingface.co/docs/hub/model-cards), fifteen minutes, then
   open any model's card on the [Hugging Face hub](https://huggingface.co/) and read it
   against the checklist above. Note anything the card leaves out.
2. Read the original
   [Model Cards for Model Reporting](https://arxiv.org/abs/1810.03993) paper abstract
   and introduction, ten minutes, to see what the format was designed to disclose and
   compare it with what vendors actually disclose today.
3. Spend twenty minutes on two leaderboards, for example Stanford's
   [HELM](https://crfm.stanford.edu/helm/) and the
   [Open LLM Leaderboard](https://huggingface.co/open-llm-leaderboard), and on an
   independent comparison site such as
   [Artificial Analysis](https://artificialanalysis.ai/) that includes price and speed.
   Pick one task you care about and note how the ranking changes once cost and latency
   are in view.
4. Read Chip Huyen's
   [Building a Generative AI Platform](https://huyenchip.com/2024/07/25/genai-platform.html),
   thirty minutes, for the layered architecture most production AI applications converge
   on. Place each layer on the three-layer map from this lesson.
5. Watch 3Blue1Brown's
   [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs),
   eight minutes. A compact refresher you can send to a stakeholder who asks "but what
   is it actually doing?"

</div>

## Additional resources

- Simon Willison's [blog](https://simonwillison.net/). A working engineer's running
  commentary on every significant model and tool release, with hands-on tests. The best
  single way to keep up without the hype.
- Aakash Gupta's [newsletter](https://www.news.aakashg.com/) for the product side of the
  same landscape, including regular pieces on AI PM roles and frameworks.
- [Anthropic's research pages](https://www.anthropic.com/research) and the equivalent
  pages at other providers, for the primary sources behind the claims you will read
  elsewhere. Read the summaries; skip the maths.
