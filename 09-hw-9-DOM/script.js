// Make 25 squares of size 50x50 pixels each painted in a random color. Squares should be placed 5 in a row.
// For squares to appear on the page, you must call the generateBlocks () function;
// Advanced so that the squares change color once per second.
// In order for the squares to appear on the page and begin to change, you need to call the generateBlocksInterval () function.

function generateBlocks() {
    const getRandomColor = () => {
        return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
    }
    function createBlocks() {
        const parentSquare = document.getElementById('parentSquare');
        parentSquare.innerHTML = '';
        for(let i = 0; i < 25; i++) {
            const block = document.createElement('div');
            block.style.height = "50px";
            block.style.width = "50px";
            block.style.backgroundColor = getRandomColor();
            parentSquare.append(block);
        }
        return parentSquare;
    }
    return createBlocks();
}

function generateBlocksInterval() {
    return setInterval(() => {
        generateBlocks();
    }, 1000); 
}

generateBlocks();
generateBlocksInterval();



