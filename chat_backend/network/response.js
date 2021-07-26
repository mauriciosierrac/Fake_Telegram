const statusMessage = {
    '200': 'Done',
    '201': 'Created',
    '400': 'Invalid format',
    '500': 'Internal Error '
}

exports.success = function (req, res, message, status){
    let statusCode = status
    let statusMessage = message
    if(!status){
        status = 200
    }
    if(!message){
        statusMessage = statusMessage[status]
    }

    res.status(statusCode || 200).send({
        error: '',
        body: message
    })
}

exports.error = function (req, res, message, status){
    res.status(status || 500).send({
        error: message,
        body: ''
    })
}