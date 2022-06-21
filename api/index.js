const express = require('express')
const app = express()
const PORT = 8080
const conn = require('./connect')

const User = require('./schemas/User')
app.post('/', async (req, res) => {
    res.send(await User.create({
        username: "test", 
        email: "Bigger Test", 
        password: "Not Entering a plantext pass lol"
    }))
    
})

app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`)
})