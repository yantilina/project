'use strict';


const servicePrice1 = 1000;
const servicePrice2 = 2000;
const screenPrice = 1000;
const totalPrice = 1000;

const title = ' КаЛьКулятор Верстки';


const allServicePrices = function () {
    const getAllServicePrices = function (a, b) {
        return a + b;
    }
    return getAllServicePrices(servicePrice1, servicePrice2)
}

function getFullPrice(screenPrice, allServicePrices) {
    const fullPrice = screenPrice + allServicePrices;
    return fullPrice;
}

const getTitle = function () {
    const trimTitle = title.trim();
    const newTitle = (trimTitle[0].toUpperCase() + trimTitle.substring(1).toLowerCase());
    return newTitle;
}

const getServicePercentPrices = function (totalPrice) {
    const rollback = totalPrice * 0.10;
    const servicePercentPrice = totalPrice - rollback;
    return servicePercentPrice;
}

const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return "Даем скидку в 10%"
    } else if (price >= 15000 && price <= 30000) {
        return 'Даем скидку в 5%'
    } else if (price < 15000 && price >= 0) {
        return 'Скидка не предусмотрена'
    } else {
        return 'Что-то пошло не так'
    }
}


const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}


console.log(allServicePrices());
console.log(getFullPrice(screenPrice, allServicePrices));
console.log(getTitle())
console.log(getServicePercentPrices(totalPrice))
console.log(getRollbackMessage(fullPrice))
