const express= require("express");
const router=express.Router();

const homeController=require("../controllers/home_controller");
const addListController=require("../controllers/addListController");
const deleteController=require("../controllers/deleteController");

router.get("/", homeController.home);

router.use('/add-list',addListController.addList);
router.use("/delete-contact",deleteController.delete);


module.exports=router;