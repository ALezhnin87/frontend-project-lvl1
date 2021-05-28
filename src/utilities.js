const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const isEven = (num) => (num % 2 === 0);

const getGCD = (num1, num2) => {
  if (num1 === num2 || num2 === 0) {
    return num1;
  }
  return getGCD(num2, num1 % num2);
};

const getProgression = (firstElem, delta, amountOfElements) => {
  const progression = [];

  for (let i = 1; i <= amountOfElements; i += 1) {
    progression.push(firstElem + delta * i - 1);
  }
  return progression;
};

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export default {
  getRandomInt,
  isEven,
  getGCD,
  getProgression,
  isPrime,
};
