const express= require("express");
const mongoose=require('mongoose');
const app= express();
const port=8000;

app.use(express.urlencoded());

const db= require('./config/mongoose');
app.use('/',require('./routes/index'));

app.use(express.static('./assets'));

app.set('view engine',"ejs");
app.set('views',"./views");

app.listen(port, function(err){
    if(err){
        console.log(`Error: ${err}`);
    }
    console.log(`Server is running on port ${port}`);
})