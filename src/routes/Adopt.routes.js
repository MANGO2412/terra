import { Router } from "express";
import {
 findAllAdop,
 createAdopt,
 deleteAdop,
 updateAdop,
 findByUser
} from '../controllers/adop.controller.js'




const router=Router();


//get
router.get('/',findAllAdop)

//by user
router.get('/byUser/:id',findByUser)




router.get('/:id',findByUser)

//insert
router.post("/new",createAdopt);

//update
router.post("/update/:id",updateAdop)




//delete
router.post("/delete/:id",deleteAdop);

//adopcion



//log

export default router