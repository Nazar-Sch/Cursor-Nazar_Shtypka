// Funtion #1
function getMaxDigit(number = 17524) {
    number = String(number).split('');
    number = Math.max(...number);
    return number;
}
console.log(getMaxDigit());

//Function #2
function pow(num = 2, exp = 3) {
    if (exp === 0) return 1;
    let resultPow = num;
    for(let i = 1; i <= exp; i++) {
        resultPow *= num;
    }
    return resultPow;
}
console.log(pow());

// Function #3
function getCorrectName(name = 'ВЛАд') {
    let correctLettersName = name.toLowerCase();
    correctLettersName = correctLettersName[0].toUpperCase() + correctLettersName.slice(1);
    return correctLettersName;
}
console.log(getCorrectName());

//Function #4
function getSumWithTax(sum = 2000) {
    const TAX = (19.5 / 100) * sum;
    sum = sum - TAX;
    return sum;
}
console.log(getSumWithoutTax());

// Function #5
function getRandomNumber(low = 1, high = 10) {
    return Math.floor(Math.random() * (high - low) + low);
  }
console.log(getRandomNumber());


// 6. Создать функцию, которая считает сколько раз определенная буква повторяется в слове. Пример: countLetter("а", "Асталависта") -> 4

function getLetterCount(word = 'ananas', letter = 'a') {
    let countResult = 0;
    for (let i = 0; i <= word.length; i++) {
        if (word[i] === letter) {
            countResult++
        }
    }
return countResult;
}

// Function #7 
function convert(money) {
    const exchangeRate = 25;
    const toDollar = false;
    const toUah = true;
    if (toUah) {
        money = money * exchangeRate;
        return money + ' грн';
    } else if (toDollar){
        money = money / exchangeRate;
        return money + '$';
    } else {
        return `Error. We don't convert this money`;
    }
}

// Создайте функцию генерации случайного пароля (только числа), длинна устанавливается пользователем или по умолчанию = 8 символам.
// Пример: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124

function getRandomPassword(countChar = 8) {
         for (let i = 0; i <= countChar; i++) {
            let number = Math.floor(Math.random(10) * 10);
            console.log(number);
            }
        return number;
    }
console.log(getRandomPassword());

// Function #9
function deleteLetters(word = "blablabla", letter = "a") {
    let pureWord = ''; 
   for (let i = 0; i < word.length; i++) {
       if (word[i] !== letter) {
           pureWord += word[i];
       }
   }
   return pureWord;
}
console.log(deleteLetters());
 

// 10. Создайте функцию, которая проверяет является ли слово палиндромом. Пример: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Аргентина манит негра") -> true

function isPalindrom(word = 'madam') {
    let result = true;
    const wordLength = word.length/2;
    for (let i = 0; i < wordLength; i++) {
    const leftChar = word[i];
    console.log(leftChar);
    const rightChar = word[word.length - (i + 1)];
    console.log(rightChar);
    if (leftChar !== rightChar) {
        return false;
    }
}
    return result;
}

console.log(isPalindrom());


// Создайте функцию, которая удалит из предложения буквы, которые встречаются более 1 раза. Пример:

function deleteDuplicateLetter(str = "Бисквит был очень нежный") {
    
    
    return letter;
}
