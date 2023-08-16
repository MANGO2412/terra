import { Router } from "express";
import user from './user.routes.js'
import mascota from './mascota.routes.js'
import Vacuna from "./vacuna.routes.js";
import vm from "./vm.routes.js"
import Adopt from "./Adopt.routes.js"
const router=Router();

router.use('/user',user)
router.use('/pet',mascota)
router.use('/vacuna',Vacuna)
router.use('/vacdetail',vm);
router.use('/adopcion',Adopt)

export default router;