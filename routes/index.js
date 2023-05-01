var express = require("express");
var router = express.Router();
require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(
  `mongodb+srv://hripple46:${process.env.password}@cluster0.xe9kaoh.mongodb.net/?retryWrites=true&w=majority`
);
const connection = mongoose.createConnection(
  `mongodb+srv://hripple46:${process.env.password}@cluster0.xe9kaoh.mongodb.net/?retryWrites=true&w=majority`
);

const userMessage = connection.model("userMessage", {
  text: String,
  user: String,
  added: Date,
});

const findMessages = async () => {
  const messages = await userMessage.find();
  console.log(messages.length);
  return messages;
};

/* GET home page. */
router.get("/", function (req, res, next) {
  findMessages().then((messages) => {
    res.render("index", { title: "Message Board", messages: messages });
  });
});

module.exports = router;
