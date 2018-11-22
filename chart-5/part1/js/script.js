//Перемещение пунктов меню
let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item');

menu.insertBefore(menuItem[2], menuItem[1]);

// Добавление пункта меню
let li = document.createElement('li'),
    text = document.createTextNode('Пятый пункт');

li.classList.add('menu-item');

menu.appendChild(li);

let menuItemTwo = document.querySelectorAll('.menu-item');

menuItemTwo[4].appendChild(text);

//Замена картинки заднего фона
document.body.style.backgroundImage = 'url(./img/apple_true.jpg)';

//Замена заглавия
let title = document.getElementById('title'),
    titleText = title.innerText;

let word = titleText.split(' ');

title.textContent = word[0] + ' ' +  word[1] + ' ' +  word[2] + ' ' + 'подлинную'+ ' ' +  word[3] + ' ' +  word[4] ;

//Удаление рекламы
let column = document.querySelectorAll('.column'),
    adv = document.querySelector('.adv');

column[1].removeChild(adv);

//Вопрос
let question = prompt('Какое у вас отношение к технике Apple'),
    answer = document.getElementById('prompt');

answer.textContent = question;

