---
title: "7.6.2 PM workflows with AI"
description: "Using models for drafting, synthesis, teardowns and updates without losing judgement, confidentiality or your own voice."
---

## Introduction

Most of a PM's week is text: specs, notes, updates, summaries, questions. Models are good
at text. The obvious conclusion is that a PM with a model does the week in half the time,
and for the mechanical parts that is roughly true. The less obvious conclusion is that the
parts of the job that matter, judgement, relationships and accountability, do not speed up
at all, and a PM who lets the model do the thinking produces a lot of fluent documents that
nobody trusts.

This lesson is a practical guide to where models help, how to use them, what never to
paste into one, and how to review what comes back so the work stays yours.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- Five workflows where a model reliably saves time.
- What never goes into a model at work.
- How to review AI output so you stay accountable for it.
- Prompt structure that works for product documents.
- Open libraries of PM prompts and frameworks you can reuse.

## Five workflows that work

**Interview synthesis.** Paste anonymised notes from five interviews and ask for recurring
themes, quotes that support each, and contradictions. Then read the notes yourself and
check. The model is a fast first pass that catches patterns you were too close to see; it
is not the synthesis. Course 3 taught you the real method.

**First-draft documents.** Give the model your PRD outline, the problem statement from your
narrative, and the success metrics, and ask for a draft. You will rewrite most of it. The
value is that rewriting a bad draft is faster than facing a blank page, and the model's
draft often exposes what you had not decided yet.

**Competitive teardowns.** Give it the public pages of three competitors and ask for a
comparison table of positioning, pricing shape and claimed features. Verify every cell.
Models invent features that sound right.

**Status updates and meeting notes.** The least glamorous and the most reliable. Paste a
transcript or your rough notes, ask for decisions, owners and open questions in that order.
Send it after checking the owners are right.

**Rubber-ducking a decision.** Describe a decision and ask the model to argue the other
side, list what you might be missing, or play a sceptical engineer. This is the use most
senior PMs value most, and the one that needs the least trust in the output, because you
are not shipping it.

Notice what is not on the list: deciding what to build, talking to users, and persuading
people. Those stay yours.

## What never goes in

Assume anything you paste into a consumer model may be stored, reviewed by the provider,
or used to train future models unless your company has a contract that says otherwise.
Read your provider's data policy once; OpenAI's and Anthropic's are linked below. Then
apply a simple rule: if you would not email it to a stranger, do not paste it.

Concretely, that rules out:

- Customer names, contact details, account data, anything personal.
- Unreleased plans, pricing, financials, acquisition talk.
- Source code and credentials.
- Anything under a non-disclosure agreement.
- Anything your security team has told you not to.

Sanitise before you paste. Replace names with roles, round the numbers, strip identifiers.
The synthesis is just as good and you keep your job. The UK's National Cyber Security
Centre has a short, sober note on the risks that is worth ten minutes.

## Reviewing what comes back

You are accountable for every document with your name on it, whoever or whatever drafted
it. That means reading AI output more carefully than your own, not less, because it is
fluent in a way that hides gaps. Three habits:

1. **Check every fact and number.** Models produce plausible figures. Plausible is not
   true. If you cannot source a claim, cut it.
2. **Find the decision.** AI drafts tend to describe options evenly and recommend nothing.
   A document without a recommendation is not a PM document. Add yours.
3. **Restore the voice.** Delete the filler, the hedges and the generic enthusiasm. If a
   paragraph could appear in any company's document, it is not saying anything about yours.

If a draft needs more than half rewriting, the brief was wrong. Fix the brief, not the
draft.

## A prompt structure for product documents

The same five-part brief from lesson 7.6.1 works for documents. Role and audience, the
specific artifact, the inputs (pasted, sanitised), constraints such as length and format,
and what good looks like. Both major providers publish prompting guides, and the
principles in them are the principles of clear writing from lesson 2.3.1: be specific, give
examples, say what you do not want.

Two refinements that help for PM work. Ask for the output in your template, not the
model's. And ask for the questions it would need answered to do better; those questions
are often the real gaps in your thinking.

## Reusable libraries

You do not have to write every prompt from scratch. Dean Peters' open-source
[Product Manager Skills](https://github.com/deanpeters/Product-Manager-Skills) library
packages dozens of PM frameworks, from positioning to pre-mortems, as instructions that AI
assistants can load, each explained well enough to serve as a lesson on the framework
itself. Aakash Gupta's [Awesome AI PM](https://github.com/aakashg/awesome-ai-pm) list
collects workflows and templates. Treat both as starting points to adapt, not scripts to
run.

## Assignment

<div class="assignment">

1. Read your provider's data policy: OpenAI's
   [data controls FAQ](https://help.openai.com/en/articles/7730893-data-controls-faq) or
   Anthropic's note on
   [whether your data is used for training](https://privacy.anthropic.com/en/articles/10023580-is-my-data-used-for-model-training),
   five minutes each. Then read the National Cyber Security Centre's
   [post on large language model risks](https://www.ncsc.gov.uk/blog-post/chatgpt-and-large-language-models-whats-the-risk),
   ten minutes. Write down the three things you will never paste.
2. Read the first half of Anthropic's
   [prompt engineering overview](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
   or OpenAI's [prompt engineering guide](https://platform.openai.com/docs/guides/prompt-engineering),
   twenty minutes. Note which techniques are just good writing.
3. Take the anonymised notes from your five interviews in project 3.2.5. Ask a model for
   themes, supporting quotes and contradictions. Compare its output with your own
   synthesis. Write two hundred words on what it caught, what it missed, and what it got
   wrong.
4. Browse the [Product Manager Skills](https://github.com/deanpeters/Product-Manager-Skills)
   library, fifteen minutes. Pick one framework you have not used, read its explanation,
   and apply it to your product by hand, without the model. The library teaches as well as
   it automates.

</div>

## Additional resources

- Ethan Mollick's newsletter [One Useful Thing](https://www.oneusefulthing.org/), the
  most consistently useful writing on working alongside models, from someone who tests
  everything before writing about it.
- Marty Cagan on [product management and AI](https://www.svpg.com/product-management-and-ai/),
  for a sober view of which parts of the job change and which do not.
- Wikipedia's page on [hallucination in AI](https://en.wikipedia.org/wiki/Hallucination_%28artificial_intelligence%29),
  for why "check every fact" is not optional.
