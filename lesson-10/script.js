//Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

// let form = document.forms.firstTask;
//
//
// form.onsubmit = function (e){
//     e.preventDefault();
//     let firstName = document.getElementById('firstname').value;
//     let lastName = document.getElementById('lastname').value;
//     let age = document.getElementById('age').value;
//     let div = document.getElementById('first');
//     div.append(firstName + ' ' + lastName + ' ' + age);
//
//
//     document.getElementById('firstname') .value = '';
//     document.getElementById('lastname') .value = '';
//     document.getElementById('age') .value = '';
//
// }


// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде
// додавати до неї +1

// let divForSecond = document.createElement('div');
// divForSecond.innerText='1';
// divForSecond.id = 'second'
//
//
// document.body.appendChild(divForSecond);
//
// window.onload = function (){
//     let number = JSON.parse(localStorage.getItem('number'))
//     const divNum = document.getElementById('second');
//     divNum.innerText = number;
//     number ++;
//     localStorage.setItem('number', JSON.stringify(number))
//     divNum.innerText = JSON.parse(localStorage.getItem('number'))
//     if(number >= 5){
//         localStorage.removeItem('number');
//     }
//
// }



// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається
// інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні
// якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а
// побудувати дом структуру під кожну сессію

// window.onload = function (){
//
//     let time = Date()
//     console.log(time);
//     let timeArr = JSON.parse(sessionStorage.getItem('time')) || [];
//     timeArr.push(time);
//     sessionStorage.setItem('time', JSON.stringify(timeArr));
//
// }
//
//


// =========================
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів


const array = [];
for (let i = 1; i <= 100; i++) {
    const user = {
        id: i,
        name: `User ${i}`,
        email: `user${i}@example.com`,
        age: Math.floor(Math.random() * 50) + 18, // генеруємо випадковий вік в діапазоні від 18 до 67
        city: ['Kyiv', 'Lviv', 'Dnipro', 'Kharkiv'][Math.floor(Math.random() * 4)], // генеруємо випадкове місто з 4 можливих значень
    };
    array.push(user);
}

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
prevButton.addEventListener("click", showPrevItems);
nextButton.addEventListener("click", showNextItems);


function renderItems(startIndex, endIndex) {
    const container = document.getElementById("container");
    container.innerHTML = "";
    for (let i = startIndex; i < endIndex; i++) {
        const item = array[i];
        const div = document.createElement("div");
        div.textContent = `${item.id}: ${item.name}, пошта: ${item.email}, вік: ${item.age}, місто проживання: ${item.city}`;
        container.appendChild(div);
    }
}


function showNextItems() {
    if (endIndex < array.length) {
        startIndex += 10;
        endIndex += 10;
        renderItems(startIndex, endIndex);
    }
}


function showPrevItems() {
    if (startIndex > 0) {
        startIndex -= 10;
        endIndex -= 10;
        renderItems(startIndex, endIndex);
    }
}


let startIndex = 0;
let endIndex = 10;
renderItems(startIndex, endIndex);

//Останнє завдання я вже зробив в попередній роботі