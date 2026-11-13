document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
  }
});
function updateDis() {
  if (judge) {
    a = display.innerText;
    if (display.innerText.indexOf(".") != -1) {
      dot.disabled = true;
    } else {
      dot.disabled = false;
    }
    console.log(a, "I", b, "I", opt, "I", judge);
  } else {
    b = display.innerText;
    if (display.innerText.indexOf(".") != -1) {
      dot.disabled = true;
    } else {
      dot.disabled = false;
    }
    console.log(a, "I", b, "I", opt, "I", judge);
  }
}
function dealNum(text) {
  if (b === null) {
    display.innerText = "";
    b = "";
    display.innerText = display.innerText + text;
    console.log(a, "I", b, "I", opt, "I", judge);
  } else {
    display.innerText = display.innerText + text;
    console.log(a, "I", b, "I", opt, "I", judge);
  }
  if (judge) {
    a = display.innerText;
    if (display.innerText.indexOf(".") != -1) {
      dot.disabled = true;
    } else {
      dot.disabled = false;
    }
    console.log(a, "I", b, "I", opt, "I", judge);
  } else {
    b = display.innerText;
    if (display.innerText.indexOf(".") != -1) {
      dot.disabled = true;
    } else {
      dot.disabled = false;
    }
    console.log(a, "I", b, "I", opt, "I", judge);
  }
}
function dealOpt(text) {
  dot.disabled = false;
  if ((!isNaN(a) || a === ".") && b && opt) {
    let result = operate(a, b, opt);
    if (Number.isNaN(result)) {
      display.innerText = "没上过小学？";
      a = undefined;
      b = null;
      opt = undefined;
      judge = true;
      console.log(a, "I", b, "I", opt, "I", judge);
    } else {
      a = result;
      display.innerText = Math.round(a * 1000000) / 1000000;
      b = null;
      judge = false;
      opt = text;
      console.log(a, "I", b, "I", opt, "I", judge);
    }
  } else {
    if (!isNaN(a) || a === ".") {
      judge = false;
      opt = text;
      display.innerText = "";
      console.log(a, "I", b, "I", opt, "I", judge);
    } else judge = true;
  }
}
function dealEqual() {
  if ((!isNaN(a) || a === ".") && b && opt) {
    dot.disabled = false;
    let result = operate(a, b, opt);
    if (Number.isNaN(result)) {
      display.innerText = "没上过小学？";
      a = undefined;
      b = null;
      opt = undefined;
      judge = true;
      console.log(a, "I", b, "I", opt, "I", judge);
    } else {
      a = result;
      display.innerText = Math.round(a * 1000000) / 1000000;
      b = null;
      judge = true;
      console.log(a, "I", b, "I", opt, "I", judge);
    }
  }
}
function dealC() {
  a = undefined;
  b = undefined;
  opt = undefined;
  display.innerText = "";
  judge = true;
  dot.disabled = false;
}
function dealBs() {
  if (b !== null) {
    let str = String(display.innerText);
    let num = str.length;
    if (str) {
      str = str.slice(0, num - 1);
    }
    display.innerText = str;
  }
}
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
const keyMap = {
  Escape: dealC,
  Enter: dealEqual,
  Backspace: dealBs,
};
const keyMap2 = {
  "+": "+",
  "-": "-",
  "*": "*",
  "/": "÷",
};
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
    dealOpt(item.innerText);
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key >= "0" && event.key <= "9") {
    dealNum(event.key);
  } else if (event.key === "." && !dot.disabled) {
    dealNum(event.key);
  } else if (keyMap[event.key]) {
    keyMap[event.key]();
    if (event.key === "Backspace" && b !== null) {
      updateDis();
    }
  } else if (keyMap2[event.key]) {
    dealOpt(keyMap2[event.key]);
  } else {
    console.log("你好，这是计算器，瞎按什么呢？");
  }
});
for (let item of nlArr) {
  item.addEventListener("click", () => {
    dealNum(item.innerText);
  });
}
let equal = document.getElementById("equal");
equal.addEventListener("click", () => {
  dealEqual();
});
let C = document.getElementById("clear");
C.addEventListener("click", () => {
  dealC();
});
let bs = document.getElementById("bs");
bs.addEventListener("click", () => {
  dealBs();
  if (b !== null) {
    updateDis("");
  }
});

/*   更新内容，就应该触发dotstatus的检查，我打算用类似这个方法来检查禁用，但是触发检查就像我说的那样，应该和display的更新动作绑定。“if (display.innerText.indexOf(".") != -1) {
      dot.disabled;
    }”
  2.显示屏这个dot和数字输入在一些特例下的冲突我没想好怎么解决，因为现在的状态管理，随着加入的功能和特性越来越多，我觉得管理状态越来越烧脑了。
  3.剩下的extra credit你全部给我列出来，一次性写完*/
