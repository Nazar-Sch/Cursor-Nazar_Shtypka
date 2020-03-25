export default function* createIdGenerator() {
    let id = 1;
    while(true) {
        yield id++;
    }
  }
  export const idGenerator = createIdGenerator();
  