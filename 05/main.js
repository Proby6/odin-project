function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function operate(a, b, operator) {
  let num;
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
  return num;
}
let a, opt, b;
let display = document.getElementById("display");
let nl = document.getElementsByClassName("number");
let nlArr = Array.from(nl);
for (let item of nlArr) {
  item.addEventListener("click", () => {
    display.innerText = display.innerText + item.innerText;
    a = display.innerText;
  });
}
