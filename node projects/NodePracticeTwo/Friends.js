const express = require("express");
const Mongoose = require("mongoose");
const router = express.Router();

router.use(express.json());
// const cSchema = new Mongoose.Schema({});
// const charr = Mongoose.model("cSchema", cSchema);

const fSchema = new Mongoose.Schema({
  name: String,
  person: {
    type: String,
    required: true,
  },
  like: {
    type: Boolean,
    required: true,
  },
});

const Friends = Mongoose.model("friends", fSchema);
router.post("/post/", async (req, res) => {
  try {
    const result = new Friends({
      name: req.body.name,
      person: req.body.person,
      like: req.body.like,
    });
    // const fc = await friendsChar.save();
    const ress = await result.save();
    res.send(ress);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
