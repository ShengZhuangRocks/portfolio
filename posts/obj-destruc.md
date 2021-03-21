---
title: "How to object desctructuring in javascript"
author: "Sheng Zhuang"
date: "19/03/2021"
stack: "javascript"
image: "p15.jpg"
---

This article will be devided into two parts, the first of which will be more like a note from destructuring asignment from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) as they give a quite thorough list of examples, the second part will be some patterns that I came across from place to place, which are basically mix-uses of those examples from the first part.

### Basic patterns

- Assign all keys

```js
const foo = {
  f: 1,
  o: 2,
};
```

```js
// destrucuring here, the variables need to match with keys, the order is not important.
const { f, o } = foo;
```

- Get partial data

```js
// just simple ignore the rest of keys
const { f } = foo;
```

- Rest of the data

```js
// rest here just a variable name, can be anything
const { f, ...rest } = foo;
// const { f, ...any } = foo;

console.log(rest); // >>>Object{o:2}
```

- What about data in the prototype chain

After all keys, destructuring will continue looking up along the prototype chain.

```js
foo.__proto__.bar = 3;

/**
  foo:{
    f: 1
    o: 2
    <prototype>: Object { bar: 3, … }
  }
*/

const { f, o, bar } = foo;

console.log(bar); // >>>3
```

- Providing default values

```js
// like k here is not in keys or the prototype chain, would return undefined.
const { f, o, k } = foo;
console.log(k); //>>>undefined
```

```js
// we can assign a default value.
const { f, o, k = 3 } = foo;
console.log(k); //>>>3
```

- Alias

Merely to rename the keys to your preference.

```js
const { f: a, o: b } = foo;

console.log(f); // ReferenceError: f is not defined"
console.log(a); // >>>1
console.log(o); // ReferenceError: f is not defined"
console.log(b); // >>>2
```

### Complex patterns

- Assigning to new variables names and providing default values

```js
const { f: a = 3, k: b = 4 } = foo;

console.log(a); // >>>1
console.log(b); // >>>4
```

- Setting a function parameter's default value

```js
function foo(o = { x: 3, y: 4 }) {
  console.log(o.x, o.y);
}

foo(); //>>>3 4

// but
foo({ x: 6 }); //>>>6 undefined
```

As you can see, the default value is only on the object as a whole, if we need to set default value of keys inside the object, we need other pattern introduced below.

- Nested default value

```js
function foo({ x = 3, y = 4 } = {}) {
  console.log(x, y);
}

foo(); //>>>3 4
foo({ x: 6 }); //>>>6 4
foo({ x: 6, y: 7 }); //>>>6 7
```

- Nested default value used with other args

```js
function foo(x, { y = 2, z = 3 } = {}) {
  console.log(x + y + z);
}

foo(1); //>>>6
foo(1, { y: 3 }); //>>>7
foo(1, { y: 3, z: 4 }); //>>>8
```
