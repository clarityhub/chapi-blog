# Clarity Hub Blog

## Getting Started

```bash
npm i
npm start
```

## How to write an article

1. Create a file in `src/pages/articles/`. Name the file `[date]-[slug].md`;
2. Add your frontmatter:
  
  ```md
  ---
  title: [title]
  date: "[date]"
  authors:
    - [author]
  featureImage: ./[image]
  tags:
    - [tag]
  ---
  ```
  
3. Write your article
4. Make sure you have a feature image the you added to your frontmatter in `src/pages/articles/`.
5. That's it!

## Deployment

⚠️ Heads up, this repo uses a different deployment scheme.

In order to make it easier and quicker to release blog posts, this repo uses
a different deployment method:

* Deploy to **production** by committing to master.
* To deploy to the dev environment, merge commits into the **develop** branch.
