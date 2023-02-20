//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';

console.log(str1.length);
console.log(str2.length);
console.log(str3.length);


// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

console.log(str1 = str1.toUpperCase()); // тут перевизначу ті змінні, щоб лишній раз не писати
console.log(str2 = str2.toUpperCase());
console.log(str3 = str3.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(str1.toLowerCase());
console.log(str2.toLowerCase());
console.log(str3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = '    dirty string     '

console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
str = 'Ревуть воли як ясла повні';

let arr = (str) => {
    return str.split(' ');
}
console.log(arr(str));


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map перетворити всі об'єкти в масиві на стрінгові.

let array = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

let stringConvert = array.map(item => item.toString());

console.log(stringConvert);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого
// до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

console.log('створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого')
let nums = [11, 21, 3, 1, 8, -13, -2, 2]

function sorter(arr, type) {
    if (type === 'ascending') {
        arr.sort((a, b) => a - b);
    }

    if (type === 'descending') {
        arr.sort((a, b) => b - a);
    }
}

sorter(nums, 'ascending');
console.log(nums);

sorter(nums, 'descending');
console.log(nums);


// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sortCourses = coursesAndDurationArray.sort((a, b) => {
    if (a.monthDuration > b.monthDuration) {
        return 1;
    }

    if (a.monthDuration < b.monthDuration) {
        return -1;
    }

    if (a.monthDuration === b.monthDuration) {
        return 0;
    }
})

console.log(sortCourses);


let filterCourses = coursesAndDurationArray.filter(item => item.monthDuration > 5);
console.log(filterCourses);

console.log(coursesAndDurationArray.map((value, index) => {
    return {id: index + 1, title: value.title, monthDuration: value.monthDuration}
}));

//  =========================
//  описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//

cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
value = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
color = ['red', 'black'];

coloda = [];

for (let i = 0; i < cardSuit.length; i++) {
    let colorC;
    if (cardSuit[i] === 'spade' || cardSuit[i] === 'clubs') {
        colorC = color[1];
    } else {
        colorC = color[0]
    }
    for (let j = 0; j < value.length; j++) {
        let card = {'suit': cardSuit[i], 'value': value[j], 'color': colorC};
        coloda.push(card);
    }
}
console.log(coloda);


let findSpadeA = coloda
    .find(value => value.value === 'A' && value.suit === 'spade');
console.log(findSpadeA);

let filterSix = coloda.filter(value => value.value === '6');
console.log(filterSix);

let filterRed = coloda.filter(value => value.color === 'red');
console.log(filterRed);

let filterDiamond = coloda.filter(value => value.suit === 'diamond');
console.log(filterDiamond);


let filterClubs = coloda.filter(value => value.suit === 'clubs' && ['9', '10', 'J', 'Q', 'K', 'A'].includes(value.value));
console.log(filterClubs);

// =========================
//
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

console.log(coloda.reduce((accum, card) => {
        if (card.suit === 'spade') {
            accum.spadesSuit.push(card);
        } else if (card.suit === 'diamond') {
            accum.diamondSuit.push(card);
        } else if (card.suit === 'heart') {
            accum.heartsSuit.push(card);
        } else {
            accum.clubsSuit.push(card);
        }

        return accum;
    }
    , {spadesSuit: [], diamondSuit: [], heartsSuit: [], clubsSuit: []}));


// =========================
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є sass
let findSass = coursesArray.filter((item)=> item.modules.includes('sass'));
console.log(findSass);

// --написати пошук всіх об'єктів, в який в modules є docker
let findDocker = coursesArray.filter((item)=> item.modules.includes('docker'));
console.log(findDocker);
