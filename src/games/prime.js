import utilities from '../utilities.js';
import runEngine from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Othervise answer "no".';

const getGameQuestionAndAnswer = () => {
  const question = utilities.getRandomInt(100);
  const correctAnswer = utilities.isPrime(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

const gameData = { gameRules, getGameQuestionAndAnswer };

const runGame = () => {
  runEngine(gameData);
};

export default runGame;
