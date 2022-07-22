//DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

//configuration
require("dotenv").config();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());

//MONGOOSE
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongo: ", process.env.MONGO_URI);
  }
);

// ROOT INDEX
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//BOOKS
const booksController = require("./controllers/books_controller");
app.use("/books", booksController);

// LISTEN
app.listen(PORT, () => {
  console.log(`Greetings! From port  ${PORT}`);
});
