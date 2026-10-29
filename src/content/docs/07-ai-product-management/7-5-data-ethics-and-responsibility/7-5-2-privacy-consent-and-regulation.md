---
title: "7.5.2 Privacy, consent and regulation"
description: "What a PM has to know about GDPR, the EU AI Act, Nigeria's data protection law and sector rules, and where the line sits between your job and legal's."
---

## Introduction

You are not a lawyer, and this lesson will not make you one. It will make you the person on
the team who knows which questions to ask before the lawyer is in the room, which is most
of what a product manager needs. AI features touch personal data in ways that ordinary
features do not: they send it to third-party models, they infer things about people that
were never entered, and they produce outputs nobody can fully explain. The law has caught
up with that faster than most product teams have.

The practical goal is simple. By the end you should be able to describe, for your own AI
feature, what data it uses, on what basis, where it goes, how long you keep it, and what
you tell the user. If you can answer those five, legal review is a conversation rather
than a blocker.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- The handful of GDPR ideas that shape every AI feature: lawful basis, minimisation,
  purpose, retention, and the rights people have.
- The EU AI Act's risk tiers and what they mean for ordinary products.
- Nigeria's Data Protection Act and why the principles travel.
- Sector rules in finance and health, and the questions they add.
- Where model providers process data, and why that is a product decision.
- What is yours to decide and what belongs to legal.

## GDPR in five ideas

The General Data Protection Regulation is European law, and it is also the template most
other countries copied, so understanding it covers most of the world. Five ideas do the
work:

1. **Lawful basis.** You need a reason the law recognises to process personal data:
   consent, a contract, a legal obligation, or a "legitimate interest" that you can defend.
   Using customer data to train or tune a model is a new purpose, and it needs its own
   basis. The privacy policy you already have probably does not cover it.
2. **Purpose limitation.** Data collected for one reason cannot be quietly used for
   another. Support transcripts collected to resolve tickets are not automatically fair game
   for training an assistant.
3. **Minimisation.** Collect and send only what the feature needs. If the model needs the
   last three messages, do not send the whole history. This single habit removes most AI
   privacy risk.
4. **Retention.** Decide how long you keep prompts, outputs and logs, and delete on
   schedule. "Forever, for debugging" is not a retention policy.
5. **Rights.** People can ask what you hold, ask for it to be corrected or deleted, and
   object to automated decisions with significant effects. The last one matters: if your AI
   feature decides who gets a loan, a job interview or a refund, a human review path is not
   optional. The idea of a right to explanation is contested in detail and real in practice.

## The EU AI Act

The AI Act sorts uses of AI by risk, not by technology. A few uses are banned outright,
such as social scoring by governments. A list of "high-risk" uses, including hiring,
credit, education, essential services and law enforcement, carries heavy obligations:
documented risk management, data governance, human oversight, logging and conformity
assessment. Most products sit below that, with lighter transparency duties: users should
know they are talking to an AI, and generated content should be identifiable as generated.

For a PM the test is one question: does my feature make or materially influence a decision
about a person's access to money, work, education, housing, health or justice? If yes, you
are in high-risk territory and you build to that standard whether or not you sell in
Europe, because the standard is sensible and because other regulators are copying it. If
no, your obligations are mostly honesty and oversight, which you should want anyway.

## Nigeria's Data Protection Act

Nigeria's Data Protection Act of 2023 replaced the earlier regulation and created the
Nigeria Data Protection Commission as regulator. Its principles are recognisably the GDPR
ones: lawful basis, purpose, minimisation, accuracy, retention, security, and rights of
access, correction and deletion. It adds registration requirements for organisations
processing data at scale and expects data protection officers in larger ones.

Two things matter for AI products specifically. Cross-border transfer rules mean sending
Nigerian users' data to a model provider hosted abroad is a transfer that needs a basis, and
the commission expects you to know where the data goes. And the Act treats automated
decision-making with legal or similar effects much as GDPR does. If you build for Nigerian
users, the commission's site in the assignment is the primary source; if you build for
Kenya, Ghana or South Africa, each has its own act with the same shape.

## Sector rules

Finance and health add their own layers. In finance, regulators care about explainability
of credit decisions, about model risk management, and about fairness across protected
groups. A credit-scoring feature that cannot say why it declined someone will not pass
review in most jurisdictions. In health, patient data has special status almost everywhere,
and an AI feature that gives medical advice may be a regulated medical device depending on
what it claims to do.

The PM's job in a regulated sector is to find out early which rules apply, to build
explanation and human review into the feature from the first design rather than bolting
them on, and to keep the model's claims modest. "Here is information to discuss with your
doctor" and "here is your diagnosis" are different products under the law.

## Where the data goes

Most AI features send data to a model provider. That makes the provider a processor of
your users' data, which means you need a contract that says what they may do with it,
where they process it, how long they keep it, and whether they train on it. The answers
differ by provider and by plan, and the free consumer tier is almost never acceptable for
customer data.

This is a product decision, not a procurement detail. Choosing a provider or plan that does
not train on your inputs, that offers a region you can defend, and that deletes logs on a
known schedule changes what you can build and what you must tell users. Put it in the PRD.

## What is yours and what is legal's

Yours: knowing what data the feature uses, keeping it to the minimum, writing the
retention schedule, designing the human review path, writing what the user is told, and
choosing providers whose terms you can live with. Legal's: the lawful basis analysis,
contract terms, the registration and notification duties, and the final call on anything
high-risk. The best working relationship is that you bring them a feature that already
answers the five questions from the introduction, and they tell you what you missed.

## Assignment

<div class="assignment">

1. Read [What is GDPR?](https://gdpr.eu/what-is-gdpr/) and
   [Article 5, the principles](https://gdpr.eu/article-5-how-to-process-personal-data/) on
   gdpr.eu, twenty minutes together. The principles page is the one to keep open; every
   privacy conversation about an AI feature maps onto it.
2. Read the [high-level summary of the EU AI Act](https://artificialintelligenceact.eu/high-level-summary/),
   fifteen minutes, for the risk tiers and the high-risk list. Then decide which tier the AI
   feature from project 7.3.6 falls into and write two sentences on why.
3. Read the ICO's guidance on
   [AI and data protection](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/),
   thirty minutes for the overview pages. The UK regulator's guidance is the most practical
   plain-English treatment of how the principles apply to models, and it travels well.
4. Visit the [Nigeria Data Protection Commission](https://ndpc.gov.ng/) and find the Act
   and the implementation framework, fifteen minutes. If you build for another country,
   find that country's regulator instead. Note the registration threshold and the
   cross-border transfer rule.
5. For your AI feature, answer the five questions: what data it uses, on what basis, where
   it goes, how long you keep it, and what the user is told. One page. Keep it with the
   data plan from 7.5.1.

</div>

## Additional resources

- The European Commission's [regulatory framework for AI](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai)
  page, the primary source for the Act and its timeline.
- Wikipedia on the [right to explanation](https://en.wikipedia.org/wiki/Right_to_explanation),
  a fair summary of a genuinely unsettled area.
- Wikipedia on [data minimisation](https://en.wikipedia.org/wiki/Data_minimization), short
  and worth sending to an engineer who wants to log everything.
