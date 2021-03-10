---
title: "oop concept inheritence vs composition vs mixin vs prototype"
author: "Sheng Zhuang"
date: "02/11/2020"
stack: "javascript oop"
---

all about dry, try recycle the existing code

### mixin

> Mixin – is a generic object-oriented programming term: a class that contains methods for other classes.

javascript class cannot inherit from more than one class directly, mixin is here to rescue.
mixin is like a factory function to inherit from the argument class, pass the return value of a mixin function to another mixin function to inherit methods from two classes.

normal mixin

functional mixin

```js
// rewrite this snipet, this code may come from someone's post
let calculatorMixin = Base => class extends Base {
  calc() { }
};

let randomizerMixin = Base => class extends Base {
  randomize() { }
};

class Foo {}
class Bar = calculatorMixin(randomizerMixin(Foo))
```

mixin curry function

```js
const FunctionalMixin = (behaviour) => (target) => {
  Object.assign(target.prototype, behaviour);
  return target;
};
```

full example // to be rewrite

```js
const FunctionalMixin = (behaviour) => (target) => {
  Object.assign(target.prototype, behaviour);
  return target;
};

const colourCode = Symbol("colourCode");
const componentToHex = Symbol("componentToHex");
const rgbToHex = Symbol("rgbToHex");

const Coloured = FunctionalMixin({
  setColourRGB({ r, g, b }) {
    return (this[colourCode] = { r, g, b });
  },
  getColourRGB() {
    return this[colourCode];
  },
  getColourHex() {
    return this[rgbToHex](this.getColourRGB());
  },
  [componentToHex](c) {
    const hex = c.toString(16);

    return hex.length == 1 ? "0" + hex : hex;
  },
  [rgbToHex]({ r, g, b }) {
    return (
      "#" +
      this[componentToHex](r) +
      this[componentToHex](g) +
      this[componentToHex](b)
    );
  },
});

const Todo = Coloured(
  class {
    constructor(name) {
      this.name = name || "Untitled";
      this.done = false;
    }
    title() {
      return name;
    }
    do() {
      this.done = true;
      return this;
    }
    undo() {
      this.done = false;
      return this;
    }
  }
);
```

cons:

- Lack of Encapsulation
- Implicit Dependencies
- Name Clashes

### inheritance

is about recycling an class with all its methods and attributes

pros:

- object itself has clear logic
- realtion between objects are clear, as long as there are not too many generations
- change in parent will be reflect in child

cons:

- not so flexible
- unique methods may not be recycled

### composition

sometime, the problem with inheritance is that you have to inherit the whole thing, but what if you just want a small part of that class | object.

using factory function to create an object with one or more methods that can be destructured then to be mixed up with other methods and attributes to compose a new object.

key points here are:

- method factory function
- destructuring | Object.assign()
- composing

pros:

- flexible
- less coupled

cons:

- code is quite scattered in pieces
- the action of composing may be repeated

```js
let prepareVegie = (obj) => {
  return {
    vegie: () => console.log("Vegie is cooked"),
  };
};

let prepareChiken = (obj) => {
  return {
    chiken: () => console.log("Chiken is ready"),
  };
};

let pickDishSize = (size = "medium") => {
  plate: size;
};

let padtaiCreator = (dish) => {
  return {
    ...dish,
    ...prepareVegie(dish),
    ...prepareChiken(dish),
  };
};

let myPadtai = padtaiCreator(pickDishSize("large"));
```

```js
let eventMixin = {
  /**
   * Subscribe to event, usage:
   *  menu.on('select', function(item) { ... }
   */
  on(eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = {};
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }
    this._eventHandlers[eventName].push(handler);
  },

  /**
   * Cancel the subscription, usage:
   *  menu.off('select', handler)
   */
  off(eventName, handler) {
    let handlers = this._eventHandlers?.[eventName];
    if (!handlers) return;
    for (let i = 0; i < handlers.length; i++) {
      if (handlers[i] === handler) {
        handlers.splice(i--, 1);
      }
    }
  },

  /**
   * Generate an event with the given name and data
   *  this.trigger('select', data1, data2);
   */
  trigger(eventName, ...args) {
    if (!this._eventHandlers?.[eventName]) {
      return; // no handlers for that event name
    }

    // call the handlers
    this._eventHandlers[eventName].forEach((handler) =>
      handler.apply(this, args)
    );
  },
};
```
