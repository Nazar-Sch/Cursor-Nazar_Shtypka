const TIME_OUT = 50;
async function getRandomChinese(length) {
    const time = length * TIME_OUT;
    let chineseWord = '';
    for (let i = 0; i < length; i++) {
        const newPromise = new Promise((resolve) => {
            setTimeout(() => {
                let sign = Date.now().toString().substr(-5);
                resolve(String.fromCharCode(sign))
            }, time);
        })
    await newPromise.then(letter => {
        chineseWord += letter;
    })
    }
    console.log(`
    Random letters: ${chineseWord}. 

    Spended time: ${time}ms
    `);
    return chineseWord;
}
const lengthNum = Number(prompt('Please, enter number: ', 7));
console.log(getRandomChinese(lengthNum));