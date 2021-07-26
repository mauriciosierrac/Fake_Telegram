const mongoose = require('mongoose')

const Schema = mongoose.Schema

// a continuacion las dos formas de definir un dato en el schema, con la forma de message se pueden definir mas opcioones 

const mySchema = new Schema({
    name: String
})

const model = mongoose.model('User', mySchema)

module.exports = model