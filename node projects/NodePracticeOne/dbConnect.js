const mongoose = require("mongoose");
const express  = require('express')
const router = express.Router()
const schema = new mongoose.Schema({
  name: {type:String,
required:true,
minlength:5},
  username: {type:String, required:true},
  RollNo: String,
});
const Info = mongoose.model("info", schema);

async function saveData(a) {
  const user = new Info({
    name: a.body.name,
    username: a.body.username,
    RollNo: a.body.RollNo,
  });
  console.log("saving data ......");
  try {
    const result = await user.save();
    return result;

  } catch (error) {
    for(field in error.errors){
      console.log(error.errors[field].message)
    }
  }
}
// async function saveData(){
//   const user = new Info({
//     username:1
//   })
//   try {
//     console.log('success')
//     const result = await user.save();
    
//   } catch (error) {
//     ()=>{
//       console.log('error')
//     }
//   }
//   }
async  function getData(){
   const result = await Info.find() 
   return result
}
async function updateData(a){
    const result = await Info.findByIdAndUpdate(a.body.id)
    if (a.body.name){
      result.username= a.body.name
    }
    if (a.body.newUserName){
      result.username = a.body.newUserName
    }
    // result.username = a.body.newUserName
   const updated = await result.save();
    return updated;
}
async function removeData(a){
    const result = await Info.findByIdAndDelete(a.body.id)
    console.log(result)
    return result;
}

router.get('/get/',async (req,res)=>{
    const result= await getData(req);
    res.send(result)})

router.post('/post/',async (req,res)=>{
    const result = await saveData(req);
    res.send(result)
})
router.put('/put/', async (req,res)=>{
  const result = await updateData(req);
  res.send(result)
})
router.delete('/delete/',async(req,res)=>{
  const result= await removeData(req);
  res.send(result);
})
// saveData()
module.exports = router ;
