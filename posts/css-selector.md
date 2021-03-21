---
title: "Useful CSS selectors and combinators"
author: "Sheng Zhuang"
date: "01/11/2020"
stacks: "Javascript HTML CSS"
image: "p6.jpg"
---

As a frontend developer, I found that CSS selector is that kind of tool you have to add to your arsenel. Why? It is just versatile and being used almost everywhere, in CSS obviously, Styled-component, jQuery, BeautifulSoup etc.

There may be a little bit difference in different applications, like in jQuery and BeatifulSoup, but in general, selectors in these tools are built upon CSS selectors, I would say they are quite the same, and the diefferences are not the topic of this article.

### attributes selector

Element type selector, class and id selector are easy, and combination of three of these can almost solve 99% of the problem, especially in CSS, but for web scraping, attributes selector would be quite handy to tap into someone else's code.

Below are some very basic and frequently used attributes selector:

```css
/* with an attr */
div[someAttr]

/* attr with the exact string */
div[someAttr="string"]
```

Provide that you only know partial string of the value to the attribute, here are some attribute selectors to help:

```css
/* attr that start with a string */
div[someAttr^="str"]

/* attr that end with a string */
div[someAttr$="ing"]

/* attr that contain a substring */
div[attr*="substring"]

/* attr that contain a substring that is with word boundaries */
/* similar to checking div.attr.split('').includes("word") */
div[attr~="word"]

/* exact equal or left part of string separated by "-" */
/* <div title="strange"> or */
/* <div title="strange-thing"> */
div[title|="strange"]
```

you may notice that the symbol used here are quite similar to regex, and in fact you can add flags for case sensitivity like in regex too.

```css
/* flag i for case-insensitively */
div[someAttr^="str" i]
/* flag s for case-sensitively */
div[someAttr^="str" s]
```

### comma vs space vs ">"

**"selector-a, selector-b"** simply means targeting selector-a and selector-a at the same time.

```css
/* select all <div> and all <p> */
div,
p {
  /* styles */
}

/* is equivalent to */
div {
  /* styles */
}
p {
  /* styles */
}
```

While **"selector-a selector-b"** means targeting selector-b which is the decendant of selector-b. But be careful of being with and without space as shown in the example s below:

```css
/* select all <p> that is decendant of <div> */
div p {
  /* styles */
}

/* select all element of classA that is decendant of <div> */
div .classA {
  /* styles */
}

/* select all <div> of classA */
div.classA {
  /* styles */
}

/* select all element of classA and classB */
/* <div class="classA classB"> */
.classA.classB {
  /* styles */
}

/* select all element of classB that is decendant of element of classA */
.classA .classB {
  /* styles */
}
```

**"selector-a>selector-b"** means targeting selector-b that is the direct child of selector-a

```css
/* select all <p> that is child of <div> */
div > p {
  /* styles */
}
```

Don't be fool when seeing codes below that putting selector list and combinators together, although I don't suggest code like these, as it is quite troublesome to read.

```css
/* h2 and p that is in a div */
h2,
div p {
  /* styles */
}

h2,
div p,
div > .classA {
  /* styles */
}
```

### "~" vs "+"

**"selector-a~selector-b"** means selecting selector-b that is younger sibling of selector-a, by younger, I mean that elements selected by selector-b are coming after the element that targeted by selector-a.

```css
h3 ~ p {
  color: red;
}
```

```html
<div>
  <p>Not Red</p>
  <h3>T</h3>
  <p>Red</p>
  <p>Red</p>
</div>
```

**"selector-a+selector-b"** means selecting selector-b which is the next sibling of selector-a

```css
h3 ~ p {
  color: red;
}
```

```html
<div>
  <p>Not Red</p>
  <h3>T</h3>
  <p>Red</p>
  <p>Not Red</p>
</div>
```

One application of this sibling combinator is to select all children except the first one, this can be useful when you want to create gap between elements.

```css
/* this can create a 10px gap between children of element of classA */
.classA > div ~ div {
  padding-left: 10px;
}
```

One final tip, no matter how many the selectors combined together, the selector at the farthest right end is the ultimate target, all others representing some kind of relationship to the right one.
