const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 8080
const conn = require('./connect')

app.use(cors())

const User = require('./schemas/User')

app.get('/users', async (req, res) => {
    res.send(await User.find())
})

app.post('/add-user', async (req, res) => {
    res.send(await User.create({
        username: req.body.username, 
        email: req.body.email, 
        password: req.body.password
    }))
})

app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`)
})