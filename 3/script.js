'use strict';

const title = prompt("Как называется ваш проект?");

const screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');

const screenPrise = +prompt('Сколько будет стоить данная работа?', '12000');

const adaptive = prompt('Нужен ли адаптив на сайте?')
if (adaptive == 'да') {
    console.log('адаптив нужен');
}
else if (adaptive == 'нет') {
    console.log('адаптив не нужен');
}
else {
    console.log('Значение не верно');
}

const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = prompt("Сколько это будет стоить?");

const fullPrice = screenPrice + servicePrice1 + servicePrice2;

const rollback = fullPrice * 0.10;
const servicePercentPrice = Math.ceil(fullPrice - rollback);
console.log(servicePercentPrice)



if (fullPrice > 30000) {
    console.log('Даем скидку в 10%');
} else if (fullPrice >= 15000 && fullPrice <= 30000) {
    console.log('Даем скидку в 5%');
} else if (fullPrice < 15000 && fullPrice >= 0) {
    console.log('Скидка не предусмотрена')
} else if (fullPrice < 0) {
    console.log('Что-то пошло не так')
}


