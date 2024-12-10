
// require('dotenv').config();
// console.log("DB_FILE:", process.env.DB_FILE); // Should print the path to your DB file
// console.log("PORT:", process.env.PORT); // Should print the port number
// module.exports = {
//   environment: process.env.NODE_ENV || "development",
//   port: process.env.PORT || 8000,
//   dbFile: process.env.DB_FILE,
//   jwtConfig: {
//     secret: process.env.JWT_SECRET,
//     expiresIn: process.env.JWT_EXPIRES_IN,
//   },
// };


//require('dotenv').config();
module.exports = {
  environment: "production",
  port:  8000,
  dbFile: "./db/dev.db",
  jwtConfig: {
    secret: "doPfzPJJypH8FQ",
    expiresIn: 604800,
  },
}

// config/index.js

