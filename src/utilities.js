const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const isEven = (num) => (num % 2 === 0);

export default {
  getRandomInt,
  isEven,
};
