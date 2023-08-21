// Найти причину ошибки программы.
//Найти произведение элементов массива, на четных позициях (с индексами 0, 2, 4, ...)
//Результат работы программы: -32598720
/*
const arr = [2, 4, 7, 9, 5, 3, 12, 41, -14, -25, 36, 12, -7, 5, -11, -12];
let rezult = 0;
let poz = 0;
for (const elem in arr) {
    if (poz % 2 === 0) {
        rezult *= elem;
        poz++;
    }
}
console.log(rezult);
 */
/*
const arr = [2, 4, 7, 9, 5, 3, 12, 41, -14, -25, 36, 12, -7, 5, -11, -12];
let result = 1;
for (let i=0; i < arr.length; i=i+2) {
    if (i % 2 === 0) {
        result *= arr[i];
    }
}
console.log(result);
 */

//Найти позицию последней гласной буквы в строке.
//Правильный ответ: 72
/*
const etalon = "аеиоуыэюя";
const str =
    "рывр пр пвропф вфлп арфвп арпфнк рсмярп рмояпав ромвава пва рпяавло рпляопрзшцг";

function findLastLetter(str, eStr) {
    const letterIndex = str.filter((item) => eStr.includes(item));
    return letterIndex;
}
console.log(findLastLetter(str, eStr));
 */
/*
const str = "рывр пр пвропф вфлп арфвп арпфнк рсмярп рмояпав ромвава пва рпяавло рпляопрзшцг";
let arr = str.split(``);
console.log(arr.lastIndexOf(`о`));
 */
/*
const str = "рывр пр пвропф вфлп арфвп арпфнк рсмярп рмояпав ромвава пва рпяавло рпляопрзшцг";
let arr = str.split(``);
const eStr = arr.reduce((acc, item, index) => {
    if(item ===`а` || item ===`е` || item === `и`|| item === `о` || item === `у` || item === `ы` || item === `э` ||
        item === `ю`|| item === `я`){
       acc = index
    }
    return acc;
}, 0)
console.log(eStr);
 */

// Найти общую сумму всех продаж (сумму всех элементов массивов объекта).
// Верный ответ: 788
/*
const dataArr = {
    type: "User data";
    isNewData: true;
    newPrice: [125, 125, 145, 35, 45, 74, 36, 14];
    oldData: {
        type: "Old User Data";
        isNewData: false;
        price: [14, 2, 45, 41, 23, 11, 20, 11, 5, 6, 7, 4];
    };
};

function sumAllPrices(obj) {
    let sumOldPrice = obj.oldData.price.reduce((acc, item) => acc + item, 0);
    let sumNewPrice = obj.price.reduce((acc, item) => acc + item, 0);
    return sumOldPrice + sumOldPrice;
}

console.log(sumAllPrices(objdataArr));
 */

const dataArr = {
    type: "User data",
    isNewData: true,
    newPrice: [125, 125, 145, 35, 45, 74, 36, 14],
    oldData: {
        type: "Old User Data",
        isNewData: false,
        price: [14, 2, 45, 41, 23, 11, 20, 11, 5, 6, 7, 4],
    },
}
function sumAllPrices(dataArr) {
    let sumOldData = dataArr.oldData.price.reduce((acc, item) => {
        return acc + item;
    }, null);
    let sumNewPrice = dataArr.newPrice.reduce((acc, item) => {
        return acc + item;
    }, null);
    return sumOldData + sumNewPrice;
}
console.log(sumAllPrices(dataArr));
