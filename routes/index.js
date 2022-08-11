const express= require("express");
//use router to handle
const router=express.Router();


const homeController=require("../controllers/home_controller");
const addListController=require("../controllers/addListController");
const deleteController=require("../controllers/deleteController");


//homecontroller to display to the user and root 
router.get("/", homeController.home);

//when adding the list ,it will handle 
router.use('/add-list',addListController.addList);
//when delteing the lost , this conroller will handle the request
router.use("/delete-contact",deleteController.delete);


module.exports=router;