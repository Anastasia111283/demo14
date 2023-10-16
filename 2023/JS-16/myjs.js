//1. Without. Напишите функцию, возвращает новый массив без предоставленных значений.
// Используйте примитивные типы.
// /**
// * Описание задачи: Напишите функцию, возвращает новый массив без
// предоставленных значений. Используйте примитивные типы.
// * Ожидаемый результат: [1, 2, 3, 1, 2] без 1, 2 => [3]
// * Сложность задачи: 2 of 5
// * @param {Array} array - Массив с примитивными значениями
// * @param {?} args - лист значений для удаления
// throw new Error('Напишите здесь свое решение');
/*
const data= [1, 2, 3, 1, 2];
const args = [1,2];
const without = (array) =>{
    return array.filter (item => !args.includes(item))
}
console.log(data);
console.log(without(data));
 */

//2. Unique. Напишите функцию, которая убирает повторяющиеся значения.
// /**
// * Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
// * Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
// * Сложность задачи: 2 of 5
// * @param {Array<string | number>} array - Массив с примитивными значениями
//*@returns{Array}

//const unique = (array)=>{
    //throw new Error('Напишите здесь свое решение');
//}
//const data = [1,2,3,1,2,3];
//console.log(unique(data));//[1,2,3]
/*
const data = [1,2,3,1,2,3];
console.log(data);
let arr = data.filter((item, index)=>{
 return data.indexOf(item) === index
});
console.log(arr);
 */

//3. IsEqual. Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.
// /**
// * Описание задачи: Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.
// * Ожидаемый результат: ([1, 2, 3], [1, 2, 3]) => true
// * Сложность задачи: 2 of 5
// * @param {Array} firstArray - Массив с примитивными значениями
// * @param {Array} secondArray - Массив с примитивными значениями
//*@returns{boolean}
//const isEqual = (firstArray, secondArray) =>{
// throw new Error('Напишите здесь свое решение');
//}
// const arr1 = [1,2,3,4];
// const arr2 = [1,2,3,4];
// const arr3 = [1,2,3,4];
// const arr4 = [1,2,3,4,5];
// console.log(isEqual(arr1,arr2)); // true
// console.log(isEqual(arr1,arr3)); // false
// console.log(isEqual(arr1,arr4)); // false

/*
const arr1 = [1,2,3,4];
const arr2 = [1,2,3,4];
const arr3 = [1,2,3,5];
const arr4 = [1,2,3,4,5];
const isEqual = (firstArray, secondArray) => {
    if (firstArray.length !== secondArray.length) {
        return false;
    }
    const compared = firstArray.map((item, index) => secondArray[index] === item);
    return !compared.includes(false);
}
console.log(isEqual(arr1,arr2));
console.log(isEqual(arr1,arr3));
console.log(isEqual(arr1,arr4));
 */

//4. Chunk. Напишите функцию, которая разделяет массив на части заданного размера.
// /**
// * Описание задачи: Напишите функцию, которая разделяет массив на части заданного размера.
// * Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
// * Сложность задачи: 3 of 5
// * @param {Array} array - Массив элементов
// * @param {number} size - Размер чанков
// * @returns {Array}
//const chunk = (array,size) =>{
//throw new Error('Напишите здесь свое решение');
//}
/*
const data = [1,2,3,4,5,6,7];
const chunk = (array,size) =>{
    const chunkedArr = [];
    let index = 0;
    while (index < array.length) {
        chunkedArr.push(array.slice(index, size + index));
        index += size;
    }
    return chunkedArr;
}
console.log(chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
console.log(chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7]]
 */

//5. Intersection. Напишите функцию, которая создаст массив из
// уникальных значений, которые есть в каждом из предоставленных
// массивов. Используйте примитивные типы данных.
// /**
// * Описание задачи: Напишите функцию, которая создаст массив из уникальных значений,
// которые есть в каждом из предоставленных массивов.
// * Ожидаемый результат: ([1, 2], [2, 3]) => [2]
// * Сложность задачи: 4 of 5
// * @param {?} arrays - Массив примитивных значений
// * @ {Array}

const arr1 = [1,2];
const arr2 = [2,3];
const arr3 = ['a','b'];
const arr4 = ['b','c'];
const arr5 = ['b','e','c'];
const arr6 = ['b','b','e'];
const arr7 = ['b','c','e'];
const arr8 = ['b','e','c'];

const intersection = (...arrays) =>{
    const result = arrays[0].filter((element) => {
        const indexOfElement = arrays[1].indexOf(element);
        if (indexOfElement >= 0) {
            return element;
        }
    })
    if (arrays.length > 2) {
        intersection(result, ...arrays.slice(2, arrays.length));
    }
    return Array.from(new Set(result));
}

console.log(intersection(arr1,arr2))//[2]
console.log(intersection(arr3,arr4,arr5))//['b']
console.log(intersection(arr6,arr7,arr8))//['b','e']












