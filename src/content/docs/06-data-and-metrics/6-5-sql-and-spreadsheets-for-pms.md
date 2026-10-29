---
title: "6.5 SQL and spreadsheets for PMs"
description: "Enough SQL and spreadsheet skill to answer your own questions, and the judgement to know when to ask the analyst instead."
---

## Introduction

Most product questions are small. How many people used the new feature last week? What
share of sign-ups from Ghana activated? Did orders per user move after the price change?
If every one of those has to wait for an analyst, you will ask fewer of them, and the ones
you do ask will arrive late and already shaped by someone else's assumptions.

This lesson gives you the minimum to answer small questions yourself: four SQL ideas,
two spreadsheet tools, and a clear sense of where your competence ends. You will not become
an analyst. You will stop being a bottleneck on your own curiosity.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- What a table is and why nearly every product question is a question about a table.
- The four SQL ideas that cover most PM questions: select, filter, group, join.
- Pivot tables and conditional counts as the spreadsheet equivalents.
- How to check your own numbers before you share them.
- When to stop and ask the analyst, and how to ask well.

## Everything is a table

A product's data lives in tables. One row per user. One row per order. One row per event,
such as "opened the app" or "tapped send". Each table has columns: a user id, a date, a
country, an amount. Most questions you will ever ask come down to counting rows that match
a condition, or adding up a column for rows that match a condition, sometimes after lining
two tables up against each other.

Once you see questions that way, the tools become obvious. "How many Ghanaian sign-ups
activated last month" is: take the users table, keep rows where country is Ghana and the
sign-up date is in the month, and count how many have activated set to true. That sentence
is already most of a query.

## Four SQL ideas

SQL is the language for asking tables questions. You do not need the whole language. You
need four ideas, and you can learn them in an afternoon.

**Select.** Choose which columns you want back. `SELECT country, activated FROM users`
gives you two columns for every user.

**Where.** Keep only the rows that match. `WHERE country = 'GH' AND signed_up >=
'2026-09-01'` narrows the list.

**Group by.** Collapse rows into groups and count or sum them. `SELECT country, COUNT(*)
FROM users GROUP BY country` gives one row per country with the number of users in each.
Add `AVG(activated)` and you have activation rate by country in one line.

**Join.** Line two tables up on a shared column. Users have ids; orders have user ids.
Joining them lets you ask "revenue per user by sign-up country", which neither table can
answer alone.

That is it. Everything else, window functions, subqueries, common table expressions, is
either a convenience or something you can ask for help with once you have hit its limit.
The assignment points you to an interactive tutorial where you type real queries against
real tables, which is the only way this sticks.

## The same ideas in a spreadsheet

If your company's data reaches you as an export rather than a database, the same four ideas
live in a spreadsheet.

**Filter** is "where". Turn on a filter and hide the rows you do not want.

**Pivot tables** are "group by". Drag country into rows, drag activated into values, set
it to average, and you have activation rate by country without writing anything. Pivot
tables are the single most useful spreadsheet skill a PM can have and most PMs never learn
them.

**COUNTIFS and SUMIFS** are "where" plus "count" or "sum" in one formula. `=COUNTIFS(C:C,
"GH", F:F, 1)` counts Ghanaian users who activated. Good for a quick number in a memo.

**VLOOKUP or XLOOKUP** is a join. It pulls a value from another sheet by matching an id.
Slower than a real join and easy to get wrong, but it works for a few thousand rows.

Spreadsheets break at a few hundred thousand rows. If your export is bigger than that, you
need SQL or an analyst.

## Checking your own numbers

The danger of answering your own questions is sharing a wrong answer with confidence. Four
habits that catch most mistakes:

1. **Know the denominator.** "Activation rate" of what? All sign-ups, or only those who
   completed verification? Write the definition next to the number.
2. **Sanity-check the total.** If your query says there were 40,000 sign-ups and the
   company reports 4,000 a month, something is doubled, probably a join that matched too
   many rows.
3. **Look at ten raw rows.** Before you trust a summary, scroll through the underlying rows
   and see whether they look like what you think they are. Test accounts, duplicates and
   nulls announce themselves this way.
4. **Reproduce one number a second way.** If the pivot says 23 percent, pick a country and
   count it by hand with a filter. If they disagree, you have learned something.

A number you cannot explain how you got is not a number you should put in a document.

## When to ask the analyst

Self-service has limits, and knowing them is part of the skill. Ask for help when:

- The question needs data from systems you cannot reach, such as payments or support.
- The answer will drive a decision with real money on it, and you want a second pair of
  eyes on the definition.
- You need a join across three or more tables, or anything with time windows, such as
  "users who did X within seven days of Y".
- Your query runs for minutes. You may be about to make a shared database unhappy.

When you do ask, bring what you have: the question in plain words, the definition you are
using, the query or sheet you tried, and what decision the answer feeds. Analysts spend half
their lives decoding vague requests. A clear one gets answered first.

## Assignment

<div class="assignment">

1. Work through the first twelve lessons of [SQLBolt](https://sqlbolt.com/), about two
   hours. It is interactive, in the browser, and covers select, where, group by and join by
   making you type them. Stop when you reach the lessons on inserting and updating rows; a
   PM reads data, and rarely writes it.
2. Read Google's help page on
   [creating and using pivot tables](https://support.google.com/docs/answer/1272900) in
   Sheets, ten minutes, then build one. Take any CSV you have, or the dataset linked from
   project 6.8, and produce a table of one measure broken down by one dimension without
   writing a formula.
3. Watch [SQL Explained in 100 Seconds](https://www.youtube.com/watch?v=zsjvFFKOm3c), two
   minutes. It is a recap, not a lesson; use it to check whether the vocabulary now sounds
   familiar.
4. Write down three questions about a product you use or work on that you could now answer
   with a single group-by or pivot, and one you could not. Note why the fourth is beyond
   these tools. That boundary is what you will use when deciding whether to ask for help.

</div>

## Additional resources

- Mode's [SQL tutorial](https://mode.com/sql-tutorial/) goes further than SQLBolt, into
  joins across several tables and window functions, with business examples. Useful once the
  basics are comfortable.
- W3Schools' [SQL reference](https://www.w3schools.com/sql/) is the page to keep open when
  you forget the syntax for something. Not a course, a lookup.
- Wikipedia on [SQL joins](https://en.wikipedia.org/wiki/Join_%28SQL%29) has the diagrams
  of inner, left and outer joins that every analyst draws on a whiteboard eventually.
