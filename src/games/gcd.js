import utilities from '../utilities.js';
import runEngine from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGameQuestionAndAnswer = () => {
  const num1 = utilities.getRandomInt(100);
  const num2 = utilities.getRandomInt(100);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(utilities.getGCD(num1, num2));

  return { question, correctAnswer };
};

const gameData = { gameRules, getGameQuestionAndAnswer };

const runGame = () => {
  runEngine(gameData);
};

export default runGame;
