const router = require('express').Router()

const conversationsServices = require('./conversations.services')


router.route('/me')
    .get(conversationsServices.getMyConversation)
    .post(conversationsServices.createConversation)

router.route('/:id')
    .get(conversationsServices.getConversationById)
    .patch(conversationsServices.patchConversation)
    .delete(conversationsServices.deleteConversation)


module.exports = router