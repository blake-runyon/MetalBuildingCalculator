const User = require('../models/User')

const Login = async ( req, res ) => {
    // TODO: Add encryption for password

    // Check if the user exists mongoose method
    const user = await User.findOne({ username: req.body.username })
    if(user == null) {
        res.status(400).send('User does not exist')
    } else if (user.password !== req.body.password) {
        res.status(400).send('Password is incorrect')
    } else {
        console.log(req.body.username + ' logged in')
        res.status(200).send({ token: '12345'})
    }
}

module.exports = { Login }