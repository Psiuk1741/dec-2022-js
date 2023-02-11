
//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
console.log('створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б')
function squareRectangle(a, b){
    return a * b;
}
console.log(squareRectangle(2,4));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
console.log('створити функцію яка обчислює та повертає площу кола з радіусом r')
function squareCircle(r){
    return Math.PI * Math.pow(r,2);
}

console.log(squareCircle(2));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
console.log('створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r')
function squareCylinder(h, r){
    return  2 * Math.PI * r * h;
}

console.log(squareCylinder(2, 2));


// - створити функцію яка приймає масив та виводить кожен його елемент
console.log('створити функцію яка приймає масив та виводить кожен його елемент')
let array = [1, 4, 6, 7, 8];
function print(arr){
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}

print(array);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(str){
    document.write(`<p> ${str} </p>`);
}

paragraph('I love JS and Okten School');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ULandLI(str){
    document.write(`<ul>
    <li>${str}</li>
    <li>${str}</li>
    <li>${str}</li>
    </ul>`)
}

ULandLI('I love Js');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ul(str, n){
    document.write(`<ul>`);
    for (let i = 0; i < n; i++) {
        document.write(`<li>${str}</li>`);
    }
    document.write(`</ul>`);
}

ul('Lorem ipsum', 2);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
PrimitiveArr = [true, 'h5j5', 6, false, '66'];
function createList(arr){
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write(`</ul>`);
}

createList(PrimitiveArr);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id: 1, name:'Vasya', age: 22},
    {id: 2, name:'Katya', age: 23},
    {id: 3, name:'Dima', age: 25},
    {id: 4, name:'Ivan', age: 19},
    {id: 5, name:'Olya', age: 25},
    {id: 6, name:'Oleg', age: 39}
]

function user(arr){
    for (const arrElement of arr) {
        document.write(`<div style="background: lightgray; margin: 30px">
         <h3> id - ${arrElement.id} </h3>
         <h3> name - ${arrElement.name} </h3>
         <h3> age - ${arrElement.age} </h3>
         </div>`)
    }
}

user(users);



// - створити функцію яка повертає найменьше число з масиву
console.log('створити функцію яка повертає найменьше число з масиву')
array = [1, 4, 6, 7, 0, 4, 6 ,-1, 7, -3, 1, -5];
function MIN(arr){
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]<min){
            min = arr[i];
        }
    }
    return min;
}

console.log(MIN(array))


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
console.log('створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.')
array = [1, 4, 6];

function sum(arr){
    let summ=0;
    for (let i = 0; i < arr.length; i++) {
        summ += arr[i];
    }
    return summ;
}

console.log(sum(array))


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
console.log('створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах');


array = [11,22,33,44,55,66,77,88,99];

function swap(arr, a, b){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(i === a && j === b){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(swap(array, 0, 1));



// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

console.log('Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)')
let currencyValue = [
    {currency:'USD',value:40},
    {currency:'EUR',value:42}
]

function exchange(sumUAH,currencyValues,exchangeCurrency){
    for (let i = 0; i < currencyValues.length; i++) {
        if(currencyValues[i].currency === exchangeCurrency){
            return  sumUAH/currencyValues[i].value;
        }

    }
}

console.log(currencyValue);

console.log(exchange(10000, currencyValue,'USD'));