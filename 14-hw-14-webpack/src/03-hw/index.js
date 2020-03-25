export default function deleteLetters(word = "blablabla", letter = "b") {
    let pureWord = ''; 
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== letter) {
            pureWord += word[i];
        }
    }
    return `Word witout ${letter} is: ${pureWord}`;
}