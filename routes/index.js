var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://hripple46:9dLjkWYCta_nncN@cluster0.xe9kaoh.mongodb.net/?retryWrites=true&w=majority"
);

const messageSchema = new mongoose.Schema({
  text: String,
  user: String,
  added: Date,
});
const userMessage = mongoose.model("userMessage", messageSchema);

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Message Board", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form");
});
router.post("/new", function (req, res, next) {
  messages.push({
    text: req.body.newMessage,
    user: req.body.user,
    added: new Date(),
  });
  let message1 = new userMessage({
    text: req.body.newMessage,
    user: req.body.user,
    added: new Date(),
  });
  message1.save();

  res.redirect("/");
});

module.exports = router;
