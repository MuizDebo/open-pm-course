---
title: "7.7.1 The AI PM career path"
description: "What AI product manager roles actually are, who hires for them, how they differ from the general PM job, and what to expect from the market."
---

## Introduction

"AI product manager" is the fastest-growing title in product management and one of the
least consistently defined. At one company it means a PM who ships a chat feature on top of
a vendor's model. At another it means someone who owns a recommendation system's quality
metrics and argues with research scientists about training data. At a third it is a general
PM whose company put "AI" in every job ad this year.

This lesson sorts that out. It describes the roles that actually exist, the companies that
hire for them, how the work and the interviews differ from the general PM job you have
studied in Courses 1 to 6, and what a realistic path into one looks like. It does not quote
salaries or name specific models, because both will be wrong within months of this being
written.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- The three AI PM personas and the job each one describes.
- Titles, levels and where the roles sit in an organisation.
- Who hires AI PMs and what each kind of company wants.
- How the work differs from general product management, day to day.
- What the interviews test that general PM interviews do not.
- Honest expectations about supply, demand and timing.

## Three personas, three jobs

Lesson 7.1.1 introduced the three personas. They matter here because they are three
different careers that share a title.

**The AI-enhanced PM** is a general product manager who uses AI tools to do the PM job
faster and better, and who ships ordinary features that happen to call a model. The
product's core value is not the model. This is where most PM roles are heading, and the
skills are the ones from Courses 1 to 6 plus sections 7.2, 7.3 and 7.6.

**The AI experiences PM** owns a product or feature whose core behaviour comes from a
model: an assistant, a summariser, a recommender, a search ranking, a fraud detector. The
job is deciding what the model should do, designing for it being wrong, measuring whether it
is good, and managing the data that makes it better. This is the role most "AI PM" job ads
mean. It needs everything in Course 7, with 7.4 on evals at the centre.

**The AI builder PM** works on the model or platform itself: the API other teams build on,
the training pipeline, the evaluation infrastructure, the safety systems. Users are often
other engineers. This role sits closest to research and usually asks for a technical
background or a track record on the experiences side first.

When you read a job ad, work out which of the three it is before anything else. The
interviews, the day-to-day and the people you will work with are different in each.

## Titles and levels

The titles follow general PM titles with a modifier: AI product manager, product manager
for machine learning, technical PM for AI, and at larger companies, PM on a named team such
as search, assistant, ranking or platform. Levels are the same ladder as Course 8 describes:
associate, PM, senior, lead or group, director. There is no separate AI ladder. A senior AI
PM is a senior PM who happens to own a model-driven product.

Two things are different about where the role sits. First, the AI PM often reports into a
product organisation but spends more time with applied science, data engineering and legal
than a general PM does. Second, in companies where a research group exists, the PM is the
bridge between research priorities and product priorities, which is a political job as much
as a product one.

## Who hires

Four kinds of company, with different expectations.

- **Model and platform companies.** The labs and infrastructure providers. Few roles,
  intense competition, strong preference for technical depth and a public record of
  thinking about the field. Mostly builder and experiences PMs.
- **Large technology companies.** Many roles across search, ads, assistants, trust and
  safety, developer tools. Structured interviews, well-defined levels, and a preference
  for people who have shipped at scale. Experiences PMs mostly, builder PMs on platform
  teams.
- **Startups building on models.** The largest number of openings and the widest range of
  quality. The role is often the only PM in the company. They want someone who can
  prototype, write evals and talk to customers in the same week. Experiences and enhanced
  PMs.
- **Everyone else.** Banks, logistics firms, telecoms, health companies, government, adding
  AI to existing products. Often the first AI PM they have hired. The job is as much
  education and governance as product. Good entry point for a general PM who has done
  Course 7, especially in markets where the big-tech route does not exist locally.

In African and other emerging markets the fourth category is most of the market. Fintech,
telecoms and logistics companies are adding models to onboarding, fraud, support and credit
decisions, and they need PMs who understand both the product and the risk. That is an
opportunity this course is designed for.

## How the work differs

Most of the week looks like any PM's week. The differences cluster in five places.

1. **Specs are partly evals.** You cannot specify a model's behaviour the way you specify a
   button. You specify it by writing down what good and bad outputs look like and building
   a dataset that checks. Section 7.4.
2. **Quality is a distribution, not a state.** The feature works 94 percent of the time
   and you ship anyway, having decided what happens in the other 6 percent. Lesson 7.1.3.
3. **Data is a product input you own.** Where training and feedback data come from, how
   it is labelled and whether you are allowed to use it are your problems. Section 7.5.
4. **Cost and latency are product decisions.** Every call to a model costs money and time,
   and both shape what you can offer and to whom. Lesson 7.2.3.
5. **The ground moves.** Capabilities, prices and rules change every few months. A roadmap
   that assumes today's constraints is wrong by the time it ships. Lesson 7.1.4.

If those five excite you, this is your role. If they sound like a tax on the parts of PM
you actually like, the AI-enhanced path lets you use the tools without owning the model.

## What the interviews test

Course 8 covers PM interviews in general. AI PM loops add or change four things, and
lesson 7.7.3 goes through the questions.

- **Technical depth, aimed at judgement.** Not "implement attention" but "when would you
  fine-tune versus prompt, and how would you know you were wrong?"
- **Evals.** Expect to be asked to design one on the spot, for a feature you have never
  seen. This is the single most common AI-specific question.
- **Designing for failure.** A product design question that expects you to volunteer what
  happens when the model is wrong, before the interviewer asks.
- **Responsibility.** Privacy, bias, misuse, regulation. Weak answers list principles.
  Strong answers describe a decision they would make and its cost.

## Honest expectations

Demand is high and rising. So is supply, because every PM is now claiming the title. What
separates candidates is not having read about AI but having built, measured and shipped
something, even small, and being able to show it. That is why the projects in this course
are portfolio pieces rather than exercises, and why lesson 7.7.2 is about doing the work in
public.

Expect the first role to be an experiences PM job at a company that is not a lab, or an
AI-enhanced PM job where you push the AI part further than the ad asked for. Expect the
builder roles to come after that, if you want them. And expect the definition of the job to
have shifted again by the time you get there. The skills in Course 7 are the ones that
survive the shift.

## Assignment

<div class="assignment">

1. Read the career folder of
   [AI for Product Managers](https://github.com/ombharatiya/AI-for-Product-Managers/tree/main/08-career),
   twenty minutes. A practitioner's guide to the paths in, with the personas mapped to real
   roles. It is CC BY 4.0, so you may reuse its structure in your own planning.
2. Read the career and interview sections of
   [Awesome AI PM](https://github.com/aakashg/awesome-ai-pm), ten minutes. A second,
   independent description of how the role differs and how to break in, from someone who
   has interviewed many AI PM candidates. Note where the two sources disagree.
3. Collect five AI PM job ads, using the method from project 1.1.5. For each, decide which
   of the three personas it really is, quote the sentence that tells you, and note which
   Course 7 section covers the skills it emphasises. Keep this; lesson 7.7.2 uses it.
4. Watch Andrej Karpathy's
   [Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g), one
   hour. If you skipped it in section 7.1, do not skip it now. It is the level of technical
   understanding an AI PM interview assumes, explained for non-specialists by someone who
   built the things.

</div>

## Additional resources

- [Marily Nika's site](https://www.marilynika.com/) and her book on the AI product
  playbook, which first set out the three personas used throughout Course 7.
- [Product Compass](https://www.productcompass.pm/), a newsletter that tracks the AI PM
  role as it changes, with frequent role breakdowns and interview reports.
