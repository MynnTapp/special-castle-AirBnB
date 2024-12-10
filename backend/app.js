require('dotenv').config();
const express = require("express");
require("express-async-errors");
const morgan = require("morgan");
const cors = require("cors");
const csurf = require("csurf");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const { environment } = require("./config/index");
const routes = require("./routes");
const { ValidationError } = require("sequelize");


const isProduction = environment === "production";
const app = express();

// Middleware
app.use(morgan("dev"));

app.use(cookieParser());

app.use(express.json());

// Security Middleware
// if (!isProduction) {
//    // enable cors only in development
//    app.use(cors());
// }


const corsOptions = {
   origin: isProduction
      ? "https://special-castle-airbnb.onrender.com" // Replace with your deployed frontend URL
      : "*", // Allow all origins in development
   methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
   credentials: true, // Allow cookies to be sent/received
};

app.use(cors(corsOptions));


// helmet helps set a variety of headers to better secure your app
app.use(
   helmet.crossOriginResourcePolicy({
      policy: "cross-origin",
   })
);

// Set the _csrf token and create req.csrfToken method
app.use(
   csurf({
      cookie: {
         secure: isProduction,
         sameSite: isProduction && "Lax",
         httpOnly: true,
      },
   })
);

app.use(routes); // Connect all the routes

// Catch unhandled requests and forward to error handler.
app.use((_req, _res, next) => {
   const err = new Error("The requested resource couldn't be found.");
   err.status = 404;
   next(err);
});

// Process sequelize errors
app.use((err, _req, _res, next) => {
   // check if error is a Sequelize error:
   if (err instanceof ValidationError) {
      let errors = {};
      for (let error of err.errors) {
         errors[error.path] = error.message;
      }
      err.errors = errors;
   }
   next(err);
});

// Error formatter
app.use((err, _req, res, _next) => {
   res.status(err.status || 500).json({
      message: err.message,
      errors: err.errors,
      stack: isProduction ? undefined : err.stack,
   });
});


const db = require("./db/models/index");  // Update path to models folder
console.log("DB Config:", db.sequelize.config);
console.log("Environment:", environment);


module.exports = app;
