const path = require('path')
const express = require('express')
const app = express()

app.get('/test', function (req, res) {
  res.sendFile(path.resolve('./client/index.html'))



})

app.listen(3000,()=>console.log("listening"))