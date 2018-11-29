'use strict';

let age = document.getElementById('age'),
    res = document.getElementById('res');

age.addEventListener('input', function() {
    showUser.apply(age, ['Jone', 'Mark']);
});

function showUser(surname, name) {
    res.innerHTML = ("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

showUser.apply(age, ['Jone', 'Mark']);


