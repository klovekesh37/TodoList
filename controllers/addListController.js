const ToDO=require("../models/todolist");

module.exports.addList=function(req,res){
    console.log(req.body);

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
        return res.redirect('back');
    })
}



