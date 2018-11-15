'use strict';

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    expensesName = prompt("Введите обязательную статью расходов в этом месяце", ""),
    expensesMoney = prompt("Во сколько обойдется?", ""),
    appData = {
        moneyData: money,
        timeData: time,
        expenses: {
            name: expensesName,
            money: expensesMoney
        },
        optionalExpenses: {},
        income: [],
        savings: false
    };

alert("Бюджет на 1 день - " + money / 30);

// Проверка записи данных
// console.log(money, time);
// console.log(appData.moneyData, appData.timeData);
// console.log(appData.expenses.name, appData.expenses.money);