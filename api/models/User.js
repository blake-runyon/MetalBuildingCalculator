const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: String,
    email: String,
    password: String
},
{
    collection: 'users'
})

const User = mongoose.model('User', UserSchema)
module.exports = User