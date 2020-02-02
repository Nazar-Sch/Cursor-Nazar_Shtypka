let numberFrom = parseInt(prompt(`Enter number "from": `), 10);
if (isNaN(numberFrom)) {
    parseInt(prompt(`Enter number "from": `), 10);
} else {
    console.log(numberFrom);
}


let numberTo = +prompt(`Enter number "to": `);
let sum = numberFrom + 1;
let evenNumber = confirm(`Entered nember must be even or odd (button "cancel") ?`);
if (evenNumber) {
    for (i = numberFrom; i <= numberTo; i++) {
        console.log(sum)
    }
    
}
