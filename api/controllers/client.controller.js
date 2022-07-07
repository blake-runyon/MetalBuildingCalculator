const Client = require('../models/Client')

const getClients = async (req, res) => {
    res.send(await Client.find())
}

const getClientById = async (req, res) => {
    res.send(await Client.findById(req.params.id))
}

const addClient = async (req, res) => {
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
}

const editClient = async (req, res) => {
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
}

const deleteClient = async (req, res) => {
    res.send(await Client.deleteOne({ _id: req.params.id }))
}
// export functions
module.exports = { 
    editClient, 
    getClients, 
    getClientById, 
    addClient,
    deleteClient
}