const getClothes = new Promise((resolve, reject) => {
  setTimeout(() => resolve('1. 옷을 입다 '), 1000);
});

const openDoor = (cloth) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`${cloth} 2.문을 연다`)), 1000);
  });

const goOut = (door) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${door} 3. 밖으로 나간다`), 1000);
  });

getClothes
  .then((cloth) => openDoor(cloth))
  .catch(error=> '2. 창문을 연다')
  .then((door) => goOut(door))
  .then((sentence) => console.log(sentence))
  .catch(console.log);