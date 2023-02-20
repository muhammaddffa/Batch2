require('dotenv').config({})
const express = require('express')
const app = express();
const port = 3005;
const mainRoutes = require('./src/routes')

app.use(express.urlencoded({extended:false}))
app.use('/', mainRoutes)
app.listen(port,() => {
    console.log(`Server run on port:${port}`);
})

//npm init -y
//npm i (dependensi yang dibutuhkan)