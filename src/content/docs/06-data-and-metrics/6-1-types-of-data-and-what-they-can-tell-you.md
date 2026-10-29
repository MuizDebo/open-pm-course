---
title: "6.1 Types of data and what they can tell you"
description: "Quantitative and qualitative, behavioural and attitudinal, events and surveys: what each kind of data can answer, what it cannot, and the PM's job in making sure it exists."
---

## Introduction

Every product decision rests on some kind of data, even when the data is one angry email
and a feeling. The difference between a PM who is good with data and one who is not is
rarely maths. It is knowing which kind of data answers which kind of question, and noticing
when the data you have is being asked a question it cannot answer.

This lesson gives you the map. Two axes, four quadrants, and a short section on the part
of the job most PMs discover too late: if nobody defined the events, there is no data, and
the person who should have defined them was you.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- The two axes: quantitative versus qualitative, behavioural versus attitudinal.
- What each quadrant can and cannot tell you.
- Event data: what it is, how it is collected, and why the PM defines it.
- Surveys and ratings, and the gap between what people say and do.
- Three questions to ask of any number before you act on it.

## Two axes, four quadrants

Data about a product sorts along two lines.

**Quantitative or qualitative.** Quantitative data is counts and measures: how many, how
often, how long, how much. Qualitative data is words and observations: what someone said,
what they did while you watched, why they think they did it. Quantitative tells you what is
happening and at what scale. Qualitative tells you why, and what it feels like.

**Behavioural or attitudinal.** Behavioural data records what people actually did: clicked,
paid, came back, gave up. Attitudinal data records what they say: satisfaction scores,
survey answers, interview opinions. People are honest and still wrong about their own
behaviour, so the two often disagree. When they do, behaviour usually wins.

Put the axes together and you get four kinds of evidence:

| | Behavioural | Attitudinal |
|---|---|---|
| **Quantitative** | Product analytics, logs, funnels, retention curves | Surveys, NPS, ratings, feature votes |
| **Qualitative** | Usability tests, session recordings, support tickets, field observation | User interviews, open survey answers, reviews |

Course 3 covered the bottom row. This course is mostly about the top left, with a lesson on
the top right's limits.

## What each quadrant is good for

**Quantitative behavioural** answers "what is happening". It is the only quadrant that
scales to every user and the only one that can tell you whether a change moved a number.
It cannot tell you why, and it is silent about anything you did not instrument.

**Quantitative attitudinal** answers "how do people feel, roughly, at scale". Useful for
tracking a mood over time and comparing segments. Weak as a predictor of behaviour: a
feature that scores well in a survey is routinely ignored once shipped.

**Qualitative behavioural** answers "where exactly does it go wrong". Five usability tests
will show you the confusing screen that your funnel only hinted at.

**Qualitative attitudinal** answers "why", in the user's own words. It is where product
ideas come from. It cannot tell you how many people share the view.

The practical rule: use the top left to find where, the bottom row to find why, and the top
left again to check whether the fix worked.

## Event data and instrumentation

Most product analytics is built from **events**: a record that a user did a thing at a time,
with some properties attached. `order_placed` with `amount`, `payment_method` and `device`.
`onboarding_step_completed` with `step` and `time_since_signup`. Everything you will see in
a dashboard, a funnel or a retention curve is a query over events like these.

Three things follow:

1. **If it was not instrumented, it did not happen.** A feature with no events is invisible
   to every chart. You will find out whether people used it only when someone asks and
   nobody can answer.
2. **Names and properties are decisions.** `signup_completed` fired on the last screen and
   `signup_completed` fired when the account is actually created are different events with
   the same name, and the difference will show up as a mystery in a funnel six months later.
3. **The PM owns the tracking plan.** Engineers implement events; analysts query them.
   Deciding which events exist, what they are called and what they carry is product work,
   because it encodes what you think matters. A tracking plan is a spreadsheet: event name,
   when it fires, properties, who asked for it, why. Every PRD from here on should include
   the events the feature needs.

Also know what event data misses. It records interactions with your product and nothing
else: not the spreadsheet the user keeps on the side, not the phone call they made instead,
not the reason they closed the app. The absence of an event is not evidence of absence.

## Surveys, ratings and the say-do gap

Attitudinal numbers are cheap to collect and easy to over-read. Three cautions:

- **Who answered.** The people who respond to a survey are the ones who care enough to
  respond, which is not your user base. Response rates under ten percent are normal and
  make every result a sample of the engaged.
- **What was asked.** "How likely are you to recommend" measures something, but it is not
  retention and it is not revenue. Treat scores as a signal to investigate, not as an
  outcome.
- **The say-do gap.** Asked in advance, people overstate what they will use and what they
  will pay. Asked afterwards, they rationalise. Use attitudinal data to generate hypotheses
  and behavioural data to test them.

## Three questions for any number

Before you act on a metric, a chart or a figure in a deck, ask:

1. **What event or question produced this?** A conversion rate is a ratio of two counts.
   Which two, and are they what you think?
2. **Who is in the denominator?** All users, active users, users who reached the screen?
   The same numerator over three denominators gives three stories.
3. **What changed in how it was measured?** A new event definition, a tracking bug, a
   release that fires the event twice. Most dramatic chart movements are measurement
   changes, not behaviour changes. Rule that out first.

These three questions will save you from most of the data mistakes in the rest of this
course.

## Assignment

<div class="assignment">

1. Read Christian Rohrer's
   [When to use which user-experience research methods](https://www.nngroup.com/articles/which-ux-research-methods/),
   fifteen minutes. The source of the two-axis map above, with twenty methods placed on it.
   Read it for where each method sits and why.
2. Watch Hans Rosling's [The best stats you've ever seen](https://www.ted.com/talks/hans_rosling_the_best_stats_you_ve_ever_seen),
   twenty minutes. Nothing about product analytics; everything about how a number read
   correctly changes what you believe, and how a chart can make a hard truth obvious.
3. Read Segment's [tracking plan guide](https://segment.com/docs/protocols/tracking-plan/create/),
   ten minutes, and skim Amplitude's
   [data planning playbook](https://amplitude.com/docs/data/data-planning-playbook) for its
   naming conventions. Vendor docs, so ignore the product pitch and take the structure.
4. Write a tracking plan for the feature you specified in project 5.1.4: at most ten events,
   each with when it fires and three properties. Add it to the PRD in your work repository.
   You will need it for project 6.7.

</div>

## Additional resources

- Segment's [Analytics Academy](https://segment.com/academy/intro/) is a free short course
  on the mechanics of product data, from events to warehouses, for people who are not
  engineers.
- The Wikipedia article on [qualitative research](https://en.wikipedia.org/wiki/Qualitative_research)
  is a sober overview of what qualitative methods are for and how they are judged, useful
  when someone dismisses interviews as "anecdotes".
