---
title: "5.3.2 Design disciplines and critique"
description: "Who does what on a design team, and how to give feedback that makes the design better instead of making the designer defensive."
---

## Introduction

"Design" at a software company is at least five different jobs, done by people with
different training who care about different things. A PM who treats them as one person
called "the designer" will brief the wrong one, review the wrong thing and wonder why the
feedback did not land.

This lesson maps the disciplines, then spends most of its time on the one skill that
matters most: critique. Critique is how design gets better, and it is the part of working
with design that PMs most often get wrong, usually by confusing it with approval.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- The five design disciplines and what each one needs from you.
- Design systems and why they change what a PM should ask for.
- The difference between critique and approval.
- How to give feedback a designer can use.
- How to run a design review that does not become a vote.

## The disciplines

**Research.** User researchers find out what people do and why. They run the interviews
and tests from Course 3 at a scale and rigour most PMs cannot. What they need from you: the
decision the research will inform, stated before the research starts. Research without a
decision attached produces reports nobody reads.

**UX, or interaction design.** The flow, the structure, the sequence of screens, what
happens when you tap. This is where the six lenses from the last lesson mostly apply. What
they need from you: the problem, the constraints and the edge cases, early.

**UI, or visual design.** Layout, type, colour, spacing, motion. The craft that makes a
good flow feel good. What they need from you: to be left alone on the details, and to be
told the brand and accessibility constraints up front.

**Content design.** The words. Labels, errors, onboarding copy, empty states. Underrated,
and often the difference between a flow that works and one that confuses. What they need
from you: the tone, the facts, and a clear statement of what the user must understand at
each step.

**Design systems.** The shared library of components and patterns the whole product uses.
A team with a good system ships consistent interfaces fast. What they need from you: to
ask "is there already a pattern for this?" before asking for something new.

At a small company one person does all five. At a large one each is a team. Either way,
knowing which hat someone is wearing tells you what feedback is useful.

## What a design system changes

Once a product has a design system, most screens are assembled from existing parts rather
than drawn from scratch. That changes your job in two ways. First, "can we add a new
component" is a bigger request than it sounds: it has to work everywhere, in every state,
forever. Ask whether an existing pattern will do. Second, consistency becomes a feature you
should defend. A screen that is slightly better in isolation and inconsistent with the rest
of the product is usually worse.

## Critique versus approval

Approval is a gate: yes or no, ship or do not. Critique is a conversation about whether the
design achieves its goal and how it could achieve it better. Teams that only do approval
get designs that are optimised to pass the gate. Teams that do critique get designs that
improve.

The PM's role in critique is specific. You are the person in the room who holds the goal.
Your questions should connect the design back to it: does this get the user to the outcome
we set? Where does it make them work harder than they need to? What happens in the cases we
listed in the brief? You are not there to redesign it, and you are not there to decide
whether you like it.

## Feedback a designer can use

The pattern that works, from Lara Hogan's feedback equation and from every good design
review you will sit in:

1. **Observation, not judgement.** "The primary action is below the fold on a phone" rather
   than "the layout is wrong".
2. **Impact on the goal.** "Which means the half of our users on phones will not see it, and
   the goal is activation."
3. **A question, not an instruction.** "What would it take to bring it up?" rather than
   "move it up". The designer may have a better answer than the one you would have given.

Three more habits:

- **Lead with what works.** Not as flattery. The designer needs to know what to keep.
- **Separate must from could.** "This blocks launch" and "this might be nicer" sound the
  same in a review unless you say which is which.
- **One round of feedback, written.** Verbal feedback in a meeting gets remembered
  differently by everyone. Write it down afterwards, grouped by must and could.

## Running a review

A design review goes wrong when it becomes a vote, with everyone in the room offering a
preference and the designer trying to satisfy all of them. Prevent that:

- **Restate the goal first.** One sentence: who this is for, what it must achieve. Every
  comment gets measured against it.
- **The designer presents the problem before the solution.** It reminds the room what the
  design is for and surfaces disagreements about the problem, which are cheaper to settle
  than disagreements about pixels.
- **Questions before opinions.** Let people ask what they do not understand before anyone
  says what they would change.
- **The designer decides.** The review informs the design. It does not design by committee.
  You can veto on grounds of the goal or a hard constraint. You cannot veto on taste.
- **End with next steps and a date.** Otherwise the review was a conversation.

## Assignment

<div class="assignment">

1. Read the Nielsen Norman Group's guide to
   [design critiques](https://www.nngroup.com/articles/design-critiques/), fifteen minutes.
   The structure of a good critique session and the difference between critique and
   feedback, from the people who have run thousands of them.
2. Read Lara Hogan's [feedback equation](https://larahogan.me/blog/feedback-equation/),
   five minutes. Observation, impact, question. It works on designs, on documents and on
   people. You met it in Course 2; now apply it to a screen.
3. Read the UK government's one-page definition of
   [content design](https://www.gov.uk/guidance/content-design/what-is-content-design),
   five minutes. The discipline PMs most often forget exists, and the one that most often
   fixes a flow that research says is confusing.
4. Take any screen from a product you use and write a critique of it using the three-part
   pattern: three observations, each with its impact on what the screen is for and a
   question. No instructions. Post it in Discussions and critique two others. Notice how
   much harder the question is to write than the instruction.

</div>

## Additional resources

- The Nielsen Norman Group on [design systems](https://www.nngroup.com/articles/design-systems-101/),
  for what one is and why a PM should care before asking for a new component.
- Their [definition of user experience](https://www.nngroup.com/articles/definition-user-experience/),
  short and useful for the next time someone uses "UX" to mean "the screens".
