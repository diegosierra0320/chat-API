const { UUID } = require('sequelize')
const Conversations = require('../models/conversations.model')


const getAllConversations = async () => {
    const data = await Conversations.findAll()
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

const createConversation = async (data) => {
    const newConversation = await Conversations.create({
        id: UUID.v4(),
        title: data.title,
        imageUrl: data.imageUrl,
        createdBy: data.createdBy
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



module.exports = {
    getAllConversations,
    getConversationsById,
    createConversation,
    upDateConversation,
    deleteConversation
}