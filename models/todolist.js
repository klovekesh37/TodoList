const mongoose=require('mongoose');

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
module.exports=ToDo;