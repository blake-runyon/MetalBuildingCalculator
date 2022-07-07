const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 8080
const conn = require('./connect')

app.use(cors())

app.use('/login', async (req, res) => {
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

  });

const User = require('./models/User')
const Client = require('./models/Client');
const Size = require('./models/Sizes');

const userRoute = require('./routes/user')

app.use('/users', userRoute)

app.post('/add-user', async (req, res) => {
    res.send(await User.create({
        username: req.body.username, 
        email: req.body.email, 
        password: req.body.password
    }))
})

app.get('/clients', async (req, res) => {
    res.send(await Client.find())
})

app.get('/client/:id', async (req, res) => {
    res.send(await Client.findById(req.params.id))
})

app.post('/add-client', async (req, res) => {
    res.send(await Client.create({
        name: req.body.name, 
        email: req.body.email, 
        phone: req.body.phone,
        address: {
            street: req.body.address.street,
            city: req.body.address.city,
            state: req.body.address.state,
            zipcode: req.body.address.zipcode
        }
    }))
})

app.patch('/edit-client/:id', async (req, res) => {
    const c = {
        name: req.body.name, 
        email: req.body.email, 
        phone: req.body.phone, 
        address: { 
            street: req.body.address.street, 
            city: req.body.address.city, 
            state: req.body.address.state, 
            zipcode: req.body.address.zipcode
        }
    }
    res.send(await Client.updateOne({ _id: req.params.id }, c))
})

app.delete('/delete-client/:id', async (req, res) => {
    res.send(await Client.deleteOne({ _id: req.params.id }))
})

app.get('/get-sizes', async (req, res) => {
    res.send(await Size.find())
})

app.post('/add-size', async (req, res) => {
    res.send(await Size.create({
        length: req.body.length,
        height: req.body.height,
        width: req.body.width
    }))
})


app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`)
})