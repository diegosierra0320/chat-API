const router = require('express').Router()
const passport = require('passport')
const userServices = require('./users.services')
const adminValidate = require('../middlewares/role.middleware')
const { getConversationsByUser } = require('../conversations/conversations.services')

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
    .patch(passport.authenticate('jwt', {session: false}), adminValidate, userServices.patchUser)
    .delete(passport.authenticate('jwt', {session: false}), adminValidate, userServices.deleteUser)

// router.route('/:id/messages')
//     .get(passport.authenticate('jwt', {session: false}), messagesServices.getMessageByConversation)
//     .post(passport.authenticate('jwt', {session: false}), messagesServices.createMessage)


router.get('/:id/conversations', getConversationsByUser)


module.exports = router