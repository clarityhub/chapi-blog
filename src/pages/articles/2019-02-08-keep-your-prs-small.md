---
title: "Keep Your PRs Small"
date: "2019-02-08"
authors:
  - Ivan Montiel
featureImage: ./tracks.jpg
tags:
  - Software Development
  - Open Source
---

Back in 2014, I was part of a small team that was in charge of maintaining dozens of websites and applications for the Global Institute it Sutainability at Arizona State University.<!-- end --> While the team was small, there was no shortage of work to be done — the development team created and maintained around 30 active websites , an event management system, an employee management system, and data integrity systems for all of the departments long term studies. It’s safe to say that the team’s time was valuable.

Since many of the websites were the first point of contact for potential students, quality became an important metric to the team’s work. We decided that to help with quality, we would make pull requests and code reviews mandatory to try to catch any bugs, improve code quality, and discuss implementation details.

When we started this process, we found that it went poorly in the beginning. It took 30 minutes to an hour to review a pull request and write any comments that might need to be fixed. Reviews often included comments like “What was this change for?” or “Hey, your spacing is messed up here.”

We needed to set some ground rules.

## One (Set) of Features Per Pull Request

One rule we started using was that each branch and pull request should have only related features in it.

A standard that has come out of the development community is git flow, which works great to enforce one feature per pull request. Splitting up feature or bugfixes this way helps keep pull requests small. And the smaller the pull request, the easier it is to review.

The best pull requests are one line changes that have a specific purpose outlined in the title of the PR.

## Structure Your Code Reviews

The code review is not the time to debate whether a feature was needed or not. The time is long past that when you are working in an agile development. The ticket should have already been discussed and groomed.

Similarly, don’t waste time in the code review doing what a computer can do. Get your continuous integration pipeline set up and run some automated linting and testing so that all of those problems are taken care of before the review even starts.

1. Don’t waste time reviewing a pull request marked as “Work In Progress” or “WIP” unless specifically asked to review the code approach taken.
2. Don’t waste time reviewing a pull request if it fails to pass the continuous integration pipleline.

## Add Some Tests

You should have written some tests to accompany your code review. These tests are a great place to start the code review since they help you identify what the actual behavior the code changes intended to change.

Good tests document intended behavior and demonstrate edge cases. A good place to start the code review is to check the assumptions made in the tests. Are the inputs what are expected when used in the real world? Are there edge cases that aren’t covered?

Don’t get into the habit of only using tests to gauge the quality of the code though. It’s easy to fall into a trap of thinking that code coverage and the existence of tests means that your software will work as intended or that it will satisfy customers. There are other items to consider: do the sum of the parts work together and satisfy the feature?

## Own Your Code Quality

> We want to see pride of ownership. “I wrote this, and I stand behind my work.” Your signature should come to be recognized as an indicator of quality. People should see your name on a piece of code and expect it to be solid, well written, tested, and documented. A really professional job. Written by a real professional.
>
> – The Pragmatic Programmer

All of the above guidelines only really help if you take ownership of your code’s quality. When submitting a PR, think about how if it is maintainable and easy to understand. This is not only for the benefit of others, but for yourself as well. You may find that a month from now, you won’t remember the changes you made to a file, but if your code is well written, documented, and tested, you can have confidence in changing that file.

By owning the quality of your code, not only are improving the quality of the codebase, but you are demonstrating to other that quality matters. The whole point of encouraging these processes for Pull Requests is to improve the quality of the codebase and the quality of the product that is delivered to users.

Care about your users, care about quality, and make good pull requests!
