// esto es para encriptar y comparar contraseñas

const bcrypt = require('bcrypt')

// funcion para encriptar contraseña
const hashPassword = (plainPassword) => {
    return bcrypt.hashSync(plainPassword, 10)
}
// funcion para comparar contraseñas que recibimos desde el login y la comparamos contra la BD
// diego870320 => $2b$10$n.OiRfbuPifgm4KPO481a.0h2fwcqDo7JxfXms.CwBOKNWyfbRCpO
const comparePassword = (plainPassword, hashedPassword) => {
    return bcrypt.compareSync(plainPassword, hashedPassword)
}

// console.log(hashPassword('diego870320'));

// console.log(comparePassword('diego870320', '$2b$10$n.OiRfbuPifgm4KPO481a.0h2fwcqDo7JxfXms.CwBOKNWyfbRCpO'));

module.exports = {
    hashPassword,
    comparePassword
}