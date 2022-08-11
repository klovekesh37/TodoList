const express= require("express");
const mongoose=require('mongoose');
const app= express();
const port=8000;


app.use(express.urlencoded());

const db= require('./config/mongoose');

app.use('/',require('./routes/index'));

//set path for the static files e.g. css, images, js etc
app.use(express.static('./assets'));

//set view engine and path
app.set('view engine',"ejs");
app.set('views',"./views");

//listen on port
app.listen(port, function(err){
    if(err){
        console.log(`Error: ${err}`);
    }
    console.log(`Server is running on port ${port}`);
})