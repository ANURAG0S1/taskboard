const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    minlength: 3,
  },
  sirname: {
    type: String,
    lowercase: true,
    required: true,
  },
});
const Info = mongoose.model("Info", userSchema);
router.post("/post/", async (req, res) => {
  const user = new Info({
    name: req.body.name,
    sirname: req.body.sirname,
  });
  try {
    const result = await user.save();
    res.send(result);
  } catch (error) {
    console.log(error);
  }

  console.log("get request recieved");
});

router.get("/get/", async (req, res) => {
  const result = await Info.find();
  res.send(result);
});

module.exports = router;
