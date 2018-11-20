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
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let expensesName = prompt("Введите обязательную статью расходов в этом месяце", ""),
                expensesMoney = +prompt("Во сколько обойдется?", "");
            if ( (typeof(expensesName))=== 'string' && Number(expensesMoney) === expensesMoney
                && expensesName != null && expensesMoney != null 
                && expensesName != '' && expensesMoney != '' && expensesName.length < 50) {
                    console.log("done");
                    appData.expenses[expensesName] = expensesMoney;
            } else {
                i--;
                console.log("none");
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay  = (appData.moneyData / 30).toFixed();
        alert("Бюджет на 1 день - " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сума накоплений?"),
                percent = +prompt("Под какой процент?");
            
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },    
    chooseOptExpenses: function() {
        for (let i =0; i < 3; i++){
            let optExpensesName = prompt("Статья необязательных расходов?", "");
            if ((typeof(optExpensesName))=== 'string' && optExpensesName != null
                && optExpensesName != '' && optExpensesName.length < 50){
                appData.optionalExpenses[i + 1] = optExpensesName;
            } else {
                i--;
            }
        }
    },
    chooseIncome: function() {
        for (let i = 0; i < 1; i++) {
            let items = prompt("Что пренесет дополнительный доход? (Перечислети через запятую)", "");
            if ( (typeof(items)) === 'string' && items != null && items != ''){
                appData.income = items.split(', ');
                appData.income.push(prompt('Что то еще?'));
                appData.income.sort();
            } else {
                i--;
            }
        };
        document.body.innerHTML += ('Способы доп. заработка:' + '</br>');
        appData.income.forEach(function(item, i){
            document.body.innerHTML += (i + 1 + '. ' + item + '</br>');
        });
        
    }
};

// Цикл for in
console.log('Наша программа включает в себя данные: ');
for ( let key in appData) {
    console.log(key + ': ' + appData[key]);
}
