const mongoose=require('mongoose');

const todoSchema=new mongoose.Schema({
    des:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
});

const ToDo=mongoose.model('ToDo',todoSchema);