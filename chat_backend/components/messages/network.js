const express = require('express')
const multer = require('multer')

const config = require('../../config')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

const upload = multer({
    dest: 'public/' + config.filesRoute + '/'
})

router.get('/', function (req, res) {
    const filterMessages = req.query.chat || null
    controller.getMessages(filterMessages)
    .then((messageList) => {
        response.success(req, res, messageList, 200)
    })
    .catch(e => {
        response.error(req, res, 'Unexpected error o.O', 500, e)
    })
})



router.post('/', upload.single('file'), function (req, res) {
    console.log(req.file)
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
    .then((fullMessage) => {
        response.success(req, res, fullMessage, 201)
    })
    .catch(e => {
        
        response.error(req, res, 'Informacion invalida', 400, 'Error en el controlador')
    })
})

router.patch('/:id', function(req, res){
    controller.updateMessage(req.params.id, req.body.message)
    .then((data) => {
        response.success(req, res, data, 200)
    })
    .catch(e => {
        response.error(req, res, 'Error interno', 500, e)
    })
})

router.delete('/:id', function(req, res){
    controller.deleteMessage(req.params.id)
    .then(() => {
        response.success(req, res, `Mensage con id: ${req.params.id} eliminado`, 200)
    })
    .catch(e => {
        response.error(req, res._construct, 'Error interno', 500)
    })
})

module.exports = router