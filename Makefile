# Переменные
NPM = npm
GIT = git

# Пример: make push m="описание фичи"
push:
	$(GIT) add .
	$(GIT) commit -m "$(m)"
	$(GIT) push
pull:
	$(GIT) pull

# Запуск приложений 
dev1:
	(cd proect1 && exec npm run dev)

