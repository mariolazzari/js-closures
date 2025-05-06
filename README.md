# JavaScript closures

## Building blocks of closures

### Local and global scope

- Global scope: variable available anywhere in the code.
- Local scope: variable created and available only in a function.

```js
// global scope
let forecast = "sunny";
let tempC = 30;

function advise() {
  // global scope
  console.log(`The weather is ${forecast}`);

  // local scope
  let tempF = (tempC * 9) / 5 + 32;
  console.log(`The temperature is ${tempF}°F`);
}
```

### Nested functions

Function (inner) declared inside another function (outer).

```js
// outer function
function updateClicks() {
  const button = this.id;
  clicks[button] = clicks[button] + 1 || 1;

  // inner function
  function reportClicks() {
    const report = [button, clicks];
    console.log(report);
  }

  reportClicks();
}
```

### 