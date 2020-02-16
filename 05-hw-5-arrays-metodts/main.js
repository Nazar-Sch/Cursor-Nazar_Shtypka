// Task #1
const getRandomArray = (length, min, max) => {
    const arr = [];
    max = Math.floor(max);
    min = Math.ceil(min);
    for(let i = 0; i < length; i++) {
        const randomNumbers = Math.trunc(Math.random() * (max - min) + min);
        arr.push(randomNumbers);
    }
    return arr;
}
const randomArray = getRandomArray(length = 5, max=25.789, min = 1.3);

// Task #2
// Создайте функцию getModa(...numbers) – которая вычисляет моду всех переданных в неё аргументов. НЕЦЕЛЫЕ ЧИСЛА ИГНОРИРУЮТСЯ
// Пример: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2

const getModa = (...numbers) => {
    
    return moda;
}


// Task #3
let numbers = [6, 2.135425, 55, 11.235354, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
const getAverage = (...numbers) => {
    const getSum = numbers.reduce((previus, current) => Math.round(previus + current));
    const result = getSum / numbers.length;
    return result; 
};
// Task #4
// Создайте функцию getMedian(...numbers) – которая считает медиану всех переданных в неё аргументов. НЕЦЕЛЫЕ ЧИСЛА ИГНОРИРУЮТСЯ
// Пример: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23 
// Пример: getMedian(1, 2, 3, 4) –> 2.5 Пример: getMedian(1, 2, 3, 4, 5) –> 3

// Task #5
const filterEvenNumbers = randomArray.filter((num) => num % 2 === 0);

// Task #6
const numbersArr = [1, -2, 3, -4, -5, 6, 10, 15, 6, 55, 11, 78, 55, 77, 57, 87, 23, 2, 150];
const countPositiveNumbers = numbersArr.filter((num) => num > 0);

// Task #7
const getDividedByFive = numbersArr.filter((num) => num % 5 === 0);

// Task #8
const replaceBadWords = str => {
    const badWords = ['fuck', 'shit'];
    const arrRegExp = new RegExp(badWords.join("|"), 'g');
    return str.replace(arrRegExp, '****');
};


// Task #9
const divideByThree = word => {
    const wordArr =  [];
    word = word.toLowerCase().trim();
    for(let i = 0; i < word.length; i+=3) {
        wordArr.push(word.slice(i, i + 3));
    } 
    return wordArr;
}



// // task1
// console.log(randomArray);

// // task2

// // task3
// console.log(getAverage(...numbers));

// // task4

// // task5
// console.log(filterEvenNumbers);

// // task6
// console.log(countPositiveNumbers.length);

// // task7
// console.log(getDividedByFive);

// Task8
// console.log(replaceBadWords("Holy shit!"));

// // task9
// console.log(divideByThree('    ananas '));

// task10




