---
title: "5.4.3 Pre-mortems and postmortems"
description: "Imagining the failure before it happens, and writing up the one that did, without blame and in a way people will read."
---

## Introduction

Two documents bracket every serious launch. Before it, the pre-mortem: the team imagines
the launch has failed and writes down why. After it, if something went wrong, the
postmortem: the team writes down what actually happened, why, and what changes. One is
cheap insurance. The other is how an organisation learns instead of just suffering.

Both are easy to do badly. A pre-mortem becomes a list of generic risks nobody acts on. A
postmortem becomes a hunt for the person who pushed the button. This lesson is about the
versions that work: specific, blameless, and short enough to be read.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- The pre-mortem: why imagining failure finds risks that risk lists miss.
- Running a pre-mortem in thirty minutes.
- Blameless postmortems: the principle and why it is not softness.
- The structure of a postmortem that gets read and acted on.
- Where the PM fits in both.

## The pre-mortem

Gary Klein's idea, published in Harvard Business Review in 2007, is simple. Ask a team
"what could go wrong?" and you get a polite, generic list. Tell the same team "it is six
months from now, the launch was a disaster, write down why" and you get specific, candid,
sometimes uncomfortable answers. Prospective hindsight, the research behind it, works
because imagining an event as already having happened makes people far better at
explaining it.

The output is a ranked list of the most likely failure modes, each with a mitigation or a
conscious decision to accept the risk. The value is not the list. It is that the quiet
engineer who knew the migration plan was fragile now has a legitimate moment to say so,
and that the PM hears it three weeks before launch instead of three days after.

## Running one

Thirty minutes, a week or two before a tier 1 or tier 2 launch, with the whole team:

1. **Frame it, two minutes.** "It is [date after launch]. The launch has failed badly.
   Write down, in silence, the single most likely reason."
2. **Write, five minutes.** One reason per person, on a note. Silence, for the same reason
   as in a retrospective.
3. **Read out, ten minutes.** Go round the room. Everyone reads one. Go round again until
   the notes are exhausted. No discussion yet.
4. **Rank, five minutes.** Dot-vote on likelihood. Take the top five.
5. **Decide, eight minutes.** For each, one of three outcomes: a mitigation with an owner,
   a monitoring signal that will tell you early, or an explicit "we accept this". Write it
   in the launch checklist from lesson 5.4.1.

The PM's job is to make sure the uncomfortable notes get read out in full, and to resist
defending the plan in the room. If three people independently wrote "the PM will add scope
in the last week", that is data.

## Blameless postmortems

A postmortem is the written account of an incident or a failed launch: what happened, in
order, with times; what the impact was; what caused it; what the team will change. The
word "blameless" is doing specific work. It means the document explains the failure in
terms of systems, processes and information, not in terms of who was careless.

This is not kindness. It is accuracy. The person who shipped the bad config did so because
the config had no validation, the deploy had no canary, the alert was muted, and they were
on their fourth incident that week. Fire them and all four conditions remain for the next
person. Google's site reliability engineering organisation, which runs some of the largest
systems in existence, treats blamelessness as an engineering requirement for exactly this
reason: people who fear blame hide information, and hidden information causes the next
incident.

John Allspaw's work on this adds a test: if your postmortem's root cause is a person, keep
asking how. Not "why did they do it" but "how did it make sense to them at the time". The
answer is always a condition you can change.

## A postmortem people will read

Long postmortems are not read, and unread postmortems change nothing. A structure that
holds for most launch failures:

- **Summary, three sentences.** What broke, for whom, for how long. Written for an
  executive who will read nothing else.
- **Impact.** Users affected, revenue or trust cost if known, support volume.
- **Timeline.** Timestamped, factual, from the first contributing change to resolution.
  This is the part people argue about, so write it first and get it agreed.
- **Contributing causes.** Plural, deliberately. There is never one.
- **What went well.** Detection that worked, a rollback that was fast. This is not padding;
  it tells you what to protect.
- **Actions.** Each with an owner and a date, tracked like any other work. Three to five.
  Twenty actions is a sign of a postmortem that will be ignored.

Share it widely, inside the company, by default. The teams that will have the same
incident next quarter are the ones who did not read it.

## Launch postmortems

Most of the literature is about outages. The same structure applies to a launch that
shipped fine and did nothing: usage was flat, the metric did not move, the feature was
quietly retired. That is a product failure, not an engineering one, and it deserves the same
honest account. The contributing causes will be in discovery, definition and launch
planning rather than in code, and the actions will be about how the team decides what to
build. Those postmortems are rarer and more valuable than outage ones, because teams would
rather not write them.

Lesson 2.1.2 covered applying this discipline to your own decisions. The team version is
the same move at a larger scale.

## Assignment

<div class="assignment">

1. Read Gary Klein's
   [Performing a Project Premortem](https://hbr.org/2007/09/performing-a-project-premortem),
   five minutes. The original, short, and the source of everything above on the technique.
2. Read the [Postmortem Culture](https://sre.google/sre-book/postmortem-culture/) chapter
   of Google's SRE book, twenty minutes, for the fullest argument for blamelessness and an
   example of a real postmortem's structure.
3. Read PagerDuty's [Blameless Postmortems](https://postmortems.pagerduty.com/culture/blameless/)
   guide, ten minutes. Shorter and more practical than Google's, including the language to
   use and avoid in the document.
4. Pick a public product failure you know of, a feature that was launched and withdrawn, or
   an outage with a published postmortem (the GitHub collection in Additional resources has
   hundreds). Write a one-page blameless postmortem in the structure above, from the public
   information. Where the public account blames a person, rewrite that cause as a condition.

</div>

## Additional resources

- Dan Luu's [collection of postmortems](https://github.com/danluu/post-mortems) on
  GitHub: hundreds of real, published incident reports from well-known companies. Read
  three and notice how the good ones are structured.
- John Allspaw's [The Infinite Hows](https://www.oreilly.com/radar/the-infinite-hows/),
  for the argument against "five whys" when the answer keeps landing on a person.
- Wikipedia's [Pre-mortem](https://en.wikipedia.org/wiki/Pre-mortem) entry, for the
  research background on prospective hindsight.
