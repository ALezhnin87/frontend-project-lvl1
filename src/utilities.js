const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const isEven = (num) => (num % 2 === 0);

const getGCD = (num1, num2) => {
	if (num1 === num2 || num2 === 0) {
		return num1;
	}
	return getGCD(num2, num1 % num2);
};

export default {
	getRandomInt,
	isEven,
	getGCD,
};
