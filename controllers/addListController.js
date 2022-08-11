const ToDO=require("../models/todolist");

module.exports.addList=function(req,res){
    console.log(req.body);
    //create the list in the db using create method
    ToDO.create({
        des:req.body.description,
        date:req.body.time,
        category:req.body.category
    }, function(err, newToDoList){
        if(err){
            console.log("Error in creating list");
            return;
        }
        console.log("################", newToDoList);
        //return back to home
        return res.redirect('back');
    })
}



