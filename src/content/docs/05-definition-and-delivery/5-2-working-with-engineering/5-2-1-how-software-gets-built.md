---
title: "5.2.1 How software gets built"
description: "Enough technical literacy to follow an engineering conversation, ask a useful question, and know what done means."
---

## Introduction

You do not need to write code to be a product manager. You do need to understand what the
engineers are talking about, or you will nod through decisions that shape your product and
only find out what they meant at launch. This lesson is the vocabulary and the mental model:
what a codebase is, where the front end stops and the back end starts, what an API does, why
"it's on staging" is not "it's shipped", and why a feature that is "done" can still be weeks
from a user's hands.

The goal is not expertise. It is being able to draw, on a whiteboard, roughly how your product
works, and to ask "which part changes?" when someone proposes a feature.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- The parts of a typical product: client, server, database, and the services around them.
- What an API is and why most features are really API changes.
- Environments, deploys and continuous integration, and what each means for your timeline.
- Feature flags and why they change how you launch.
- The five meanings of "done" and which one you should ask for.

## The shape of a product

Almost every software product has the same three layers, whatever the stack:

**The client**, or front end. What runs on the user's device: the web page, the mobile app,
the thing they tap. It draws screens and sends requests. When a designer says "the UI", they
mean this. When a user says "it's slow", it may or may not be this.

**The server**, or back end. Code running on machines the company controls. It receives
requests from the client, decides what to do, talks to the database, and sends back an answer.
Business rules live here: who is allowed to see what, what a price is, what happens when a
payment fails.

**The database**. Where the data lives when nobody is looking at it. Users, orders, messages.
Changing what the product stores, or how it is organised, is usually the slowest kind of
change, because every existing record has to keep working.

Around those three sit services the team did not write: payment providers, email senders,
maps, analytics, authentication. Each is a dependency with its own failure modes and its own
bill.

When you ask "which part changes?" you are asking which of these layers the feature touches.
A copy change touches the client only. A new pricing rule touches the server and probably
the database. A new login method touches all three and a third-party service. That is why
"small" features are sometimes large.

## APIs

An API is the agreed way one piece of software asks another to do something. The client asks
the server for a user's orders through an API. Your product asks a payment provider to charge
a card through its API. Other companies may ask your product for data through yours.

Three things follow for a PM. First, most features are API changes with a screen on top, so
the back-end work is usually the real work. Second, an API that other people depend on cannot
be changed casually, because their software breaks; this is why engineers talk about
"backwards compatibility" and why a platform PM's life is slower than a consumer PM's. Third,
if your product is itself an API, its documentation is its user interface, and you own it.

## Environments and deploys

Code does not go from an engineer's laptop to users in one step. It passes through
environments:

- **Local**: the engineer's own machine. "Works on my machine" is a joke because it is true.
- **Staging** or test: a copy of the product where the team can try things. "It's on staging"
  means you can click it, not that users can.
- **Production**: the real thing. "Deployed to prod" means users can reach it, subject to the
  next section.

Moving code between environments is a **deploy**. Modern teams deploy many times a day with
**continuous integration**, where every change is automatically tested before it merges, and
**continuous delivery**, where every merged change can go to production with a button press.
If your team deploys weekly, a one-line fix waits up to a week. If it deploys hourly, you can
ship a fix during a customer call. Know which world you are in; it changes what you promise.

## Feature flags

A feature flag is a switch in the code that turns a feature on or off without a deploy. The
code is in production but dark. You can turn it on for staff, then one percent of users, then
everyone, and off again in seconds if it misbehaves.

Flags separate "shipping the code" from "launching the feature", which is the single most
useful thing an engineering practice has done for product managers. It lets you run a beta,
do a gradual rollout, test two versions, and give sales a demo before launch. It also means
"it's deployed" and "it's launched" are different questions, and you should ask both.

## The five meanings of done

Ask an engineer if the feature is done and you may get any of these, all honest:

1. **Code complete.** They finished writing it. Not tested, not reviewed, not merged.
2. **Merged.** Reviewed by another engineer and added to the main codebase. Not deployed.
3. **Deployed.** In production, possibly behind a flag. Users may not be able to see it.
4. **Launched.** Flag on, users can use it. Not necessarily measured.
5. **Validated.** Launched, measured, and it did what it was supposed to.

The gap between 1 and 4 is where launches slip by weeks while everyone believes the feature
is finished. Agree with your team what "done" means for your tickets, write it down, and ask
for that one. Course 5.4 picks this up at launch.

## What you are not expected to do

Read code, estimate work, choose the architecture, or tell engineers how to build it. What
you are expected to do is understand enough to notice when a decision is a product decision
in disguise: "we'll store that as free text" affects what you can report on later; "we'll
call the API on every keystroke" affects the bill; "we'll hard-code the currency for now"
affects your first international customer. Those are yours.

## Assignment

<div class="assignment">

1. Read MDN's
   [How the web works](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works),
   ten minutes. Written for beginners, it gives you the client, server and request vocabulary
   with pictures. You will use these words every week.
2. Watch [What is an API? (in 3 minutes)](https://www.youtube.com/watch?v=s7wmiS2mSXY),
   three minutes. The restaurant-waiter analogy is a cliché because it works. After this,
   reread the API section above.
3. Read Martin Fowler's site on
   [Feature Toggles](https://martinfowler.com/articles/feature-toggles.html), twenty minutes
   for the first half. Stop when it gets into implementation. You want the categories of
   flag and the idea that shipping and launching are separate events.
4. Read Atlassian's short explainer on
   [continuous integration, delivery and deployment](https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment),
   five minutes. Then find out which one your team, or a team you know, actually does and how
   often they deploy. Write the answer down; it is the most important number for your
   timelines.
5. Draw the product you chose in project 3.1.4 as three boxes, client, server, database,
   plus any outside services it would need. For each of the three features you most want to
   build, mark which boxes change. Keep the sketch; project 5.2.6 uses it.

</div>

## Additional resources

- [roadmap.sh's product manager roadmap](https://roadmap.sh/product-manager) is a visual map
  of skills with links. Its technical section is a good next step if this lesson left you
  wanting more.
- Gergely Orosz's [The Product-Minded Engineer](https://blog.pragmaticengineer.com/the-product-minded-engineer/)
  describes the engineers you will enjoy working with most. Knowing what they care about
  makes it easier to be the PM they enjoy working with.
- The code.org short [What is the Internet?](https://www.youtube.com/watch?v=Dxcc6ycZ73M),
  four minutes, if "server" is still an abstract word.
