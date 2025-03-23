// Элементы ДОМ
const inputMoney = document.querySelector('input[name=money]');
const inputInterest = document.querySelector('input[name=interest]');
const moneyBefore = document.querySelector('#money-before');
const moneyAfter = document.querySelector('#money-after');
const inputMonth = document.querySelector('select[name=months]');
const indicator = document.querySelector('#height-after');

// Глобальные переменные
let initial = inputMoney.value;
let interest = inputInterest.value / 100;
let month = inputMonth.value;

moneyBefore.innerHTML = inputMoney.value;
sumChange();

// Выводы
inputInterest.oninput = function() {
  interest = inputInterest.value / 100;
  sumChange();
}

inputMonth.onchange = function() {
  month = inputMonth.value;
  sumChange();
}

inputMoney.oninput = function(){
  initial = inputMoney.value;
  moneyBefore.innerHTML = inputMoney.value;
  sumChange();
}

// формула расчета и отрисовка диаграммы
function sumChange () {
  moneyAfter.innerHTML = ((initial * interest / 12 * month) + initial * 1).toFixed(0);
  let percent = interest * 100 / 12 * month;
  if (percent > 100) {
     percent = 100;
  };
  if (initial <= 0){
    percent = 0;
  };
  indicator.style.height = `${percent}%`;
}

// // тесты
// let years = month / 12;

// // формула для учета годовой капитализации
// console.log(Math.round(initial * (1 + interest) ** years));

// // формула без учета годовой капитализации
// console.log(Math.round(initial * interest / 12 * month) + initial * 1);

// inputMoney.onkeydown = function(event){
//   if (event.key == 'Enter'){
//     console.log(Math.round(initial * interest / 12 * month) + initial * 1);
//   }
// }