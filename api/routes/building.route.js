// generate express router
const express = require('express')
const router = express.Router()
const buildingController = require('../controllers/building.controller')

router.post('/', buildingController.DetermineBuildingType)


// export express router
module.exports = router