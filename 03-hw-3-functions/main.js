// 1. Создать функцию getMaxDigit(number) – которая получает любое число и выводит самую большую цифру в этом числе. Примеры: 1236 -> 6, 987 -> 9, 385 -> 8

function getMaxDigit(number = 17524) {
    const maxNum = Math.max(number.indexOf());
    return naxNum;
}

// 2. Создать функцию, которая вычисляет степень числа. Не используя Math.pow и **. Используйте цикл

function pow(num, exp) {
    if (exp === 0) return 1;
    let resultPow = num;
    for(let i = 1; i <= exp; i++) {
        resultPow *= num;
    }
    return resultPow;
}

// 3. Создать функцию, которая форматирует имя, делая первую букву заглавной. ("влад" -> "Влад", "вЛАД" -> "Влад" и так далее);

function getCorrectName(name = 'ВЛАд') {
    let correctLettersName = name.toLowerCase();
    correctLettersName = correctLettersName[0].toUpperCase() + correctLettersName.slice(1);
    return correctLettersName;
}

// 4. Создать функцию, которая вычисляет сумму оставшуюся после оплаты налога от заработной платы. (Налог = 18% + 1.5% -> 19.5%). Пример: 1000 -> 805

function getSumWithTax(sum) {
    const TAX = (19.5 / 100) * sum;
    sum = sum - TAX;
    return sum;
}
console.log(getSumWithoutTax(2000));

// 5. Создать функцию, которая возвращает случайное целое число в диапазоне от N до M. Пример: getRandomNumber(1, 10) -> 5

function getRanomNumber(n, m) {
    let n = 1;
    let m = 10;
    for (let i = n; i <= m; i++) {
        console.log(n)
    }

}

// 6. Создать функцию, которая считает сколько раз определенная буква повторяется в слове. Пример: countLetter("а", "Асталависта") -> 4

function getLetterA(word) {
    let letterA = 'a'
    if ( word == 'a') {
        
        console.log(letterA);
    } else {
        console.log(`Any letter 'a' is in this word`);
    }

}

// 7. Создайте функцию конвертиующую доллары в гривны и наоборот в зависимости от наличия символа $ или UAH в строке. Пример: convertCurrency("100$") -> 2500 грн. или convertCurrency("2500UAH") -> 100$
// Учтите, другие валюты не конвертируются, нужно выводить ошибку, а так же регистр uah не имеет значения.

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

function getRandomPassword(i) {
    for (let i = 0; i <= 8; i++)
}


// Создайте функцию, которая удаляет все буквы из предложения. Пример: deleteLetters('a', "blablabla") -> "blblbl"

function deleteLetters(word = "blablabla", letter = "a") {
    let pureWord = ''; 
   for (let i = 0; i < word.length; i++) {
       if (word[i] !== letter) {
           pureWord += word[i];
       }
   }
   return pureWord;
}
 

