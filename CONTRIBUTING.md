# Contributing

Thank you. This course only works if people who know product management help write it.

## Ways to help

- **Fix a typo or broken link.** Click "Edit page" at the bottom of any lesson, make the
  change, open a pull request.
- **Add a resource.** Open a pull request adding a link to a lesson's Assignment or
  Additional resources, with a sentence on why it belongs. Follow `LAYOUT_STYLE_GUIDE.md`.
- **Write a draft lesson.** Pick any lesson with a Draft badge. Open an issue saying you are
  taking it so nobody duplicates the work, then open a pull request when it is ready.
- **Propose a new lesson or project.** Open an issue first. New lessons change
  `CURRICULUM.md`, and the sidebar is generated from it.
- **Review submissions.** In Discussions, read other learners' projects and leave useful
  feedback. This is part of the course, not a chore.

## Ground rules

- Be kind and specific. Critique the work, not the person.
- Link rather than copy. See `SOURCES.md` for what may be excerpted.
- Everything you contribute is licensed CC BY-SA 4.0 (content) or MIT (code).
- One topic per pull request. Small, focused changes are reviewed fast.

## Local setup

```bash
npm install
npm run scaffold     # regenerates lesson skeletons and the sidebar from CURRICULUM.md
npm run dev          # http://localhost:4321/open-pm-course/
npm run check-links  # checks every external link
```

Node 20 or newer.

## Changing the curriculum map

`CURRICULUM.md` is the source of truth. Add or rename a lesson there, then run
`npm run scaffold`. New lessons get a skeleton file. Existing files are never overwritten.
Renamed lessons need their old file deleted by hand.
