const express= require("express");
const mongoose=require('mongoose');
const app= express();
const port=8000;

const db= require('./config/mongoose');
const ToDO=require('./models/todolist');
app.use('/',require('./routes/index'));

console.log(ToDO);

app.set('view engine',"ejs");
app.set('views',"./views");

app.listen(port, function(err){
    if(err){
        console.log(`Error: ${err}`);
    }
    console.log(`Server is running on port ${port}`);
})