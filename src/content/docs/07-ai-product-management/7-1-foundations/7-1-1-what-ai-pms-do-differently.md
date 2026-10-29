---
title: "7.1.1 What AI PMs do differently"
description: "The three kinds of AI product manager, what changes about specs, quality, launch and measurement when a model is in the product, and what stays exactly the same."
---

## Introduction

Everything you have learned so far still applies. Discovery, strategy, definition, delivery
and measurement are the job whether or not a model sits inside the product. What changes
when one does is the texture of each: what a spec can promise, what "working" means, how
you launch something that is right most of the time, and what you measure afterwards.

This lesson sets up Course 7 by naming three kinds of AI PM, walking through what each
stage of the lifecycle looks like with a model in it, and being clear about what does not
change, because the most common failure of new AI PMs is forgetting that they are still
product managers.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- The three AI PM personas and which one most roles actually are.
- What changes in discovery, definition, delivery and measurement.
- Why quality becomes a distribution rather than a checkbox.
- What does not change, and why that matters more than what does.
- How to tell whether a role is really an AI PM job.

## Three kinds of AI PM

The title "AI product manager" covers three different jobs. Most roles are a blend, but one
usually dominates, and knowing which one you are applying for or doing saves a lot of
confusion.

**The AI Experiences PM** builds features powered by models inside an ordinary product: a
summariser in an email client, a recommendation feed, a support assistant. The model is
usually bought from a provider, not trained in-house. The job is choosing where AI belongs,
designing for its failures, and measuring whether it helps. This is the most common AI PM
role and the one most of this course trains you for.

**The AI Builder PM** works on the model or the platform itself: a model provider, an
inference service, a team training a fraud detector on proprietary data. The users are
often other engineers. The job needs real technical depth about data, training, evaluation
and infrastructure, and the metrics are things like latency, accuracy and cost per call.

**The AI-Enhanced PM** is every other PM, using AI tools to do their own work faster:
drafting documents, synthesising interviews, prototyping, analysing data. This is not a
separate role. It is what the whole profession is becoming, and section 7.6 is about it.

If a job ad says "AI PM", read it against these three. A role that says "ship AI features
in our app" is the first. One that says "own the model roadmap" is the second. One that
mostly lists ordinary PM work with "leverage AI" sprinkled through is the third wearing a
costume.

## What changes

**Discovery changes less than people think.** You still need a problem worth solving for a
known group of people. What is new is a question you must ask of every candidate problem:
does a probabilistic answer help here, or does it have to be exactly right? Section 7.2
gives you a decision tree for that.

**Definition changes a great deal.** A conventional spec says what the feature does. An AI
spec has to say what the feature does when it is right, what it does when it is wrong, how
often each is acceptable, and how the user finds out which one happened. The acceptance
criteria you learned in Course 5 turn into evaluation criteria, and a chunk of the PM's
time goes into building the examples and rubrics that define "good". Section 7.4 is about
that.

**Delivery changes shape.** Engineers can rarely promise a behaviour; they can tune toward
one. Iteration happens on prompts, retrieval and data as much as on code. The PM spends
more time looking at actual outputs, failure by failure, than on any conventional project.
That is not a sign the team is struggling. It is the work.

**Measurement becomes the spec.** Because you cannot test every input, you sample. You
track acceptance rates, edit rates, fallbacks, escalations and the rate of outputs that
were confidently wrong. A metric you did not define before launch is a failure you will not
see until a user tweets it.

**Launch becomes staged by default.** You roll out to a slice, watch the distribution of
outcomes, widen. Support needs a playbook for "the AI said something strange". Legal and
privacy need to know what data goes where. Section 7.5 covers the responsible side.

## Quality as a distribution

In a conventional feature, a bug is a bug: the button does the wrong thing, you fix it,
it does the right thing. In an AI feature, the same input can produce different outputs,
and a given output can be right for one user and wrong for another. Quality stops being a
yes or no and becomes a shape: how often is it excellent, how often is it fine, how often
is it embarrassing, and how bad is embarrassing?

That shape is what you design for. A feature that is excellent 60 percent of the time and
harmlessly mediocre the rest can ship. A feature that is excellent 95 percent of the time
and confidently harmful 5 percent of the time may not. Lesson 7.1.3 is entirely about
this way of thinking, because nothing else in the course prepares you for it.

## What does not change

- **Users do not care that it is AI.** They care whether the task got done. "Powered by
  AI" is a sentence for a press release, not a value proposition.
- **The hard part is still the problem, not the technology.** Most failed AI features
  solved a problem nobody had, beautifully.
- **You are still accountable without authority.** Now the thing you do not control
  includes the model.
- **Writing is still the job.** Evaluation rubrics, failure-mode documents and launch
  memos are prose. Course 2 applies in full.
- **Evidence still beats opinion.** It is just that the evidence is a distribution of
  outputs rather than a conversion rate, and you have to go and look at it.

If you hold onto those five, the rest of this course is detail. If you let them go
because the technology is exciting, you will build impressive demos that nobody uses.

## How the role is moving

Two trends are worth knowing as you start. First, the distance between deciding and
building is shrinking: a PM who can prototype with an AI coding tool can test an idea in an
afternoon that used to need a sprint. Second, evaluation is becoming the PM's core
technical skill, the way SQL was a decade ago. Neither replaces judgement about people and
problems. Both make the PM who has that judgement far more effective.

## Assignment

<div class="assignment">

1. Read Chip Huyen's
   [Building LLM applications for production](https://huyenchip.com/2023/04/11/llm-engineering.html),
   twenty-five minutes. Written for engineers, and the clearest account of why shipping a
   model-backed feature is different from shipping a conventional one. Read it for the
   list of challenges; you do not need to follow the code.
2. Read the Google PAIR
   [People and AI Guidebook](https://pair.withgoogle.com/guidebook/), the chapter list and
   any two chapters, thirty minutes. The best structured guidance on designing products
   with AI in them, and the source of several frameworks later in this course.
3. Read the Microsoft
   [Human-AI Experience toolkit guidelines](https://www.microsoft.com/en-us/haxtoolkit/),
   fifteen minutes. Eighteen short guidelines for AI features. Compare them with the
   PAIR guidebook and note where they agree.
4. Take the product you have carried through Courses 3 to 6. Write one paragraph for each
   of the three personas describing what an AI PM of that kind would be doing on it. If
   one of the paragraphs is empty, that tells you something about the product.

</div>

## Additional resources

- Aakash Gupta's [Awesome AI PM](https://github.com/aakashg/awesome-ai-pm) list on
  GitHub. A curated set of frameworks and readings for AI product management, several of
  which this course draws on. Skim the headings now, return to it as you go.
- Ethan Mollick's newsletter [One Useful Thing](https://www.oneusefulthing.org/). The most
  consistently sensible writing on what AI actually changes about knowledge work, which is
  the AI-Enhanced PM's whole question.
