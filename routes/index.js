const express= require("express");
const router=express.Router();

const homeController=require("../controllers/home_controller");

router.get("/", homeController.home);
router.post('/add-list',homeController.home);

module.exports=router;