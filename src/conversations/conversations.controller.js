const uuid = require('uuid')
const Conversations = require('../models/conversations.model')
const Users = require('../models/users.models')


const getAllConversations = async () => {
    const data = await Conversations.findAll({
        include: [
            {
                model: Users,
                as: 'user',
                attributes: ['id', 'firstName', 'lastName', 'email']
            }
        ]
    })
    return data
}

const getConversationsById = async (id) => {
    const data = await Conversations.findOne({
        where: {
            id: id,
        }
    })
    return data
}

const getMyConversations = async (id) => {
    const data = await Conversations.findAll({
        where: {
            id: id,
        }
    })
    return data
}

const createConversation = async (data) => {
    const newConversation = await Conversations.create({
        id: uuid.v4(),
        title: data.title,
        imageUrl: data.imageUrl,
        userId: data.userId
    })
    return newConversation
}

const upDateConversation = async (id, data) => {
    const result = await Conversations.update(data, {
        where: {
            id: id,
        }
    })
    return result
}

const deleteConversation = async (id) => {
    const data = await Conversations.destroy({
        where: {
            id: id,
        }
    })
    return data
}


const getConversationsByUser = async (userId) => {
    const data = await Conversations.findAll({
        where: {
            userId
        }
    })
    return data
}


module.exports = {
    getAllConversations,
    getConversationsById,
    getMyConversations,
    createConversation,
    upDateConversation,
    deleteConversation,
    getConversationsByUser
}