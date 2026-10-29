---
title: "7.6.3 A PM second brain"
description: "Keeping decisions, hypotheses, stakeholders and learnings in plain files, so you remember them and a model can read them."
---

## Introduction

A product manager accumulates knowledge faster than any one memory can hold: why a
decision was made, what a stakeholder cares about, which hypothesis died and why, what the
data said last quarter. Most of it lives in chat threads and meeting notes and is lost within
a month. The PM who can answer "why did we do that?" with a date and a reason is rare and
valued.

A second brain is the fix. The idea is older than AI, but models make it suddenly more
useful, because a folder of well-named plain-text files is exactly what a model can read,
search and reason over. This lesson shows a structure that works for product work, how to
keep it alive, and how to use it with a model without surrendering your judgement to one.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- Why plain files beat apps for a knowledge base you will keep for years.
- The five folders a PM's second brain needs.
- The decision journal from Course 2 as the heart of it.
- Habits that keep it current without becoming a chore.
- How to let a model read it, and what to keep out.

## Plain files, on purpose

You could keep all this in a notes app, a wiki or a project tool, and many PMs do. Plain
Markdown files in a folder have four advantages that matter more as years pass:

- **They survive tools.** Apps shut down, change pricing or lose your export. A folder of
  text files from 2016 still opens.
- **They are searchable and versionable.** Put the folder in a private Git repository and
  you have history and backup for free, using skills from lesson 0.2.
- **They are readable by anything.** Including a model. Point an assistant at the folder
  and it can answer "what did we decide about pricing in March?" from your own words.
- **They stay yours.** No vendor, no sync, no terms of service to reread.

[Obsidian](https://obsidian.md/) is a popular editor for folders like this, but any text
editor works. The [Markdown basics](https://www.markdownguide.org/basic-syntax/) you
learned in Course 0 are all the formatting you need.

## Five folders

A structure that has worked for working PMs, adapted from Pavel Huryn's open-source
[PM Brain](https://github.com/phuryn/pm-brain):

**decisions/** One file per significant decision: date, what was decided, the options
considered, the reasoning, who was involved, and a line you fill in later saying what
happened. This is the decision journal you started in project 2.1.5, kept going. It is the
single most valuable folder, because it turns hindsight into something you can learn from
rather than something that embarrasses you.

**hypotheses/** What you currently believe about users, the market and the product, each
with the evidence for and against, and a status: untested, supported, refuted. Course 3's
opportunity solution tree feeds this. Reviewing it monthly tells you what you have stopped
questioning.

**stakeholders/** One file per person you work with regularly: what they care about, what
they fear, how they like to be communicated with, what you have promised them. Not a dossier,
a memory aid. The stakeholder map from project 1.3.4 is the first entry.

**knowledge/** The durable facts about your product and domain: how the system works,
what the metrics mean and where they come from, regulatory constraints, the glossary.
Things you would otherwise rediscover every six months.

**learnings/** Short notes after launches, retrospectives, postmortems and interviews:
what surprised you. The letter from project 2.4.5 belongs here, and so does every "I wish I
had known" moment that follows it.

Five folders is deliberately few. Elaborate systems die; simple ones survive.

## Keeping it alive

The failure mode of every second brain is that it is built with enthusiasm and never
updated. Three habits prevent that, and none takes more than ten minutes:

1. **Write the decision before the meeting ends.** If a decision was made, the file gets
   created or updated while the reasoning is fresh. Tomorrow you will remember the
   decision and forget why.
2. **A weekly review, fifteen minutes.** Read the hypotheses folder. Update statuses. Add
   anything from the week's interviews or data. The study blocks you planned in lesson 0.2
   are a good place for it.
3. **Close the loop on old decisions.** Once a quarter, open the decisions from six
   months ago and fill in what happened. This is where the learning is. Farnam Street's
   piece on decision journals, linked below, explains why the delayed review is the whole
   point.

## Using it with a model

Once the folder exists, a model becomes genuinely useful in ways it was not before: ask it
to prepare you for a meeting with a stakeholder by reading their file and the last three
decisions they were part of; ask it which hypotheses have had no new evidence in two
months; ask it to draft the reasoning section of a new decision in the style of the old ones.
The PM Brain project packages exactly these workflows.

Two rules. First, the same confidentiality line as lesson 7.6.2: if your second brain
contains real customer data or company confidential material, which a stakeholder file
easily can, it is not something to paste into a consumer model. Use a tool with a proper
data agreement, run a model locally, or keep the sensitive files out of what the model
reads. Second, the model reads; you decide. A model that summarises your decisions is
helping you remember. A model that makes them for you has replaced the part of the job you
are paid for.

## Assignment

<div class="assignment">

1. Read Farnam Street's [Decision Journal](https://fs.blog/decision-journal/), ten
   minutes, for the format and, more importantly, the argument for reviewing entries
   months later.
2. Browse the [PM Brain](https://github.com/phuryn/pm-brain) repository, twenty minutes,
   including the example brain folder. Notice how little structure it needs and how the
   six commands map to a PM's week.
3. Look at the second-brain template and the product-plan template in
   [rianvdm/pm-resources](https://github.com/rianvdm/pm-resources), ten minutes, for a
   second, simpler take on the same idea.
4. Create your own second brain: a private repository with the five folders above. Move
   your decision journal from 2.1.5 into `decisions/`, your stakeholder map from 1.3.4 into
   `stakeholders/`, and the live hypotheses from your opportunity solution tree in 3.3.4
   into `hypotheses/`. Add a `README.md` explaining the structure to your future self. Put
   the weekly fifteen-minute review in your calendar.

</div>

## Additional resources

- Tiago Forte's [Building a Second Brain](https://www.buildingasecondbrain.com/), the book
  and method that popularised the term, broader than product work but the habits transfer.
- Wikipedia on the [Zettelkasten](https://en.wikipedia.org/wiki/Zettelkasten), the
  index-card system that a sociologist used to write seventy books, and the ancestor of
  every linked-notes tool.
