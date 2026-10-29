---
title: "7.3.4 Prompting and RAG for PMs"
description: "Enough about prompts, structured outputs and retrieval-augmented generation to write a spec, read a prototype and argue with an engineer."
---

## Introduction

You will not write the production prompt. But you will write the spec it is built from, you
will read the prompt when the feature misbehaves, and you will sit in the meeting where
someone proposes fine-tuning a model when what they need is a better search index. This
lesson gives you enough of the mechanics to do those three things well.

It covers two subjects that come up in every AI feature: how you tell a model what to do,
which is prompting, and how you give it the facts it does not have, which is
retrieval-augmented generation, usually called RAG. Neither is magic and both have a small
number of ideas that matter. It deliberately avoids naming specific models or prices,
because both change faster than this lesson will.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- What a prompt is made of: system instructions, examples, the task, the inputs.
- Structured outputs, and why a PM should insist on them.
- What a model knows and does not know, and the three ways to give it more.
- RAG: retrieval, chunking, citations, and why it usually beats fine-tuning for knowledge.
- Reading a prompt as a spec, and writing the behaviour spec the prompt comes from.

## What a prompt is made of

A prompt is the full text the model sees before it answers. For a product feature it
usually has four parts, and knowing them lets you read one.

**System instructions.** Who the model is for this feature, what it should and should not
do, the tone, the format. This is the part that most resembles a spec, and it is where most
behaviour problems are fixed. "Never give medical dosages" lives here.

**Examples.** A few worked input-output pairs showing what good looks like. Called few-shot
prompting. Often worth more than a paragraph of instructions, because the model copies
patterns better than it follows rules. If the output is wrong in a consistent way, the fix
is often a better example.

**The task.** What to do with this particular input. "Summarise the following support
conversation in three bullet points for a manager."

**The inputs.** The conversation, the document, the customer record. In a retrieval-based
feature, this is where the retrieved facts go.

When a feature misbehaves, ask to see all four. Most "the model is bad" complaints turn out
to be a missing instruction, a bad example, or the wrong inputs.

## Structured outputs

Left alone, a model produces prose. Prose is hard to display reliably, impossible to
validate, and easy to get subtly wrong. Ask instead for a fixed shape: a JSON object with
named fields, a choice from a list, a yes or no with a reason. Model providers support this
directly now, so the model is constrained to the shape rather than merely asked for it.

For a PM this matters in three ways. You can specify the shape in the PRD and it becomes a
testable requirement. The feature can refuse or fall back when a field is missing, which is
graceful failure from lesson 7.3.1. And the eval suite in 7.4.6 can check fields rather than
reading prose. When you see a feature that parses the model's free text with string matching,
that is a feature that will break.

## What a model knows

A model knows whatever was in its training data, up to a date, blended and compressed. It
does not know your product's documentation, your customer's order history, this morning's
prices, or anything that happened after its training ended. When it is asked about those
things it will often answer anyway, which is hallucination from lesson 7.3.3.

There are three ways to give it more:

1. **Put it in the prompt.** The simplest. Works when the facts fit and you know which facts
   are needed. Does not scale to a knowledge base.
2. **Retrieve it at the moment of the question.** Search your own data for the relevant
   pieces and put those in the prompt. This is RAG, and it is the right answer for most
   products most of the time.
3. **Fine-tune.** Train the model further on your data. Expensive, slow to update, and bad at
   teaching facts: fine-tuning changes style and behaviour far more reliably than it adds
   knowledge. A model fine-tuned on your docs will sound like your docs and still make
   things up about them.

The rule of thumb to carry into the meeting: fine-tune for behaviour, retrieve for
knowledge. If someone proposes fine-tuning to make the model know your product, ask what
happens when the product changes next week.

## RAG in one page

Retrieval-augmented generation has four steps, and each is a place where quality is won or
lost.

**Chunk.** Your documents are split into pieces small enough to retrieve precisely. Too small
and a chunk loses its context; too large and the model gets noise. How you chunk a policy
document is different from how you chunk a chat log, and it is a product question because
it determines what the model can find.

**Index.** Each chunk is stored so it can be found by meaning, not just by keyword. The
details are engineering; what you need to know is that the index must be isolated per
customer where the data is private, which is the data-leakage row of your failure-mode
table.

**Retrieve.** When a question comes in, the most relevant chunks are fetched. This is where
most RAG features actually fail: the right fact exists, and the retrieval does not find it.
When you evaluate a RAG feature, evaluate retrieval separately from generation. A wrong
answer with the right chunks is a prompt problem; a wrong answer with the wrong chunks is a
search problem.

**Generate, with citations.** The chunks go into the prompt and the model answers. Insist
that the answer cites which chunks it used, and that the interface shows them. Citations are
the single best hallucination control you have, because an answer with no source is visibly
an answer with no source.

## The behaviour spec

Here is the thing you actually write. Before the engineer writes the prompt, the PRD should
contain a behaviour spec: a short document that says, in plain language,

- what the feature does and refuses to do, with examples of each;
- the shape of the output, field by field;
- what inputs it may use and what it must never see;
- how it behaves when it is unsure, when the inputs are missing, and when asked something
  out of scope;
- five to ten example inputs with the ideal output for each, written by you or by a domain
  expert, not generated.

Those examples are the seed of the few-shot prompt and the first rows of the eval set. The
engineer turns the spec into a prompt; you turn the spec into tests. When the two disagree,
the spec wins, and that is why you wrote it.

## Assignment

<div class="assignment">

1. Read the prompt engineering overview from
   [Anthropic](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
   and from [OpenAI](https://platform.openai.com/docs/guides/prompt-engineering), thirty
   minutes together. They are written for developers; read them for the techniques both
   agree on, which are the ones that survive model changes.
2. Read OpenAI's guide to [structured outputs](https://developers.openai.com/api/docs/guides/structured-outputs),
   ten minutes, just far enough to see what a schema looks like. Then write the output
   schema for the feature you chose in project 7.2.4, as a list of fields with one line each.
3. Read the Wikipedia overview of [retrieval-augmented generation](https://en.wikipedia.org/wiki/Retrieval-augmented_generation),
   fifteen minutes, then Anthropic's post on
   [contextual retrieval](https://www.anthropic.com/news/contextual-retrieval), fifteen
   minutes, which shows how much retrieval quality can move with chunking changes alone.
   You do not need to follow the method; notice the size of the effect.
4. Write the behaviour spec for your feature, using the five bullets above, with at least
   five example inputs and ideal outputs. Two pages. It is the core of the AI PRD in
   project 7.3.6 and the seed of the eval suite in 7.4.6.

</div>

## Additional resources

- Eugene Yan's [Patterns for building LLM-based systems](https://eugeneyan.com/writing/llm-patterns/),
  the RAG and guardrails sections. The most-cited practitioner summary, and a good thing to
  have read before talking to an engineering lead.
- Andrej Karpathy's [Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g),
  the second half this time, if you watched the first half in lesson 7.3.1. It covers what
  the models can and cannot do, which is the ground this lesson stands on.
