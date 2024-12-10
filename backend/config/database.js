require('dotenv').config();
const {dbFile} = require('./index')
module.exports = {
  development: {
    storage: dbFile,
    dialect: "sqlite",
    seederStorage: "sequelize",
    logQueryParameters: true,
    typeValidation: true,
  },
  production: {
    use_env_variable: process.env.DATABASE_URL || null,
    dialect: "postgres",
    seederStorage: "sequelize",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      schema: "HauntedBnB",
    },
  },
};






