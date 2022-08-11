var ToDoList=[];
const ToDo = require("../models/todolist");


module.exports.home=function(req,res){
    //fetch the data from the databse
    ToDo.find({},function(err,todolistfetch){
        if(err){
            console.log("Error in fetching contact from db");
            return;
        }
        // console.log(todolistfetch);

        //sent to the views to sent to sent to the browser
        return  res.render("home",
        {
            title:"ToDo list",
            todo_list:todolistfetch
        });
    })

} 
        






