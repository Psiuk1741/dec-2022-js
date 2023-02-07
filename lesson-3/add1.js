//--створити масив з:
// - та вивести його в консоль

// - з 5 числових значень
let arr1 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr1.length; i++) {
    const arr1Element = arr1[i];
    console.log(arr1Element);
}

// - з 5 стічкових значень
let arr2 = ['greh', 'jtyjy', 'ukyk', 'hmhgmg', 'nvbnbvn'];
for (let i = 0; i < arr2.length; i++) {
    const arr2Element = arr2[i];
    console.log(arr2Element);
}

// - з 5 значень стрічкового, числового та булевого типу
let arr3 = ['rth', 65, true, false, '33'];
for (let i = 0; i < arr3.length; i++) {
    const arr3Element = arr3[i];
    console.log(arr3Element);
}

//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arr4 = [];
for (let i = 0; i < 10; i++) {
    arr4[i] = i;
    console.log(arr4[i]);
}


// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let arr5 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
console.log('1. перебрати його циклом while')
let i = 0;
while (i < arr5.length) {
    console.log(arr5[i]);
    i++;
}

// 2. перебрати його циклом for
console.log('2. перебрати його циклом for')
for (let j = 0; j < arr5.length; j++) {
    const arr5Element = arr5[j];
    console.log(arr5Element);
}

// 3. перебрати циклом while та вивести числа тільки з непарним індексом
console.log('3. перебрати циклом while та вивести числа тільки з непарним індексом')
i = 0;
while (i < arr5.length) {
    if (i % 2 !== 0) {
        console.log(arr5[i]);
    }
    i++;
}

// 4. перебрати циклом for та вивести числа тільки з непарним індексом
console.log('4. перебрати циклом for та вивести числа тільки з непарним індексом')
for (let j = 0; j < arr5.length; j++) {
    if (j % 2 !== 0) {
        const arr5Element = arr5[j];
        console.log(arr5Element);
    }
}


// 5. перебрати циклом while та вивести числа тільки парні значення
console.log('5. перебрати циклом while та вивести числа тільки парні значення')
i = 0;
while (i < arr5.length) {
    if (arr5[i] % 2 === 0) {
        console.log(arr5[i]);
    }
    i++;
}

// 6. перебрати циклом for та вивести числа тільки парні значення
console.log('6. перебрати циклом for та вивести числа тільки парні значення')
for (let j = 0; j < arr5.length; j++) {
    if (arr5[j] % 2 === 0) {
        const arr5Element = arr5[j];
        console.log(arr5Element);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"
console.log('7. замінити кожне число кратне 3 на слово "okten"')

for (let j = 0; j < arr5.length; j++) {
    if (arr5[j] % 3 === 0) {
        arr5[j] = "okten";
        console.log(arr5[j]);

    }
}
console.log(arr5);


// 8. вивести масив в зворотньому порядку.
console.log(' 8. вивести масив в зворотньому порядку.')
arr5 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let j = arr5.length - 1; j >= 0; j--) {
    const arr5Element = arr5[j];
    console.log(arr5Element);
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 1. перебрати його циклом while
console.log('1. перебрати його циклом while')
i = arr5.length - 1;
while (i >= 0) {
    console.log(arr5[i]);
    i--;
}
// 2. перебрати його циклом for
console.log('2. перебрати його циклом for')
for (let j = arr5.length - 1; j >= 0; j--) {
    const arr5Element = arr5[j];
    console.log(arr5Element);
}


// 3. перебрати циклом while та вивести числа тільки з непарним індексом
console.log('3. перебрати циклом while та вивести числа тільки з непарним індексом')
i = arr5.length - 1;
while (i >= 0) {
    if (i % 2 !== 0) {
        console.log(arr5[i]);
    }
    i--;
}

// 4. перебрати циклом for та вивести числа тільки з непарним індексом
console.log('4. перебрати циклом for та вивести числа тільки з непарним індексом')
for (let j = arr5.length - 1; j >= 0; j--) {
    if (j % 2 !== 0) {
        const arr5Element = arr5[j];
        console.log(arr5Element);
    }
}

// 5. перебрати циклом while та вивести числа тільки парні значення
console.log('5. перебрати циклом while та вивести числа тільки парні значення')
i = arr5.length - 1;
while (i >= 0) {
    if (arr5[i] % 2 === 0) {
        console.log(arr5[i]);
    }
    i--;
}


// 6. перебрати циклом for та вивести числа тільки парні значення
console.log('6. перебрати циклом for та вивести числа тільки парні значення')
for (let j = arr5.length - 1; j >= 0; j--) {
    if (arr5[j] % 2 === 0) {
        const arr5Element = arr5[j];
        console.log(arr5Element);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"
console.log('7. замінити кожне число кратне 3 на слово "okten"')

for (let j = arr5.length - 1; j >= 0; j--) {
    if (arr5[j] % 3 === 0) {
        arr5[j] = "okten";
        console.log(arr5[j]);
    }
}
console.log(arr5);

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
console.log('- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.')
let arr10Num = [1, 3, 5, 2, 7, 9, 17, 56, 23, 10];
for (let j = 0; j < arr10Num.length; j++) {
    const arr10NumElement = arr10Num[j];
    console.log(arr10NumElement);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
console.log(' Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.')
let arr10Str = ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core'];
for (let j = 0; j < arr10Str.length; j++) {
    const arr10StrElement = arr10Str[j];
    console.log(arr10StrElement);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
console.log('Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.')
let arr10Other = [1, 5, true, 'htrh', false, 7557, 'mhjmjh', true, 68, 'oooo']
for (let j = 0; j < arr10Other.length; j++) {
    const arr10OtherElement = arr10Other[j];
    console.log(arr10OtherElement);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
console.log('- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи')
for (let j = 0; j < arr10Other.length; j++) {
    if (typeof arr10Other[j] === `boolean`) {
        const arr10OtherElement = arr10Other[j];
        console.log(arr10OtherElement);
    }

}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
console.log('Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи')
for (let j = 0; j < arr10Other.length; j++) {
    if (typeof arr10Other[j] === `number`) {
        const arr10OtherElement = arr10Other[j];
        console.log(arr10OtherElement);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
console.log('Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи')
for (let j = 0; j < arr10Other.length; j++) {
    if (typeof arr10Other[j] === `string`) {
        const arr10OtherElement = arr10Other[j];
        console.log(arr10OtherElement);
    }
}




// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
console.log(' Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.')
let emptyArr = [];

emptyArr[0] = 1;
emptyArr[1] = true;
emptyArr[2] = false;
emptyArr[3] = 'hkhkgh';
emptyArr[4] = 765;
emptyArr[5] = true;
emptyArr[6] = 452;
emptyArr[7] = '254';
emptyArr[8] = false;
emptyArr[9] = 'mmmm';

for (let j = 0; j < emptyArr.length; j++) {
    const emptyArrElement = emptyArr[j];
    console.log(emptyArrElement);
}

// - Створити цикл for на 10 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log('Створити цикл for на 10 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write')
document.write('<h2>Створити цикл for на 10 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write</h2>')
for (let i = 1; i < 11; i++){
    console.log(i);
    document.write(`krok: ${i} <br>`);
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log('Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write')
document.write('<h2>Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write</h2>')
for (let i = 1; i < 101; i++){
    console.log(i);
    document.write(`krok: ${i} <br>`);
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
console.log('Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write')
document.write('<h2>Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write</h2>')
for (let i = 1; i < 101; i += 2){
    console.log(i);
    document.write(`krok: ${i} <br>`);
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
console.log('Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write')
document.write('<h2>Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write</h2>')
for (let i = 1; i < 101; i ++){
    if( i % 2 === 0) {
        console.log(i);
        document.write(`krok: ${i} <br>`);
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
console.log('Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write')
document.write('<h2>Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write</h2>')
for (let i = 1; i < 101; i ++){
    if( i % 2 !== 0) {
        console.log(i);
        document.write(`krok: ${i} <br>`);
    }
}

// створити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {
        name: 'Заповіт',
        pageCount: 2,
        authors: [{name:'QWE'}],
        genres: ['qqq', 'www'],
    },
    {
        name: 'ETThytjtykuylylghghmgE',
        pageCount: 10,
        authors: [{name:'ERTY'}, {name:'Mgrre'}],
        genres: ['uuiu'],
    },
    {
        name: 'kuylylylyujy',
        pageCount: 42,
        authors: [ {name:'Mum'}, {name:'jLllfe'}],
        genres: ['popo', 'aeder', 'grjyjy'],
    },
    {
        name: 'Rom',
        pageCount: 18,
        authors: [ {name:'pooipo'}],
        genres: ['iegwe', 'kyure'],
    },
    {
        name: 'Komand',
        pageCount: 200,
        authors: [ {name:'Wuirt'}, {name:'Andhtr'}],
        genres: ['Kikak'],
    },
    {
        name: 'uiuijyt',
        pageCount: 120,
        authors: [ {name:'Oat'}, {name:'Momn'}],
        genres: ['Gutt'],
    },
]
// -знайти найбльшу книжку.

console.log('знайти найбльшу книжку.')
let x =0;
for (let j = 0; j < books.length; j++)
{
    if (books[j].pageCount > x) {
        x = books[j].pageCount;
    }
}
console.log(x);

// - знайти книжку/ки з найбільшою кількістю жанрів
console.log('знайти книжку/ки з найбільшою кількістю жанрів')
 x =0;
let id;
for (let j = 0; j < books.length; j++)
{
    if (books[j].genres.length > x) {
        x = books[j].genres.length;
        id = j;
    }
}
console.log(books[id]);


// - знайти книжку/ки з найдовшою назвою
console.log('знайти книжку/ки з найдовшою назвою')
x =0;
id =0;
for (let j = 0; j < books.length; j++)
{
    if (books[j].name.length > x) {
        x = books[j].name.length;
        id = j;
    }
}
console.log(books[id]);


// - знайти книжку/ки які писали 2 автори
console.log('знайти книжку/ки які писали 2 автори')

for (let j = 0; j < books.length; j++)
{
    if (books[j].authors.length === 2) {
        console.log(books[j])
    }
}


// - знайти книжку/ки які писав 1 автор
console.log('знайти книжку/ки які писав 1 автор')

for (let j = 0; j < books.length; j++)
{
    if (books[j].authors.length === 1) {
        console.log(books[j])
    }
}
