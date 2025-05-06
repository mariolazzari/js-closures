// Modify the following function:
function logValues(value) {
  const enteredValues = [];

  return function (value) {
    enteredValues.push(value);

    return enteredValues;
  };
}

const numbers = logValues();
const letters = logValues();

numbers(1);
numbers(2);
numbers(3);
letters("a");
letters("b");

const nums = numbers(4);
console.log(nums);
const lets = letters("c");
console.log(lets);
