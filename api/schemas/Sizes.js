const mongoose = require('mongoose')
const { Schema } = mongoose;

const SizesSchema = new Schema({
    height: { type: String, required: false },
    width: { type: String, required: false },
    length: { type: String, required: false },
},
{
    collection: 'sizes'
})

const Size = mongoose.model('Size', SizesSchema)
module.exports = Size