---
title: "5.1.2 User stories, epics and acceptance criteria"
description: "How requirements become the small, testable pieces of work an engineering team builds from, and where the story format helps and hurts."
---

## Introduction

A requirements document says what the feature must do. An engineering team cannot build
from that directly. They need the work broken into pieces small enough to estimate, build
and test in days, each one clear about when it is done. That breakdown is the user story,
grouped under epics, each with acceptance criteria.

The format is simple and widely used, which is why it is also widely abused. This lesson
teaches the form, what it is good at, where it goes wrong, and how it connects back to the
document you wrote in lesson 5.1.1. By the end you should be able to turn a page of
requirements into a backlog an engineer would thank you for.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- The three-part story form and what each part is for.
- INVEST: the test for a story that is ready to build.
- Acceptance criteria, including the given/when/then form.
- Epics, and how stories, epics and the requirements document fit together.
- The ways the story format fails and what to do about each.

## The story form

A user story is a short description of something a user wants to do, written from their
point of view, as a placeholder for a conversation. The common template has three parts:

As a *type of user*, I want *to do something*, so that *I get some benefit*.

Each part does a job. The user tells the team who this is for, which changes the design.
The action is the thing to build. The benefit is the reason, and it is the part people
leave out and the part that matters most, because it lets the engineer suggest a better way
to get the same benefit.

A story is not a specification. It is deliberately incomplete. The detail comes from the
conversation the story prompts and is captured in the acceptance criteria. If you are
writing stories so complete that no conversation is needed, you are writing a spec in a
costume, and the costume makes it harder to read.

## INVEST

Bill Wake's checklist for whether a story is ready:

- **Independent.** It can be built without waiting on another story. Dependencies make
  planning fragile.
- **Negotiable.** It describes an outcome, leaving room for how. A story that dictates the
  implementation is not negotiable.
- **Valuable.** A user or the business gets something from it on its own. "Build the
  database table" is not a story; "a user can save a draft" is.
- **Estimable.** The team can say roughly how big it is. If they cannot, something is
  unknown and needs a spike or a conversation first.
- **Small.** Days, not weeks. Big stories hide risk.
- **Testable.** Someone can tell whether it is done. That is what acceptance criteria are.

Run every story through this before it goes into planning. Most failures are on
Independent and Small. The fix is to split: by user type, by step in the flow, by happy path
versus edge case, by data variation. Mike Cohn's site, linked in the assignment, has the
best catalogue of splitting patterns.

## Acceptance criteria

Acceptance criteria are the conditions under which the story is done. They are the
testable part, the part a tester and an engineer agree on before any code is written. Three
to six per story is typical. More means the story is too big.

Write them as observable outcomes, not implementation. "The confirmation email arrives
within one minute" is a criterion. "Use the queue service for emails" is not.

The given/when/then form, borrowed from behaviour-driven development, is useful when the
logic is conditional:

- Given a user has a failed transfer in the last 24 hours,
- when they open the transfers screen,
- then they see the failed transfer at the top with a retry option.

It reads like a test because it is one. Engineers can turn it into automated checks, and
testers can run it by hand. Not every criterion needs this form; use it when the condition
matters.

## Epics and the document

An epic is a story too big to build in one go, kept as a container for the stories it
splits into. "Let users recover failed transfers" is an epic. "A user can see which
transfers failed", "a user can retry a failed transfer", "a user is told why a transfer
failed" are its stories.

The relationship to the requirements document from lesson 5.1.1 is direct. Each
requirement in the document usually becomes one epic, or one large story. Each epic splits
into stories. Each story carries acceptance criteria. The document holds the why and the
success metrics; the backlog holds the what, in buildable pieces; and the acceptance
criteria hold the done. When something changes, it changes in the document first and flows
down, so that the backlog never contradicts the reasoning.

Story mapping, which Jeff Patton developed and the assignment links, is the best way to see
this whole structure at once: user activities across the top, stories beneath each in
priority order, a line drawn across to mark the first release. It turns a flat backlog into
a picture a stakeholder can read.

## Where the format fails

**The fake user.** "As a user, I want a settings page so that I can change settings." No
real person, no real benefit. If you cannot name the user type and the reason, you do not
know why you are building it.

**The solution in disguise.** "As a user, I want a red button in the top right so that I
can retry." The story has decided the design. Say the outcome and let design decide the
button.

**Stories without a conversation.** The format assumes the team talks about each story.
Teams that treat stories as tickets to be executed silently get the worst of both worlds:
too little detail for a spec and no discussion to fill the gap.

**Everything is a story.** Technical debt, research spikes, bug fixes and infrastructure
work get forced into "as a developer, I want" phrasing that helps nobody. Call them what they
are. A backlog can hold tasks that are not stories.

**Criteria as afterthought.** Writing acceptance criteria after the engineer has started
guarantees a mismatch. They are part of the story being ready, not part of it being done.

If the format is fighting you, drop it. Some teams write stories as plain sentences with
criteria underneath and do fine. The three-part template is a tool for thinking about user,
action and benefit. Once you think that way by habit, the template has done its job.

## Assignment

<div class="assignment">

1. Read Mike Cohn's [User Stories](https://www.mountaingoatsoftware.com/agile/user-stories)
   overview, ten minutes, and his piece on
   [why the three-part template works](https://www.mountaingoatsoftware.com/blog/why-the-three-part-user-story-template-works-so-well),
   ten minutes. Cohn popularised the format and is clearest on what each part is for.
2. Read the Wikipedia entry on [INVEST](https://en.wikipedia.org/wiki/INVEST_%28mnemonic%29),
   five minutes, then Atlassian's guides to
   [user stories](https://www.atlassian.com/agile/project-management/user-stories) and
   [epics](https://www.atlassian.com/agile/project-management/epics), fifteen minutes
   together, for how the pieces nest in practice.
3. Read the [Gherkin reference](https://cucumber.io/docs/gherkin/reference/), fifteen
   minutes, for the given/when/then form. You will not write automated tests, but you will
   write criteria an engineer can turn into them, and knowing the grammar helps.
4. Watch Henrik Kniberg's
   [Agile Product Ownership in a Nutshell](https://www.youtube.com/watch?v=502ILHjX9EE)
   again, fifteen minutes. You watched it in Course 1 for the role; this time watch for how
   stories move through the backlog and what the product owner does at each step.
5. Take the half-page you wrote at the end of lesson 5.1.1. Turn its requirements into one
   epic and five to eight stories, each with three acceptance criteria. Run each story
   through INVEST and note which letter it failed on first. Keep it for project 5.1.4.

</div>

## Additional resources

- Jeff Patton's [story mapping](https://www.jpattonassociates.com/story-mapping/) page.
  The technique that turns a backlog into a map, and the one most worth learning beyond the
  basics. NN/g has a shorter
  [introduction](https://www.nngroup.com/articles/user-story-mapping/).
- The Agile Alliance glossary entries on
  [user stories](https://www.agilealliance.org/glossary/user-stories/) and
  [acceptance testing](https://www.agilealliance.org/glossary/acceptance/) for the
  definitions, when someone on the team asks.
