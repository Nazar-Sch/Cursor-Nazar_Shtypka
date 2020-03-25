import './style.css';

export const parentSquare = document.getElementById('dom');

function createBlocks() {
    const blocksLength = 25;
    parentSquare.innerHTML = ' ';
    for (let i = 0; i < blocksLength; i++) {
        const block = document.createElement('div');
        block.style.height = "50px";
        block.style.width = "50px";
        block.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
        parentSquare.append(block);
    }
    return parentSquare;
}

export function generateBlocksInterval() {
    const int = setInterval(() => {
        createBlocks();
    }, 500); 
    return int; 
}