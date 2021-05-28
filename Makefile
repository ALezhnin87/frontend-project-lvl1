install: # установить зависимости
	npm ci

brain-games: # запуск
	node bin/brain-games.js

publish: # публикация игры
	npm publish --dry-run

lint: # запуск eslint
	npx eslint .

lint-fix: #исправление линтером
	npx eslint . --fix

brain-even: #запуск игры "проверка на чётность"
	node bin/brain-even.js

brain-calc: #Запуск игры "калькулятор"
	node bin/brain-calc.js

brain-gcd: #Запуск игры "НОД"
	node bin/brain-gcd.js

