install: # установить зависимости
	npm ci

brain-games: # запуск
	node bin/brain-games.js

publish: # публикация игры
	npm publish --dry-run

lint: # запуск eslint
	npx eslint .

