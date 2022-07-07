// setup an express router
const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

router.get('/', userController.getUsers);


// export the router
module.exports = router

