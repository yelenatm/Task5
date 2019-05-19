//I only want migrations, rollbacks, and seeds to run when the NODE_ENV is specified
//in the knex seed/migrate command. Knex will error out if it is not specified.


require('dotenv').config();

module.exports = {
    testing: {
        client: 'mysql',
        debug: false,
        connection: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
        },
        migrations: {
            directory: './src/db/migrations',
        },
        seeds: {
            directory: './src/db/seeds/dev',
        },
    },
    development: {
        client: 'mysql',
        debug: false,
        connection: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
        },
        migrations: {
            directory: './src/db/migrations',
        },
        seeds: {
            directory: './src/db/seeds/dev',
        },
    },
    production: {
        client: 'mysql',
        debug: false,
        connection: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
        },
        migrations: {
            directory: './src/db/migrations',
        },
    }
}