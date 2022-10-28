const messageControllers = require('./messages.controller')


const getAllMessage = (req, res) => {
    messageControllers.getAllMessage()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}


const createMessage = (req, res) => {
    const { userId, conversationId, message } = req.body

    if(userId && conversationId && message) {
        messageControllers.createMessage({
            userId, conversationId, message
        })
        .then((data) => {
            res.status(201).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
    } else {
        res.status(400).json({message: 'All fields must be completed', fields: {
            userId: 'string',
            conversationId: 'uuid',
            message: 'string'
        }})
    }
}


const getMessageByConversation = (req, res) => {
    const conversationId = req.params.id
    messageControllers.getMessageByConversation(conversationId)
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}


module.exports = {
    getAllMessage,
    createMessage,
    getMessageByConversation
}