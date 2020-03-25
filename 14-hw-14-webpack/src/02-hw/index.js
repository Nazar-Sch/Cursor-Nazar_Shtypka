export default function renderNum() {
    let startNum = Number(prompt('Enter Your start number, please :)', 10));
    startNum = Math.round(startNum);
    while (isNaN(startNum)) {
        startNum = Number(prompt('Error :( You entered a string. Enter a start number, please :)'));
    }
    let lastNum = Number(prompt(`Enter Your last number, please :)`, 100));
    lastNum = Math.round(lastNum);
    while (isNaN(lastNum)) {
        lastNum = Number(prompt(`Error. You enterd a string. Enter a last number, please :)`));
    }
    while (startNum > lastNum) {
        lastNum = Number(prompt(`Enter larger last number than start number, please`));
    }
    const evenSum = confirm(`Do you want to skip even numbers ?`);
    let result = 0;
    for (let i = startNum; i <= lastNum; i++){    
        if (evenSum) {
            if (i % 2 === 0) {
               continue;
            } 
        }
        result += i;    
    }
    return `
    Your start number is: ${startNum};
    Your last number is: ${lastNum};
    Result: ${result}`; 
};


