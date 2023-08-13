//Здание 1: Напишите функцию, которая принимает два аргумента и возвращает все числа,
// которые делятся на данный делитель. Первый аргумент - это массив чисел, а второй - делитель.
/*
    const divisibleBy = (numbers, divisor) => {
        let newArr =[];
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] % divisor === 0){
            newArr.push(numbers[i]);
        }
    }
    return newArr;
}
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
 */

//Задание 2: Создание массива значений Фаренгейта из массива значений Цельсия:
/*
let celsius = [-15, -5, 0, 10, 16, 20, 24, 32];
const fahrenheit = celsius.map(item => 9 * item /5 + 32);
console.log(fahrenheit);
 */

// Задание 3: Дана некоторая строка:
// 'abcde abcde abcde'
// Замените в ней первый символ каждого слова на '!':
// '!bcde !bcde !bcde'
/*
let str = 'abcde abcde abcde';
const result = str
    .split('')
    .map (item => item ==='a' ? '!' : item)
    .join('');
console.log(result);
 */

// Задание 4: Дан массив с числами: [1, 2, 3, 3, 4, 5]
// Проверьте, что в этом массиве есть два одинаковых элемента подряд.
/*
let flag = false;
const arr = [1, 2, 3, 3, 4, 5];
for(let i=0; i<arr.length; i++){
    if(arr[i] === arr[i++]){
        flag = true;
        break;
    }
}
console.log(flag ? `есть два одинаковых элемента` : `нет таких элементов`);
 */

// Задание 5: Complementary DNA (Дезоксирибонуклеиновая кислота (ДНК)) - это химическое вещество,
// обнаруженное в ядре клетки и несущее «инструкции» для развития и функционирования живых организмов.
// Если вы хотите узнать больше, http://en.wikipedia.org/wiki/DNA
// В цепочках ДНК символы «A» и «T» дополняют друг друга, как «C» и «G». У вас есть функция с половиной ДНК;
// вам нужно получить вторую половину. Нить ДНК никогда не бывает пустой.

// Input: строка заглавных латинских букв (A, T, C, G)
// Output: строка заглавных латинских букв
// DNAStrand ("ATTGC") // return "TAACG"
// DNAStrand ("GTAT") // return "CATA"
// Пример входных данных
// Ожидаемый результат
// DNAStrand("AAAA")
// DNAStrand("AAAA")
// 'TTTT'
// 'TTTT'
// DNAStrand("ATTGC")
// DNAStrand("ATTGC")
// 'TAACG'
// DNAStrand("GTAT")
// 'CATA'

const mas = {
    A:'T',
    T:'A',
    C:'G',
    G:'C',
}
let str = 'ATTGC';
function dna(dna){
    const resalt = [...dna].map(item=> {
        return item = mas[item] || '';
    })
    return resalt.join("")
}

console.log(dna(str))
