---
title: "4.2.2 Roadmaps"
description: "What a roadmap is for, why dated roadmaps lie, and how to build one that communicates intent without making promises you cannot keep."
---

## Introduction

A roadmap is the most requested and least understood document in product management.
Sales wants one to close deals. Executives want one to feel in control. Engineers want one
to know what is coming. Each of them is picturing a different thing, and the roadmap that
satisfies all three is usually the one that is least true.

This lesson is about what a roadmap can honestly do, which is communicate direction and
sequence, and what it cannot, which is predict dates. It gives you a format that keeps the
first without pretending to the second, and some advice on showing it to people who wanted
the dates.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- What a roadmap is for and who it is for.
- Why timeline roadmaps fail and why they keep getting made anyway.
- Theme-based and Now/Next/Later roadmaps.
- What goes on a roadmap and what stays off it.
- Showing a roadmap to sales, executives and customers without lying.

## What a roadmap is for

A roadmap is a statement of intent: given our strategy and our goals, here is what we
expect to work on, in roughly what order, and why. It exists so that the people around the
team can plan around it and the team itself can see the shape of the next few months.

It is not a commitment, a project plan or a list of promises. The moment a roadmap is read
as any of those, it starts to do damage, because discovery will change what the team should
build, and a document that cannot change will fight the learning.

Marty Cagan's position is that roadmaps of features are the main thing standing between
most teams and good product work, and his alternative is to give teams outcomes instead. He
is right about the first and the second lesson in this section already covered the
outcomes. But most organisations still need something that looks like a roadmap, and the
PM's job is to make that something honest.

## Why dated roadmaps lie

A roadmap with months along the top and features in the cells is a Gantt chart with the
dependencies hidden. It fails for reasons that are structural, not personal:

- **Estimates are wrong in one direction.** Software takes longer than planned almost
  always, and rarely less. The planning fallacy is well documented and does not go away
  with experience.
- **The far columns are fiction.** Nobody knows what the team will be building in nine
  months, because the next three months will change the answer. Writing it down anyway
  turns a guess into a commitment.
- **Dates get screenshotted.** The roadmap you showed sales in January becomes the
  promise a customer was given in February, and the thing you broke in June.
- **It punishes learning.** When the team discovers the feature in April is the wrong
  one, a dated roadmap makes dropping it look like failure instead of good judgement.

Dated roadmaps persist because they are easy to read and because they feel like control.
Executives often ask for one when what they actually want is confidence that the team has a
plan and is not drifting. You can give them that without the dates.

## Theme-based roadmaps

The first fix is to put problems on the roadmap instead of features. A theme is a problem
area the team has chosen to work on: "new customers get to their first invoice faster", not
"invoice builder v2". Under each theme you can list candidate solutions, clearly marked as
candidates, and the goal the theme serves.

This does three things. It connects every item to the goals from the previous lesson. It
lets the team swap solutions without the roadmap looking broken. And it changes the
conversation with stakeholders from "when is my feature" to "is this the right problem",
which is the conversation you want.

## Now, Next, Later

The second fix is to replace months with horizons. A Now/Next/Later roadmap has three
columns:

- **Now.** What the team is working on this cycle. Specific, committed, with named
  solutions, because discovery is largely done and delivery is underway.
- **Next.** What the team expects to pick up when Now is finished. Themes with likely
  solutions. Shaped enough to discuss, not enough to promise.
- **Later.** Problems the team believes matter and intends to get to. Themes only. No
  solutions, no sizing, because anything written here will change.

The columns are deliberately vague about time. Now is roughly a cycle, Next roughly the one
after, Later roughly everything else. The vagueness is the feature. It lets the roadmap be
accurate about the near term and honest about the far term, which a dated roadmap cannot do
at the same time.

Janna Bastow, who popularised the format, frames the columns as decreasing certainty, and
that is how to present it: "we are sure about this, fairly sure about that, and interested
in the rest". Items move left as they become clearer and fall off when learning kills them.
A good Now/Next/Later roadmap looks different every month and nobody is surprised by that.

## What goes on it

Each item on a Now/Next/Later roadmap should carry:

- The problem or theme, in a sentence a customer would understand.
- The goal it serves, by reference to the goals sheet.
- The current candidate solution, if any, marked as such.
- Who it is for, if not everyone.
- Its confidence: how sure the team is that this problem is worth solving and that this
  solution will solve it.

What stays off: dates beyond the current cycle, effort estimates for anything in Later,
and anything that exists only because someone senior asked for it and nobody has checked.
The last category is where roadmaps go to rot.

## Showing it to people who wanted dates

**Sales** wants to say yes to a customer. Give them the Now column with confidence, the
Next column with the phrase "we expect", and a rule that anything in Later is never
mentioned to a prospect. Then give them something better than a date: a direct line to you
for the three deals a quarter that actually hinge on a roadmap question.

**Executives** want to know the team has a plan and that it connects to the company's
goals. Lead with the goals, show the themes under each, and show the Now column as
evidence of progress. When they ask for dates, offer the current cycle's dates and explain
that the next cycle's are set at the next planning, with the reason. Most executives
accept this once; the ones who do not are telling you something about the company.

**Customers** should see less than either. A public roadmap of themes builds trust; a public
roadmap of features builds a backlog of complaints when they slip.

In every case, the roadmap is the start of a conversation about priorities, not the end of
one. Lesson 4.2.3 is about how those priorities get set.

## Assignment

<div class="assignment">

1. Read Marty Cagan's [The Alternative to Roadmaps](https://www.svpg.com/the-alternative-to-roadmaps/),
   ten minutes, for the strongest case against feature roadmaps and what empowered teams
   are given instead. Then read his earlier
   [Product Roadmaps](https://www.svpg.com/product-roadmaps/), five minutes, for the two
   reasons companies keep asking for them anyway.
2. Read ProdPad's [Now-Next-Later roadmap](https://www.prodpad.com/blog/now-next-later-roadmap/)
   guide, fifteen minutes. It is a vendor's page, so skip the product pitch, but it is the
   format's home and the examples are good.
3. Read the short
   [Now/Next/Later process note](https://github.com/rianvdm/pm-resources/blob/main/processes/nownextlater.md)
   in Rian van der Merwe's PM resources repository, five minutes, for a working PM's
   version of the same idea, stripped to a page.
4. Read the Wikipedia entry on the [planning fallacy](https://en.wikipedia.org/wiki/Planning_fallacy),
   ten minutes. Note the finding that knowing about the fallacy does not cure it, and think
   about what that means for the Later column.
5. Draft a Now/Next/Later roadmap for your product. Three to five items per column, each
   with the problem, the goal it serves, and a confidence. Do not write a single date. Keep
   it for project 4.2.5.

</div>

## Additional resources

- ProductPlan's [What is a product roadmap?](https://www.productplan.com/learn/what-is-a-product-roadmap/)
  for a neutral overview of the formats in use, including the timeline ones this lesson
  argues against, so you recognise them when you meet them.
- Marty Cagan's [Managing Stakeholders](https://www.svpg.com/managing-stakeholders/), for
  the conversation that happens around the roadmap, which is harder than the roadmap.
