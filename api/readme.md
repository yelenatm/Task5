
## Уствновка / Начало работы

``` bash
# установить зависимости cd api ->
npm install

# запустить сервер cd api ->
npm run watch

# build for production cd api ->
npm run build

# serve in production using the pm2 ecosystem.json file
npm run start-production

## knex seed and migration make commands ##

# make migration
knex migrate:make create_users_table

# make seed
knex seed:make seed_users

```

### db

Используется Knex для выполнения миграций. БД - MySQL.
