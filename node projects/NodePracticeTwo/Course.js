const express = require("express");
const Mongoose = require("mongoose");
const { route } = require("./Friends");
const router = express.Router();

router.use(express.json());

const authorSchema = new Mongoose.Schema({
  name: { type: String, required: true },
  year: String,
});

const courseSchema = new Mongoose.Schema({
  name: String,
  author: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: "author",
  },
});

const Author = Mongoose.model("author", authorSchema);
const Courses = Mongoose.model("Courses", courseSchema);

async function createAuthor() {
  const author = new Author({
    name: "anurag",
    year: "2003",
  });
  const result = await author.save();
  console.log(result);
}

// createAuthor();

// router.post('/post/',(req,res)=>{

async function createCourse(course, author) {
  const newCourse = new Courses({
    name: course,
    author: author,
  });
  const result = await newCourse.save();
  console.log(result);
}
async function getCourses() {
  try {
    const result = await Courses.find()
      .populate("author", "name -_id")
      .select("name author");
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}
// });
// createCourse("nodejs", "602a1150c6d7061ef8bfd840");
getCourses();
module.exports = router;
