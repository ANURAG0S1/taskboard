const express  = require('express')
const app = express();
const db = require('./dbConnect')
const mongoose = require("mongoose");
// const db = require('./dbConnect')
app.use(express.json())
app.use('/api/',db)
mongoose
  .connect("mongodb://localhost/NodePracticeOneDB", { useNewUrlParser: true,
  useUnifiedTopology: true} )
  .then(() => {
    console.log(`you are live on port ${port}`);
  })
  .catch(() => {
    console.log("something went wrong");
  });

 



app.get('/api',  )

const port = process.env.PORT || 3000;
app.listen(port)