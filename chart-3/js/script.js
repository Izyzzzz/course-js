'use strict';

let money, time;

//Функция первоначальных данных (бюджет, дата)
function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
};
start();

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

// Функция введение обязательных статей расхода
function chooseExpenses(){
    // Цыкл for
    for (let i = 0; i < 2; i++) {
        let expensesName = prompt("Введите обязательную статью расходов в этом месяце", ""),
            expensesMoney = +prompt("Во сколько обойдется?", "");
        if ( (typeof(expensesName))=== 'string' && Number(expensesMoney) === expensesMoney
            && (typeof(expensesName)) != null && (typeof(expensesMoney)) != null 
            && expensesName != '' && expensesMoney != '' && expensesName.length < 50) {
                console.log("done");
                appData.expenses[expensesName] = expensesMoney;
        } else {
            i--;
            console.log("none");
        }
    }    
};
chooseExpenses();

//Функция для определения необязательных расходов
function chooseOptExpenses(){
    for (let i =0; i < 3; ++i){
        let optExpensesName = prompt("Статья необязательных расходов?", "");
        if ((typeof(optExpensesName))=== 'string' && (typeof(optExpensesName)) != null
            && optExpensesName != '' && optExpensesName.length < 50){
            appData.optionalExpenses[i + 1] = optExpensesName;
        } else {
            i--;
        }
    }
};
chooseOptExpenses();

//Функция дневного бюджета
function detectDayBudget() {
    appData.moneyPerDay  = (appData.moneyData / 30).toFixed();
    alert("Бюджет на 1 день - " + appData.moneyPerDay);
};
detectDayBudget();

//Функция расчета достатка
function detectLevel() {
    if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
};
detectLevel();

//Функция расчета депозита
function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сума накоплений?"),
            percent = +prompt("Под какой процент?");
        
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
};
checkSavings();

// Проверка записи данных
// console.log(money, time);
console.log(appData.moneyData, appData.timeData);
console.log(appData.expenses);
console.log(appData.optionalExpenses);
console.log(appData.moneyPerDay);