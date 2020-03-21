const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const transactions = require("./routes/transactions");
const path = require('path');

// PORT
const PORT = process.env.PORT || 5000;

// CONFIGURE DOTENV, WHICH FILE TO USE
dotenv.config({ path: "./config/config.env" });
// START CONNECTION WITH MONGODB ATLAS
connectDB();

const app = express();
// USE JSON TO PARSE BODIES
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// ADDING ROUTES
app.use("/api/v1/transactions", transactions);


app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
