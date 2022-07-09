// Front, Back, Sides, Garage, LeanTo

const DetermineBuildingType = (req, res) => {
    const buildingProperties = {
        front: req.body.front,
        back: req.body.back,
        sides: req.body.sides,
        garage: req.body.garage,
        leanTo: req.body.leanTo
    }
    
    if(buildingProperties.leanTo) {
        res.status(200).send('Barn')
    } else if ((buildingProperties.front || buildingProperties.back || buildingProperties.sides) && buildingProperties.garage) {
        res.status(200).send('Enclosed Garage')
    } else if (buildingProperties.front && buildingProperties.back && buildingProperties.sides && !buildingProperties.garage) {
        res.status(200).send('Workshop')
    } else if (!buildingProperties.front && !buildingProperties.back && !buildingProperties.sides) {
        res.status(200).send('Carport')
    }
}

module.exports = { DetermineBuildingType }