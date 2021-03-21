const express = require("express");
const app = express();
const mongoose = require("mongoose");
const simple = require("./Simple");
const frnds = require("./Friends");
const courses = require("./Course");

//middlewares

app.use(express.json());

// connecting to database
mongoose
  .connect("mongodb://localhost/dbPracticeTwo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to database");
  })
  .catch((a) => {
    console.log("connection error database not connected");
  });

// simple router to different pages

app.use("/frnds/", frnds);
app.use("/simple/", simple);
app.use("/courses/", courses);

const port = process.env.node || 3000;

// starting the server

app.listen(port, () => {
  console.log(`app is hosted on port  ${port}`);
});
