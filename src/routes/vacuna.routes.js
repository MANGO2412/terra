import { Router } from "express";
import { 
    createVaccune,
    updateVac,
    findAllVac,
    deleteVac
} from '../controllers/vac.controller.js'

const router=Router();


//get
router.get('/', findAllVac)

//insert
router.post("/new",createVaccune);

//update
router.post("/update/:id",updateVac)

//delete
router.post("/delete/:id",deleteVac);




export default router
