# Переменные
NPM = npm
GIT = git

# Пример: make push m="описание фичи"
push:
	$(GIT) add .
	$(GIT) commit -m "$(m)"
	$(GIT) push
# последние обновление дериктории
pull:
	$(GIT) pull

# Полезные команды для дальнейшей работы

# Создает оптимизированную сборку проекта для продакшена (в папкеdist). Пример использования make build m=указаная_папка
build:
	cd $(m) $(NPM) run build 

# Запускает локальный сервер для просмотра продакшен-сборки.
serverlokal:
	cd $(m) && $(NPM) run preview

# Обновляет зависимости до последних версий.  make updateReact m=указаная_папка 
updateReact:
	cd react/$(m) && $(NPM) update
# Запуск приложений 
index:
	cd $(m) && node index.js

server:
	cd $(m) && $(NPM) run dev

help:
	@echo "Доступные команды:"

	@echo "  push     - добавить изменения и отправить в репозиторий. Пример использования make push m="описание фичи""
	@echo "  pull     - обновить локальный репозиторий "
	@echo "  build    - создать оптимизированную сборку проекта.  Пример использования make push m=указаная_папка"
	@echo "  serverlokal  - запустить локальный сервер. Пример использования make serverlokal m=указаная_папка"
	@echo "  updateReact  - обновить зависимости React. Пример использования make updateReact m=указаная_папка"
	@echo "  index    - запустить приложение. Пример использования make index m=указаная_папка"
	@echo "  server   - запустить сервер. Пример использования make server m=указаная_папка"