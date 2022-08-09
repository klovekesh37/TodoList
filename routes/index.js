const express= require("express");
const router=express.Router();

const homeController=require("../controllers/home_controller");
const addListController=require("../controllers/addListController");

router.get("/", homeController.home);

router.use('/add-list',addListController.addList);


module.exports=router;