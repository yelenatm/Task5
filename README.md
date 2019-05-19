

```
### Установка / Начало работы

# установить зависимости отдельно для папок web (frontend) и api (backend)

Web folder
# установить зависимости cd web ->
npm install

# запустить сервер на localhost
npm run watch

# build for production -> создание папки dist
npm run build

# dist directory deployment
npm install -g serve
serve -s dist

API folder
# установить зависимости cd api ->
npm install

# запустить сервер на localhost
npm run watch

# build for production 
npm run build

# serve in production using the pm2 ecosystem.json file
npm run start-production

## knex seed and migration make commands ##

# make migration
knex migrate:make create_users_table

# make seed
knex seed:make seed_users

```
db
Используется Knex для выполнения миграций. БД - MySQL. Необходимо создать .env файл на примере example.env
