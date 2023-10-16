//Задание 1: Создать объект, описывающий автомобиль (тип двигателя, модель, год выпуска, средняя скорость),
//и следующие функции для работы с этим объектом.
//1. Функция для вывода на экран информации об автомобиле.
//2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
//Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
/*
const car={
    engine:'petrol',
    model: 'Volkswagen Jetta',
    year: 2015,
    speed: 100,
    timeCar: function (distance=0, restInterval = 1 ){
        let travelTime = distance / this.speed;
        let numberOfStops = Math.floor(travelTime / 4);
        travelTime += numberOfStops * restInterval;
        return travelTime;
    },
}
console.log(car);
console.log(car.timeCar(800));
 */

//Задание 2: Создать объект, хранящий в себе отдельно числитель и
// знаменатель дроби, и следующие функции для работы с этим объектом.
// 1. Функция сложения 2-х объектов-дробей.
// 2. Функция вычитания 2-х объектов-дробей.
// 3. Функция умножения 2-х объектов-дробей.
// 4. Функция деления 2-х объектов-дробей.
// 5. Функция сокращения объекта-дроби.
/*
const obj1 = {
    a: 12,
    b: 24,
    }
const obj2 = {
    a: 5,
    b: 12,
}
function sumObj(myObj1, myObj2) {
    return {
        a: myObj1.a * myObj2.b + myObj2.a * myObj1.b,
        b: myObj1.b * myObj2.b
    }
}
function subtractionObj(myObj1, myObj2) {
    return {
        a: myObj1.a * myObj2.b - myObj2.a * myObj1.b,
        b: myObj1.b * myObj2.b
    }
}
function multiplicationObj(myObj1, myObj2) {
    return {
        a: myObj1.a * myObj2.a,
        b: myObj1.b * myObj2.b
    }
}
function divisionObj(myObj1, myObj2) {
    return {
        a: myObj1.a * myObj2.b,
        b: myObj1.b * myObj2.a
    }
}
// Сокращение дроби.
function reductionObj(myobj1, myobj2) {
   let nod = 1;	// наибольший общий делитель (Нод)
    let tempFract = {
        a: myobj1.a,
        b: myobj2.b
    };
    for (let i = tempFract.a; i > 1; i--) {		// проверяем начиная с числителя, до 1
        if ((tempFract.a % i == 0) &&		// если числитель и знаменатель деляться на i без остатка,
            (tempFract.b % i == 0)) {		// то
            tempFract.a /= i;	// числитель делим на i
            tempFract.b /= i;	// знаменатель делим на i
            nod = i;	// запоминаем число на которое делили (Нод)
        }
    }
    return tempFract;
}

console.log(sumObj(obj1,obj2));

console.log(subtractionObj(obj1,obj2));

console.log(multiplicationObj(obj1,obj2));

console.log(divisionObj(obj1,obj2));

console.log(reductionObj(obj1,obj2));
 */

//Задание 3: Создать массив «Список покупок». Каждый элемент массива
// является объектом, который содержит название продукта, необходимое
// количество и куплен или нет. Написать несколько функций для работы с таким массивом.
// 1. Вывод всего списка на экран таким образом, чтобы сначала шли не купленные продукты, а потом – купленные.
// 2. Добавление покупки в список. Учтите, что при добавлении покупки с
// уже существующим в списке продуктом, необходимо увеличивать
// количество в существующей покупке, а не добавлять новую.
// 3. Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

// 1. Вывод всего списка на экран таким образом, чтобы сначала шли не купленные продукты, а потом – купленные.

const shoppingList = [
    {
        type: `мороженое`,
        count: 3,
        productPurchased: `нет`
    },
    {
        type: `торт`,
        count: 1,
        productPurchased: `да`
    },
    {
        type: `конфеты`,
        count: 2,
        productPurchased: `да`
    },
    {
        type: `шоколад`,
        count: 5,
        productPurchased: `да`
    },
    {
        type: `зефир`,
        count: 3,
        productPurchased: `нет`
    }
]

const sortedShoppingList = [...shoppingList];

sortedShoppingList.sort((a, b) => { //сортировка
    if (a.productPurchased === `да` && b.productPurchased === `нет`) {
        return 1;
    }
    if (a.productPurchased === `нет` && b.productPurchased === `да`) {
        return -1;
    }
    return 0;
})
sortedShoppingList.sort( (a, b) => a.productPurchased - b.productPurchased);
console.log(sortedShoppingList);

// 2 Добавление покупки в список

const addShopToList = (shop) => {
    const find = shoppingList.find((value) => {
        return shop.type === value.type;
    });
    if (find) {
        find.count += shop.count;
    } else {
        shoppingList.push(shop);
    }
}

addShopToList({type: 'пирог', count: 4, productPurchased: `нет`});

addShopToList({type: 'мармелад', count:  2, productPurchased: `нет`});

addShopToList({type: `конфеты`, count: 5, productPurchased: `да`});

console.log((shoppingList));


// 3 Покупка продукта

const addBuyingProduct = (arr = [], type = '') => {
    let res = [...arr];
    for (let i = 0; i < res.length; i++) {
        if (type === res[i].type) {
            res[i].productPurchased = `да`;
        }
    }
    return res;
}

console.log(addBuyingProduct(shoppingList, 'мороженое'));




