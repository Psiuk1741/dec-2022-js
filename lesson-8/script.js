//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let arr = [];

let user1 = new User(1, 'Anton', 'Pavlovych', '@gmail.com', 994);
arr.push(user1);

let user2 = new User(2, 'Olga', 'Ivanova', '@yahoo.com', 123);
arr.push(user2);

arr.push(new User(3, 'Dmytro', 'Kovalenko', '@hotmail.com', 456));
arr.push(new User(4, 'Viktoriia', 'Petrenko', '@gmail.com', 789));
arr.push(new User(5, 'Andrii', 'Kozlov', '@yahoo.com', 234));
arr.push(new User(6, 'Oksana', 'Lysenko', '@hotmail.com', 567));
arr.push(new User(7, 'Yaroslav', 'Kyrychenko', '@gmail.com', 890));
arr.push(new User(8, 'Svitlana', 'Symonenko', '@yahoo.com', 345));
arr.push(new User(9, 'Oleksii', 'Hryshchenko', '@hotmail.com', 678));
arr.push(new User(10, 'Nadiia', 'Tymoshenko', '@gmail.com', 901));


console.log(arr);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filterUsersById = arr.filter((item) => item.id % 2 === 0);
console.log(filterUsersById);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

//Сортував за спаданням, оскільки id вже йшли по зростанню

// 1 variant
let sortByIdVar1 = arr.sort((a,b)=> {if (a.id > b.id) {
    return -1;
}

    if (a.id < b.id) {
        return 1;
    }

    if (a.id === b.id) {
        return 0;
    }});
console.log(sortByIdVar1);

// 2 variant
let sortByIdVar2 = arr.sort((a, b) => (b.id - a.id));
console.log(sortByIdVar2);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client extends User {

    constructor(id, name, surname, email, phone, order) {
        super(id, name, surname, email, phone);
        this.order = order;
    }
}

let arrClient = [];
arrClient.push(new Client(1, 'Roman', 'Petrenko', '@yahoo.com', 567, ['carrots', 'celery', 'hummus']));
arrClient.push(new Client(2, 'Andrii', 'Ivanov', '@gmail.com', 234, ['eggs', 'jam']));
arrClient.push(new Client(3, 'Olga', 'Kovalenko', '@yahoo.com', 456, ['apples', 'bananas', 'oranges', 'butter']));
arrClient.push(new Client(4, 'Svitlana', 'Hryshchenko', '@gmail.com', 345, ['pasta', 'sauce', 'parmesan']));
arrClient.push(new Client(5, 'Dmytro', 'Tymoshenko', '@yahoo.com', 678, ['yogurt', 'granola', 'berries']));
arrClient.push(new Client(6, 'Yaroslav', 'Kozlov', '@yahoo.com', 567, ['chicken', 'beans']));
arrClient.push(new Client(7, 'Nadiia', 'Kyrychenko', '@hotmail.com', 901, ['rice', 'salmon', 'potatoes', 'asparagus', 'avocado',]));
arrClient.push(new Client(8, 'Viktor', 'Symonenko', '@hotmail.com', 789, ['milk', 'bread', 'cheese']));
arrClient.push(new Client(9, 'Oksana', 'Lysenko', '@hotmail.com', 890, ['lettuce', 'tomatoes', 'cucumbers']));
arrClient.push(new Client(10, 'Oleksii', 'Pavlenko', '@gmail.com', 234, ['bagels']));

console.log(arrClient);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortByOrder = arrClient.sort((a, b) => {
    if (a.order.length > b.order.length) {
        return 1;
    }
    if (a.order.length < b.order.length) {
        return -1;
    }
    if (a.order.length === b.order.length) {
        return 0;
    }
});

console.log(sortByOrder);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, producer, year, maxSpeed, capacity) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.capacity = capacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
    };
    this.info = function () {
        console.log(`модель - ${model}, виробник - ${producer}, рік випуску - ${year}, максимальна швидкість - ${maxSpeed},
об'єм двигуна - ${capacity}`);
    };
    this.increaseMaxSpeed = function (newSpeed) {
        maxSpeed += newSpeed;
    }
    this.changeYear = function (newYear) {
        year = newYear;
    };
    this.addDriver = function (x){
        this.driver = x;
    }

}

let car = new Car(2106, 'Lada', 1984, 150, 1.3)
car.drive();
car.info();
car.increaseMaxSpeed(200);
car.changeYear(2000);
car.info();
car.addDriver({name: 'Ivan', year: 2003});

console.log(car);
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class ClassCar{
    constructor(model, producer, year, maxSpeed, capacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.capacity = capacity;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${(this.maxSpeed)} на годину`);
    };

    info () {
        console.log(`модель - ${this.model}, виробник - ${this.producer}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxSpeed},
об'єм двигуна - ${this.capacity}`);
    };
    increaseMaxSpeed (newSpeed) {
        this.maxSpeed += newSpeed;
    }
  changeYear (newYear) {
        this.year = newYear;
    };
    addDriver (x){
        this.driver = x;
    }

}

let car1 = new ClassCar(2109, 'Lada', 1999, 180, 1.5)
console.log(car1);
car1.drive();
car1.info();

car1.increaseMaxSpeed(20);
car1.changeYear(2023);
car1.info();
car1.addDriver({name: 'Ostap', year: 2003});
console.log(car1);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella{
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let arrCinderella = [];

arrCinderella.push(new Cinderella('Julia', 22, 41));
arrCinderella.push(new Cinderella('Oksana', 21, 39));
arrCinderella.push(new Cinderella('Ivanna', 19, 40));
arrCinderella.push(new Cinderella('Alina', 20, 41));
arrCinderella.push(new Cinderella('Solomia', 21, 41));
arrCinderella.push(new Cinderella('Iryna', 23, 43));
arrCinderella.push(new Cinderella('Tanya', 21, 39));
arrCinderella.push(new Cinderella('Vasylyna', 19, 38));
arrCinderella.push(new Cinderella('Angelina', 21, 39));
arrCinderella.push(new Cinderella('Sofia', 23, 40));

console.log(arrCinderella);

class Prince{
    constructor(name, age, sizeShoe) {
        this.name = name;
        this.age = age;
        this.sizeShoe = sizeShoe;
    }
}

let prince1 = new Prince('Ivan', 25, 38)

for (const cinderellaElement of arrCinderella) {
    if(cinderellaElement.size === prince1.sizeShoe){
        console.log(`Попелюшка ${cinderellaElement.name} повинна бути з принцом ${prince1.name}`);
    }
}

let findCinderella = arrCinderella.find((item) => {if(item.size === prince1.sizeShoe){return item;}})
console.log(findCinderella);
console.log(`Попелюшка ${findCinderella.name} повинна бути з принцом ${prince1.name}`)