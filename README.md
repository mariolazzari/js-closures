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

### Returning value from inner function

Outer unction returns a reference of inner function.

```js
function calcTax(base) {
  return tax => {
    const total = calcTotal(base, tax);
    return total;
  };
}

const tax20 = calcTax(20);
tax20(25); // 45 
```

### Parallel closures

Create references to multiple closures.

```js
function updateClicks() {
  const clicks = {};

  function reportClicks(item) {
    clicks[item] = (clicks[item] || 0) + 1;
    console.log(item, clicks);
  }

  return reportClicks;
}

const reportActivities = updateClicks();
const reportProducts = updateClicks();
```

## Creating and using closures

### Module pattern

Returns an object, containing props and methods, using IIFE (Immediatly invoked function expression).

- encapsulate code
- expose subset on methods and props
- protect values
- specific access
- avoid global space

```js
const updateClicks = (function () {
  const choices = [];

  return {
    addChoice: function (newChoice) {
      choices.push(newChoice);
    },
    getChoices: function () {
      return choices;
    },
  };
})();
```

### Avoid unintended closures

Use *let* and / or *const* instead of *var*.

### Use JavaSscript features

- forEach
- block scope
