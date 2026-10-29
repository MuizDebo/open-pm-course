---
title: "5.2.5 Breaking down work"
description: "Slicing features into pieces that ship, keeping work flowing, and the one Kanban rule that matters most."
---

## Introduction

The single most useful thing a product manager can learn from engineering is how to cut work
small. A feature that takes six weeks as one piece can usually be cut into six pieces that
each ship in a week, and the difference is not cosmetic: you learn after week one instead of
week six, you can stop after week three if the learning says so, and nothing sits half-built
when priorities change. Most of the predictability that teams attribute to estimation comes
from slicing.

This lesson is about how to slice, what to slice into, and the flow discipline that keeps
sliced work moving rather than piling up in "in progress".

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- Epics, stories and tasks, and who writes which.
- Vertical slices versus horizontal layers.
- Patterns for splitting a story that is too big.
- Flow, work in progress, and why limiting it speeds things up.
- What a good board looks like and what yours is telling you.

## Epics, stories, tasks

The vocabulary varies by tool, but three levels are universal:

- An **epic** is a feature or outcome big enough to take several sprints: "customers can pay
  by bank transfer." You write these, from the PRD.
- A **story** is a piece of an epic that delivers something a user can do, small enough to
  finish in days: "a customer can see bank transfer as a payment option at checkout." You
  write these with the team.
- A **task** is a piece of engineering work inside a story: "add the transfer option to the
  payment-methods API." Engineers write these. You do not need to see them.

A story is done when a user could use it, even if the user is you on staging behind a flag.
That test, "could someone use this?", is what separates a story from a task, and it is the
test that most badly sliced backlogs fail.

## Vertical, not horizontal

The instinct when cutting a feature is to cut by layer: first the database, then the API,
then the screen. Each piece is a clean engineering unit, and none of them does anything a
user can see until all three are done. If the project is cut short after two, you have
nothing.

Cut vertically instead. The first slice is the thinnest possible path through every layer:
one payment method, one currency, no error handling, hard-coded where it must be. It is ugly
and it works end to end. The second slice adds the next most valuable thing. Henrik Kniberg's
skateboard-to-car drawing, in the assignment, is the standard illustration: do not deliver a
wheel, then an axle; deliver a skateboard, then a scooter.

Vertical slices are harder to plan because they cut across the team's specialisms, and they
are worth it for exactly that reason: they force the integration problems to the front, where
they are cheap.

## Splitting a story that is too big

When a story will not fit in a sprint, there is nearly always a seam. The common ones:

- **By workflow step.** Browse, add to basket, pay, confirm. Ship browse first.
- **By business rule.** Standard shipping first; express, international and free-over-a-
  threshold as later stories.
- **By data variation.** One file format, one language, one currency.
- **By happy path and errors.** The success case first. Each failure mode its own story.
- **By interface.** The plain version first, the polished one after.
- **By who.** Staff only, then beta users, then everyone, which a feature flag makes free.
- **Spike first.** If nobody knows how long it will take, spend a fixed day finding out, and
  size the rest after.

The two guides in the assignment are the fullest catalogues of these patterns. Learn five by
heart. In planning, when an engineer says a story is too big, you should be able to propose
the split.

## Flow and work in progress

Picture a board with twenty items in "in progress" and two in "done". Everyone is busy; nothing
is finishing. The team is starting things faster than it finishes them, and each started item
costs attention, coordination and merge conflicts until it is done. This is why Kanban's one
hard rule is a limit on work in progress: at most, say, three items per two engineers. When
the limit is hit, nobody starts anything. They help finish.

The counterintuitive result is that doing fewer things at once gets more things done. Lead
time, the time from start to finished, falls; and lead time is the number a user feels. A
team that finishes one story every two days is more valuable than one that finishes five
every two weeks, even though the throughput is the same, because the first team can change
direction every two days.

For you as PM, the WIP limit is also a discipline on yourself. The urge to "just start" the
new idea is the main cause of overloaded boards. Put it at the top of the backlog. It will be
started when something finishes.

## Reading the board

A board is a diagnostic. Things to look for:

- **A pile in one column.** Everything is stuck at review, or at testing. That column is the
  bottleneck; the fix is capacity there, not more work upstream.
- **Old items.** Anything in progress for more than a week is blocked or too big. Ask which.
- **Items with no owner.** Nobody is working on them. Move them back.
- **Done items nobody has shipped.** Work finished but not deployed or not flagged on. See
  lesson 5.2.1's five meanings of done.

Walk the board in standup, right to left, starting from the items closest to done. The
question for each is "what does this need to finish?" That is a different meeting from
"what did you do yesterday?", and a far more useful one.

## Assignment

<div class="assignment">

1. Read Henrik Kniberg's [Making sense of MVP](https://blog.crisp.se/2016/01/25/henrikkniberg/making-sense-of-mvp),
   fifteen minutes. The skateboard drawing is the one picture in this lesson to remember, and
   the post explains why the wheel-first approach feels responsible and is not.
2. Read Humanizing Work's
   [guide to splitting user stories](https://www.humanizingwork.com/the-humanizing-work-guide-to-splitting-user-stories/),
   twenty minutes, and Mike Cohn's
   [five simple but powerful ways to split user stories](https://www.mountaingoatsoftware.com/blog/five-simple-but-powerful-ways-to-split-user-stories),
   five minutes. Between them they cover every seam in the list above with examples.
3. Read Atlassian's page on [WIP limits](https://www.atlassian.com/agile/kanban/wip-limits),
   ten minutes, for how teams set them and what happens when they are hit.
4. Take one of the three features from lesson 5.2.1 and write it as an epic with at least six
   vertically sliced stories, each passing the "could someone use this?" test. Order them so
   that the first three alone would be worth shipping. This is the first half of project
   5.2.6.

</div>

## Additional resources

- The Wikipedia article on [Kanban in software development](https://en.wikipedia.org/wiki/Kanban_%28development%29),
  ten minutes, for the history and the Toyota origin.
- [Vertical slice](https://en.wikipedia.org/wiki/Vertical_slice), two minutes, for the term's
  origin in game development, where it means a playable sliver of the whole game.
- Atlassian's [Jira basics](https://www.atlassian.com/software/jira/guides/getting-started/basics)
  if your team uses it and you have never set up a board yourself. You should, at least once.
