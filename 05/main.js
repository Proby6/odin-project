function add(a, b) {
  a = Number(a);
  b = Number(b);
  return a + b;
}
function subtract(a, b) {
  a = Number(a);
  b = Number(b);
  return a - b;
}
function multiply(a, b) {
  a = Number(a);
  b = Number(b);
  return a * b;
}
function divide(c, d) {
  c = Number(c);
  d = Number(d);
  if (d === 0) {
    return NaN;
  } else {
    return c / d;
  }
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
    case "÷":
      return divide(a, b);
  }
  return num;
}
let a, opt, b;
let dot = document.getElementById("dot");
let display = document.getElementById("display");
let nl = document.getElementsByClassName("number");
let nlArr = Array.from(nl);
let judge = true;
let nl2 = document.getElementsByClassName("operator");
let nl2Arr = Array.from(nl2);
for (let item of nl2Arr) {
  item.addEventListener("click", () => {
    dot.disabled = false;
    if (!isNaN(a) && b && opt) {
      let result = operate(a, b, opt);
      if (Number.isNaN(result)) {
        display.innerText = "没上过小学？";
        a = undefined;
        b = null;
        opt = undefined;
        judge = true;
        console.log(a, b, opt, judge);
      } else {
        a = result;
        display.innerText = Math.round(a * 1000000) / 1000000;
        b = null;
        judge = false;
        opt = item.innerText;
        console.log(a, b, opt, judge);
      }
    } else {
      if (!isNaN(a)) {
        judge = false;
        opt = item.innerText;
        display.innerText = "";
        console.log(a, b, opt, judge);
      } else judge = true;
    }
  });
}

for (let item of nlArr) {
  item.addEventListener("click", () => {
    if (b === null) {
      display.innerText = "";
      b = "";
      display.innerText = display.innerText + item.innerText;
      console.log(a, b, opt, judge);
    } else {
      display.innerText = display.innerText + item.innerText;
      console.log(a, b, opt, judge);
    }
    if (judge) {
      a = display.innerText;
      if (display.innerText.indexOf(".") != -1) {
        dot.disabled = true;
      }
      console.log(a, b, opt, judge);
    } else {
      b = display.innerText;
      if (display.innerText.indexOf(".") != -1) {
        dot.disabled = true;
      }
      console.log(a, b, opt, judge);
    }
  });
}
let equal = document.getElementById("equal");
equal.addEventListener("click", () => {
  if (!isNaN(a) && b && opt) {
    let result = operate(a, b, opt);
    if (Number.isNaN(result)) {
      display.innerText = "没上过小学？";
      a = undefined;
      b = null;
      opt = undefined;
      judge = true;
      console.log(a, b, opt, judge);
    } else {
      a = result;
      display.innerText = Math.round(a * 1000000) / 1000000;
      b = null;
      judge = true;
      console.log(a, b, opt, judge);
    }
  }
});
let C = document.getElementById("clear");
C.addEventListener("click", () => {
  a = undefined;
  b = undefined;
  display.innerText = "";
  judge = true;
  dot.disabled = false;
});

/*1.display只要更新内容，就应该触发dotstatus的检查，我打算用类似这个方法来检查禁用，但是触发检查就像我说的那样，应该和display的更新动作绑定。“if (display.innerText.indexOf(".") != -1) {
      dot.disabled;
    }”
  2.显示屏这个dot和数字输入在一些特例下的冲突我没想好怎么解决，因为现在的状态管理，随着加入的功能和特性越来越多，我觉得管理状态越来越烧脑了。
  3.剩下的extra credit你全部给我列出来，一次性写完*/
