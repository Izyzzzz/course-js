'use strict';

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),    
    appData = {
        moneyData: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };
let expensesNameOne = prompt("Введите обязательную статью расходов в этом месяце", "");
    appData.expenses[expensesNameOne] = prompt("Во сколько обойдется?", "");
let expensesNameTwo = prompt("Введите обязательную статью расходов в этом месяце", "");
    appData.expenses[expensesNameTwo] = prompt("Во сколько обойдется?", "");

alert("Бюджет на 1 день - " + money / 30);

// Проверка записи данных
console.log(money, time);
console.log(appData.moneyData, appData.timeData);
console.log(appData.expenses);