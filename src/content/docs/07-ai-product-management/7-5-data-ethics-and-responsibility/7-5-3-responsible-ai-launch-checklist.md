---
title: "7.5.3 Responsible AI launch checklist"
description: "A concrete checklist to run before shipping any AI feature: purpose, failure modes, bias, oversight, transparency, data, monitoring, incidents and sign-off."
---

## Introduction

The previous two lessons gave you the principles. This one turns them into a list you can
run in an afternoon, with the team, before an AI feature ships. It is deliberately boring.
Responsible AI is mostly not a philosophy question; it is a set of things somebody has to
have checked, written down and been willing to sign.

The checklist draws on the US National Institute of Standards and Technology's AI Risk
Management Framework and on Google's published practices, both in the assignment, cut down
to what a product team can actually do. Use it as written for your first launch, then adapt
it. A checklist nobody runs is worse than none, so keep it short enough to run.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- Why a launch checklist, and why it is the PM who runs it.
- The nine areas the checklist covers.
- The checklist itself, ready to copy.
- How to run it as a meeting without it taking a day.
- What to do when an item fails.

## Why a checklist

Conventional features fail in ways you can test for in advance. AI features fail in ways
you discover in production, on real inputs, from real users, sometimes publicly. A
checklist does not prevent that. It makes sure that when it happens you already know what
the feature was for, what you expected to go wrong, who is watching, and who decides what
to do. Teams that skip it do not avoid the incident; they have it without a plan.

The PM runs it because the PM is accountable for the outcome and is the only person with
the whole picture: the user, the data, the model's behaviour, the legal position and the
business pressure to ship. Engineering, design, data and legal each own answers; you own
the asking.

## The nine areas

**Purpose and users.** What the feature does, for whom, and what it does not do. Vague
purpose is the root of most AI harm, because a model asked to "help" will help with things
you never intended.

**Failure modes.** The ways it goes wrong, from lesson 7.3.3: hallucination, wrong
confidence, bias, prompt injection, misuse, silence. Each with a likelihood, a severity and
a mitigation, even if the mitigation is "we accept this and here is why".

**Bias and fairness.** Evidence, not intention. Which groups could be treated differently,
and what you measured. Names, languages, regions, devices, disabilities.

**Human oversight.** Where a person reviews, corrects or can override, and whether that
person has the time and authority to do it. A review step that is always skipped is not
oversight.

**Transparency.** What the user is told: that it is AI, what it can and cannot do, what
happens to their data, how to correct it or get a human. In the product, not in a policy
page.

**Data.** The plan from lesson 7.5.1 and the five answers from lesson 7.5.2, in one place.

**Monitoring.** The metrics from lesson 7.4.3, who looks at them, how often, and what
number triggers action.

**Incident plan.** What "something has gone wrong" looks like, who gets paged, how to turn
the feature off, and who speaks to users.

**Sign-off.** Who agreed to ship, on what evidence, with what known gaps. Written down.

## The checklist

Copy this into your PRD or launch doc and fill every line. "Not applicable" is an
acceptable answer only with a reason.

1. **Purpose.** One sentence on what the feature does and for whom. One sentence on what it
   explicitly does not do.
2. **Out-of-scope requests.** How the feature responds when asked to do something outside
   its purpose. Tested with at least ten such requests.
3. **Risk tier.** Does it make or influence decisions about money, work, education, housing,
   health or justice? If yes, the high-risk obligations from lesson 7.5.2 apply and legal
   has reviewed.
4. **Failure modes listed.** Each with likelihood, severity, mitigation and owner.
5. **Eval results attached.** The suite from project 7.4.6, run on the version that ships,
   with pass rates against the release criteria from lesson 7.4.5.
6. **Fairness checked.** Eval results broken down by at least three user groups relevant to
   your product, with any gap over your threshold explained or fixed.
7. **Red team done.** Someone other than the builders spent at least two hours trying to
   make it misbehave, with findings logged and the serious ones fixed.
8. **Human review path.** Where a person can see, correct or override outputs; who that
   person is; evidence they have time to do it.
9. **User disclosure.** The feature tells users it is AI, what it is for, and how to reach
   a human, in the interface. Screenshots attached.
10. **Correction path.** Users can flag a wrong output and something happens to the flag.
    Named owner.
11. **Data plan.** Sources, consent basis, where data goes, retention, deletion on
    request. The 7.5.1 and 7.5.2 documents attached.
12. **Provider terms.** The model provider's data terms reviewed; no training on your
    inputs unless agreed; region and retention known.
13. **Minimisation.** The feature sends the model only what it needs. Someone has looked at
    an actual request payload and confirmed it.
14. **Logging.** Inputs and outputs logged enough to investigate an incident, with
    personal data handled per the retention policy, not longer.
15. **Monitoring live.** Dashboard exists with acceptance rate, fallback rate, flagged
    outputs and cost. A named person reviews it weekly for the first month.
16. **Kill switch.** The feature can be turned off for all users within minutes without a
    deploy. Tested.
17. **Incident plan.** Who is paged, who decides, who communicates, and the template for
    telling users. One page.
18. **Rollout plan.** Staged by percentage or cohort, with the criteria for proceeding and
    for rolling back.
19. **Known gaps.** The honest list of what you did not test, could not fix, or decided to
    accept, with reasons.
20. **Sign-off.** Names and dates from product, engineering, design, data and legal where
    applicable. The PM signs last.

## Running it

Do not run it as a form passed around by email. Book ninety minutes with the people who own
the answers, go down the list, and fill it live. Most items take two minutes because the
work was done in earlier lessons; the ones that take longer are the ones you needed to
find. Items that fail become tickets with owners and dates, and you decide, visibly,
whether they block the launch or go on the known-gaps list.

Run it again for any change that touches the model, the prompt, the retrieval data or the
audience. A new model version is a new launch.

## When an item fails

Three honest options. Fix it before shipping, which is the right answer for anything in
items 3, 8, 9, 16 or 17. Ship with it on the known-gaps list, which is acceptable for
things you have measured and judged tolerable, and only if the sign-off names say so.
Or narrow the feature until the failing item no longer applies: a smaller audience, a
narrower purpose, a human in the loop for the risky cases. Narrowing is underused. The
feature that ships to a hundred users with a reviewer beats the one that ships to a million
and gets switched off in a week.

## Assignment

<div class="assignment">

1. Read the overview of NIST's
   [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework),
   twenty minutes for the framework page and the four functions: govern, map, measure,
   manage. The checklist above is a product-sized version of it, and knowing the original
   lets you talk to compliance teams in their language.
2. Read Google's [Responsible AI practices](https://ai.google/responsibility/responsible-ai-practices/),
   twenty minutes. The sections on fairness, interpretability and safety are the source of
   several checklist items, with examples of what testing looks like at scale.
3. Read the [OWASP Top 10 for LLM applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/),
   twenty minutes for the list and one-paragraph descriptions. These are the attacks your
   red team should try in item 7, named and explained.
4. Run the checklist on the AI feature from project 7.3.6, using your eval suite from 7.4.6
   and your data documents from 7.5.1 and 7.5.2. Fill all twenty items honestly. Where you
   cannot, write what you would need. This filled checklist is part of the AI pack in the
   capstone.

</div>

## Additional resources

- [Model Cards for Model Reporting](https://arxiv.org/abs/1810.03993), the paper that
  proposed a one-page disclosure for models. Ask providers for theirs.
- Microsoft's [Responsible AI](https://www.microsoft.com/en-us/ai/responsible-ai) hub,
  including their impact assessment template, which is a longer cousin of this checklist.
- Google's [AI principles](https://ai.google/responsibility/principles/), short, and a
  useful model if your company has none.
- Google's [postmortem culture](https://sre.google/sre-book/postmortem-culture/) chapter,
  for how to handle the incident the plan in item 17 is for.
