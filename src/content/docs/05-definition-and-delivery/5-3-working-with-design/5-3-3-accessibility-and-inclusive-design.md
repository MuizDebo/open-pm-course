---
title: "5.3.3 Accessibility and inclusive design"
description: "Why accessibility is a requirement and not a feature, the basics of WCAG, and designing for the devices and connections your users actually have."
---

## Introduction

About one person in six lives with a significant disability. Many more have a temporary
one: a broken arm, an eye infection, a screen in bright sunlight, a hand holding a baby.
And a large share of the world's users are on cheap phones, old browsers and metered,
unreliable connections. A product that only works for a young person with good eyesight, a
new phone and fast wifi is not finished. It has excluded most of the people it could serve.

This lesson covers two overlapping things. Accessibility: making the product usable by
people with disabilities, which has a standard, a legal footing in many countries and a
clear checklist. And inclusive design: the wider habit of designing for the range of people
and conditions you will actually meet, including the low-end device and the two-bar
connection. The PM's job in both is to make them requirements rather than hopes.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- Why accessibility is a requirement, in law and in business.
- WCAG in plain terms: the four principles and the handful of rules that catch most
  problems.
- The curb-cut effect: accessible design helps everyone.
- Inclusive design for low-end devices and poor connections.
- How to put all of this into a spec so that it ships.

## Why it is not optional

Three reasons, any one of which should be enough.

**It is the law in a growing number of places.** The European Accessibility Act, the
Americans with Disabilities Act as courts have applied it to websites, the UK's Equality
Act, Nigeria's Discrimination Against Persons with Disabilities Act of 2018. Public-sector
buyers in many countries cannot purchase software that fails accessibility standards.
Enterprise customers increasingly ask for a conformance report before signing.

**It is a market.** Over a billion people with disabilities, plus their families, plus
everyone who ages into reduced vision, hearing and dexterity. A product they cannot use is
revenue left on the table.

**It is cheaper now than later.** Accessibility retrofitted onto a finished product costs
many times what it costs to build in. A PM who writes it into the spec pays once. A PM who
leaves it out pays every quarter.

## WCAG in plain terms

The Web Content Accessibility Guidelines are the standard everyone cites. They are long,
but they rest on four principles, and most failures break one of a dozen rules.

**Perceivable.** Users must be able to perceive the content. Images have text alternatives.
Video has captions. Text has enough contrast against its background, at least 4.5 to 1 for
body text. Nothing is conveyed by colour alone.

**Operable.** Users must be able to operate the interface. Everything works with a
keyboard, not just a mouse or a finger. Touch targets are big enough. Nothing flashes in a
way that can trigger seizures. Users can pause anything that moves.

**Understandable.** Content and controls make sense. Language is plain. Labels say what
fields are for. Errors say what went wrong and how to fix it. Behaviour is predictable: a
control does the same thing every time.

**Robust.** It works with assistive technology. Screen readers can read it, which mostly
means using real HTML elements with real names rather than clickable divs.

Conformance comes in levels: A, AA and AAA. AA is the level laws and contracts usually
require and the level to write into your spec.

## The curb-cut effect

Curb cuts, the ramps at street corners, were built for wheelchair users. They turned out to
help parents with prams, travellers with suitcases, delivery workers and cyclists, and now
nobody thinks of them as a disability feature. The same thing happens in software, every
time.

Captions, built for deaf users, are watched by everyone on a train. High contrast, built
for low vision, helps everyone in sunlight. Keyboard navigation, built for people who
cannot use a mouse, is how power users move fastest. Plain language, built for cognitive
accessibility, is just better writing. When someone argues that accessibility serves a
small minority, the curb cut is your answer.

## Inclusive design for real devices and real connections

If your users are in Lagos, Nairobi, Jakarta or Lima, or in the rural parts of anywhere,
their phone probably cost under two hundred dollars, has little storage and a slow
processor, and connects over mobile data that is paid for by the megabyte and drops out in
the lift. A design that assumes a flagship phone on fibre will fail them silently: pages
time out, images never load, the app gets uninstalled to make room for photos.

Design for it on purpose:

- **Weight.** A page or screen has a byte budget. Images are compressed and sized. Fonts are
  few. Nothing loads that the user did not ask for.
- **Offline and flaky.** The product does something useful with no connection, saves work
  locally, retries quietly and never loses what the user typed.
- **Low-end performance.** Test on a cheap device, not on the designer's laptop. Animations
  that are smooth on a flagship are a slideshow on a budget phone.
- **Data cost.** Tell users before you download something large. Let them choose.
- **Small screens and big thumbs.** Targets large enough to hit while walking.

This is inclusive design in the broadest sense: designing for the conditions your users
actually have rather than the ones your team has. Google's guidance for building for the
next billion users, linked below, is the practical reference.

## Making it ship

Accessibility that lives in a values statement does not ship. Accessibility that lives in
the spec, the design review and the definition of done does. Three moves:

1. **Put it in the requirements.** "Meets WCAG 2.2 AA" as a line in every PRD, with the
   specific checks that apply to this feature: contrast, keyboard, labels, captions.
2. **Ask in design review.** "What does this look like at 200 percent zoom? With a screen
   reader? On a three-year-old Android phone over 3G?" Three questions, every review.
3. **Test before launch.** Automated checkers catch about a third of problems. The rest
   need a human with a keyboard and a screen reader for twenty minutes. Put that in the
   launch checklist in lesson 5.4.1.

## Assignment

<div class="assignment">

1. Read the W3C's [introduction to web accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/),
   fifteen minutes. The authoritative starting point: what it is, who it is for, and why it
   matters, from the people who write the standard.
2. Watch two or three of the W3C's
   [Web Accessibility Perspectives videos](https://www.w3.org/WAI/perspective-videos/),
   about a minute each. Each shows one accessibility feature and who it helps, including
   people who are not disabled. The curb-cut effect, filmed.
3. Read [WCAG 2 at a glance](https://www.w3.org/WAI/standards-guidelines/wcag/glance/),
   five minutes, and then the [A11y Project checklist](https://www.a11yproject.com/checklist/),
   ten minutes. Together they are the shortest usable version of the standard. Bookmark the
   checklist; it goes into your PRDs.
4. Read Google's guidance on
   [building for billions](https://developer.android.com/docs/quality-guidelines/build-for-billions),
   twenty minutes. It is written for Android engineers, and every section has a design and
   product decision inside it: connectivity, data cost, device capability, battery.
5. Run one screen of your product idea through the checklist and the three review
   questions above. Write down every requirement that comes out of it. They go into the
   PRD in project 5.1.4 and the launch pack in project 5.4.4.

</div>

## Additional resources

- Angela Glover Blackwell's essay on
  [the curb-cut effect](https://ssir.org/articles/entry/the_curb_cut_effect) in the Stanford
  Social Innovation Review. The full history and the argument, well told.
- Microsoft's [Inclusive Design](https://inclusive.microsoft.design/) toolkit. Short, visual,
  and the source of the permanent, temporary and situational framing used above.
- Material Design's [accessible design overview](https://m3.material.io/foundations/accessible-design/overview),
  for the concrete rules a mobile designer works to.
- WebAIM's [contrast checker](https://webaim.org/resources/contrastchecker/). Paste two
  colours, get a pass or fail. Use it in every design review.
- The UK government's plain-English guide to
  [understanding WCAG](https://www.gov.uk/service-manual/helping-people-to-use-your-service/understanding-wcag),
  if the W3C's own pages feel dense.
