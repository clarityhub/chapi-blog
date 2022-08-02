---
title: Introduction to Design Systems
date: "2019-04-23"
authors:
 - Ivan Montiel
featureImage: ./abstract.jpg
tags:
 - Design Systems
---

At Clarity Hub, we've decided to evaluate our existing applications and go through their designs to make a better overall experience for our customers. In order to do this, we had to rethink our current design system, how we implemented it and how we will craft a better design system moving forward.

<!-- end -->

Originally we created a simple stylesheet and component library to create the Clarity Hub application. It was based on SASS so that it could be used by our website that was written in Jekyll and our applications that were written in React.

Since our initial release, we've also released new websites, including a newsletter and a blog that also needed to consume the design system. What we found was that we didn't have the documentation or reuseability that we needed to continue using and improving what we had.

## What is a Design System?

In order to understand why our design system was inadequate, its important to understand what a design system is and what it is not.

A design system is **a comprehensive guide for designers and developers to create consistent experiences for their customers.**

Notice that the definition did not say a design system is a set of styles or components. A design system incorporates a style guide, components, as well as documentation, design principles, language, tone, and usage. The more comprehensive, the more consistent elements will be used throughout your products.

## History of Web Design

<image-left width="600px">

![Atomic Design](./atomic-design.png)

From [Brad Frost's Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)

</image-left>

In the beginning, we had HTML. The web was composed of HTML pages with minimal styling; the initial version of CSS was released in 1996, allowing for cascading styles via multiple stylesheets.

The limits of what you could do with just HTML and CSS were pushed with [CSS Zen Garden](http://www.csszengarden.com/) which showed the power of what could be accomplished without resorting to images and JavaScript. CSS Zen Garden launched in 2003 with only five designs, but has grown from there showcases a variety of different designs using different CSS on the same HTML content.

In 2010, UI Patterns launched showing user interface design patterns to solve common design problems. This was a way for designers to share UI patterns that they could use that users would intuitively understand.

A year later, in 2011, Twitter released Bootstrap – a toolkit to kickstart development of webapps and sites, including grids, typography, forms, buttons, tables and more. This caused an explosion of UI frameworks, both public like Foundation, Bulma and others, as well as internal UI frameworks that teams created for coworkers to use.

In 2013, in response to the rise of all of the UI libraries and discussions of design systems, Brad Frost formalized his ideas into the [Atomic Design framework](http://bradfrost.com/blog/post/atomic-web-design/). This was a shift from the foundational styling and visuals of a design system to focusing more on how those foundations work together to form more complex elements.

## The Rise of the Design System

A major turning point in design systems was the release of Google Material Design, where we saw a shift in focus from stylesheets and components to a full ecosystem of _design principles_, UI foundations, components, and UX strategies.

Google Material Design showed how a system could be built from the ground up with key principles in mind that work together to convey intent and meaning. The Google Material Design not only has documentation on color, typography, and other components, but also describes the "Material Environment", how users interact with their devices, and how to communicate with the user.

The modern design system combines the styleguides and component libraries of the past with documentation on content, foundational principles, and interactions users will have with the system.
