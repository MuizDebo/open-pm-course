---
title: "8.3.6 Technical questions"
description: "What technical interviewers actually ask PMs who are not engineers, how deep to go, and how to say you do not know."
---

## Introduction

The technical round is the one non-engineering candidates dread most, and mostly for the
wrong reasons. Nobody is going to ask you to write code. The interviewer, often an
engineering lead who will work with you, wants to know three things: can you follow a
technical conversation, can you make a sensible trade-off when engineering gives you
options, and will you pretend to know things you do not.

That third one matters more than the first two. An engineer can teach a PM how a cache
works in ten minutes. They cannot fix a PM who bluffs. This lesson covers what is actually
asked, how much depth is enough, and how to handle the moment you reach the edge of what
you know.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- The five kinds of technical question PMs get.
- How deep is deep enough, by role.
- Walking through "what happens when a user taps the button".
- System design at a PM level.
- Saying "I don't know" in a way that earns points.

## What is actually asked

Technical PM interviews cluster into five kinds of question. Lesson 5.2.1 covered the
underlying material; this is how it shows up in the room.

**Explain a concept.** What is an API? What is the difference between the front end and
the back end? What is a database index? These check vocabulary. A good answer is two or
three plain sentences and an example from a product the interviewer knows.

**Walk through a flow.** What happens when a user taps "pay" in a mobile-money app? Trace
it: the app validates the input, sends a request to a server, the server checks the
balance, calls a payment provider, writes a record, returns a response, the app shows
confirmation. The interviewer is listening for whether you know there are steps, where they
can fail, and what the user sees when they do.

**Make a trade-off.** Engineering offers two ways to build the feature: one is fast but
will not scale past a certain point, the other takes three times as long. Which do you
pick, and what would change your mind? There is no right answer. There is a right shape of
answer: ask about the numbers, name what you are optimising for, pick, and say what you
would watch.

**Design a system, at altitude.** Design a notification system for the app. They want the
boxes and arrows, not the code: where events come from, a queue, a service that decides who
gets what, delivery channels, a way to handle failures and retries, a way to measure it.

**Interpret data.** Here is a dashboard where conversion dropped on Tuesday. What would you
look at? Lesson 6.3 and 6.5 are the preparation. Segment, check instrumentation, check
releases, check external events.

## How deep is deep enough

It depends on the role, and you should calibrate to the job you applied for.

For a general PM role at a product company, you should be able to explain the client,
server and database picture, read an API response, understand what "it's blocked on the
backend" means, and hold a sensible conversation about technical debt. Lesson 5.2.1 is the
floor.

For a technical or platform PM role, expect real depth: how authentication works, what an
eventually consistent system is, how you would version an API, what a message queue buys
you. If the job ad says "technical", prepare like an engineer would for a system design
round, at least to the level of the primer in the assignment.

For an AI PM role, add the material from Course 7: how models are called, what latency and
cost drivers are, what an eval is. Lesson 7.7.3 covers that interview specifically.

A good rule: you should be able to go one level deeper than the conversation needs, and
know it when you reach your limit.

## The tap-the-button walkthrough

Practise this until it is fluent, because some version of it comes up in most loops. Pick
a product you know and a single action. Then narrate:

1. What the user does and what the app does immediately, before any network call.
2. What gets sent where, roughly what it contains, and what could go wrong on the way.
3. What the server does, including anything it has to check or look up.
4. What third parties are involved, and what happens if they are slow or down.
5. What gets stored, and why.
6. What comes back and how the user experiences success, failure and the slow case.

Do this out loud, with a whiteboard or paper, in under four minutes. If you can also say
where you would put monitoring and what metric would tell you the flow was broken, you are
ahead of most PM candidates.

## System design, PM edition

Engineers get system design questions about scaling and consistency. PMs get them about
structure and trade-offs. The interviewer wants to see you decompose a problem into
components, name their responsibilities, and reason about where it will break.

A workable approach:

- Clarify who the users are and the scale. A notification system for a thousand users
  and one for fifty million are different problems.
- Draw the boxes: inputs, processing, storage, outputs. Name each box's job in a sentence.
- Walk one request through it.
- Ask yourself what fails first under load, and what happens to the user when it does.
- Say what you would measure.

You are not expected to pick the right database. You are expected to know that the choice
exists and what it depends on.

## Saying you do not know

You will reach the edge of your knowledge in this round. That is the design of the round.
What happens next is the real test.

The wrong answers are to bluff, to freeze, or to apologise at length. The right answer has
three parts. Say plainly that you do not know. Say what you do know that is adjacent. Say
how you would find out, and with whom. "I don't know how that provider handles retries. I'd
expect it to be in their API docs, and I'd ask our backend lead what we have seen in
practice before I made any promise to the business about it."

That answer tells the interviewer you are honest, you reason from what you know, and you
will not make commitments on their behalf out of ignorance. It is worth more than a correct
answer delivered with false confidence, and most engineers will tell you so.

## Assignment

<div class="assignment">

1. Reread MDN's [How the web works](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works),
   fifteen minutes, from lesson 5.2.1. This time read it as an interviewer would: which
   sentence would you ask a candidate to explain?
2. Skim the [What happens when](https://github.com/alex/what-happens-when) repository on
   GitHub, twenty minutes. It traces typing a URL and pressing enter in extreme depth. You
   do not need the depth. You need to see how many layers exist, so your own walkthrough
   stops at the right one for a PM.
3. Watch a mock interview from Aced,
   [Mock Technical Product Manager Interview: How Google Docs Works](https://www.youtube.com/watch?v=3MsWDQJmYOE).
   Budget half an hour. Notice how the candidate clarifies scope first and how the
   interviewer pushes on trade-offs rather than facts.
4. Read the first sections of the
   [System Design Primer](https://github.com/donnemartin/system-design-primer), thirty
   minutes, stopping at the point where it starts discussing specific technologies. The
   vocabulary of scalability, availability and consistency is what you need; the
   implementation detail is not.
5. Record yourself doing the tap-the-button walkthrough for a product you use, in under four
   minutes. Listen back. Note every place you said "um, something happens". That is your
   reading list.

</div>

## Additional resources

- Gergely Orosz on [the product-minded engineer](https://blog.pragmaticengineer.com/the-product-minded-engineer/),
  from lesson 1.1.4. Read it in reverse: it describes the engineer you most want to work
  with, and what they will expect you to understand.
- A short explainer, [What is an API?](https://www.youtube.com/watch?v=s7wmiS2mSXY), three
  minutes, if the concept is still fuzzy. You will be asked.
- [roadmap.sh's product manager roadmap](https://roadmap.sh/product-manager) has a technical
  skills branch you can use to find gaps.
