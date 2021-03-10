---
title: "How to Redux"
author: "Sheng Zhuang"
date: "01/03/2021"
stack: "React Redux"
---

reducer composition

```js
const newReducer = combineReducers({
  subReducerA,
  subReducerB,
});
```

```js
const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState;
    default:
      return {
        addedIds: addedIds(state.addedIds, action), //another reducer down in the tree
        quantityById: quantityById(state.quantityById, action), //another reducer down in the tree
      };
  }
};
```

---

at the core, reducer is just a setter, which doesn't necessarily have to use switch statement, it can use if else statement instead, or if the logic is simple, it can even just return the updated state.

---

Many reducers can share the same action type,
dispath on one type, can cause multiple actions.

---

use other statements to refine data in reducer case

```js
case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [...state, action.productId]
```

---

Selectore composition

```js
const getAddedIds = (state) => fromCart.getAddedIds(state.cart);
```

---

some pattern, to use funtion that return action, instead of using action directly

```js
// (x) => action
const addToCartUnsafe = (productId) => ({
  type: types.ADD_TO_CART,
  productId,
});

// (x) => (dispatch, selector) => {dispatch(action)}
export const addToCart = (productId) => (dispatch, selector) => {
  if (selector().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId));
  }
};
```

is equivalent to:

```js
// (x) => (dispatch, selector) => {dispatch(action)}
export const addToCart = (productId) => (dispatch, selector) => {
  dispatch({
    type: types.ADD_TO_CART,
    productId,
  });
};
```

---

dispatch multiple actions in one manager

```js
export const addToCart = (productId) => (dispatch, selector) => {
  dispatch(actionA);
  dispatch(actionB);
};
```

---

useful raw js functions

```js
Array.map();
Array.filter();
Array.reduce();
```

---

setter and getter
reducer and selector

selector:

-getState() // select the whole state
-(state) => state.subSlice

dispatch:

-(action) => action
-> update state as side effect

---
