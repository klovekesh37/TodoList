const ToDO=require("../models/todolist");

module.exports.delete=function(req,res){
    console.log(req.query);
    let id=req.query.id;

    ToDO.findByIdAndDelete(id,function(err){
        if(err){
            console.log(err);
            return;
        }
        return res.redirect('back');
    })

}