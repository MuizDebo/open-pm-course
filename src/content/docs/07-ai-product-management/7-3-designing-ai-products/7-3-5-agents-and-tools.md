---
title: "7.3.5 Agents and tools"
description: "What an agent actually is, when giving a model tools and autonomy is the right call, and why reliability gets worse with every step."
---

## Introduction

"Agent" is the most overused word in AI product work. It gets applied to a chatbot with a
personality, a script that calls a model once, and a system that books your travel without
asking. Those are very different things with very different risks, and a PM who cannot
tell them apart will spec the wrong one.

This lesson gives you a working definition, the small set of building blocks every agent is
made of, a way to decide whether your feature should be one, and the arithmetic that
explains why agents fail more than demos suggest. It leans on two published guides from
model providers that agree, usefully, on the main point: most problems do not need an agent.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- The definition: a model in a loop with tools.
- Workflows versus agents, and why the distinction matters more than the name.
- The building blocks: tools, memory, planning, stopping.
- Why reliability compounds across steps, with the arithmetic.
- Deciding whether your feature should be an agent at all.
- What to specify when it should.

## The definition

An agent is a model that decides what to do next, does it using tools, looks at the result,
and repeats until it judges the task done. Three things make it an agent rather than a
feature: it chooses its own steps, it can act in the world through tools, and it runs in a
loop you do not fully script.

A tool is anything the model can call: a search, a database query, a calculator, an API that
sends an email, a function that edits a file. Giving a model tools is what turns it from
something that talks into something that does. That is the power and the whole risk.

Anthropic's guide draws a line that is worth adopting as vocabulary. A **workflow** is a
system where the model is used in steps you designed: classify, then draft, then check. The
model does the thinking inside each step; you decide the order. An **agent** is a system
where the model decides the order too. Workflows are predictable and testable. Agents are
flexible and expensive to trust. Most products that call themselves agents are, and should
be, workflows.

## The building blocks

Every agent, whatever it is called, is assembled from the same parts. When you read a
proposal, look for each.

**Tools.** The list of actions the model can take. The most important design decision in the
system, because it is the blast radius. An agent with read-only tools can waste money. An
agent with write tools can delete, send and pay.

**Memory.** What the agent remembers within a task and across tasks. Within a task, it is
the conversation so far plus tool results. Across tasks, it is whatever you store. Memory is
where data leakage and runaway cost both live.

**Planning.** How the agent breaks a task down. Sometimes explicit (write a plan, then
execute), sometimes implicit (just act and react). Explicit plans are easier to show to a
person and to stop.

**Stopping.** How the loop ends: task done, step budget exhausted, cost cap hit, person
intervened, or the model decides it is stuck. An agent without a stopping rule is a bill.

**Checkpoints.** Where a person can see what it has done and approve what it is about to
do. Lesson 7.3.2 applies here with more force, because the thing being reviewed is an
action, not a draft.

## The arithmetic of reliability

Here is the fact that separates agent demos from agent products. Suppose each step the
agent takes is right 95 percent of the time, which is good. A task that takes one step
succeeds 95 percent of the time. A task that takes ten steps, each depending on the last,
succeeds about 60 percent of the time. Twenty steps, about 36 percent.

That is why the demo works and the product does not. The demo is three steps. The real task
is fifteen. Nothing about the model changed; the arithmetic did.

The design responses are the ones you would expect once you see the sum:

- **Fewer steps.** Collapse the task. Give the model a tool that does in one call what it
  was doing in five.
- **Verification steps.** Let the agent check its own work with a tool that can tell right
  from wrong: run the test, validate the form, compare to the source. Each check resets the
  error compounding.
- **Checkpoints with people.** Break the long chain into short chains with a person at the
  joins.
- **Honest scoping.** Promise the three-step task and deliver it reliably, rather than the
  fifteen-step task that works in the demo.

This is also why lesson 7.4 matters more for agents than for any other feature. You cannot
know the per-step reliability without measuring it, and you cannot design the loop without
knowing it.

## Should it be an agent?

Work through these in order and stop at the first no.

1. **Is the task genuinely open-ended?** If you can list the steps in advance, build a
   workflow. It will be cheaper, faster, and testable.
2. **Can the agent tell when it is done?** If success is not checkable by the agent itself,
   it will either stop too early or never.
3. **Is the cost of a wrong action bounded and reversible?** Reading is cheap. Sending,
   paying and deleting are not. If the tools include irreversible actions, there must be a
   person at that step, which makes it a workflow with a human checkpoint.
4. **Does the lethal trifecta from lesson 7.3.3 apply?** Untrusted content, private data,
   and outbound actions together. If yes, cut one before going further.
5. **Will people accept the variance?** Agents produce different paths to the same goal.
   Some users find that magical; some find it unacceptable. You should know which yours are.

Both of the provider guides in the assignment say the same thing in their own words: start
with the simplest thing that could work, add autonomy only when the simpler version
demonstrably cannot do the job, and measure the whole way.

## What to specify

If the answer is yes, the PRD needs sections a normal feature does not:

- The tool list, with each tool marked read or write, and the write tools marked for
  confirmation or not.
- The stopping rules: step budget, cost cap, time limit, and what the person sees when the
  agent stops without finishing.
- The checkpoints: what the person is shown and what they can approve, edit or cancel.
- The trace: everything the agent did, visible to the person afterwards and stored for
  review. An agent whose actions cannot be audited cannot be trusted or debugged.
- The per-step reliability target, and the overall task success target it implies.

Those go into the AI PRD in project 7.3.6 if your feature is an agent, and into the
failure-mode table either way.

## Assignment

<div class="assignment">

1. Read Anthropic's [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents),
   twenty-five minutes. It is written for engineers and is still the best short argument
   for workflows over agents, with diagrams of the five common workflow patterns. Match
   the feature you chose in project 7.2.4 to one of them.
2. Read OpenAI's [A practical guide to building agents](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf),
   thirty minutes, a PDF. Read it for the section on guardrails and for the questions it
   says to ask before building an agent; compare them with the five above.
3. Watch Andrej Karpathy's [Software Is Changing (Again)](https://www.youtube.com/watch?v=LCEmiRjPEtQ),
   forty minutes. The part on the "autonomy slider" and keeping people in the loop is the
   design argument of this lesson from the builder's side, and the Iron Man suit image is
   one you will use in meetings.
4. Do the arithmetic for your feature. Count the steps the real task takes, estimate a
   per-step reliability, compute the task success rate, and write three sentences on what
   you would change. Then answer the five "should it be an agent" questions in writing.
   Half a page, into the AI PRD.

</div>

## Additional resources

- Lilian Weng's [LLM-powered autonomous agents](https://lilianweng.github.io/posts/2023-06-23-agent/),
  the original survey of the planning, memory and tool-use components. Technical, but the
  component diagram is the one everyone else copies.
- Chip Huyen on [agents](https://huyenchip.com/2025/01/07/agents.html), a long piece with a
  good section on how failures compound and how to evaluate an agent step by step, which
  previews lesson 7.4.
- Anthropic's [tool use overview](https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/overview)
  and OpenAI's [agents guide](https://platform.openai.com/docs/guides/agents), if you want to
  see what a tool definition actually looks like before you spec one.
