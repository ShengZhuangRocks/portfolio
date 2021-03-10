---
title: "How to parse props in React functional component"
author: "Sheng Zhuang"
date: "16/02/2021"
stack: "React"
---

Basic pattern of a react functional component(RFC) is a function take props as argument and output a jsx element.

```jsx
// definition
const Greeting = (props) => {
  return <div>Good {props.time}</div>;
};

// implementation
<Greeting time="morning" />;
```

---

If you are familiar with Javascript object destruction, the props in the above example can be re-write as below:

```jsx
// definition
const Greeting = ({ time }) => {
  return <div>Good {time} </div>;
};

// implementation
<Greeting time="morning" />;
```

---

Instead of saying props, time after being destructed is more specific and readable. But what if we need to pass down other attributes to the div element, we can pact all these unkown attributes as props again, this props is only a variable, can be named anything else.

```jsx
const Greeting = ({ time, ...props }) => {
  return <div {...props}>Good {time} </div>;
};

<Greeting time="morning" id={foo} className="gr" />;
```

The point here is that we want some data to be more specific, these data nomally is used as children of a node or in the children of a node, while all other data to be generic, which are normally attrributes of a node, can be easily unpacted as attributes of a HTML element like div in this example.

---

If in Typescript, to define the type for the props, we would do an union of time and HTMLAttributes, which aligns with time and ...props as explained above.

```ts
type GreetingProps = { time: string } & HTMLAttributes<HTMLDivElement>;

const Greeting: React.FC<GreetingProps> = ({ time, ...props }) => {
  return <div {...props}>Good {time} </div>;
};
```

---

### Alias

This may be weird, but sometimes there may be some useless data in the props, you may want to pick it out in case it messes up with HTMLAttributes. In this case, we can use alias in destructuring.

```jsx
const Greeting = ({ time, fruit: _, ...attrs }) => {
  return <div {...attrs}>Good {time} </div>;
};

<Greeting time="morning" id={foo} className="gr" fruit="apple" />;
```

if we don't assign fruit in props destructuring, fruit will be parsed to attrs and then passed to div, which may cause trouble.

TODO:

> 'quote' is declared but its value is never read.ts(6133)

TODO: Alias and then further destructuring

```jsx
const Greeting = ({ time, fullname: {firstname, lastname}, ...attrs }) => {
  return <div {...attrs}>Good {time} {firstname} {lastname}</div>;
};

<Greeting time="morning" id={foo} className="gr" fullname={firstname:"Jone", lastname="Doe"} />;
```

---

default value would be helpfull too.

```jsx
const Greeting = ({ time = "evening", ...attrs }) => {
  return <div {...attrs}>Good {time} </div>;
};

<Greeting />;
```

otherwise, we need a tenary expression to achieve this.

```jsx
const Greeting = ({ time, ...attrs }) => {
  time = time || "evening";
  return <div {...attrs}>Good {time} </div>;
};

<Greeting />;
```

---

One last pattern, that I saw on Redux source code the other day, it use destructuring and default assignment at the same time.

It is more of js destructuring pattern, it means that this group of arguments don't have to be passed when it is called.

This pattern cannot be used in props actually, as this empty obj will mess up with props.

```js
function foo({ x = 3, y = "C" } = {}) {
  console.log(x);
  console.log(y);
}

foo();
```

```js
function foo(x, { y = 2, z = 3 } = {}) {
  console.log(x * y + z);
}

foo(5);
```

It is equivalent to:

```js
function foo(o = { x: 3, y: "C" }) {
  console.log(o.x);
  console.log(o.y);
}

foo();
```

---

```js
{
  scream: {
    body, createdAt, userImage, userHandle, screamId, likeCount, commentCount;
  }
}
```
