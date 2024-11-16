let title = 'урок 2';
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 75879.6767587;
let rollback = (Math.random() * 100) + 1;
let fullPrice = 500000;
let adaptive = true;


console.log(title);
console.log(fullPrice);
console.log(adaptive);

console.log(screens.length);

console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);

console.log(screens.toLowerCase());
console.log(screens.split(", "));

console.log(fullPrice * (rollback / 100));