---
title: NodeJS Package – May Update
date: "2020-05-18"
authors:
    - Ivan Montiel
featureImage: ./splash.jpg
tags:
    - Announcement
---

The NodeJS package for our Clarity Hub API is now generally available. While our main product on Clarity Hub is customer interview software, we also have NLP and AI services that are available to use outside of Clarity Hub.

<!-- end -->

Our Natural Language Processing (NLP) and Artificial Intelligence (AI) services that power Clarity Hub are also available to use in your applications via our [Clarity Hub API](https://clarityhub.io/api).

If you have an API account, we have made it even easier to integrate NLP and AI into your applications. Our [NodeJS package](https://github.com/clarityhub/node-api) is available on NPM and on Github.

## NodeJS Package

If you use NodeJS, you can use our [npm package](https://github.com/clarityhub/node-api).

Install using npm:

```sh
npm i --save @clarityhub/node-api axios
```

## Usage

To start using the package in your application, you'll need to create a Clarity Hub instance using an access key id and secret. You can generate one by following the [Create an Access Key](https://docs.clarityhub.io/guides/access-keys/create-access-key/) guide.

```js
const clarityhub = require('@clarityhub/node-api')({
    accessKeyId: process.env.ACCESS_KEY_ID,
    accessKeySecret: process.env.ACCESS_KEY_SECRET,
});
```

## Example

Here is a full end-to-end example using the package:

```js
const myModel = await clarityhub.models.create({
    name: 'human readable name',
    description: 'your model description',
});

await myModel.train([
    { utterance: 'hello world', label: 'greeting' },
    { utterance: 'good morning', label: 'greeting' },
    { utterance: 'how do I login', label: 'auth' },
    { utterance: 'how do I reset my password', label: 'auth' },
]);

const predictions = await myModel.predictSimilar('hi there');
console.log('predicted similar utterance', predictions[0]);

const predictions = await myModel.predictLabel('hi there');
console.log('predicted label', predictions[0]);
```

## Documentation

You can read more on the [Github page](https://github.com/clarityhub/node-api) or read [our guide](https://docs.clarityhub.io/guides/node-js/node-js/) on our documentation website.
