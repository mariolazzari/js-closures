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

// error: tempF is not defined
// console.log(tempF);
