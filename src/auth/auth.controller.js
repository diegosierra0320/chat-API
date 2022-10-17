// 
const { getUserByEmail } = require("../users/users.controllers")
const { comparePassword } = require('../utils/crypto')

const loginUser = async (email, password) => {
    //Este controller tiene dos posibles respuestas..
    //las credenciales son validas y retornan el usuario
    //Las credenciales son invalidas y retorna false
    try {
        const user = await getUserByEmail(email)
        //user.password contraseña encriptada en mi base de datos
        const verifyPassword = comparePassword(password, user.password)
        if(verifyPassword){
            return user
        }
        return false
    } catch (err) {
       return false
    }
}

// loginUser('diego.sierra0320@gmail.com', 'diego87032')
//     .then(response => console.log(response))
//     .catch(err => console.log(err))

module.exports = {
    loginUser
}