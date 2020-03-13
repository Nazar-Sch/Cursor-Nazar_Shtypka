const TIME_OUT = 50;
async function getRandomChinese(length) {
    try {
        let chineseWord = '';
        for (let i = 0; i < length; i++) {
        let newPromise = new Promise((resolve) => {
            setTimeout(() => {
                let sign = Date.now().toString().substr(-5);
                resolve(String.fromCharCode(sign))
            }, length * TIME_OUT);
        })
        await newPromise.then(letter => {
            chineseWord += letter;
        })
    }
    console.log(chineseWord);
    return chineseWord;
    } catch(err) {
        console.log(err);
    }
}
getRandomChinese(5);
