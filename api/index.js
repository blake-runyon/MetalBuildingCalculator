const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 8080
const conn = require('./connect')

app.use(cors())

app.use('/login', (req, res) => {
    res.send({
      token: 'test123'
    });
  });

const User = require('./schemas/User')
const Client = require('./schemas/Client');
const Size = require('./schemas/Sizes');

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