const uuid = require('uuid')
const Conversations = require('../models/conversations.model')
const Message = require('../models/messages.model')
const Users = require('../models/users.models')

const getAllMessage = async () => {
    const data = await Message.findAll({
        include: [
            {
                model: Users,
                as: 'user',
                attributes: ['id', 'firstName', 'lastName', 'email']
            },
            {
                model: Conversations,
                as: 'conversation',
                attributes: ['id', 'title']
            }
        ]
    })
    return data
}


const createMessage = async (data) => {
    const newMessage = await Message.create({
        id: uuid.v4(),
        userId: data.userId,
        conversationId: data.conversationId,
        message: data.message
    })
    return newMessage
}


const getMessageByConversation = async (conversationId) => {
    const data = await Message.findAll({
        where: {
            conversationId
        }
    })
    return data
}


module.exports = {
    getAllMessage,
    createMessage,
    getMessageByConversation
}