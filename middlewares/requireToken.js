import jwt from 'jsonwebtoken'
import { tokenVerificationErrors } from '../utils/tokenManager.js'

export const requireToken = (req, res, next) => {
    try {
        let token = req.headers?.authorization;
        if(!token) throw new Error('No existe token, usa Bearer')
        token = token.split(" ")[1];
        // jwt.verify devuelve el payload de jwt, donde viene uid
        const {uid} = jwt.verify(token, process.env.JWT_SECRET)  
        req.uid = uid
        
        next()
    } catch (error) {

        const tokenVerificationErrors = {
            'invalid signatura' : "La firma del JWT no es válida",
            "jwt expired" : "JWT expirado",
            "invalid token" : "Token inválido",
            "No Bearer" : "Utiliza el formato Bearer"
        }
        return res
            .status(401)
            .send({error : tokenVerificationErrors[error.message]})
        return res.status(401).json({error : error.message})
    }
}