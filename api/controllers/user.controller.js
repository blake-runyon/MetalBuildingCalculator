const User = require('../models/User')

const getUsers = async (req, res) => {
    const users = await User.find()

    if (!users) {
        res.status(404).send('No users found')
    } else {
        res.status(200).json(users)
    }
}

const addUser = async (req, res) => {
    res.send(await User.create({
        username: req.body.username, 
        email: req.body.email, 
        password: req.body.password
    }))
}


module.exports = { getUsers, addUser }