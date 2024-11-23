const express = require("express");
const router = express.Router();
const someObj = require("../models/SomeObjectModel");

router.get("/", (req, res) => {
  const obj = new someObj();
  res.render("index", { obj: obj });
});

module.exports = router;
