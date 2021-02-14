const express = require('express')
const app = express()
const moong = require('mongoose')

moong.connect('mongodb://localhost/dbPracticeTwo', { useNewUrlParser: true,useUnifiedTopology: true }).then(()=>{console.log('connected to database')}).catch((a)=>{
    console.log('connection error database not connected')
})