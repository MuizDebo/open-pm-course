---
title: "7.5.1 Data strategy for AI products"
description: "Where the data behind an AI feature actually comes from, why most data flywheels never spin, and what a PM owns about data quality, consent and provenance."
---

## Introduction

Every AI feature is three things: a model, the data that shaped it, and the data it sees
when it runs. PMs spend most of their attention on the first and almost none on the other
two, and then are surprised when the feature is confidently wrong about their own customers.

Data strategy is the unglamorous part of AI product management, and it is the part you
have the most control over. You will rarely choose the model's architecture. You will
always choose what the product collects, what it retrieves, what it learns from, and what
you are allowed to do with any of it. This lesson is about making those choices on purpose.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- The three kinds of data in an AI product: training, retrieval and feedback.
- Why "we'll have a data flywheel" is usually a wish, and what a real one needs.
- Quality beats quantity, and what quality means in practice.
- Consent and provenance: knowing where your data came from and whether you may use it.
- Synthetic data, what it is good for, and what it quietly breaks.

## Three kinds of data

**Training data** shaped the model before you ever touched it. If you use a model from a
provider, you did not choose this data and mostly cannot see it. What you can do is test
for its gaps: does the model know your domain, your region, your users' language and
names? A model trained mostly on English web text will handle a Lagos address or a Yoruba
name worse than you expect, and you will only find out by trying.

**Retrieval data** is what your product hands the model at run time: the user's documents,
your help centre, the last ten transactions, a knowledge base. This is the data you have
the most control over and the data most AI products stand or fall on. A model with the
right three paragraphs in front of it beats a bigger model guessing. Lesson 7.3.4 covered
the mechanics; the strategic point is that curating this data is product work, not
engineering work, and it never finishes.

**Feedback data** is what users tell you about the output: thumbs up or down, edits they
make, suggestions they accept or ignore, the fallback they trigger. This is the data that
can make your product better over time, and it is the one most teams collect badly or not
at all. Decide what feedback you capture before launch, because you cannot go back and
collect it.

## The flywheel that does not spin

The pitch is familiar: more users produce more data, more data makes the model better, a
better model attracts more users. It is true for a handful of products and claimed by
nearly all of them. For most, the wheel never turns, for three reasons.

First, the data has to actually improve the model, and for a provider's model it mostly
cannot: you do not retrain it. What you can improve is retrieval and the prompts, which
needs curated examples, not volume. Second, the returns diminish fast. The thousandth
example of a common case teaches almost nothing; the tenth example of a rare failure
teaches a lot, and you only find rare failures by looking. Third, the loop needs a human
in it to label, review and decide, and that labour is the real cost nobody budgets for.

A real flywheel has a specific mechanism you can draw: this user action produces this data,
which is reviewed in this way, which changes this component, which users notice as this
improvement. If you cannot draw it, you do not have one. The a16z piece in the assignment
makes the case that data moats are rarer than decks suggest, and it is worth reading before
you promise one.

## Quality over quantity

The practical meaning of data-centric AI, which the Andrew Ng talk in the assignment
explains, is that a small, clean, representative set of examples beats a large messy one.
For a PM that translates into a few habits:

- **Representative.** Does your evaluation and retrieval data look like your real users?
  Same devices, languages, spelling, edge cases, bad photos, partial forms.
- **Labelled consistently.** If two reviewers would disagree on what "correct" means for
  an output, your labels are noise. Write the rubric first. Course 7.4 covered this.
- **Fresh.** Prices, policies, product names and laws change. A retrieval corpus that was
  right in January is confidently wrong in June unless someone owns updating it.
- **Owned.** Every dataset in the product has a named owner, a source, a refresh cadence
  and a known licence. If that sounds like a spreadsheet, it is, and you should keep it.

## Consent and provenance

Provenance is the record of where a piece of data came from and under what terms. For
training data from a provider, you inherit their provenance decisions and their legal
exposure, which is one reason enterprise buyers ask about it. For your own data, the
questions are plain:

- Did the person it describes agree to this use? "We may use your data to improve our
  services" in a privacy policy is not the same as consent to train a model on their
  messages, and regulators increasingly say so. Lesson 7.5.2 covers the law.
- Is the content licensed for this? Scraped documents, customer uploads and third-party
  feeds all come with terms, and "it was on the internet" is not one of them.
- Can you delete it? If a user withdraws consent or a customer leaves, can you remove their
  data from retrieval, from fine-tuning sets and from logs? Design for that before launch,
  because retrofitting it is miserable.

The habit that covers most of this is a datasheet: a one-page description of each dataset,
its source, its consent basis, its known gaps and who to ask. The paper that proposed
datasheets is in the additional resources. You do not need the academic version; you need
the discipline of writing one.

## Synthetic data, honestly

Synthetic data is data generated by a model rather than collected from the world. It is
genuinely useful for three things: filling rare cases you cannot collect enough of,
building evaluation sets without exposing real customer data, and bootstrapping before you
have users. It is risky for one thing: training or tuning a model on its own kind of
output. Research in the additional resources shows models degrade when fed recursively
generated data, and the degradation is not obvious until the tails are gone.

Treat synthetic data as scaffolding, label it as synthetic everywhere it is stored, and
never let it be mistaken for ground truth in an eval. The eval suite you built in project
7.4.6 should say, example by example, which items are real.

## What the PM owns

Not the pipeline. Not the storage. You own the decisions: what to collect, what to retrieve,
what feedback to capture, who reviews it, how often it refreshes, what you have consent for
and what you will delete on request. Write those down for your AI feature from project
7.3.6, because the next three lessons assume you have.

## Assignment

<div class="assignment">

1. Watch Andrew Ng's
   [From model-centric to data-centric AI](https://www.youtube.com/watch?v=06-AZXmwHjo),
   about an hour, or the first twenty minutes if you are short of time. The clearest case
   that the model is usually not the problem and the data usually is, with examples you can
   repeat to an engineering team.
2. Read a16z's [The Empty Promise of Data Moats](https://a16z.com/the-empty-promise-of-data-moats/),
   fifteen minutes. Read it for the distinction between data that compounds and data that
   merely accumulates, and apply it to a product you know.
3. Read Chip Huyen's [Building a generative AI platform](https://huyenchip.com/2024/07/25/genai-platform.html),
   thirty minutes. It is written for engineers, and the sections on context construction,
   guardrails and the feedback loop are exactly the parts a PM has to specify.
4. Read Google PAIR's [Data collection and evaluation](https://pair.withgoogle.com/chapter/data-collection/)
   chapter, twenty minutes, for the questions to ask about representativeness and labelling
   before anyone builds anything.
5. For the AI feature you specified in project 7.3.6, write a one-page data plan: the three
   kinds of data, where each comes from, who owns it, its consent basis, its refresh
   cadence, and what you delete on request. Keep it; the launch checklist in 7.5.3 asks for
   it.

</div>

## Additional resources

- [Datasheets for Datasets](https://arxiv.org/abs/1803.09010) by Gebru and colleagues. The
  paper behind the one-page dataset description. Skim the question list in the appendix.
- [AI models collapse when trained on recursively generated data](https://www.nature.com/articles/s41586-024-07566-y)
  in Nature. The evidence on what happens when synthetic data feeds back into training.
- The [Data Provenance Initiative](https://www.dataprovenance.org/), an audit of the
  licences behind popular training datasets, which shows how unclear provenance usually is.
- The [RLHF explainer](https://huggingface.co/blog/rlhf) from Hugging Face, if you want to
  understand how human feedback data actually shapes a model.
