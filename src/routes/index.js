import { Router } from "express";
import user from './user.routes.js'
import mascota from './mascota.routes.js'
const router=Router();

router.use('/user',user)
router.use('/pet',mascota)

export default router;