require("dotenv/config");

module.exports = {
  "username": "postgres",
  "password": process.env.DB_PASSWORD,

  "name": "default",
  "type": "postgres",
  "host": "localhost",
  "port": process.env.DB_PORT,
  "database": process.env.DB_DATABASE,
  "entities": [
    "./src/entities/*.ts"
  ],
  "migrations": [
    "./src/database/migrations/*.ts"
  ],
  "cli": {
    "entitiesDir": "./src/entities",
    "migrationsDir": "./src/database/migrations"
  }
}