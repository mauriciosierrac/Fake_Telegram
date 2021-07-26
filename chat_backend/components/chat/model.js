const mongoose = require('mongoose')

const Schema = mongoose.Schema

// a continuacion las dos formas de definir un dato en el schema, con la forma de message se pueden definir mas opcioones 

const mySchema = new Schema({
    users: [
        {
            type: Schema.ObjectId,
            ref: 'User'
        }
    ]
})

const model = mongoose.model('Chat', mySchema)

module.exports = model