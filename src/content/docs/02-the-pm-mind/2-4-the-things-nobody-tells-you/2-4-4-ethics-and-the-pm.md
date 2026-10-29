---
title: "2.4.4 Ethics and the PM"
description: "Dark patterns, privacy, accessibility and the question underneath all of them: who are you optimising for?"
---

## Introduction

Nobody sets out to build a product that tricks people. It happens one reasonable decision
at a time: the cancel button that is a little harder to find because churn is a metric, the
pre-ticked box because conversion is a metric, the notification that fires at 9pm because
daily active users is a metric. Each one is defensible in the meeting where it is decided.
Together they are the reason users do not trust software.

The product manager is the person in the room who decides what gets optimised. That makes
ethics a core part of the job rather than a compliance step at the end. This lesson gives
you the vocabulary for the common failures, the minimum you need to know about the law, and
the one question that keeps you honest when the metric is pushing the other way.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- Dark patterns: what they are, the common types, and why they are usually a metrics
  problem.
- Privacy: what data regulation actually requires of a product team, in outline.
- Accessibility as an ethical baseline, not a feature.
- The question to ask when a metric and a user's interest diverge.
- What to do when you are asked to build something you think is wrong.

## Dark patterns

The term describes interface choices that are designed to make people do things they did
not mean to do: subscribe, share data, stay, spend. The catalogue has been maintained for
over a decade and the types are depressingly stable. A few you will recognise:

- **Confirmshaming.** The decline option is worded to make you feel bad for choosing it.
- **Roach motel.** Easy to get in, hard to get out. The subscription that takes one click to
  start and a phone call to cancel.
- **Sneaking.** Items added to a basket, boxes pre-ticked, costs revealed at the last step.
- **Nagging.** The same request, again and again, until you give up and say yes.
- **Obstruction.** The privacy setting that exists but is buried four menus deep.

Here is the uncomfortable part: almost every dark pattern is the rational output of a team
optimising a single metric without a counterweight. Nobody added confirmshaming because
they are cruel. They added it because the A/B test showed a lift, and nothing in the
process asked what the lift cost the user. That is a product management failure, because
the PM owns the metric and the process.

The counterweight is simple to state and hard to hold: a guardrail metric for every target
metric. If you are optimising sign-ups, you also watch refunds, complaints and
cancellations in the first week. If you are optimising engagement, you also watch whether
people say the product makes their life better. Course 6 covers how to build these; this
lesson is about why.

## Privacy

Data protection law now covers most of the world's users in some form. You do not need to be
a lawyer. You need to know enough to recognise when a decision has a legal dimension and to
ask for help before, not after, launch. The European regulation is the one most others are
modelled on, and its principles are a good checklist even where it does not apply:

- **Purpose.** Collect data for a stated reason and use it for that reason.
- **Minimisation.** Collect what you need, not what you might want later.
- **Consent that means something.** Freely given, specific, as easy to withdraw as to give.
  A pre-ticked box is not consent. Neither is a cookie banner with no real decline option.
- **Access and deletion.** People can ask what you hold about them and ask you to delete it,
  and you have to be able to do both.
- **Security.** Reasonable protection, and a duty to tell people when it fails.

Many countries have their own version. Nigeria's data protection act, for example, follows
the same shape. If you are building for a market, find out which regime applies and read
the summary, not the statute. The assignment has starting points.

The product reality: every feature that touches personal data is a privacy decision. The
analytics event, the "find your friends" import, the personalised recommendation, the model
trained on user content. The PM is usually the first person to specify these and the last
to think about the data side. Reverse that order.

## Accessibility

Around one in six people live with some form of disability, and far more have temporary or
situational impairments: a broken arm, a bright screen, a noisy train. A product that cannot
be used with a screen reader, a keyboard, or at 200 percent zoom excludes them, and in a
growing number of jurisdictions that exclusion is illegal.

Accessibility is often filed under design or engineering. It belongs with the PM because it
is a scoping decision. If it is in the definition of done from the start, it costs little.
If it is retrofitted, it costs a lot and usually gets cut. Lesson 5.3.3 covers the practice.
Here, the point is the principle: a product that only works for the people who are easiest
to serve is not finished.

## The question

Strip away the catalogue and the law and ethics in product comes down to one question,
asked at the moment a decision is being made:

**Would the user make this choice if they understood exactly what we understand?**

If the honest answer is no, you are not persuading them, you are using them. The metric
might go up. The trust that the whole product depends on goes down, and trust is the one
asset that does not show on a dashboard until it is gone.

A useful companion: who is not in the room? The user is never in the planning meeting. The
regulator is not. The person who will be harmed by the edge case is not. Part of the PM's
job is to speak for them, out loud, when the people who are in the room all benefit from the
same decision.

## When you are asked to build it anyway

You will be. Sometimes the person asking has not thought about it; say the question above
out loud and most will reconsider. Sometimes they have and they want it anyway. Then:

1. **Put the concern in writing**, plainly, with the specific harm and the specific user.
   Not to cover yourself, though it does, but because writing it makes it real for the
   reader in a way a comment in a meeting does not.
2. **Offer the honest version.** Most dark patterns have an honest cousin that gets most of
   the result. A clear cancel flow with a genuine "are you sure" converts better than people
   expect.
3. **Know your line.** Decide in advance what you will not ship, so that you are not
   deciding under pressure. For most PMs the line is somewhere around deceiving users or
   exposing their data. Know where yours is.
4. **If it crosses the line, do not build it.** This may cost you the job. It is the part of
   accountability that lesson 2.1.1 did not spell out: you are accountable to the user as
   well as the company, and occasionally they conflict.

## Assignment

<div class="assignment">

1. Browse the [types of deceptive pattern](https://www.deceptive.design/types) on Harry
   Brignull's deceptive.design, twenty minutes. The canonical catalogue, with real examples.
   Then spend ten minutes in an app you use daily and find two of them. Note which metric
   each one is probably serving.
2. Read the plain-English overview [What is GDPR?](https://gdpr.eu/what-is-gdpr/), fifteen
   minutes. You are reading for the principles and the rights, not the article numbers. If
   you build for another jurisdiction, also find that regulator's own summary page; Nigeria's
   is at the [Nigeria Data Protection Commission](https://ndpc.gov.ng/).
3. Read the W3C's
   [Introduction to Web Accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/),
   fifteen minutes. The baseline every product team should know, from the people who write
   the standard.
4. Watch Tristan Harris's TED talk
   [How a handful of tech companies control billions of minds every day](https://www.ted.com/talks/tristan_harris_how_a_handful_of_tech_companies_control_billions_of_minds_every_day),
   seventeen minutes. A former design ethicist on what optimising for attention does, told
   from inside. Disagree with parts of it if you like; the question he asks is the one in
   this lesson.
5. In your decision journal, write your line: the one or two things you will not ship,
   whoever asks. One paragraph. You will be glad it exists before you need it.

</div>

## Additional resources

- The Wikipedia article on [Dark pattern](https://en.wikipedia.org/wiki/Dark_pattern), for
  the history of the term and the growing list of laws and regulator actions against them.
- The [Ethical OS Toolkit](https://ethicalos.org/), a set of risk-zone checklists for
  product teams. Useful as a pre-mortem prompt before a launch, which lesson 5.4.3 covers.
