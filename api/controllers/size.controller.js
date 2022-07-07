const Size = require('../models/Sizes')

const getSizes = async (req, res) => {
    res.send(await Size.find())
}

const addSize = async (req, res) => {
    res.send(await Size.create({
        length: req.body.length,
        height: req.body.height,
        width: req.body.width
    }))
}

module.exports = { 
    getSizes,
    addSize
}