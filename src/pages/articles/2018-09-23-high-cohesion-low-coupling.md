---
title: Low Coupling, High Cohesion
date: "2018-09-23"
authors:
  - Ivan Montiel
featureImage: ./knot.jpg
tags:
  - Software Development
---

The key to creating maintainable code is adhering to “low coupling, high cohesion”.

But what exactly does this mean? At what point is your code loosely coupled and highly cohesive?

<!-- end -->

In this article, I refer to “modules” which represent almost any sort of language construct you have. In Object Oriented languages, this may represent classes. In JavaScript, it may represent actual packages or domains.

## Low Coupling

How much do your different modules depend on each other?

Modules should be as independent as possible from other modules, so that changes to module don’t heavily impact other modules.

High coupling would mean that your module knows the way too much about the inner workings of other modules. Modules that know too much about other modules make changes hard to coordinate and make modules brittle. If Module A knows too much about Module B, changes to the internals of Module B may break functionality in Module A.

By aiming for low coupling, you can easily make changes to the internals of modules without worrying about their impact on other modules in the system. Low coupling also makes it easier to design, write, and test code since our modules are not interdependent on each other. We also get the benefit of easy to reuse and compose-able modules. Problems are also isolated to small, self-contained units of code.

## High Cohesion

> We want to design components that are self-contained: independent, and with a single, well-defined purpose
>
> — The Pragmatic Programmer

Cohesion often refers to how the elements of a module belong together. Related code should be close to each other to make it highly cohesive.

Easy to maintain code usually has high cohesion. The elements within the module are directly related to the functionality that module is meant to provide. By keeping high cohesion within our code, we end up trying DRY code and reduce duplication of knowledge in our modules. We can easily design, write, and test our code since the code for a module is all located together and works together.

Low cohesion would mean that the code that makes up some functionality is spread out all over your code-base. Not only is it hard to discover what code is related to your module, it is difficult to jump between different modules and keep track of all the code in your head.

## Maintainable Code

Writing maintainable code helps increase productivity for developers. Having highly maintainable code makes it easier to design new features and write code. Modular, component-based, and layered code increases productivity and reduces risk when making changes.

By keeping code loosely coupled, we can write code within one module without impacting other modules. And by keeping code cohesive, we make it easier to write DRY code that is easy to work with.

A good way to determine how cohesive and coupled your code is, is illistrated by this quote from *The Pragmatic Programmer*:

> > When you come across a problem, assess how localized the fix is. Do you change just one module, or are the changes scattered throughout the entire system? When you make a change, does it fix everything, or do other problems mysteriously arise?

While you are writing and working with your code base, ask yourself:

1. How many modules am I touching to fix this or create this functionality?
2. How many different places does this change need to take place?
3. How hard is it to test my code?
4. Can we improve this by making code more loosely coupled? Can this be improved by making our code more cohesive?
