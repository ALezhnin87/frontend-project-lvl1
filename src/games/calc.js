import utilities from '../utilities.js';
import runEngine from '../index.js';

const gameRules = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calcExpression = (num1, num2, operator) => {
  let result;
  if (operator === '+') {
    result = num1 + num2;
  } if (operator === '-') {
    result = num1 - num2;
  } if (operator === '*') {
    result = num1 * num2;
  }
  return result;
};

const getGameQuestionAndAnswer = () => {
  const num1 = utilities.getRandomInt(100);
  const num2 = utilities.getRandomInt(100);
  const operator = operators[utilities.getRandomInt(operators.length)];

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calcExpression(num1, num2, operator));

  return { question, correctAnswer };
};

const gameData = { gameRules, getGameQuestionAndAnswer };

const runGame = () => {
  runEngine(gameData);
};

export default runGame;
