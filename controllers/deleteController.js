const ToDO=require("../models/todolist");

module.exports.delete=function(req,res){
    console.log(req.query);
    //store the id from the query recived
    let id=req.query.id;

    //delete the list fromt the database using id
    ToDO.findByIdAndDelete(id,function(err){
        if(err){
            console.log(err);
            return;
        }
        return res.redirect('back');
    })

}