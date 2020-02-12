// Funtion #1
const getMaxDigit = function(number = 17524) {
    number = String(number).split('');
    number = Math.max(...number);
    return number;
}

//Function #2
const pow = function(num = 2, exp = 3) {
    if (exp === 0) return 1;
    let resultPow = num;
    for(let i = 1; i <= exp; i++) {
        resultPow *= num;
    }
    return resultPow;
}


// Function #3
const getCorrectName = function(name = 'ВЛАд') {
    let correctLettersName = name.toLowerCase();
    correctLettersName = correctLettersName[0].toUpperCase() + correctLettersName.slice(1);
    return correctLettersName;
}

//Function #4
const getSumWithTax = function(sum = 2000) {
    const precentageTax = 19.5;
    const tax = (precentageTax / 100) * sum;
    sum = sum - tax;
    return sum;
}

// Function #5
const getRandomNumber = function(low = 1, high = 10) {
    return Math.floor(Math.random() * (high - low) + low);
}

// Function #6
const getLetterCount = function(word = 'ananas', letter = 'a') {
    let countResult = 0;
    for (let i = 0; i <= word.length; i++) {
        if (word[i] === letter) {
            countResult++
        }
    }
    return countResult;
}

// Function #7 
const convertMoney = function(money = 100) {
    const exchangeRate = 25;
    const toDollar = false;
    const toUah = true;
    if (toUah) {
        money = money * exchangeRate;
        return `${money} грн`;
    } else if (toDollar){
        money = money / exchangeRate;
        return `${money}$`;
    } else {
        throw new Error(`Error. We don't convert this money`);
    }
}

// Function #8
const getRandomPassword = function(countChar = 8) {
    let randomPassword = '';
    for (let i = 0; i < countChar; i++) {
        randomPassword += Math.trunc(Math.random() * 10);
    }
    return randomPassword;
}

// Function #9
const deleteLetters = function(word = "blablabla", letter = "b") {
    let pureWord = ''; 
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== letter) {
            pureWord += word[i];
        }
    }
    return pureWord;
}

// Function 10
const isPalindrom = function(word = 'madam') {
    const wordLength = word.length/2;
    for (let i = 0; i < wordLength; i++) {
        const leftChar = word[i];
        const rightChar = word[word.length - (i + 1)];
        if (leftChar !== rightChar) {
            return false;
        } else {
            return true;
        }
    }
}

// Function 11
const deleteDuplicateLettes = function(str = 'ananas') {
    let resultString = '';
    for (let i = 0; i < str.length; i++) {
        if (str.lastIndexOf(str[i]) === str.indexOf(str[i])) {
            resultString += str[i];
        }
    }
    return resultString;
}

// F#1
console.log(`Max number: ${getMaxDigit()}`);
// F#2
console.log(`Pow: ${pow()}`);
// F#3
console.log(`Correct name: ${getCorrectName()}`);
// F#4
console.log(`Sum with TAX: ${getSumWithTax()}`);
// F#5
console.log(`Random number: ${getRandomNumber()}`);
// F#6
console.log(`Letter count: ${getLetterCount()}`);
// F#7
console.log(`Convert money: ${convertMoney()}`);
// F#8
console.log(`Random password: ${getRandomPassword()}`);
// F#9
console.log(`Delete letters: ${deleteLetters()}`);
// F#10
console.log(`Palindrom true/false : ${isPalindrom()}`);
// F#11
console.log(`Deleted duplicate letters: ${deleteDuplicateLettes()}`);