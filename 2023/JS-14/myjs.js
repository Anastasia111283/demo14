//Задание 1: Создать объект, описывающий автомобиль (тип двигателя, модель, год выпуска, средняя скорость),
//и следующие функции для работы с этим объектом.
//1. Функция для вывода на экран информации об автомобиле.
//2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
//Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

const car={
    engine:'petrol',
    model: 'Volkswagen Jetta',
    year: 2015,
    speed: 100,
    timeCar: function (distance){
        let relax = 0;
        let hours = distance / this.speed;
        if (hours <= 4){
            let result = hours+ relax;
            console.log(result);
        }else{
            if( hours % 5 === 0 ){// hours>4
            relax++;
        }
        }
    }
}
car.timeCar(1000);
console.log(car);

// Вопрос:
//Не работает прибавление 1 часа на отдых (каждый 5 час водитель отдыхает)

//Задание 2: Создать объект, хранящий в себе отдельно числитель и
// знаменатель дроби, и следующие функции для работы с этим объектом.
// 1. Функция сложения 2-х объектов-дробей.
// 2. Функция вычитания 2-х объектов-дробей.
// 3. Функция умножения 2-х объектов-дробей.
// 4. Функция деления 2-х объектов-дробей. 5. Функция сокращения объекта-дроби.
/*
const obj1 = {
    a:0,
    b:0,}
const obj2 = {
    a:0,
    b:0,}

 */
/*
var fractionOne = {};
fractionOne.numerator = 2;
fractionOne.denomerator = 4;

var fractionTwo = {};
fractionTwo.numerator = 1;
fractionTwo.denomerator = 4;

var fractionAnswer = {};

// Вывод объекта дроби.
function showFraction(obj) {
    return obj.numerator + "/" + obj.denomerator;
}


// Нахождение общего знаменателя.
function commonDenom(obj1, obj2) {
    var temp_den = obj1.denomerator;	// переменная для хранения знаменателя		// присваиваем ей знаменатель 1й дроби
    // 1й числ = умножаем 1й числитель на 2й знаменатель
    obj1.numerator = obj1.numerator * obj2.denomerator;
    // 1й знам = умножаем 1й знаменатель на 2й знаменатель
    obj1.denomerator = obj1.denomerator * obj2.denomerator;
    // 2й числ = умножаем 2й числитель на 1й знаменатель (сохраненный в t_den)
    obj2.numerator = obj2.numerator * temp_den;
    // 2й знам = умножаем 2й знаменатель на 1й знаменатель (сохраненный в t_den)
    obj2.denomerator = obj2.denomerator * temp_den;
}


// Вычисление суммы.
function sum(obj1, obj2) {
    var tempFract = {
        numerator : 0,
        denomerator : 0
    };

    if (obj1.denomerator != obj2.denomerator) {	// если знаменатели равны
        commonDenom(obj1, obj2); // передаем ссылки на n и d (вторые числитель и знаменатель) чтобы привести дроби к общему знаменателю
    }

    tempFract.numerator = obj1.numerator + obj2.numerator;	// плюсуем числители
    tempFract.denomerator = obj1.denomerator;

    return tempFract;
}

// Вычисление вычитания.
function minus(obj1, obj2) {
    var tempFract = {
        numerator : 0,
        denomerator : 0
    };

    if (obj1.denomerator != obj2.denomerator) {	// если знаменатели равны
        commonDenom(obj1, obj2); // передаем ссылки на n и d (вторые числитель и знаменатель) чтобы привести дроби к общему знаменателю
    }

    tempFract.numerator = obj1.numerator - obj2.numerator;	// минусуем числители
    tempFract.denomerator = obj1.denomerator;

    return tempFract;
}
// Вычисление умножения.
function multiply(obj1, obj2) {
    var tempFract = {
        numerator : 0,
        denomerator : 0
    };

    tempFract.numerator = obj1.numerator * obj2.numerator;
    tempFract.denomerator = obj1.denomerator * obj2.denomerator;

    tempFract = reduction(tempFract);

    return tempFract;
}
// Вычисление деления.
function divide(obj1, obj2) {
    var tempFract = {
        numerator : 0,
        denomerator : 0
    };

    tempFract.numerator = obj1.numerator * obj2.denomerator;	// умножаем числитель 1й дроби на знаменатель 2й дроби
    tempFract.denomerator = obj1.denomerator * obj2.numerator;	// умножаем знаменатель 1й дроби на числитель 2й дроби

    tempFract = reduction(tempFract);

    return tempFract;
}
// Сокращение дроби.
function reduction(obj) {
    var nod = 1;	// наибольший общий делитель (Нод)
    var tempFract = {
        numerator : obj.numerator,
        denomerator : obj.denomerator
    };
    for (var i = tempFract.numerator; i > 1; i--) {		// проверяем начиная с числителя, до 1
        if ((tempFract.numerator % i == 0) &&		// если числитель и знаменатель деляться на i без остатка,
            (tempFract.denomerator % i == 0)) {		// то
            tempFract.numerator /= i;	// числитель делим на i
            tempFract.denomerator /= i;	// знаменатель делим на i
            nod = i;	// запоминаем число на которое делили (Нод)
        }
    }

    return tempFract;
}


// Показать вычисление.
function showCompute(sign) {

    switch (sign) {
        case '+':
            fractionAnswer = sum(fractionOne, fractionTwo);
            break;
        case '-':
            fractionAnswer = minus(fractionOne, fractionTwo);
            break;
        case '*':
            fractionAnswer = multiply(fractionOne, fractionTwo);
            break;
        case '/':
            fractionAnswer = divide(fractionOne, fractionTwo);
            break;
        case '=':
            fractionAnswer = reduction(fractionOne);
            // Выводим результат сокращения
            showReductionResult(fractionOne, fractionAnswer);
            return;

        default:
            alert("[error] недопустимый знак вычисения!")
            return;
    }

    // Выводим формулу и результат вычисления.
    alert(
        showFraction(fractionOne)
        + " " + sign + " "
        + showFraction(fractionTwo)
        + " = "
        + showFraction(fractionAnswer)
        );
}

function showReductionResult(obj1, objAnswer) {
    // Выводим формулу и результат вычисления.
    alert(
        showFraction(obj1)
        + " = "
        + showFraction(objAnswer)
        );
}
 */
/**************************************/
/*
function Fraction(upNumber,downNumber){
    return {upNumber:upNumber, downNumber:downNumber};
}
let firstNumber = Fraction(5,10);
let secondNumber = Fraction(2,15);

function multiFraction(obj1,obj2){
    let resultUpNumber = obj1.upNumber * obj2.upNumber;
    let resultDownNumber = obj1.downNumber * obj2.downNumber;
    alert(`${resultUpNumber}/${resultDownNumber}`);
}
multiFraction(firstNumber,secondNumber);

 */

//Задание 3: Создать массив «Список покупок». Каждый элемент массива
// является объектом, который содержит название продукта, необходимое
// количество и куплен или нет. Написать несколько функций для работы с таким массивом.
// 1. Вывод всего списка на экран таким образом, чтобы сначала шли не купленные продукты, а потом – купленные.
// 2. Добавление покупки в список. Учтите, что при добавлении покупки с
// уже существующим в списке продуктом, необходимо увеличивать
// количество в существующей покупке, а не добавлять новую.
// 3. Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
/*
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

// a)
sortedShoppingList.sort( (a, b) => {

    if (a.productPurchased === `да` && b.productPurchased === `нет`) {
        return 1;
    }
    if (a.productPurchased === `нет` && b.productPurchased === `да`) {
        return -1;
    }
    return 0;
})

// b)
sortedShoppingList.sort( (a, b) => a.isBought - b.isBought);

console.log(sortedShoppingList);
// 1.2 Добавление покупки в список
let addPurchase = (name = '', count = 0, arr = []) => {
    let res = [...arr];
    if (res.find(item => item.name === name)) {
        for (let i = 0; i < res.length; i++)
            if (name === res[i].name) {
                res[i].count += count;
            }
    } else {
        res.push({
            name,
            count,
            isBought: false,
        })
    }

    return res;
}

const newList1 = [...shoppingList];
console.log(newList1);                      // 0: {name: "bread", count: 2, isBought: true}
                                            // 1: {name: "butter", count: 1, isBought: true}
                                            // 2: {name: "milk", count: 3, isBought: false}
                                            // 3: {name: "egg", count: 6, isBought: false}
                                            // 4: {name: "tomato", count: 8, isBought: false}
                                            // 5: {name: "sauce", count: 1, isBought: true}

console.log(addPurchase('egg', 4, newList1));       // 0: {name: "bread", count: 2, isBought: true}
                                                    // 1: {name: "butter", count: 1, isBought: true}
                                                    // 2: {name: "milk", count: 3, isBought: false}
                                                    // 3: {name: "egg", count: 10, isBought: false}
                                                    // 4: {name: "tomato", count: 8, isBought: false}
                                                    // 5: {name: "sauce", count: 1, isBought: true}

console.log(addPurchase('banana', 2, newList1));    //0: {name: "bread", count: 2, isBought: true}
                                                    // 1: {name: "butter", count: 1, isBought: true}
                                                    // 2: {name: "milk", count: 3, isBought: false}
                                                    // 3: {name: "egg", count: 10, isBought: false}
                                                    // 4: {name: "tomato", count: 8, isBought: false}
                                                    // 5: {name: "sauce", count: 1, isBought: true}
                                                    // 6: {name: "banana", count: 2, isBought: false}


// 1.3   Покупка продукта
// a)
const addBuyingProduct = (arr = [], name = '') => {
    let res = [...arr];
    for (let i = 0; i < res.length; i++) {
        if (name === res[i].name) {
            res[i].isBought = true;
        }
    }

    return res;
}

// b)
const addPurchasedProduct = (arr = [], name = '') => {
    let res = [...arr];

    res.forEach(product => {
        if (name === product.name) {
            product.isBought = true;
        }
    });
    return res;
}

console.log(addPurchasedProduct(shoppingList, 'milk'));

console.log(addBuyingProduct(shoppingList, 'milk'));    //0: {name: "bread", count: 2, isBought: true}
                                                        // 1: {name: "butter", count: 1, isBought: true}
                                                        // 2: {name: "milk", count: 3, isBought: true}
                                                        // 3: {name: "egg", count: 6, isBought: false}
                                                        // 4: {name: "tomato", count: 8, isBought: false}
                                                        // 5: {name: "sauce", count: 1, isBought: true}

console.log(addBuyingProduct(shoppingList, 'egg'));     // 0: {name: "bread", count: 2, isBought: true}
                                                        // 1: {name: "butter", count: 1, isBought: true}
                                                        // 2: {name: "milk", count: 3, isBought: true}
                                                        // 3: {name: "egg", count: 6, isBought: true}
                                                        // 4: {name: "tomato", count: 8, isBought: false}
                                                        // 5: {name: "sauce", count: 1, isBought: true}
*/