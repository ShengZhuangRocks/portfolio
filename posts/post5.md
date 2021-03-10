---
title: "How to update the state in the component down in the tree using react hook"
author: "Sheng Zhuang"
date: "17/02/2021"
stack: "React"
---

```jsx
const Room1 = () => {
  const [light, lightSwitch] = useState(false);
  return (
    <div id="room1">
      <div>{light ? "light on" : "light off"}</div>
      <button onClick={() => lightSwitch((light) => !light)}>switch</button>
    </div>
  );
};
```

now move lightSwitch to another room

```jsx
const Room2 = ({ lightSwitch }) => {
  return (
    <div id="room2">
      <div>room 2</div>
      <button onClick={() => lightSwitch((light) => !light)}>switch</button>
    </div>
  );
};

const Room1 = () => {
  const [light, lightSwitch] = useState(false);
  return (
    <div>
      <div>room 1</div>
      <div id="room1">{light ? "light on" : "light off"}</div>
      <Room2 lightSwitch={lightSwitch} />
    </div>
  );
};
```
