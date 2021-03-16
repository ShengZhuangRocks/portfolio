---
title: "How to start to Redux quickly"
author: "Sheng Zhuang"
date: "18/02/2021"
stack: "React Redux"
image: "p13.jpg"
---

What is redux, why need redux

Say you are building react app, each component has it's state, if some components want to share state with other, the difficulty and complexity could soar if the two components are far from each other in the app component tree, so we would need a solution to maitain a global state in a centralize place that all components can have access to.

A solution is Redux, and this centralize place is the Redux store, which manages a global object tree contain all states, as well as tool to update the state and publish all the state changes to the subsriber.

How it works, and basic pattern of using it

Think about a dom tree,and for each node, there is an eventListener listen on event, then apply changes to the node.

Redux has quite the same structure for the state tree, there are slices in the state, reducers listen on actions to update the state tree.

Belows are some termilonogy described by their type:

```ts
// argument object shape of dispatch and reducer function, payload can be optional
action: {type:string, payload?:any};
// only used when configure the store
reducer: (state, action) => updatedState;
store: {
  getState: () => state;
  // call reducer to update the state under the hood
  dispatch: (action) => action;
  // callback is called when any update happens to the state
  subscribe: (callback) => void;
  ...
  }
selector: (state) => state.data
```

A normal and simplified Redux work flow would start from configuring the store first, then use the store api like dispatch to update the state, and getState to access to the whole state.

First thing first, so let's create a store:

```ts
import { createStore } from "redux";

interface CountState {
  digit: number;
}

interface CountAction {
  type: string;
  payload: number;
}

const countInitialState: CountState = {
  digit: 1,
};
const countReducer = (
  state: CountState = countInitialState,
  { type, payload }: CountAction
) => {
  switch (type) {
    case "plus":
      return {
        digit: state.digit + payload,
      };
    case "minus":
      return {
        digit: state.digit - payload,
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);
export default store;
```

This snippet of code is bare minimum to get a gist of how a store is created, there can be way more than one reducer, and middlewares can be passed to createStore to get more features, which are not in the scope of this article.

So next we can use the store api to do something.

```ts
// log the state, each time that state is changed
store.subscribe(() => console.log(store.getState()));
// update the state
store.dispatch({ type: "minus", payload: 5 });
```

That is pretty much it for the Redux, so let's move on to how the Redux is used a React app with React-Redux

---

React-Redux work flow

> configure store -> pass store to ->
>
> > Provider `<Provider store={store}>` to wrap the App
> >
> > > All child components can have access to store

For individual components to get access to the state and dispatch, one way is to use connect from react-redux, which will curry mapStateToProps and mapDispatchToProps objects and the component to provide an access to the state and dispatch from props inside the component. Another newer way is to use hooks, which I think is more readable and has less boilerplate code.

- useSelector

```ts
import { useSelector } from "react-redux";
// selector: (state) => state.data;
// useSelector(selector)
const digit = useSelector((state) => state.counter.digit);

// <div>{digit}</div>
```

-useDispatch

```ts
import { useDispatch } from "react-redux";
const dispatch = useDispatch();

dispatch({ type: "minus", payload: 5 });
```

---

## Good to know

-state is a private object of the state

-state is immutable

-state only persist to its initial state.

> which means all the data will be lost after page being refreshed, don't forget to save data to localStorage of backend

-Redux Toolkit is awesome, don't forget to check it out

-reducer can be called and as sub-state inside another reducer

-dispatch return an action, so it can be called inside another dispatch function
