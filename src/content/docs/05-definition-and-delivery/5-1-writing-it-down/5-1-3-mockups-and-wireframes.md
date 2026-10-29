---
title: "5.1.3 Mockups and wireframes"
description: "Enough design literacy to sketch an idea, read a designer's work, and know which level of fidelity a conversation needs."
---

## Introduction

You are not the designer. You still need to draw. A product manager who cannot put a rough
picture of an idea in front of a team loses the argument to whoever can, and a product
manager who cannot read a designer's mockup critically cannot do their half of the
conversation. This lesson gives you the minimum: what the levels of fidelity are, when each
one is right, which tools cost nothing, and how to talk about a drawing without talking
about pixels.

The aim is communication, not craft. A box with "transfer list" written in it, drawn in
thirty seconds, often moves a decision further than a polished screen that took a day,
because nobody is afraid to disagree with a box.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- Sketch, wireframe, mockup, prototype: what each is and what it is for.
- Why low fidelity gets better feedback than high.
- Free tools that are enough for a PM.
- How to read and respond to a designer's work.
- Where drawings belong in the requirements document and the backlog.

## Four levels of fidelity

**Sketch.** Pen and paper, or a few boxes on a whiteboard. Takes minutes. Shows layout and
flow and nothing else. The right tool for the first conversation about any screen, and for
most conversations after that.

**Wireframe.** Boxes and labels, usually grey, drawn in a tool. Shows what is on the screen,
roughly where, and how screens connect. No colour, no real type, no imagery. The right tool
for agreeing structure before anyone invests in appearance.

**Mockup.** How it will actually look: colour, type, spacing, real content. Design's
territory. The right tool once structure is agreed and the question is feel.

**Prototype.** Something you can click through. Can be low fidelity (linked wireframes) or
high (near-real screens). The right tool for usability testing from Course 3, and for
showing stakeholders a flow rather than describing it.

Fidelity should rise with certainty. Early, when the idea might be wrong, draw cheaply so
that throwing it away costs nothing. Late, when the question is detail, invest. The most
common mistake is the reverse: a polished mockup for an idea nobody has validated, which
then survives because it looks finished.

## Why rough gets better feedback

A finished-looking screen invites comments about the finish. People notice the colour, the
icon, the wording of a label, and they hesitate to say the whole approach is wrong because
someone clearly spent a day on it. A sketch invites the opposite. It says "this is a thought,
not a thing" and people respond to the thought.

NN/g's research on paper prototyping, linked in the assignment, has been showing this for
decades: users and stakeholders give more structural feedback on low-fidelity work. Use that.
When you want to know whether the idea is right, make it look unfinished on purpose.

## Tools that cost nothing

- **Paper and a phone camera.** Faster than anything digital for the first sketch. Photograph
  it and paste it into the document.
- **[Excalidraw](https://excalidraw.com/).** Free, no account, hand-drawn look that signals
  "rough" honestly, exports to PNG. The default for this course.
- **[Balsamiq](https://balsamiq.com/learn/articles/what-are-wireframes/).** Wireframes that
  look like sketches on purpose, with a free trial. Their learning articles are good even if
  you never use the tool.
- **[Figma](https://www.figma.com/).** The industry standard for mockups and prototypes,
  with a free tier. You do not need to learn it for this course. You do need to be able to
  open a file a designer shares, leave a comment, and click through a prototype.

Do not spend this course learning design tools. Spend it learning to draw boxes quickly and
to say what the boxes are for.

## Reading a designer's work

When a designer shows you a mockup, your job is not to approve the aesthetics. It is to
check it against the problem and the requirements:

- Does the flow get the user to the outcome in the requirement? Walk it as the user from
  lesson 3.1.3, not as yourself.
- Is anything in the requirements document missing? Is anything here that is a non-goal?
- What happens in the ugly cases: empty state, error, slow network, a user with a hundred
  items instead of three?
- Does it work for the person with the oldest phone and the worst connection in your
  audience? Lesson 5.3.3 covers accessibility properly; for now, ask.
- Is there a simpler version that gets most of the value? Ask the designer, not the room.

Say what you see as questions about the user and the outcome, not as instructions about
the screen. "What happens if the transfer fails while they are on this screen?" is yours to
ask. "Move the button to the left" is not. Lesson 5.3.2 is about how to give this feedback
well.

## Where drawings go

In the requirements document, a sketch or wireframe sits beside the requirements it
illustrates, labelled as a sketch so that nobody mistakes it for the design. Its purpose is
to make the words concrete, not to constrain the designer. Say so in a caption.

In the backlog, a story may link to the relevant screen in the designer's file once design
is done. Do not paste mockups into stories; they go stale and engineers end up building from
an old picture.

In a usability test, a clickable low-fidelity prototype is enough to learn whether people
can find their way. Course 3 covered the testing; this lesson is where the thing being
tested comes from.

## Assignment

<div class="assignment">

1. Read NN/g on [prototype fidelity](https://www.nngroup.com/articles/ux-prototype-hi-lo-fidelity/),
   ten minutes, and on [paper prototyping](https://www.nngroup.com/articles/paper-prototyping/),
   ten minutes. The evidence for why rough drawings get better feedback, and how to run a
   test with nothing but paper.
2. Read Balsamiq's [What are wireframes?](https://balsamiq.com/learn/articles/what-are-wireframes/),
   ten minutes, and NN/g on [wireflows](https://www.nngroup.com/articles/wireflows/), ten
   minutes. The second shows how to draw a flow of screens on one page, which is the drawing
   PMs need most.
3. Watch Tom Wujec's
   [Got a wicked problem? First, tell me how you make toast](https://www.ted.com/talks/tom_wujec_got_a_wicked_problem_first_tell_me_how_you_make_toast),
   nine minutes. It is about drawing systems, not screens, and it is the best short case
   for why a group that draws together reaches agreement faster than one that talks.
4. Open [Excalidraw](https://excalidraw.com/) and draw the main screen and one secondary
   screen for the feature from your lesson 5.1.1 half-page, as wireframes: boxes, labels,
   arrows between them. Time yourself. If it took more than twenty minutes, you added
   detail you did not need. Export the PNG and keep it for project 5.1.4.

</div>

## Additional resources

- Figma's own [What is wireframing?](https://www.figma.com/resource-library/what-is-wireframing/)
  guide, for when you do want to use their tool for it.
- Google Ventures' [Design Sprint](https://www.gv.com/sprint/) site. The sketching exercises
  from day two of a sprint, especially "Crazy 8s", are a fast way to get a whole team
  drawing in an afternoon.
