var express = require("express");
var router = express.Router();
require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(
  `mongodb+srv://hripple46:${process.env.password}@cluster0.xe9kaoh.mongodb.net/?retryWrites=true&w=majority`
);
const messageSchema = new mongoose.Schema({
  text: String,
  user: String,
  added: Date,
});
const userMessage = mongoose.model("userMessage", messageSchema);

router.get("/", function (req, res, next) {
  res.render("form");
});
router.post("/", function (req, res, next) {
  let message1 = new userMessage({
    text: req.body.newMessage,
    user: req.body.user,
    added: new Date(),
  });
  message1.save();

  res.redirect("/");
});
module.exports = router;
