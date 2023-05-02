import {validationResult} from 'express-validator'
import {User} from '../models/User.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config.js'
import {generateRefreshToken, generateToken} from '../utils/tokenManager.js'
export const register = async (req, res) => {
    const {email, password} = req.body
    try {
        let user = await User.findOne({email})
        if(user) throw {code : 11000}


        user = new User({email, password}) 
        await user.save()
        return res.json({ok:true})
        
    } catch (error) {
        console.log(error);
        if(error.code == 11000){
             return res.status(400).json({error : 'Ya esiste un usuario registrado'})
        }
    }
    res.json({register: true})
}

export const login = async (req, res) => {

    try {
        const {email, password} = req.body

        let user = await User.findOne({email})
        if(!user) 
            return res.status(403).json({error: "No existe el usuario"})
            
        const respuestaPassword = await user.comparePassword(password)
            
        if(!respuestaPassword) 
            return res.status(403).json({error : "Contraseña incorrecta"})
        
        // Generar el token JWT
        const {token, expiresIn} = generateToken(user.id) ;
        generateRefreshToken(user.id, res)
        return res.json({token, expiresIn})
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: "Error del servidor"})
    }
}

export const infouser = async (req, res) => {
    try {

        // Con lean() se devuelve con un objeto simple y liviano sin datos de mongoose
        const user = await User.findById(req.uid).lean()
        return res.json({email:user.email, uid : user.id})
    } catch (error) {
        console.log(res.status(500).json({error : "error de server"}));
        
    }

    return res.json({corre: ' correo@correo.com'})
}

export const refreshToken = (req, res) => {
    try {

        const refreshTokenCookie = req.cookies.refreshToken;

        if(!refreshTokenCookie) throw new Error ('No existe token desde auth.controller.js')
        const {uid} = jwt.verify(refreshTokenCookie, process.env.JWT_REFRESH_TOKEN);
        
        const {token, expiresIn} = generateToken(uid);
        return res.json({token, expiresIn})

    } catch (error) {
        console.log(res.json({error : "error de server"}));
        // console.log(res.status(500).json({error : "error de server"}));
    }
}
