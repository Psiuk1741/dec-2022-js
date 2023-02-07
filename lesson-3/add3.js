//1. Створити пустий масив та :
let emptyArr = [];

//        a. заповнити його 50 парними числами за допомоги циклу.
console.log('a. заповнити його 50 парними числами за допомоги циклу.')
for (let i = 2; i < 102; i+=2) {
    emptyArr[i]=i;
    console.log(emptyArr[i]);
}

//        b. заповнити його 50 непарними числами за допомоги циклу.
console.log('a. заповнити його 50 непарними числами за допомоги циклу.')
for (let i = 1; i < 100; i+=2) {
    emptyArr[i]=i;
    console.log(emptyArr[i]);
}

//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
console.log('c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)')
emptyArr = [];
for (let i = 0; i < 20; i++) {
    emptyArr[i] =Math.floor(Math.random()*100);
    console.log(emptyArr[i]);

}


//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
console.log('c. Заповнити масив 20ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)')
emptyArr = [];
for (let i = 0; i < 20; i++) {
    emptyArr[i] =Math.floor(Math.random()*(732-8))+8;
    console.log(emptyArr[i]);

}
//  2. Вивести за допомогою console.log кожен третій елемен
console.log('2. Вивести за допомогою console.log кожен третій елемен')
for (let i = 0; i < emptyArr.length; i++) {
    if(i % 3 === 0) {
        const emptyArrElement = emptyArr[i];
        console.log(emptyArrElement);
    }
}


//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
console.log('3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.')
for (let i = 0; i < emptyArr.length; i++) {
    if(i % 3 === 0) {
        if(emptyArr[i] % 2 === 0) {
            const emptyArrElement = emptyArr[i];
            console.log(emptyArrElement);
        }
    }
}


//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
console.log('4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив')
let newArr = [];
for (let i = 0; i < emptyArr.length; i++) {
    if(i % 3 === 0) {
        if(emptyArr[i] % 2 === 0) {
            newArr.push(emptyArr[i]);
        }
    }
}
console.log(newArr);


//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
console.log('5. Вивести кожен елемент масиву, сусід справа якого є парним')
console.log(emptyArr);
for (let i = 0; i < emptyArr.length; i++) {
    if(emptyArr[i+1] % 2 === 0){
        console.log(emptyArr[i]);
    }

}

//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
console.log('Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.')
let arrNum = [100,250,50,168,120,345,188];

let x=0;
for (let i = 0; i < arrNum.length; i++) {
    x += arrNum[i];
}
console.log(x/arrNum.length);

//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
console.log('7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.')
emptyArr = [];
for (let i = 0; i < 20; i++) {
    emptyArr[i] =Math.floor(Math.random()*10)+1;
    console.log(emptyArr[i]);
}

console.log('ПОМНОЖЕНО НА 5')
let newemptyArr = [];
for (let i = 0; i < emptyArr.length; i++) {
    newemptyArr[i] = emptyArr[i] * 5;
}
console.log(newemptyArr);


//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
console.log('Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.')
let arr8 = ['21', 1, true, '12', 2, false, 4, true, 'tyjy', 3];
let newArr8 = [];
for (let i = 0; i < arr8.length; i++) {
    if(typeof arr8[i] === `number`) {
        const arr8Element = arr8[i];
        newArr8.push(arr8Element);
    }
}
console.log(newArr8);


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]
console.log('З\'єднати в один об\'єкт користувача та місто з відповідними "id" та "user_id"')
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
for (const user of usersWithId) {
    for (const city of citiesWithId) {
        if (user.id === city.user_id){
            user.address = city;
        }
    }
}
console.log(usersWithId);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
console.log('Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.')
let arr10 = [1, 3, 4, 6, 3, 2, 7, 8, 1, 5];
for (let i = 0; i < arr10.length; i++) {
    if(arr10[i] % 2 === 0){
        console.log(arr10[i]);
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
console.log('Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.');
arr10 = [1, 3, 4, 6, 3, 2, 7, 8, 1, 5];
let emptyArr10 = [];
for (let i = 0; i < arr10.length; i++) {
    emptyArr10[i] = arr10[i];
}
console.log(emptyArr10);


let words =  [ 'a', 'b', 'c'];
let str = '';
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
console.log(' Дано масив: [ \'a\', \'b\', \'c\'] . За допомогою циклу for зібрати всі букви в слово.')
for (let i = 0; i < words.length; i++) {
    str += words[i];
}
console.log(str);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
console.log('Дано масив: [ \'a\', \'b\', \'c\'] . За допомогою циклу while зібрати всі букви в слово.');
str = '';
i = 0;
while (i < words.length){
    str += words[i];
    i++;
}
console.log(str);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
console.log('Дано масив: [ \'a\', \'b\', \'c\'] . За допомогою циклу for of зібрати всі букви в слово.')
str = '';
for (const strElement of words) {
    str += strElement;
}
console.log(str);