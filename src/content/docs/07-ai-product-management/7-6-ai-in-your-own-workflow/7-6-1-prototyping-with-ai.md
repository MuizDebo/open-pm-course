---
title: "7.6.1 Prototyping with AI"
description: "AI coding tools let a PM build the demo. What they are good for, what they are not, how to brief one, and how to keep a prototype honest."
---

## Introduction

For most of the history of the role, a product manager who wanted to show what a feature
would feel like had two options: draw it, or wait for an engineer. Both still work. But a
third option now exists, and it changes the job more than any other tool in this course. An
AI coding tool, given a clear brief, can produce a clickable prototype in an afternoon. A PM
who can do that walks into discovery sessions, stakeholder reviews and engineering
conversations with something people can touch.

This lesson is about using that power well. Prototypes built by AI are fast, cheap and
convincing, and convincing is the problem. A demo that looks finished invites people to
believe it is. Your job is to build quickly and then be precise about what is real.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- The kinds of tool available and what each is for.
- What a prototype is for, and what it is not.
- How to brief an AI tool so the first attempt is close.
- Keeping a prototype honest: labelling what is faked.
- When to stop prototyping and hand over.

## The tool landscape

The tools change monthly, so learn the categories rather than the brands. Four are worth
knowing:

**Chat assistants.** General-purpose models you talk to in a browser. Good for sketching
the shape of a flow, drafting copy, generating sample data and writing a single page of
HTML you can open locally. Claude and [ChatGPT](https://chatgpt.com/) are the common ones.

**Generative UI builders.** Tools that turn a description into a working web interface
with real components. [v0](https://v0.dev/), [Bolt](https://bolt.new/) and Lovable sit here,
as does [Figma Make](https://www.figma.com/make/) for teams already in Figma. They are the
fastest route from a sentence to a screen you can click.

**AI-assisted editors.** Code editors with a model built in, such as [Cursor](https://cursor.com/).
More control, more setup, and the right choice once a prototype needs to persist state,
call an API or grow past a few screens.

**Hosted environments.** [Replit](https://replit.com/) and similar run the whole thing in
the browser, including a database and a public URL, which is useful when you want to share
a link rather than a file.

A reasonable path for a PM: start in a chat assistant to think, move to a generative UI
builder to see it, and step up to an editor only when the demo needs to be real.

## What a prototype is for

Marty Cagan's framing is still the clearest: prototypes exist to test risk cheaply before
you build. A prototype is good at answering four questions.

- **Value.** Does the user want this? Put a fake version in front of five people and watch.
- **Usability.** Can they work out how to use it? The flow is the thing being tested.
- **Feasibility.** Can it be built? Here an AI prototype is weakest, because it hides the
  hard parts, more on that below.
- **Viability.** Does it work for the business? A prototype can carry the pricing screen
  and the terms, and you can watch where people hesitate.

A prototype is not a specification, not an estimate, and not a promise. It is an
argument made visible. Engineers will build something different and better. Say so in the
first sentence when you show it.

## Briefing the tool

The quality of what you get back is set almost entirely by the brief. The same discipline
that makes a good PRD makes a good prompt. A brief that works has five parts:

1. **Who it is for and what they are doing.** One sentence. "A market trader in Lagos
   recording a sale on a low-end Android phone in direct sunlight."
2. **The single flow to build.** Not the product, one path through it. "Record a cash sale
   in three taps, see the day's total."
3. **Constraints.** Mobile-first, large touch targets, works offline, no sign-up step.
4. **What to fake.** "Use hard-coded sample data. Do not connect to anything."
5. **What good looks like.** A reference, a sketch pasted in, or the PRD's success
   criteria.

Then iterate in small steps. Change one thing per message. When the tool goes wrong, which
it will, describe what you see and what you expected, exactly as you would to a junior
engineer. Resist the urge to accept the first version because it looks good; the first
version always looks good.

## Keeping it honest

AI prototypes lie by default, not maliciously, but because the model fills every gap with
something plausible. The recommendation engine "works" because it returns the same three
items every time. The fraud check "passes" because there is no check. The search "finds"
because the data set has ten rows.

So label everything. Keep a short file in the prototype, or a panel on screen, that lists:

- What is real (the flow, the copy, the layout).
- What is faked (the data, the model responses, the latency, the error cases).
- What has not been considered (accessibility, slow networks, what happens at 10,000 users).

Show that list before the demo, not after. Stakeholders who have seen a convincing demo
and then learn it was fake feel tricked, and a PM who tricks stakeholders once does not
get believed twice. Course 2 covered why trust is the only authority you have.

For AI features specifically, the gap between prototype and product is wider than for
anything else you will build. A prototype can show what the model should say. It cannot
show how often it will say something wrong, which is the question that decides whether the
feature ships. That is why section 7.4 on evals comes before this one.

## When to stop

A prototype has done its job when it has answered the question it was built to answer.
Then stop. The temptation to keep improving a demo that already proved its point is strong
and wastes exactly the time it saved. Hand the learning to the team, not the code. Most
AI-generated code should be thrown away, and saying that out loud keeps engineers on your
side.

## Assignment

<div class="assignment">

1. Watch Andrej Karpathy's
   [Software Is Changing (Again)](https://www.youtube.com/watch?v=LCEmiRjPEtQ), forty
   minutes. It is a talk for builders, but the middle section on tools that let
   non-engineers make working software is the clearest account of why this lesson exists.
2. Read Marty Cagan's [Prototypes](https://www.svpg.com/prototypes/), ten minutes, for
   the four kinds of prototype and the risk each one retires. Decide which kind your 7.3.6
   feature needs first.
3. Read Lenny Rachitsky's
   [guide to AI prototyping for product teams](https://www.lennysnewsletter.com/p/a-guide-to-ai-prototyping-for-product),
   twenty minutes, for a working PM's comparison of the tools and the mistakes people make
   in their first week.
4. Pick one generative UI builder from the list above and spend one hour building a single
   screen from a product you use daily. Do not plan; just try. Note what surprised you,
   what it got wrong, and how you fixed it. You will reuse this hour in project 7.6.4.

</div>

## Additional resources

- Reforge on [AI prototyping](https://www.reforge.com/blog/ai-prototyping), for how larger
  product teams are folding prototypes into discovery.
- Marty Cagan's [The Four Big Risks](https://www.svpg.com/the-four-big-risks/), the
  framework behind the "what a prototype is for" section.
