const express = require('express')
const router = express.Router()
const sizeController = require('../controllers/size.controller')

router.get('/', sizeController.getSizes)

router.post('/', sizeController.addSize)


// export router
module.exports = router