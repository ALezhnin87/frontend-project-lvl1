const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const isEven = (num) => num % 2 === 0? true: false;

export default {
	getRandomInt,
	isEven
};

