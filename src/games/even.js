import utilities from '../utilities.js';
import runEngine from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameQuestionAndAnswer = () => {
	const question = utilities.getRandomInt(101);
	const correctAnswer = utilities.isEven(question) ? 'yes' : 'no';

	return { question, correctAnswer };
};

const gameData = { gamerules, getGameQuestionAndAnswer };

const runGame = () => {
	runEngine(gameData);
};

export default runGame;
