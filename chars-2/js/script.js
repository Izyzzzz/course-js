'use strict';

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),    
    appData = {
        moneyData: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };

// Цыкл for
for (let i = 0; i < 2; i++) {
    let expensesName = prompt("Введите обязательную статью расходов в этом месяце", ""),
        expensesMoney = prompt("Во сколько обойдется?", "");
    if ( (typeof(expensesName))=== 'string' && (typeof(expensesName)) != null && (typeof(expensesMoney)) != null 
        && expensesName != '' && expensesMoney != '' && expensesName.length < 50) {
            console.log("done");
            appData.expenses[expensesName] = expensesMoney;
    } else {
        i--;
        console.log("none");
    }
    
};

// Цыкл while
// let i = 0;
// while ( i < 2 ) {
//     let expensesName = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         expensesMoney = prompt("Во сколько обойдется?", "");
//     if ( (typeof(expensesName))=== 'string' && (typeof(expensesName)) != null && (typeof(expensesMoney)) != null 
//         && expensesName != '' && expensesMoney != '' && expensesName.length < 50) {
//             console.log("done");
//             appData.expenses[expensesName] = expensesMoney;
//     } else {
//         i--;
//         console.log("none");
//     };
//     i++;
    
// };

// Цыкл do while
// let i = 0;
// do {
//     let expensesName = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         expensesMoney = prompt("Во сколько обойдется?", "");
//     if ( (typeof(expensesName))=== 'string' && (typeof(expensesName)) != null && (typeof(expensesMoney)) != null 
//         && expensesName != '' && expensesMoney != '' && expensesName.length < 50) {
//             console.log("done");
//             appData.expenses[expensesName] = expensesMoney;
//     } else {
//         i--;
//         console.log("none");
//     };
//     i++;
    
// }
// while ( i < 2 );

appData.moneyPerDay  = appData.moneyData / 30;

alert("Бюджет на 1 день - " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}

// Проверка записи данных
// console.log(money, time);
console.log(appData.moneyData, appData.timeData);
console.log(appData.expenses);
console.log(appData.moneyPerDay);