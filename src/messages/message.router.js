const router = require('express').Router()


const messageServices = require('./message.services')


router.route('/')
    .get(messageServices.getAllMessage)


    module.exports = router