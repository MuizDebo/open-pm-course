---
title: "5.4.1 Launch planning and go-to-market"
description: "Launch tiers, checklists, staged rollouts, release notes and enablement: how a finished feature becomes a shipped one that people find and use."
---

## Introduction

A feature is not shipped when the code is merged. It is shipped when the people it was
built for know it exists, can find it, understand it, and the people who support and sell
it can answer questions about it. The gap between "merged" and "shipped" is where a
surprising amount of product work quietly fails: the feature goes live on a Tuesday, nobody
tells anyone, the usage graph stays flat, and six months later someone asks whether it was
worth building.

Launch planning is the work of closing that gap on purpose. It is not a marketing job
handed over at the end, though product marketing does own a large piece of it. It is the
PM's job to decide how big the launch should be, what has to be true before it happens,
how risk gets contained, and what everyone else needs from you to do their part.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- Launch tiers: deciding how much launch a change deserves.
- The launch checklist and who owns each line.
- Staged rollouts and feature flags as risk control.
- Release notes that people actually read.
- Enablement: what sales, support and success need before the day.
- What product marketing owns, and what stays with you.

## Launch tiers

Not every change is a launch. A bug fix, a copy tweak and a new pricing plan should not get
the same treatment, and treating them the same is how teams either exhaust themselves or
under-announce the things that matter. Most product organisations settle on three tiers,
whatever they call them:

**Tier 3, quiet.** Small improvements, fixes, internal changes. Ships behind a flag or
straight to production, appears in the changelog, no announcement. Most of what a team
ships is tier 3, and that is fine.

**Tier 2, announced.** A feature a meaningful set of users will care about. In-product
announcement, release notes, a support article, a heads-up to sales and success a week
ahead. Perhaps an email to the segment it affects.

**Tier 1, campaign.** A change that shifts what the product is or who it is for. Coordinated
marketing, press if relevant, sales training, a launch date everyone works back from,
leadership visibility. A handful a year, at most.

The PM's first launch decision is which tier. Decide it when the work is planned, not when
it is done, because the tier determines how much lead time everyone else needs. Under-tier
and the feature lands unnoticed; over-tier and you spend a quarter's marketing budget on a
settings toggle.

## The launch checklist

A launch checklist is a shared document, one row per thing that has to be true before the
feature goes live, with an owner and a status. It is dull and it is the single most
effective launch tool there is, because launches fail on forgotten details, not on strategy.

A tier 2 checklist typically covers:

- **Product.** Feature complete, tested, accessibility checked, analytics events firing,
  feature flag in place, rollback plan agreed.
- **Documentation.** Help article drafted and reviewed, in-product tooltips written,
  release notes drafted.
- **Enablement.** Sales and success briefed, support team trained, FAQ written, known
  limitations listed honestly.
- **Communication.** Announcement copy approved, email segment defined, in-app message
  scheduled, social posts queued if any.
- **Measurement.** Success metric defined before launch, dashboard ready, a date set to
  review it.
- **Legal and compliance.** Terms, privacy and regional rules checked where they apply.

The PM owns the checklist and chases it. You do not own every row. You own knowing the
status of every row and raising the alarm when one slips.

## Staged rollouts and feature flags

The safest way to launch anything is to launch it to almost nobody first. A feature flag is
a switch in the code that turns a feature on for some users and off for others, without
redeploying. It lets you:

- Ship code to production dark, then turn it on when the launch materials are ready.
- Roll out to one percent, then ten, then fifty, watching errors and metrics at each step.
- Turn it off in seconds if something breaks, instead of rolling back a deploy.
- Run an A/B test on the feature before committing to it, which Course 6 covers.

For a PM, the practical consequence is that "launch day" becomes a decision about who sees
the feature, not a day when code moves. Agree the rollout stages and the signals that gate
each one with engineering before the launch, so that when the error rate ticks up at ten
percent, the conversation is "we agreed we would pause here" rather than an argument.

Flags accumulate. Part of shipping is agreeing when the flag comes out, otherwise the
codebase fills with dead switches. Put the removal on the backlog when you add the flag.

## Release notes people read

Release notes have two audiences and most teams write for neither. Users want to know what
changed for them and what to do about it. Internal teams want to know what to say when a
customer asks. Rules that hold:

- **Lead with the benefit, not the feature.** "You can now export reports to CSV from any
  dashboard" beats "Added CSV export".
- **Say who it applies to.** Plan, platform, region. Nothing annoys a user more than reading
  about a feature they cannot have.
- **Include the limits.** "Exports are capped at 10,000 rows for now" prevents a hundred
  support tickets.
- **Link to the help article.** The note is the headline; the article is the detail.
- **Keep a single changelog.** One page, reverse chronological, that support and sales
  can search. It is also the evidence of progress you will want in Course 8.

Write the release note before the feature is finished. If you cannot explain the benefit in
two sentences, that is information about the feature, not about your writing.

## Enablement

The people who talk to customers every day need to know about the feature before the
customers do. A week ahead for tier 2, a month for tier 1. What they need from you:

- **A short brief.** What it is, who it is for, why it matters, what it does not do.
- **A demo.** Two minutes, recorded, that they can replay.
- **The FAQ.** The ten questions you would ask if you were them, answered honestly,
  including "what if the customer wants X" where X is the thing you cut.
- **A named contact.** You, for the first two weeks, and a channel where questions go.

Skip this and the feature launches twice: once to users, and again a week later when
support finally finds out what the tickets are about.

## What product marketing owns

In companies that have product marketing managers, the division is roughly: the PM owns
what the feature is, why it was built, who it is for, when it is ready and how it is rolled
out; product marketing owns positioning, messaging, the campaign, the sales deck and the
market-facing story. The handover point is a document, often called a launch brief or
positioning brief, that the PM writes and product marketing builds on.

In companies without product marketing, which is most startups, the PM owns all of it.
Either way, learn to write the brief. It is the same skill as the narrative from Course 4,
aimed at a launch instead of a strategy.

## Assignment

<div class="assignment">

1. Read Martin Fowler's
   [Feature Toggles](https://martinfowler.com/articles/feature-toggles.html), thirty
   minutes. It is written for engineers, which is the point: it shows you the categories of
   flag your team is choosing between and what each costs to maintain. Read it so your
   rollout conversations with engineering are specific.
2. Read Intercom's
   [How we build software](https://www.intercom.com/blog/how-we-build-software/), fifteen
   minutes, for a product team's own account of shipping in small, flagged steps rather
   than big launches.
3. Pick a tier 2 feature from a product you use that launched in the last year. Find its
   release note and help article. Rewrite the release note using the rules above, and list
   three questions a support agent would have been asked that the original did not answer.
4. Draft a launch checklist template for your own product from project 3.1.4: the rows,
   the owners you would need, and the gates for a staged rollout. You will use it in the
   section project.

</div>

## Additional resources

- Marty Cagan on [Product Management vs. Product Marketing](https://www.svpg.com/product-management-vs-product-marketing/),
  for the division of labour in more depth, including the common failure where the PM
  becomes the marketing department.
- The [LaunchDarkly blog](https://launchdarkly.com/blog/) has practical pieces on
  progressive delivery and flag hygiene, from a company that sells flags, so read it with
  that in mind.
