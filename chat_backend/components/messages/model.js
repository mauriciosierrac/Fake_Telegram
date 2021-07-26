const mongoose = require('mongoose')

const Schema = mongoose.Schema

// a continuacion las dos formas de definir un dato en el schema, con la forma de message se pueden definir mas opcioones 

const mySchema = new Schema({
    chat: {
        type:Schema.ObjectId,
        ref: 'Chat'
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User',
    },
    message: {
        type: String,
        required: true,
    },
    date: Date,
    file: String,
})

const model = mongoose.model('Message', mySchema)

module.exports = model