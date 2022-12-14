const conversationsControllers = require('./conversations.controller')


// /api/v1/conversations 

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

const getMyConversation = (req, res) => {
    const userId = req.user.id
    conversationsControllers.getMyConversations(userId)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })  
}


const createConversation = (req, res) => {

    // const userId = req.user.id
    const { title, userId } = req.body
    if( title && userId ){
        conversationsControllers.createConversation({
            title, userId
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
            userId: 'uuid'
        }})
    }
}

// /api/v1/conversations/:conversation_id

const patchConversation = (req, res) => {
    const id = req.params.id
    const { title, createdBy } = req.body

    conversationsControllers.upDateConversation(id, {
        title, createdBy
    })
    .then(data => {
        if(data[0]){
            res.status(200).json(data)
        } else {
            res.status(400).json({message: 'Invalid ID'})
        }
    })
    .catch(err => {
        res.status(400).json({message: err.message})
    })
}

const deleteConversation = (req, res) => {
    const id = req.params.id

    conversationsControllers.deleteConversation(id)
        .then((data) => {
            if (data) {
            res.status(204).json({message: 'Conversation successfully deleted'});
            } else {
            res.status(404).json({ message: "Invalid ID" });
            }
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
}

const getConversationsByUser = (req, res) => {
    const userId = req.params.id
    conversationsControllers.getConversationsByUser(userId)
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}


module.exports = {
    getAllConversations,
    getConversationById,
    getMyConversation,
    createConversation,
    patchConversation,
    deleteConversation,
    getConversationsByUser
}