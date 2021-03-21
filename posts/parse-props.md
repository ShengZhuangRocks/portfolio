---
title: "How to parse props in React functional component"
author: "Sheng Zhuang"
date: "16/02/2021"
stack: "React Javascript Typescript"
image: "p8.jpg"
---

I like React Functional Component(RFC) a lot, as the pattern is simple and elegant, can be abstracted as **(props) => (JSX)**. In this article, I am going to talk about the left part of this RFC pattern, the props. What is in props? How to parse data in props?

I will use this simple Greeting function for example, then add complexity to it gradually.

```jsx
// definition
const Greeting = (props) => <div>Good {props.time}</div>;

// implementation
<Greeting time="morning" />;
```

If you are familiar with Javascript object destruction, the props in the above example can be re-write as below:

```jsx
// definition
const Greeting = ({ time }) => {
  return <div>Good {time} </div>;
};

// implementation
<Greeting time="morning" />;
```

Instead of saying props, time after being destructed is more specific and readable.

Now, say we want to pass down some div innate attributes, like class, inline style or direction maybe, not compulsory. We can pact all these rest unknown attributes in a variable, normally would call this props again.

```jsx
const Greeting = ({ time, ...props }) => <div {...props}>Good {time} </div>;

<Greeting time="morning" className="bg-grey-300" dir="rtl" />;
// so this will return => <div className="bg-grey-300" dir="rtl">Good morning</div>
```

The point here is that we want some data to be more specific, these data nomally is used as children of a node or in the children of a node, while all other data to be generic, which are normally attrributes of a node, can be easily unpacted as attributes of a HTML element like div in this example.

If in Typescript, we need to define the type for the props, in order to do so, we would do an intersection of time and HTMLAttributes, which aligns with time and ...props as explained above.

```ts
type GreetingProps = { time: string } & HTMLAttributes<HTMLDivElement>;

const Greeting: React.FC<GreetingProps> = ({ time, ...props }) => {
  return <div {...props}>Good {time} </div>;
};
```

---

There are quite few object destructuring patterns that I found really useful in parsing props:

- Default value

```jsx
const Greeting = ({ time = "evening", ...attrs }) => {
  return <div {...attrs}>Good {time} </div>;
};

<Greeting />;
```

is equivalent to the code below, but is less verbose.

```jsx
const Greeting = ({ time, ...attrs }) => {
  time = time || "evening";
  return <div {...attrs}>Good {time} </div>;
};

<Greeting />;
```

- Alias

This is useful when the name is taken in the scope or you just simply want to cahnge the name.

```jsx
const Greeting = ({ time: othername, ...attrs }) => {
  return <div {...attrs}>Good {othername} </div>;
};

<Greeting time="morning" className="bg-grey-300" dir="rtl" />;
```

Other use case for alias, is to take out a useless attribute that is passed down in props, in case it messes up with HTMLAttributes.

```jsx
const Greeting = ({ time, fruit: _, ...attrs }) => {
  return <div {...attrs}>Good {time} </div>;
};

<Greeting time="morning" fruit="apple" dir="rtl" />;
```

This may look weird, but is quite normal when using some libraries that you have no control of.

- further destructuring

```jsx
const Greeting = ({ time, fullname: {firstname, lastname}, ...attrs }) => {
  return <div {...attrs}>Good {time} {firstname} {lastname}</div>;
};

<Greeting time="morning" fullname={firstname:"Jone", lastname="Doe"} dir="rtl" />;
```
