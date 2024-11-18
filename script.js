const title = 'урок 2';
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 75879.6767587;
const rollback = (Math.random() * 100) + 1;
const fullPrice = 500000;
const adaptive = true;


console.log(title);
console.log(fullPrice);
console.log(adaptive);

console.log(screens.length);

console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);

console.log(screens.toLowerCase());
console.log(screens.split(", "));

console.log(fullPrice * (rollback / 100));