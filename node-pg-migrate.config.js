require("dotenv").config();

module.exports = {
  migrationDirectory: "migrations",
  direction: "up",
  logFileName: "migration.log",
  databaseUrl: process.env.DATABASE_URL,
};
