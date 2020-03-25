export default async function getRandomChinese(length) {
    const TIME_OUT = 50;
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
    return chineseWord;
}
