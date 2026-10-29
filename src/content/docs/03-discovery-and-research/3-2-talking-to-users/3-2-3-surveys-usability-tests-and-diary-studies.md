---
title: "3.2.3 Surveys, usability tests and diary studies"
description: "Three more research methods, what question each one answers, when to reach for them instead of an interview, and the traps in each."
---

## Introduction

Interviews answer "why". They are bad at "how many", bad at "can people actually do this",
and bad at anything that happens over weeks rather than in a conversation. For those you
need other tools. This lesson covers the three a product manager uses most: surveys for
measuring, usability tests for watching, and diary studies for seeing what happens over
time.

The skill is not running any of them perfectly. It is picking the right one for the question
you have. A survey that asks why is wasted. An interview that asks how many is a guess.
Match the method to the question and even a rough study is useful.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- A two-axis map for choosing a research method.
- Surveys: what they measure well, what they cannot, and the questions that ruin them.
- Usability tests: watching five people, why five is enough, and how to run one in an hour.
- Diary studies: seeing a week of use instead of thirty minutes.
- Combining methods so that each covers the others' blind spots.

## Choosing a method

Nielsen Norman Group organises research methods along two axes. The first is attitudinal
versus behavioural: what people say versus what they do. The second is qualitative versus
quantitative: why and how versus how many and how much. Interviews are attitudinal and
qualitative. Analytics are behavioural and quantitative. Each method sits somewhere on the
map, and no single one covers it.

| | Qualitative (why, how) | Quantitative (how many) |
|---|---|---|
| **Attitudinal** (what they say) | Interviews, diary studies | Surveys |
| **Behavioural** (what they do) | Usability tests, field observation | Analytics, A/B tests |

The question tells you the quadrant. "Why do people abandon the sign-up?" is qualitative and
behavioural, so watch them do it. "What proportion of users have this problem?" is
quantitative and attitudinal, so survey. "Does the new flow convert better?" is quantitative
and behavioural, so experiment, which Course 6 covers.

## Surveys

Surveys are for counting. How many of your users have the problem the interviews surfaced?
Which of three jobs is most common? How satisfied are people, and has it changed since last
quarter? Done well, a survey turns five interviews' worth of hypotheses into numbers the team
can plan on.

Done badly, a survey produces confident nonsense. The common faults:

- **Asking why.** People do not know why they do things and will invent an answer. Use
  interviews for why and surveys for what and how many.
- **Asking about the future.** "Would you use X?" is as worthless in a survey as in an
  interview, and now you have five hundred worthless answers.
- **Leading questions.** "How much do you enjoy our new dashboard?" Give a neutral stem and
  a balanced scale.
- **Too long.** Every question after the tenth costs you respondents and quality. Ask what
  you will act on and nothing else.
- **Surveying the wrong people.** A survey sent to everyone who opened your email tells you
  about people who open emails. Define the population first, the way you define an interview
  profile.

A good pattern: interview first, survey second. The interviews tell you what to ask and what
the answer options should be. The survey tells you how widely the interview findings hold.
Run it the other way round and your survey asks the wrong questions precisely.

## Usability tests

A usability test is simple to describe and strangely rare in practice: give a person a
realistic task, watch them try to do it with your product, and do not help. Within five
minutes you will see something you did not know, and within five people you will have found
most of the problems in that flow.

Five is not a rough guess. Jakob Nielsen's finding, now decades old and repeatedly
confirmed, is that each additional tester finds fewer new problems, and that after five you
have found the large majority. Better to test five, fix, and test five more than to test
fifteen once.

How to run one in an hour:

1. Pick three tasks that matter, phrased as goals, not instructions. "You want to send this
   invoice to a client", not "click the send button".
2. Recruit someone who fits the profile and has not seen the product.
3. Ask them to think aloud. Then stay quiet. When they get stuck, ask "what are you thinking
   right now?" rather than pointing.
4. Take notes on where they hesitated, what they said, and whether they finished.
5. After each session, write down the three worst problems. After five sessions, rank them.

Usability tests can run on a sketch, a clickable prototype, a competitor's product or your
live product. The earlier you test, the cheaper the fix. Course 5 returns to this when you
have a prototype of your own.

## Diary studies

Some things do not happen in a thirty-minute session. How often does the problem actually
come up? What does the user do between uses? Where does your product fit in a week of
their life? For questions like these you ask people to keep a record over time: a diary
study.

The format is lighter than it sounds. Recruit a handful of people, give them a simple prompt
("each time you do X this week, send us a message with what happened and how it felt") and a
low-friction channel, a messaging app or a short form. Check in mid-way. At the end, interview
each person about their entries. One or two weeks is usually enough.

Diary studies are slow and need commitment from participants, so they are not a weekly tool.
They are the right tool when the interviews keep saying "it depends on the day" and you need
to know which days.

## Combining them

The strongest discovery work layers methods so each covers the others' weakness. A common
sequence for a single problem:

1. Five interviews to find the problem and the words users use for it.
2. A survey to measure how many users have it and how badly.
3. A usability test of the current flow to see where the problem shows up in behaviour.
4. A diary study if the problem turns out to be about timing or frequency.

You will not always do all four. But knowing the sequence stops you from, say, surveying
before you know what to ask, which is the most common research mistake in product teams.

## Assignment

<div class="assignment">

1. Read Nielsen Norman Group's
   [When to Use Which User-Experience Research Methods](https://www.nngroup.com/articles/which-ux-research-methods/),
   fifteen minutes. The two-axis map above comes from here, with twenty methods placed on it.
   Keep it as a reference.
2. Read [Why You Only Need to Test with 5 Users](https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/),
   ten minutes. The original argument for small, repeated usability tests, with the curve
   that shows why.
3. Read [Usability Testing 101](https://www.nngroup.com/articles/usability-testing-101/),
   fifteen minutes, for the mechanics, and
   [Diary Studies: Understanding Long-Term User Behavior](https://www.nngroup.com/articles/diary-studies/),
   ten minutes, for the method you are least likely to have seen.
4. Run one usability test. Pick any product you use, write three tasks, and watch one friend
   attempt them without helping. Twenty minutes. Write down the three worst problems you
   saw. This is a rehearsal for the usability work in Course 5 and it will change how you
   look at every product from now on.

</div>

## Additional resources

- Nielsen Norman Group's
  [28 Tips for Creating Great Qualitative Surveys](https://www.nngroup.com/articles/qualitative-surveys/),
  for when you do need to run one. Most of the tips are about what not to ask.
- Steve Krug's [Rocket Surgery Made Easy](https://sensible.com/rocket-surgery-made-easy/),
  the short, practical book on do-it-yourself usability testing. The site has a demo video
  of a full test session, which is the fastest way to see what one looks like.
