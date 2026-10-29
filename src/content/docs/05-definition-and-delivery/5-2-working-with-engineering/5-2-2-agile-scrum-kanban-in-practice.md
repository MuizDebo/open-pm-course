---
title: "5.2.2 Agile, Scrum, Kanban in practice"
description: "What the ceremonies are for, why adding people to a late project makes it later, and how to tell when the process has replaced the point."
---

## Introduction

Most product teams say they are agile. Most run some version of Scrum or Kanban. Few can say
what each ceremony is actually for, which is how teams end up with a two-hour planning
meeting, a daily standup that is a status report to the manager, and a retrospective nobody
acts on. The rituals survive; the reason for them is forgotten.

This lesson is the reason. It covers the ideas underneath agile, the two frameworks you will
meet most, what each ritual is supposed to produce, and the oldest and most reliable law of
software delivery, which is that adding people to a late project makes it later.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- The Agile Manifesto in one paragraph and why it was written.
- Scrum's parts and what each ceremony is for.
- Kanban, and when a team should use it instead.
- Brooks's law and what it means for your roadmap.
- The signs that a team is doing the ritual without the result.

## What agile actually said

In 2001 a group of software people wrote a short statement of what they had learned the hard
way: working software matters more than documents, talking to each other beats following a
plan, customers should be collaborated with rather than negotiated against, and responding to
change beats sticking to the plan. It is four lines and twelve principles, and you can read
it in five minutes. Everything that followed, every framework, certification and consultancy,
is an attempt to operationalise those lines, with varying success.

For a PM the core idea is simple: build in small pieces, show them to real people, learn, and
adjust. The lifecycle loop from lesson 1.2.1 is agile applied to a whole product. Scrum and
Kanban are ways to run that loop week to week.

## Scrum

Scrum organises work into fixed **sprints**, usually one or two weeks. The parts:

- **The backlog.** An ordered list of everything the team might do. The product owner, which
  in most companies is you, owns the order. Ordering it is the product decision; everything
  else is logistics.
- **Sprint planning.** The team picks what it can finish in the sprint, from the top of the
  backlog. Its purpose is a shared commitment, not a negotiation over how much you can make
  them take.
- **Daily standup.** Fifteen minutes, standing. Its purpose is for the team to coordinate with
  each other: what is blocked, who needs whom. It is not a status report to you, and if it
  has become one, the team will stop saying anything useful in it.
- **Sprint review.** Show what was built, to stakeholders, on real software. Its purpose is
  feedback early enough to act on.
- **Retrospective.** The team, alone, asks what to change about how it works. Its purpose is
  improvement. A retrospective whose action items never happen teaches the team that the
  retrospective is theatre. Lesson 5.4.2 covers running one.

Scrum works well when the work is uncertain enough that planning more than two weeks ahead is
fiction, and when the team is stable. It works badly when it is imposed on a team that is
really doing support or maintenance, where work arrives daily and cannot wait for the next
sprint.

## Kanban

Kanban has no sprints. Work flows continuously across a board, from "to do" through "doing"
to "done", and the one rule that matters is a **limit on work in progress**: the team may
only have so many things in "doing" at once. Finish before you start. When something is
blocked, the whole team swarms on unblocking it, because nobody is allowed to start a new
thing.

Kanban suits teams with a steady stream of varied work, such as platform teams, support
engineering, or any team where "what will you do next week?" is genuinely unknowable. It
measures flow (how long a thing takes from start to finish) rather than velocity (how much
fits in a sprint). Lesson 5.2.5 goes deeper on flow.

Many teams run a hybrid: sprints for planning cadence, WIP limits for daily discipline. That
is fine. The frameworks are tools, not religions.

## Brooks's law

In 1975 Fred Brooks, who had managed one of the largest software projects of its time, wrote
down what he had learned: adding people to a late software project makes it later. The
reasons are arithmetic. New people need training from the people who are already busy. A
team of n people has n(n-1)/2 communication paths, so doubling the team roughly quadruples
the coordination. And the work often cannot be divided: nine women cannot make a baby in a
month, as his most quoted line puts it.

What this means for you: when a project is late, the options are to cut scope, move the
date, or accept lower quality. "Get more engineers" is almost never one of them, and a PM who
proposes it signals that they do not understand the work. The chapter is in the assignment.
It is fifty years old and still correct.

## Where it goes wrong

Signs that a team has the ritual without the result:

- Standups over twenty minutes, or addressed to a manager.
- Sprints that always "carry over" half their work. The commitment is fiction.
- Velocity used as a performance target. It will go up, and nothing else will.
- Retrospectives with no actions, or actions nobody owns.
- A backlog of five hundred items that nobody has looked at below item forty. Delete the
  rest; if it matters, it will come back.
- A product owner who is not allowed to say no, so the backlog is a wish list from sales.

Fowler's "flaccid Scrum" and Dave Thomas's "Agile is dead" talk, both in the assignment, are
the two best-known versions of this complaint, from two people who were in the room in 2001.

## Your job inside the process

Whatever the framework, the PM's job is the same three things: keep the backlog honest and
ordered, answer the team's questions fast enough that nobody is blocked waiting on you, and
protect the sprint from the new idea that arrived on Tuesday. The last one is most of it. A
team that trusts its sprint will not be reshuffled works faster than one that braces for it.

## Assignment

<div class="assignment">

1. Read the [Agile Manifesto](https://agilemanifesto.org/) and its
   [twelve principles](https://agilemanifesto.org/principles.html), five minutes. Notice how
   little it says about process. Then read Martin Fowler's
   [Flaccid Scrum](https://martinfowler.com/bliki/FlaccidScrum.html), five minutes, on what
   happens when the process is adopted without the engineering practices that make it work.
2. Watch Dave Thomas's talk [Agile is Dead](https://www.youtube.com/watch?v=a-BOSpxYJ9M),
   forty minutes, from one of the manifesto's authors. It is a polemic, and the point is that
   the word has been sold back to us as a product. Note his four-step alternative.
3. Read chapter 2 of
   [The Mythical Man-Month](https://en.wikipedia.org/wiki/The_Mythical_Man-Month), "The
   Mythical Man-Month" itself, about twenty pages, if you can find a copy. If not, the
   Wikipedia article on [Brooks's law](https://en.wikipedia.org/wiki/Brooks%27s_law), ten
   minutes, carries the argument. Either way, be able to explain the communication-paths
   arithmetic from memory.
4. Read Atlassian's guides to [Scrum](https://www.atlassian.com/agile/scrum) and
   [Kanban](https://www.atlassian.com/agile/kanban), fifteen minutes each, for the vocabulary
   and the diagrams. They are vendor pages, so ignore the tool pitch.
5. Sit in on, or recall in detail, one standup and one retrospective. For each, write a
   sentence on what it was supposed to produce and whether it did. If you have no team yet,
   watch [Intro to Scrum in Under 10 Minutes](https://www.youtube.com/watch?v=XU0llRltyFM)
   and answer for the team in the video.

</div>

## Additional resources

- Henrik Kniberg's
  [Agile Product Ownership in a Nutshell](https://www.youtube.com/watch?v=502ILHjX9EE),
  fifteen minutes, if you did not watch it in Course 1. It is the best animated account of the
  product owner's job inside Scrum.
- Kniberg's [Kanban and Scrum: making the most of both](https://www.infoq.com/minibooks/kanban-scrum-minibook/),
  a free short book that compares the two frameworks fairly.
- The official [Scrum Guide](https://scrumguides.org/scrum-guide.html), fifteen pages. Read it
  once so you know what the framework actually says, as opposed to what your company does.
