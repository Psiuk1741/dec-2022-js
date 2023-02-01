// 1 Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log
console.log('TASK 1');

let a = 'hello';
console.log(a);

let b = 'owu';
console.log(b);

let c = 'com';
console.log(c);

let d = 'ua';
console.log(d);

let e = 1;
console.log(e);

let f = 10;
console.log(f);

let g = -999;
console.log(g);

let h = 123;
console.log(h);

let i = 3.14;
console.log(i);

let j = 2.7;
console.log(j);

let k = 16;
console.log(k);

let l = true;
console.log(l);

let m = false;
console.log(m);

// 2 Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
console.log('TASK 2');
let firstName = 'Dmytro', middleName = 'Yuriyovych', lastName = 'Psiuk';
console.log(`${firstName} ${middleName} ${lastName}`);

// 3 За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.   let a = 100; let b = '100'; let c = true;
console.log('TASK 3');
let a1 = 100;
let b1 = '100';
let c1 = true;
console.log(typeof a1, a1);
console.log(typeof b1, b1);
console.log(typeof c1, c1);

// 4 За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
console.log('TASK 4');
let name = prompt('Як Вас звати?', '');
let pobatkovi = prompt('Як Вас по-Батькові?', '');
let year = +prompt('Введіть рік народження', '0');

console.log(`${name} ${pobatkovi} ${year}`);
