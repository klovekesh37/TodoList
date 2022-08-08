const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost/todo_list_app");

const db=mongoose.connection;

db.on('error',console.error.bind(console,'Error'));

db.once('open',function(){
    console.log("Connected to db");
})

module.exports=db;
