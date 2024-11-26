'use strict';


let allServicePrices
let service1
let service2

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function () {
    screenPrise = prompt('Сколько будет стоить данная работа?')
    while (!isNumber(screenPrise)) {
        screenPrise = prompt('Сколько будет стоить данная работа?')
    }
}

const getAllServicePrices = function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?")
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?")
        }
        sum += +prompt("Сколько это будет стоить?")
    }
    return sum
}

allServicePrices = getAllServicePrices()

console.log("allServicePrices", allServicePrices)







