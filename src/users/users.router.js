const router = require('express').Router()
const passport = require('passport')
const userServices = require('./users.services')

require('../middlewares/auth.middleware')(passport)

// Rutas raiz /users
// Para proteger rutas passport.authenticate('jwt', {session: false}),
router.get('/', userServices.getAllUsers)

// Rutas dinamicas por Id
// router.get('/users/:id', userServices.getUsersById)
// router.patch('/users/:id', userServices.getUsersById)
// router.get('/users/:id', userServices.getUsersById)
// router.get('/users/:id', userServices.getUsersById)

// Ruta de información propia del usuario loggeado
router.route('/me')
.get(passport.authenticate('jwt', {session: false}), userServices.getMyUser)
.patch(passport.authenticate('jwt', {session: false}), userServices.patchMyUser)
.delete(passport.authenticate('jwt', {session: false}), userServices.deleteMyUser)

router.route('/:id')
    .get(userServices.getUsersById)
    .patch(userServices.patchUser)
    .delete(userServices.deleteUser)


module.exports = router