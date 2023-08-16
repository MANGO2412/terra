import { Router } from "express";
import {
 findAllAdop,
 createAdopt,
 deleteAdop,
 findById,
 updateAdop,
 findByUser
} from '../controllers/adop.controller.js'




const router=Router();


//get
router.get('/',findAllAdop)


router.get('/byUser/:user',findByUser);


router.get('/:id',findById)

//insert
router.post("/new",createAdopt);

//update
router.post("/update/:id",updateAdop)




//delete
router.post("/delete/:id",deleteAdop);

//adopcion



//log

export default router