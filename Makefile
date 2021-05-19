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

even: #запуск игры "проверка на чётность"
	node bin/brain-even.js

