import { Router } from "express";
import user from './user.routes.js'
import mascota from './mascota.routes.js'
import Vacuna from "./vacuna.routes.js";
import vm from "./vm.routes.js"
const router=Router();

router.use('/user',user)
router.use('/pet',mascota)
router.use('/vacuna',Vacuna)
router.use('/vacdetail',vm)

export default router;