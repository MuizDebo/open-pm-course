---
title: "7.1.2 How models work, for PMs"
description: "Enough about machine learning and large language models to spec, question and cost an AI feature, with none of the maths."
---

## Introduction

You do not need to train a model to manage an AI product, any more than you needed to
write a database to manage a conventional one. You do need a working picture of what a
model is, what it can and cannot do, and which knobs change its behaviour and its bill.
Without that picture you cannot tell a reasonable engineering estimate from an
unreasonable one, a real limitation from an excuse, or a cheap fix from an expensive one.

This lesson gives you that picture in plain words. Where a term will come up in meetings,
it is defined. Where the detail does not matter to a PM, it is skipped.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- Machine learning in one paragraph, and how large language models differ.
- Training versus inference, and why only one of them is your problem.
- Tokens, context windows and temperature.
- Embeddings and retrieval.
- Prompting, retrieval and fine-tuning as the three ways to change behaviour.
- What drives cost and latency.

## Machine learning in one paragraph

A conventional program follows rules a person wrote. A machine learning model is a
program whose rules were inferred from examples. You show it many inputs paired with the
right outputs, and a training process adjusts millions or billions of internal numbers
until its outputs match the examples well. Afterwards it can produce outputs for inputs it
has never seen, by analogy to what it saw. That is why it can do things nobody could
write rules for, like recognising a face, and why it can be confidently wrong on inputs
unlike its training data.

Classic machine learning models are trained for one task each: predict churn, flag fraud,
rank search results. They are small, cheap, fast and well understood. A great many
valuable AI features are built on them, and the hype about language models has not made
them less useful.

## Large language models

A large language model is a machine learning model trained on an enormous amount of text
to do one thing: predict the next piece of text given what came before. It turns out that
doing this extremely well requires absorbing a great deal about language, facts and
reasoning, so the same model can summarise, translate, answer questions, write code and
hold a conversation without being trained for each task. That generality is what changed
the industry.

It also explains the failure modes. The model produces plausible text. Usually plausible
and true coincide. When they do not, you get a fluent, confident, wrong answer, which the
industry calls a hallucination. There is no "I don't know" built in; the model has to be
prompted, trained or wrapped to say so. Lesson 7.3.3 is about designing for this.

## Training versus inference

**Training** is building the model: the months of compute that produce the billions of
numbers. Unless you are an AI Builder PM at a model company, this is not your concern.
You use models other people trained.

**Inference** is running the model: sending it an input and getting an output. Every time
your feature calls a model, that is inference, and that is what you pay for, wait for and
design around. When engineers talk about latency and cost, they mean inference.

## Tokens, context and temperature

**Tokens** are the units a language model reads and writes. A token is roughly three
quarters of an English word, less for other languages and for code. Providers charge per
token, in and out, so a long prompt plus a long answer costs more than a short pair. When
someone says a feature is "expensive", they usually mean it is sending or receiving a lot
of tokens per call.

**The context window** is how many tokens the model can consider at once: your
instructions, any documents you include, the conversation so far and the answer. It is
finite. Anything that does not fit is not seen. Bigger windows cost more per call and are
slower. A great many product decisions, such as how much history to keep or which
documents to include, are really decisions about what goes in the window.

**Temperature** is a setting that controls how much randomness the model uses when
choosing each next token. Low temperature makes outputs more consistent and repetitive.
High temperature makes them more varied and more likely to go wrong. For a feature that
must be reliable, engineers set it low. For brainstorming, higher. Ask what it is set to.

## Embeddings and retrieval

An **embedding** is a list of numbers that represents the meaning of a piece of text, so
that texts about similar things end up with similar numbers. That lets a system find "the
documents most related to this question" without matching keywords.

**Retrieval** uses embeddings to pull relevant material out of your own data and put it
into the context window before the model answers. This is how a model that knows nothing
about your company can answer questions about your company's documents. The pattern is
called retrieval-augmented generation, and most useful enterprise AI features are some
version of it. It is also the first place to look when answers are wrong: usually the
right document was not retrieved, not that the model misread it.

## Three ways to change behaviour

When the model's output is not what you want, there are three levers, in rising order of
cost and permanence.

1. **Prompting.** Change the instructions and examples you send with each request. Cheap,
   fast, reversible, and surprisingly powerful. Most behaviour problems are fixed here.
   The PM should be able to read the prompt and should often help write it.
2. **Retrieval.** Change what information the model is given: better documents, better
   chunking, better search. Fixes "it doesn't know about X" and most factual errors about
   your own domain.
3. **Fine-tuning.** Further train the model on your own examples so it behaves
   differently by default. Expensive, slow, needs a lot of good examples, and has to be
   redone when the base model changes. Worth it for a consistent style or format at
   scale, rarely for knowledge. Treat an engineer proposing it as a sign to ask what
   prompting and retrieval were tried first.

Knowing these three lets you ask the right question in a review: "Is this a prompt
problem, a retrieval problem or a model problem?" Most of the time the answer is one of
the first two.

## What drives cost and latency

Cost per call rises with the number of tokens in and out, with the size of the model, and
with how many calls a single user action triggers behind the scenes. Latency rises with
output length and model size, and falls with streaming the answer as it is produced. The
PM decisions that move these most: how long the prompt is, how much history is kept, which
model size is used for which step, and whether the result can be cached. A feature that
costs a few cents a call is fine for a thousand users and ruinous for a million. Work out
the unit economics before the demo gets anyone excited.

## Assignment

<div class="assignment">

1. Watch Andrej Karpathy's
   [Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g), one
   hour. The best non-specialist explanation of what these models are, how they are
   trained and where they fail, by someone who built them. Watch all of it.
2. Watch 3Blue1Brown's
   [Transformers, the tech behind LLMs](https://www.youtube.com/watch?v=wjZofJX0v4M),
   twenty-seven minutes. A visual walk through how a language model turns text into
   numbers and back. You will not need the maths; you will need the intuition about
   tokens and context.
3. Read Jay Alammar's
   [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/),
   twenty minutes, or skim it after the video. Keep it as the reference you return to
   when an engineer uses a word you half remember.
4. Open the developer documentation of any one model provider, for example
   [Anthropic](https://docs.anthropic.com/),
   [OpenAI](https://platform.openai.com/docs) or
   [Google](https://ai.google.dev/), and find three things: how they charge, what the
   context window of their current frontier model is, and what settings a call accepts.
   Write them down with the date. They will have changed by the time you finish the
   course, which is the point.

</div>

## Additional resources

- Wikipedia's [Large language model](https://en.wikipedia.org/wiki/Large_language_model)
  and [Retrieval-augmented generation](https://en.wikipedia.org/wiki/Retrieval-augmented_generation)
  articles are reliable glossaries when a term comes up that this lesson skipped.
- Google's free [Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course)
  if you want the classic machine learning side in more depth. The first few modules are
  enough for a PM.
- Karpathy's longer [Deep Dive into LLMs like ChatGPT](https://www.youtube.com/watch?v=7xTGNNLPyMI),
  three and a half hours, for when the one-hour talk leaves you wanting the full
  picture.
