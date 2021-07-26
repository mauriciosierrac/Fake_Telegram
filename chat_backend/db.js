const db = require('mongoose')

db.Promise = global.Promise

async function connect(url){    
    //conexion con db: 'mongodb+srv://user:mauriciosierrac@cluster0.cqmsv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('[db] conectada con exito')
}

module.exports = connect