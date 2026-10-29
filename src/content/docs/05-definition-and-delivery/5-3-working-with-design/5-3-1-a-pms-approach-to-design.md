---
title: "5.3.1 A PM's approach to design"
description: "You do not design the product. You set the problem, judge the answer, and know what good looks like. Six lenses for doing that well."
---

## Introduction

Product managers do not design products, and the ones who try usually make the designer's
job harder and the product worse. But a PM who cannot tell good design from bad, or who
cannot explain why one option serves the goal and another does not, is not much use in a
design review either. The job sits between those two failures: set the problem clearly, give
the designer room to solve it, and judge the result against what the product is for.

This lesson gives you a way to do the judging. It is built on six lenses, a handful of
principles that have survived fifty years of argument, and one rule about where your opinion
belongs.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- What a PM is and is not responsible for in design.
- Six lenses for judging a design: completeness, focus, simplicity, scalability,
  flexibility, speed.
- The handful of design principles worth knowing by heart.
- Where your opinion belongs in a design review, and where it does not.
- How to brief a designer so that the first draft is close.

## What you own and what you do not

You own the problem. Who the user is, what they are trying to do, what the product must
achieve, what success looks like, what is out of scope, and what constraints are real. The
designer owns the solution: the flow, the layout, the words on the buttons, the way the
thing feels in the hand.

Where this goes wrong is almost always a PM who arrives with a solution dressed as a
problem. "We need a modal on the dashboard that asks for their phone number" is a solution.
"Twenty percent of new users never get a notification because we have no channel to reach
them" is a problem, and it leaves the designer free to find that the answer is not a modal
at all.

The other failure is the PM who abdicates: hands over a vague brief, waits, and then
reacts to whatever comes back with "I don't like it". That PM is not judging the design
against the goal. They are judging it against their taste, which is a different and much
less useful thing.

## Six lenses

When a design is in front of you, run it through these in order. Each is a question you can
ask out loud without insulting anyone.

**Completeness.** Does it handle the whole job? Not just the happy path. The empty state
before there is any data, the error when the network drops, the user who has twelve items
instead of two, the account that has been suspended. A design that only shows the ideal
case is a sketch, not a design.

**Focus.** Does the screen know what it is for? There is one thing the user came to do.
Everything else on the screen either helps with that or competes with it. Count the things
asking for attention. If it is more than two or three, something has to go.

**Simplicity.** Is there anything here the user has to learn? Every new pattern, label or
gesture is a cost the user pays before they get any value. Simple does not mean sparse. It
means that the obvious thing to do is the right thing to do.

**Scalability.** Does it still work when it is ten times bigger? Ten times the data, ten
times the users, ten times the options. Lists become searchable, settings become grouped,
and designs that were fine with five of something fall apart at fifty.

**Flexibility.** Can it absorb the next three things on the roadmap without a redesign?
You know what is coming; the designer may not. If the next quarter adds a second account
type, say so now.

**Speed.** How fast does it feel, and how fast is it to build? Perceived speed is a design
property: what shows first, what is deferred, what the user sees while waiting. Build speed
is a trade-off you own: a design that takes three sprints has to be worth three sprints.

A design does not have to be perfect on all six. It has to be deliberate about which ones it
is trading away, and you should be able to say which.

## Principles worth knowing by heart

You do not need a design education. You need a handful of ideas that let you talk to people
who have one.

- **Dieter Rams' ten principles.** Written for industrial design in the 1970s and still the
  cleanest statement of what good means: useful, honest, unobtrusive, long-lasting, as
  little design as possible. Linked in the assignment.
- **Don Norman's affordances and feedback.** Things should look like what they do, and the
  system should tell you what just happened. Most confusing interfaces break one of these.
- **Jakob Nielsen's usability heuristics.** Ten rules, the vocabulary every designer uses in
  critique: visibility of system status, match between system and the real world, user
  control, consistency, error prevention, recognition over recall.
- **The laws of UX.** Fitts, Hick, Miller, Jakob's law. Short, named, and useful for
  explaining why a decision is right without saying "I just prefer it".

Learn these and you will stop saying "it feels off" and start saying "the status is not
visible after the user submits", which a designer can act on.

## Where your opinion belongs

In the problem, the goal, the constraints and the trade-offs. Not in the colour of the
button.

A useful test before you say anything in a review: is this comment about whether the design
achieves the goal, or about whether I would have done it differently? The first kind is
your job. The second kind is noise, unless the designer asked for it. You will have
preferences. Hold most of them.

The exception is when you know something the designer does not: a customer who will hate
this, a legal constraint, a sales promise, the thing engineering said was impossible last
week. Say it early, as information, not as a verdict.

## Briefing a designer

A good brief makes the first draft close and saves everyone a round. It fits on a page:

1. **The user and the job.** Who, and what they are trying to do, in their words.
2. **The problem.** What is wrong today, with evidence from Course 3's research.
3. **The outcome.** What changes if this works, in a metric from your goals sheet.
4. **Constraints.** Platform, timeline, must-haves, cannot-dos.
5. **Not in scope.** The adjacent things you are deliberately leaving alone.
6. **Open questions.** What you do not know and hope the design process will answer.

Nothing in it is a screen. If you cannot stop yourself sketching, label it "one idea, feel
free to ignore" and mean it.

## Assignment

<div class="assignment">

1. Read Dieter Rams' [ten principles for good design](https://www.vitsoe.com/gb/about/good-design),
   five minutes. Pick a product you use daily and score it honestly against each one. That
   exercise is most of what "design sense" is.
2. Read Jakob Nielsen's [10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/),
   fifteen minutes. These are the words you will hear in every critique for the rest of your
   career. Learn the names.
3. Watch Don Norman's talk
   [3 ways good design makes you happy](https://www.ted.com/talks/don_norman_3_ways_good_design_makes_you_happy),
   thirteen minutes. The clearest short argument that how a thing feels is part of whether
   it works, not decoration on top.
4. Write a one-page design brief for one feature of your product from the strategy pack in
   project 4.2.5, using the six headings above. No sketches. Keep it; project 5.1.4 builds
   on it.

</div>

## Additional resources

- [Laws of UX](https://lawsofux.com/). One page per law, with the research behind it. Good
  for turning "I prefer this" into "Hick's law says this".
- Marty Cagan on [product design](https://www.svpg.com/product-design/) and why the designer
  is a first-class member of the product team, not a service the PM orders from.
- The Wikipedia summary of [The Design of Everyday Things](https://en.wikipedia.org/wiki/The_Design_of_Everyday_Things)
  if you want to know whether the book is for you before buying it. It is.
