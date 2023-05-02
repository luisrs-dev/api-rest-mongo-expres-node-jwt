import jwt from 'jsonwebtoken'

export const generateToken = (uid) => {
    
    // 60 corresponde a 1 minuto y multiplicado por 15
    // 15 minutos duración de token
    const expiresIn = 60 * 15;

    try {
        const token = jwt.sign({uid}, process.env.JWT_SECRET, {expiresIn})
        return {token, expiresIn}
    } catch (error) {
        console.log(error);
    }
}

export const generateRefreshToken = (uid, res) => {
    // 60 minutos 
    const expiresIn = 60 * 60 * 24 * 30;
    try {
        const refreshToken = jwt.sign({uid}, process.env.JWT_REFRESH_TOKEN, {expiresIn});

        res.cookie("refreshToken", refreshToken, {  
            httpOnly : true,
            // secure : !(process.env.MODO == "develop"),
            expires : new Date(Date.now() + expiresIn * 1000),
            // sameSite: "none",
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const tokenVerificationErrors = {
    'invalid signatura' : "La firma del JWT no es válida",
    "jwt expired" : "JWT expirado",
    "invalid token" : "Token inválido",
    "No Bearer" : "Utiliza el formato Bearer",
    "jwt malformed" : "JWT formato no válido"
}