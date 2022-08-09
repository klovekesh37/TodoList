var ToDoList=[];
const ToDo = require("../models/todolist");

module.exports.home=function(req,res){
    ToDo.find({},function(err,todolistfetch){
        if(err){
            console.log("Error in fetching contact from db");
            return;
        }
        // console.log(todolistfetch);
        return  res.render("home",
        {
            title:"ToDo list",
            todo_list:todolistfetch
        });
    })

} 
        






