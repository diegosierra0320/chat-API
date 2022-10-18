// Esto va a contener las rutas de autorizacion y autenticacion
// 1. Login
// 2. Registrer
// 3. Recovery Password
// 4. Verify User


const router = require('express').Router()
const authServices = require('./auth.services')
const {registerUser} = require('../users/users.services')

// prefijo /api/v1/auth

router.post('/register', registerUser)
router.post('/login', authServices.login)

module.exports = router