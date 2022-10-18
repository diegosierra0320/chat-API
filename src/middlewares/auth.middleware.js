//  Middleware  es para proteger rutas
// 1- Revisar si existe un token
// 2- Verificar si el token pertenece a un usuario valido
// 3- Modificar el request y agregar req.user con la informacion dessencriptada del token

const { jwtSecret } = require('../config');
const { getUsersById } = require('../users/users.controllers');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt= require('passport-jwt').ExtractJwt;


module.exports = (passport) => {
    const options = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
        secretOrKey: jwtSecret
    }

    console.log(jwtSecret);

    passport.use(
        new JwtStrategy(options, async(decoded, done) => {
            try {
                const response = await getUsersById(decoded.id);
                if(!response){
                    return done(null, false)
                }
                console.log('decoded JWT', decoded)
                return done(null, decoded)
            } catch (error){
                return done(error, false)
            }
        })
    )
}