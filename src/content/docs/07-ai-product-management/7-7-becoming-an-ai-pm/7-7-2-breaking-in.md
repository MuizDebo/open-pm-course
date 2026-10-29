---
title: "7.7.2 Breaking in"
description: "How to get an AI product role without already having one: build in public, publish your thinking, and use the paths that fit where you are coming from."
---

## Introduction

Nobody hires an AI product manager for having read about AI. They hire for evidence that
you can decide what a model-driven product should do, measure whether it does it, and ship
it anyway when it is imperfect. The problem for anyone trying to break in is that the
evidence usually comes from having done the job. This lesson is about manufacturing that
evidence before anyone pays you for it.

The good news is that this course has already made you do most of the work. The four
projects in Course 7 are, by design, the artifacts a hiring manager wants to see. What
remains is to finish them properly, put them where people can find them, and tell the story
around them.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- Why a public project beats a certificate.
- The four Course 7 projects as a portfolio, and how to present them.
- Publishing your thinking without becoming a content machine.
- Three transition paths: from general PM, from engineering, from data.
- Where the conversations happen and how to join them.

## Evidence beats credentials

AI certificates are cheap and everybody has one. A hiring manager looking at two candidates
with the same certificate and no shipped work has nothing to go on. A hiring manager looking
at a candidate who built a small AI feature, wrote an eval suite for it, ran it against a
golden dataset, found it failed on a segment, fixed the prompt and wrote up what happened has
a complete picture of how that person works.

That second candidate did not need a job to do any of it. They needed a problem, an API key,
a weekend and the discipline to write it down. The writing down is the part most people
skip, and it is the part that gets you hired, because the write-up is what the hiring
manager can actually read.

## Your portfolio is already half built

Look at what Course 7 has had you produce for the product you chose back in project 3.1.4:

- **7.2.4 AI opportunity audit.** Ten candidate features run through the decision tree,
  one chosen, with reasons. This shows judgement about where AI belongs, which is the
  rarest skill in the market.
- **7.3.6 AI PRD.** A requirements document that specifies failure modes, fallbacks and
  human review. Most AI PRDs in the wild do not have those sections. Yours does.
- **7.4.6 Eval suite.** A rubric, a golden dataset and a scoring sheet. This is the artifact
  interviewers ask you to design on the spot. You will have one to show instead.
- **7.6.4 Working prototype.** The feature, actually running, with a two-minute demo. It
  does not need to be good. It needs to exist and to have been measured.

Together they are a case study. Put them in one place, in that order, with a one-page
introduction that says what the product is, what the feature does, what the eval found and
what you would do next. That page is your AI PM portfolio. Course 8 covers the portfolio
site itself; the content is done.

Two rules for presenting it. Lead with what you learned, not with what you built. And be
specific about the failure: the segment where it broke, the number, the fix. Hiring managers
trust candidates who describe their own failures accurately, because that is what the job
is.

## Publish your thinking

Alongside the portfolio, a small body of public writing does a lot of work. Not a newsletter,
not a personal brand, just three or four pieces that show how you think about AI products.
Good subjects, because they are concrete and you already have the material:

- The write-up of your eval suite: what you measured, what surprised you.
- A teardown of an AI feature in a product you use, run through the 7.2.1 decision tree.
- What you would change about an AI product's failure handling, with a sketch.
- A post about one thing from Course 7 that changed your mind.

Publish on your own site or on a platform where product people read. Link the pieces from
your portfolio and your profile. Then stop. Three good pieces beat thirty thin ones, and the
point is to be findable and legible, not prolific.

The same principle as lesson 0.3: learning in public is the fastest way to get feedback, and
the feedback is itself evidence of how you take it.

## Three ways in

**From general PM.** You are closest. Your gap is technical judgement and evals, both
covered in Course 7. The move is usually sideways within your current company: find the
feature that calls a model, or should, and own it. Propose the opportunity audit from 7.2.4
for your own product. Companies would rather grow an AI PM from a PM who knows the product
than hire one who knows AI and nothing else.

**From engineering.** You have the technical depth and need the product side: discovery,
prioritisation, saying no, talking to users. That is Courses 1 to 5. Your fastest route is
the AI builder PM path, where your users are engineers and your judgement about models is
the scarce thing. Use the Course 3 projects to prove you can talk to users, because that
is what interviewers will doubt.

**From data or analytics.** You understand metrics, experiments and the difference between
correlation and causation better than most PMs ever will. Your gap is shipping: definition,
delivery, working with design. Courses 5 and 6 are yours already; add Course 7's design and
prototyping sections. Evals, which are where AI PM lives, are an extension of what you do
now, and you should say so in interviews.

In all three cases the first AI PM job is usually at a company that is not a lab, as lesson
7.7.1 said. Take it. The second one is easier.

## Where the conversations are

AI product management is young enough that its practitioners are reachable. A few places
worth being, without trying to be everywhere:

- The communities and newsletters listed in
  [Awesome AI Product Management](https://github.com/aza-ali/awesome-ai-product-management),
  a curated and maintained list. Pick two.
- [Hugging Face's learning hub](https://huggingface.co/learn), where the open-model
  community does its teaching and where a PM can get hands-on cheaply.
- Local product communities, which exist in most large cities and are usually a Slack or
  WhatsApp group away. In Lagos, Nairobi, Accra and Johannesburg the AI product groups are
  small and the people in them know each other, which is an advantage if you show up with
  something built.
- The Discussions on this course, where other learners are doing exactly what you are
  doing and reviewing each other's Course 7 projects.

When you join, do not introduce yourself as "aspiring AI PM". Introduce yourself with the
thing you built and the question you have about it.

## Assignment

<div class="assignment">

1. Read [Learn in Public](https://www.swyx.io/learn-in-public) by Shawn Wang again,
   five minutes, this time as a strategy document rather than encouragement. Then read the
   "breaking in" section of [Awesome AI PM](https://github.com/aakashg/awesome-ai-pm),
   ten minutes, which makes the same argument specifically for AI roles.
2. Assemble your Course 7 portfolio: the four project artifacts in one folder in your work
   repository, in order, with a one-page introduction as described above. If any project is
   unfinished, finish it before you do anything else in this lesson. An incomplete portfolio
   is worse than none.
3. Write one public piece from the list above, five hundred to a thousand words. The eval
   write-up is the easiest and the most useful. Publish it and link it from the portfolio.
4. Take Andrew Ng's [AI for Everyone](https://www.deeplearning.ai/courses/ai-for-everyone/),
   about six hours over a week if you have not done it. It is the non-technical course that
   hiring managers and executives have most often taken themselves, so it gives you their
   vocabulary. Skip it if Course 7 felt easy.
5. Using the five job ads from lesson 7.7.1, write down which transition path you are on,
   which Course 7 project most directly answers each ad's main requirement, and the one gap
   none of your work covers yet. That gap is your next small project.

</div>

## Additional resources

- [AI for Product Managers](https://github.com/ombharatiya/AI-for-Product-Managers), the
  full guide, whose "start here" folder lays out learning paths for exactly these three
  transitions.
- [The Pragmatic Engineer](https://blog.pragmaticengineer.com/), for the engineering side
  of the conversation. Its coverage of how AI tools are changing engineering teams is
  background every AI PM should have.
