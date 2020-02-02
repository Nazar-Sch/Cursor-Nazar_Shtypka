let startNum = +prompt('Enter Your start number, please :)', 10);
while (isNaN(startNum)) {
    startNum = +prompt('Error :( You entered a string. Enter a start number, please :)');
}

let lastNum = +prompt(`Enter Your last number, please :)`, 100);
while (isNaN(lastNum)) {
    lastNum = +prompt(`Error. You enterd a string. Enter a last number, please :)`);
}

while (startNum > lastNum) {
    lastNum = +prompt(`Enter larger last number than start number, please`);
}

const evenSum = confirm(`Do you want to skip even numbers ?`);
document.writeln(evenSum ? `Skip even numbers <br>` : `Don't skip even numbers <br>`);

let result = 0;

for (let i = startNum; i <= lastNum; i++){    
    if (evenSum) {
        if (i % 2 === 0) {
           continue;
        } 
        else {
            result += i; 
        }
    }
    else {
        result += i;  
    }  
    console.log(result);
}

document.writeln(`
Your start number is: ${startNum} <br>
Your last number is: ${lastNum} <br>
Result: ${result}`);