const Users = require('./users.models')
const Conversations = require('./conversations.model')
const Messages = require('./messages.model')
const Participants = require('./participants.model')

const initModels = () => {

    Conversations.belongsTo(Users)
    Users.hasMany(Conversations)
    
    Users.hasMany(Participants)
    Participants.belongsTo(Users)
    
    Users.hasMany(Messages)
    Messages.belongsTo(Users)
    
    Conversations.hasMany(Participants)
    Participants.belongsTo(Conversations)
    
    Conversations.hasMany(Messages)
    Messages.belongsTo(Conversations)
}


module.exports = initModels