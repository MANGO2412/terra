import { Router } from "express";
import { 
    findAllMasDetail,
    createMasDetail,
    updateMasDetail,
    deleteMasDetail,
} from '../controllers/vacMAs.controller.js'

const router=Router();


//get
router.get('/', findAllMasDetail)

//insert
router.post("/new",createMasDetail);

//update
router.post("/update/:id",updateMasDetail)

//delete
router.post("/delete/:id",deleteMasDetail);




export default router