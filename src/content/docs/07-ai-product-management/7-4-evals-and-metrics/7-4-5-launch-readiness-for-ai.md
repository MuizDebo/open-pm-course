---
title: "7.4.5 Launch readiness for AI"
description: "Red teaming, release criteria with thresholds, staged rollout with monitoring, and a rollback plan: what has to be true before an AI feature meets users."
---

## Introduction

Lesson 5.4.1 gave you a launch plan: tiers, a checklist, enablement, release notes. An AI
feature needs all of that and one more thing. With a deterministic feature, the question
before launch is whether it works. With an AI feature, the question is whether it works
well enough, on what, how you will know when it stops, and what you will do about it. Those
four questions are launch readiness, and this lesson gives you a way to answer each.

The point is not to delay launches. It is to make the launch decision a decision, with
numbers and a plan, rather than a feeling that the demo went well.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- Red teaming: trying to break the feature before users do.
- Release criteria: the thresholds an eval run must clear, and who sets them.
- Staged rollout: exposing the feature to a few users first, and what to watch.
- Rollback: the plan you write before you need it.
- Where regulation enters, in one paragraph.

## Red teaming

Red teaming is organised adversarial testing. Before launch, people whose job for the
afternoon is to make the feature misbehave sit down and try. They attempt prompt injection
from lesson 7.3.3, ask for things the feature must refuse, feed it inputs designed to
produce falsehoods, try to extract the system prompt or other users' data, and push every
boundary the PRD drew.

Run it as a session, two or three hours, with a mix of people: an engineer, someone from
support who knows how customers actually phrase things, someone who does not like the
feature, and you. Keep a shared document; every successful attack goes in with the exact
input. The output of the session is three lists: attacks that must be fixed before launch,
attacks that need a monitoring rule, and attacks you have decided to accept, with the
reason written down.

Every item on the first two lists goes into the golden set from lesson 7.4.4 as a permanent
test. Red teaming is not a one-off. Repeat it when the feature changes materially, and read
the public catalogue of attack types in the assignment so your team is not rediscovering
known ones.

## Release criteria

Release criteria are the thresholds an eval run must clear for the feature to ship. They
turn the scores from lessons 7.4.2 and 7.4.3 into a decision. A useful set has three
levels:

- **Blocking.** Below this, the feature does not ship, no discussion. Hallucination rate on
  the golden set above a limit. Any failure in the "must refuse" subset. Any successful
  prompt injection from the red-team list. Latency at the ninety-fifth percentile above a
  limit.
- **Target.** What good looks like. Task completion on the golden set above a figure. Judge
  pass rate above a figure. Cost per task below a figure.
- **Watch.** Metrics with no threshold yet, logged and reviewed, so that you can set one
  after launch.

Set the numbers by looking at the current eval run, the baseline the feature replaces, and
the cost of being wrong for this feature. A support assistant for billing questions needs
a far lower hallucination tolerance than a draft-a-tweet feature. Write the criteria into
the PRD before the eval runs, not after, or they will drift toward whatever the number
happens to be.

The PM owns the criteria. Engineering owns hitting them. Leadership can argue for different
thresholds, in writing, before launch. Nobody argues on launch day.

## Staged rollout

AI features ship to a slice of users first. One percent, then ten, then everyone, with a
pause at each stage long enough to see the metrics from 7.4.3 settle. The feature flags
from lesson 5.4.1 are how; the discipline is in what you watch at each stage and what makes
you stop.

At each stage, before widening:

- Fallback rate is flat or falling relative to the previous stage.
- The human sample from 7.4.2 has been read and nothing new and serious appeared.
- Latency and cost per task are within the release criteria at real traffic.
- Support contacts mentioning the feature are at or below what you planned for.

Pick the first slice deliberately. Internal users first, then a segment that is tolerant and
vocal, then the general population. Do not start with your most valuable customers.

## Rollback

Write the rollback plan before launch, because on the day you need it you will not have
time to think. It answers four questions:

1. **What triggers it?** Specific numbers: fallback rate above a figure for an hour, any
   confirmed data leak, hallucination rate on the daily sample above a figure, a severity
   one incident attributed to the feature.
2. **Who decides?** One named person, with a named backup, who can turn the feature off
   without a meeting.
3. **What happens to users mid-task?** The feature disappears, or degrades to the
   non-AI version, or shows a message. Decide now.
4. **What do we tell people?** A short internal note and a template for the external one,
   written in advance.

Then test it. Flip the flag off in staging and watch what users would see. A rollback plan
that has never been run is a hope.

After any rollback, a blameless postmortem from lesson 5.4.3, with the failing inputs added
to the golden set.

## Regulation, briefly

Depending on where your users are and what the feature does, there are rules about what AI
products may do and must disclose: the EU's AI Act and data-protection law, Nigeria's data
protection act, sector rules in finance and health, and a growing list elsewhere. Lesson
7.5.2 covers them. For launch readiness, two things: your release criteria should include
whatever disclosures and consent your lawyers require, and your red team should include the
cases the rules care about most, which are usually around personal data and automated
decisions about people.

## The readiness review

Put it together as a one-page review, held a week before launch, with engineering, support
and whoever owns risk in your company:

- Eval run against the current golden set, with every blocking criterion marked pass.
- Red-team session held, lists attached, fixes verified.
- Rollout stages and the watch list for each.
- Rollback plan, tested.
- Metrics instrumented and visible on the dashboard.
- Enablement and release notes from the Course 5 launch pack.

If any line is not true, the launch date moves. That is the whole point of writing it down.

## Assignment

<div class="assignment">

1. Read the [OWASP Top 10 for Large Language Model Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/),
   thirty minutes. The standard catalogue of the ways AI features get attacked, with
   examples. Use it as the checklist for your red-team session; at least half the entries
   apply to any feature that takes user input.
2. Read the Google SRE chapter on [postmortem culture](https://sre.google/sre-book/postmortem-culture/)
   again, ten minutes, this time with rollback in mind. The question to carry into the
   rollback plan is what the postmortem would need to have been recorded.
3. Read Anthropic's note on [many-shot jailbreaking](https://www.anthropic.com/research/many-shot-jailbreaking),
   ten minutes, as one concrete example of an attack class that only appears at long
   context lengths, which a red team working with short inputs would never find.
4. Write the launch readiness review for your feature from 7.2.4: release criteria at all
   three levels with actual numbers, a rollout plan with three stages and a watch list for
   each, and a rollback plan answering the four questions. Then schedule a one-hour
   red-team session with at least two other people and run it. Add every successful attack
   to the golden set you started in 7.4.4.

</div>

## Additional resources

- The [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework),
  the most widely referenced general framework for thinking about AI risk before launch.
  Dense; read the overview and the "govern, map, measure, manage" structure.
- Martin Fowler's [Feature Toggles](https://martinfowler.com/articles/feature-toggles.html),
  from Course 5, for the mechanics of staged rollout and instant rollback.
- The Wikipedia entry on [red teams](https://en.wikipedia.org/wiki/Red_team), for the
  origin of the practice and why the adversarial framing matters.
