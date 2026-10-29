---
title: "5.1.1 Requirements"
description: "What a product requirements document is for, what belongs in it, why long ones fail, and how to write one a team will actually read."
---

## Introduction

Everything in Courses 3 and 4 ends in a decision about what to build. This lesson is about
the document that carries that decision to the people who will build it. It goes by several
names: product requirements document, PRD, spec, one-pager, pitch. The name matters less
than the job, which is to make sure that the engineers, designers and stakeholders who were
not in your head share the same picture of what is being built, for whom, and how you will
know it worked.

PRDs have a bad reputation, and some of it is earned. The forty-page document nobody read,
the spec that was out of date before the first sprint ended, the requirement that turned out
to be a solution in disguise. This lesson is about the version that works: short, specific
about outcomes, honest about what is not known, and alive while the thing is being built.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- What a requirements document is for, and the three audiences it serves.
- The sections that earn their place and the ones that do not.
- Success metrics and non-goals, the two sections most often missing.
- Why long documents fail and what to do instead.
- How the document changes once building starts.

## What the document is for

A requirements document answers five questions in a form that can be handed to someone who
was not in the conversation:

1. What problem are we solving, and for whom?
2. Why now, and why this rather than the other things we could do?
3. What does the solution need to do? Not how it is built, but what it must achieve.
4. How will we know it worked?
5. What are we deliberately not doing?

It serves three audiences at once. Engineers need enough to estimate, design and build
without guessing. Designers need the problem and the constraints, not a picture of the
screen. Stakeholders need to see that their concern was heard and to know what they will get
and when. A document that satisfies one audience by exhausting the other two has failed.

What it is not: a contract, a to-do list, a place to hide, or a substitute for talking to
the team. If you find yourself writing a requirement so that you can point to it later when
something goes wrong, stop. That is a sign the conversation has broken down, and no document
fixes that.

## The sections that matter

Templates vary. The sections below are the ones that survive contact with real teams. If a
template you inherit lacks one, add it. If it has ten others, ask what each is for.

**Problem and user.** One paragraph. Who has the problem, how you know, what it costs them.
Link to the research from Course 3 rather than restating it.

**Goal and success metrics.** What changes if this works, in numbers you can measure before
and after. "Reduce support tickets about failed transfers by half within a quarter" is a
goal. "Improve the transfer experience" is a wish.

**Non-goals.** What you are explicitly not doing, and why. This section prevents more
arguments than any other. A stakeholder who sees their request listed as a non-goal with a
reason knows it was considered. One who does not see it at all assumes it was forgotten.

**Requirements.** What the solution must do, as a numbered list, each one testable. Written
as outcomes where possible: "a user can recover a failed transfer without contacting
support" rather than "add a retry button". The second is a solution and may be wrong.

**Open questions.** The things you do not know yet, with a name next to each and a date.
A requirements document with no open questions is either finished or dishonest.

**Rollout and risks.** How it ships, to whom first, what could go wrong, and what you would
do about it. Course 5.4 goes deeper.

What you can usually drop: a long background section (link instead), detailed UI
specifications (that is design's document), technical approach (that is engineering's), and
anything written to impress rather than inform.

## Success metrics and non-goals

These two sections are missing from most first PRDs, and their absence causes most of the
trouble later.

A success metric forces you to say what "worked" means before you build, when you are
still honest. Pick one primary metric and at most two secondary ones. Say what the number is
now, what you expect it to be, and when you will check. If you cannot measure it, say how
you will know instead: a usability test, a sales-call count, a support-ticket tag. Course 6
is about choosing these well; for now, having one at all puts you ahead.

A non-goal is a decision made visible. Every feature is surrounded by adjacent things people
will ask for. Listing the ones you considered and set aside, with a line of reasoning each,
turns a dozen future conversations into a dozen nods.

## Why long documents fail

Length is the most common failure, and it is usually a symptom of fear. The author is not
sure the idea will survive scrutiny, so they bury it in detail. Or they are not sure what
the team needs, so they include everything. Either way, nobody reads it, the engineers ask
the questions anyway, and the document becomes a thing to be kept up to date rather than a
thing that helps.

The fix is the one-page discipline. The first page must stand alone: problem, goal,
metrics, non-goals, the five most important requirements, open questions. Everything else
goes below a line or in an appendix, where people can find it when they need it. If you
cannot get the essentials onto one page, you do not yet understand the problem well enough
to ask a team to build it.

Several strong product companies have published their own versions of this discipline. The
assignment links two: Intercom's one-page "Intermission" style and Basecamp's pitch. They
differ in detail and agree on the principle.

## A living document

The document is written before building starts and is wrong by the end of the first week.
That is normal. What matters is what you do about it.

- Keep it where the team works, not in a folder nobody opens. If decisions happen in chat,
  the document should link to them.
- Update the open questions as they close. Each closed question is a decision; record it.
- When a requirement changes, change the document and say so in the team channel. A
  document that quietly drifts from reality teaches people to stop trusting it.
- At launch, read it once more and write a short note on what turned out differently. That
  note is the beginning of the retrospective, and it is the honest record you will want in
  three months.

Lesson 5.1.2 breaks requirements down into the stories engineers actually work from.
Lesson 5.1.3 covers the sketches that go with them. The project at the end of this section
has you write the whole thing for a feature of your own product.

## Assignment

<div class="assignment">

1. Read Marty Cagan's [Product Specs](https://www.svpg.com/product-specs/), ten minutes.
   The argument that a spec is a record of discovery, not a replacement for it, and what
   that implies for what goes in one.
2. Read Joel Spolsky's
   [Painless Functional Specifications, part one](https://www.joelonsoftware.com/2000/10/02/painless-functional-specifications-part-1-why-bother/)
   and [part two](https://www.joelonsoftware.com/2000/10/03/painless-functional-specifications-part-2-whats-a-spec/),
   twenty-five minutes together. Written in 2000 and still the funniest and clearest case
   for writing things down, including the point that the act of writing finds the problems.
3. Read Intercom's [How we build software](https://www.intercom.com/blog/how-we-build-software/),
   fifteen minutes, for a one-page format from a company that ships fast, and Basecamp's
   [Write the pitch](https://basecamp.com/shapeup/1.5-chapter-06) chapter from Shape Up,
   fifteen minutes, for a format that fixes the appetite before the solution. Notice what
   both leave out.
4. Open the [product plan template](https://github.com/rianvdm/pm-resources/blob/main/templates/product-plan.md)
   in Rian van der Merwe's resources repository, five minutes. It is a sound default. Decide
   which sections you would keep for a small feature and which you would cut.
5. Take the top item from your Now/Next/Later roadmap in project 4.2.5 and write its
   problem, goal, one success metric and three non-goals on half a page. Keep it; the
   project in lesson 5.1.4 grows it into a full document.

</div>

## Additional resources

- Atlassian's [Product requirements documents, downsized](https://www.atlassian.com/agile/product-management/requirements)
  is a sensible short guide with a template, written for teams using their tools but
  useful anywhere.
- ProductPlan's [glossary entry on PRDs](https://www.productplan.com/glossary/product-requirements-document/)
  is a quick reference when you need to explain to a stakeholder what the document is and
  is not.
