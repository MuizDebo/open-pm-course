---
title: "7.7.3 AI PM interview questions"
description: "The five kinds of question an AI product interview asks, examples of each, and what a strong answer contains."
---

## Introduction

AI PM interviews are general PM interviews with four things added: technical judgement,
evals, designing for failure, and responsibility. Course 8 teaches the general interview
loop, how to structure an answer, and how to practise. This lesson covers only what the AI
roles add, so that nothing in the loop surprises you.

What follows is not a script. Interviewers can hear a memorised framework from across the
table, and in AI interviews especially they are listening for whether you have actually
built and measured something. The examples below each say what a strong answer contains, so
you can check your own answers against them. Where your answer comes from one of your
Course 7 projects, say so and show it.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- The five question categories and what each is testing.
- Example questions in each category, with the shape of a strong answer.
- The three mistakes that lose AI PM interviews.
- How to use your Course 7 projects as answers.
- Where to find hundreds more questions to practise with.

## Category 1: product design with AI

The classic "design a product for X" question, with a model in it. The interviewer wants
to see whether you treat the model as magic or as a component with known failure modes.

**"Design an AI feature for a bus-ticketing app used mostly on low-end phones."**
A strong answer starts with the user and the problem, not the model. It runs the idea
through something like the 7.2.1 decision tree out loud: is there data, is the task
well defined, what does an error cost, how often does it happen, can the user correct it.
It names a specific feature, says what happens when the model is wrong, mentions cost and
latency on a metered connection, and ends with how success would be measured.

**"Our support chatbot resolves 60 percent of tickets. How would you get it to 80?"**
A strong answer asks what "resolves" means and how it is measured before proposing
anything. It segments the 40 percent that fail, suspects that some should never have gone
to the bot, and proposes evals on the failure categories before model changes. It does not
say "use a better model" first.

**"Where in our product would you not use AI, and why?"**
A strong answer has a real example and a reason tied to cost of error, user trust or data.
Interviewers ask this to find out whether you can say no to AI, which many candidates
cannot.

## Category 2: technical

Not implementation. Judgement about what the technology can do and what it costs.

**"When would you fine-tune a model rather than prompt it, and how would you know you
chose wrong?"**
A strong answer describes the trade-offs in plain terms: prompting is fast and cheap to
change, fine-tuning needs data and locks you in, retrieval sits between them for
knowledge problems. It ends with an eval that would show the choice was wrong.

**"Explain to a non-technical executive why the model sometimes makes things up."**
A strong answer is two or three sentences, accurate and without jargon, and then says what
the product does about it: grounding, citations, fallbacks, confidence signals. The
explanation is the test; the mitigation is the bonus.

**"What is a golden dataset and how big does one need to be?"**
A strong answer defines it as a set of inputs with agreed-correct outputs, says that size
matters less than coverage of the cases that matter, and gives a number from experience,
ideally from project 7.4.6.

## Category 3: strategy

**"Our competitor just shipped an AI assistant. The CEO wants one in a quarter. What do
you do?"**
A strong answer does not refuse and does not comply. It asks what problem the assistant
would solve for which users, proposes the smallest version that tests that, and names what
the quarter will actually buy: a prototype with an eval, not a launch. It mentions what the
competitor's launch does not tell you.

**"Should we build on a vendor's model or train our own?"**
A strong answer uses the build, buy or fine-tune logic from 7.2.3: start with the vendor,
own the data and the evals so you can switch, and only consider training when the data
or the economics are a genuine moat. It mentions vendor risk and price changes.

**"How does an AI product build a moat if everyone has the same models?"**
A strong answer names proprietary data, feedback loops that improve with use, distribution,
workflow integration and trust, and is honest that the model itself is rarely the moat.

## Category 4: execution and metrics

**"Design an eval for a feature that summarises customer calls."**
The most common AI-specific question. A strong answer defines what a good summary
contains, proposes deterministic checks for the easy parts, a rubric for the hard parts,
human review for a sample, and a model-as-judge to scale it, with the judge itself checked
against humans. It names a hallucination rate and a task-completion rate as the metrics
and says how often the eval runs.

**"Our AI feature's user satisfaction dropped after a model update. Walk me through
what you do."**
A strong answer treats it as an incident: confirm the measurement, compare eval results
before and after, segment by use case, roll back if the eval shows regression, and fix the
process that let an update ship without passing the eval.

**"What metrics would you put on the dashboard for an AI feature?"**
A strong answer has the 7.4.3 set: task completion, acceptance or edit rate, fallback
rate, hallucination or error rate, latency and cost per task, plus a user-facing outcome
metric, and says which one is the north star and why.

## Category 5: behavioural

**"Tell me about a time an AI feature you worked on failed."**
If you have not worked on one, your Course 7 project is the answer, and you should say
so. A strong answer is specific about the failure, what the eval did or did not catch,
and what changed afterwards. Vague failures read as invented.

**"Tell me about a decision where you pushed back on using AI."**
A strong answer has a cost-of-error or data argument and a stakeholder who disagreed, and
describes how it was resolved rather than who was right.

**"How do you keep up?"**
A strong answer is short and specific: two sources, one hands-on habit, and an example
of something recent that changed a decision you made.

## The three mistakes

1. **Treating the model as the product.** Starting from the technology instead of the user,
   and never saying what happens when it is wrong.
2. **Frameworks without evidence.** Reciting the decision tree or the eval types without a
   single example from something you built. The projects exist to prevent this.
3. **Hiding uncertainty.** Claiming confidence about model behaviour, costs or timelines
   that no one has. Interviewers in this field respect "I would test that" more than a
   confident guess.

## Practising

Two public question banks are worth working through. Pick ten questions, write answers of
two hundred words each, and get them reviewed in the course Discussions, where other
learners are doing the same.

## Assignment

<div class="assignment">

1. Work through the interview folder of
   [AI for Product Managers](https://github.com/ombharatiya/AI-for-Product-Managers/tree/main/07-interview-prep),
   which holds more than 150 questions across the same five categories, each marked as
   reported from a named company or as practice. An hour to read, longer to use. It is CC
   BY 4.0.
2. Read the interview prep section of [Awesome AI PM](https://github.com/aakashg/awesome-ai-pm),
   fifteen minutes, written by someone who has run many AI PM loops. Note the mix of
   question types they report, and compare it with the ads you collected in 7.7.1.
3. Read Exponent's
   [AI product manager interview questions](https://www.tryexponent.com/blog/ai-product-manager-interview-questions),
   fifteen minutes, as a third source. Where the three sources agree, that is what will be
   asked.
4. Write answers to five questions from this lesson, one per category, two hundred words
   each, drawing on your Course 7 projects wherever you can. Post them in the course
   Discussions and review two other learners' answers using the "what a strong answer
   contains" notes above.
5. Read Hamel Husain's
   [Your AI product needs evals](https://hamel.dev/blog/posts/evals/), thirty minutes. It
   is the piece most AI PM interviewers have read, and the eval design question in category
   4 is usually testing whether you have too.

</div>

## Additional resources

- Google's [People + AI Guidebook](https://pair.withgoogle.com/guidebook/), the design
  reference that the product design questions in category 1 are quietly checking against.
- Microsoft's [Guidelines for Human-AI Interaction](https://www.microsoft.com/en-us/research/project/guidelines-for-human-ai-interaction/),
  eighteen guidelines that make a good checklist for the "what happens when it is wrong"
  part of any answer.
- Course 8, section 8.3, for the general interview loop, question types and mock interview
  practice that this lesson assumes.
