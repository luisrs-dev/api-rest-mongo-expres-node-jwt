import { Router } from 'express'
import { register, login, infouser, refreshToken } from '../controllers/auth.controllers.js'
import {body} from 'express-validator'
import { validationResultExpress } from '../middlewares/validationResultExpress.js'
import { requireToken } from '../middlewares/requireToken.js'
import { requireRefreshToken } from '../middlewares/requireRefreshToken.js'
const router = Router()

router.post("/register", [
    body('email', 'Formato email incorrecto')
        .trim().
        isEmail(),
    body('password', 'Mínimo 6 carácteres')
        .trim()
        .isLength({min:6})
        .custom((value, {req}) => {
            if(value!== req.body.repassword){
                throw new Error('No coinciden las contraseñas')
            }
            return value
        })
    ],
    validationResultExpress,
    register
    )


router.post("/login", [
    body('email', 'Formato email incorrecto')
        .trim().
        isEmail(),
    body('password', 'Mínimo 6 carácteres')
        .trim()
        .isLength({min:6})
    ], validationResultExpress, login)


//Funcionando con Postman    
router.get('/protected', requireToken, infouser)
//Funcionando con Postman    
router.get('/refresh', refreshToken, infouser)
router.get('/logout', requireToken, infouser)

export default router



