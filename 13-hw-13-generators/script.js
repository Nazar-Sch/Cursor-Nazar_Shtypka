function* createIdGenerator(id) {
  while(true) {
    document.querySelector('.outputId').innerHTML = `${id}`;
    yield id++;
  }
}
const idGenerator = createIdGenerator(1);
document.querySelector('.idGenerator').addEventListener('click', () => idGenerator.next().value);

function* newFontGenerator(size) {
  while (true) {
    let result = yield size;
    if(result === "up") {
      size += 2;
      document.querySelector('.text').style.fontSize = size + "px";
    }
    if(result === "down") {
      size -= 2;
      document.querySelector('.text').style.fontSize = size + "px";
    }
  }
}

const fontGenerator = newFontGenerator(14); 
let plus = document.getElementById('up').addEventListener('click', () => fontGenerator.next("up").value);
let minus = document.getElementById('down').addEventListener('click', () => fontGenerator.next("down").value);
