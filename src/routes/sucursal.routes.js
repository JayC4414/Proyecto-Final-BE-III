import {Router} from 'express'
const router = Router()

import * as sucursalCtrl from '../controllers/sucursal.controller'
import {authJwt}from '../middlewares'

router.post("/", [authJwt.verifyToken, authJwt.isModerator], sucursalCtrl.createSucursal);

router.get('/', sucursalCtrl.getSucursales)

router.get('/:sucursalId', sucursalCtrl.getSucursalById)

router.put('/:sucursalId', [authJwt.verifyToken, authJwt.isAdmin], sucursalCtrl.updateSucursalById)

router.delete('/sucursaltId', [authJwt.verifyToken, authJwt.isAdmin], sucursalCtrl.deleteSucursalById)

export default router;