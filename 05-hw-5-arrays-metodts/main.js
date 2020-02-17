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

// Task #3
let numbers = [6, 2.135425, 55, 11.235354, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
const getAverage = (...numbers) => {
    const getSum = numbers.reduce((previus, current) => Math.round(previus + current));
    const result = getSum / numbers.length;
    return result; 
};


// Task #4
const getMedian = (...numbers) => {
    const sortedNumbers = numbers.sort((a,b) => a - b);
    const lowMiddleIndex = Math.floor((sortedNumbers.length - 1) / 2);
    const highMiddleIndex = Math.ceil((sortedNumbers.length - 1) / 2);
    return Math.round((sortedNumbers[lowMiddleIndex] + sortedNumbers[highMiddleIndex]) / 2);
};

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


// task1
console.log(randomArray);

// task3
console.log(getAverage(...numbers));

// task4
console.log(getMedian(...numbers));

// task5
console.log(filterEvenNumbers);

// task6
console.log(countPositiveNumbers.length);

// task7
console.log(getDividedByFive);

// Task8
console.log(replaceBadWords("Holy shit!"));

// task9
console.log(divideByThree('    ananas '));




