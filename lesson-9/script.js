// //- створити блок,
// // - додати йому класи wrap, collapse, alpha, beta
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// // - додати цей блок в body.
// // - клонувати його повністю, та додати клон в body.
// let div = document.createElement('div');
// div.innerText = 'okten';
//
// div.classList.add('wrap', 'collapse', 'alpha', 'beta');
//
// div.style.background = 'lightblue';
// div.style.color = 'yellow';
// div.style.fontSize = '30px';
// div.style.margin = '5px';
//
// document.body.appendChild(div);
//
// let clone = div.cloneNode(true);
// document.body.appendChild(clone);
//
// // - Є масив:
// // ['Main','Products','About us','Contacts']
// // Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// //
//
//
// let arr = ['Main', 'Products', 'About us', 'Contacts'];
//
// let ul = document.createElement('ul');
// document.body.appendChild(ul);
//
// for (const item of arr) {
//     let li = document.createElement('li');
//     ul.appendChild(li);
//     li.innerText = item;
// }
//
//
// // - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
// //
//
//
// for (const item of coursesAndDurationArray) {
//     let divCourses = document.createElement('div');
//
//
//     let p = document.createElement('p');
//     divCourses.innerText = item.title + ' ' + item.monthDuration;
//
//     divCourses.appendChild(p);
//     document.body.appendChild(divCourses);
// }
//
//
// //
// // - Є масив
// // let coursesAndDurationArray = [
// //     {title: 'JavaScript Complex', monthDuration: 5},
// //     {title: 'Java Complex', monthDuration: 6},
// //     {title: 'Python Complex', monthDuration: 6},
// //     {title: 'QA Complex', monthDuration: 4},
// //     {title: 'FullStack', monthDuration: 7},
// //     {title: 'Frontend', monthDuration: 4}
// // ];
// //
// //
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// // Завдання робити через цикли.
// //
//
// for (const item of coursesAndDurationArray) {
//     let divCourses = document.createElement('div');
//     divCourses.classList.add('item');
//
//     let h1 = document.createElement('h1');
//     h1.classList.add('heading');
//
//     h1.innerText = item.title;
//
//
//     let p = document.createElement('p');
//     p.classList.add('description');
//     p.innerText = item.monthDuration;
//
//     divCourses.append(h1, p);
//
//     document.body.appendChild(divCourses);
//
// }
//
//
// // ==========================
// //
// // - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// // Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// // Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
//
// for (const simpson of simpsons) {
//     let divOfSimosins = document.createElement('div');
//     divOfSimosins.style.marginBottom = '100px';
//
//     let h1 = document.createElement('h1');
//     h1.innerText = simpson.name + ' ' + simpson.surname;
//
//     let h2 = document.createElement('h2');
//     h2.innerText = simpson.age;
//
//     let p = document.createElement('p');
//     p.innerText = simpson.info;
//
//     let image = document.createElement('img');
//     image.src = simpson.photo;
//
//     divOfSimosins.append(h1, h2, p, image);
//
//
//     document.body.appendChild(divOfSimosins);
// }
//
//
// // =========================
// // Цикл в циклі
// // - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// //
// // Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// // Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
//
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// for (const item of coursesArray) {
//     let div = document.createElement('div');
//
//     let h1 = document.createElement('h1');
//     h1.innerText = item.title;
//     h1.style.display = 'flex';
//     h1.style.justifyContent = 'center';
//
//
//     let divForDur = document.createElement('div');
//     divForDur.style.display = 'flex';
//
//
//     let divMonth = document.createElement('div');
//     divMonth.innerText = 'monthDuration: ' + item.monthDuration;
//     divMonth.style.border = '1px solid black'
//     divMonth.style.width = '30%';
//     divMonth.style.display = 'flex'
//     divMonth.style.justifyContent = 'center'
//
//
//     let divHour = document.createElement('div');
//     divHour.innerText = 'hourDuration: ' + item.hourDuration;
//     divHour.style.border = '1px solid black'
//     divHour.style.width = '69%';
//     divHour.style.display = 'flex';
//     divHour.style.justifyContent = 'center';
//     divForDur.append(divMonth, divHour);
//
//
//     let ul = document.createElement('ul');
//     for (const value of item.modules) {
//         let li = document.createElement('li');
//         li.innerText = value;
//
//         ul.appendChild(li);
//     }
//
//
//     div.append(h1, divForDur, ul);
//
//
//     document.body.appendChild(div);
//
// }
//
//
// // ------------------
// //
// // - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
// //
// let h1 = document.createElement('h1');
// h1.innerText = 'HELLO';
// h1.id = 'text';
//
// document.body.appendChild(h1);
//
// let but = document.createElement('button');
// but.innerText = 'click'
//
// document.body.appendChild(but);
//
// but.onclick= function (){
//     console.log('lol');
//     document.getElementById('text').remove();
// }
//
//
//
// // - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з
// // інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// //
// let formforInput = document.createElement('form');
// formforInput.style.marginTop = '30px'
//
// let input = document.createElement('input');
// input.id = 'age';
//
//
// let button = document.createElement('button');
// button.innerText = 'check'
//
// formforInput.append(input, button);
//
// document.body.appendChild(formforInput);
//
// formforInput.onsubmit = function (e){
//     e.preventDefault();
//     if(document.getElementById('age').value>18){
//         alert('Ви пройшли перевірку');
//     }
//     else {
//         alert('Перевірка не пройдна')
//     }
// }


// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let formForTable = document.createElement('form');
formForTable.style.paddingTop = '50px';

let inputForRows = document.createElement('input');
inputForRows.id = 'rows';

let inputForCols = document.createElement('input');
inputForCols.id = 'cols';

let inputForContent = document.createElement('input');
inputForContent.id = 'content';

let butt = document.createElement('button');
butt.innerText = 'click';

formForTable.append(inputForRows, inputForCols, inputForContent, butt);

document.body.appendChild(formForTable);


butt.onclick = function (e) {
    e.preventDefault();
    let rows = document.getElementById('rows').value;

    let cols = document.getElementById('cols').value;

    let content = document.getElementById('content').value;

    let table = document.createElement('table');
    table.style.border = '1px solid black';

    for (let i = 0; i < rows; i++) {
        let row = document.createElement('tr');
        row.style.border = '1px solid black';

        for (let j = 0; j < cols; j++) {
            let cell = document.createElement('td');
            cell.innerText = content;
            row.appendChild(cell);
            cell.style.border = '1px solid black';
        }

        table.appendChild(row);
    }
    document.getElementById('rows') .value = '';
    document.getElementById('cols') .value = '';
    document.getElementById('content') .value = '';
    document.body.appendChild(table);


}




