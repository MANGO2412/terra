import { Router } from "express";
import {
 createUser,
 updateUser,
 deleteUser,
 findAllUser,
 log
}from '../controllers/user.controller.js'




const router=Router();


//get
router.get('/',findAllUser)

//insert
router.post("/new",createUser);

//update
router.post("/update/:id",updateUser)

//delete
router.post("/delete/:id",deleteUser);



//log
router.post('/login',log)

export default router