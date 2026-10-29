---
title: "7.2.3 Build, buy or fine-tune"
description: "The four ways to get a model into your product, the trade-offs between them, and why prompting and retrieval beat fine-tuning more often than people expect."
---

## Introduction

Once you have decided a feature should use a model, the next question is where the model
comes from. The options run from calling someone else's model over an API, through running
an open-weight model yourself, to fine-tuning one on your data, to training your own from
scratch. Each is a different bet on cost, speed, control and what you own at the end.

This is a decision PMs get pulled into because it is not purely technical. It touches
budget, privacy, the sales pitch, the roadmap and the question of whether the company has a
moat or is renting one. You do not need to make the call alone; you need to understand the
trade-offs well enough to frame it, challenge the engineers' instincts and your own, and
write down why you chose what you chose.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- The four options: API, open weights, fine-tune, train.
- The six trade-offs: cost, latency, privacy, quality, moat and speed to ship.
- Why prompting and retrieval usually beat fine-tuning for a first version.
- Lock-in, and how to keep the option to change your mind.

## The four options

**Call an API.** You send a request to a hosted model from a provider and get a response.
No infrastructure, no training, the best general-purpose models, and a bill per request.
The provider can change the model, the price and the terms. This is where almost every
product should start, because it answers the only question that matters at the beginning:
does the feature work at all, with real users?

**Run open weights.** You download a model whose weights are published, and run it on
hardware you control or rent. No per-request bill, full control over data, and you choose
when to upgrade. In exchange you own uptime, scaling, security and the engineering to keep
it running, and the strongest open models usually trail the strongest hosted ones.

**Fine-tune.** You take an existing model, hosted or open, and train it further on your own
examples so that it behaves the way your product needs: your tone, your format, your
domain. It needs a clean set of examples, an evaluation to prove it helped, and a process to
redo it when the base model changes. It is less often necessary than people assume, for
reasons below.

**Train from scratch.** You build a model from raw data. This is a research and
infrastructure programme, not a product feature, and outside a few companies it is the
wrong answer. It is listed here so you can recognise it when it is proposed and ask who is
going to pay for it.

## The six trade-offs

Do not pick by instinct. Score each option on these, for your feature, in writing.

**Cost.** APIs cost per request and scale with usage, which is wonderful at low volume and
alarming at high volume. Self-hosting costs per hour whether you use it or not. Work out
the cost at your expected volume in a year, not today. Do not quote a number in a document
that will outlive it; link to the provider's current pricing page and show the calculation.

**Latency.** A hosted model adds a network round trip and whatever queue the provider has.
A self-hosted small model can be faster. Whether this matters depends on where the feature
sits: a draft that appears while the user is still reading can take seconds, an autocomplete
cannot.

**Privacy and data residency.** Sending customer data to a third party has contractual and
legal consequences, especially for financial, health and personal data, and especially
across borders. Lesson 7.5.2 covers the law. For now, know that this single factor
sometimes decides the question on its own, and that providers differ on what they retain.

**Quality.** The best hosted models are usually the best models, full stop. The gap to open
weights narrows every year and is often irrelevant for narrow tasks. The only way to know
for your task is to evaluate both on your own examples, which is Course 7.4.

**Moat.** Calling the same API as your competitors is not a moat. Your data, your
evaluation sets, your integration into a workflow and your users' trust are. A fine-tuned
model can be part of a moat if the data behind it is hard to get. Be honest about which of
these you have.

**Speed to ship.** An API feature can be in front of users in days. Everything else is
weeks to months. Since the biggest risk in any AI feature is that users do not want it,
speed to the first real test outweighs most of the other factors for a first version.

## Why prompting and retrieval usually win first

Teams reach for fine-tuning because it sounds like owning something. In practice two
cheaper techniques solve most of what fine-tuning is proposed for.

**Prompting.** Instructions, examples and constraints in the request itself. It sets tone,
format and scope, and it is changed in minutes rather than retrained in days. A surprising
share of "the model doesn't do what we want" is fixed here.

**Retrieval.** Instead of teaching the model your facts, you look up the relevant facts at
request time and include them. The model reasons over your documents, your records, your
policies, which stay current without retraining and stay private if you host the store.
Retrieval-augmented generation is the standard name, and it is how most products put their
own knowledge into a general model.

Fine-tune when prompting and retrieval have been tried and measured and still fall short on
a specific, well-evaluated behaviour, such as a format the model will not hold, a domain
vocabulary it mangles, or latency that only a smaller specialised model can meet. Even then,
keep the prompt-and-retrieval version running as the comparison.

## Lock-in and keeping your options open

Whatever you choose, assume you will change it. Models improve, prices move, providers come
and go. Three habits make switching survivable:

- **Own your evaluation set.** If you can run the same hundred test cases against any
  model in an afternoon, you are never trapped. If your quality bar lives in people's heads,
  you are.
- **Put the model behind an interface.** Engineers will know how. The PM's job is to ask
  for it and to accept the small upfront cost.
- **Keep the data and the labels.** Corrections, ratings, accepted drafts: these are yours
  and they transfer. A provider's fine-tuned model may not.

Write the choice, the reasons and the switching plan into the PRD. The second version of
the feature will thank you.

## Assignment

<div class="assignment">

1. Read Chip Huyen's [Building LLM applications for production](https://huyenchip.com/2023/04/11/llm-engineering.html),
   forty minutes. The clearest practitioner account of what prompting, retrieval and
   fine-tuning each actually involve, and the costs that do not show up on the pricing page.
2. Read the a16z post [Emerging Architectures for LLM Applications](https://a16z.com/emerging-architectures-for-llm-applications/),
   twenty minutes, for the reference diagram of where retrieval, prompting, the model and
   evaluation sit in a real system. You will see this shape in every architecture discussion
   you join.
3. Read the Wikipedia article on
   [retrieval-augmented generation](https://en.wikipedia.org/wiki/Retrieval-augmented_generation),
   fifteen minutes, so the term is precise for you before an engineer uses it in a meeting.
4. Skim one provider's prompt-engineering documentation, for example
   [Anthropic's overview](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview),
   twenty minutes, and one provider's
   [fine-tuning guide](https://platform.openai.com/docs/guides/fine-tuning), ten minutes.
   Not to learn the mechanics. Read them for what each provider says you should try before
   fine-tuning, which is the same advice as this lesson, from the people who sell
   fine-tuning.
5. For the feature you scored highest in lesson 7.2.1's exercise, write a six-row table,
   one row per trade-off, scoring API, open weights and fine-tune for your product. Pick
   one for a first version and write two sentences on what would make you switch.

</div>

## Additional resources

- [What We Learned from a Year of Building with LLMs](https://applied-llms.org/), by six
  practitioners. Long. The sections on evaluation, retrieval and when to fine-tune are the
  ones to read, and they agree with this lesson from hard experience.
- Eugene Yan's [Patterns for Building LLM-based Systems](https://eugeneyan.com/writing/llm-patterns/).
  Seven patterns, each with a what, a why and the trade-offs. A reference to return to when
  an engineer proposes an approach and you want to know what it costs.
- The [Hugging Face model hub documentation](https://huggingface.co/docs/hub/index), for
  what "open weights" means in practice and how models are licensed and distributed.
