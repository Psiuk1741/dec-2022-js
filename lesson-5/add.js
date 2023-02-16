//Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let minNumberOfThree = (a,b,c) => {
    if(a<b && a<c){
        return a;
    }
    else if(b<c){
        return b;
    }
    else {return c;}
}

console.log(minNumberOfThree(1, 3, 0))

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let maxNumberOfThree = (a,b,c) => {

    if(a>b && a>c){
        return a;
    }
    else if(b>c){
        return b;
    }
    else {return c;}
}

console.log(maxNumberOfThree(1, 7, 5))


// - створити функцію яка повертає найбільше число з масиву
let arr = [1, 9, 5, 0, 7];
let maxNum = (numbers) => {
    let max = numbers[0];
    for (const number of numbers) {
        if(max < number){
            max = number;
        }
    }
    return max;
}

console.log(maxNum(arr));


// - створити функцію яка повертає найменьше число з масиву

let minNum = (numbers) => {
    let max = numbers[0];
    for (const number of numbers) {
        if(max > number){
            max = number;
        }
    }
    return max;
}

console.log(minNum(arr));



// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sum = (arr) => {
    let summ=0;
    for (let i = 0; i < arr.length; i++) {
        summ += arr[i];
    }
    return summ;
}

console.log(sum(arr))




// - Дано натуральное число n. Выведите все числа от 1 до n.

let printer = (n) =>{
    for (let i = 1; i < n+1; i++) {
        console.log(i);
    }
}

printer(2)


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let printerAB = (a, b) =>{
    if(a<b){
    for (let i = a; i <= b; i++) {
        console.log(i);
    }}
    else if(a>b){
        for (let i = a; i >= b; i--) {
            console.log(i);
        }
    }
}
printerAB(5, 2)


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let array = [1, 5, 7, 9, 10]

let swapper = (n, i) => {
    if(i < n.length-1 && i >= 0) {
        let x = n[i];
        n[i] = n[i + 1];
        n[i + 1] = x;
        return n;
    }
    else{
        return 'error'
    }
}

console.log(swapper(array, 1))


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]   1 6 0 0 3   1 6 0 3 0
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

array = [0,0,1,0];

let swapperZero = (arr) =>{

    const arrSort = [];
    for (const item of arr) {
        if(item !== 0){
            arrSort[arrSort.length] = item;
        }
    }
    for (const item of arr) {
        if(item === 0){
            arrSort[arrSort.length] = item;
        }
    }

    return arrSort;

}

console.log(swapperZero(array))