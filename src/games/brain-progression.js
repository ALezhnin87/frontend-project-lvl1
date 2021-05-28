import utilities from '../utilities.js';
import runEngine from '../index.js';

const gameRules = 'What number is missing in the progression?';

const getGameQuestionAndAnswer = () => {
  const firstElem = utilities.getRandomInt(100);
  const delta = utilities.getRandomInt(20);
  const amountOfElements = 10;

  const array = utilities.getProgression(firstElem, delta, amountOfElements);

  const hiddenIndex = utilities.getRandomInt(amountOfElements);
  let hiddenNum = '..';
  [hiddenNum, array[hiddenIndex]] = [array[hiddenIndex], hiddenNum];

  const question = array.join(' ');
  const correctAnswer = String(hiddenNum);

  return { question, correctAnswer };
};

const gameData = { gameRules, getGameQuestionAndAnswer };

const runGame = () => {
  runEngine(gameData);
};

export default runGame;
