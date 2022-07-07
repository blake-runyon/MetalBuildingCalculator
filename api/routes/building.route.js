// generate express router
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World')
})


// export express router
module.exports = router