const mongoose = require('mongoose')
const { Schema } = mongoose;

const ClientSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    address: {
        street: String,
        city: String,
        state: String,
        zipcode: String
    },
    quotes: {
        type: Array,
        required: false
    }
},
{
    collection: 'clients'
})

const Client = mongoose.model('Client', ClientSchema)
module.exports = Client