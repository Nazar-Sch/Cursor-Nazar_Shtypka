function* createIdGenerator() {
    let id = 0;
    while (true) {
      yield id++;
    }
  }
  const idGenerator = createIdGenerator();
  idGenerator.next().value;

let plus = document.getElementById('plus').addEventListener('click', getPlus);
let minus = document.getElementById('minus').addEventListener('click', getPlus);



