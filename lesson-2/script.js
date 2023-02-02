// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [1, 'yjt', 4, true, 6, 'erhre', '76', 42, false, 99];

console.log(arr.length);
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'qqq',
    pageCount: 234,
    genre: 'www'
}

let book2 = {
    title: 'eee',
    pageCount: 777,
    genre: 'rrr'
}

let book3 = {
    title: 'ttt',
    pageCount: 123,
    genre: 'yyy'
}

console.log(book1);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється
// масивом. Кожен автор має поля name та age.

let book11 = {
    title: 'qqq',
    pageCount: 234,
    genre: 'www',
    authors:{
        name: 'Vasya',
        age: 53
    }
}
console.log(book11);

let book12 = {
    title: 'eee',
    pageCount: 777,
    genre: 'rrr',
    authors:{
        name: 'Ivan',
        age: 44
    }
}
console.log(book12);

let book13 = {
    title: 'ttt',
    pageCount: 123,
    genre: 'yyy',
    authors:{
        name: 'Styopka',
        age: 77
    }
}
console.log(book13);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль
// пароль кожного користувача

let users = [
     {name: 'QQQ',username: 'qqq',password: '111'},
     {name: 'WWW',username: 'www',password: '222'},
     {name: 'RRR',username: 'rrr',password: '333'},
     {name: 'TTT',username: 'ttt',password: '444'},
     {name: 'YYY',username: 'yyy',password: '555'},
     {name: 'UUU',username: 'uuu',password: '666'},
     {name: 'III',username: 'iii',password: '777'},
     {name: 'OOO',username: 'ooo',password: '888'},
     {name: 'PPP',username: 'ppp',password: '999'},
     {name: 'AAA',username: 'aaa',password: '000'}
]

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що
//     дорівнює 1, 0, -3

let x;
x=1;
// x=0;
// x=-3;
if(x !== 0){
    console.log('Вірно');
}else{
    console.log('Невірно')
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число
// (в першу, другу, третю или четверту частину години).
let time;
time = 15;
if(time >=0 && time < 16){
    console.log('Перша чверть');
} else if(time >=16 && time < 31){
    console.log('Друга чверть');
} else if(time >=31 && time < 46){
    console.log('Третя чверть');
}else if(time >=46 && time < 60){
    console.log('Четверта чверть');
}else{
    console.log('Error');
}



// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).
let day;
day = 14;
if(day >=1 && day < 11){
    console.log('Перша декада');
} else if(day >=11 && day < 21){
    console.log('Друга декада');
} else if(day >=21 && day < 32){
    console.log('Третя декада');
}else{
    console.log('Error');
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayNumber;
dayNumber = 4;
switch (dayNumber){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Error')
}


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
let a, b;
a = 3;
b = 3;

if(a > b){
    console.log('Max value ' + a );
} else if (a < b){
    console.log('Max value ' + b );
} else {
    console.log('Equal value' );}




//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється
//         falsy (хибноподібні, тобто приводиться до false)

let xxx = NaN;
xxx = xxx || "default";
console.log(xxx);


//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити
//     кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(coursesAndDurationArray[0].monthDuration > 5){
     console.log('Super');
}else {
    console.log('Bad');
}

if(coursesAndDurationArray[1].monthDuration > 5){
    console.log('Super');
}else {
    console.log('Bad');
}

if(coursesAndDurationArray[2].monthDuration > 5){
    console.log('Super');
}else {
    console.log('Bad');
}

if(coursesAndDurationArray[3].monthDuration > 5){
    console.log('Super');
}else {
    console.log('Bad');
}

if(coursesAndDurationArray[4].monthDuration > 5){
    console.log('Super');
}else {
    console.log('Bad');
}

if(coursesAndDurationArray[5].monthDuration > 5){
    console.log('Super');
}else {
    console.log('Bad');
}