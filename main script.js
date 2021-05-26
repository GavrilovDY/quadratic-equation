"use strict";
function Discriminant(a, b, c) {
  return b * b - 4 * a * c;
}
function showAnswerQuadratic(b, d, a) {
  let x1, x2;
  if (d < 0) alert("К сожалению, у уравнения нет корней.");
  else if (d == 0) {
    x1 = -b / (2 * a);
    alert(`У уравнения один корень x=${x1}`);
  } else {
    x1 = (-b + d ** (1 / 2)) / (2 * a);
    x2 = (-b - d ** (1 / 2)) / (2 * a);
    alert(`У уравнения два корня x1=${x1} и x2=${x2}`);
  }
}
let a, b, c, d;
alert("Квадратное уравнение имеет следующий вид a*x^2+b*x+c=0");
alert("Для вычисления корней уравнения последовательно введите a,b и c");
a = prompt("Сначала введите a=", "");
b = prompt("Теперь введите значение b=", "");
c = prompt("ну и наконец с=", "");
alert(`Ваше уравнение имеет следующий вид ${a}*x^2 + ${b}*x+${c}=0`);
d = Discriminant(a, b, c);
showAnswerQuadratic(b, d, a);
