const clientController = require('../controllers/client.controller')
// setup an express router
const express = require('express')
const router = express.Router()

router.get('/', clientController.getClients)

router.get('/:id', clientController.getClientById)

router.post('/', clientController.addClient)

router.patch('/:id', clientController.editClient)

router.delete('/:id', clientController.deleteClient)

// export the router
module.exports = router