const mongoose=require('mongoose');


//create schema in the databse for the the todo list 
const todoSchema=new mongoose.Schema({
    des:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
});

const ToDo=mongoose.model('ToDo',todoSchema);

//exports the schema 
module.exports=ToDo;