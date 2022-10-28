const router = require('express').Router()
const passport = require('passport')


const conversationsServices = require('./conversations.services')
const messagesServices = require('../messages/message.services')

const { getMessageByConversation } = require('../messages/message.services')

require('../middlewares/auth.middleware')(passport)

// router.get('/', passport.authenticate('jwt', {session: false}), conversationsServices.getAllConversations)

router.route('/')
    .get(passport.authenticate('jwt', {session: false}), conversationsServices.getAllConversations)
    .post(conversationsServices.createConversation)

router.route('/:id')
    .get(passport.authenticate('jwt', {session: false}), conversationsServices.getConversationById)
    .patch(passport.authenticate('jwt', {session: false}), conversationsServices.patchConversation)
    .delete(passport.authenticate('jwt', {session: false}), conversationsServices.deleteConversation)

router.route('/:id/messages')
    .get(passport.authenticate('jwt', {session: false}), messagesServices.getMessageByConversation)
    .post(passport.authenticate('jwt', {session: false}), messagesServices.createMessage)


module.exports = router