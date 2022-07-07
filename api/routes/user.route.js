// setup an express router
const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller.js')

// Get Requests
router.get('/', userController.getUsers);

// Post Requests
router.post('/', userController.addUser);

// export the router
module.exports = router

