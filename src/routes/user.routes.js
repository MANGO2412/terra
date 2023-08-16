import { Router } from "express";
import {
 createUser,
 updateUser,
 deleteUser,
 findAllUser,
 log,
 findById
}from '../controllers/user.controller.js'




const router=Router();


//get
router.get('/',findAllUser)


router.get('/:id',findById)

//insert
router.post("/new",createUser);

//update
router.post("/update/:id",updateUser)

//delete
router.post("/delete/:id",deleteUser);

//adopcion



//log
router.post('/login',log)

export default router