import { Router } from "express";
import {
 createMascotas,
 findAllMas,
 deleteMas,
 updateMas,
} from '../controllers/mascot.controller.js'




const router=Router();


//get
router.get('/', findAllMas)

//getby id
router.get('/:id',)



//insert
router.post("/new",createMascotas);

//update
router.post("/update/:id",updateMas)

//delete
router.post("/delete/:id",deleteMas);




export default router

