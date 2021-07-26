const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://user:mauriciosierrac@cluster0.cqmsv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    port: process.env.PORT || 4000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
    filesRoute: process.env.FILES_ROUTE || 'files'
}

module.exports = config