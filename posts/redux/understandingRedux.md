---
title: "How to set and get data in Redux"
author: "Sheng Zhuang"
date: "03/03/2021"
stack: "React Redux"
---

When I first learned redux, there are really a lot of new terminology that I had never heard of before and boilerplate code, which steeps the learning curve and can be quite daunting.

But if we get used to it after a while, it is no more than a common concept of setting data and getting data, so in this article, I will try to explain the redux terminology and work flow from the this point of view.

Think about a normal OOP object, there are attributes to hold the data, private and public setter methods to update the attributes, and getter method to read attributes. Redux is no different fundamentally, with store managing a centralized state tree which is imutable however, functions for setting data in the state, and getting data from the state tree too.

---

- setting data

For setting data, there are store.dispath and reducer.

Reducer is like a private method to update the state, which only be created and used when configuring store, and never be called, while store.dispatch is like a public api of store to called in your app to update the state.

```js
// private setter
reducer: (state, action) => updatedState;  // state is imutable in redux
// public setter
store.dispatch(action) => action  // side effect to update state
```

As you can see action is at the center of thess two functions, let's talk about action before moving on to getter.
action has basic form of:

```js
action: {
  type:string;
  [any]?: any;
}
```

The core of the action object is action.type, which is a must. There is normally one other pair to hold data for updating the state, the key of which can be any string and the value can be of any type, and this one other pair is optional and not restricted to only one.

Action can be passed directly reducers or store.dispatch(), but there is a pattern of using action creator, which you should be familiar with but can choose to use or not.

```js
const actionCreator = (data) => ({
  type: "ACTION_TYPE",
  payload: data,
});

store.dispatch(actionCreator(data));
```

---

-getting data

You can simply use store.getState() to get the whole state tree in some cases, or you can also use selector function to get a piece of data in the state tree or refine data from the state in most cases.

```js
store.getState();

// selector
const getItem = (state, index) => state[index];
```

Compose selectors, to penetrate down along the state tree.

```js
const getItem = (state, index) => state[index];
const getTodoItem = (state, index) => getItem(state.todoItem, index);
```

Below are some useful vanila javascript array methods that normally used in selectors to transform and refine the primitive data in the state.

```js
Array.map();
Array.filter();
Array.reduce();
```

---

- setting up store

The least you need to set up a Redux store is a reducer:

```js
const store = createStore(reducer);
```

Each slice of state tree will have a reducer, and then all these reducers need to be combined into final one, which will have the same shape of the state tree, before being passed to createStore function.

```js
// shape of the state tree
const treeShape = {
  A1: {
    B1: 0,
    B2: 0,
  },
  A2: 0,
};

const finalReducer = combineReducers({
  A1: combineReducers({
    B1: reducerB1,
    B2: reducerB2,
  }),
  A2: reducerA2,
});

const store = createStore(finalReducer);
```

The second argument for createStore is a preload state, AKA initial state, which is optional. Under the hood, when a store is created, dispatch will initially be called with preload state.

```js
const initialState;
const store = createStore(combinedReducer, initialState);
```

If you need to set up middlewares, like Thunk for async dispatch, you can configure them as an enhancer to be passed in as third argument of the createStore, I will talk about it in another chapter.

---

This is pretty much it, now you know how to set up a store, set data, and get data in Redux.
