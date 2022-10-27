const conversationsControllers = require('./conversations.controller')


const getAllConversations = (req, res) => {
    conversationsControllers.getAllConversations()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}


const getConversationById = (req, res) => {
    const id = req.params.id
    conversationsControllers.getConversationsById(id)
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}


const createConversation = (req, res) => {
    const { title, imageUrl, createdBy } = req.body
    if( title && createdBy ){
        conversationsControllers.createConversation({
            title, imageUrl, createdBy
        })
        .then((data) => {
            res.status(201).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
    } else {
        res.status(400).json({message: 'All fields must be completed', fields: {
            title: 'string',
            createdBy: 'uuid'
        }})
    }
}
