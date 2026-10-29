---
title: "2.1.2 Accountability versus blame"
description: "Blameless postmortems, the just-culture idea behind them, and how to run one on your own decisions."
---

## Introduction

Something shipped and it was wrong. A feature nobody used, a launch that broke checkout, a
pricing change that lost customers. There are now two things the team can do. It can find
out who caused it, or it can find out what caused it. These feel similar and are opposites.
The first produces a name and a quieter team. The second produces an understanding and a
better product.

Software operations teams worked this out years ago, under the name "blameless
postmortems", because they had a problem product teams share: the people closest to a
failure know the most about it and will stop talking if talking gets them punished. This
lesson takes that practice and turns it inward. The person you most need to run a blameless
postmortem on is yourself.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- Why blame destroys the information you need.
- What a blameless postmortem is and the just-culture idea it rests on.
- The difference between a blameless process and a consequence-free one.
- How to run the same process on your own decisions.
- Hindsight bias and the attribution error, the two mental habits that make this hard.

## What blame does to information

Picture a team that has just lost a week because a release went out with a broken payment
flow. The engineer who merged it knows exactly what happened: the test was flaky, it had
been flaky for a month, everyone had got used to re-running it, and on this day the flake
was hiding a real failure. That is the information the team needs. It points at a test
suite problem, a habit problem and a review problem, all fixable.

Now picture the first question in the review being "who merged it?" The engineer's
incentive flips. The flaky-test history becomes something to mention carefully, or not at
all. The next person who sees a flaky test and re-runs it says nothing. The organisation
has traded a fixable system problem for a quiet one, and it will pay again.

Blame does not reduce failures. It reduces reports of failures. Those are different things,
and only one of them is useful.

## Blameless postmortems and just culture

A blameless postmortem is a written review of a failure that starts from the assumption
that the people involved acted reasonably given what they knew, what they saw and the
pressures they were under. The question is never "who was careless?" It is "what made the
careless-looking action seem sensible at the time, and what would have to change for a
sensible person to act differently next time?"

The idea comes from safety-critical industries, where the sociologist Sidney Dekker called
it a "just culture": an environment where people are not punished for honest mistakes made
in good faith, so that they keep reporting them, while reckless behaviour is still dealt
with. John Allspaw brought it into software in a widely read 2012 essay written at Etsy,
and Google's site reliability engineers made it standard practice. The assignment has the
Google version, which is the most practical account of how to run one.

The format is simple. What happened, in a timeline. What the impact was. What the
contributing causes were, as many as there are. What is going to change, with owners and
dates. What went well, because something always did. And what was learned. The point of
writing it down is that the lesson outlives the people in the room.

## Blameless is not consequence-free

The common objection is that blameless means nobody is ever responsible. It does not. It
means responsibility is about what you do next, not about what you are called. The engineer
who merged the broken release is responsible for fixing the test suite problem they
identified. The PM whose launch lost customers is responsible for the rollback, the
customer communication and the next decision.

What a just culture removes is the ritual of punishment that makes everyone less honest. It
does not remove the expectation that you learn, act and improve. If anything it raises it,
because there is nowhere to hide behind "it was so-and-so's fault".

## Turning it on yourself

Here is where it gets personal. You made a decision. It went badly. The blame instinct
points outward first: the data was wrong, engineering was slow, the market moved. Each of
those may be true. Then, if you are conscientious, the instinct swings inward: I should
have known, I was careless, I am not good at this. That feels like accountability. It is
blame with the arrow reversed, and it is just as useless, because self-blame also stops the
analysis. "I was stupid" explains nothing and fixes nothing.

Run the postmortem instead. For your own decision:

1. **Timeline.** What did you know, and when? What did you not know that you could have
   found out? What did you believe that turned out false?
2. **Pressures.** What were you optimising for at the time? Speed, a stakeholder, your
   own fatigue, a date someone else had promised?
3. **Contributing causes.** List all of them, including the ones that are yours and the
   ones that are not. The ones that are not still go on the list; you are writing a
   true account, not a confession.
4. **Changes.** What would make a reasonable version of you decide differently next time?
   A checklist, a question you now ask, a source you now check, a person you now
   involve earlier.
5. **What went well.** Honestly. It keeps the exercise from becoming self-flagellation.

The project at the end of this section, a decision journal, is this process made routine.

## Two habits that make it hard

**Hindsight bias.** Once you know the outcome, the signals that pointed to it look obvious
and the ones that pointed elsewhere disappear. "I should have seen it coming" is almost
always hindsight talking. The fix is to write down what you knew at the time, before the
outcome, which is why the decision journal matters.

**The fundamental attribution error.** When someone else fails, we explain it by their
character: careless, lazy, political. When we fail, we explain it by circumstances: tired,
rushed, misinformed. A blameless process forces the circumstantial explanation onto
everyone, including you, and the character explanation off everyone, including you. Both
halves are necessary.

## Assignment

<div class="assignment">

1. Read the [Postmortem Culture](https://sre.google/sre-book/postmortem-culture/) chapter
   of Google's Site Reliability Engineering book, twenty minutes. It is written for
   engineers running production systems and every paragraph transfers. Read it for the
   structure of a postmortem document and for the section on blameless culture.
2. Read the Wikipedia entry on [Just culture](https://en.wikipedia.org/wiki/Just_culture),
   ten minutes, for where the idea came from and the line it draws between honest error
   and recklessness. That line is the answer to "doesn't blameless mean anything goes?"
3. Take the bad result you wrote down in lesson 2.1.1 and write a one-page blameless
   postmortem on it, using the five steps above. If other people were involved, write their
   contributing causes in the same neutral voice as your own. Keep it; it becomes your first
   decision journal entry.
4. Read the Wikipedia entries on [Hindsight bias](https://en.wikipedia.org/wiki/Hindsight_bias)
   and the [Fundamental attribution error](https://en.wikipedia.org/wiki/Fundamental_attribution_error),
   five minutes each. Then reread your postmortem and mark any sentence where either one
   crept in. There will be at least one.

</div>

## Additional resources

- John Allspaw's [The Infinite Hows](https://www.oreilly.com/radar/the-infinite-hows/),
  twenty-five minutes. His argument for replacing "why did this happen?" with "how did this
  come to seem reasonable?", which is the question at the centre of this lesson. His
  original 2012 blameless postmortems essay on Etsy's engineering blog is the shorter
  version, if you can find it.
- Lesson 5.4.3 in this course covers pre-mortems and postmortems as team rituals. This
  lesson is the private version; that one is the public version, and they reinforce each
  other.
