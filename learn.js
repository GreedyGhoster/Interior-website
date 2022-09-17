"use strick";
const calc = function () {
  let a = prompt("Введите первое число");
  let b = prompt("Введите второе число");
  let c = prompt("Введите знак операции (*, /, +, -, **)");
  if (isFinite(a) && isFinite(b) && (c == "/" || "*" || "**" || "+" || "-")) {
    let x;
    if (c == "+") {
      x = a + b;
    } else if (c == "-") {
      x = a - b;
    } else if (c == "*") {
      x = a * b;
    } else if (c == "**") {
      x = a ** b;
    } else if (c == "/") {
      if (b == 0) {
        x = "На 0 делить нельзя!";
      } else {
        x = a / b;
      }
    }
    alert(`Ваш ответ: ${x}`);
  } else {
    alert("Введите число и знак операции!!!");
  }
};
calc();
