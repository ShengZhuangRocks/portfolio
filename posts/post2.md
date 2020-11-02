---
title: "for loop vs forEach() vs map()"
author: "Sheng Zhuang"
date: "01/11/2020"
stack: "javascript"
---

Except differences in syntax:

### for loop

- can use "break" to break out of loop in the middle or "return" to break out of loop if used in a function

### forEach(callback)

- simply do something with each elements
- cannot break forEach in the middle, use break in the callback will cause an error
- return in callback has no effect
- forEach itself won't return anything

### map(callback)

- use return in callback to map origin item to new item
- map itself will return a new array
